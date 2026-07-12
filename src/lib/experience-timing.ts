/**
 * Travelvus V2 — Experience Timing Configuration
 *
 * Centralized, typed timing for the Calculation Cascade.
 * All durations live here. No millisecond values scattered across components.
 *
 * Phase 88.2 — Visual Prototype.
 */

import { STEP_IDS } from "./experience-state";

/* ── Types ─────────────────────────────────────────────────── */

export interface StepTiming {
  /** Duration this step spends in "computing" state (ms) */
  computingMs: number;
}

export interface CascadeTiming {
  /** Per-step computing durations, indexed by STEP_IDS */
  steps: Record<string, number>;
  /** Pause between last step resolving and verdict reveal (ms) */
  preVerdictPauseMs: number;
  /** Duration of the step-to-summary compression animation (ms) */
  stepCompressionMs: number;
  /** Target total duration range (ms) */
  totalTarget: { min: number; max: number };
}

/* ── First-run timing ──────────────────────────────────────── */

/**
 * Natural rhythm for first calculation.
 *
 * Step 1 (reading): brief — confirming input is fast
 * Steps 2-4 (baggage/transfer/time): moderate — data assembly
 * Step 5 (real cost): moderate — summation
 * Step 6 (comparing): deliberate — the decisive moment
 * Step 7 (verdict): short — anticipation, not computation
 */
const FIRST_RUN_STEPS: Record<string, number> = {
  reading_flight_details: 350,
  adding_baggage_and_extras: 450,
  calculating_airport_transfers: 500,
  measuring_journey_time: 450,
  calculating_real_cost: 500,
  comparing_journeys: 550,
  preparing_verdict: 400,
};

export const FIRST_RUN: CascadeTiming = {
  steps: FIRST_RUN_STEPS,
  preVerdictPauseMs: 500,
  stepCompressionMs: 400,
  totalTarget: { min: 3400, max: 4200 },
};

/* ── Repeated calculation timing ────────────────────────────── */

/**
 * Accelerated cascade for repeated calculations in the same session.
 * Preserves the sense of recalculation without forcing the full experience.
 */
const REPEATED_STEPS: Record<string, number> = {
  reading_flight_details: 180,
  adding_baggage_and_extras: 220,
  calculating_airport_transfers: 250,
  measuring_journey_time: 220,
  calculating_real_cost: 250,
  comparing_journeys: 280,
  preparing_verdict: 200,
};

export const REPEATED: CascadeTiming = {
  steps: REPEATED_STEPS,
  preVerdictPauseMs: 300,
  stepCompressionMs: 250,
  totalTarget: { min: 1800, max: 2600 },
};

/* ── Reduced motion ─────────────────────────────────────────── */

export const REDUCED_MOTION = {
  /** Delay before showing verdict (ms) */
  verdictDelayMs: 100,
  /** Target total (ms) */
  totalTarget: { min: 0, max: 900 },
} as const;

/* ── Helpers ────────────────────────────────────────────────── */

/** Get the computing duration for a step by its ID */
export function getStepDuration(
  stepId: string,
  timing: CascadeTiming
): number {
  return timing.steps[stepId] ?? 500; // safe default
}

/** Calculate total cascade duration (sum of all step computing durations + pre-verdict pause) */
export function totalCascadeMs(timing: CascadeTiming): number {
  return (
    STEP_IDS.reduce((sum, id) => sum + getStepDuration(id, timing), 0) +
    timing.preVerdictPauseMs
  );
}

/** Get the computing duration for step at given index */
export function getStepDurationByIndex(
  index: number,
  timing: CascadeTiming
): number {
  const id = STEP_IDS[index];
  return id ? getStepDuration(id, timing) : 500;
}

/* ── Validation ─────────────────────────────────────────────── */

/** Ensure all STEP_IDS have a timing entry */
export function validateTiming(timing: CascadeTiming): string[] {
  const missing: string[] = [];
  for (const id of STEP_IDS) {
    if (!(id in timing.steps)) {
      missing.push(id);
    }
  }
  return missing;
}

// Self-validate on import
const firstMissing = validateTiming(FIRST_RUN);
const repeatedMissing = validateTiming(REPEATED);
if (firstMissing.length > 0) {
  console.warn("FIRST_RUN timing missing steps:", firstMissing);
}
if (repeatedMissing.length > 0) {
  console.warn("REPEATED timing missing steps:", repeatedMissing);
}
