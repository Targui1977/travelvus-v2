import { describe, it, expect } from "vitest";
import {
  DESTINATIONS,
  calculateResult,
  classifyMargin,
  getVerdictText,
  MARGIN_LABELS,
  getThresholdData,
} from "../lhr-vs-lgw-data";

describe("DESTINATIONS", () => {
  it("has 5 destinations", () => {
    expect(DESTINATIONS).toHaveLength(5);
  });

  it("all have ids and labels", () => {
    DESTINATIONS.forEach((d) => {
      expect(d.id).toBeTruthy();
      expect(d.label).toBeTruthy();
    });
  });
});

describe("calculateResult", () => {
  it("Victoria: LGW wins by 27 (CLEAR)", () => {
    const r = calculateResult(DESTINATIONS[0]);
    expect(r.winner).toBe("LGW");
    expect(r.margin).toBe(27);
    expect(r.marginClass).toBe("CLEAR");
    expect(r.lhrTotal).toBe(323); // 280 + 43
    expect(r.lgwTotal).toBe(296); // 246 + 50
  });

  it("Paddington: near-tie (NEAR_TIE)", () => {
    const r = calculateResult(DESTINATIONS[1]);
    // LHR: 280 + 23 = 303. LGW: 246 + 57 = 303. margin = 0.
    expect(r.lhrTotal).toBe(303);
    expect(r.lgwTotal).toBe(303);
    expect(r.margin).toBe(0);
    expect(r.marginClass).toBe("NEAR_TIE");
  });

  it("Canary Wharf: LGW wins by 37 (ROBUST)", () => {
    const r = calculateResult(DESTINATIONS[2]);
    expect(r.winner).toBe("LGW");
    expect(r.margin).toBe(37); // LHR: 316, LGW: 279
    expect(r.marginClass).toBe("ROBUST");
  });

  it("Clapham: LGW wins by 29 (CLEAR)", () => {
    const r = calculateResult(DESTINATIONS[3]);
    expect(r.winner).toBe("LGW");
    expect(r.margin).toBe(29); // LHR: 300, LGW: 271
    expect(r.marginClass).toBe("CLEAR");
  });

  it("King's Cross: LGW wins (corrected)", () => {
    const r = calculateResult(DESTINATIONS[4]);
    expect(r.winner).toBe("LGW");
    expect(r.lhrTotal).toBe(294); // 280 + 14
    expect(r.lgwTotal).toBe(281); // 246 + 35
    expect(r.margin).toBe(13);
    expect(r.marginClass).toBe("NARROW");
  });
});

describe("classifyMargin", () => {
  it("ROBUST >= 30", () => {
    expect(classifyMargin(37)).toBe("ROBUST");
    expect(classifyMargin(30)).toBe("ROBUST");
  });
  it("CLEAR 15-29", () => {
    expect(classifyMargin(27)).toBe("CLEAR");
    expect(classifyMargin(15)).toBe("CLEAR");
  });
  it("NARROW 5-14", () => {
    expect(classifyMargin(12)).toBe("NARROW");
    expect(classifyMargin(5)).toBe("NARROW");
  });
  it("NEAR_TIE < 5", () => {
    expect(classifyMargin(4)).toBe("NEAR_TIE");
    expect(classifyMargin(1)).toBe("NEAR_TIE");
    expect(classifyMargin(0)).toBe("NEAR_TIE");
  });
});

describe("getVerdictText", () => {
  it("NEAR_TIE returns handoff", () => {
    const r = calculateResult(DESTINATIONS[1]); // Paddington
    const v = getVerdictText(r);
    expect(v.isHandoff).toBe(true);
    expect(v.interpretation).toContain("Money no longer separates");
  });

  it("ROBUST has strong language", () => {
    const r = calculateResult(DESTINATIONS[2]); // Canary Wharf
    const v = getVerdictText(r);
    expect(v.isHandoff).toBe(false);
    expect(v.interpretation).toContain("strengthens");
  });

  it("NARROW does not claim certainty", () => {
    const r = calculateResult(DESTINATIONS[4]); // King's Cross
    const v = getVerdictText(r);
    expect(v.isHandoff).toBe(false);
    expect(v.interpretation).toContain("not by enough");
  });

  it("no false winner claim in near-tie", () => {
    const r = calculateResult(DESTINATIONS[1]); // Paddington
    const v = getVerdictText(r);
    expect(v.winnerLine).not.toContain("wins by"); // "wins by about" is acceptable
  });
});

describe("MARGIN_LABELS", () => {
  it("has all 4 labels", () => {
    expect(Object.keys(MARGIN_LABELS)).toHaveLength(4);
  });
});

describe("getThresholdData", () => {
  it("returns flight advantage: LGW is 34 cheaper pre-transfer", () => {
    const t = getThresholdData();
    // PRE_TRANSFER_LHR = 280, PRE_TRANSFER_LGW = 246
    // flightAdvantage = 246 - 280 = -34 (LGW cheaper)
    expect(t.flightAdvantage).toBe(-34);
    expect(t.explanation).toContain("€34");
  });
});
