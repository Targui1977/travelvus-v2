"use client";

import { useState, useCallback } from "react";
import type { CalculationResult } from "@/lib/calculation-contract";
import { CalculationExperience } from "@/components/experience";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import styles from "./preview.module.css";

/* ── Props ────────────────────────────────────────────────── */

interface Props {
  result: CalculationResult;
  stepLabels: string[];
}

/* ── Verdict stats — clear labels, real values ────────────── */

function buildVerdictStats(result: CalculationResult) {
  const winnerName =
    result.winner === "A" ? result.optionA.name : result.optionB.name;
  const winnerCost =
    result.winner === "A" ? result.realCostA : result.realCostB;

  // Human-readable time: 175 min → "2h 55m"
  const hours = Math.floor(result.savingsTimeMinutes / 60);
  const mins = result.savingsTimeMinutes % 60;

  return {
    verdictLine: `${winnerName} wins.`,
    stats: [
      {
        label: "Real trip cost",
        value: String(winnerCost),
        unit: "€",
      },
      {
        label: "Money saved",
        value: String(result.savingsEuro),
        unit: "€",
        accent: true,
      },
      {
        label: "Time saved",
        value: String(hours),
        unit: `h ${mins}m`,
      },
    ] as [any, any, any],
  };
}

/* ── Explanation — narrative hierarchy ────────────────────── */

function ExplanationPreview({ result }: { result: CalculationResult }) {
  const winnerName =
    result.winner === "A" ? result.optionA.name : result.optionB.name;
  const loserName =
    result.winner === "A" ? result.optionB.name : result.optionA.name;
  const winnerCost =
    result.winner === "A" ? result.realCostA : result.realCostB;
  const loserCost =
    result.winner === "A" ? result.realCostB : result.realCostA;

  // Which assumption could flip the result
  const bagLineA = result.optionA.costLines[1];
  const flipAssumption =
    result.winner === "B" && bagLineA && bagLineA.amount > 0
      ? `Removing the checked bag from ${result.optionA.name} would save €${bagLineA.amount}.`
      : undefined;

  return (
    <div>
      {/* 1. Decisive reason — leads the explanation */}
      <div className={styles.expLead}>
        <span className={styles.expLeadKicker}>Why {winnerName} wins</span>
        <p className={styles.expLeadText}>
          {loserName}&rsquo;s ticket looks cheaper at €{result.optionA.visibleTicketPrice},
          but the <b>real journey</b> tells a different story. Once baggage
          and the airport transfer are added,{" "}
          <b>
            {winnerName} costs €{winnerCost} — €{result.savingsEuro} less
          </b>{" "}
          than {loserName}&rsquo;s €{loserCost} total. And it saves{" "}
          {result.savingsTimeLabel} door-to-door.
        </p>
      </div>

      {/* 2. Money + Time evidence — two cards, clear units */}
      <div className={styles.expEvidence}>
        <div className={styles.expEvidenceCard}>
          <span className={styles.expEvidenceLabel}>Real trip cost</span>
          <div className={styles.expEvidenceRows}>
            <div className={styles.expEvidenceRow}>
              <span className={styles.expEvidenceWho}>{winnerName}</span>
              <span className={styles.expEvidenceVal}>€{winnerCost}</span>
            </div>
            <div className={styles.expEvidenceRow}>
              <span className={styles.expEvidenceWho}>{loserName}</span>
              <span className={styles.expEvidenceValMuted}>€{loserCost}</span>
            </div>
          </div>
          <span className={styles.expEvidenceNote}>
            Ticket + baggage + seat + airport transfer
          </span>
        </div>

        <div className={styles.expEvidenceCard}>
          <span className={styles.expEvidenceLabel}>Door-to-door time</span>
          <div className={styles.expEvidenceRows}>
            <div className={styles.expEvidenceRow}>
              <span className={styles.expEvidenceWho}>{winnerName}</span>
              <span className={styles.expEvidenceVal}>
                {result.winner === "A"
                  ? result.optionA.doorToDoorLabel
                  : result.optionB.doorToDoorLabel}
              </span>
            </div>
            <div className={styles.expEvidenceRow}>
              <span className={styles.expEvidenceWho}>{loserName}</span>
              <span className={styles.expEvidenceValMuted}>
                {result.winner === "A"
                  ? result.optionB.doorToDoorLabel
                  : result.optionA.doorToDoorLabel}
              </span>
            </div>
          </div>
          <span className={styles.expEvidenceNote}>
            {winnerName} saves {result.savingsTimeLabel} · includes 90 min pre-flight buffer
          </span>
        </div>
      </div>

      {/* 3. What could change the result */}
      {flipAssumption && (
        <div className={styles.expFlip}>
          <span className={styles.expFlipLabel}>What could change the result</span>
          <p className={styles.expFlipText}>
            {flipAssumption} That would bring {result.optionA.name}&rsquo;s real cost
            to €{result.realCostA - bagLineA!.amount}, potentially changing the
            winner.
          </p>
        </div>
      )}

      {/* 4. Assumptions — collapsible */}
      <details className={styles.expAssumptions}>
        <summary className={styles.expAssumptionsSummary}>
          <span>5 calculation assumptions</span>
        </summary>
        <ul className={styles.expAssumptionsList}>
          {result.assumptions.map((a, i) => (
            <li key={i} className={styles.expAssumptionsItem}>
              {a}
            </li>
          ))}
        </ul>
      </details>

      {result.warnings.length > 0 && (
        <div className={styles.expWarnings}>
          {result.warnings.map((w, i) => (
            <p key={i} className={styles.expWarningItem}>
              {w}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main component ───────────────────────────────────────── */

export default function CascadePreviewClient({ result, stepLabels }: Props) {
  const [mode, setMode] = useState<"first" | "repeated" | "reduced">("first");
  const [key, setKey] = useState(0);
  const [started, setStarted] = useState(false);

  const verdictData = buildVerdictStats(result);

  const handleRestart = useCallback(
    (newMode: "first" | "repeated" | "reduced") => {
      setMode(newMode);
      setStarted(false);
      setKey((k) => k + 1);
    },
    []
  );

  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      {/* ── Header ── */}
      <HomeHeader />

      {/* ── Prototype label ── */}
      <div className={styles.protoLabel}>
        <span className={styles.protoLabelDot} />
        <span className={styles.protoLabelText}>
          Product Experience Preview
        </span>
        <span className={styles.protoLabelDot} />
      </div>

      {/* ═══ PREVIEW CONTROLS — visually separated QA panel ═══ */}
      <div className={styles.qaPanel}>
        <div className={styles.qaPanelInner}>
          <span className={styles.qaPanelTitle}>Preview Controls</span>
          <span className={styles.qaPanelScenario}>
            Berlin &rarr; Stansted (€58) vs Berlin &rarr; Heathrow (€126)
          </span>

          {!started ? (
            <div className={styles.qaPanelModes}>
              <button
                className={`${styles.qaModeBtn} ${
                  mode === "first" ? styles.qaModeBtnActive : ""
                }`}
                onClick={() => handleRestart("first")}
              >
                First calculation
                <span className={styles.qaModeBtnHint}>~3.6s</span>
              </button>
              <button
                className={`${styles.qaModeBtn} ${
                  mode === "repeated" ? styles.qaModeBtnActive : ""
                }`}
                onClick={() => handleRestart("repeated")}
              >
                Repeated
                <span className={styles.qaModeBtnHint}>~2.0s</span>
              </button>
              <button
                className={`${styles.qaModeBtn} ${
                  mode === "reduced" ? styles.qaModeBtnActive : ""
                }`}
                onClick={() => handleRestart("reduced")}
              >
                Reduced motion
                <span className={styles.qaModeBtnHint}>~0.1s</span>
              </button>
              <button className={styles.qaStartBtn} onClick={() => setStarted(true)}>
                Run cascade &rarr;
              </button>
            </div>
          ) : (
            <div className={styles.qaPanelModes}>
              <span className={styles.qaRunningLabel}>
                {mode === "first"
                  ? "First calculation"
                  : mode === "repeated"
                  ? "Repeated"
                  : "Reduced motion"}{" "}
                running
              </span>
              <button
                className={styles.qaRestartLink}
                onClick={() => handleRestart(mode)}
              >
                Run again
              </button>
              <button
                className={styles.qaBackLink}
                onClick={() => {
                  setStarted(false);
                  setKey((k) => k + 1);
                }}
              >
                Change mode
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ═══ PRODUCT STAGE — the actual user-facing experience ═══ */}
      <div className={styles.productStage}>
        {started && (
          <CalculationExperience
            key={key}
            result={result}
            stepLabels={stepLabels}
            isRepeated={mode === "repeated"}
            reducedMotion={mode === "reduced"}
            renderVerdict={() => (
              <TravelvusVerdict
                verdictLine={verdictData.verdictLine}
                stats={verdictData.stats}
              />
            )}
            renderExplanation={() => <ExplanationPreview result={result} />}
          />
        )}

        {!started && (
          <div className={styles.stageEmpty}>
            <span className={styles.stageEmptyMark}>&#9670;</span>
            <p className={styles.stageEmptyText}>
              Select a mode above and run the cascade to see the experience.
            </p>
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <footer className={styles.previewFooter}>
        <span>
          Internal preview &middot; not linked from public navigation
          &middot; noindex
        </span>
      </footer>
    </div>
  );
}
