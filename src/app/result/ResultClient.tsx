"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { calcRealCost, monetaryWinner, detectChange, estimateThreshold } from "@/lib/decision-engine";
import { deriveEditorial, deriveContextStrip, deriveChangedConsequence } from "@/lib/derive-content";
import type { CostLine, OptionResult, OptionId, FullResultData } from "@/lib/types";
import type { CalculationResult } from "@/lib/calculation-contract";
import type { CostLineDisplay, CostColumnDisplay } from "@/components/result/RealCost";
import { buildDecisionContext } from "@/lib/interactive/interactive-decision-context";
import { buildInteractiveDecisionOutcome } from "@/lib/interactive/interactive-decision-outcome";
import RecommendationEvidence from "@/components/visual/RecommendationEvidence";
import DecisionIntelligence from "@/components/visual/DecisionIntelligence";
import { RealCost, DoorToDoor, VerdictChangedBanner, RobustnessNote } from "@/components/result";
import { CalculationExperience } from "@/components/experience";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import Signature from "@/components/ui/Signature";
import styles from "./page.module.css";

/* ── Helpers ────────────────────────────────────────────── */

function buildCol(
  opt: OptionResult,
  overrides: {
    isWinner?: boolean;
    isUnchanged?: boolean;
    oldRealCost?: number;
    editedLineIndex?: number;
    oldLineAmount?: number;
  } = {}
): CostColumnDisplay {
  const lines: CostLineDisplay[] = opt.costLines.map((l, i) => {
    if (i === overrides.editedLineIndex && overrides.oldLineAmount !== undefined) {
      return { ...l, oldAmount: overrides.oldLineAmount };
    }
    return { ...l };
  });

  return {
    name: opt.name,
    code: opt.code,
    visibleTicketPrice: opt.visibleTicketPrice,
    costLines: lines,
    realCost: opt.realCost,
    isWinner: overrides.isWinner,
    isUnchanged: overrides.isUnchanged,
    oldRealCost: overrides.oldRealCost,
  };
}

/** Build verdict stats for TravelvusVerdict from engine data */
function buildVerdictStats(
  optionA: OptionResult,
  optionB: OptionResult,
  winner: OptionId | "tie"
) {
  const winnerOpt = winner === "A" ? optionA : optionB;
  const loserOpt = winner === "A" ? optionB : optionA;
  const savingsEuro = Math.abs(optionA.realCost - optionB.realCost);
  const savingsMin = Math.abs(optionA.doorToDoorMinutes - optionB.doorToDoorMinutes);
  const h = Math.floor(savingsMin / 60);
  const m = savingsMin % 60;

  return {
    verdictLine: `${winnerOpt.name} wins.`,
    stats: [
      { label: "Real trip cost", value: String(winnerOpt.realCost), unit: "€" },
      { label: "Money saved", value: String(savingsEuro), unit: "€", accent: true },
      { label: "Time saved", value: String(h), unit: `h ${m}m` },
    ] as [any, any, any],
  };
}

/* ── Props ───────────────────────────────────────────────── */

interface ResultClientProps {
  initialOptionA: OptionResult;
  initialOptionB: OptionResult;
  initialVerdict: FullResultData["verdict"];
  initialSupported: boolean;
  isDemo: boolean;
  initialDataRef: FullResultData;
  calculationResult: CalculationResult;
  stepLabels: string[];
}

/* ── Explanation (shown after verdict during cascade) ────── */

function CascadeExplanation({
  optionA, optionB, winner, isSupported, result,
}: {
  optionA: OptionResult;
  optionB: OptionResult;
  winner: OptionId | "tie";
  isSupported: boolean;
  result: CalculationResult;
}) {
  const winnerOpt = winner === "A" ? optionA : optionB;
  const loserOpt = winner === "A" ? optionB : optionA;
  const savingsEuro = Math.abs(optionA.realCost - optionB.realCost);

  return (
    <div style={{ padding: "0" }}>
      <p style={{
        fontFamily: "var(--serif)", fontWeight: 400, fontSize: 17, lineHeight: 1.55,
        color: "var(--ink)", maxWidth: 580, margin: "0 0 18px",
      }}>
        {loserOpt.name}&rsquo;s ticket looks cheaper at €{loserOpt.visibleTicketPrice},
        but once baggage and the airport transfer are counted,{" "}
        <b style={{ fontFamily: "var(--sans)", fontWeight: 600 }}>
          {winnerOpt.name} costs €{winnerOpt.realCost} — €{savingsEuro} less
        </b>{" "}
        than {loserOpt.name}&rsquo;s €{loserOpt.realCost} total.
        {result.savingsTimeMinutes > 0 && (
          <> And it saves {result.savingsTimeLabel} door-to-door.</>
        )}
      </p>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18,
      }}>
        <div style={{
          background: "var(--card)", border: "1px solid var(--line)",
          borderRadius: "var(--radius-card)", padding: "16px 18px",
        }}>
          <span style={{
            fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9,
            letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)",
            display: "block", marginBottom: 10,
          }}>Real trip cost</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, color: "var(--ink)" }}>{winnerOpt.name}</span>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, color: "var(--ink)" }}>€{winnerOpt.realCost}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, color: "var(--ink)" }}>{loserOpt.name}</span>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 18, color: "var(--grey)" }}>€{loserOpt.realCost}</span>
            </div>
          </div>
          <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)" }}>
            Ticket + baggage + seat + airport transfer
          </span>
        </div>

        <div style={{
          background: "var(--card)", border: "1px solid var(--line)",
          borderRadius: "var(--radius-card)", padding: "16px 18px",
        }}>
          <span style={{
            fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9,
            letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)",
            display: "block", marginBottom: 10,
          }}>Door-to-door time</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, color: "var(--ink)" }}>{winnerOpt.name}</span>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, color: "var(--ink)" }}>{winnerOpt.doorToDoorLabel}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, color: "var(--ink)" }}>{loserOpt.name}</span>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 18, color: "var(--grey)" }}>{loserOpt.doorToDoorLabel}</span>
            </div>
          </div>
          <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)" }}>
            {winnerOpt.name} saves {result.savingsTimeLabel} · includes 90 min buffer
          </span>
        </div>
      </div>

      {!isSupported && result.warnings.length > 0 && (
        <div style={{
          background: "var(--paper-2)", borderRadius: 10, padding: "12px 16px",
          fontFamily: "var(--sans)", fontSize: 12, color: "var(--copper)", lineHeight: 1.45, marginBottom: 16,
        }}>
          {result.warnings[0]}
        </div>
      )}

      <details style={{
        background: "transparent", border: "1px solid var(--line)",
        borderRadius: "var(--radius-card)", padding: 0,
      }}>
        <summary style={{
          fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11,
          color: "var(--muted)", padding: "12px 18px", cursor: "pointer",
          listStyle: "none", display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 13, color: "var(--copper)" }}>+</span>
          5 calculation assumptions
        </summary>
        <ul style={{
          listStyle: "none", margin: 0, padding: "0 18px 14px 38px",
          display: "flex", flexDirection: "column", gap: 3,
        }}>
          {result.assumptions.map((a, i) => (
            <li key={i} style={{
              fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.45, color: "var(--muted)",
            }}>{a}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */

export default function ResultClient({
  initialOptionA,
  initialOptionB,
  initialVerdict,
  initialSupported,
  isDemo,
  initialDataRef: d,
  calculationResult,
  stepLabels,
}: ResultClientProps) {
  /* ── Cascade state ─────────────────────────────────────── */
  const [cascadeComplete, setCascadeComplete] = useState(false);

  /* ── Edit state ────────────────────────────────────────── */
  const [optionA, setOptionA] = useState<OptionResult>(initialOptionA);
  const [optionB, setOptionB] = useState<OptionResult>(initialOptionB);
  const [showEdit, setShowEdit] = useState(false);
  const [bagRemoved, setBagRemoved] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [changedState, setChangedState] = useState<{
    cause: string;
    consequence: string;
    previousWinner: OptionId;
    newWinner: OptionId | "tie";
  } | null>(null);

  /* Derived */
  const baseA = initialOptionA;
  const winner = monetaryWinner(optionA.realCost, optionB.realCost);
  const isChanged = changedState !== null;
  const isEditedUnchanged = bagRemoved && !isChanged;

  /* ── Actions ─────────────────────────────────────────── */

  const removeBag = useCallback(() => {
    const oldA = { ...optionA, realCost: calcRealCost(optionA.costLines) };
    const oldB = { ...optionB, realCost: calcRealCost(optionB.costLines) };

    const newLines: CostLine[] = optionA.costLines.map((l, i) =>
      i === 1
        ? { ...l, amount: 0, isIncluded: true, label: "Checked bag — removed" }
        : l
    );
    const newA: OptionResult = {
      ...optionA,
      costLines: newLines,
      realCost: calcRealCost(newLines),
    };

    const change = detectChange(oldA, oldB, newA, oldB);

    setOptionA(newA);
    setBagRemoved(true);
    setShowEdit(false);

    if (change) {
      setChangedState({
        cause: change.cause,
        consequence: deriveChangedConsequence(change.newWinner, newA.realCost, oldB.realCost),
        previousWinner: change.previousWinner,
        newWinner: change.newWinner,
      });
    }
  }, [optionA, optionB]);

  const undo = useCallback(() => {
    setOptionA({ ...initialOptionA });
    setOptionB({ ...initialOptionB });
    setChangedState(null);
    setBagRemoved(false);
  }, [initialOptionA, initialOptionB]);

  const keep = useCallback(() => {
    setChangedState(null);
  }, []);

  /* ── Derived dynamic content ────────────────────────── */
  const editorial = useMemo(() => deriveEditorial(optionA, optionB), [optionA, optionB]);
  const contextStrip = useMemo(() => deriveContextStrip(optionA, optionB).text, [optionA, optionB]);

  /* ── Interactive Decision Engine ───────────────────────── */
  const decisionContext = useMemo(
    () =>
      buildDecisionContext(calculationResult, {
        bagRemoved,
        previousWinner: changedState?.previousWinner,
      }),
    [calculationResult, bagRemoved, changedState]
  );

  const decisionOutcome = useMemo(
    () => buildInteractiveDecisionOutcome(decisionContext),
    [decisionContext]
  );

  /* ── Verdict data ────────────────────────────────────── */
  const currentVerdict = isChanged
    ? {
        winner: (changedState!.newWinner === "tie" ? "B" : changedState!.newWinner) as OptionId,
        winnerName: changedState!.newWinner === "A" ? "Option A" : "Option B",
        winnerPlace: changedState!.newWinner === "A" ? "Stansted" : "Heathrow",
        headlineHtml:
          changedState!.newWinner === "A"
            ? 'Option A — <span class="verdict-highlight">Stansted</span> — now wins on money.'
            : 'Option B — <span class="verdict-highlight">Heathrow</span> — is the better overall deal.',
        subtextHtml:
          changedState!.newWinner === "A"
            ? "A is now <b>€12 cheaper</b> — a near-tie. The time gap is unchanged: A still costs more door-to-door."
            : initialVerdict.subtextHtml,
        confidenceLabel: initialVerdict.confidenceLabel,
        provenance: initialVerdict.provenance,
        priority: initialVerdict.priority,
      }
    : initialVerdict;

  /* ── Cost columns ────────────────────────────────────── */
  const costA = buildCol(optionA, {
    isWinner: winner === "A",
    oldRealCost: bagRemoved ? baseA.realCost : undefined,
    editedLineIndex: bagRemoved ? 1 : undefined,
    oldLineAmount: bagRemoved ? 45 : undefined,
  });

  const costB = buildCol(optionB, {
    isWinner: winner === "B" && !isChanged,
    isUnchanged: isChanged,
  });

  /* ── Robustness ──────────────────────────────────────── */
  const robustnessInfo =
    isChanged && changedState!.newWinner === "A"
      ? estimateThreshold(optionA, optionB, 4)
      : null;
  const robustnessText = robustnessInfo
    ? `This result depends on the estimated night taxi cost. Option A wins on money only while that transfer stays below <b>€${robustnessInfo.threshold}</b>.`
    : "";

  /* ── Verdict stats for cascade ───────────────────────── */
  const initialWinner = monetaryWinner(initialOptionA.realCost, initialOptionB.realCost);
  const cascadeVerdict = buildVerdictStats(initialOptionA, initialOptionB, initialWinner);

  /* ══════════════════════════════════════════════════════ */
  /* ── PHASE 1: CASCADE ────────────────────────────────── */
  /* ══════════════════════════════════════════════════════ */
  if (!cascadeComplete) {
    return (
      <div className="max-w-[var(--container-compare)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
        {/* ═══ App Header ═══ */}
        <header className="app-header">
          <span className="app-header-brand">
            <span className="app-header-wordmark">Travelvus</span>
            <span className="app-header-line" />
            <span className="app-header-dot" />
          </span>

          <nav className="app-header-nav mobile:hidden">
            <Link href="/" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>
              &larr; Compare
            </Link>
          </nav>

          <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
            &#9776;
          </span>
        </header>

        {/* ═══ Calculation Cascade ═══ */}
        <CalculationExperience
          result={calculationResult}
          stepLabels={stepLabels}
          renderVerdict={() => (
            <TravelvusVerdict
              verdictLine={cascadeVerdict.verdictLine}
              stats={cascadeVerdict.stats}
            />
          )}
          renderExplanation={() => (
            <div style={{ padding: "32px 48px 40px", maxWidth: 640, margin: "0 auto" }}>
              <CascadeExplanation
                optionA={initialOptionA}
                optionB={initialOptionB}
                winner={initialWinner}
                isSupported={initialSupported}
                result={calculationResult}
              />
            </div>
          )}
          onComplete={() => setCascadeComplete(true)}
        />
      </div>
    );
  }

  /* ══════════════════════════════════════════════════════ */
  /* ── PHASE 2: FULL RESULT ────────────────────────────── */
  /* ══════════════════════════════════════════════════════ */

  /* Build current verdict stats for TravelvusVerdict */
  const currentWinner = monetaryWinner(optionA.realCost, optionB.realCost);
  const displayVerdict = buildVerdictStats(optionA, optionB, currentWinner);

  return (
    <div className="max-w-[var(--container-compare)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      {/* ═══ App Header ═══ */}
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>

        <nav className="app-header-nav mobile:hidden">
          <Link href="/" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>
            &larr; Compare
          </Link>
          <button onClick={() => setShowEdit(!showEdit)} className="cursor-pointer bg-transparent border-0 p-0" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", minHeight: 44, minWidth: 44, display: "inline-flex", alignItems: "center" }} aria-expanded={showEdit}>
            {showEdit ? "Close" : "Edit options"}
          </button>
          <button
            onClick={async () => {
              const url = window.location.href;
              if (navigator.share) { try { await navigator.share({ url }); } catch {} }
              else { await navigator.clipboard.writeText(url); setShareMsg("Link copied"); setTimeout(() => setShareMsg(null), 2000); }
            }}
            style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            {shareMsg || "Share"}
          </button>
        </nav>

        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">&#9776;</span>
      </header>

      {/* ═══ Mobile context strip ═══ */}
      {isChanged ? (
        <div className="hidden mobile:flex items-center justify-between" style={{ background: "var(--navy)", padding: "9px 16px" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 11, lineHeight: 1, color: "var(--paper)" }}>
            &#9670; A now wins &middot; &euro;12
          </span>
          <button className="flip-undo-btn" onClick={undo} style={{ fontSize: 9 }}>&#8634; Undo</button>
        </div>
      ) : isEditedUnchanged ? (
        <div className="hidden mobile:flex items-center justify-between" style={{ background: "var(--paper-2)", padding: "8px 16px", borderBottom: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: "0.06em", color: "var(--copper)" }}>
            &#9670; Rec unchanged
          </span>
          <button onClick={undo} style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", background: "none", border: "none", cursor: "pointer" }}>&#8634; Undo</button>
        </div>
      ) : (
        <div className="hidden mobile:flex items-center gap-[8px]" style={{ background: "var(--paper-2)", padding: "8px 16px", borderBottom: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 10, lineHeight: 1, letterSpacing: "0.06em", color: "var(--muted)" }}>{contextStrip}</span>
        </div>
      )}

      {/* ═══ Edit panel ═══ */}
      {initialSupported && showEdit && (
        <div className="result-pad" style={{ paddingBottom: 0 }}>
          <div className="edit-panel">
            <p style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.5, color: "var(--muted)", margin: "0 0 12px 0" }}>
              Edit one variable to see if the verdict holds.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11, color: "var(--ink)" }}>
                Option A · Checked bag:
              </span>
              <button className={bagRemoved ? "btn-outline" : "btn-filled"} onClick={bagRemoved ? undo : removeBag} style={{ padding: "8px 16px", fontSize: 13 }}>
                {bagRemoved ? "Restore (€45)" : "Remove (−€45)"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ Verdict Changed Banner ═══ */}
      {isChanged && (
        <div className="result-pad" style={{ paddingBottom: 14 }}>
          <VerdictChangedBanner cause={changedState!.cause} consequence={changedState!.consequence} onUndo={undo} />
        </div>
      )}

      {/* ═══ 1. VERDICT — shared TravelvusVerdict ═══ */}
      <div className="verdict-block" style={isChanged ? { padding: "28px 38px" } : undefined}>
        <div className="flex items-center justify-between mb-[20px]">
          <span className="kicker" style={{ color: "var(--copper-lt)" }}>
            {isChanged ? "The Verdict · updated" : "The Verdict"}
          </span>
          <Signature variant="verdict" />
        </div>

        <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: isChanged ? 34 : 40, lineHeight: 1.12, color: "var(--paper)", maxWidth: 640, margin: 0 }}
          dangerouslySetInnerHTML={{ __html: currentVerdict.headlineHtml }}
        />

        <div className="verdict-sub" dangerouslySetInnerHTML={{ __html: currentVerdict.subtextHtml }} />

        <div className="verdict-foot">
          <span className="confidence-tag" style={{ color: "#c8d0d6" }}>
            <span className="confidence-dot strong" />
            {currentVerdict.confidenceLabel}
          </span>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(244,241,234,.3)", flex: "none" }} />
          <span style={{ fontFamily: "var(--mono)", fontWeight: 400, fontSize: 11, lineHeight: 1, color: "var(--pmuted)" }}>
            {currentVerdict.provenance}
          </span>
          <span style={{ flex: 1 }} />
          <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11, lineHeight: 1, color: "var(--pmuted)" }}>
            {currentVerdict.priority}
          </span>
        </div>
      </div>

      {/* ═══ Edit unchanged feedback ═══ */}
      {isEditedUnchanged && (
        <div className="result-pad" style={{ paddingBottom: 0 }}>
          <div style={{
            padding: "8px 14px", borderRadius: 6,
            border: "1px solid rgba(184,92,56,0.15)", background: "rgba(184,92,56,0.04)",
            fontFamily: "var(--sans)", fontSize: 11, color: "var(--pmuted)", lineHeight: 1.4,
          }}>
            <span style={{ color: "var(--copper)", fontWeight: 600 }}>Recommendation unchanged.</span>
            {" "}Removing the bag changed the cost gap but the same option still wins. See updated metrics below.
          </div>
        </div>
      )}

      {/* ═══ Content ═══ */}
      <div className="result-pad">
        <RealCost
          optionA={costA}
          optionB={costB}
          winner={winner as OptionId}
          editorial={isChanged || isEditedUnchanged || !initialSupported ? undefined : editorial}
          sectionTitle={isChanged ? "Real cost — one line changed" : isEditedUnchanged ? "Real cost — bag removed" : !initialSupported ? "Ticket comparison only" : undefined}
        />

        {isChanged && (
          <div style={{ marginTop: 20 }}>
            <RobustnessNote textHtml={robustnessText} />
          </div>
        )}

        {!isChanged && initialSupported && <hr className="result-divider" />}

        {!isChanged && initialSupported && (
          <>
            <DoorToDoor
              gapLabel={d.doorToDoorGapLabel}
              gapCaption={d.doorToDoorGapCaption}
              optionA={{ name: d.optionA.name, code: d.optionA.code, label: d.optionA.doorToDoorLabel, totalMins: d.optionA.doorToDoorMinutes }}
              optionB={{ name: d.optionB.name, code: d.optionB.code, label: d.optionB.doorToDoorLabel, totalMins: d.optionB.doorToDoorMinutes }}
              winner={d.verdict.winner}
              footnote="Both counted the same way: home → departure airport → pre-flight buffer → flight → arrival → central London."
            />
            <hr className="result-divider" />
          </>
        )}

        {/* DecisionThreshold, SecondaryFlips, DecisionDebt removed in Phase 107.1 —
            superseded by RecommendationEvidence + DecisionIntelligence below */}

        {isChanged && (
          <div className="undo-keep-row">
            <button className="btn-outline" onClick={undo}>&#8634; Undo change</button>
            <button className="btn-filled" onClick={keep}>Keep this change</button>
            <span className="undo-keep-note">Nothing else was re-entered — only the bag.</span>
          </div>
        )}
      </div>

      {isChanged && (
        <div className="hidden mobile:flex gap-[10px] items-center mt-[20px]">
          <button className="btn-outline flex-1" onClick={undo} style={{ padding: 12 }}>&#8634; Undo</button>
          <button className="btn-filled flex-1" onClick={keep} style={{ padding: 12 }}>Keep</button>
        </div>
      )}

      {/* ═══ Interactive Decision Engine ═══ */}
      {initialSupported && (
        <div className="result-pad" aria-live="polite">
          <RecommendationEvidence
            factors={decisionOutcome.evidence.factors}
            trace={decisionOutcome.evidence.trace}
          />
          <DecisionIntelligence data={decisionOutcome.decisionIntelligence} />
        </div>
      )}

      {/* ═══ Continuation Block ═══ */}
      {!isChanged && (
        <div className={styles.continuationBlock}>
          <hr className={styles.continuationDivider} />
          {isDemo ? (
            <Link href="/#compare" className={styles.primaryAction}>Compare your own flights &rarr;</Link>
          ) : initialSupported ? (
            <Link href="/#compare" className={styles.primaryAction}>Compare another pair &rarr;</Link>
          ) : (
            <Link href="/methodology" className={styles.primaryAction}>How we calculate this &rarr;</Link>
          )}
          <div className={styles.secondaryLinks}>
            {!initialSupported ? (
              <Link href="/#compare" className={styles.secondaryLink}>Compare another pair &rarr;</Link>
            ) : (
              <>
                <Link href="/methodology" className={styles.secondaryLink}>How we calculate this &rarr;</Link>
                <span className={styles.secondarySep}>&middot;</span>
                <Link href="/questions/london-airport-break-even" className={styles.secondaryLink}>How break-evens work &rarr;</Link>
              </>
            )}
          </div>
        </div>
      )}

      <footer className={styles.resultFooter}>
        <Link href="/">Home</Link>
        <Link href="/methodology">How Travelvus works</Link>
        <Link href="/london-airports">London Airports</Link>
      </footer>
    </div>
  );
}
