/**
 * Travelvus V2 — London Destination Dataset
 *
 * Typed, reusable London destination data with transfer profiles
 * for each supported airport. Destination-aware engine V2.
 *
 * Values are illustrative planning estimates grounded in official
 * TfL/National Rail fares and timetables as of July 2026.
 * NOT live fares. NOT real-time data.
 *
 * Phase 107.2 — Part B+C.
 */

/* ── Destination ID ──────────────────────────────────────── */

export type LondonDestinationId =
  | "paddington"
  | "westminster"
  | "kings-cross"
  | "liverpool-street"
  | "canary-wharf";

export const LONDON_DESTINATION_IDS: LondonDestinationId[] = [
  "paddington",
  "westminster",
  "kings-cross",
  "liverpool-street",
  "canary-wharf",
];

export const LEGACY_DEFAULT_DESTINATION: LondonDestinationId = "westminster";

/* ── Transfer Profile ────────────────────────────────────── */

export interface DestinationTransferProfile {
  /** Human-readable transfer description, e.g. "Stansted Express + Tube" */
  mode: string;

  /** Transfer cost in EUR (illustrative, converted from GBP at ~1.17) */
  transferCostEUR: number;

  /** Transfer duration in minutes (airport → destination, including wait time) */
  transferDurationMin: number;

  /** Number of interchanges (0 = direct) */
  interchangeCount: number;

  /** Service window description, e.g. "24h Tube" or "until 00:30" */
  serviceWindow: string;

  /** Is this profile illustrative? */
  isIllustrative: boolean;
}

/* ── Destination ──────────────────────────────────────────── */

export interface LondonDestination {
  id: LondonDestinationId;
  label: string;
  shortLabel: string;
  description: string;
  zone: string;
  representativeStation: string;

  /** Transfer profile per airport */
  transfers: Record<string, DestinationTransferProfile>;

  /** Source metadata */
  sourceLabel: string;
  sourceDate: string;
  reviewedDate: string;
}

/* ── Dataset ──────────────────────────────────────────────── */

/**
 * London destination transfer data.
 *
 * Transfer costs are illustrative EUR values converted from GBP
 * at ~1.17 (editorial rate, July 2026). Times include average wait
 * and platform-to-exit walking time.
 *
 * Sources: TfL single fares, National Rail off-peak singles,
 * Stansted Express, Heathrow Express, Elizabeth Line, Piccadilly Line.
 */
export const LONDON_DESTINATIONS: Record<LondonDestinationId, LondonDestination> = {
  /* ── Paddington / West London ─────────────────────────── */
  paddington: {
    id: "paddington",
    label: "Paddington / West London",
    shortLabel: "Paddington",
    description: "Paddington, Bayswater, Notting Hill, western neighbourhoods",
    zone: "West London · Zone 1",
    representativeStation: "London Paddington",
    transfers: {
      STN: {
        mode: "Stansted Express → Tottenham Hale → Victoria Line → Circle Line",
        transferCostEUR: 35,
        transferDurationMin: 75,
        interchangeCount: 2,
        serviceWindow: "Stansted Express until 00:30, Tube until 00:30",
        isIllustrative: true,
      },
      LHR: {
        mode: "Heathrow Express direct (15 min) or Elizabeth Line direct",
        transferCostEUR: 29,
        transferDurationMin: 30,
        interchangeCount: 0,
        serviceWindow: "Heathrow Express 05:00–23:30, Elizabeth Line 05:00–23:30",
        isIllustrative: false,
      },
    },
    sourceLabel: "TfL single fares + Heathrow Express + Stansted Express",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Westminster / Central London ──────────────────────── */
  westminster: {
    id: "westminster",
    label: "Westminster / Central London",
    shortLabel: "Westminster",
    description: "Westminster, Victoria, Soho, South Bank, central tourist area",
    zone: "Central London · Zone 1",
    representativeStation: "London Westminster",
    transfers: {
      STN: {
        mode: "Stansted Express → Tottenham Hale → Victoria Line → District/Circle",
        transferCostEUR: 32,
        transferDurationMin: 70,
        interchangeCount: 2,
        serviceWindow: "Stansted Express until 00:30, Tube until 00:30",
        isIllustrative: true,
      },
      LHR: {
        mode: "Piccadilly Line direct (50 min) or Elizabeth Line → District",
        transferCostEUR: 18,
        transferDurationMin: 50,
        interchangeCount: 0,
        serviceWindow: "Piccadilly Line 24h (Night Tube Fri–Sat), Elizabeth until 23:30",
        isIllustrative: false,
      },
    },
    sourceLabel: "TfL single fares + Stansted Express",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── King's Cross / North Central ─────────────────────── */
  "kings-cross": {
    id: "kings-cross",
    label: "King's Cross / North Central",
    shortLabel: "King's Cross",
    description: "King's Cross, St Pancras, Euston, Camden, Islington",
    zone: "North Central · Zone 1",
    representativeStation: "London King's Cross",
    transfers: {
      STN: {
        mode: "Stansted Express → Tottenham Hale → Victoria Line direct (2 stops)",
        transferCostEUR: 32,
        transferDurationMin: 55,
        interchangeCount: 1,
        serviceWindow: "Stansted Express until 00:30, Victoria Line until 00:30",
        isIllustrative: true,
      },
      LHR: {
        mode: "Piccadilly Line direct (55 min) or Elizabeth Line → Circle/Met",
        transferCostEUR: 18,
        transferDurationMin: 55,
        interchangeCount: 0,
        serviceWindow: "Piccadilly Line 24h (Night Tube Fri–Sat)",
        isIllustrative: false,
      },
    },
    sourceLabel: "TfL single fares + Stansted Express",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Liverpool Street / City ───────────────────────────── */
  "liverpool-street": {
    id: "liverpool-street",
    label: "Liverpool Street / City",
    shortLabel: "Liverpool Street",
    description: "Liverpool Street, Bank, Moorgate, the City of London, Shoreditch",
    zone: "The City · Zone 1",
    representativeStation: "London Liverpool Street",
    transfers: {
      STN: {
        mode: "Stansted Express direct to Liverpool Street (50 min)",
        transferCostEUR: 28,
        transferDurationMin: 55,
        interchangeCount: 0,
        serviceWindow: "Stansted Express until 00:30, every 15 min",
        isIllustrative: false,
      },
      LHR: {
        mode: "Elizabeth Line direct (35 min) or Piccadilly → Central",
        transferCostEUR: 20,
        transferDurationMin: 40,
        interchangeCount: 0,
        serviceWindow: "Elizabeth Line 05:00–23:30, Piccadilly 24h (Night Tube Fri–Sat)",
        isIllustrative: false,
      },
    },
    sourceLabel: "TfL single fares + Stansted Express + Elizabeth Line",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Canary Wharf / Docklands ──────────────────────────── */
  "canary-wharf": {
    id: "canary-wharf",
    label: "Canary Wharf / Docklands",
    shortLabel: "Canary Wharf",
    description: "Canary Wharf, Isle of Dogs, Docklands, east London business district",
    zone: "Docklands · Zone 2",
    representativeStation: "Canary Wharf",
    transfers: {
      STN: {
        mode: "Stansted Express → Tottenham Hale → Victoria → Jubilee → DLR",
        transferCostEUR: 35,
        transferDurationMin: 85,
        interchangeCount: 3,
        serviceWindow: "Stansted Express until 00:30, Tube/DLR until 00:30",
        isIllustrative: true,
      },
      LHR: {
        mode: "Elizabeth Line direct (45 min) or Piccadilly → Jubilee",
        transferCostEUR: 22,
        transferDurationMin: 48,
        interchangeCount: 0,
        serviceWindow: "Elizabeth Line 05:00–23:30",
        isIllustrative: false,
      },
    },
    sourceLabel: "TfL single fares + Stansted Express + Elizabeth Line",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },
};

/* ── Helpers ──────────────────────────────────────────────── */

/** Get a destination by ID. Returns undefined for invalid IDs. */
export function getDestination(id: string): LondonDestination | undefined {
  return LONDON_DESTINATIONS[id as LondonDestinationId];
}

/** Get the transfer profile for a specific airport at a destination. */
export function getTransferProfile(
  destinationId: LondonDestinationId,
  airportCode: string
): DestinationTransferProfile | undefined {
  return LONDON_DESTINATIONS[destinationId]?.transfers[airportCode];
}

/** List all valid destination IDs as strings (for URL validation). */
export function isValidDestination(id: string): id is LondonDestinationId {
  return LONDON_DESTINATION_IDS.includes(id as LondonDestinationId);
}

/** Get a human-readable destination display label. */
export function getDestinationLabel(id: LondonDestinationId): string {
  return LONDON_DESTINATIONS[id]?.label ?? id;
}

/** Get the short label for compact display. */
export function getDestinationShortLabel(id: LondonDestinationId): string {
  return LONDON_DESTINATIONS[id]?.shortLabel ?? id;
}
