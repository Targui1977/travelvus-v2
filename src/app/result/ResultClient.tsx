"use client";

import { useState, useCallback } from "react";
import { calcRealCost, monetaryWinner, detectChange, estimateThreshold } from "@/lib/decision-engine";
import type { CostLine, OptionResult, OptionId, FullResultData } from "@/lib/types";
import type { CostLineDisplay, CostColumnDisplay } from "@/components/result/RealCost";
import {
  Verdict,
  RealCost,
  DoorToDoor,
  DecisionThreshold,
  SecondaryFlips,
  DecisionDebt,
  VerdictChangedBanner,
  RobustnessNote,
} from "@/components/result";
import Signature from "@/components/ui/Signature";

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

/* ── Props ───────────────────────────────────────────────── */

interface ResultClientProps {
  initialOptionA: OptionResult;
  initialOptionB: OptionResult;
  initialVerdict: FullResultData["verdict"];
  initialSupported: boolean;
  initialDataRef: FullResultData;
}

/* ── Page ────────────────────────────────────────────────── */

export default function ResultClient({
  initialOptionA,
  initialOptionB,
  initialVerdict,
  initialSupported,
  initialDataRef: d,
}: ResultClientProps) {
  /* State */
  const [optionA, setOptionA] = useState<OptionResult>(initialOptionA);
  const [optionB, setOptionB] = useState<OptionResult>(initialOptionB);
  const [showEdit, setShowEdit] = useState(false);
  const [bagRemoved, setBagRemoved] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  /* Verdict Changed surface state */
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
        consequence: `Option A — Stansted — now wins on money.`,
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

  /* ── Robustness threshold ────────────────────────────── */
  const robustnessInfo =
    isChanged && changedState!.newWinner === "A"
      ? estimateThreshold(optionA, optionB, 4)
      : null;
  const robustnessText = robustnessInfo
    ? `This result depends on the estimated night taxi cost. Option A wins on money only while that transfer stays below <b>€${robustnessInfo.threshold}</b>.`
    : "";

  /* ══════════════════════════════════════════════════════ */

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
          <button
            onClick={() => setShowEdit(!showEdit)}
            className="cursor-pointer bg-transparent border-0 p-0"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: 13,
              lineHeight: 1,
              color: "var(--muted)",
            }}
          >
            Edit options
          </button>
          <button
            onClick={async () => {
              const url = window.location.href;
              if (navigator.share) {
                try { await navigator.share({ url }); } catch {}
              } else {
                await navigator.clipboard.writeText(url);
                setShareMsg("Link copied");
                setTimeout(() => setShareMsg(null), 2000);
              }
            }}
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: 13,
              lineHeight: 1,
              color: "var(--muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            {shareMsg || "Share"}
          </button>
        </nav>

        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* ═══ Mobile context strip ═══ */}
      {isChanged ? (
        <div
          className="hidden mobile:flex items-center justify-between"
          style={{
            background: "var(--navy)",
            padding: "9px 16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontWeight: 600,
              fontSize: 11,
              lineHeight: 1,
              color: "var(--paper)",
            }}
          >
            &#9670; A now wins &middot; &euro;12
          </span>
          <button
            className="flip-undo-btn"
            onClick={undo}
            style={{ fontSize: 9 }}
          >
            &#8634; Undo
          </button>
        </div>
      ) : (
        <div
          className="hidden mobile:flex items-center gap-[8px]"
          style={{
            background: "var(--paper-2)",
            padding: "8px 16px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontWeight: 500,
              fontSize: 10,
              lineHeight: 1,
              letterSpacing: "0.06em",
              color: "var(--muted)",
            }}
          >
            B wins &middot; &euro;{d.savingsEuro} &middot;{" "}
            {d.savingsTimeLabel} faster
          </span>
        </div>
      )}

      {/* ═══ Edit panel ═══ */}
      {initialSupported && showEdit && (
        <div className="result-pad" style={{ paddingBottom: 0 }}>
          <div className="edit-panel">
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 13,
                lineHeight: 1.5,
                color: "var(--muted)",
                margin: "0 0 12px 0",
              }}
            >
              Edit one variable to see if the verdict holds.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontWeight: 500,
                  fontSize: 11,
                  color: "var(--ink)",
                }}
              >
                Option A · Checked bag:
              </span>
              <button
                className={bagRemoved ? "btn-outline" : "btn-filled"}
                onClick={bagRemoved ? undo : removeBag}
                style={{ padding: "8px 16px", fontSize: 13 }}
              >
                {bagRemoved ? "Restore (€45)" : "Remove (−€45)"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ Verdict Changed Banner ═══ */}
      {isChanged && (
        <div className="result-pad" style={{ paddingBottom: 14 }}>
          <VerdictChangedBanner
            cause={changedState!.cause}
            consequence={changedState!.consequence}
            onUndo={undo}
          />
        </div>
      )}

      {/* ═══ 1. VERDICT ═══ */}
      <div
        className="verdict-block"
        style={isChanged ? { padding: "28px 38px" } : undefined}
      >
        <div className="flex items-center justify-between mb-[20px]">
          <span className="kicker" style={{ color: "var(--copper-lt)" }}>
            {isChanged ? "The Verdict · updated" : "The Verdict"}
          </span>
          <Signature variant="verdict" />
        </div>

        <h2
          style={isChanged ? { fontSize: 34 } : undefined}
          dangerouslySetInnerHTML={{ __html: currentVerdict.headlineHtml }}
        />

        <div
          className="verdict-sub"
          dangerouslySetInnerHTML={{ __html: currentVerdict.subtextHtml }}
        />

        <div className="verdict-foot">
          <span className="confidence-tag" style={{ color: "#c8d0d6" }}>
            <span className="confidence-dot strong" />
            {currentVerdict.confidenceLabel}
          </span>
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "rgba(244,241,234,.3)",
              flex: "none",
            }}
          />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontWeight: 400,
              fontSize: 11,
              lineHeight: 1,
              color: "var(--pmuted)",
            }}
          >
            {currentVerdict.provenance}
          </span>
          <span style={{ flex: 1 }} />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontWeight: 500,
              fontSize: 11,
              lineHeight: 1,
              color: "var(--pmuted)",
            }}
          >
            {currentVerdict.priority}
          </span>
        </div>
      </div>

      {/* ═══ Content ═══ */}
      <div className="result-pad">
        {/* ═══ 2. REAL COST ═══ */}
        <RealCost
          optionA={costA}
          optionB={costB}
          winner={winner as OptionId}
          editorial={
            isChanged || !initialSupported
              ? undefined
              : d.realCostEditorial
          }
          sectionTitle={
            isChanged
              ? "Real cost — one line changed"
              : !initialSupported
              ? "Ticket comparison only"
              : undefined
          }
        />

        {/* ═══ Robustness note ─────────────────────────── */}
        {isChanged && (
          <div style={{ marginTop: 20 }}>
            <RobustnessNote textHtml={robustnessText} />
          </div>
        )}

        {!isChanged && initialSupported && <hr className="result-divider" />}

        {/* ═══ 3. DOOR-TO-DOOR ═══ */}
        {!isChanged && initialSupported && (
          <>
            <DoorToDoor
              gapLabel={d.doorToDoorGapLabel}
              gapCaption={d.doorToDoorGapCaption}
              optionA={{
                name: d.optionA.name,
                code: d.optionA.code,
                label: d.optionA.doorToDoorLabel,
                totalMins: d.optionA.doorToDoorMinutes,
              }}
              optionB={{
                name: d.optionB.name,
                code: d.optionB.code,
                label: d.optionB.doorToDoorLabel,
                totalMins: d.optionB.doorToDoorMinutes,
              }}
              winner={d.verdict.winner}
              footnote="Both counted the same way: home → departure airport → pre-flight buffer → flight → arrival → central London."
            />
            <hr className="result-divider" />
          </>
        )}

        {/* ═══ 4-6. THRESHOLD + FLIPS + DEBT ═══ */}
        {!isChanged && initialSupported && (
          <>
            <DecisionThreshold data={d.threshold} />
            <SecondaryFlips flips={d.secondaryFlips} />
            <DecisionDebt
              title={d.decisionDebt.title}
              textHtml={d.decisionDebt.textHtml}
              factors={d.decisionDebt.factors}
            />
          </>
        )}

        {/* ═══ Undo / Keep ═══ */}
        {isChanged && (
          <div className="undo-keep-row">
            <button className="btn-outline" onClick={undo}>
              &#8634; Undo change
            </button>
            <button className="btn-filled" onClick={keep}>
              Keep this change
            </button>
            <span className="undo-keep-note">
              Nothing else was re-entered — only the bag.
            </span>
          </div>
        )}
      </div>

      {/* ═══ Mobile Undo/Keep footer ═══ */}
      {isChanged && (
        <div className="hidden mobile:flex gap-[10px] undo-keep-row">
          <button
            className="btn-outline flex-1"
            onClick={undo}
            style={{ padding: 12 }}
          >
            &#8634; Undo
          </button>
          <button
            className="btn-filled flex-1"
            onClick={keep}
            style={{ padding: 12 }}
          >
            Keep
          </button>
        </div>
      )}
    </div>
  );
}
