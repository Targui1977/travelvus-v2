/**
 * Travelvus V2 — Calculation Contract
 *
 * The typed, reusable output of the real decision engine.
 * This contract is the SINGLE SOURCE OF TRUTH for the animation layer.
 *
 * The animation layer MUST:
 *  - Consume this contract
 *  - NEVER recalculate or alter the winner
 *  - NEVER fabricate values not present in this contract
 *
 * Phase 88.1 — Foundation.
 */

import type { OptionResult, VerdictData } from "./types";

/* ── Step-level data ─────────────────────────────────────── */

/** A single calculation stage — maps 1:1 to a real engine operation */
export interface CalculationStage {
  /** Unique id for this stage, e.g. "reading_flight_details" */
  id: string;
  /** Visible label, e.g. "Reading your flight details" */
  label: string;
  /** What the engine is doing right now, e.g. "Confirming ticket prices and routes" */
  detail: string;
  /** Resolved value for Option A (shown when this step completes) */
  valueA?: string;
  /** Resolved value for Option B (shown when this step completes) */
  valueB?: string;
  /** Evidence provenance for this step, e.g. "TfL off-peak single · contactless" */
  evidenceNote?: string;
}

/* ── Complete calculation result ─────────────────────────── */

export interface CalculationResult {
  /** The 7 calculation stages in order */
  stages: CalculationStage[];

  /** Normalized and validated option data */
  optionA: OptionResult;
  optionB: OptionResult;

  /** Final verdict */
  verdict: VerdictData;

  /** Summary values for the verdict stats */
  realCostA: number;
  realCostB: number;
  savingsEuro: number;
  savingsTimeMinutes: number;
  savingsTimeLabel: string;
  winner: "A" | "B" | "tie";

  /** Whether this was a full supported comparison with all data */
  isSupported: boolean;

  /** Warnings about data limitations (empty if fully supported) */
  warnings: string[];

  /** Assumptions made during calculation */
  assumptions: string[];

  /** When this calculation was performed (epoch ms) */
  calculatedAt: number;
}

/* ── Factory ──────────────────────────────────────────────── */

/**
 * Build a CalculationResult from engine output.
 * Pure function — no side effects, no React, no DOM.
 *
 * The animation layer calls this ONCE and consumes the result.
 * It never re-derives values.
 */
export function buildCalculationResult(params: {
  optionA: OptionResult;
  optionB: OptionResult;
  verdict: VerdictData;
  savingsEuro: number;
  savingsTimeMinutes: number;
  savingsTimeLabel: string;
  isSupported: boolean;
  calculatedAt: number;
}): CalculationResult {
  const { optionA, optionB, verdict, savingsEuro, savingsTimeMinutes, savingsTimeLabel, isSupported, calculatedAt } = params;

  const winner = verdict.winner;
  const realCostA = optionA.realCost;
  const realCostB = optionB.realCost;

  const ticketA = optionA.costLines[0]?.amount ?? 0;
  const ticketB = optionB.costLines[0]?.amount ?? 0;
  const baggageA = optionA.costLines[1];
  const baggageB = optionB.costLines[1];
  const transferA = optionA.costLines[optionA.costLines.length - 1];
  const transferB = optionB.costLines[optionB.costLines.length - 1];

  const stages: CalculationStage[] = [
    {
      id: "reading_flight_details",
      label: "Reading your flight details",
      detail: "Confirming ticket prices and routes",
      valueA: formatMoney(ticketA),
      valueB: formatMoney(ticketB),
    },
    {
      id: "adding_baggage_and_extras",
      label: "Adding baggage and extras",
      detail: "Including seat selection and checked baggage",
      valueA: baggageA ? (baggageA.amount === 0 ? "Included" : `+${formatMoney(baggageA.amount)}`) : "—",
      valueB: baggageB ? (baggageB.amount === 0 ? "Included" : `+${formatMoney(baggageB.amount)}`) : "—",
      evidenceNote: "Standard airline extras · one checked bag",
    },
    {
      id: "calculating_airport_transfers",
      label: "Calculating airport transfers",
      detail: "Estimating door-to-door transit from each airport",
      valueA: transferA ? `+${formatMoney(transferA.amount)}` : "—",
      valueB: transferB ? `+${formatMoney(transferB.amount)}` : "—",
      evidenceNote: isSupported
        ? "TfL off-peak single · contactless/Oyster"
        : "Estimate based on airport location",
    },
    {
      id: "measuring_journey_time",
      label: "Measuring total journey time",
      detail: "Door-to-door for both options",
      valueA: optionA.doorToDoorLabel,
      valueB: optionB.doorToDoorLabel,
      evidenceNote: "Includes 90 min pre-flight buffer",
    },
    {
      id: "calculating_real_cost",
      label: "Calculating real trip cost",
      detail: "Adding ticket, baggage, seat and transfer",
      valueA: formatMoney(realCostA),
      valueB: formatMoney(realCostB),
      evidenceNote: "Not the ticket — the complete journey",
    },
    {
      id: "comparing_journeys",
      label: "Comparing both journeys",
      detail: "Weighing cost against time and convenience",
      valueA: winner === "A" ? "Wins on cost" : `€${Math.abs(savingsEuro)} more`,
      valueB: winner === "B" ? "Wins on cost" : `€${Math.abs(savingsEuro)} more`,
      evidenceNote: realCostA === realCostB ? "Too close to call on money alone" : undefined,
    },
    {
      id: "preparing_verdict",
      label: "Preparing your Travelvus Verdict",
      detail: "Building the final recommendation",
      valueA: undefined,
      valueB: undefined,
      evidenceNote: undefined,
    },
  ];

  const warnings: string[] = [];
  if (!isSupported) {
    warnings.push(
      "This airport pair has limited transfer data. Ticket comparison only — transfer costs are estimates."
    );
  }

  const assumptions: string[] = [
    "One checked bag per option (unless removed)",
    "Standard seat selection",
    "Off-peak public transport fares where available",
    "90-minute pre-flight buffer included in journey time",
    "Transfer costs assume central London destination",
  ];

  return {
    stages,
    optionA,
    optionB,
    verdict,
    realCostA,
    realCostB,
    savingsEuro,
    savingsTimeMinutes,
    savingsTimeLabel,
    winner,
    isSupported,
    warnings,
    assumptions,
    calculatedAt,
  };
}

/* ── Helpers ──────────────────────────────────────────────── */

function formatMoney(n: number): string {
  return `€${n}`;
}
