/**
 * Travelvus V2 — Interactive Trade-offs & Unknowns
 *
 * Generates advantages, trade-offs, and unknown information
 * from the actual comparison data.
 *
 * Rules:
 *   - Max 3 advantages, max 3 trade-offs
 *   - Do not repeat Evidence factors word-for-word
 *   - Unknowns only shown when they materially affect the result
 *   - insufficient_data only when a necessary input is actually missing
 *
 * Pure functions. No React. No side effects.
 *
 * Phase 107.0 — Parts G+H.
 */

import type { DecisionTradeoff } from "@/lib/decision-intelligence";
import type { InteractiveDecisionContext } from "./interactive-decision-context";
import type { DecisionState } from "@/lib/decision-intelligence";
import { MEANINGFUL_TIME_DIFF_MIN } from "./decision-state-rules";

/* ── Trade-off Generation ─────────────────────────────────── */

export interface GeneratedTradeoffs {
  advantages: string[];
  tradeoffs: DecisionTradeoff[];
  unknowns: string[];
}

/**
 * Generate advantages, trade-offs, and unknowns from the context.
 */
export function generateTradeoffs(
  context: InteractiveDecisionContext,
  state: DecisionState
): GeneratedTradeoffs {
  const advantages = buildAdvantages(context, state);
  const tradeoffs = buildTradeoffs(context, state);
  const unknowns = buildUnknowns(context, state);

  return { advantages, tradeoffs, unknowns };
}

/* ── Advantages (max 3) ───────────────────────────────────── */

function buildAdvantages(
  ctx: InteractiveDecisionContext,
  state: DecisionState
): string[] {
  const advantages: string[] = [];

  const { optionA, optionB, winner, savingsEuro, savingsTimeMinutes } = ctx;

  if (state === "insufficient_data") return advantages;

  const winnerOpt = winner === "A" ? optionA : optionB;
  const loserOpt = winner === "A" ? optionB : optionA;

  if (winner === "tie") {
    advantages.push(`${optionA.name}: typically cheaper ticket prices`);
    advantages.push(`${optionB.name}: shorter transfer to central London`);
    advantages.push("Both connect to central London reliably");
    return advantages.slice(0, 3);
  }

  // 1. Cost advantage
  if (savingsEuro > 0) {
    advantages.push(
      `Lower real trip cost — ${winnerOpt.name} saves €${savingsEuro} compared to ${loserOpt.name}`
    );
  }

  // 2. Time advantage
  if (savingsTimeMinutes >= MEANINGFUL_TIME_DIFF_MIN) {
    const h = Math.floor(savingsTimeMinutes / 60);
    const m = savingsTimeMinutes % 60;
    const label = h > 0 ? `${h}h ${m}m` : `${m} min`;
    advantages.push(
      `Faster door-to-door — ${winnerOpt.name} saves ${label} over ${loserOpt.name}`
    );
  }

  // 3. Convenience / transfer advantage
  const transferA = ctx.optionA.costLines[ctx.optionA.costLines.length - 1];
  const transferB = ctx.optionB.costLines[ctx.optionB.costLines.length - 1];

  if (transferB && transferB.amount === 0 && winner === "B") {
    advantages.push("Simpler arrival — direct Tube/rail connection to central London");
  } else if (transferA && transferA.amount === 0 && winner === "A") {
    advantages.push("No extra transfer cost — airport connection included in journey");
  } else if (transferA && transferB && transferA.amount < transferB.amount && winner === "A") {
    advantages.push(`Cheaper airport transfer — €${transferB.amount - transferA.amount} less than ${ctx.optionB.name}`);
  }

  // 4. Budget-airline access
  if (ctx.optionATicketPrice < ctx.optionBTicketPrice) {
    advantages.push(
      `${ctx.optionA.name} offers budget-airline fares from €${ctx.optionATicketPrice} — cheaper entry price`
    );
  }

  return advantages.slice(0, 3);
}

/* ── Trade-offs (max 3) ───────────────────────────────────── */

function buildTradeoffs(
  ctx: InteractiveDecisionContext,
  state: DecisionState
): DecisionTradeoff[] {
  const tradeoffs: DecisionTradeoff[] = [];

  const { optionA, optionB, winner, savingsEuro, savingsTimeMinutes } = ctx;

  if (state === "insufficient_data" || state === "too_close") return tradeoffs;

  const winnerOpt = winner === "A" ? optionA : optionB;
  const loserOpt = winner === "A" ? optionB : optionA;

  if (winner === "tie") {
    tradeoffs.push({
      advantage: `${optionA.name} is cheaper on ticket price`,
      disadvantage: `${optionB.name} is faster to central London`,
    });
    return tradeoffs;
  }

  // 1. Ticket vs real-cost trade-off
  const ticketWinner = ctx.optionATicketPrice < ctx.optionBTicketPrice ? "A" : "B";
  if (ticketWinner !== winner && savingsEuro > 0) {
    tradeoffs.push({
      advantage: `${loserOpt.name} has a lower ticket price`,
      disadvantage: `but costs more once baggage and transfer are counted`,
    });
  }

  // 2. Time vs cost
  if (savingsTimeMinutes > 0 && savingsEuro > 0) {
    const costOpt = winnerOpt;
    const timeOpt = optionA.doorToDoorMinutes < optionB.doorToDoorMinutes ? optionA : optionB;

    if (costOpt.id !== timeOpt.id) {
      tradeoffs.push({
        advantage: `${costOpt.name} is cheaper (€${savingsEuro} less)`,
        disadvantage: `${timeOpt.name} is faster (${Math.abs(savingsTimeMinutes)} min less)`,
      });
    }
  }

  // 3. Budget vs convenience
  if (ctx.optionATicketPrice < ctx.optionBTicketPrice && winner === "B") {
    tradeoffs.push({
      advantage: `${optionA.name} offers lower entry fares`,
      disadvantage: `${optionB.name} costs less overall once you add the real journey`,
    });
  }

  // 4. Fare sensitivity
  if (state === "conditionally_recommended" || state === "marginal") {
    tradeoffs.push({
      advantage: `${winnerOpt.name} is the better option at current fares`,
      disadvantage: `a small fare change (€10–15) could change the recommendation`,
    });
  }

  return tradeoffs.slice(0, 3);
}

/* ── Unknown Information ──────────────────────────────────── */

function buildUnknowns(
  ctx: InteractiveDecisionContext,
  state: DecisionState
): string[] {
  const unknowns: string[] = [];

  if (state === "insufficient_data") {
    unknowns.push("Complete transfer-cost data for this airport pair");
    unknowns.push("Verified door-to-door journey times");
    return unknowns;
  }

  // Only list unknowns that materially affect the result
  unknowns.push("Exact London destination — transfer costs assume central London");

  if (!ctx.bagRemoved) {
    unknowns.push("Actual baggage needs — travelling without a checked bag reduces cost");
  }

  if (state === "too_close" || state === "marginal") {
    unknowns.push("Live fare at time of booking — prices vary by date and demand");
  }

  if (ctx.savingsTimeMinutes >= 30) {
    unknowns.push("Traveller's value of time — how much the time saving is worth to you");
  }

  unknowns.push("Late-night transport availability for arrivals after midnight");

  return unknowns;
}
