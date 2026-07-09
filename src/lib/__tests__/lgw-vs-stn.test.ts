import { describe, it, expect } from "vitest";
import { CANONICAL, getVerdict, getScenarios, getAccessFriction, computeAtSaving } from "../lgw-vs-stn-data";

describe("CANONICAL — arithmetic lock", () => {
  it("raw totals", () => {
    expect(CANONICAL.lgwTotalRaw).toBeCloseTo(145.52, 1);
    expect(CANONICAL.stnTotalRaw).toBeCloseTo(141.17, 1);
  });
  it("display totals rounded", () => {
    expect(CANONICAL.lgwTotal).toBe(146);
    expect(CANONICAL.stnTotal).toBe(141);
  });
  it("display diff 4", () => expect(CANONICAL.displayDiff).toBe(4));
  it("raw diff ~4.35", () => expect(CANONICAL.rawDiff).toBeCloseTo(4.35, 1));
  it("money winner STN", () => expect(CANONICAL.moneyWinner).toBe("STN"));
  it("STN flight advantage 20", () => expect(CANONICAL.stnFlightAdvantage).toBe(20));
  it("fixed disadvantage raw ~15.65", () => expect(CANONICAL.stnFixedDisadvantageRaw).toBeCloseTo(15.65, 1));
  it("fixed disadvantage display 16", () => expect(CANONICAL.stnFixedDisadvantage).toBe(16));
  it("tie point raw 15.65", () => expect(CANONICAL.tiePoint).toBeCloseTo(15.65, 1));
  it("tie point display 16", () => expect(CANONICAL.tiePointDisplay).toBe(16));
});

describe("computeAtSaving — six-value threshold table", () => {
  it("S=10: LGW wins", () => {
    const r = computeAtSaving(10);
    expect(r.winner).toBe("LGW");
    expect(r.diff).toBeCloseTo(-5.65, 1);
  });
  it("S=15.65: exact tie", () => {
    const r = computeAtSaving(15.65);
    expect(r.winner).toBe("TIE");
    expect(Math.abs(r.diff)).toBeLessThan(0.01);
  });
  it("S=16: STN just wins (first whole-euro)", () => {
    const r = computeAtSaving(16);
    expect(r.winner).toBe("STN");
    expect(r.diff).toBeCloseTo(0.35, 1);
  });
  it("S=20 (canonical): STN wins by 4.35", () => {
    const r = computeAtSaving(20);
    expect(r.winner).toBe("STN");
    expect(r.diff).toBeCloseTo(4.35, 1);
  });
  it("S=11: LGW wins (was incorrectly claimed as tie)", () => {
    const r = computeAtSaving(11);
    expect(r.winner).toBe("LGW");
  });
  it("raw winner always from raw values, not display rounding", () => {
    // At S=15.65 tie is exact, display shows 146 vs 146
    const r = computeAtSaving(15.65);
    expect(r.winner).toBe("TIE");
    expect(Math.round(r.lgwTotal)).toBe(146);
    expect(Math.round(r.stnTotal)).toBe(146);
  });
});

describe("getVerdict", () => {
  it("STN_NARROW: handoff active", () => {
    const v = getVerdict("STN_NARROW");
    expect(v.handoff).toBe(true);
  });
  it("MONEY_TIE: handoff active", () => {
    expect(getVerdict("MONEY_TIE").handoff).toBe(true);
  });
  it("STN_CLEAR: no handoff", () => {
    expect(getVerdict("STN_CLEAR").handoff).toBe(false);
  });
  it("LGW_WINS: no handoff", () => {
    expect(getVerdict("LGW_WINS").handoff).toBe(false);
  });
});

describe("getScenarios — corrected break-even", () => {
  const s = getScenarios();
  it("3 scenarios", () => expect(s).toHaveLength(3));

  it("S=10: LGW wins, below break-even, no handoff", () => {
    expect(s[0].stnSaving).toBe(10);
    expect(s[0].moneyResult).toContain("Gatwick wins");
    expect(s[0].boundaryRelation).toContain("Below");
    expect(s[0].handoffActive).toBe(false);
  });

  it("S=16: STN just wins, just above break-even, handoff active", () => {
    expect(s[1].stnSaving).toBe(16);
    expect(s[1].moneyResult).toContain("Stansted wins");
    expect(s[1].boundaryRelation).toContain("above");
    expect(s[1].handoffActive).toBe(true);
  });

  it("S=20: STN clear, above break-even, no handoff", () => {
    expect(s[2].stnSaving).toBe(20);
    expect(s[2].moneyResult).toContain("Stansted wins");
    expect(s[2].boundaryRelation).toContain("Clearly above");
    expect(s[2].handoffActive).toBe(false);
  });
});

describe("getAccessFriction", () => {
  it("3 primary dimensions", () => expect(getAccessFriction().primary).toHaveLength(3));
});
