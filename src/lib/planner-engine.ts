/**
 * Travelvus V2 — Arrival Planner Engine
 * Pure functions. Reuses existing city-engine transfer data.
 * No duplicated logic. Phase 115.0.
 */

import type { PlannerInput, PlannerResult, TransportOption, TravellerType, BaggageOption } from "./planner-model";
import { getCityTransfer, getCityDestinationShortLabel } from "./city-engine";
import { getCityLabel, getCityAirports } from "@/data/cities";
import { buildHubCompareUrl } from "./hub-model";
import type { CityId } from "@/data/cities";

function getBagMultiplier(baggage: BaggageOption, traveller: TravellerType): number {
  if (baggage === "none") return 1;
  if (baggage === "carry-on") return traveller === "family" ? 2 : 1;
  return traveller === "family" ? 3 : 2; // checked bags = more luggage
}

function getStressLabel(changes: number, walking: string, isLate: boolean): TransportOption["stressLevel"] {
  if (changes === 0 && walking === "Minimal" && !isLate) return "low";
  if (changes <= 1 && walking !== "Significant") return "medium";
  return "high";
}

export function generatePlan(input: PlannerInput): PlannerResult {
  const transfer = getCityTransfer(input.cityId, input.airportCode, input.destinationId);
  const airports = getCityAirports(input.cityId);
  const otherAirport = airports.find(a => a.code !== input.airportCode);
  const otherTransfer = otherAirport
    ? getCityTransfer(input.cityId, otherAirport.code, input.destinationId)
    : undefined;

  const destLabel = getCityDestinationShortLabel(input.cityId, input.destinationId);
  const cityLabel = getCityLabel(input.cityId);
  const airportName = airports.find(a => a.code === input.airportCode)?.name ?? input.airportCode;

  const isLate = parseInt(input.arrivalTime.split(":")[0] ?? "12") >= 22;
  const bagMul = getBagMultiplier(input.baggage, input.travellerType);

  // Recommended transport
  const timeMin = transfer?.transferDurationMin ?? 45;
  const costEUR = transfer?.transferCostEUR ?? 15;
  const changes = transfer?.interchangeCount ?? 1;
  const mode = transfer?.mode ?? "Public transport";
  const walking = changes === 0 ? "Minimal" : changes === 1 ? "Moderate" : "Significant";

  const recommended: TransportOption = {
    mode,
    cost: `€${costEUR}${bagMul > 1 ? ` (×${bagMul} travellers)` : ""}`,
    timeMinutes: timeMin,
    timeLabel: `${timeMin} min`,
    walkingDistance: walking,
    changes,
    changesLabel: changes === 0 ? "Direct — no changes" : `${changes} change${changes > 1 ? "s" : ""}`,
    stressLevel: getStressLabel(changes, walking, isLate),
    bestFor: input.priority === "fastest" ? "Fastest door-to-door" :
             input.priority === "cheapest" ? "Best value" :
             input.priority === "lowest-stress" ? "Simplest journey" : "Best overall balance",
  };

  // Alternative
  const altMode = isLate
    ? `Taxi / ride-share (€${Math.round(costEUR * 3)}–${Math.round(costEUR * 4)}, ~${Math.round(timeMin * 0.7)} min)`
    : otherTransfer
      ? `${otherAirport?.name ?? "Other airport"}: ${otherTransfer.mode.split("→")[0]?.trim() ?? "Public transport"}`
      : "Taxi / ride-share";

  const alternative: TransportOption = {
    mode: altMode,
    cost: isLate ? `€${Math.round(costEUR * 3)}–${Math.round(costEUR * 4)}` : `€${otherTransfer?.transferCostEUR ?? costEUR * 2}`,
    timeMinutes: isLate ? Math.round(timeMin * 0.7) : (otherTransfer?.transferDurationMin ?? timeMin + 15),
    timeLabel: isLate ? `~${Math.round(timeMin * 0.7)} min` : `${otherTransfer?.transferDurationMin ?? timeMin + 15} min`,
    walkingDistance: isLate ? "Minimal — door to door" : "Varies",
    changes: isLate ? 0 : (otherTransfer?.interchangeCount ?? 2),
    changesLabel: isLate ? "Direct — door to door" : "Via other airport",
    stressLevel: isLate ? "low" : "medium",
    bestFor: isLate ? "Safest late-night option" : "Alternative airport comparison",
  };

  // Tips
  const tips: string[] = [];
  if (isLate) tips.push("Late arrival — check last train/bus times. Have a taxi number ready as backup.");
  if (changes > 0) tips.push(`${changes} change${changes > 1 ? "s" : ""} — keep your ticket handy for transfers.`);
  if (input.travellerType === "family") tips.push("Travelling with family — allow extra time for toilet stops and snacks.");
  if (input.baggage === "checked") tips.push("With checked bags, allow 15–20 extra minutes for baggage reclaim before starting your transfer.");
  tips.push(`${destLabel} station has step-free access at main exits — follow signs for the exit nearest your destination.`);

  const assumptions: string[] = [
    `Arrival at ${input.arrivalTime} — assumes on-time landing and ~30 min to clear immigration/baggage`,
    `Transfer costs are illustrative EUR — actual fares may vary by time of day`,
    `${input.travellerType} traveller${input.travellerType !== "solo" ? "s" : ""}, ${input.baggage} baggage`,
  ];

  return {
    input,
    recommended,
    alternative,
    destinationLabel: destLabel,
    airportName,
    cityLabel,
    tips,
    assumptions,
    relatedKnowledge: getRelatedKnowledge(input.cityId, input.airportCode),
    relatedGuides: getRelatedGuides(input.cityId, input.destinationId),
    compareHref: buildHubCompareUrl(input.cityId, input.destinationId),
  };
}

function getRelatedKnowledge(cityId: CityId, airportCode: string): { label: string; href: string }[] {
  const map: Record<string, { label: string; href: string }[]> = {
    paris: [
      { label: "CDG to Central Paris", href: "/knowledge/cdg-to-central-paris" },
      { label: "Orly to Central Paris", href: "/knowledge/orly-to-central-paris" },
      { label: "CDG Terminals Guide", href: "/knowledge/cdg-terminals-guide" },
    ],
    london: [
      { label: "Heathrow Express Guide", href: "/knowledge/heathrow-express-guide" },
      { label: "Stansted Express Guide", href: "/knowledge/stansted-express-guide" },
    ],
    "new-york": [
      { label: "AirTrain JFK Guide", href: "/knowledge/airtrain-jfk-guide" },
      { label: "Newark AirTrain Guide", href: "/knowledge/airtrain-newark-guide" },
    ],
  };
  return map[cityId]?.slice(0, 2) ?? [];
}

function getRelatedGuides(cityId: CityId, destId: string): { label: string; href: string }[] {
  return [
    { label: "Compare airports for this destination", href: buildHubCompareUrl(cityId, destId) },
    { label: `${getCityLabel(cityId)} Airport Choice Hub`, href: `/${cityId}/airport-choice` },
  ];
}
