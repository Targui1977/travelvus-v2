import { describe, it, expect } from "vitest";
import { CANONICAL, getVerdict, getScenarios, getAccessFriction } from "../lgw-vs-stn-data";

describe("CANONICAL — arithmetic lock", () => {
  it("raw totals match Phase 21 evidence", () => {
    expect(CANONICAL.lgwTotalRaw).toBeCloseTo(145.52, 1);
    expect(CANONICAL.stnTotalRaw).toBeCloseTo(141.17, 1);
  });

  it("display totals are rounded", () => {
    expect(CANONICAL.lgwTotal).toBe(146);
    expect(CANONICAL.stnTotal).toBe(141);
  });

  it("display diff is 4", () => {
    expect(CANONICAL.displayDiff).toBe(4);
  });

  it("raw diff is ~4.35", () => {
    expect(CANONICAL.rawDiff).toBeCloseTo(4.35, 1);
  });

  it("STN is cheaper (money winner)", () => {
    expect(CANONICAL.moneyWinner).toBe("STN");
  });

  it("canonical verdict state is STN_NARROW", () => {
    expect(CANONICAL.verdictState).toBe("STN_NARROW");
  });

  it("transfer penalty is 11 (display)", () => {
    expect(CANONICAL.transferPenalty).toBe(11);
  });

  it("tie point display is 11", () => {
    expect(CANONICAL.tiePointDisplay).toBe(11);
  });

  it("first LGW win is STN saving ≤ 11", () => {
    expect(CANONICAL.firstLgwWin).toBe(11);
  });

  it("STN flight advantage is 20", () => {
    expect(CANONICAL.stnFlightAdvantage).toBe(20);
  });

  it("extra time is 20 minutes", () => {
    expect(CANONICAL.extraTimeMins).toBe(20);
  });

  it("extra transfers is 1", () => {
    expect(CANONICAL.extraTransfers).toBe(1);
  });
});

describe("getVerdict", () => {
  it("STN_NARROW: handoff active, no false winner claim", () => {
    const v = getVerdict("STN_NARROW");
    expect(v.handoff).toBe(true);
    expect(v.headline).toContain("€4");
    expect(v.headline).not.toContain("better overall");
  });

  it("MONEY_TIE: handoff active, journey decides", () => {
    const v = getVerdict("MONEY_TIE");
    expect(v.handoff).toBe(true);
    expect(v.headline).toContain("tie");
  });

  it("STN_CLEAR: no handoff", () => {
    const v = getVerdict("STN_CLEAR");
    expect(v.handoff).toBe(false);
    expect(v.headline).toContain("wins clearly");
  });

  it("LGW_WINS: no handoff", () => {
    const v = getVerdict("LGW_WINS");
    expect(v.handoff).toBe(false);
    expect(v.headline).toContain("Gatwick wins");
  });
});

describe("getScenarios", () => {
  const s = getScenarios();

  it("returns 3 scenarios", () => {
    expect(s).toHaveLength(3);
  });

  it("scenario 1: €4 (canonical narrow win), handoff active", () => {
    expect(s[0].stnSaving).toBe(4);
    expect(s[0].handoffActive).toBe(true);
    expect(s[0].boundaryRelation).toContain("Below");
  });

  it("scenario 2: €12 (at boundary), STN just crosses", () => {
    expect(s[1].stnSaving).toBe(12);
    expect(s[1].handoffActive).toBe(false);
    expect(s[1].boundaryRelation).toContain("boundary");
  });

  it("scenario 3: €20 (clear win)", () => {
    expect(s[2].stnSaving).toBe(20);
    expect(s[2].handoffActive).toBe(false);
    expect(s[2].boundaryRelation).toContain("above");
  });
});

describe("getAccessFriction", () => {
  it("returns 3 primary dimensions", () => {
    const f = getAccessFriction();
    expect(f.primary).toHaveLength(3);
  });

  it("primary includes extra time, changes, cost", () => {
    const f = getAccessFriction();
    expect(f.primary[0].label).toContain("time");
    expect(f.primary[1].label).toContain("change");
    expect(f.primary[2].label).toContain("cost");
  });
});
