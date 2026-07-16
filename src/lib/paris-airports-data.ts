/**
 * Paris Airport Ecosystem — Shared Data Layer
 * Phase 104.0 — Framework Validation.
 */

import type { CurrencyCode } from "@/lib/currency/types";

export interface ParisAirport {
  code: string; name: string; city: string; distance: string; distanceKm: number;
  type: "international" | "domestic"; currency: CurrencyCode;
  transferOptions: { name: string; time: string; cost: string; frequency: string }[];
  dominantAirlines: string[]; strengths: string; weaknesses: string;
  bestFor: string; typicalTraveller: string;
}

export const PARIS_AIRPORTS: Record<string, ParisAirport> = {
  CDG: {
    code: "CDG", name: "Charles de Gaulle", city: "Paris", distance: "25km northeast of central Paris", distanceKm: 25,
    type: "international", currency: "EUR",
    transferOptions: [
      { name: "RER B", time: "~35 min to Châtelet", cost: "~€11", frequency: "Every 6–15 min" },
      { name: "Roissybus", time: "~60 min to Opéra", cost: "~€16", frequency: "Every 15–20 min" },
      { name: "Taxi", time: "45–70 min", cost: "€55 flat (Right Bank) / €60 (Left Bank)", frequency: "On demand" },
    ],
    dominantAirlines: ["Air France", "easyJet", "Delta", "American"],
    strengths: "France's primary international hub. RER B direct to central Paris in ~35 min. Largest choice of airlines and routes.",
    weaknesses: "Large airport — long walking distances between gates. RER B can be crowded. Further from southern Paris than Orly.",
    bestFor: "International travellers, Air France flyers, eastern Paris.",
    typicalTraveller: "Long-haul international flyers, Air France loyalists, eastern Paris residents.",
  },
  ORY: {
    code: "ORY", name: "Orly", city: "Paris", distance: "13km south of central Paris", distanceKm: 13,
    type: "international", currency: "EUR",
    transferOptions: [
      { name: "Orlyval + RER B", time: "~35 min to Châtelet", cost: "~€14", frequency: "Every 4–7 min (Orlyval)" },
      { name: "Tram T7 + Métro 7", time: "~55 min to central Paris", cost: "~€4", frequency: "Every 8–15 min" },
      { name: "OrlyBus", time: "~30 min to Denfert-Rochereau", cost: "~€11", frequency: "Every 10–20 min" },
      { name: "Taxi", time: "30–50 min", cost: "€35 flat (Right Bank) / €40 (Left Bank)", frequency: "On demand" },
    ],
    dominantAirlines: ["Air France (domestic/medium-haul)", "Transavia", "easyJet", "Vueling"],
    strengths: "Closest to central Paris. Orlyval light rail is fast and frequent. Cheaper taxis than CDG. Compact terminal layout.",
    weaknesses: "Fewer long-haul routes than CDG. Orlyval requires a transfer at Antony station for RER B. No direct Métro connection.",
    bestFor: "Medium-haul European flights, domestic French flights, southern Paris.",
    typicalTraveller: "French domestic flyers, southern Paris residents, Transavia and Vueling passengers.",
  },
  BVA: {
    code: "BVA", name: "Beauvais", city: "Beauvais", distance: "85km north of Paris", distanceKm: 85,
    type: "international", currency: "EUR",
    transferOptions: [
      { name: "Official shuttle bus", time: "~1h 15m to Porte Maillot", cost: "~€17", frequency: "Timed to flights" },
    ],
    dominantAirlines: ["Ryanair"],
    strengths: "Ryanair's Paris base. Extremely low ticket prices. Shuttle bus is reliable and timed to flight arrivals.",
    weaknesses: "85km from Paris — furthest of any major European capital airport. Shuttle bus takes 1h 15m. No rail connection.",
    bestFor: "Budget travellers flying Ryanair who value ticket price over transfer time.",
    typicalTraveller: "Budget-conscious Ryanair passengers willing to trade transfer time for ticket savings.",
  },
};

export const PARIS_NEIGHBOURHOODS = [
  { area: "Central Paris (1er–4er, Le Marais, Île de la Cité)", bestAirport: "ORY", note: "Orly is closer — taxi takes 30–40 min. OrlyBus to Denfert-Rochereau, then Métro." },
  { area: "Right Bank (Opéra, Champs-Élysées, Montmartre)", bestAirport: "CDG", note: "RER B to Châtelet–Les Halles, then Métro. Roissybus direct to Opéra." },
  { area: "Left Bank (Saint-Germain, Latin Quarter, Montparnasse)", bestAirport: "ORY", note: "Orly is on the south side — OrlyBus to Denfert-Rochereau in ~30 min." },
  { area: "La Défense (business district)", bestAirport: "CDG", note: "RER B to Châtelet, then RER A to La Défense. Or, taxi in ~50–60 min." },
  { area: "Eastern Paris (Bastille, Nation, Vincennes)", bestAirport: "CDG", note: "RER B to Gare du Nord, then Métro 5. CDG is on the northeast side." },
  { area: "Versailles", bestAirport: "ORY", note: "Orly is closer to Versailles. Orlyval + RER C direct to Versailles–Rive Gauche." },
];

export const PARIS_MARKET = {
  slug: "paris", name: "Paris", currency: "EUR" as CurrencyCode,
  airports: ["CDG", "ORY", "BVA"] as const,
};
