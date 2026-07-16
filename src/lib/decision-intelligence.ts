/**
 * Travelvus V2 — Decision Intelligence Model
 * Transparent editorial reasoning engine. Not an algorithm.
 * Phase 106.3.
 */

/* ── Decision States ──────────────────────────────────────── */

export type DecisionState =
  | "recommended"
  | "conditionally_recommended"
  | "balanced"
  | "marginal"
  | "too_close"
  | "insufficient_data";

export const DECISION_STATE_LABELS: Record<DecisionState, string> = {
  recommended: "Recommended",
  conditionally_recommended: "Conditionally recommended",
  balanced: "Balanced choice",
  marginal: "Marginal advantage",
  too_close: "Too close to call",
  insufficient_data: "Not enough information",
};

/* ── Trade-off ────────────────────────────────────────────── */

export interface DecisionTradeoff {
  advantage: string;
  disadvantage: string;
}

/* ── Flip Rule ────────────────────────────────────────────── */

export interface DecisionFlip {
  /** What changes */
  condition: string;
  /** What the recommendation becomes */
  result: string;
}

/* ── Limitation ───────────────────────────────────────────── */

export interface DecisionLimitation {
  condition: string;
  impact: string;
}

/* ── Full Decision Intelligence ───────────────────────────── */

export interface DecisionIntelligenceData {
  /** The editorial outcome */
  state: DecisionState;

  /** What the recommendation is (short) */
  recommendation: string;

  /** Why this recommendation exists (one sentence) */
  summary: string;

  /** Advantages of the recommended option */
  advantages: string[];

  /** Trade-offs — what you give up */
  tradeoffs: DecisionTradeoff[];

  /** Conditions that would flip the recommendation */
  flips: DecisionFlip[];

  /** Known limitations of this recommendation */
  limitations: DecisionLimitation[];

  /** When we don't have enough information */
  unknowns?: string[];
}
