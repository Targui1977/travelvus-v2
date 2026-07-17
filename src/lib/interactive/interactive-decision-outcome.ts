/**
 * Travelvus V2 — Interactive Decision Outcome Factory
 *
 * THE core factory. Connects CalculationResult → Decision Intelligence + Evidence.
 *
 * Input:  InteractiveDecisionContext (built from CalculationResult + edit state)
 * Output: InteractiveDecisionOutcome (DecisionIntelligenceData + Evidence + Confidence)
 *
 * Pure function. No UI logic. No duplicated cost or time calculations.
 * Consumes existing engine results only.
 *
 * Phase 107.0 — Part C.
 */

import type { DecisionIntelligenceData } from "@/lib/decision-intelligence";
import type { HeroConfidence } from "@/components/hero/types";
import type { OptionId } from "@/lib/types";
import type { InteractiveDecisionContext } from "./interactive-decision-context";
import {
  determineDecisionState,
  determineConfidence,
  determineStrength,
  determineRecommendation,
  determineSummary,
} from "./decision-state-rules";
import { generateEvidence } from "./interactive-evidence";
import { generateFlips } from "./interactive-flips";
import { generateTradeoffs } from "./interactive-tradeoffs";

/* ── Outcome Contract ─────────────────────────────────────── */

export interface InteractiveDecisionOutcome {
  /** Full decision intelligence data for the DecisionIntelligence component */
  decisionIntelligence: DecisionIntelligenceData;

  /** Evidence factors, trace, limitations, and strength for RecommendationEvidence */
  evidence: {
    factors: import("@/components/visual/RecommendationEvidence").EvidenceFactor[];
    trace: string[];
    limitations: string[];
    strength: string;
  };

  /** Editorial recommendation confidence */
  confidence: HeroConfidence;

  /** Changed-state information (only present after an edit that flipped the verdict) */
  changedState?: {
    cause: string;
    consequence: string;
    previousWinner: OptionId | "tie";
    newWinner: OptionId | "tie";
  };
}

/* ── Factory ──────────────────────────────────────────────── */

/**
 * Build the complete Interactive Decision Outcome from the context.
 *
 * This is the single entry point for the interactive reasoning layer.
 * All sub-modules are called from here; nothing is duplicated.
 */
export function buildInteractiveDecisionOutcome(
  context: InteractiveDecisionContext
): InteractiveDecisionOutcome {
  const { optionA, optionB, winner, savingsEuro, savingsTimeMinutes, isSupported } = context;

  const winnerOpt = winner === "A" ? optionA : optionB;
  const loserOpt = winner === "A" ? optionB : optionA;

  /* ── Determine data quality ────────────────────────────── */
  const hasBaggageAssumption = !context.bagRemoved;
  const hasEstimates = optionA.costLines.some(
    (l) => l.confidence === "estimate"
  ) || optionB.costLines.some((l) => l.confidence === "estimate");

  /* ── Decision state ────────────────────────────────────── */
  const state = determineDecisionState(
    winner,
    savingsEuro,
    savingsTimeMinutes,
    isSupported,
    hasBaggageAssumption,
    hasEstimates
  );

  /* ── Confidence ────────────────────────────────────────── */
  const confidence = determineConfidence(state, isSupported, hasEstimates);

  /* ── Strength label ────────────────────────────────────── */
  const strength = determineStrength(state);

  /* ── Recommendation text ───────────────────────────────── */
  const recommendation = determineRecommendation(
    state,
    winner,
    winnerOpt.name,
    loserOpt.name,
    savingsEuro,
    savingsTimeMinutes
  );

  /* ── Summary ───────────────────────────────────────────── */
  const summary = determineSummary(
    state,
    winner,
    winnerOpt.name,
    loserOpt.name,
    winnerOpt.code,
    loserOpt.code,
    savingsEuro,
    savingsTimeMinutes
  );

  /* ── Evidence ──────────────────────────────────────────── */
  const evidence = generateEvidence(context, state, strength);

  /* ── Flips ─────────────────────────────────────────────── */
  const flips = generateFlips(context);

  /* ── Trade-offs + Unknowns ─────────────────────────────── */
  const { advantages, tradeoffs, unknowns } = generateTradeoffs(context, state);

  /* ── Limitations (from DecisionIntelligence perspective) ─ */
  const limitations = buildDecisionLimitations(context, state);

  /* ── Assemble DecisionIntelligenceData ─────────────────── */
  const decisionIntelligence: DecisionIntelligenceData = {
    state,
    recommendation,
    summary,
    advantages,
    tradeoffs,
    flips,
    limitations,
    unknowns: unknowns.length > 0 ? unknowns : undefined,
  };

  /* ── Changed state (if applicable) ─────────────────────── */
  const changedState = buildChangedState(context);

  return {
    decisionIntelligence,
    evidence,
    confidence,
    changedState,
  };
}

/* ── Decision Limitations ─────────────────────────────────── */

function buildDecisionLimitations(
  ctx: InteractiveDecisionContext,
  state: DecisionIntelligenceData["state"]
): DecisionIntelligenceData["limitations"] {
  const limits: DecisionIntelligenceData["limitations"] = [];

  if (state === "insufficient_data") {
    limits.push({
      condition: "Missing transfer-cost data",
      impact: "Without reliable transfer costs, the real trip cost cannot be calculated.",
    });
    limits.push({
      condition: "Unsupported airport pair",
      impact: "Travelvus currently supports Berlin → Stansted vs Heathrow with verified data.",
    });
    return limits;
  }

  limits.push({
    condition: "Fares are illustrative",
    impact: "Live fares vary by date, season, and booking window. The comparison uses off-peak reference prices.",
  });

  if (ctx.optionA.costLines.some((l) => l.confidence === "estimate")) {
    limits.push({
      condition: "Estimated transfer cost",
      impact: `${ctx.optionA.name} transfer is based on current public-transport fares — actual cost depends on time of day and mode.`,
    });
  }

  limits.push({
    condition: "One-way comparison",
    impact: "This comparison covers one direction only. Return fares and transfers may differ.",
  });

  return limits.slice(0, 3);
}

/* ── Changed State ────────────────────────────────────────── */

function buildChangedState(
  ctx: InteractiveDecisionContext
): InteractiveDecisionOutcome["changedState"] {
  if (!ctx.previousWinner || ctx.previousWinner === ctx.winner) {
    return undefined;
  }

  const { optionA, optionB, winner } = ctx;
  const winnerOpt = winner === "A" ? optionA : optionB;

  const cause =
    ctx.bagRemoved && ctx.editedLineIndex === 1
      ? `You removed Option A's checked bag (€45).`
      : `You edited a cost assumption.`;

  const savings = Math.abs(optionA.realCost - optionB.realCost);
  const consequence =
    winner === "A"
      ? `Option A — ${optionA.name} — now wins on money by €${savings}.`
      : winner === "B"
        ? `Option B — ${optionB.name} — is now the better deal by €${savings}.`
        : `They are now tied on cost.`;

  return {
    cause,
    consequence,
    previousWinner: ctx.previousWinner,
    newWinner: ctx.winner,
  };
}
