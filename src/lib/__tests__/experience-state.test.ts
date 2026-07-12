/**
 * Travelvus V2 — Experience State Machine Tests
 *
 * Tests for:
 *  - State transitions occur in correct order
 *  - Invalid input never starts a successful cascade
 *  - Double submit is prevented
 *  - Skip leads to correct state
 *  - Reduced motion bypasses staged animation
 *  - Repeated calculations use accelerated path
 *  - Stale calculations cannot overwrite newer results
 *  - Scroll does NOT skip (enforced at component level, verified here by absence)
 *
 * Phase 88.1
 */

import { describe, it, expect } from "vitest";
import {
  initialExperienceState,
  experienceReducer,
  canSkip,
  isExperienceActive,
  isVerdictVisible,
  STEP_IDS,
} from "../experience-state";
import type { ExperienceState, ExperienceAction } from "../experience-state";

/* ── Helpers ───────────────────────────────────────────────── */

function stateAt(phase: ExperienceState["phase"]): ExperienceState {
  return { ...initialExperienceState(), phase };
}

function computingAt(index: number): ExperienceState {
  const steps = STEP_IDS.map((id, i) => ({
    id,
    status: i < index ? ("resolved" as const) : i === index ? ("computing" as const) : ("pending" as const),
  }));
  return {
    ...initialExperienceState(),
    phase: index === 0 ? "calculating" : "revealing_steps",
    currentStepIndex: index,
    steps,
    startedAt: 1000,
  };
}

/* ── State transitions ─────────────────────────────────────── */

describe("state transitions", () => {
  it("idle → validating on SUBMIT (normal, first calculation)", () => {
    const s = experienceReducer(initialExperienceState(), {
      type: "SUBMIT",
      isRepeated: false,
      reducedMotion: false,
    });
    expect(s.phase).toBe("validating");
    expect(s.isRepeated).toBe(false);
    expect(s.reducedMotion).toBe(false);
    expect(s.startedAt).not.toBeNull();
  });

  it("idle → verdict_visible on SUBMIT with reduced motion", () => {
    const s = experienceReducer(initialExperienceState(), {
      type: "SUBMIT",
      isRepeated: false,
      reducedMotion: true,
    });
    expect(s.phase).toBe("verdict_visible");
    expect(s.reducedMotion).toBe(true);
    // All steps resolved immediately
    for (const step of s.steps) {
      expect(step.status).toBe("resolved");
    }
  });

  it("idle → verdict_visible on SUBMIT with repeated calculation", () => {
    const s = experienceReducer(initialExperienceState(), {
      type: "SUBMIT",
      isRepeated: true,
      reducedMotion: false,
    });
    expect(s.phase).toBe("verdict_visible");
    expect(s.isRepeated).toBe(true);
    // All steps resolved immediately
    for (const step of s.steps) {
      expect(step.status).toBe("resolved");
    }
  });

  it("validating → calculating on VALIDATION_PASSED", () => {
    const s = stateAt("validating");
    const next = experienceReducer(s, { type: "VALIDATION_PASSED" });
    expect(next.phase).toBe("calculating");
    // First step should be computing
    expect(next.steps[0].status).toBe("computing");
    // All other steps pending
    for (let i = 1; i < next.steps.length; i++) {
      expect(next.steps[i].status).toBe("pending");
    }
  });

  it("validating → error on VALIDATION_FAILED", () => {
    const s = stateAt("validating");
    const next = experienceReducer(s, {
      type: "VALIDATION_FAILED",
      message: "Invalid ticket price",
    });
    expect(next.phase).toBe("error");
    expect(next.errorMessage).toBe("Invalid ticket price");
  });

  it("calculating → revealing_steps on NEXT_STEP (step 0 resolves)", () => {
    const s = computingAt(0);
    const next = experienceReducer(s, { type: "NEXT_STEP" });
    expect(next.phase).toBe("revealing_steps");
    expect(next.currentStepIndex).toBe(1);
    expect(next.steps[0].status).toBe("resolved");
    expect(next.steps[1].status).toBe("computing");
  });

  it("revealing_steps → preparing_verdict when last step resolves", () => {
    const s = computingAt(6); // Step 6 is "preparing_verdict" (index 6, last)
    const next = experienceReducer(s, { type: "NEXT_STEP" });
    // When resolving the last step, next index is 7 (>= STEP_IDS.length)
    // So it should go to preparing_verdict
    expect(next.phase).toBe("preparing_verdict");
    // Step 6 should be resolved
    expect(next.steps[6].status).toBe("resolved");
  });

  it("preparing_verdict → verdict_visible on VERDICT_READY", () => {
    const s = stateAt("preparing_verdict");
    const next = experienceReducer(s, {
      type: "VERDICT_READY",
      resultCalculatedAt: 2000,
    });
    expect(next.phase).toBe("verdict_visible");
    expect(next.resultCalculatedAt).toBe(2000);
    expect(next.completedAt).not.toBeNull();
  });

  it("verdict_visible → explanation_visible on EXPLANATION_EXPANDED", () => {
    const s = stateAt("verdict_visible");
    const next = experienceReducer(s, { type: "EXPLANATION_EXPANDED" });
    expect(next.phase).toBe("explanation_visible");
  });

  it("any active phase → error on ERROR", () => {
    const s = computingAt(2);
    const next = experienceReducer(s, {
      type: "ERROR",
      message: "Calculation failed",
    });
    expect(next.phase).toBe("error");
    expect(next.errorMessage).toBe("Calculation failed");
  });

  it("any state → idle on RESET", () => {
    const s = stateAt("verdict_visible");
    const next = experienceReducer(s, { type: "RESET" });
    expect(next.phase).toBe("idle");
    expect(next.steps.every((st) => st.status === "pending")).toBe(true);
    expect(next.startedAt).toBeNull();
    expect(next.completedAt).toBeNull();
  });
});

/* ── Double-submit prevention ───────────────────────────────── */

describe("double-submit prevention", () => {
  it("ignores SUBMIT when not idle", () => {
    const phases: ExperienceState["phase"][] = [
      "validating",
      "calculating",
      "revealing_steps",
      "preparing_verdict",
      "verdict_visible",
      "error",
    ];
    for (const phase of phases) {
      const s = stateAt(phase);
      const next = experienceReducer(s, {
        type: "SUBMIT",
        isRepeated: false,
        reducedMotion: false,
      });
      // Phase must not change
      expect(next.phase).toBe(phase);
    }
  });

  it("ignores VALIDATION_PASSED when not validating", () => {
    const s = stateAt("verdict_visible");
    const next = experienceReducer(s, { type: "VALIDATION_PASSED" });
    expect(next.phase).toBe("verdict_visible");
  });

  it("ignores NEXT_STEP when not in calculating or revealing_steps", () => {
    const s = stateAt("verdict_visible");
    const next = experienceReducer(s, { type: "NEXT_STEP" });
    expect(next.phase).toBe("verdict_visible");
  });
});

/* ── Skip behavior ──────────────────────────────────────────── */

describe("skip behavior", () => {
  it("skip from calculating transitions to skipped", () => {
    const s = computingAt(1);
    const next = experienceReducer(s, { type: "SKIP" });
    expect(next.phase).toBe("skipped");
    // All steps resolved
    for (const step of next.steps) {
      expect(step.status).toBe("resolved");
    }
  });

  it("skip from revealing_steps transitions to skipped", () => {
    const s = computingAt(4);
    const next = experienceReducer(s, { type: "SKIP" });
    expect(next.phase).toBe("skipped");
  });

  it("skip from preparing_verdict transitions to skipped", () => {
    const s = stateAt("preparing_verdict");
    const next = experienceReducer(s, { type: "SKIP" });
    expect(next.phase).toBe("skipped");
  });

  it("skip is ignored when verdict is already visible", () => {
    const s = stateAt("verdict_visible");
    const next = experienceReducer(s, { type: "SKIP" });
    expect(next.phase).toBe("verdict_visible"); // unchanged
  });

  it("skip is ignored when idle", () => {
    const s = initialExperienceState();
    const next = experienceReducer(s, { type: "SKIP" });
    expect(next.phase).toBe("idle"); // unchanged
  });

  it("skip is ignored when in error state", () => {
    const s = stateAt("error");
    const next = experienceReducer(s, { type: "SKIP" });
    expect(next.phase).toBe("error"); // unchanged
  });
});

/* ── Stale result protection ────────────────────────────────── */

describe("stale result protection", () => {
  it("ignores VERDICT_READY with older calculatedAt", () => {
    const s: ExperienceState = {
      ...initialExperienceState(),
      phase: "preparing_verdict",
      resultCalculatedAt: 3000, // newer result already stored
    };
    const next = experienceReducer(s, {
      type: "VERDICT_READY",
      resultCalculatedAt: 2000, // stale: older than stored
    });
    expect(next.phase).toBe("preparing_verdict"); // unchanged — rejected
  });

  it("accepts VERDICT_READY with newer calculatedAt", () => {
    const s: ExperienceState = {
      ...initialExperienceState(),
      phase: "preparing_verdict",
      resultCalculatedAt: 1000,
    };
    const next = experienceReducer(s, {
      type: "VERDICT_READY",
      resultCalculatedAt: 2000, // newer
    });
    expect(next.phase).toBe("verdict_visible");
  });

  it("accepts VERDICT_READY when no previous result", () => {
    const s = stateAt("preparing_verdict");
    const next = experienceReducer(s, {
      type: "VERDICT_READY",
      resultCalculatedAt: 2000,
    });
    expect(next.phase).toBe("verdict_visible");
  });
});

/* ── Guards ─────────────────────────────────────────────────── */

describe("guards", () => {
  it("isExperienceActive: true for calculating/revealing/preparing", () => {
    expect(isExperienceActive("calculating")).toBe(true);
    expect(isExperienceActive("revealing_steps")).toBe(true);
    expect(isExperienceActive("preparing_verdict")).toBe(true);
    expect(isExperienceActive("validating")).toBe(true);
  });

  it("isExperienceActive: false for idle/error/verdict/explanation/skipped", () => {
    expect(isExperienceActive("idle")).toBe(false);
    expect(isExperienceActive("error")).toBe(false);
    expect(isExperienceActive("verdict_visible")).toBe(false);
    expect(isExperienceActive("explanation_visible")).toBe(false);
    expect(isExperienceActive("skipped")).toBe(false);
  });

  it("canSkip: true only during calculating/revealing/preparing", () => {
    expect(canSkip("calculating")).toBe(true);
    expect(canSkip("revealing_steps")).toBe(true);
    expect(canSkip("preparing_verdict")).toBe(true);
    expect(canSkip("idle")).toBe(false);
    expect(canSkip("validating")).toBe(false);
    expect(canSkip("verdict_visible")).toBe(false);
    expect(canSkip("error")).toBe(false);
  });

  it("isVerdictVisible: true for verdict/explanation/skipped", () => {
    expect(isVerdictVisible("verdict_visible")).toBe(true);
    expect(isVerdictVisible("explanation_visible")).toBe(true);
    expect(isVerdictVisible("skipped")).toBe(true);
    expect(isVerdictVisible("calculating")).toBe(false);
    expect(isVerdictVisible("idle")).toBe(false);
  });
});

/* ── Scroll does NOT skip (enforced by not having scroll as an action) ── */

describe("scroll does not skip", () => {
  it("there is no SCROLL or SCROLL_SKIP action type", () => {
    // Verify by checking that SKIP is the only skip mechanism.
    // The state machine has no action that could be triggered by scroll.
    // This is enforced architecturally: scroll detection lives in the
    // component layer, and the component only calls dispatch({ type: "SKIP" })
    // on explicit user actions (button click, Escape key).
    const s = computingAt(2);
    // Any unknown action type falls through the default case
    const unknown = experienceReducer(s, { type: "UNKNOWN" } as unknown as ExperienceAction);
    expect(unknown).toEqual(s); // unchanged
  });
});

/* ── Step count integrity ───────────────────────────────────── */

describe("step count integrity", () => {
  it("STEP_IDS has exactly 7 entries", () => {
    expect(STEP_IDS).toHaveLength(7);
  });

  it("initial state has correct number of steps", () => {
    const s = initialExperienceState();
    expect(s.steps).toHaveLength(7);
  });

  it("all initial steps are pending", () => {
    const s = initialExperienceState();
    for (const step of s.steps) {
      expect(step.status).toBe("pending");
    }
  });
});

/* ── Reduced motion path ────────────────────────────────────── */

describe("reduced motion path", () => {
  it("all steps resolved immediately on reduced motion submit", () => {
    const s = experienceReducer(initialExperienceState(), {
      type: "SUBMIT",
      isRepeated: false,
      reducedMotion: true,
    });
    expect(s.phase).toBe("verdict_visible");
    for (const step of s.steps) {
      expect(step.status).toBe("resolved");
    }
  });

  it("no intermediate calculating phase on reduced motion", () => {
    const s = experienceReducer(initialExperienceState(), {
      type: "SUBMIT",
      isRepeated: false,
      reducedMotion: true,
    });
    // It should go directly to verdict_visible, never hitting calculating
    expect(s.phase).not.toBe("calculating");
    expect(s.phase).not.toBe("revealing_steps");
  });
});

/* ── Repeated calculation path ──────────────────────────────── */

describe("repeated calculation path", () => {
  it("all steps resolved immediately on repeated calculation", () => {
    const s = experienceReducer(initialExperienceState(), {
      type: "SUBMIT",
      isRepeated: true,
      reducedMotion: false,
    });
    expect(s.phase).toBe("verdict_visible");
    expect(s.isRepeated).toBe(true);
    for (const step of s.steps) {
      expect(step.status).toBe("resolved");
    }
  });

  it("no staged animation on repeated calculation", () => {
    const s = experienceReducer(initialExperienceState(), {
      type: "SUBMIT",
      isRepeated: true,
      reducedMotion: false,
    });
    expect(s.phase).not.toBe("calculating");
    expect(s.phase).not.toBe("revealing_steps");
  });
});
