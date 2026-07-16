/**
 * Travelvus V2 — Decision State Rules
 *
 * Threshold constants and state-mapping logic for the Interactive Decision Engine.
 * Pure functions. No React. No side effects.
 *
 * Phase 107.0 — Part D.
 */

import type { DecisionState } from "@/lib/decision-intelligence";
import type { HeroConfidence } from "@/components/hero/types";

/* ── Threshold Constants ──────────────────────────────────── */

/** Below this cost difference → too_close. In EUR. */
export const MEANINGFUL_COST_DIFF = 15;

/** Below this cost difference → marginal (if above meaningful threshold). */
export const MARGINAL_COST_DIFF = 30;

/** Above this cost difference → clear advantage. */
export const CLEAR_COST_DIFF = 50;

/** Below this time difference (minutes) → no meaningful time advantage. */
export const MEANINGFUL_TIME_DIFF_MIN = 30;

/** Above this time difference (minutes) → significant time advantage. */
export const SIGNIFICANT_TIME_DIFF_MIN = 60;

/* ── State Determination ──────────────────────────────────── */

/**
 * Map a calculation result to one of the six DecisionStates.
 *
 * Rules (checked in order):
 *
 * 1. insufficient_data — unsupported comparison OR missing required inputs
 * 2. too_close — winner exists but cost diff < MEANINGFUL_COST_DIFF AND time diff < MEANINGFUL_TIME_DIFF_MIN
 * 3. marginal — cost diff < MARGINAL_COST_DIFF OR (cost diff moderate but time diff against winner)
 * 4. balanced — tie on cost, OR each option wins a major dimension
 * 5. conditionally_recommended — clear winner but depends on baggage/destination assumption
 * 6. recommended — clear winner, no material conditionals
 */
export function determineDecisionState(
  winner: "A" | "B" | "tie",
  savingsEuro: number,
  savingsTimeMinutes: number,
  isSupported: boolean,
  hasBaggageAssumption: boolean,
  hasTransferEstimate: boolean
): DecisionState {

  // ── Gate: insufficient data
  if (!isSupported) {
    return "insufficient_data";
  }

  // ── Tie → balanced
  if (winner === "tie") {
    return "balanced";
  }

  const costDiff = savingsEuro;

  // ── Too close: measurable difference is below meaningful threshold
  if (costDiff < MEANINGFUL_COST_DIFF && savingsTimeMinutes < MEANINGFUL_TIME_DIFF_MIN) {
    return "too_close";
  }

  // ── Marginal: small cost advantage, or cost advantage offset by time
  if (costDiff < MARGINAL_COST_DIFF) {
    return "marginal";
  }

  // ── Conditionally recommended: clear advantage but relies on assumptions
  if (hasBaggageAssumption || hasTransferEstimate) {
    return "conditionally_recommended";
  }

  // ── Recommended: clear advantage, no material conditionals
  return "recommended";
}

/* ── Confidence Determination ─────────────────────────────── */

/**
 * Map the decision state + data quality to editorial confidence.
 *
 * Confidence decreases when:
 *   - The state is borderline (marginal, too_close, balanced)
 *   - The comparison relies on estimates
 *   - The route is not fully supported
 */
export function determineConfidence(
  state: DecisionState,
  isSupported: boolean,
  hasEstimates: boolean
): HeroConfidence {

  if (state === "insufficient_data") {
    return "too-close";
  }

  if (state === "too_close") {
    return "too-close";
  }

  if (state === "balanced") {
    return "context-dependent";
  }

  if (state === "marginal") {
    return hasEstimates ? "conditional" : "moderate";
  }

  if (state === "conditionally_recommended") {
    return hasEstimates ? "conditional" : "high";
  }

  if (state === "recommended") {
    if (!isSupported) return "moderate";
    if (hasEstimates) return "high";
    return "very-high";
  }

  // Fallback
  return "moderate";
}

/* ── Strength Label ───────────────────────────────────────── */

/**
 * Human-readable recommendation strength.
 * Used as the `strength` prop on RecommendationEvidence.
 */
export function determineStrength(state: DecisionState): string {
  switch (state) {
    case "recommended":
      return "Clear recommendation";
    case "conditionally_recommended":
      return "Recommendation with conditions";
    case "balanced":
      return "Balanced — either option works";
    case "marginal":
      return "Slight advantage";
    case "too_close":
      return "Too close for a strong recommendation";
    case "insufficient_data":
      return "Not enough data to recommend";
  }
}

/* ── Recommendation Text ──────────────────────────────────── */

/**
 * Generate the editorial recommendation line from state + winner context.
 */
export function determineRecommendation(
  state: DecisionState,
  winner: "A" | "B" | "tie",
  winnerName: string,
  loserName: string,
  savingsEuro: number,
  savingsTimeMinutes: number
): string {
  const fmtEuro = `€${savingsEuro}`;
  const h = Math.floor(savingsTimeMinutes / 60);
  const m = savingsTimeMinutes % 60;

  switch (state) {
    case "recommended":
      return `${winnerName} is the recommended choice.`;

    case "conditionally_recommended":
      if (savingsTimeMinutes >= MEANINGFUL_TIME_DIFF_MIN) {
        return `${winnerName} is recommended — ${fmtEuro} cheaper and ${h}h ${m}m faster door-to-door.`;
      }
      return `${winnerName} is recommended, saving ${fmtEuro} — if your destination is central London.`;

    case "balanced":
      return `${winnerName} and ${loserName} are balanced choices. Your priority decides.`;

    case "marginal":
      if (savingsTimeMinutes > 0) {
        return `${winnerName} has a slight edge — ${fmtEuro} less and ${savingsTimeMinutes} min quicker.`;
      }
      return `${winnerName} has a narrow advantage of ${fmtEuro}.`;

    case "too_close":
      return `The difference is too small to call. Either airport works.`;

    case "insufficient_data":
      return `Not enough data to make a confident recommendation.`;
  }
}

/* ── Summary Text ─────────────────────────────────────────── */

/**
 * One-sentence editorial summary explaining WHY.
 */
export function determineSummary(
  state: DecisionState,
  winner: "A" | "B" | "tie",
  winnerName: string,
  loserName: string,
  winnerCode: string,
  loserCode: string,
  savingsEuro: number,
  savingsTimeMinutes: number
): string {
  const fmtEuro = `€${savingsEuro}`;

  switch (state) {
    case "recommended":
      return `${winnerName} (${winnerCode}) costs ${fmtEuro} less than ${loserName} (${loserCode}) once all costs are counted, and saves ${savingsTimeMinutes} minutes door-to-door.`;

    case "conditionally_recommended":
      if (savingsTimeMinutes >= MEANINGFUL_TIME_DIFF_MIN) {
        return `${winnerName} (${winnerCode}) wins on both cost (${fmtEuro}) and time (${savingsTimeMinutes} min). The result depends on a central London destination.`;
      }
      return `${winnerName} (${winnerCode}) is ${fmtEuro} cheaper with a checked bag included — but this depends on your actual baggage and destination.`;

    case "balanced":
      if (winner === "tie") {
        return `Both options cost the same. The decision comes down to journey time, convenience, and personal preference.`;
      }
      return `${winnerName} (${winnerCode}) costs ${fmtEuro} less, but ${loserName} (${loserCode}) offers other advantages. Neither dominates.`;

    case "marginal":
      return `${winnerName} (${winnerCode}) is ${fmtEuro} cheaper — a real but small advantage. The practical difference may not justify changing plans.`;

    case "too_close":
      return `The cost difference (${fmtEuro}) is below the meaningful threshold. These airports are effectively equivalent for this trip.`;

    case "insufficient_data":
      return `Without complete transfer-cost data for this airport pair, Travelvus cannot produce a reliable recommendation.`;
  }
}
