/**
 * Travelvus V2 — Interactive Decision Engine
 *
 * Barrel export for the interactive reasoning layer.
 * Phase 107.0.
 */

export { buildDecisionContext } from "./interactive-decision-context";
export type { InteractiveDecisionContext } from "./interactive-decision-context";

export { buildInteractiveDecisionOutcome } from "./interactive-decision-outcome";
export type { InteractiveDecisionOutcome } from "./interactive-decision-outcome";

export {
  determineDecisionState,
  determineConfidence,
  determineStrength,
  determineRecommendation,
  determineSummary,
  MEANINGFUL_COST_DIFF,
  MARGINAL_COST_DIFF,
  CLEAR_COST_DIFF,
  MEANINGFUL_TIME_DIFF_MIN,
  SIGNIFICANT_TIME_DIFF_MIN,
} from "./decision-state-rules";

export { generateEvidence } from "./interactive-evidence";
export type { GeneratedEvidence } from "./interactive-evidence";

export { generateFlips } from "./interactive-flips";

export { generateTradeoffs } from "./interactive-tradeoffs";
export type { GeneratedTradeoffs } from "./interactive-tradeoffs";
