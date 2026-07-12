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

/* ── Verdict stats adapter ────────────────────────────────── */

function buildVerdictStats(result: CalculationResult) {
  const winnerName =
    result.winner === "A"
      ? result.optionA.name
      : result.optionB.name;

  return {
    verdictLine: `${winnerName} — wins.`,
    stats: [
      {
        label: "Real trip cost",
        value: String(
          result.winner === "A" ? result.realCostA : result.realCostB
        ),
        unit: "€",
      },
      {
        label: "Money saved",
        value: String(result.savingsEuro),
        unit: "€",
        accent: true,
      },
      {
        label: "Journey time",
        value:
          result.winner === "A"
            ? `${result.savingsTimeMinutes} min faster`
            : `${result.savingsTimeMinutes} min faster`,
      },
    ] as [any, any, any],
  };
}

/* ── Explanation content ──────────────────────────────────── */

function ExplanationPreview({ result }: { result: CalculationResult }) {
  const winnerName =
    result.winner === "A"
      ? result.optionA.name
      : result.optionB.name;
  const loserName =
    result.winner === "A"
      ? result.optionB.name
      : result.optionA.name;

  const decisiveFactor =
    Math.abs(result.savingsEuro) >= 20
      ? "cost"
      : "time";

  // Which assumption could flip the result
  const flipAssumption =
    result.winner === "B" && result.optionA.costLines[1]?.amount > 0
      ? `Removing the checked bag from ${result.optionA.name} would save €${result.optionA.costLines[1].amount} — potentially changing the winner`
      : result.winner === "A"
      ? `If ${result.optionB.name}'s transfer were €${result.savingsEuro + 5} cheaper, the result could flip`
      : undefined;

  return (
    <div>
      <h2 className={styles.expTitle}>Why {winnerName} wins</h2>

      <p className={styles.expWhy}>
        {decisiveFactor === "cost" ? (
          <>
            <b>{loserName}&rsquo;s cheaper ticket</b> doesn&rsquo;t survive the
            real journey. Once baggage and the airport transfer are counted,{" "}
            <b>{winnerName} becomes the better deal by €{result.savingsEuro}</b>{" "}
            — and saves {result.savingsTimeLabel} door-to-door.
          </>
        ) : (
          <>
            Both options are close on cost, but{" "}
            <b>{winnerName} saves {result.savingsTimeLabel}</b> door-to-door.
            When the money difference is this small, time decides.
          </>
        )}
      </p>

      <div className={styles.expGrid}>
        <div className={styles.expCard}>
          <span className={styles.expCardLabel}>Money saved</span>
          <span className={styles.expCardValue}>
            <span className="accent">€{result.savingsEuro}</span>
          </span>
          <span className={styles.expCardNote}>
            Real cost: {result.optionA.name} €{result.realCostA} ·{" "}
            {result.optionB.name} €{result.realCostB}
          </span>
        </div>

        <div className={styles.expCard}>
          <span className={styles.expCardLabel}>Journey time</span>
          <span className={styles.expCardValue}>
            {result.savingsTimeLabel}
          </span>
          <span className={styles.expCardNote}>
            {result.optionA.name} {result.optionA.doorToDoorLabel} ·{" "}
            {result.optionB.name} {result.optionB.doorToDoorLabel}
          </span>
        </div>

        <div className={styles.expCard}>
          <span className={styles.expCardLabel}>Decisive factor</span>
          <span className={styles.expCardValue}>
            {decisiveFactor === "cost" ? "Real cost" : "Journey time"}
          </span>
          <span className={styles.expCardNote}>
            {decisiveFactor === "cost"
              ? `The €${result.savingsEuro} gap outweighs the time difference`
              : `${result.savingsTimeLabel} faster makes the difference`}
          </span>
        </div>

        <div className={styles.expCard}>
          <span className={styles.expCardLabel}>Confidence</span>
          <span className={styles.expCardValue}>
            {result.isSupported ? "Strong" : "Estimate"}
          </span>
          <span className={styles.expCardNote}>
            {result.isSupported
              ? "Verified TfL + National Rail data"
              : "Limited transfer data for this pair"}
          </span>
        </div>
      </div>

      {flipAssumption && (
        <div className={styles.expFlip}>
          <span className={styles.expFlipLabel}>What could change the result</span>
          <p className={styles.expFlipText}>{flipAssumption}.</p>
        </div>
      )}

      <div className={styles.expAssumptions}>
        <span className={styles.expAssumptionsTitle}>Assumptions</span>
        <ul className={styles.expAssumptionsList}>
          {result.assumptions.map((a, i) => (
            <li key={i} className={styles.expAssumptionsItem}>
              {a}
            </li>
          ))}
        </ul>
      </div>

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

  const handleRestart = useCallback((newMode: "first" | "repeated" | "reduced") => {
    setMode(newMode);
    setStarted(false);
    setKey((k) => k + 1);
  }, []);

  const handleStart = useCallback(() => {
    setStarted(true);
  }, []);

  return (
    <div style={{ background: "#F4F1EA", color: "#1E2A33", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", background: "#F4F1EA" }}>
        {/* ── Header ── */}
        <HomeHeader />

        {/* ── Prototype label ── */}
        <div className={styles.protoLabel}>
          <span className={styles.protoLabelDot} />
          <span className={styles.protoLabelText}>
            Product Experience Preview — Calculation Cascade Prototype
          </span>
          <span className={styles.protoLabelDot} />
        </div>

        {/* ── Scenario info ── */}
        <div className={styles.scenarioInfo}>
          <span className={styles.scenarioKicker}>Demo scenario</span>
          <span className={styles.scenarioText}>
            Berlin → Stansted (€58) vs Berlin → Heathrow (€126)
          </span>
        </div>

        {/* ── Mode controls ── */}
        {!started && (
          <div className={styles.controls}>
            <span className={styles.controlsLabel}>Select experience mode:</span>
            <div className={styles.controlsRow}>
              <button
                className={`${styles.controlBtn} ${mode === "first" ? styles.controlBtnActive : ""}`}
                onClick={() => handleRestart("first")}
              >
                First calculation
                <span className={styles.controlBtnHint}>~3.8s</span>
              </button>
              <button
                className={`${styles.controlBtn} ${mode === "repeated" ? styles.controlBtnActive : ""}`}
                onClick={() => handleRestart("repeated")}
              >
                Repeated calc
                <span className={styles.controlBtnHint}>~2.2s</span>
              </button>
              <button
                className={`${styles.controlBtn} ${mode === "reduced" ? styles.controlBtnActive : ""}`}
                onClick={() => handleRestart("reduced")}
              >
                Reduced motion
                <span className={styles.controlBtnHint}>~0.1s</span>
              </button>
            </div>
            <button className={styles.startBtn} onClick={handleStart}>
              Run Calculation Cascade →
            </button>
          </div>
        )}

        {/* ── Calculation Experience ── */}
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
            onComplete={() => {
              // Experience complete
            }}
          />
        )}

        {/* ── Restart ── */}
        {started && (
          <div className={styles.restartArea}>
            <button
              className={styles.restartBtn}
              onClick={() => handleRestart(mode)}
            >
              Run again
            </button>
            <button
              className={styles.restartBtnSecondary}
              onClick={() => {
                setStarted(false);
                setKey((k) => k + 1);
              }}
            >
              Back to mode selection
            </button>
          </div>
        )}

        {/* ── Footer ── */}
        <footer className={styles.previewFooter}>
          <span>Internal preview — not linked from public navigation</span>
        </footer>
      </div>
    </div>
  );
}
