/**
 * Travelvus V2 — Paris Destination Dataset
 *
 * First factory-generated city. Transfer profiles for CDG and ORY.
 * Follows the City Factory dataset contract.
 *
 * Values are illustrative planning estimates grounded in official
 * RATP/SNCF/Paris Aéroport fares and timetables as of July 2026.
 * NOT live fares. NOT real-time data.
 *
 * Phase 109.0 — Part B.
 */

/* ── Destination ID ──────────────────────────────────────── */

export type ParisDestinationId =
  | "central-paris"
  | "la-defense"
  | "montparnasse"
  | "gare-du-nord"
  | "bercy";

export const PARIS_DESTINATION_IDS: ParisDestinationId[] = [
  "central-paris",
  "la-defense",
  "montparnasse",
  "gare-du-nord",
  "bercy",
];

export const LEGACY_DEFAULT_PARIS_DESTINATION: ParisDestinationId = "central-paris";

/* ── Transfer Profile ────────────────────────────────────── */

export interface ParisTransferProfile {
  mode: string;
  transferCostEUR: number;
  transferDurationMin: number;
  interchangeCount: number;
  serviceWindow: string;
  isIllustrative: boolean;
}

/* ── Destination ──────────────────────────────────────────── */

export interface ParisDestination {
  id: ParisDestinationId;
  label: string;
  shortLabel: string;
  description: string;
  zone: string;
  representativeStation: string;
  transfers: Record<string, ParisTransferProfile>;
  sourceLabel: string;
  sourceDate: string;
  reviewedDate: string;
}

/* ── Dataset ──────────────────────────────────────────────── */

/**
 * Paris destination transfer data.
 *
 * Transfer costs are illustrative EUR values. CDG transfer via RER B
 * (€11.80 single) and ORY via Orlyval + RER B / Orlybus / Metro.
 * Times include average wait and walking time.
 *
 * Sources: RATP, SNCF, Paris Aéroport, Île-de-France Mobilités, July 2026.
 */
export const PARIS_DESTINATIONS: Record<ParisDestinationId, ParisDestination> = {
  /* ── Central Paris ─────────────────────────────────────── */
  "central-paris": {
    id: "central-paris",
    label: "Central Paris",
    shortLabel: "Central Paris",
    description: "Châtelet, Louvre, Opéra, Le Marais, Saint-Germain",
    zone: "Central · Zone 1",
    representativeStation: "Châtelet–Les Halles",
    transfers: {
      CDG: {
        mode: "RER B direct to Châtelet–Les Halles (35 min)",
        transferCostEUR: 12,
        transferDurationMin: 40,
        interchangeCount: 0,
        serviceWindow: "RER B 05:00–00:30, every 10–15 min",
        isIllustrative: false,
      },
      ORY: {
        mode: "Orlyval → Antony → RER B to Châtelet (45 min)",
        transferCostEUR: 15,
        transferDurationMin: 50,
        interchangeCount: 1,
        serviceWindow: "Orlyval 06:00–23:30, RER B until 00:30",
        isIllustrative: false,
      },
    },
    sourceLabel: "RATP RER B + Orlyval",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── La Défense ────────────────────────────────────────── */
  "la-defense": {
    id: "la-defense",
    label: "La Défense",
    shortLabel: "La Défense",
    description: "La Défense business district, Courbevoie, Puteaux",
    zone: "La Défense · Zone 3",
    representativeStation: "La Défense–Grande Arche",
    transfers: {
      CDG: {
        mode: "RER B to Châtelet → RER A to La Défense (50 min)",
        transferCostEUR: 12,
        transferDurationMin: 55,
        interchangeCount: 1,
        serviceWindow: "RER B 05:00–00:30, RER A until 00:30",
        isIllustrative: true,
      },
      ORY: {
        mode: "Orlyval → Antony → RER B to Châtelet → RER A to La Défense (65 min)",
        transferCostEUR: 15,
        transferDurationMin: 70,
        interchangeCount: 2,
        serviceWindow: "Orlyval 06:00–23:30, RER until 00:30",
        isIllustrative: true,
      },
    },
    sourceLabel: "RATP RER B/A + Orlyval",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Montparnasse ──────────────────────────────────────── */
  montparnasse: {
    id: "montparnasse",
    label: "Montparnasse",
    shortLabel: "Montparnasse",
    description: "Montparnasse, Denfert-Rochereau, 14e arrondissement",
    zone: "Montparnasse · Zone 1",
    representativeStation: "Gare Montparnasse",
    transfers: {
      CDG: {
        mode: "RER B to Denfert-Rochereau → Metro 4/6 to Montparnasse (50 min)",
        transferCostEUR: 12,
        transferDurationMin: 55,
        interchangeCount: 1,
        serviceWindow: "RER B 05:00–00:30, Metro until 01:00",
        isIllustrative: true,
      },
      ORY: {
        mode: "Orlybus direct to Denfert-Rochereau → Metro to Montparnasse (40 min)",
        transferCostEUR: 11,
        transferDurationMin: 35,
        interchangeCount: 1,
        serviceWindow: "Orlybus 06:00–00:30, Metro until 01:00",
        isIllustrative: false,
      },
    },
    sourceLabel: "RATP RER B + Orlybus + Metro",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Gare du Nord ──────────────────────────────────────── */
  "gare-du-nord": {
    id: "gare-du-nord",
    label: "Gare du Nord",
    shortLabel: "Gare du Nord",
    description: "Gare du Nord, Gare de l'Est, 10e arrondissement",
    zone: "Gare du Nord · Zone 1",
    representativeStation: "Gare du Nord",
    transfers: {
      CDG: {
        mode: "RER B direct to Gare du Nord (30 min)",
        transferCostEUR: 12,
        transferDurationMin: 35,
        interchangeCount: 0,
        serviceWindow: "RER B 05:00–00:30, every 10–15 min",
        isIllustrative: false,
      },
      ORY: {
        mode: "Orlyval → Antony → RER B direct to Gare du Nord (55 min)",
        transferCostEUR: 15,
        transferDurationMin: 55,
        interchangeCount: 1,
        serviceWindow: "Orlyval 06:00–23:30, RER B until 00:30",
        isIllustrative: true,
      },
    },
    sourceLabel: "RATP RER B + Orlyval",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },

  /* ── Bercy ──────────────────────────────────────────────── */
  bercy: {
    id: "bercy",
    label: "Bercy",
    shortLabel: "Bercy",
    description: "Bercy, Gare de Lyon, 12e arrondissement, Accor Arena",
    zone: "Bercy · Zone 1",
    representativeStation: "Gare de Lyon",
    transfers: {
      CDG: {
        mode: "RER B to Châtelet → RER A/Metro 14 to Gare de Lyon (45 min)",
        transferCostEUR: 12,
        transferDurationMin: 50,
        interchangeCount: 1,
        serviceWindow: "RER B 05:00–00:30, RER A until 00:30",
        isIllustrative: true,
      },
      ORY: {
        mode: "Orlyval → Antony → RER B to Châtelet → Metro 14 to Gare de Lyon (60 min)",
        transferCostEUR: 15,
        transferDurationMin: 65,
        interchangeCount: 2,
        serviceWindow: "Orlyval 06:00–23:30, RER/Metro until 00:30",
        isIllustrative: true,
      },
    },
    sourceLabel: "RATP RER B + Metro 14 + Orlyval",
    sourceDate: "2026-07",
    reviewedDate: "2026-07",
  },
};

/* ── Helpers ──────────────────────────────────────────────── */

export function getParisDestination(id: string): ParisDestination | undefined {
  return PARIS_DESTINATIONS[id as ParisDestinationId];
}

export function getParisTransferProfile(
  destinationId: ParisDestinationId,
  airportCode: string
): ParisTransferProfile | undefined {
  return PARIS_DESTINATIONS[destinationId]?.transfers[airportCode];
}

export function isValidParisDestination(id: string): id is ParisDestinationId {
  return PARIS_DESTINATION_IDS.includes(id as ParisDestinationId);
}

export function getParisDestinationLabel(id: ParisDestinationId): string {
  return PARIS_DESTINATIONS[id]?.label ?? id;
}

export function getParisDestinationShortLabel(id: ParisDestinationId): string {
  return PARIS_DESTINATIONS[id]?.shortLabel ?? id;
}
