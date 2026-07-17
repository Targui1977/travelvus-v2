/**
 * Travelvus V2 — Arrival Planner Model
 * Personalised arrival planning assistant.
 * Reuses existing Decision Engine and transfer datasets.
 * Phase 115.0.
 */

import type { CityId } from "@/data/cities";

export type PlannerPriority = "fastest" | "cheapest" | "balanced" | "lowest-stress";
export type TravellerType = "solo" | "couple" | "family" | "business";
export type BaggageOption = "checked" | "carry-on" | "none";

export interface PlannerInput {
  cityId: CityId;
  airportCode: string;
  destinationId: string;
  arrivalTime: string; // HH:MM
  travellerType: TravellerType;
  baggage: BaggageOption;
  priority: PlannerPriority;
}

export interface TransportOption {
  mode: string;
  cost: string;
  timeMinutes: number;
  timeLabel: string;
  walkingDistance: string;
  changes: number;
  changesLabel: string;
  stressLevel: "low" | "medium" | "high";
  bestFor: string;
}

export interface PlannerResult {
  input: PlannerInput;
  recommended: TransportOption;
  alternative: TransportOption;
  destinationLabel: string;
  airportName: string;
  cityLabel: string;
  tips: string[];
  assumptions: string[];
  relatedKnowledge: { label: string; href: string }[];
  relatedGuides: { label: string; href: string }[];
  compareHref: string;
}
