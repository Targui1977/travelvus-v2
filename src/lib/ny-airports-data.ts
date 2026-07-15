/**
 * New York Airport Ecosystem — Shared Data Layer
 * Structured, typed data for all NY airport pages.
 * Phase 101.0 — NY Foundation.
 */

import type { CurrencyCode } from "@/lib/currency/types";

/* ── Airport definitions ──────────────────────────────────── */

export interface NYAirport {
  code: string;
  name: string;
  city: string;
  state: string;
  distance: string;       // "24 km west of Midtown Manhattan"
  distanceKm: number;
  type: "international" | "domestic";
  currency: CurrencyCode;
  transferOptions: NYTransfer[];
  dominantAirlines: string[];
  strengths: string;
  weaknesses: string;
  bestFor: string;
  typicalTraveller: string;
}

export interface NYTransfer {
  name: string;
  time: string;
  cost: string;
  frequency: string;
}

export const NY_AIRPORTS: Record<string, NYAirport> = {
  JFK: {
    code: "JFK",
    name: "John F. Kennedy International",
    city: "New York",
    state: "NY",
    distance: "15 miles southeast of Midtown Manhattan",
    distanceKm: 24,
    type: "international",
    currency: "USD",
    transferOptions: [
      { name: "AirTrain + LIRR", time: "~35 min to Penn Station", cost: "~$15", frequency: "Every 5–10 min" },
      { name: "AirTrain + Subway (A/E)", time: "~60 min to Midtown", cost: "~$8", frequency: "Every 5–10 min" },
      { name: "Taxi (flat rate)", time: "45–75 min", cost: "$70 flat + tolls/tip", frequency: "On demand" },
      { name: "Rideshare", time: "45–75 min", cost: "$55–80", frequency: "On demand" },
    ],
    dominantAirlines: ["Delta (~35%)", "JetBlue (~26%)", "American (~15%)"],
    strengths: "Most international routes. AirTrain + LIRR is fast and reliable. Excellent terminal facilities with lounges and dining.",
    weaknesses: "Longer transfer to Midtown than LGA. Major construction through 2030 may cause delays. Rideshare pickup relocated at some terminals.",
    bestFor: "International travellers, Brooklyn and Queens destinations, JetBlue and Delta flyers.",
    typicalTraveller: "Long-haul international flyers, Brooklyn and Lower Manhattan residents, Delta and JetBlue loyalists.",
  },
  EWR: {
    code: "EWR",
    name: "Newark Liberty International",
    city: "Newark",
    state: "NJ",
    distance: "16 miles west of Midtown Manhattan",
    distanceKm: 26,
    type: "international",
    currency: "USD",
    transferOptions: [
      { name: "AirTrain + NJ Transit", time: "~40 min to Penn Station", cost: "~$15", frequency: "Every 15–30 min" },
      { name: "Taxi", time: "35–60 min", cost: "$65–85 + tolls", frequency: "On demand" },
      { name: "Rideshare", time: "35–60 min", cost: "$55–80", frequency: "On demand" },
    ],
    dominantAirlines: ["United (~70%)"],
    strengths: "Best rail connection to Midtown (NJ Transit to Penn Station in ~25 min train ride). United's East Coast hub. Best on-time performance of the three.",
    weaknesses: "In New Jersey — taxi/rideshare costs include $17.50 airport surcharge + tolls. AirTrain replacement work may involve shuttle buses in 2026.",
    bestFor: "United flyers, Midtown West and Penn Station area, New Jersey destinations.",
    typicalTraveller: "United loyalists, Midtown Manhattan business travellers, New Jersey residents.",
  },
  LGA: {
    code: "LGA",
    name: "LaGuardia",
    city: "New York",
    state: "NY",
    distance: "8 miles east of Midtown Manhattan",
    distanceKm: 13,
    type: "domestic",
    currency: "USD",
    transferOptions: [
      { name: "Q70 bus + Subway", time: "~45–60 min", cost: "~$3", frequency: "Every 10 min" },
      { name: "Taxi", time: "25–45 min", cost: "$35–55", frequency: "On demand" },
      { name: "Rideshare", time: "25–45 min", cost: "$35–55", frequency: "On demand" },
    ],
    dominantAirlines: ["Delta", "American", "Southwest"],
    strengths: "Closest to Midtown Manhattan (8 miles). $8B renovation complete — rated best airport in North America for domestic travel (Skytrax 2025). Cheapest taxi/rideshare of the three.",
    weaknesses: "No direct rail or subway connection — bus required. Domestic-only (perimeter rule). Traffic on Grand Central Parkway can erase time advantage.",
    bestFor: "Domestic flights, Midtown East and Upper East/West Side, shortest drive to Manhattan.",
    typicalTraveller: "Domestic flyers, Midtown and Uptown Manhattan residents, Delta and American loyalists.",
  },
};

/* ── Neighbourhood recommendations ────────────────────────── */

export interface NYNeighbourhood {
  area: string;
  bestAirport: string;
  note: string;
}

export const NY_NEIGHBOURHOODS: NYNeighbourhood[] = [
  { area: "Midtown Manhattan (Times Square, Hudson Yards)", bestAirport: "EWR", note: "NJ Transit to Penn Station in ~25 min train. Direct and reliable." },
  { area: "Lower Manhattan (Financial District, Wall Street)", bestAirport: "EWR", note: "NJ Transit to Penn Station, then subway downtown. Also accessible via JFK AirTrain + A train." },
  { area: "Upper East Side / Upper West Side", bestAirport: "LGA", note: "Closest distance — 8 miles. Taxi or rideshare in 25–45 min." },
  { area: "Brooklyn (Williamsburg, Park Slope, DUMBO)", bestAirport: "JFK", note: "AirTrain to A train serves most Brooklyn neighbourhoods directly." },
  { area: "Queens (Astoria, Long Island City)", bestAirport: "LGA", note: "Closest geographically to Queens neighbourhoods." },
  { area: "Downtown Brooklyn / Brooklyn Heights", bestAirport: "JFK", note: "AirTrain + A train to Jay Street-MetroTech in ~50 min." },
  { area: "Jersey City / Hoboken", bestAirport: "EWR", note: "Newark is the only logical choice for New Jersey — PATH train connects from Newark Penn Station." },
  { area: "The Bronx / Harlem", bestAirport: "LGA", note: "Closest airport to Upper Manhattan and the Bronx. M60 bus to 125th St." },
];

/* ── Market config ─────────────────────────────────────────── */

export const NY_MARKET = {
  slug: "new-york",
  name: "New York",
  currency: "USD" as CurrencyCode,
  airports: ["JFK", "EWR", "LGA"] as const,
};
