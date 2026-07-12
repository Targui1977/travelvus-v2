/**
 * Travelvus V2 — Experience State Machine
 *
 * Deterministic state machine for the Calculation Cascade experience.
 * Separates experience state from business logic.
 * No React, no side effects, pure reducer pattern.
 *
 * Phase 88.1 — Foundation.
 * Phase 88.2 — Fixed: repeated calc no longer jumps to verdict_visible.
 *             Timing is controlled by the component layer, not the reducer.
 */

/* ── States ───────────────────────────────────────────────── */

export type ExperiencePhase =
  | "idle"
  | "validating"
  | "calculating"
  | "revealing_steps"
  | "preparing_verdict"
  | "verdict_visible"
  | "explanation_visible"
  | "error"
  | "skipped";

/* ── Step sub-state ───────────────────────────────────────── */

export type StepStatus = "pending" | "computing" | "resolved";

export interface StepState {
  id: string;
  status: StepStatus;
}

/* ── Core state shape ─────────────────────────────────────── */

export interface ExperienceState {
  phase: ExperiencePhase;

  /** Current step index in the cascade (0-6). Only meaningful during calculating/revealing_steps */
  currentStepIndex: number;

  /** Status of each of the 7 steps */
  steps: StepState[];

  /** Whether this is a repeated calculation in the same session */
  isRepeated: boolean;

  /** Whether reduced motion is preferred */
  reducedMotion: boolean;

  /** Error message if phase === "error" */
  errorMessage: string | null;

  /** When the calculation began (epoch ms). Used to detect stale results. */
  startedAt: number | null;

  /** When the calculation completed (epoch ms) */
  completedAt: number | null;

  /** The calculatedAt value from the CalculationResult. Guards against stale data. */
  resultCalculatedAt: number | null;
}

/* ── Actions ──────────────────────────────────────────────── */

export type ExperienceAction =
  | { type: "SUBMIT"; isRepeated: boolean; reducedMotion: boolean }
  | { type: "VALIDATION_PASSED" }
  | { type: "VALIDATION_FAILED"; message: string }
  | { type: "NEXT_STEP" }
  | { type: "ALL_STEPS_COMPLETE" }
  | { type: "VERDICT_READY"; resultCalculatedAt: number }
  | { type: "EXPLANATION_EXPANDED" }
  | { type: "SKIP" }
  | { type: "ERROR"; message: string }
  | { type: "RESET" };

/* ── Initial state ────────────────────────────────────────── */

export const STEP_IDS = [
  "reading_flight_details",
  "adding_baggage_and_extras",
  "calculating_airport_transfers",
  "measuring_journey_time",
  "calculating_real_cost",
  "comparing_journeys",
  "preparing_verdict",
] as const;

export function initialExperienceState(): ExperienceState {
  return {
    phase: "idle",
    currentStepIndex: 0,
    steps: STEP_IDS.map((id) => ({ id, status: "pending" })),
    isRepeated: false,
    reducedMotion: false,
    errorMessage: null,
    startedAt: null,
    completedAt: null,
    resultCalculatedAt: null,
  };
}

/* ── Reducer ──────────────────────────────────────────────── */

/**
 * Pure reducer. Given current state and an action, returns the next state.
 * No side effects. No async. Deterministic.
 */
export function experienceReducer(
  state: ExperienceState,
  action: ExperienceAction
): ExperienceState {
  switch (action.type) {
    case "SUBMIT": {
      if (state.phase !== "idle") {
        // Prevent double-submit: ignore SUBMIT unless idle
        return state;
      }
      // Reduced motion: skip straight to verdict_visible (no animation)
      if (action.reducedMotion) {
        return {
          ...state,
          phase: "verdict_visible",
          currentStepIndex: STEP_IDS.length,
          steps: state.steps.map((s) => ({ ...s, status: "resolved" as const })),
          isRepeated: action.isRepeated,
          reducedMotion: true,
          errorMessage: null,
          startedAt: Date.now(),
        };
      }
      // All other submissions (first-run + repeated): go through the full cascade.
      // Timing (normal vs accelerated) is controlled by the component layer,
      // not by the reducer. The reducer is timing-agnostic.
      return {
        ...state,
        phase: "validating",
        currentStepIndex: 0,
        steps: state.steps.map((s) => ({ ...s, status: "pending" as const })),
        isRepeated: action.isRepeated,
        reducedMotion: false,
        errorMessage: null,
        startedAt: Date.now(),
      };
    }

    case "VALIDATION_PASSED": {
      if (state.phase !== "validating") return state;
      return {
        ...state,
        phase: "calculating",
        steps: state.steps.map((s, i) =>
          i === 0 ? { ...s, status: "computing" as const } : s
        ),
      };
    }

    case "VALIDATION_FAILED": {
      return {
        ...state,
        phase: "error",
        errorMessage: action.message,
      };
    }

    case "NEXT_STEP": {
      if (state.phase !== "calculating" && state.phase !== "revealing_steps")
        return state;

      const currentIdx = state.currentStepIndex;

      // Mark current step as resolved
      const updatedSteps = state.steps.map((s, i) =>
        i === currentIdx ? { ...s, status: "resolved" as const } : s
      );

      const nextIdx = currentIdx + 1;

      // If this was the last step, transition to preparing_verdict
      if (nextIdx >= STEP_IDS.length) {
        return {
          ...state,
          phase: "preparing_verdict",
          steps: updatedSteps,
        };
      }

      // Mark next step as computing
      const stepsWithNext = updatedSteps.map((s, i) =>
        i === nextIdx ? { ...s, status: "computing" as const } : s
      );

      return {
        ...state,
        phase: "revealing_steps",
        currentStepIndex: nextIdx,
        steps: stepsWithNext,
      };
    }

    case "ALL_STEPS_COMPLETE": {
      return {
        ...state,
        phase: "preparing_verdict",
        steps: state.steps.map((s) => ({ ...s, status: "resolved" as const })),
      };
    }

    case "VERDICT_READY": {
      // Guard: reject stale results
      if (
        state.resultCalculatedAt !== null &&
        action.resultCalculatedAt < state.resultCalculatedAt
      ) {
        return state; // Stale — ignore
      }
      return {
        ...state,
        phase: "verdict_visible",
        completedAt: Date.now(),
        resultCalculatedAt: action.resultCalculatedAt,
      };
    }

    case "EXPLANATION_EXPANDED": {
      if (state.phase !== "verdict_visible") return state;
      return {
        ...state,
        phase: "explanation_visible",
      };
    }

    case "SKIP": {
      // Skip from any active phase directly to verdict_visible
      // Only valid during calculation phases
      if (
        state.phase !== "calculating" &&
        state.phase !== "revealing_steps" &&
        state.phase !== "preparing_verdict"
      ) {
        return state;
      }
      return {
        ...state,
        phase: "skipped",
        steps: state.steps.map((s) => ({ ...s, status: "resolved" as const })),
        currentStepIndex: STEP_IDS.length,
        completedAt: Date.now(),
      };
    }

    case "ERROR": {
      return {
        ...state,
        phase: "error",
        errorMessage: action.message,
      };
    }

    case "RESET": {
      return initialExperienceState();
    }

    default:
      return state;
  }
}

/* ── Guards ───────────────────────────────────────────────── */

/** Is the experience actively running (not idle, error, or fully revealed)? */
export function isExperienceActive(phase: ExperiencePhase): boolean {
  return (
    phase === "validating" ||
    phase === "calculating" ||
    phase === "revealing_steps" ||
    phase === "preparing_verdict"
  );
}

/** Can the user skip right now? */
export function canSkip(phase: ExperiencePhase): boolean {
  return (
    phase === "calculating" ||
    phase === "revealing_steps" ||
    phase === "preparing_verdict"
  );
}

/** Is the verdict visible to the user? */
export function isVerdictVisible(phase: ExperiencePhase): boolean {
  return (
    phase === "verdict_visible" ||
    phase === "explanation_visible" ||
    phase === "skipped"
  );
}
