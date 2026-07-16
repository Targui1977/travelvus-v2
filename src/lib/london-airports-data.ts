/**
 * London Airport Ecosystem — Shared Data Layer
 * Structured, typed data for all London airport pages.
 * Mirrors the New York ny-airports-data.ts pattern.
 * Phase 103.0 — Framework Consolidation.
 */

import type { CurrencyCode } from "@/lib/currency/types";

/* ── Airport definitions ──────────────────────────────────── */

export interface LondonAirport {
  code: string;
  name: string;
  city: string;
  distance: string;
  distanceKm: number;
  type: "international" | "domestic";
  currency: CurrencyCode;
  transferOptions: LondonTransfer[];
  dominantAirlines: string[];
  strengths: string;
  weaknesses: string;
  bestFor: string;
  typicalTraveller: string;
}

export interface LondonTransfer {
  name: string;
  time: string;
  cost: string;
  frequency: string;
}

export const LONDON_AIRPORTS: Record<string, LondonAirport> = {
  LHR: {
    code: "LHR",
    name: "Heathrow",
    city: "London",
    distance: "24km west of central London",
    distanceKm: 24,
    type: "international",
    currency: "GBP",
    transferOptions: [
      { name: "Elizabeth Line", time: "~35 min to central London", cost: "~£12 off-peak", frequency: "Every 10–15 min" },
      { name: "Heathrow Express", time: "15 min to Paddington", cost: "~£25", frequency: "Every 15 min" },
      { name: "Piccadilly Line", time: "50–60 min to central London", cost: "~£5–6", frequency: "Every 5–10 min" },
    ],
    dominantAirlines: ["British Airways", "Virgin Atlantic", "American Airlines"],
    strengths: "Best public transport of any London airport — three separate rail options. Most international routes. Excellent terminal facilities.",
    weaknesses: "Most expensive for budget travellers. Furthest from east and south London.",
    bestFor: "International travellers, business, west and central London.",
    typicalTraveller: "Long-haul flyers, BA and Virgin passengers, business travellers heading to west London.",
  },
  LGW: {
    code: "LGW",
    name: "Gatwick",
    city: "London",
    distance: "45km south of central London",
    distanceKm: 45,
    type: "international",
    currency: "GBP",
    transferOptions: [
      { name: "Gatwick Express", time: "~30 min to Victoria", cost: "~£20 off-peak", frequency: "Every 15 min" },
      { name: "Southern / Thameslink", time: "40–50 min to London Bridge", cost: "~£15", frequency: "Every 10–15 min" },
    ],
    dominantAirlines: ["easyJet", "British Airways", "TUI"],
    strengths: "Single-terminal design (mostly South Terminal) is simple to navigate. Strong easyJet presence. Direct trains to south London and Brighton.",
    weaknesses: "Further from north and east London. Fewer international long-haul options than Heathrow.",
    bestFor: "South London, Brighton, European budget flights.",
    typicalTraveller: "European city-breakers, south London residents, easyJet passengers.",
  },
  STN: {
    code: "STN",
    name: "Stansted",
    city: "London",
    distance: "55km northeast of central London",
    distanceKm: 55,
    type: "international",
    currency: "GBP",
    transferOptions: [
      { name: "Stansted Express", time: "~50 min to Liverpool Street", cost: "~£17 off-peak", frequency: "Every 15–30 min" },
      { name: "National Express coach", time: "75–90 min to central London", cost: "~£10–15", frequency: "Every 30–60 min" },
    ],
    dominantAirlines: ["Ryanair"],
    strengths: "Ryanair's largest UK base — widest budget route network. Efficient single-terminal layout.",
    weaknesses: "Furthest from central London. Coach or train transfer adds 50–90 min. Few late-night options.",
    bestFor: "Budget travellers, northeast London, Cambridge and East Anglia.",
    typicalTraveller: "Budget-conscious travellers, Ryanair passengers, Cambridge residents.",
  },
  LTN: {
    code: "LTN",
    name: "Luton",
    city: "London",
    distance: "45km north of central London",
    distanceKm: 45,
    type: "international",
    currency: "GBP",
    transferOptions: [
      { name: "DART + Thameslink", time: "~40 min to St Pancras", cost: "~£15", frequency: "Every 10–15 min" },
      { name: "National Express coach", time: "60–75 min to central London", cost: "~£10–12", frequency: "Every 30–60 min" },
    ],
    dominantAirlines: ["Wizz Air", "easyJet"],
    strengths: "Wizz Air and easyJet hub. Low ticket prices. DART shuttle to Luton Airport Parkway is fast (5 min).",
    weaknesses: "No direct rail — shuttle bus (DART) required to reach station. Limited airline choice beyond budget carriers.",
    bestFor: "Budget airlines, north London, Milton Keynes and Home Counties.",
    typicalTraveller: "Budget travellers, Wizz Air and easyJet passengers, north London residents.",
  },
  LCY: {
    code: "LCY",
    name: "London City",
    city: "London",
    distance: "10km east of central London",
    distanceKm: 10,
    type: "domestic",
    currency: "GBP",
    transferOptions: [
      { name: "DLR", time: "~25 min to Bank", cost: "~£3 off-peak", frequency: "Every 5–10 min" },
    ],
    dominantAirlines: ["BA CityFlyer"],
    strengths: "Closest airport to central London (10km). DLR connection. Tiny airport — 20 min from landing to train. No crowds.",
    weaknesses: "Limited routes (mostly European business destinations). Short runway — no long-haul. Higher ticket prices.",
    bestFor: "Business travellers, Canary Wharf and the City, short-haul European flights.",
    typicalTraveller: "Business travellers, Canary Wharf and City workers, short-haul European flyers.",
  },
};

/* ── Neighbourhood recommendations ────────────────────────── */

export interface LondonNeighbourhood {
  area: string;
  bestAirport: string;
  note: string;
}

export const LONDON_NEIGHBOURHOODS: LondonNeighbourhood[] = [
  { area: "West London (Paddington, Kensington)", bestAirport: "LHR", note: "Heathrow Express to Paddington in 15 min. Elizabeth Line covers all west London." },
  { area: "Central London (Westminster, Soho, Covent Garden)", bestAirport: "LHR", note: "Elizabeth Line to Tottenham Court Road and Bond Street in ~30 min." },
  { area: "The City & Canary Wharf", bestAirport: "LCY", note: "DLR from City Airport to Bank in 25 min. Canary Wharf in 20 min." },
  { area: "South London (Brixton, Croydon, Clapham)", bestAirport: "LGW", note: "Gatwick Express and Southern trains connect directly to Clapham Junction and Victoria." },
  { area: "East London (Stratford, Hackney, Shoreditch)", bestAirport: "STN", note: "Stansted Express to Liverpool Street — close to Shoreditch and east London." },
  { area: "North London (Camden, Islington, King's Cross)", bestAirport: "STN", note: "Stansted Express to Tottenham Hale for Victoria Line connections." },
  { area: "Brighton & South Coast", bestAirport: "LGW", note: "Direct Thameslink and Southern trains from Gatwick to Brighton in 30 min." },
  { area: "Cambridge & East Anglia", bestAirport: "STN", note: "Stansted is the closest London airport to Cambridge — direct train in 30 min." },
];

/* ── Market config ─────────────────────────────────────────── */

export const LONDON_MARKET = {
  slug: "london",
  name: "London",
  currency: "GBP" as CurrencyCode,
  airports: ["LHR", "LGW", "STN", "LTN", "LCY"] as const,
};
