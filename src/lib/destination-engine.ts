/**
 * Travelvus V2 — Destination-Aware Engine
 *
 * Builds destination-specific OptionResult objects by replacing
 * the airport transfer cost/time with values from the London dataset.
 *
 * Pure functions. No React. No side effects.
 *
 * Phase 107.2 — Parts F+G.
 */

import type { OptionResult, CostLine } from "./types";
import type { LondonDestinationId } from "@/data/london-destinations";
import {
  getTransferProfile,
  LEGACY_DEFAULT_DESTINATION,
  isValidDestination,
} from "@/data/london-destinations";

/* ── Destination-aware Option Builder ────────────────────── */

/** Data needed to build a destination-specific option. */
export interface DestinationOptionInput {
  /** Base option from mock data (ticket, bag, seat, origin transfer) */
  baseOption: OptionResult;
  /** Airport code (STN, LHR) */
  airportCode: string;
  /** London destination ID */
  destinationId: LondonDestinationId;
  /** Override ticket price (from user input) */
  ticketPriceOverride?: number;
}

/**
 * Build an OptionResult with destination-specific transfer data.
 *
 * Replaces the last cost line (airport → destination transfer)
 * and recalculates realCost + doorToDoorMinutes.
 */
export function buildDestinationOption(
  input: DestinationOptionInput
): OptionResult {
  const { baseOption, airportCode, destinationId, ticketPriceOverride } = input;

  const profile = getTransferProfile(destinationId, airportCode);
  if (!profile) {
    // Fallback: return base option unchanged
    return baseOption;
  }

  // Build new cost lines: keep ticket, bag, seat, origin → airport
  // Replace the last cost line (transfer) with destination-specific data
  const baseLines = baseOption.costLines;
  const newLines: CostLine[] = baseLines.map((line, i) => {
    if (i === 0 && ticketPriceOverride !== undefined) {
      return { ...line, amount: ticketPriceOverride };
    }
    if (i === baseLines.length - 1) {
      // Replace transfer line
      return {
        label: `${airportCode} → ${destinationId} (${profile.mode.split("→")[0]?.trim() ?? profile.mode})`,
        amount: profile.transferCostEUR,
        confidence: profile.isIllustrative ? ("estimate" as const) : ("strong" as const),
      };
    }
    return { ...line };
  });

  // Recalculate realCost
  const realCost = newLines.reduce((sum, l) => sum + l.amount, 0);

  // Recalculate door-to-door time:
  // Base time = ticket-based time (flight + buffer + origin transfer)
  // The original doorToDoorMinutes includes all of this + transfer
  // We need to compute: baseTime + newTransferTime
  const originalTransferLine = baseLines[baseLines.length - 1];
  const originalTransferTime = estimateTransferTimeFromCost(
    originalTransferLine?.amount ?? 0,
    airportCode
  );
  const baseTimeWithoutTransfer =
    baseOption.doorToDoorMinutes - originalTransferTime;
  const newDoorToDoorMinutes =
    baseTimeWithoutTransfer + profile.transferDurationMin;

  // Format door-to-door label
  const h = Math.floor(newDoorToDoorMinutes / 60);
  const m = newDoorToDoorMinutes % 60;
  const doorToDoorLabel = `${h}h ${String(m).padStart(2, "0")}m`;

  return {
    ...baseOption,
    costLines: newLines,
    realCost,
    doorToDoorMinutes: newDoorToDoorMinutes,
    doorToDoorLabel,
  };
}

/**
 * Build both options for a given destination.
 */
export function buildDestinationOptions(
  baseOptionA: OptionResult,
  baseOptionB: OptionResult,
  destinationId: LondonDestinationId,
  ticketA?: number,
  ticketB?: number
): { optionA: OptionResult; optionB: OptionResult } {
  return {
    optionA: buildDestinationOption({
      baseOption: baseOptionA,
      airportCode: "STN",
      destinationId,
      ticketPriceOverride: ticketA,
    }),
    optionB: buildDestinationOption({
      baseOption: baseOptionB,
      airportCode: "LHR",
      destinationId,
      ticketPriceOverride: ticketB,
    }),
  };
}

/**
 * Resolve a destination ID from a URL parameter or other string input.
 * Returns the legacy default (Westminster) for missing/invalid values.
 */
export function resolveDestination(raw?: string): LondonDestinationId {
  if (raw && isValidDestination(raw)) return raw;
  return LEGACY_DEFAULT_DESTINATION;
}

/* ── Helpers ──────────────────────────────────────────────── */

/** Estimate transfer duration from cost for original mock data base values. */
function estimateTransferTimeFromCost(cost: number, airport: string): number {
  // Rough inverse from the canonical data:
  // STN: €74 → ~95 min (night taxi to Central London from mock data)
  // LHR: €18 → ~55 min (Piccadilly Line from mock data)
  if (airport === "STN") return 95;
  if (airport === "LHR") return 55;
  return Math.round(cost * 1.2);
}
