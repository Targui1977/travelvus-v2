/**
 * Travelvus V2 — Experience Timing Tests
 *
 * Phase 88.2
 */

import { describe, it, expect } from "vitest";
import {
  FIRST_RUN,
  REPEATED,
  REDUCED_MOTION,
  getStepDuration,
  getStepDurationByIndex,
  totalCascadeMs,
  validateTiming,
} from "../experience-timing";
import { STEP_IDS } from "../experience-state";

/* ── Timing config integrity ───────────────────────────────── */

describe("FIRST_RUN timing", () => {
  it("has timing entries for all 7 steps", () => {
    const missing = validateTiming(FIRST_RUN);
    expect(missing).toHaveLength(0);
  });

  it("total cascade is within target range", () => {
    const total = totalCascadeMs(FIRST_RUN);
    expect(total).toBeGreaterThanOrEqual(FIRST_RUN.totalTarget.min);
    expect(total).toBeLessThanOrEqual(FIRST_RUN.totalTarget.max);
  });

  it("each step duration is reasonable (200-800ms)", () => {
    for (const id of STEP_IDS) {
      const dur = getStepDuration(id, FIRST_RUN);
      expect(dur).toBeGreaterThanOrEqual(200);
      expect(dur).toBeLessThanOrEqual(800);
    }
  });

  it("step 1 (reading) is brief — recognition is fast", () => {
    const d1 = getStepDuration("reading_flight_details", FIRST_RUN);
    const d6 = getStepDuration("comparing_journeys", FIRST_RUN);
    expect(d1).toBeLessThan(d6); // reading < comparing
  });

  it("step 6 (comparing) is the longest — decisive moment", () => {
    const durations = STEP_IDS.map((id) => getStepDuration(id, FIRST_RUN));
    const max = Math.max(...durations);
    expect(getStepDuration("comparing_journeys", FIRST_RUN)).toBe(max);
  });

  it("step 7 (preparing verdict) is short — anticipation, not computation", () => {
    const d7 = getStepDuration("preparing_verdict", FIRST_RUN);
    expect(d7).toBeLessThanOrEqual(500);
  });
});

describe("REPEATED timing", () => {
  it("has timing entries for all 7 steps", () => {
    const missing = validateTiming(REPEATED);
    expect(missing).toHaveLength(0);
  });

  it("total cascade is within target range", () => {
    const total = totalCascadeMs(REPEATED);
    expect(total).toBeGreaterThanOrEqual(REPEATED.totalTarget.min);
    expect(total).toBeLessThanOrEqual(REPEATED.totalTarget.max);
  });

  it("each repeated step is faster than its first-run counterpart", () => {
    for (const id of STEP_IDS) {
      const first = getStepDuration(id, FIRST_RUN);
      const repeated = getStepDuration(id, REPEATED);
      expect(repeated).toBeLessThan(first);
    }
  });

  it("total repeated cascade is faster than first-run", () => {
    expect(totalCascadeMs(REPEATED)).toBeLessThan(totalCascadeMs(FIRST_RUN));
  });

  it("each repeated step duration is reasonable (100-350ms)", () => {
    for (const id of STEP_IDS) {
      const dur = getStepDuration(id, REPEATED);
      expect(dur).toBeGreaterThanOrEqual(100);
      expect(dur).toBeLessThanOrEqual(350);
    }
  });

  it("preserves the same rhythm shape (comparing is still longest)", () => {
    const durations = STEP_IDS.map((id) => getStepDuration(id, REPEATED));
    const max = Math.max(...durations);
    expect(getStepDuration("comparing_journeys", REPEATED)).toBe(max);
  });
});

describe("REDUCED_MOTION", () => {
  it("verdict delay is within target", () => {
    expect(REDUCED_MOTION.verdictDelayMs).toBeGreaterThanOrEqual(
      REDUCED_MOTION.totalTarget.min
    );
    expect(REDUCED_MOTION.verdictDelayMs).toBeLessThanOrEqual(
      REDUCED_MOTION.totalTarget.max
    );
  });

  it("verdict delay is very short (≤150ms)", () => {
    expect(REDUCED_MOTION.verdictDelayMs).toBeLessThanOrEqual(150);
  });
});

/* ── Helpers ────────────────────────────────────────────────── */

describe("getStepDuration", () => {
  it("returns correct duration for known step", () => {
    const dur = getStepDuration("reading_flight_details", FIRST_RUN);
    expect(dur).toBe(FIRST_RUN.steps.reading_flight_details);
  });

  it("returns fallback (500ms) for unknown step", () => {
    const dur = getStepDuration("unknown_step", FIRST_RUN);
    expect(dur).toBe(500);
  });
});

describe("getStepDurationByIndex", () => {
  it("returns correct duration for index 0", () => {
    const dur = getStepDurationByIndex(0, FIRST_RUN);
    expect(dur).toBe(FIRST_RUN.steps.reading_flight_details);
  });

  it("returns correct duration for index 6 (last step)", () => {
    const dur = getStepDurationByIndex(6, FIRST_RUN);
    expect(dur).toBe(FIRST_RUN.steps.preparing_verdict);
  });

  it("returns fallback for out-of-range index", () => {
    const dur = getStepDurationByIndex(99, FIRST_RUN);
    expect(dur).toBe(500);
  });
});

describe("validateTiming", () => {
  it("returns empty for complete timing", () => {
    expect(validateTiming(FIRST_RUN)).toHaveLength(0);
    expect(validateTiming(REPEATED)).toHaveLength(0);
  });

  it("returns missing step IDs for incomplete timing", () => {
    const incomplete = { ...FIRST_RUN, steps: { reading_flight_details: 350 } };
    const missing = validateTiming(incomplete);
    expect(missing.length).toBeGreaterThan(0);
    expect(missing).not.toContain("reading_flight_details");
    expect(missing).toContain("adding_baggage_and_extras");
  });
});
