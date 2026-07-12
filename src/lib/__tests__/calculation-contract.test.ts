/**
 * Travelvus V2 — Calculation Contract Tests
 *
 * Tests for:
 *  - Every visible step maps to a real calculation stage
 *  - Animation layer does not determine the winner
 *  - Step-to-function mapping is honest
 *  - All cost and time calculations remain unchanged
 *
 * Phase 88.1
 */

import { describe, it, expect } from "vitest";
import { buildCalculationResult } from "../calculation-contract";
import { calcRealCost, monetaryWinner } from "../decision-engine";
import { buildVerdict } from "../normalize";
import type { OptionResult, VerdictData } from "../types";

/* ── Canonical test data ──────────────────────────────────── */

const canonicalA: OptionResult = {
  id: "A",
  name: "Stansted",
  code: "STN",
  visibleTicketPrice: 58,
  costLines: [
    { label: "Ticket", amount: 58, confidence: "user" },
    { label: "Checked bag", amount: 45, confidence: "estimate" },
    { label: "Seat", amount: 12, confidence: "user" },
    { label: "Origin → airport", amount: 15, confidence: "estimate" },
    { label: "STN → Central (night taxi)", amount: 74, confidence: "estimate" },
  ],
  realCost: 204,
  doorToDoorMinutes: 485,
  doorToDoorLabel: "8h 05m",
};

const canonicalB: OptionResult = {
  id: "B",
  name: "Heathrow",
  code: "LHR",
  visibleTicketPrice: 126,
  costLines: [
    { label: "Ticket", amount: 126, confidence: "user" },
    { label: "Checked bag — included", amount: 0, confidence: "strong", isIncluded: true },
    { label: "Seat", amount: 12, confidence: "user" },
    { label: "Origin → airport", amount: 15, confidence: "estimate" },
    { label: "LHR → Central (Piccadilly)", amount: 18, confidence: "strong" },
  ],
  realCost: 171,
  doorToDoorMinutes: 310,
  doorToDoorLabel: "5h 10m",
};

function makeVerdict(costA: number, costB: number): VerdictData {
  const aWins = costA < costB;
  const bWins = costB < costA;
  return buildVerdict(costA, costB, "8h 05m", "5h 10m", aWins, bWins);
}

/* ── Tests ────────────────────────────────────────────────── */

describe("buildCalculationResult", () => {
  const result = buildCalculationResult({
    optionA: canonicalA,
    optionB: canonicalB,
    verdict: makeVerdict(204, 171),
    savingsEuro: 33,
    savingsTimeMinutes: 175,
    savingsTimeLabel: "2h 55m",
    isSupported: true,
    calculatedAt: 1000,
  });

  /* ── Contract shape ──────────────────────────────────── */

  it("produces exactly 7 stages", () => {
    expect(result.stages).toHaveLength(7);
  });

  it("has unique stage IDs", () => {
    const ids = result.stages.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every stage has a non-empty label", () => {
    for (const stage of result.stages) {
      expect(stage.label).toBeTruthy();
      expect(stage.label.length).toBeGreaterThan(0);
    }
  });

  it("every stage has a non-empty detail", () => {
    for (const stage of result.stages) {
      expect(stage.detail).toBeTruthy();
      expect(stage.detail.length).toBeGreaterThan(0);
    }
  });

  /* ── Stage 1: Reading flight details ─────────────────── */

  it("stage 1 shows ticket prices from option data", () => {
    const s1 = result.stages[0];
    expect(s1.id).toBe("reading_flight_details");
    expect(s1.valueA).toContain("58");
    expect(s1.valueB).toContain("126");
  });

  /* ── Stage 2: Baggage and extras ─────────────────────── */

  it("stage 2 shows baggage costs", () => {
    const s2 = result.stages[1];
    expect(s2.id).toBe("adding_baggage_and_extras");
    // Option A: +€45 bag; Option B: Included (€0 bag)
    expect(s2.valueA).toContain("45");
    expect(s2.valueB).toBe("Included");
  });

  /* ── Stage 3: Airport transfers ──────────────────────── */

  it("stage 3 shows transfer costs", () => {
    const s3 = result.stages[2];
    expect(s3.id).toBe("calculating_airport_transfers");
    expect(s3.valueA).toContain("74"); // night taxi
    expect(s3.valueB).toContain("18"); // Piccadilly
  });

  it("stage 3 includes TfL evidence when supported", () => {
    expect(result.stages[2].evidenceNote).toContain("TfL");
  });

  /* ── Stage 4: Journey time ───────────────────────────── */

  it("stage 4 shows door-to-door times", () => {
    const s4 = result.stages[3];
    expect(s4.id).toBe("measuring_journey_time");
    expect(s4.valueA).toBe("8h 05m");
    expect(s4.valueB).toBe("5h 10m");
  });

  /* ── Stage 5: Real cost ──────────────────────────────── */

  it("stage 5 shows real costs computed by calcRealCost", () => {
    const s5 = result.stages[4];
    expect(s5.id).toBe("calculating_real_cost");
    // Must match exactly what the engine computes
    expect(result.realCostA).toBe(calcRealCost(canonicalA.costLines));
    expect(result.realCostB).toBe(calcRealCost(canonicalB.costLines));
    expect(s5.valueA).toContain(String(calcRealCost(canonicalA.costLines)));
    expect(s5.valueB).toContain(String(calcRealCost(canonicalB.costLines)));
  });

  /* ── Stage 6: Comparing journeys ─────────────────────── */

  it("stage 6 identifies the monetary winner", () => {
    const s6 = result.stages[5];
    expect(s6.id).toBe("comparing_journeys");
    // B wins at canonical: €204 vs €171
    expect(result.winner).toBe("B");
  });

  /* ── Stage 7: Verdict ────────────────────────────────── */

  it("stage 7 has no values (it announces the verdict)", () => {
    const s7 = result.stages[6];
    expect(s7.id).toBe("preparing_verdict");
    expect(s7.valueA).toBeUndefined();
    expect(s7.valueB).toBeUndefined();
  });

  /* ── Winner integrity ────────────────────────────────── */

  it("the contract preserves the engine's winner — never overrides it", () => {
    const winner = monetaryWinner(result.realCostA, result.realCostB);
    expect(result.winner).toBe(winner === "tie" ? "tie" : winner);
  });

  it("the verdict matches the contract winner", () => {
    expect(result.verdict.winner).toBe(result.winner as "A" | "B");
  });

  /* ── Savings integrity ───────────────────────────────── */

  it("savingsEuro matches the absolute difference in real costs", () => {
    expect(result.savingsEuro).toBe(
      Math.abs(result.realCostA - result.realCostB)
    );
  });

  /* ── Warnings for unsupported ────────────────────────── */

  it("adds warnings when comparison is not supported", () => {
    const unsupported = buildCalculationResult({
      optionA: canonicalA,
      optionB: canonicalB,
      verdict: makeVerdict(204, 171),
      savingsEuro: 33,
      savingsTimeMinutes: 175,
      savingsTimeLabel: "2h 55m",
      isSupported: false,
      calculatedAt: 1000,
    });
    expect(unsupported.warnings.length).toBeGreaterThan(0);
    expect(unsupported.warnings[0]).toContain("limited transfer data");
  });

  it("has no warnings when fully supported", () => {
    expect(result.warnings).toHaveLength(0);
  });

  /* ── Assumptions are documented ──────────────────────── */

  it("includes standard assumptions", () => {
    expect(result.assumptions.length).toBeGreaterThan(0);
    expect(result.assumptions.some((a) => a.includes("checked bag"))).toBe(true);
    expect(result.assumptions.some((a) => a.includes("90-minute"))).toBe(true);
  });

  /* ── CalculatedAt is preserved ───────────────────────── */

  it("preserves calculatedAt from the server", () => {
    expect(result.calculatedAt).toBe(1000);
  });
});

/* ── Step-to-function truth table ──────────────────────────── */

describe("step-to-function truth table", () => {
  it("every stage ID maps to a known engine function or data source", () => {
    const knownIds = new Set([
      "reading_flight_details",       // decodeCompareParams, normalizeInput
      "adding_baggage_and_extras",     // MOCK_RESULT costLines[1-2]
      "calculating_airport_transfers", // MOCK_RESULT costLines[3-4]
      "measuring_journey_time",        // MOCK_RESULT doorToDoorMinutes
      "calculating_real_cost",         // calcRealCost()
      "comparing_journeys",            // monetaryWinner(), deriveThreshold()
      "preparing_verdict",             // buildVerdict()
    ]);

    const result = buildCalculationResult({
      optionA: canonicalA,
      optionB: canonicalB,
      verdict: makeVerdict(204, 171),
      savingsEuro: 33,
      savingsTimeMinutes: 175,
      savingsTimeLabel: "2h 55m",
      isSupported: true,
      calculatedAt: 1000,
    });

    for (const stage of result.stages) {
      expect(knownIds.has(stage.id)).toBe(true);
    }
  });

  it("no stage uses a label that implies functionality the engine lacks", () => {
    const forbiddenTerms = [
      "checking baggage policies",  // No dynamic policy lookup
      "live",                        // No live data
      "real-time",                   // No real-time data
      "AI",                          // No AI
      "machine learning",            // No ML
    ];

    const result = buildCalculationResult({
      optionA: canonicalA,
      optionB: canonicalB,
      verdict: makeVerdict(204, 171),
      savingsEuro: 33,
      savingsTimeMinutes: 175,
      savingsTimeLabel: "2h 55m",
      isSupported: true,
      calculatedAt: 1000,
    });

    for (const stage of result.stages) {
      const text = (stage.label + " " + stage.detail).toLowerCase();
      for (const forbidden of forbiddenTerms) {
        expect(text).not.toContain(forbidden);
      }
    }
  });
});
