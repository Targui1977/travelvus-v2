/**
 * Travelvus V2 — City-Aware Engine
 *
 * Unified engine for multi-city destination lookups.
 * London and New York share this module. Only datasets differ.
 *
 * Pure functions. No React. No side effects.
 *
 * Phase 108.0 — Part F.
 */

import type { OptionResult, CostLine } from "./types";
import type { CityId } from "@/data/cities";
import { getCityAirports, CITY_REGISTRY } from "@/data/cities";
import {
  getTransferProfile as getLondonTransfer,
  getDestinationLabel as getLondonDestLabel,
  getDestinationShortLabel as getLondonDestShortLabel,
} from "@/data/london-destinations";
import type { LondonDestinationId } from "@/data/london-destinations";
import {
  getNYTransferProfile,
  getNYDestinationLabel,
  getNYDestinationShortLabel,
} from "@/data/new-york-destinations";
import type { NewYorkDestinationId } from "@/data/new-york-destinations";

/* ── Unified Transfer Profile ─────────────────────────────── */

export interface CityTransferProfile {
  transferCostEUR: number;
  transferDurationMin: number;
  mode: string;
  isIllustrative: boolean;
}

/**
 * Get transfer profile for any city + airport + destination combination.
 */
export function getCityTransfer(
  cityId: CityId,
  airportCode: string,
  destinationId: string
): CityTransferProfile | undefined {
  switch (cityId) {
    case "london": {
      const profile = getLondonTransfer(destinationId as LondonDestinationId, airportCode);
      return profile ? {
        transferCostEUR: profile.transferCostEUR,
        transferDurationMin: profile.transferDurationMin,
        mode: profile.mode,
        isIllustrative: profile.isIllustrative,
      } : undefined;
    }
    case "new-york": {
      const profile = getNYTransferProfile(destinationId as NewYorkDestinationId, airportCode);
      return profile ? {
        transferCostEUR: profile.transferCostEUR,
        transferDurationMin: profile.transferDurationMin,
        mode: profile.mode,
        isIllustrative: profile.isIllustrative,
      } : undefined;
    }
  }
}

/* ── Destination Option Builder ───────────────────────────── */

export interface CityOptionInput {
  baseOption: OptionResult;
  airportCode: string;
  cityId: CityId;
  destinationId: string;
  ticketPriceOverride?: number;
}

/**
 * Build an OptionResult with city-specific transfer data.
 * Same logic regardless of city — only the dataset lookup differs.
 */
export function buildCityOption(input: CityOptionInput): OptionResult {
  const { baseOption, airportCode, cityId, destinationId, ticketPriceOverride } = input;

  const profile = getCityTransfer(cityId, airportCode, destinationId);
  if (!profile) {
    return baseOption;
  }

  const baseLines = baseOption.costLines;
  const newLines: CostLine[] = baseLines.map((line, i) => {
    if (i === 0 && ticketPriceOverride !== undefined) {
      return { ...line, amount: ticketPriceOverride };
    }
    if (i === baseLines.length - 1) {
      return {
        label: `${airportCode} → ${destinationId} (${profile.mode.split("→")[0]?.trim() ?? profile.mode})`,
        amount: profile.transferCostEUR,
        confidence: profile.isIllustrative ? ("estimate" as const) : ("strong" as const),
      };
    }
    return { ...line };
  });

  const realCost = newLines.reduce((sum, l) => sum + l.amount, 0);

  const originalTransferLine = baseLines[baseLines.length - 1];
  const originalTransferTime = estimateTransferTime(originalTransferLine?.amount ?? 0, airportCode);
  const baseTimeWithoutTransfer = baseOption.doorToDoorMinutes - originalTransferTime;
  const newDoorToDoorMinutes = baseTimeWithoutTransfer + profile.transferDurationMin;

  const h = Math.floor(newDoorToDoorMinutes / 60);
  const m = newDoorToDoorMinutes % 60;
  const doorToDoorLabel = `${h}h ${String(m).padStart(2, "0")}m`;

  // Get airport name from city registry
  const airports = getCityAirports(cityId);
  const airportProfile = airports.find((a) => a.code === airportCode);

  return {
    ...baseOption,
    name: airportProfile?.name ?? airportCode,
    code: airportCode,
    costLines: newLines,
    realCost,
    doorToDoorMinutes: newDoorToDoorMinutes,
    doorToDoorLabel,
  };
}

/**
 * Build both options for a city + destination combination.
 */
export function buildCityOptions(
  baseOptionA: OptionResult,
  baseOptionB: OptionResult,
  cityId: CityId,
  destinationId: string,
  ticketA?: number,
  ticketB?: number
): { optionA: OptionResult; optionB: OptionResult } {
  const airports = getCityAirports(cityId);
  return {
    optionA: buildCityOption({
      baseOption: baseOptionA,
      airportCode: airports[0]?.code ?? "STN",
      cityId,
      destinationId,
      ticketPriceOverride: ticketA,
    }),
    optionB: buildCityOption({
      baseOption: baseOptionB,
      airportCode: airports[1]?.code ?? "LHR",
      cityId,
      destinationId,
      ticketPriceOverride: ticketB,
    }),
  };
}

/* ── City Destination IDs ─────────────────────────────────── */

export function getCityDestinationIds(cityId: CityId): string[] {
  switch (cityId) {
    case "london":
      return ["paddington", "westminster", "kings-cross", "liverpool-street", "canary-wharf"];
    case "new-york":
      return ["midtown", "lower-manhattan", "financial-district", "brooklyn-downtown", "long-island-city"];
  }
}

export function getCityDefaultDestination(cityId: CityId): string {
  switch (cityId) {
    case "london": return "westminster";
    case "new-york": return "midtown";
  }
}

export function getCityDestinationLabel(cityId: CityId, destinationId: string): string {
  switch (cityId) {
    case "london":
      return getLondonDestLabel(destinationId as LondonDestinationId);
    case "new-york":
      return getNYDestinationLabel(destinationId as NewYorkDestinationId);
  }
}

export function getCityDestinationShortLabel(cityId: CityId, destinationId: string): string {
  switch (cityId) {
    case "london":
      return getLondonDestShortLabel(destinationId as LondonDestinationId);
    case "new-york":
      return getNYDestinationShortLabel(destinationId as NewYorkDestinationId);
  }
}

/* ── Helpers ──────────────────────────────────────────────── */

function estimateTransferTime(cost: number, airport: string): number {
  if (airport === "STN") return 95;
  if (airport === "LHR") return 55;
  if (airport === "JFK") return 65;
  if (airport === "EWR") return 55;
  return Math.round(cost * 1.2);
}
