/**
 * Paris Airport Ecosystem — Shared Data Layer
 * Phase 104.0 — Framework Validation.
 *
 * Canonical facts reviewed 2026-10-17 against Île-de-France Mobilités
 * (2026 airport ticket), Bonjour RATP (Metro 14, Orlyval, CDGVAL) and
 * service-public.gouv.fr A15396 (official taxi flat fares, 2026-02-01).
 * Each transfer option carries a `verified` flag: verified = exact official
 * value; unverified = approximate planning estimate (bus/tram fares).
 */

import type { CurrencyCode } from "@/lib/currency/types";

export interface ParisAirport {
  code: string; name: string; city: string; distance: string; distanceKm: number;
  type: "international" | "domestic"; currency: CurrencyCode;
  transferOptions: { name: string; time: string; cost: string; frequency: string; verified: boolean }[];
  dominantAirlines: string[]; strengths: string; weaknesses: string;
  bestFor: string; typicalTraveller: string; lastVerified: string;
}

export const PARIS_DATA_LAST_VERIFIED = "2026-10-17";

export const PARIS_AIRPORTS: Record<string, ParisAirport> = {
  CDG: {
    code: "CDG", name: "Charles de Gaulle", city: "Paris", distance: "25km northeast of central Paris", distanceKm: 25,
    type: "international", currency: "EUR",
    transferOptions: [
      { name: "RER B", time: "~35–40 min to Châtelet", cost: "€14", frequency: "Every 10–15 min", verified: true },
      { name: "Roissybus", time: "~60 min to Opéra", cost: "~€16 (approx)", frequency: "Every 15–20 min", verified: false },
      { name: "Taxi", time: "45–70 min", cost: "€56 flat (Right Bank) / €65 (Left Bank)", frequency: "On demand", verified: true },
      { name: "CDGVAL (inter-terminal)", time: "~8 min end-to-end", cost: "Free", frequency: "Every ~4 min, 04:00–01:00 (+ overnight bus)", verified: true },
    ],
    dominantAirlines: ["Air France", "easyJet", "Delta", "American"],
    strengths: "France's primary international hub. RER B direct to central Paris in ~35–40 min (€14). Largest choice of airlines and routes.",
    weaknesses: "Large airport — long walking distances between gates. RER B can be crowded. Further from southern Paris than Orly.",
    bestFor: "International travellers, long-haul flights, Air France flyers, the Right Bank and eastern Paris.",
    typicalTraveller: "Long-haul international flyers, Air France loyalists, Right Bank and eastern Paris residents.",
    lastVerified: "2026-10-17",
  },
  ORY: {
    code: "ORY", name: "Orly", city: "Paris", distance: "13km south of central Paris", distanceKm: 13,
    type: "international", currency: "EUR",
    transferOptions: [
      { name: "Metro 14", time: "~25 min to Châtelet (direct)", cost: "€14", frequency: "Frequent (approx)", verified: true },
      { name: "Orlyval + RER B", time: "~50 min to Châtelet", cost: "€14 (same airport ticket)", frequency: "Orlyval every ~5–7 min, ~06:00–23:35", verified: true },
      { name: "OrlyBus", time: "~30 min to Denfert-Rochereau", cost: "~€11 (approx)", frequency: "Every 10–20 min", verified: false },
      { name: "Tram T7 + Métro 7", time: "~55 min to central Paris", cost: "~€4 (approx)", frequency: "Every 8–15 min", verified: false },
      { name: "Taxi", time: "30–50 min", cost: "€45 flat (Right Bank) / €36 (Left Bank)", frequency: "On demand", verified: true },
    ],
    dominantAirlines: ["Air France (domestic/medium-haul)", "Transavia", "easyJet", "Vueling"],
    strengths: "Closest to central Paris — Metro 14 direct to Châtelet in ~25 min. Cheaper taxis than CDG (€36–45). Compact terminal layout.",
    weaknesses: "Fewer long-haul routes than CDG. The Orlyval + RER B route takes ~50 min and requires a change at Antony. Metro 14 can be crowded at peak.",
    bestFor: "Medium-haul European flights, domestic French flights, central and southern Paris.",
    typicalTraveller: "French domestic flyers, central and southern Paris residents, Transavia and Vueling passengers.",
    lastVerified: "2026-10-17",
  },
  BVA: {
    code: "BVA", name: "Beauvais", city: "Beauvais", distance: "85km north of Paris", distanceKm: 85,
    type: "international", currency: "EUR",
    transferOptions: [
      { name: "Official shuttle bus", time: "~1h 15m to Porte Maillot", cost: "~€17 (approx)", frequency: "Timed to flights", verified: false },
    ],
    dominantAirlines: ["Ryanair"],
    strengths: "Ryanair's Paris base. Extremely low ticket prices. Shuttle bus is reliable and timed to flight arrivals.",
    weaknesses: "85km from Paris — furthest of any major European capital airport. Shuttle bus takes 1h 15m. No rail connection.",
    bestFor: "Budget travellers flying Ryanair who value ticket price over transfer time.",
    typicalTraveller: "Budget-conscious Ryanair passengers willing to trade transfer time for ticket savings.",
    lastVerified: "2026-10-17",
  },
};

export const PARIS_NEIGHBOURHOODS = [
  { area: "Central Paris (1er–4e, Le Marais, Île de la Cité)", bestAirport: "ORY", note: "Metro 14 direct to Châtelet ~25 min (€14). Taxi €36–45. OrlyBus to Denfert-Rochereau, then Métro." },
  { area: "Right Bank (Opéra, Champs-Élysées, Montmartre)", bestAirport: "CDG", note: "RER B to Châtelet–Les Halles, then Métro. Roissybus direct to Opéra. €14 by rail." },
  { area: "Left Bank (Saint-Germain, Latin Quarter, Montparnasse)", bestAirport: "ORY", note: "Orly is on the south side — Metro 14 to Châtelet ~25 min, or OrlyBus to Denfert-Rochereau in ~30 min." },
  { area: "La Défense (business district)", bestAirport: "ORY", note: "Metro 14 to Châtelet ~25 min, then RER A ~10 min (≈40 min total). CDG: RER B + RER A ≈50 min." },
  { area: "Eastern Paris (Bastille, Nation, Vincennes)", bestAirport: "CDG", note: "RER B to Gare du Nord, then Métro 5. CDG is on the northeast side." },
  { area: "Versailles", bestAirport: "ORY", note: "Orly is closer by road. By rail, both reach Versailles–Rive Gauche via central Paris: Orly with Metro 14 + RER C, CDG with RER B + RER C." },
];

export const PARIS_MARKET = {
  slug: "paris", name: "Paris", currency: "EUR" as CurrencyCode,
  airports: ["CDG", "ORY", "BVA"] as const,
};
