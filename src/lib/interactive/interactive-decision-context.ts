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
import type { CityId } from "@/data/cities";
import { getCityLabel, getCityAirports } from "@/data/cities";
import { getCityDestinationLabel, getCityDestinationShortLabel, getCityTransfer } from "@/lib/city-engine";

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

  /* City */
  /** Selected city ID */
  cityId: CityId;
  /** Display label for the selected city */
  cityLabel: string;

  /* Destination */
  /** Selected destination ID */
  destinationId: string;
  /** Display label for the selected destination */
  destinationLabel: string;
  /** Representative station */
  representativeStation: string;
  /** Whether the destination was explicitly selected (vs legacy default) */
  destinationExplicitlySelected: boolean;

  /** @deprecated Legacy — use destinationId */
  londonDestinationId: string;
  /** @deprecated Legacy — use destinationLabel */
  londonDestinationLabel: string;

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
    cityId?: string;
    londonDestinationId?: string;
    destinationExplicitlySelected?: boolean;
  }
): InteractiveDecisionContext {
  const { optionA, optionB } = result;

  const cityId = (overrides?.cityId ?? "london") as CityId;
  const destId = overrides?.londonDestinationId ?? "westminster";

  const destLabel = getCityDestinationLabel(cityId, destId);
  const destShort = getCityDestinationShortLabel(cityId, destId);
  const cityLabelStr = getCityLabel(cityId);

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

    cityId,
    cityLabel: cityLabelStr,
    destinationId: destId,
    destinationLabel: destLabel,
    representativeStation: destShort,
    destinationExplicitlySelected: overrides?.destinationExplicitlySelected ?? false,

    // Legacy aliases
    londonDestinationId: destId,
    londonDestinationLabel: destLabel,

    comparisonCurrency: "EUR",
  };
}

/* ── Helpers ──────────────────────────────────────────────── */

function extractCode(airport: string): string {
  // "Stansted" → "STN", "Heathrow" → "LHR"
  // option.code is already the 3-letter code
  return airport;
}
