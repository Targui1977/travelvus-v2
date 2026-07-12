"use client";

import { useEffect, useRef } from "react";
import type { ExperiencePhase, StepState } from "@/lib/experience-state";

/* ── Props ────────────────────────────────────────────────── */

export interface ExperienceStatusProps {
  phase: ExperiencePhase;
  steps: StepState[];
  /** Human-readable step labels (indexed by step order, 0-6) */
  stepLabels: string[];
  errorMessage: string | null;
  /** Called when the verdict announcement should move focus */
  onVerdictAnnounce?: () => void;
}

/* ── Screen-reader-only announcements ─────────────────────── */

function buildAnnouncement(
  phase: ExperiencePhase,
  steps: StepState[],
  stepLabels: string[],
  errorMessage: string | null
): string | null {
  if (phase === "error" && errorMessage) {
    return `Error: ${errorMessage}`;
  }

  if (phase === "skipped") {
    return "Skipping to verdict.";
  }

  if (phase === "preparing_verdict") {
    return "All calculations complete. Preparing your Travelvus Verdict.";
  }

  if (phase === "verdict_visible") {
    return "Travelvus Verdict ready. Scroll down for the full breakdown.";
  }

  // Find the most recent change
  const computingIdx = steps.findIndex((s) => s.status === "computing");
  if (computingIdx >= 0 && computingIdx < stepLabels.length) {
    return `Calculating: ${stepLabels[computingIdx]}.`;
  }

  // Find the most recently resolved step
  for (let i = steps.length - 1; i >= 0; i--) {
    if (steps[i].status === "resolved") {
      const label = stepLabels[i] ?? `Step ${i + 1}`;
      return `${label} complete.`;
    }
  }

  return null;
}

/* ── Component ────────────────────────────────────────────── */

export default function ExperienceStatus({
  phase,
  steps,
  stepLabels,
  errorMessage,
  onVerdictAnnounce,
}: ExperienceStatusProps) {
  const prevAnnouncement = useRef<string | null>(null);

  const announcement = buildAnnouncement(phase, steps, stepLabels, errorMessage);

  useEffect(() => {
    if (announcement && announcement !== prevAnnouncement.current) {
      prevAnnouncement.current = announcement;

      // Focus verdict headline when verdict appears
      if (phase === "verdict_visible" && onVerdictAnnounce) {
        // Small delay to let the DOM update
        const tid = setTimeout(() => onVerdictAnnounce(), 100);
        return () => clearTimeout(tid);
      }
    }
  }, [announcement, phase, onVerdictAnnounce]);

  return (
    <>
      {/* Polite region: step-by-step progress */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {announcement}
      </div>

      {/* Assertive region: verdict + errors */}
      <div
        aria-live="assertive"
        aria-atomic="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {phase === "verdict_visible"
          ? "Travelvus Verdict ready."
          : phase === "error"
          ? errorMessage
          : ""}
      </div>
    </>
  );
}
