/**
 * Travelvus V2 — Paris Destination Dataset
 *
 * First factory-generated city. Transfer profiles for CDG and ORY.
 * Follows the City Factory dataset contract.
 *
 * Values are planning estimates grounded in official Île-de-France
 * Mobilités 2026 airport fares and service-public.gouv.fr taxi flat
 * fares (A15396, effective 2026-02-01), reviewed October 2026.
 * Unverified bus/tram fares are flagged isIllustrative.
 * NOT live fares. NOT real-time data.
 *
 * Phase 109.0 — Part B. Canonical dataset: Phase 123.1.
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
 * Transfer costs use the unified Paris Region ⇄ Airports ticket
 * (€14 since 2026-01-01) for rail journeys. CDG via RER B; ORY via
 * Metro 14 (primary) or Orlyval + RER B. Orlybus (~€11) and Tram T7
 * (~€4) fares are approximate and flagged isIllustrative.
 * Times include average wait and walking time.
 *
 * Sources: Île-de-France Mobilités, RATP, SNCF, Paris Aéroport, October 2026.
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
        mode: "RER B direct to Châtelet–Les Halles (35–40 min)",
        transferCostEUR: 14,
        transferDurationMin: 40,
        interchangeCount: 0,
        serviceWindow: "RER B ~05:00–00:30, every 10–15 min",
        isIllustrative: false,
      },
      ORY: {
        mode: "Metro 14 direct to Châtelet (25 min)",
        transferCostEUR: 14,
        transferDurationMin: 25,
        interchangeCount: 0,
        serviceWindow: "Metro 14 ~05:30–00:40 (approx)",
        isIllustrative: false,
      },
    },
    sourceLabel: "ÎdFM 2026 airport ticket + RATP Metro 14 / RER B",
    sourceDate: "2026-10",
    reviewedDate: "2026-10",
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
        transferCostEUR: 14,
        transferDurationMin: 50,
        interchangeCount: 1,
        serviceWindow: "RER B ~05:00–00:30, RER A until ~00:30",
        isIllustrative: false,
      },
      ORY: {
        mode: "Metro 14 to Châtelet → RER A to La Défense (40 min)",
        transferCostEUR: 14,
        transferDurationMin: 40,
        interchangeCount: 1,
        serviceWindow: "Metro 14 ~05:30–00:40, RER A until ~00:30 (approx)",
        isIllustrative: false,
      },
    },
    sourceLabel: "RATP Metro 14 / RER B + RER A",
    sourceDate: "2026-10",
    reviewedDate: "2026-10",
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
        mode: "RER B direct to Denfert-Rochereau (~40 min) → short Metro to Montparnasse",
        transferCostEUR: 14,
        transferDurationMin: 45,
        interchangeCount: 1,
        serviceWindow: "RER B ~05:00–00:30, Metro until ~01:00 (approx)",
        isIllustrative: false,
      },
      ORY: {
        mode: "Orlybus direct to Denfert-Rochereau (~30 min) → short Metro to Montparnasse",
        transferCostEUR: 11,
        transferDurationMin: 35,
        interchangeCount: 1,
        serviceWindow: "Orlybus 06:00–00:30, Metro until ~01:00 (approx)",
        isIllustrative: true,
      },
    },
    sourceLabel: "Orlybus (approx) + RATP RER B + Metro",
    sourceDate: "2026-10",
    reviewedDate: "2026-10",
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
        mode: "RER B direct to Gare du Nord (35–40 min)",
        transferCostEUR: 14,
        transferDurationMin: 35,
        interchangeCount: 0,
        serviceWindow: "RER B ~05:00–00:30, every 10–15 min",
        isIllustrative: false,
      },
      ORY: {
        mode: "Metro 14 to Châtelet → RER B/D direct to Gare du Nord (45 min)",
        transferCostEUR: 14,
        transferDurationMin: 45,
        interchangeCount: 1,
        serviceWindow: "Metro 14 ~05:30–00:40, RER until ~00:30 (approx)",
        isIllustrative: false,
      },
    },
    sourceLabel: "RATP Metro 14 + RER B/D",
    sourceDate: "2026-10",
    reviewedDate: "2026-10",
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
        mode: "RER B to Châtelet → Metro 14 to Bercy (50 min)",
        transferCostEUR: 14,
        transferDurationMin: 50,
        interchangeCount: 1,
        serviceWindow: "RER B ~05:00–00:30, Metro 14 until ~00:40 (approx)",
        isIllustrative: false,
      },
      ORY: {
        mode: "Metro 14 direct to Bercy (20 min)",
        transferCostEUR: 14,
        transferDurationMin: 20,
        interchangeCount: 0,
        serviceWindow: "Metro 14 ~05:30–00:40 (approx)",
        isIllustrative: false,
      },
    },
    sourceLabel: "RATP Metro 14 + RER B",
    sourceDate: "2026-10",
    reviewedDate: "2026-10",
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
