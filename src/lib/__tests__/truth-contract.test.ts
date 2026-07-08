import { describe, it, expect } from "vitest";
import { normalizeTime, normalizeInput, extractCode, isSupportedComparison, buildVerdict } from "../normalize";
import { encodeCompareParams, decodeCompareParams } from "../navigation";
import { calcRealCost, monetaryWinner, detectChange, estimateThreshold } from "../decision-engine";
import type { CostLine, OptionResult } from "../types";

describe("normalizeTime", () => {
  it("accepts HH:MM", () => expect(normalizeTime("20:40")).toBe("20:40"));
  it("accepts H:MM", () => expect(normalizeTime("8:40")).toBe("08:40"));
  it("accepts HHMM", () => expect(normalizeTime("2040")).toBe("20:40"));
  it("accepts HH.MM", () => expect(normalizeTime("20.40")).toBe("20:40"));
  it("rejects invalid hour", () => expect(normalizeTime("25:00")).toBeNull());
  it("rejects invalid minute", () => expect(normalizeTime("20:60")).toBeNull());
  it("rejects garbage", () => expect(normalizeTime("abc")).toBeNull());
});

describe("extractCode", () => {
  it("extracts from City · CODE", () => expect(extractCode("London · STN")).toBe("STN"));
  it("extracts from plain code", () => expect(extractCode("LHR")).toBe("LHR"));
  it("is case insensitive", () => expect(extractCode("london · stn")).toBe("STN"));
});

describe("isSupportedComparison", () => {
  it("supports STN vs LHR", () => {
    const input = normalizeInput({ aTicket: "58", aFrom: "BER", aTo: "London · STN", aDep: "20:40", aArr: "23:15", bTicket: "126", bFrom: "BER", bTo: "London · LHR", bDep: "14:10", bArr: "16:45" })!;
    expect(isSupportedComparison(input)).toBe(true);
  });
  it("rejects CDG vs LHR", () => {
    const input = normalizeInput({ aTicket: "58", aFrom: "BER", aTo: "Paris · CDG", aDep: "20:40", aArr: "23:15", bTicket: "126", bFrom: "BER", bTo: "London · LHR", bDep: "14:10", bArr: "16:45" })!;
    expect(isSupportedComparison(input)).toBe(false);
  });
});

describe("encode/decode round-trip", () => {
  it("preserves normalized data", () => {
    const orig = { aTicket: "58", aFrom: "BER", aTo: "London · STN", aDep: "20:40", aArr: "23:15", bTicket: "126", bFrom: "BER", bTo: "London · LHR", bDep: "14:10", bArr: "16:45" };
    const encoded = encodeCompareParams(orig);
    const sp = new URLSearchParams(encoded);
    const decoded = decodeCompareParams(sp);
    expect(decoded).not.toBeNull();
    expect(decoded!.aTicket).toBe("58");
    expect(decoded!.bTicket).toBe("126");
  });
});

describe("calcRealCost", () => {
  const canonicalALines: CostLine[] = [
    { label: "Ticket", amount: 58, confidence: "user" },
    { label: "Checked bag", amount: 45, confidence: "estimate" },
    { label: "Seat", amount: 12, confidence: "user" },
    { label: "Origin → airport", amount: 15, confidence: "estimate" },
    { label: "STN → Central", amount: 74, confidence: "estimate" },
  ];
  const canonicalBLines: CostLine[] = [
    { label: "Ticket", amount: 126, confidence: "user" },
    { label: "Checked bag — included", amount: 0, confidence: "strong", isIncluded: true },
    { label: "Seat", amount: 12, confidence: "user" },
    { label: "Origin → airport", amount: 15, confidence: "estimate" },
    { label: "LHR → Central", amount: 18, confidence: "strong" },
  ];

  it("canonical A = 204", () => expect(calcRealCost(canonicalALines)).toBe(204));
  it("canonical B = 171", () => expect(calcRealCost(canonicalBLines)).toBe(171));
  it("A ticket 38 → 184", () => {
    const lines = canonicalALines.map((l, i) => i === 0 ? { ...l, amount: 38 } : l);
    expect(calcRealCost(lines)).toBe(184);
  });
  it("A ticket 20 → 166", () => {
    const lines = canonicalALines.map((l, i) => i === 0 ? { ...l, amount: 20 } : l);
    expect(calcRealCost(lines)).toBe(166);
  });
});

describe("monetaryWinner", () => {
  it("A cheaper", () => expect(monetaryWinner(166, 171)).toBe("A"));
  it("B cheaper", () => expect(monetaryWinner(204, 171)).toBe("B"));
  it("tie", () => expect(monetaryWinner(171, 171)).toBe("tie"));
});

describe("detectChange", () => {
  const baseA: OptionResult = {
    id: "A", name: "Stansted", code: "STN", visibleTicketPrice: 58,
    costLines: [
      { label: "Ticket", amount: 58, confidence: "user" },
      { label: "Checked bag", amount: 45, confidence: "estimate" },
      { label: "Seat", amount: 12, confidence: "user" },
      { label: "Origin → airport", amount: 15, confidence: "estimate" },
      { label: "STN → Central", amount: 74, confidence: "estimate" },
    ],
    realCost: 204, doorToDoorMinutes: 485, doorToDoorLabel: "8h 05m",
  };
  const baseB: OptionResult = {
    id: "B", name: "Heathrow", code: "LHR", visibleTicketPrice: 126,
    costLines: [
      { label: "Ticket", amount: 126, confidence: "user" },
      { label: "Checked bag — included", amount: 0, confidence: "strong", isIncluded: true },
      { label: "Seat", amount: 12, confidence: "user" },
      { label: "Origin → airport", amount: 15, confidence: "estimate" },
      { label: "LHR → Central", amount: 18, confidence: "strong" },
    ],
    realCost: 171, doorToDoorMinutes: 310, doorToDoorLabel: "5h 10m",
  };

  it("detects flip when bag removed", () => {
    const newA = {
      ...baseA,
      costLines: baseA.costLines.map((l, i) => i === 1 ? { ...l, amount: 0, isIncluded: true } : l),
      realCost: 159,
    };
    const change = detectChange(baseA, baseB, newA, baseB);
    expect(change).not.toBeNull();
    expect(change!.previousWinner).toBe("B");
    expect(change!.newWinner).toBe("A");
  });

  it("no flip when B still wins", () => {
    const newA = {
      ...baseA,
      costLines: baseA.costLines.map((l, i) => i === 0 ? { ...l, amount: 48 } : l),
      realCost: 194,
    };
    expect(detectChange(baseA, baseB, newA, baseB)).toBeNull();
  });

  it("no false verdict change when A already wins", () => {
    const aw = { ...baseA, realCost: 166, costLines: baseA.costLines.map((l, i) => i === 0 ? { ...l, amount: 20 } : l) };
    const newA = { ...aw, costLines: aw.costLines.map((l, i) => i === 1 ? { ...l, amount: 0 } : l), realCost: 121 };
    expect(detectChange(aw, baseB, newA, baseB)).toBeNull();
  });
});

describe("estimateThreshold", () => {
  it("calculates taxi threshold = 86", () => {
    const a: OptionResult = {
      id: "A", name: "Stansted", code: "STN", visibleTicketPrice: 58,
      costLines: [
        { label: "Ticket", amount: 58, confidence: "user" },
        { label: "Checked bag — removed", amount: 0, confidence: "user", isIncluded: true },
        { label: "Seat", amount: 12, confidence: "user" },
        { label: "Origin → airport", amount: 15, confidence: "estimate" },
        { label: "STN → Central", amount: 74, confidence: "estimate" },
      ],
      realCost: 159, doorToDoorMinutes: 485, doorToDoorLabel: "8h 05m",
    };
    const b: OptionResult = {
      id: "B", name: "Heathrow", code: "LHR", visibleTicketPrice: 126,
      costLines: [{ label: "Ticket", amount: 126, confidence: "user" }],
      realCost: 171, doorToDoorMinutes: 310, doorToDoorLabel: "5h 10m",
    };
    const result = estimateThreshold(a, b, 4);
    expect(result).not.toBeNull();
    expect(result!.threshold).toBe(86);
  });
});

describe("buildVerdict", () => {
  it("B wins at canonical", () => {
    const v = buildVerdict(204, 171, "8h 05m", "5h 10m", false, true);
    expect(v.winner).toBe("B");
    expect(v.headlineHtml).toContain("Heathrow");
  });
  it("A wins on money at 166 vs 171", () => {
    const v = buildVerdict(166, 171, "8h 05m", "5h 10m", true, false);
    expect(v.winner).toBe("A");
    expect(v.headlineHtml).toContain("wins on money");
  });
  it("tie at equal costs", () => {
    const v = buildVerdict(171, 171, "8h 05m", "5h 10m", false, false);
    expect(v.headlineHtml).toContain("tied");
  });
});
