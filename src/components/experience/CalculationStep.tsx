"use client";

import type { StepStatus } from "@/lib/experience-state";
import styles from "./experience.module.css";

/* ── Props ────────────────────────────────────────────────── */

export interface CalculationStepProps {
  label: string;
  detail: string;
  status: StepStatus;
  valueA?: string;
  valueB?: string;
  evidenceNote?: string;
  isLast?: boolean;
}

/* ── Component ────────────────────────────────────────────── */

export default function CalculationStep({
  label,
  detail,
  status,
  valueA,
  valueB,
  evidenceNote,
  isLast,
}: CalculationStepProps) {
  const isResolved = status === "resolved";
  const isComputing = status === "computing";

  return (
    <div
      className={`${styles.step} ${isResolved ? styles.stepResolved : ""} ${
        isComputing ? styles.stepComputing : ""
      }`}
      aria-current={isComputing ? "step" : undefined}
    >
      {/* ── Indicator ── */}
      <div className={styles.stepIndicator}>
        <span
          className={`${styles.stepDot} ${
            isResolved
              ? styles.stepDotResolved
              : isComputing
              ? styles.stepDotComputing
              : styles.stepDotPending
          }`}
          aria-hidden="true"
        >
          {isResolved ? "✓" : isComputing ? "" : ""}
        </span>
      </div>

      {/* ── Content ── */}
      <div className={styles.stepContent}>
        <span className={styles.stepLabel}>{label}</span>

        {isComputing && (
          <span className={styles.stepDetail} aria-live="polite">
            {detail}
          </span>
        )}

        {isResolved && valueA !== undefined && (
          <span className={styles.stepValues}>
            {valueB !== undefined ? (
              <>
                <span className={styles.stepValue}>{valueA}</span>
                <span className={styles.stepValueSep}>·</span>
                <span className={styles.stepValue}>{valueB}</span>
              </>
            ) : (
              <span className={styles.stepValue}>{valueA}</span>
            )}
          </span>
        )}

        {isResolved && evidenceNote && (
          <span className={styles.stepEvidence}>{evidenceNote}</span>
        )}
      </div>

      {/* ── Connector ── */}
      {!isLast && (
        <div className={styles.stepConnector} aria-hidden="true">
          <span
            className={`${styles.stepConnectorLine} ${
              isResolved ? styles.stepConnectorLineActive : ""
            }`}
          />
        </div>
      )}
    </div>
  );
}
