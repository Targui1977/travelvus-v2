"use client";

import { useEffect, useCallback } from "react";
import styles from "./experience.module.css";

/* ── Props ────────────────────────────────────────────────── */

export interface SkipToVerdictProps {
  /** Whether skip is currently allowed */
  canSkip: boolean;
  /** Called when the user triggers a skip */
  onSkip: () => void;
  /** Called when the user presses Escape (for the parent to handle focus) */
}

/* ── Component ────────────────────────────────────────────── */

export default function SkipToVerdict({ canSkip, onSkip }: SkipToVerdictProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && canSkip) {
        e.preventDefault();
        onSkip();
      }
    },
    [canSkip, onSkip]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!canSkip) return null;

  return (
    <div className={styles.skipContainer}>
      <button
        className={styles.skipButton}
        onClick={onSkip}
        type="button"
        aria-label="Skip calculation and show result now"
      >
        Show result now
      </button>
      <span className={styles.skipHint} aria-hidden="true">
        or press Esc
      </span>
    </div>
  );
}
