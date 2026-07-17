/**
 * Travelvus V2 — Interactive Decision Context
 *
 * Typed bridge between the raw CalculationResult and the reasoning factory.
 * Includes only inputs currently available or safely derivable.
 *
 * Pure types + factory function. No React. No side effects.
 *
 * Phase 107.0 — Part B.
 */

import type { OptionResult, OptionId } from "@/lib/types";
import type { CalculationResult } from "@/lib/calculation-contract";
import type { LondonDestinationId } from "@/data/london-destinations";
import { getDestinationLabel, getDestinationShortLabel, getTransferProfile } from "@/data/london-destinations";

/* ── Context Contract ─────────────────────────────────────── */

export interface InteractiveDecisionContext {
  /* From normalized input */
  /** Origin airport code, e.g. "BER" */
  originCode: string;

  /** Option A airport code, e.g. "STN" */
  optionACode: string;

  /** Option B airport code, e.g. "LHR" */
  optionBCode: string;

  /** Option A visible ticket price (EUR) */
  optionATicketPrice: number;

  /** Option B visible ticket price (EUR) */
  optionBTicketPrice: number;

  /* From CalculationResult */
  optionA: OptionResult;
  optionB: OptionResult;
  winner: "A" | "B" | "tie";
  savingsEuro: number;
  savingsTimeMinutes: number;
  savingsTimeLabel: string;
  isSupported: boolean;
  assumptions: string[];

  /* Edit state */
  /** Whether checked baggage has been removed from Option A */
  bagRemoved: boolean;

  /** Index of the cost line that was edited (if any) */
  editedLineIndex?: number;

  /** Winner before the current edit (if a change occurred) */
  previousWinner?: "A" | "B" | "tie";

  /* Destination */
  /** Selected London destination ID */
  londonDestinationId: LondonDestinationId;
  /** Display label for the selected destination */
  londonDestinationLabel: string;
  /** Representative station */
  representativeStation: string;
  /** Whether the destination was explicitly selected (vs legacy default) */
  destinationExplicitlySelected: boolean;

  /* Currency treatment */
  /** All monetary values in this context use this currency */
  comparisonCurrency: "EUR";
}

/* ── Factory ──────────────────────────────────────────────── */

/**
 * Build an InteractiveDecisionContext from a CalculationResult
 * and optional edit-state overrides.
 *
 * Pure function. No side effects.
 */
export function buildDecisionContext(
  result: CalculationResult,
  overrides?: {
    bagRemoved?: boolean;
    editedLineIndex?: number;
    previousWinner?: OptionId | "tie";
    londonDestinationId?: string;
    destinationExplicitlySelected?: boolean;
  }
): InteractiveDecisionContext {
  const { optionA, optionB } = result;

  const destId = (overrides?.londonDestinationId ?? "westminster") as LondonDestinationId;

  return {
    originCode: "BER",
    optionACode: extractCode(optionA.code),
    optionBCode: extractCode(optionB.code),
    optionATicketPrice: optionA.costLines[0]?.amount ?? 0,
    optionBTicketPrice: optionB.costLines[0]?.amount ?? 0,

    optionA,
    optionB,
    winner: result.winner,
    savingsEuro: result.savingsEuro,
    savingsTimeMinutes: result.savingsTimeMinutes,
    savingsTimeLabel: result.savingsTimeLabel,
    isSupported: result.isSupported,
    assumptions: result.assumptions,

    bagRemoved: overrides?.bagRemoved ?? false,
    editedLineIndex: overrides?.editedLineIndex,
    previousWinner: overrides?.previousWinner,

    londonDestinationId: destId,
    londonDestinationLabel: getDestinationLabel(destId),
    representativeStation: getDestinationShortLabel(destId),
    destinationExplicitlySelected: overrides?.destinationExplicitlySelected ?? false,

    comparisonCurrency: "EUR",
  };
}

/* ── Helpers ──────────────────────────────────────────────── */

function extractCode(airport: string): string {
  // "Stansted" → "STN", "Heathrow" → "LHR"
  // option.code is already the 3-letter code
  return airport;
}
