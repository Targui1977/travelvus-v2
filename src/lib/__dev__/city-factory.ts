/**
 * Travelvus V2 — City Factory
 *
 * Framework for zero-engine city expansion.
 * After this, adding a city is data entry, not engineering.
 *
 * Pure dev tooling. Not shipped to users.
 * Phase 108.2.
 */

import type { CityId } from "@/data/cities";
import { CITY_REGISTRY, SUPPORTED_CITIES, getCityAirports } from "@/data/cities";
import { getCityDestinationIds, getCityTransfer } from "@/lib/city-engine";

/* ── Types ────────────────────────────────────────────────── */

export type ValidationStatus = "pass" | "fail" | "warn";

export interface ValidationResult {
  check: string;
  status: ValidationStatus;
  detail: string;
}

export interface CityChecklistResult {
  cityId: CityId;
  cityLabel: string;
  results: ValidationResult[];
  passed: number;
  failed: number;
  warnings: number;
  ready: boolean;
}

export interface CityTemplate {
  cityId: string;
  cityLabel: string;
  country: string;
  currency: string;
  airports: { code: string; name: string; fullName: string }[];
  defaultDestination: string;
  destinationFile: string;
  destinationPlaceholders: string[];
  canonicalScenarioSuggestion: string;
  checklistItems: string[];
}

/* ── Dataset Contract ─────────────────────────────────────── */

export const CITY_DATASET_CONTRACT = {
  minAirports: 2,
  minDestinations: 5,
  requiredTransferFields: [
    "transferCostEUR",
    "transferDurationMin",
    "mode",
    "interchangeCount",
    "serviceWindow",
    "isIllustrative",
  ] as const,
  requiredMetadata: [
    "sourceLabel",
    "sourceDate",
    "reviewedDate",
  ] as const,
  requiredDestinationFields: [
    "id",
    "label",
    "shortLabel",
    "description",
    "zone",
    "representativeStation",
    "transfers",
  ] as const,
};

/* ── City Validator ───────────────────────────────────────── */

/**
 * Validate that a city is production-ready.
 * Checks registry, destinations, transfer profiles, currency, and URL support.
 */
export function validateCity(cityId: CityId): CityChecklistResult {
  const results: ValidationResult[] = [];
  const city = CITY_REGISTRY[cityId];

  if (!city) {
    return {
      cityId, cityLabel: cityId,
      results: [{ check: "City exists in registry", status: "fail", detail: `City "${cityId}" not found in CITY_REGISTRY` }],
      passed: 0, failed: 1, warnings: 0, ready: false,
    };
  }

  // 1. Registry checks
  results.push({ check: "City registered", status: "pass", detail: `Found in CITY_REGISTRY as "${city.label}"` });

  const airports = getCityAirports(cityId);
  results.push({
    check: `Airport count ≥ ${CITY_DATASET_CONTRACT.minAirports}`,
    status: airports.length >= CITY_DATASET_CONTRACT.minAirports ? "pass" : "fail",
    detail: `${airports.length} airport(s): ${airports.map((a) => a.code).join(", ")}`,
  });

  results.push({
    check: "Currency declared",
    status: city.currency ? "pass" : "fail",
    detail: city.currency || "NOT SET",
  });

  results.push({
    check: "Default destination set",
    status: city.defaultDestination ? "pass" : "fail",
    detail: city.defaultDestination || "NOT SET",
  });

  // 2. Destination dataset checks
  const destIds = getCityDestinationIds(cityId);
  results.push({
    check: `Destination count ≥ ${CITY_DATASET_CONTRACT.minDestinations}`,
    status: destIds.length >= CITY_DATASET_CONTRACT.minDestinations ? "pass" : "fail",
    detail: `${destIds.length} destination(s): ${destIds.join(", ")}`,
  });

  // 3. Transfer profile checks
  let transferIssues = 0;
  for (const destId of destIds) {
    for (const airport of airports) {
      const profile = getCityTransfer(cityId, airport.code, destId);
      if (!profile) {
        transferIssues++;
        results.push({
          check: `Transfer: ${airport.code} → ${destId}`,
          status: "fail",
          detail: "Missing transfer profile",
        });
        continue;
      }

      // Check required fields
      for (const field of CITY_DATASET_CONTRACT.requiredTransferFields) {
        const value = profile[field as keyof typeof profile];
        if (value === undefined || value === null  || value === "") {
          transferIssues++;
          results.push({
            check: `Transfer: ${airport.code} → ${destId} → ${field}`,
            status: "fail",
            detail: `Missing required field: ${field}`,
          });
        }
      }

      // Sanity checks
      if (profile.transferCostEUR <= 0) {
        results.push({
          check: `Transfer cost positive: ${airport.code} → ${destId}`,
          status: "fail",
          detail: `Cost is €${profile.transferCostEUR} — must be > 0`,
        });
      }
      if (profile.transferDurationMin <= 0) {
        results.push({
          check: `Transfer duration positive: ${airport.code} → ${destId}`,
          status: "fail",
          detail: `Duration is ${profile.transferDurationMin} min — must be > 0`,
        });
      }
    }
  }

  if (transferIssues === 0) {
    results.push({
      check: "All transfer profiles complete",
      status: "pass",
      detail: `${destIds.length * airports.length} profiles verified`,
    });
  }

  // 4. URL support
  results.push({
    check: "City ID valid for URL",
    status: /^[a-z-]+$/.test(cityId) ? "pass" : "fail",
    detail: `"${cityId}" is URL-safe`,
  });

  // 5. Documentation
  const docSlug = `docs/${cityId.toUpperCase().replace(/-/g, "_")}_PRODUCT_COMPLETION.md`;
  results.push({
    check: "Documentation expected",
    status: "warn",
    detail: `Expected at: ${docSlug}`,
  });

  // Summary
  const passed = results.filter((r) => r.status === "pass").length;
  const failed = results.filter((r) => r.status === "fail").length;
  const warnings = results.filter((r) => r.status === "warn").length;

  return {
    cityId,
    cityLabel: city.label,
    results,
    passed,
    failed,
    warnings,
    ready: failed === 0,
  };
}

/**
 * Validate all supported cities.
 */
export function validateAllCities(): CityChecklistResult[] {
  return SUPPORTED_CITIES.map(validateCity);
}

/* ── City Template Generator ──────────────────────────────── */

/**
 * Generate a template for a new city. Developer-only.
 */
export function createCityTemplate(params: {
  cityId: string;
  cityLabel: string;
  country: string;
  currency: string;
  airports: { code: string; name: string; fullName: string }[];
  defaultDestination: string;
  destinationPlaceholders: string[];
}): CityTemplate {
  return {
    cityId: params.cityId,
    cityLabel: params.cityLabel,
    country: params.country,
    currency: params.currency,
    airports: params.airports,
    defaultDestination: params.defaultDestination,
    destinationFile: `src/data/${params.cityId}-destinations.ts`,
    destinationPlaceholders: params.destinationPlaceholders,
    canonicalScenarioSuggestion: `Option A: ${params.airports[0]?.code ?? "???"} at illustrative fare. Option B: ${params.airports[1]?.code ?? "???"} at illustrative fare. Origin: same for both.`,
    checklistItems: CITY_PRODUCTION_CHECKLIST.map((item) => `[ ] ${item}`),
  };
}

/* ── Production Checklist ─────────────────────────────────── */

export const CITY_PRODUCTION_CHECKLIST: string[] = [
  "CityId registered in src/data/cities.ts with CityMetadata",
  "Airport profiles defined (min 2, with code/name/fullName)",
  "Currency declared in city metadata",
  "Default destination set",
  "Destination dataset created: src/data/{city}-destinations.ts",
  "Min 5 destination zones with transfer profiles",
  "Each transfer profile has: cost, duration, mode, interchanges, service window, illustrative flag",
  "Each destination has: sourceLabel, sourceDate, reviewedDate",
  "Quick Compare: city selectable, airport fields update on city change",
  "Quick Compare: canonical scenario with realistic illustrative fares",
  "Result page: city + destination summary visible",
  "Result page: airport names correct (not inherited from mock data)",
  "Edit panel: destination selector works for this city",
  "Share URL: preserves city= + dest= parameters",
  "isSupportedComparison() returns true for this city's airport pair",
  "buildCityOption() produces correct names + costs + times",
  "Validator (validateCity) returns ready=true with 0 failures",
  "Browser tests: Home → {city} → Result → Edit → Revert",
  "Browser tests: mobile 390px no overflow",
  "Documentation: canonical scenario + assumptions + limitations",
];

/* ── Paris Template (no data) ─────────────────────────────── */

export const PARIS_TEMPLATE = createCityTemplate({
  cityId: "paris",
  cityLabel: "Paris",
  country: "France",
  currency: "EUR",
  airports: [
    { code: "CDG", name: "Charles de Gaulle", fullName: "Paris Charles de Gaulle (CDG)" },
    { code: "ORY", name: "Orly", fullName: "Paris Orly (ORY)" },
  ],
  defaultDestination: "central-paris",
  destinationPlaceholders: [
    "central-paris",
    "la-defense",
    "montparnasse",
    "gare-du-nord",
    "bercy",
  ],
});

/* ── Summary Reporter ─────────────────────────────────────── */

/**
 * Print a human-readable city validation report.
 * Dev-only. Not for production console.
 */
export function printCityReport(result: CityChecklistResult): string {
  const lines: string[] = [];
  lines.push(`\n═══ ${result.cityLabel} (${result.cityId}) ═══`);
  lines.push(`Ready: ${result.ready ? "✅ YES" : "❌ NO"}`);
  lines.push(`Passed: ${result.passed} | Failed: ${result.failed} | Warnings: ${result.warnings}\n`);

  for (const r of result.results) {
    const icon = r.status === "pass" ? "✅" : r.status === "fail" ? "❌" : "⚠️";
    lines.push(`  ${icon} ${r.check}: ${r.detail}`);
  }

  return lines.join("\n");
}
