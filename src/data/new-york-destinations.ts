/**
 * Travelvus V2 — New York Destination Dataset
 *
 * Typed, reusable New York destination data with transfer profiles
 * for JFK and Newark (EWR). Follows the London dataset conventions.
 *
 * Values are illustrative planning estimates grounded in official
 * MTA/NJ Transit/AirTrain fares and timetables as of July 2026.
 * NOT live fares. NOT real-time data.
 *
 * Phase 108.0 — Part C.
 */

import type { LondonDestinationId } from "./london-destinations";

/* ── Destination ID ──────────────────────────────────────── */

export type NewYorkDestinationId =
  | "midtown"
  | "lower-manhattan"
  | "financial-district"
  | "brooklyn-downtown"
  | "long-island-city";

export const NEW_YORK_DESTINATION_IDS: NewYorkDestinationId[] = [
  "midtown",
  "lower-manhattan",
  "financial-district",
  "brooklyn-downtown",
  "long-island-city",
];

export const LEGACY_DEFAULT_NY_DESTINATION: NewYorkDestinationId = "midtown";

/* ── Transfer Profile ────────────────────────────────────── */

export interface NYDestinationTransferProfile {
  mode: string;
  transferCostEUR: number;
  transferDurationMin: number;
  interchangeCount: number;
  serviceWindow: string;
  isIllustrative: boolean;
}

/* ── Destination ──────────────────────────────────────────── */

export interface NewYorkDestination {
  id: NewYorkDestinationId;
  label: string;
  shortLabel: string;
  description: string;
  zone: string;
  representativeStation: string;

  transfers: Record<string, NYDestinationTransferProfile>;

  sourceLabel: string;
  sourceDate: string;
  reviewedDate: string;
}

/* ── Dataset ──────────────────────────────────────────────── */

/**
 * New York destination transfer data.
 *
 * Transfer costs are illustrative EUR values. Times include average wait
 * and platform-to-exit walking time. AirTrain JFK ($8.50) and NJ Transit
 * / Amtrak from EWR used as baselines, converted at ~0.92 EUR/USD.
 *
 * Sources: MTA AirTrain, NJ Transit, Amtrak, NYC Ferry, Subway.
 */
export const NEW_YORK_DESTINATIONS: Record<NewYorkDestinationId, NewYorkDestination> = {
  /* ── Midtown Manhattan ─────────────────────────────────── */
  midtown: {
    id: "midtown",
    label: "Midtown Manhattan",
    shortLabel: "Midtown",
    description: "Times Square, Grand Central, Rockefeller Center, Broadway",
    zone: "Midtown · Manhattan",
    representativeStation: "Grand Central Terminal",
    transfers: {
      JFK: {
        mode: "AirTrain → Jamaica → LIRR to Grand Central (35 min) or E subway",
        transferCostEUR: 16,
        transferDurationMin: 50,
        interchangeCount: 1,
        serviceWindow: "AirTrain 24h, LIRR until 01:00, Subway 24h",
        isIllustrative: false,
      },
      EWR: {
        mode: "AirTrain → Newark Liberty → NJ Transit/Amtrak to Penn Station (30 min)",
        transferCostEUR: 20,
        transferDurationMin: 40,
        interchangeCount: 1,
        serviceWindow: "NJ Transit until 01:30, Amtrak until 23:00",
        isIllustrative: false,
      },
    },
    sourceLabel: "MTA AirTrain + LIRR + NJ Transit",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Lower Manhattan ──────────────────────────────────── */
  "lower-manhattan": {
    id: "lower-manhattan",
    label: "Lower Manhattan",
    shortLabel: "Lower Manhattan",
    description: "Greenwich Village, SoHo, East Village, Union Square",
    zone: "Lower · Manhattan",
    representativeStation: "Union Square",
    transfers: {
      JFK: {
        mode: "AirTrain → Jamaica → LIRR to Penn Station → Subway downtown",
        transferCostEUR: 16,
        transferDurationMin: 60,
        interchangeCount: 2,
        serviceWindow: "AirTrain 24h, LIRR until 01:00, Subway 24h",
        isIllustrative: true,
      },
      EWR: {
        mode: "AirTrain → NJ Transit to Penn Station → Subway downtown",
        transferCostEUR: 20,
        transferDurationMin: 50,
        interchangeCount: 2,
        serviceWindow: "NJ Transit until 01:30, Subway 24h",
        isIllustrative: true,
      },
    },
    sourceLabel: "MTA AirTrain + NJ Transit + Subway",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Financial District ────────────────────────────────── */
  "financial-district": {
    id: "financial-district",
    label: "Financial District",
    shortLabel: "Financial District",
    description: "Wall Street, Battery Park, World Trade Center, South Ferry",
    zone: "Financial District · Manhattan",
    representativeStation: "Fulton Street",
    transfers: {
      JFK: {
        mode: "AirTrain → Jamaica → LIRR to Atlantic Terminal → 2/3/4/5 subway to Fulton St",
        transferCostEUR: 18,
        transferDurationMin: 65,
        interchangeCount: 2,
        serviceWindow: "AirTrain 24h, LIRR until 01:00, Subway 24h",
        isIllustrative: true,
      },
      EWR: {
        mode: "AirTrain → NJ Transit to Penn Station → 2/3 subway to Fulton St",
        transferCostEUR: 20,
        transferDurationMin: 55,
        interchangeCount: 2,
        serviceWindow: "NJ Transit until 01:30, Subway 24h",
        isIllustrative: true,
      },
    },
    sourceLabel: "MTA AirTrain + NJ Transit + Subway",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Brooklyn Downtown ─────────────────────────────────── */
  "brooklyn-downtown": {
    id: "brooklyn-downtown",
    label: "Brooklyn Downtown",
    shortLabel: "Brooklyn Downtown",
    description: "Downtown Brooklyn, DUMBO, Brooklyn Heights, Barclays Center",
    zone: "Downtown · Brooklyn",
    representativeStation: "Atlantic Avenue–Barclays Center",
    transfers: {
      JFK: {
        mode: "AirTrain → Jamaica → LIRR direct to Atlantic Terminal (25 min)",
        transferCostEUR: 14,
        transferDurationMin: 40,
        interchangeCount: 1,
        serviceWindow: "AirTrain 24h, LIRR until 01:00",
        isIllustrative: false,
      },
      EWR: {
        mode: "AirTrain → NJ Transit to Penn Station → 2/3/4/5 subway to Atlantic Ave",
        transferCostEUR: 20,
        transferDurationMin: 60,
        interchangeCount: 2,
        serviceWindow: "NJ Transit until 01:30, Subway 24h",
        isIllustrative: true,
      },
    },
    sourceLabel: "MTA AirTrain + LIRR + NJ Transit",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Long Island City ──────────────────────────────────── */
  "long-island-city": {
    id: "long-island-city",
    label: "Long Island City",
    shortLabel: "Long Island City",
    description: "LIC, Astoria, Queens waterfront, Court Square",
    zone: "LIC · Queens",
    representativeStation: "Court Square",
    transfers: {
      JFK: {
        mode: "AirTrain → Jamaica → E subway direct to Court Square (30 min)",
        transferCostEUR: 11,
        transferDurationMin: 45,
        interchangeCount: 1,
        serviceWindow: "AirTrain 24h, Subway E 24h",
        isIllustrative: false,
      },
      EWR: {
        mode: "AirTrain → NJ Transit to Penn Station → E subway to Court Square",
        transferCostEUR: 20,
        transferDurationMin: 60,
        interchangeCount: 2,
        serviceWindow: "NJ Transit until 01:30, Subway 24h",
        isIllustrative: true,
      },
    },
    sourceLabel: "MTA AirTrain + Subway + NJ Transit",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },
};

/* ── Helpers ──────────────────────────────────────────────── */

export function getNYDestination(id: string): NewYorkDestination | undefined {
  return NEW_YORK_DESTINATIONS[id as NewYorkDestinationId];
}

export function getNYTransferProfile(
  destinationId: NewYorkDestinationId,
  airportCode: string
): NYDestinationTransferProfile | undefined {
  return NEW_YORK_DESTINATIONS[destinationId]?.transfers[airportCode];
}

export function isValidNYDestination(id: string): id is NewYorkDestinationId {
  return NEW_YORK_DESTINATION_IDS.includes(id as NewYorkDestinationId);
}

export function getNYDestinationLabel(id: NewYorkDestinationId): string {
  return NEW_YORK_DESTINATIONS[id]?.label ?? id;
}

export function getNYDestinationShortLabel(id: NewYorkDestinationId): string {
  return NEW_YORK_DESTINATIONS[id]?.shortLabel ?? id;
}
