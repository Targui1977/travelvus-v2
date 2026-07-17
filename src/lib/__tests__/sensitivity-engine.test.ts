/**
 * Travelvus V2 — Sensitivity Engine Regression Tests
 *
 * Validates break-even, stability, flip thresholds, dominance,
 * and decision trace consistency.
 *
 * Phase 107.2A — Part K.
 */

import { describe, it, expect } from "vitest";
import {
  generateSensitivityMatrix,
  runStressTest,
  validateFlips,
  validateDecisionTrace,
  analyzeInteractions,
  VARIABLE_INVENTORY,
} from "../__dev__/sensitivity-engine";

/* ── Sensitivity Matrix ──────────────────────────────────── */

describe("generateSensitivityMatrix", () => {
  const matrix = generateSensitivityMatrix();

  it("produces exactly 5 destination rows", () => {
    expect(matrix).toHaveLength(5);
  });

  it("all 5 destination IDs are unique", () => {
    const ids = matrix.map((r) => r.destinationId);
    expect(new Set(ids).size).toBe(5);
  });

  it("STN wins for all canonical destinations", () => {
    for (const row of matrix) {
      expect(row.currentWinner).toBe("STN");
    }
  });

  it("STN real cost is always lower than LHR real cost", () => {
    for (const row of matrix) {
      expect(row.stnRealCost).toBeLessThan(row.lhrRealCost);
    }
  });

  it("cost diff is positive for all destinations", () => {
    for (const row of matrix) {
      expect(row.costDiff).toBeGreaterThan(0);
    }
  });

  it("time diff is zero or positive (King's Cross ties on transfer time)", () => {
    for (const row of matrix) {
      expect(row.timeDiffMin).toBeGreaterThanOrEqual(0);
    }
  });

  it("break-even STN fare is between €60–80 for all destinations", () => {
    for (const row of matrix) {
      if (row.breakEvenStnFare !== null) {
        expect(row.breakEvenStnFare).toBeGreaterThan(60);
        expect(row.breakEvenStnFare).toBeLessThan(80);
      }
    }
  });

  it("gap to break-even is between €5–20 (narrow margin due to fixed costs)", () => {
    for (const row of matrix) {
      expect(row.gapToBreakEven).toBeGreaterThan(5);
      expect(row.gapToBreakEven).toBeLessThan(20);
    }
  });

  it("Liverpool St is the cheapest STN real cost (best transfer)", () => {
    const liverpoolRow = matrix.find((r) => r.destinationId === "liverpool-street")!;
    const minCost = Math.min(...matrix.map((r) => r.stnRealCost));
    expect(liverpoolRow.stnRealCost).toBe(minCost);
  });

  it("Paddington has the highest LHR transfer cost (Heathrow Express)", () => {
    const paddingtonRow = matrix.find((r) => r.destinationId === "paddington")!;
    const maxLhr = Math.max(...matrix.map((r) => r.lhrRealCost));
    expect(paddingtonRow.lhrRealCost).toBe(maxLhr);
  });
});

/* ── Stress Tests ─────────────────────────────────────────── */

describe("runStressTest", () => {
  const scenarios = runStressTest();

  it("produces exactly 80 scenarios (8 pairs × 5 dests × 2 bag states)", () => {
    expect(scenarios).toHaveLength(80);
  });

  it("both STN and LHR win some scenarios (engine reacts to inputs)", () => {
    const stnWins = scenarios.filter((s) => s.winner === "STN").length;
    const lhrWins = scenarios.filter((s) => s.winner === "LHR").length;
    expect(stnWins).toBeGreaterThan(0);
    expect(lhrWins).toBeGreaterThan(0);
    // With balanced ticket pairs, both should have meaningful representation
    expect(stnWins + lhrWins).toBeGreaterThan(60);
  });

  it("LHR wins some scenarios (cheap LHR / expensive STN)", () => {
    const lhrWins = scenarios.filter((s) => s.winner === "LHR").length;
    expect(lhrWins).toBeGreaterThan(0);
  });

  it("equal tickets (€50 each) → LHR wins via transfer advantage", () => {
    const equal50 = scenarios.filter(
      (s) => s.stnTicket === 50 && s.lhrTicket === 50 && !s.bagRemoved
    );
    const lhrWins = equal50.filter((s) => s.winner === "LHR").length;
    expect(lhrWins).toBeGreaterThan(0);
  });

  it("expensive STN (€150) → LHR wins all destinations with bag", () => {
    const expStn = scenarios.filter(
      (s) => s.stnTicket === 150 && s.lhrTicket === 126 && !s.bagRemoved
    );
    expect(expStn).toHaveLength(5);
    for (const s of expStn) {
      expect(s.winner).toBe("LHR");
    }
  });

  it("canonical fares → STN wins all destinations regardless of bag", () => {
    const canonical = scenarios.filter(
      (s) => s.stnTicket === 58 && s.lhrTicket === 126
    );
    for (const s of canonical) {
      expect(s.winner).toBe("STN");
    }
  });

  it("no impossible winner (winner matches arithmetic)", () => {
    for (const s of scenarios) {
      if (s.winner === "STN") {
        expect(s.stnRealCost).toBeLessThan(s.lhrRealCost);
      } else if (s.winner === "LHR") {
        expect(s.lhrRealCost).toBeLessThan(s.stnRealCost);
      }
    }
  });

  it("bag removal always reduces STN real cost by exactly €45", () => {
    const withBag = scenarios.filter((s) => !s.bagRemoved && s.stnTicket === 58);
    const withoutBag = scenarios.filter((s) => s.bagRemoved && s.stnTicket === 58);

    for (let i = 0; i < withBag.length && i < withoutBag.length; i++) {
      const costDiff = withBag[i].stnRealCost - withoutBag[i].stnRealCost;
      expect(costDiff).toBe(45);
    }
  });
});

/* ── Flip Validation ──────────────────────────────────────── */

describe("validateFlips", () => {
  const flips = validateFlips();

  it("all 6 flip rules are documented", () => {
    expect(flips).toHaveLength(6);
  });

  it("every documented flip rule can fire", () => {
    for (const f of flips) {
      expect(f.canFire).toBe(true);
    }
  });

  it("every documented flip rule is testable", () => {
    for (const f of flips) {
      expect(f.testable).toBe(true);
    }
  });

  it("every flip has a non-empty threshold", () => {
    for (const f of flips) {
      expect(f.threshold.length).toBeGreaterThan(5);
    }
  });
});

/* ── Decision Trace Validation ────────────────────────────── */

describe("validateDecisionTrace", () => {
  const traces = validateDecisionTrace();

  it("all 5 checks pass", () => {
    for (const t of traces) {
      expect(t.passes).toBe(true);
    }
  });

  it("winner matches cost comparison check passes", () => {
    const check = traces.find((t) => t.check === "Winner matches cost comparison")!;
    expect(check.passes).toBe(true);
  });

  it("no impossible state check passes", () => {
    const check = traces.find((t) => t.check === "No impossible state (winner contradicts cost)")!;
    expect(check.passes).toBe(true);
  });

  it("break-even internally consistent check passes", () => {
    const check = traces.find((t) => t.check === "Break-even is internally consistent")!;
    expect(check.passes).toBe(true);
  });
});

/* ── Variable Interactions ────────────────────────────────── */

describe("analyzeInteractions", () => {
  const interactions = analyzeInteractions();

  it("documents 6 interactions", () => {
    expect(interactions).toHaveLength(6);
  });

  it("STN ticket × Destination is Dominant", () => {
    const ix = interactions.find(
      (i) =>
        i.variables.includes("STN ticket price") &&
        i.variables.includes("Destination")
    )!;
    expect(ix.type).toBe("Dominant");
  });

  it("Destination × Transfer cost is Independent", () => {
    const ix = interactions.find(
      (i) =>
        i.variables.includes("Destination") &&
        i.variables.includes("Transfer cost")
    )!;
    expect(ix.type).toBe("Independent");
  });

  it("every interaction has an explanation", () => {
    for (const ix of interactions) {
      expect(ix.explanation.length).toBeGreaterThan(20);
    }
  });
});

/* ── Variable Inventory ───────────────────────────────────── */

describe("VARIABLE_INVENTORY", () => {
  it("has 10 documented variables", () => {
    expect(VARIABLE_INVENTORY).toHaveLength(10);
  });

  it("STN ticket price is Dominant", () => {
    const v = VARIABLE_INVENTORY.find((v) => v.variable === "STN ticket price")!;
    expect(v.dominance).toBe("Dominant");
  });

  it("LHR ticket price is Dominant", () => {
    const v = VARIABLE_INVENTORY.find((v) => v.variable === "LHR ticket price")!;
    expect(v.dominance).toBe("Dominant");
  });

  it("London destination is High", () => {
    const v = VARIABLE_INVENTORY.find((v) => v.variable === "London destination")!;
    expect(v.dominance).toBe("High");
  });

  it("Confidence is Negligible (derived, not causal)", () => {
    const v = VARIABLE_INVENTORY.find((v) => v.variable === "Confidence")!;
    expect(v.dominance).toBe("Negligible");
  });

  it("4 out of 10 variables are currently editable", () => {
    const editable = VARIABLE_INVENTORY.filter((v) => v.editable);
    expect(editable).toHaveLength(4);
  });

  it("every variable has source, dependencies, and affected outputs", () => {
    for (const v of VARIABLE_INVENTORY) {
      expect(v.source.length).toBeGreaterThan(5);
      expect(v.dependencies.length).toBeGreaterThan(0);
      expect(v.affectedOutputs.length).toBeGreaterThan(0);
    }
  });
});
