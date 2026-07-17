/**
 * Travelvus V2 — Interactive Evidence Generation
 *
 * Generates dynamic evidence factors from the actual CalculationResult.
 * Each factor has a weight level (critical/high/medium/supporting).
 *
 * Rules:
 *   - Max 5 factors, max 2 critical
 *   - Each factor references actual values from the context
 *   - No generic evidence unrelated to the actual result
 *
 * Pure functions. No React. No side effects.
 *
 * Phase 107.0 — Part E.
 */

import type { EvidenceFactor, EvidenceWeight } from "@/components/visual/RecommendationEvidence";
import type { InteractiveDecisionContext } from "./interactive-decision-context";
import type { DecisionState } from "@/lib/decision-intelligence";

/* ── Evidence Generation ──────────────────────────────────── */

export interface GeneratedEvidence {
  factors: EvidenceFactor[];
  trace: string[];
  limitations: string[];
  strength: string;
}

/**
 * Generate evidence factors, trace, limitations, and strength
 * from the interactive decision context.
 *
 * The function selects up to 5 factors, with at most 2 marked critical.
 * It prioritises: real trip cost > transfer cost > journey time > baggage > assumptions.
 */
export function generateEvidence(
  context: InteractiveDecisionContext,
  state: DecisionState,
  strength: string
): GeneratedEvidence {
  const { optionA, optionB, winner, savingsEuro, savingsTimeMinutes, isSupported } = context;

  const factors = buildFactors(context, state);

  // Cap: max 5 factors, max 2 critical
  const capped = capFactors(factors);

  // Decision trace: 5-step chain
  const trace = buildTrace(context);

  // Limitations: what could change the result
  const limitations = buildLimitations(context, state);

  return {
    factors: capped,
    trace,
    limitations,
    strength,
  };
}

/* ── Factor Builders ──────────────────────────────────────── */

function buildFactors(
  ctx: InteractiveDecisionContext,
  state: DecisionState
): EvidenceFactor[] {
  const factors: EvidenceFactor[] = [];

  const { optionA, optionB, winner, savingsEuro, savingsTimeMinutes } = ctx;

  const winnerOpt = winner === "A" ? optionA : optionB;
  const loserOpt = winner === "A" ? optionB : optionA;

  // 1. Real trip cost — always critical when winner is clear
  if (winner !== "tie" && savingsEuro > 0) {
    const weight: EvidenceWeight =
      savingsEuro >= 30 ? "critical" : savingsEuro >= 15 ? "high" : "medium";

    factors.push({
      title: "Real trip cost",
      explanation: `${winnerOpt.name} (${winnerOpt.code}) costs €${winnerOpt.realCost} complete — €${savingsEuro} less than ${loserOpt.name} (${loserOpt.code}) at €${loserOpt.realCost}. Ticket + baggage + seat + airport transfer.`,
      weight,
    });
  }

  // 2. Airport transfer cost — critical when it drives the result
  const transferA = lastCostLine(optionA);
  const transferB = lastCostLine(optionB);

  if (transferA || transferB) {
    const aCost = transferA?.amount ?? 0;
    const bCost = transferB?.amount ?? 0;
    const transferDiff = Math.abs(aCost - bCost);

    // Transfer is critical when it reverses the ticket-price order
    const ticketWinner = ctx.optionATicketPrice < ctx.optionBTicketPrice ? "A" : "B";
    const transferFlips = ticketWinner !== winner && winner !== "tie";

    factors.push({
      title: "Airport transfer cost",
      explanation: transferFlips
        ? `${optionA.name} transfer costs €${aCost} — this is what reverses the ticket-price advantage. ${optionB.name}'s transfer is ${bCost === 0 ? "included in the ticket" : `€${bCost}`}.`
        : `${optionA.name} transfer costs €${aCost}, ${optionB.name} transfer costs €${bCost === 0 ? "nothing extra" : `€${bCost}`}. Transfer costs change the real price of each option.`,
      weight: transferFlips ? "critical" : transferDiff >= 50 ? "high" : "medium",
    });
  }

  // 3. Total journey time
  if (savingsTimeMinutes > 0 && winner !== "tie") {
    const h = Math.floor(savingsTimeMinutes / 60);
    const m = savingsTimeMinutes % 60;
    const timeLabel = h > 0 ? `${h}h ${m}m` : `${m} min`;
    const weight: EvidenceWeight =
      savingsTimeMinutes >= 60 ? "high" : savingsTimeMinutes >= 30 ? "medium" : "supporting";

    factors.push({
      title: "Total journey time",
      explanation: `${winnerOpt.name} takes ${winnerOpt.doorToDoorLabel} door-to-door — ${timeLabel} less than ${loserOpt.name} at ${loserOpt.doorToDoorLabel}. Includes 90 min pre-flight buffer.`,
      weight,
    });
  }

  // 4. Baggage & extras
  const bagA = optionA.costLines[1];
  const bagB = optionB.costLines[1];
  if (bagA && bagB) {
    const bagDiff = Math.abs(bagA.amount - bagB.amount);

    if (ctx.bagRemoved && bagA.amount === 0) {
      factors.push({
        title: "Baggage & extras",
        explanation: `Checked bag removed from ${optionA.name}. ${optionB.name} includes checked baggage (€${bagB.amount}). If you need a bag, ${optionB.name}'s all-in price is more accurate.`,
        weight: bagDiff >= 30 ? "high" : "medium",
      });
    } else if (bagDiff > 0) {
      const included = bagA.amount === 0 ? optionA.name : bagB.amount === 0 ? optionB.name : null;
      factors.push({
        title: "Baggage & extras",
        explanation: included
          ? `${included} includes a checked bag. The other option charges €${Math.max(bagA.amount, bagB.amount)}. This widens the real-cost gap.`
          : `${optionA.name} charges €${bagA.amount} for a checked bag, ${optionB.name} charges €${bagB.amount}. Standard seat selection is included for both.`,
        weight: bagDiff >= 30 ? "high" : "supporting",
      });
    }
  }

  // 5. Destination transfer (destination-aware)
  if (ctx.isSupported && optionA.doorToDoorMinutes > 0 && optionB.doorToDoorMinutes > 0) {
    const transferA = lastCostLine(optionA);
    const transferB = lastCostLine(optionB);

    factors.push({
      title: `Transfer to ${ctx.destinationLabel}`,
      explanation: transferA && transferB
        ? `${optionB.name} reaches ${ctx.destinationLabel} with a direct connection — €${transferB.amount} and faster. ${optionA.name} takes longer and costs €${transferA.amount} with more interchanges.`
        : `${optionB.name} has better connections to ${ctx.destinationLabel}. ${optionA.name}'s transfer is longer.`,
      weight: "medium",
    });
  }

  // 6. Supported-route assumptions
  if (ctx.isSupported && ctx.assumptions.length > 0) {
    factors.push({
      title: "Calculation assumptions",
      explanation: `This comparison assumes: ${ctx.assumptions.slice(0, 3).join("; ")}. Changing any of these could affect the result.`,
      weight: "supporting",
    });
  }

  return factors;
}

/* ── Cap Factors ──────────────────────────────────────────── */

function capFactors(factors: EvidenceFactor[]): EvidenceFactor[] {
  // Count criticals
  const criticals = factors.filter((f) => f.weight === "critical");

  // If >2 criticals, demote excess to "high"
  if (criticals.length > 2) {
    let demoted = 0;
    for (const f of factors) {
      if (f.weight === "critical") {
        demoted++;
        if (demoted > 2) {
          (f as { weight: EvidenceWeight }).weight = "high";
        }
      }
    }
  }

  // Cap at 5 total
  return factors.slice(0, 5);
}

/* ── Decision Trace ───────────────────────────────────────── */

function buildTrace(ctx: InteractiveDecisionContext): string[] {
  const { optionA, optionB, winner } = ctx;

  const steps = [
    `${optionA.code} ticket €${ctx.optionATicketPrice}`,
    `${optionB.code} ticket €${ctx.optionBTicketPrice}`,
    "Add baggage + transfer",
    `Real cost: ${optionA.code} €${optionA.realCost} vs ${optionB.code} €${optionB.realCost}`,
    winner === "A"
      ? `${optionA.code} wins`
      : winner === "B"
        ? `${optionB.code} wins`
        : "Too close",
  ];

  return steps;
}

/* ── Limitations ──────────────────────────────────────────── */

function buildLimitations(
  ctx: InteractiveDecisionContext,
  state: DecisionState
): string[] {
  const limits: string[] = [];

  if (state === "recommended" || state === "conditionally_recommended" || state === "marginal") {
    limits.push("Transfer costs assume central London. A different destination may change the result.");
  }

  if (ctx.bagRemoved) {
    limits.push("Baggage assumption was edited. The result reflects 0 checked bags for Option A.");
  } else {
    limits.push("Assumes one checked bag per option. Travelling light narrows the cost gap.");
  }

  if (state === "conditionally_recommended" || state === "marginal") {
    limits.push("The recommendation is sensitive to fare changes. A €10–15 ticket price shift could change the outcome.");
  }

  limits.push("Fares are illustrative off-peak prices. Live fares vary by date and booking window.");

  return limits;
}

/* ── Helpers ──────────────────────────────────────────────── */

function lastCostLine(opt: { costLines: { amount: number }[] }): { amount: number } | undefined {
  const lines = opt.costLines;
  if (lines.length <= 1) return undefined;
  return lines[lines.length - 1];
}
