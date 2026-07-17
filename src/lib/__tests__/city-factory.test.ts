/**
 * Travelvus V2 — City Factory Tests
 *
 * Validates validator, template generator, checklist, and contracts.
 * Phase 108.2 — Part H.
 */

import { describe, it, expect } from "vitest";
import {
  validateCity,
  validateAllCities,
  createCityTemplate,
  CITY_PRODUCTION_CHECKLIST,
  CITY_DATASET_CONTRACT,
  PARIS_TEMPLATE,
  printCityReport,
} from "../__dev__/city-factory";

describe("validateCity", () => {
  it("London passes all checks", () => {
    const result = validateCity("london");
    expect(result.failed).toBe(0);
    expect(result.ready).toBe(true);
  });

  it("New York passes all checks", () => {
    const result = validateCity("new-york");
    expect(result.failed).toBe(0);
    expect(result.ready).toBe(true);
  });

  it("unknown city fails", () => {
    const result = validateCity("tokyo" as any);
    expect(result.failed).toBeGreaterThan(0);
    expect(result.ready).toBe(false);
  });

  it("London has 2 airports", () => {
    const result = validateCity("london");
    const airportCheck = result.results.find((r) => r.check.includes("Airport count"));
    expect(airportCheck).toBeDefined();
    expect(airportCheck!.status).toBe("pass");
  });

  it("London has 5 destinations", () => {
    const result = validateCity("london");
    const destCheck = result.results.find((r) => r.check.includes("Destination count"));
    expect(destCheck).toBeDefined();
    expect(destCheck!.status).toBe("pass");
  });

  it("London and NY both have all transfer profiles complete", () => {
    for (const cityId of ["london", "new-york"] as const) {
      const result = validateCity(cityId);
      const transferCheck = result.results.find((r) => r.check === "All transfer profiles complete");
      expect(transferCheck).toBeDefined();
      expect(transferCheck!.status).toBe("pass");
    }
  });
});

describe("validateAllCities", () => {
  it("returns exactly 2 results", () => {
    const results = validateAllCities();
    expect(results).toHaveLength(2);
  });

  it("both cities are ready", () => {
    const results = validateAllCities();
    for (const r of results) {
      expect(r.ready).toBe(true);
    }
  });
});

describe("createCityTemplate", () => {
  it("generates a valid Paris template", () => {
    const template = createCityTemplate({
      cityId: "paris",
      cityLabel: "Paris",
      country: "France",
      currency: "EUR",
      airports: [
        { code: "CDG", name: "CDG", fullName: "Paris CDG" },
        { code: "ORY", name: "Orly", fullName: "Paris Orly" },
      ],
      defaultDestination: "central-paris",
      destinationPlaceholders: ["a", "b", "c", "d", "e"],
    });

    expect(template.cityId).toBe("paris");
    expect(template.airports).toHaveLength(2);
    expect(template.destinationPlaceholders).toHaveLength(5);
    expect(template.destinationFile).toContain("paris-destinations.ts");
    expect(template.checklistItems).toHaveLength(CITY_PRODUCTION_CHECKLIST.length);
  });
});

describe("PARIS_TEMPLATE", () => {
  it("has correct city ID", () => {
    expect(PARIS_TEMPLATE.cityId).toBe("paris");
  });

  it("has 2 airports: CDG and ORY", () => {
    expect(PARIS_TEMPLATE.airports).toHaveLength(2);
    expect(PARIS_TEMPLATE.airports[0]!.code).toBe("CDG");
    expect(PARIS_TEMPLATE.airports[1]!.code).toBe("ORY");
  });

  it("has 5 destination placeholders", () => {
    expect(PARIS_TEMPLATE.destinationPlaceholders).toHaveLength(5);
  });

  it("default destination is central-paris", () => {
    expect(PARIS_TEMPLATE.defaultDestination).toBe("central-paris");
  });

  it("currency is EUR", () => {
    expect(PARIS_TEMPLATE.currency).toBe("EUR");
  });
});

describe("CITY_PRODUCTION_CHECKLIST", () => {
  it("has at least 15 items", () => {
    expect(CITY_PRODUCTION_CHECKLIST.length).toBeGreaterThanOrEqual(15);
  });

  it("every item is a non-empty string", () => {
    for (const item of CITY_PRODUCTION_CHECKLIST) {
      expect(item.length).toBeGreaterThan(10);
    }
  });

  it("covers all required areas", () => {
    const text = CITY_PRODUCTION_CHECKLIST.join(" ");
    expect(text).toMatch(/registry|CityId/i);
    expect(text).toMatch(/airport/i);
    expect(text).toMatch(/destination/i);
    expect(text).toMatch(/transfer/i);
    expect(text).toMatch(/URL/i);
    expect(text).toMatch(/browser/i);
    expect(text).toMatch(/document/i);
    expect(text).toMatch(/validator/i);
  });
});

describe("CITY_DATASET_CONTRACT", () => {
  it("requires min 2 airports", () => {
    expect(CITY_DATASET_CONTRACT.minAirports).toBe(2);
  });

  it("requires min 5 destinations", () => {
    expect(CITY_DATASET_CONTRACT.minDestinations).toBe(5);
  });

  it("requires 6 transfer fields", () => {
    expect(CITY_DATASET_CONTRACT.requiredTransferFields).toHaveLength(6);
  });

  it("requires 3 metadata fields", () => {
    expect(CITY_DATASET_CONTRACT.requiredMetadata).toHaveLength(3);
  });

  it("requires 7 destination fields", () => {
    expect(CITY_DATASET_CONTRACT.requiredDestinationFields).toHaveLength(7);
  });
});

describe("printCityReport", () => {
  it("produces readable report for London", () => {
    const result = validateCity("london");
    const report = printCityReport(result);
    expect(report).toContain("London");
    expect(report).toContain("YES");
    expect(report).toContain("Passed:");
  });
});
