"use client";

import { useReducer, useCallback, useRef, useEffect } from "react";
import type { CalculationResult } from "@/lib/calculation-contract";
import {
  initialExperienceState,
  experienceReducer,
  STEP_IDS,
  isExperienceActive,
  canSkip,
  isVerdictVisible,
} from "@/lib/experience-state";
import CalculationStepList from "./CalculationStepList";
import SkipToVerdict from "./SkipToVerdict";
import ExperienceStatus from "./ExperienceStatus";
import styles from "./experience.module.css";

/* ── Props ────────────────────────────────────────────────── */

export interface CalculationExperienceProps {
  /** The pre-computed calculation result from the server */
  result: CalculationResult;
  /** The canonical step labels (indexed 0-6, matching STEP_IDS) */
  stepLabels: string[];
  /** Whether this is a repeated calculation in the same session */
  isRepeated?: boolean;
  /** Whether reduced motion is preferred */
  reducedMotion?: boolean;
  /** Called when the experience completes (all steps resolved, verdict visible) */
  onComplete?: () => void;
  /** Called when the user skips */
  onSkip?: () => void;
  /** The verdict component to render (injected by the parent) */
  renderVerdict: () => React.ReactNode;
  /** The explanation content below the verdict (injected by the parent) */
  renderExplanation: () => React.ReactNode;
}

/* ── Step timing ──────────────────────────────────────────── */

/** Duration each step stays in "computing" state (ms) */
const STEP_COMPUTING_DURATION = 500;

/** Duration between step completion and next step (ms) */
const STEP_GAP_DURATION = 150;

/** Total per step: 650ms. For 7 steps: ~4.55s */

/* ── Component ────────────────────────────────────────────── */

export default function CalculationExperience({
  result,
  stepLabels,
  isRepeated = false,
  reducedMotion = false,
  onComplete,
  onSkip: onSkipProp,
  renderVerdict,
  renderExplanation,
}: CalculationExperienceProps) {
  const [state, dispatch] = useReducer(
    experienceReducer,
    initialExperienceState()
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStartedRef = useRef(false);
  const completeCalledRef = useRef(false);

  /* ── Start the experience ──────────────────────────────── */

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    dispatch({ type: "SUBMIT", isRepeated, reducedMotion });

    // If reduced motion or repeated: skip directly to verdict
    if (reducedMotion || isRepeated) {
      const tid = setTimeout(() => {
        dispatch({ type: "VERDICT_READY", resultCalculatedAt: result.calculatedAt });
        if (onComplete && !completeCalledRef.current) {
          completeCalledRef.current = true;
          onComplete();
        }
      }, 100);
      return () => clearTimeout(tid);
    }

    // Start normal cascade: validation passes immediately
    dispatch({ type: "VALIDATION_PASSED" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Step cascade timer ─────────────────────────────────── */

  useEffect(() => {
    // Only run the cascade during active calculation phases
    if (!isExperienceActive(state.phase)) return;

    // Start the first step timer
    if (state.phase === "calculating" && state.currentStepIndex === 0) {
      timerRef.current = setTimeout(() => {
        dispatch({ type: "NEXT_STEP" });
      }, STEP_COMPUTING_DURATION);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.phase, state.currentStepIndex]);

  /* ── Continue cascade after each step resolves ──────────── */

  useEffect(() => {
    if (state.phase !== "revealing_steps") return;

    const idx = state.currentStepIndex;

    // If all steps complete, transition to preparing_verdict
    if (idx >= STEP_IDS.length) {
      dispatch({ type: "ALL_STEPS_COMPLETE" });
      return;
    }

    // Schedule the next step
    timerRef.current = setTimeout(() => {
      dispatch({ type: "NEXT_STEP" });
    }, STEP_COMPUTING_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.phase, state.currentStepIndex]);

  /* ── Preparing verdict → verdict ready ──────────────────── */

  useEffect(() => {
    if (state.phase !== "preparing_verdict") return;

    // Brief anticipation pause, then reveal
    timerRef.current = setTimeout(() => {
      dispatch({ type: "VERDICT_READY", resultCalculatedAt: result.calculatedAt });
      if (onComplete && !completeCalledRef.current) {
        completeCalledRef.current = true;
        onComplete();
      }
    }, 800);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.phase, result.calculatedAt]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Cleanup on unmount ─────────────────────────────────── */

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  /* ── Skip handler ───────────────────────────────────────── */

  const handleSkip = useCallback(() => {
    if (!canSkip(state.phase)) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    dispatch({ type: "SKIP" });

    // After skip animation, show verdict
    setTimeout(() => {
      dispatch({ type: "VERDICT_READY", resultCalculatedAt: result.calculatedAt });
      onSkipProp?.();
      if (onComplete && !completeCalledRef.current) {
        completeCalledRef.current = true;
        onComplete();
      }
    }, 300);
  }, [state.phase, result.calculatedAt, onSkipProp, onComplete]);

  /* ── Focus verdict headline ─────────────────────────────── */

  const verdictRef = useRef<HTMLDivElement>(null);

  const handleVerdictAnnounce = useCallback(() => {
    verdictRef.current?.focus({ preventScroll: true });
  }, []);

  /* ── Render ─────────────────────────────────────────────── */

  const showSkip = canSkip(state.phase);
  const showSteps =
    state.phase === "calculating" ||
    state.phase === "revealing_steps" ||
    state.phase === "preparing_verdict";
  const showVerdict = isVerdictVisible(state.phase);
  const showExplanation =
    state.phase === "explanation_visible" || state.phase === "skipped";
  const showSummary =
    state.phase === "preparing_verdict" ||
    state.phase === "verdict_visible" ||
    state.phase === "explanation_visible" ||
    state.phase === "skipped";

  // Guard: if still idle or validating, show minimal loading state
  if (state.phase === "idle" || state.phase === "validating") {
    return (
      <div className={styles.container}>
        <ExperienceStatus
          phase={state.phase}
          steps={state.steps}
          stepLabels={stepLabels}
          errorMessage={state.errorMessage}
        />
      </div>
    );
  }

  // Guard: error state
  if (state.phase === "error") {
    return (
      <div className={styles.container}>
        <div className={styles.errorState} role="alert">
          <p className={styles.errorMessage}>
            {state.errorMessage ?? "An unexpected error occurred."}
          </p>
          <button
            className={styles.errorRetry}
            onClick={() => dispatch({ type: "RESET" })}
            type="button"
          >
            Try again
          </button>
        </div>
        <ExperienceStatus
          phase={state.phase}
          steps={state.steps}
          stepLabels={stepLabels}
          errorMessage={state.errorMessage}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* ── Skip control ── */}
      <SkipToVerdict canSkip={showSkip} onSkip={handleSkip} />

      {/* ── Calculation steps ── */}
      {showSteps && (
        <div className={styles.stepsArea}>
          <CalculationStepList stages={result.stages} stepStates={state.steps} />
        </div>
      )}

      {/* ── Steps summary ribbon ── */}
      {showSummary && (
        <div className={styles.summaryRibbon}>
          <span className={styles.summaryText}>
            {result.stages.filter(
              (_, i) => state.steps[i]?.status === "resolved"
            ).length}{" "}
            of {result.stages.length} factors checked
          </span>
          {result.warnings.length > 0 && (
            <span className={styles.summaryWarning}>
              {result.warnings.length} note{result.warnings.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
      )}

      {/* ── Verdict ── */}
      {showVerdict && (
        <div
          ref={verdictRef}
          className={styles.verdictArea}
          tabIndex={-1}
          aria-label="Travelvus Verdict"
        >
          {renderVerdict()}
        </div>
      )}

      {/* ── Explanation area ── */}
      {showExplanation && (
        <div className={styles.explanationArea}>{renderExplanation()}</div>
      )}

      {/* ── Screen reader announcements ── */}
      <ExperienceStatus
        phase={state.phase}
        steps={state.steps}
        stepLabels={stepLabels}
        errorMessage={state.errorMessage}
        onVerdictAnnounce={handleVerdictAnnounce}
      />
    </div>
  );
}
