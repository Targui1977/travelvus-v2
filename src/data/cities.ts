/**
 * Travelvus V2 — Multi-City Architecture
 *
 * City abstraction layer. London and New York share the same
 * calculation and reasoning pipeline. Only datasets differ.
 *
 * Phase 108.0 — Part B.
 */

/* ── City ID ──────────────────────────────────────────────── */

export type CityId = "london" | "new-york";

export const SUPPORTED_CITIES: CityId[] = ["london", "new-york"];

export const LEGACY_DEFAULT_CITY: CityId = "london";

/* ── City Metadata ────────────────────────────────────────── */

export interface CityMetadata {
  id: CityId;
  label: string;
  country: string;
  currency: string;
  airports: AirportProfile[];
  defaultDestination: string;
}

export interface AirportProfile {
  code: string;
  name: string;
  fullName: string;
}

export const CITY_REGISTRY: Record<CityId, CityMetadata> = {
  london: {
    id: "london",
    label: "London",
    country: "United Kingdom",
    currency: "EUR",
    airports: [
      { code: "STN", name: "Stansted", fullName: "London Stansted (STN)" },
      { code: "LHR", name: "Heathrow", fullName: "London Heathrow (LHR)" },
    ],
    defaultDestination: "westminster",
  },
  "new-york": {
    id: "new-york",
    label: "New York",
    country: "United States",
    currency: "EUR",
    airports: [
      { code: "JFK", name: "JFK", fullName: "New York JFK" },
      { code: "EWR", name: "Newark", fullName: "New York Newark (EWR)" },
    ],
    defaultDestination: "midtown",
  },
};

/* ── Helpers ──────────────────────────────────────────────── */

export function getCity(id: string): CityMetadata | undefined {
  return CITY_REGISTRY[id as CityId];
}

export function isValidCity(id: string): id is CityId {
  return SUPPORTED_CITIES.includes(id as CityId);
}

export function resolveCity(raw?: string): CityId {
  if (raw && isValidCity(raw)) return raw;
  return LEGACY_DEFAULT_CITY;
}

export function getCityLabel(id: CityId): string {
  return CITY_REGISTRY[id]?.label ?? id;
}

export function getCityAirports(id: CityId): AirportProfile[] {
  return CITY_REGISTRY[id]?.airports ?? [];
}
