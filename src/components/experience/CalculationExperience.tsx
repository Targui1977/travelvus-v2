"use client";

import { useReducer, useCallback, useRef, useEffect, useState } from "react";
import type { CalculationResult } from "@/lib/calculation-contract";
import {
  initialExperienceState,
  experienceReducer,
  STEP_IDS,
  isExperienceActive,
  canSkip,
  isVerdictVisible,
} from "@/lib/experience-state";
import {
  FIRST_RUN,
  REPEATED,
  REDUCED_MOTION,
  getStepDurationByIndex,
} from "@/lib/experience-timing";
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

  // Select timing based on mode
  const timing = reducedMotion ? null : isRepeated ? REPEATED : FIRST_RUN;

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStartedRef = useRef(false);
  const completeCalledRef = useRef(false);

  // Phase tracking for CSS transitions
  const [compressing, setCompressing] = useState(false);
  const [verdictEntering, setVerdictEntering] = useState(false);
  const prevPhaseRef = useRef(state.phase);

  /* ── Start the experience ──────────────────────────────── */

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    dispatch({ type: "SUBMIT", isRepeated, reducedMotion });

    // Reduced motion: show verdict nearly instantly
    if (reducedMotion) {
      const tid = setTimeout(() => {
        dispatch({
          type: "VERDICT_READY",
          resultCalculatedAt: result.calculatedAt,
        });
        if (onComplete && !completeCalledRef.current) {
          completeCalledRef.current = true;
          onComplete();
        }
      }, REDUCED_MOTION.verdictDelayMs);
      return () => clearTimeout(tid);
    }

    // Normal/repeated: validation passes immediately, cascade begins
    dispatch({ type: "VALIDATION_PASSED" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Step cascade timer with natural rhythm ─────────────── */

  useEffect(() => {
    if (!isExperienceActive(state.phase)) return;
    if (!timing) return; // reduced motion — no cascade

    // Start the first step timer
    if (state.phase === "calculating" && state.currentStepIndex === 0) {
      const duration = getStepDurationByIndex(0, timing);
      timerRef.current = setTimeout(() => {
        dispatch({ type: "NEXT_STEP" });
      }, duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.phase, state.currentStepIndex, timing]);

  /* ── Continue cascade after each step resolves ──────────── */

  useEffect(() => {
    if (state.phase !== "revealing_steps") return;
    if (!timing) return;

    const idx = state.currentStepIndex;

    // If all steps complete, transition to preparing_verdict
    if (idx >= STEP_IDS.length) {
      dispatch({ type: "ALL_STEPS_COMPLETE" });
      return;
    }

    // Schedule the next step with its specific duration
    const duration = getStepDurationByIndex(idx, timing);
    timerRef.current = setTimeout(() => {
      dispatch({ type: "NEXT_STEP" });
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.phase, state.currentStepIndex, timing]);

  /* ── Step compression → preparing verdict → verdict ready ─ */

  useEffect(() => {
    if (state.phase !== "preparing_verdict") return;

    // Start compression animation
    setCompressing(true);

    const compressionMs = timing?.stepCompressionMs ?? 0;
    const pauseMs = timing?.preVerdictPauseMs ?? 500;

    timerRef.current = setTimeout(() => {
      setVerdictEntering(true);

      timerRef.current = setTimeout(() => {
        dispatch({
          type: "VERDICT_READY",
          resultCalculatedAt: result.calculatedAt,
        });
        if (onComplete && !completeCalledRef.current) {
          completeCalledRef.current = true;
          onComplete();
        }
      }, pauseMs);
    }, compressionMs);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.phase, result.calculatedAt, timing]); // eslint-disable-line react-hooks/exhaustive-deps

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
    setCompressing(true);

    dispatch({ type: "SKIP" });

    // After brief compression, show verdict
    setTimeout(() => {
      setVerdictEntering(true);
      dispatch({
        type: "VERDICT_READY",
        resultCalculatedAt: result.calculatedAt,
      });
      onSkipProp?.();
      if (onComplete && !completeCalledRef.current) {
        completeCalledRef.current = true;
        onComplete();
      }
    }, 250);
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
    state.phase === "preparing_verdict" ||
    state.phase === "skipped";
  const showVerdict = isVerdictVisible(state.phase);
  const showExplanation =
    state.phase === "explanation_visible" || state.phase === "skipped";
  const isCompressed =
    state.phase === "preparing_verdict" ||
    state.phase === "skipped" ||
    showVerdict;
  const isVerdictEntering = verdictEntering || showVerdict;

  // Guard: idle or validating
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

  // Guard: error
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
        <div
          className={`${styles.stepsArea} ${
            compressing ? styles.stepsAreaCompressing : ""
          }`}
        >
          <CalculationStepList stages={result.stages} stepStates={state.steps} />
        </div>
      )}

      {/* ── Steps summary ribbon ── */}
      {isCompressed && (
        <div
          className={`${styles.summaryRibbon} ${
            compressing ? styles.summaryRibbonEnter : ""
          }`}
        >
          <span className={styles.summaryText}>
            7 journey factors checked
          </span>
          {result.warnings.length > 0 && (
            <span className={styles.summaryWarning}>
              {result.warnings.length} note
              {result.warnings.length > 1 ? "s" : ""}
            </span>
          )}
          <button
            className={styles.summaryExpand}
            type="button"
            aria-label="View calculation steps"
            onClick={() => setCompressing(false)}
          >
            View steps
          </button>
        </div>
      )}

      {/* ── Verdict ── */}
      {isVerdictEntering && (
        <div
          ref={verdictRef}
          className={`${styles.verdictArea} ${
            verdictEntering && !showVerdict
              ? styles.verdictEntering
              : showVerdict
              ? styles.verdictVisible
              : ""
          }`}
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
