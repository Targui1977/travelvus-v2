import { describe, it, expect } from "vitest";
import { normalizeTime, normalizeInput, extractCode, isSupportedComparison, buildVerdict } from "../normalize";
import { encodeCompareParams, decodeCompareParams } from "../navigation";
import { calcRealCost, monetaryWinner, detectChange, estimateThreshold } from "../decision-engine";
import { deriveEditorial, deriveThreshold, deriveFlips, deriveChangedConsequence } from "../derive-content";
import type { CostLine, OptionResult, OptionId } from "../types";

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
    const v = buildVerdict(204, 171, "8h 05m", "5h 10m", false, true, "Stansted", "Heathrow");
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

/* ── Dynamic content tests (Phase 10.1) ─────────────────── */

const makeOption = (
  id: OptionId,
  ticket: number,
  bag: number,
  seat: number,
  origin: number,
  transfer: number,
  name: string,
  code: string,
  time: string,
  mins: number
): OptionResult => ({
  id, name, code, visibleTicketPrice: ticket, doorToDoorLabel: time, doorToDoorMinutes: mins,
  costLines: [
    { label: "Ticket", amount: ticket, confidence: "user" },
    ...(bag === 0
      ? [{ label: "Checked bag — removed", amount: 0, confidence: "user" as const, isIncluded: true }]
      : [{ label: "Checked bag", amount: bag, confidence: "estimate" as const }]),
    { label: "Seat", amount: seat, confidence: "user" },
    { label: "Origin → airport", amount: origin, confidence: "estimate" },
    { label: "STN → Central", amount: transfer, confidence: "estimate" },
  ],
  realCost: ticket + bag + seat + origin + transfer,
});

const canonicalA = makeOption("A", 58, 45, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
const canonicalB = makeOption("B", 126, 0, 12, 15, 18, "Heathrow", "LHR", "5h 10m", 310);
const ticket20A = makeOption("A", 20, 45, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
const ticket20NoBagA = makeOption("A", 20, 0, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);

describe("deriveEditorial", () => {
  it("CASE A — canonical: mentions €58 and correct cost", () => {
    const e = deriveEditorial(canonicalA, canonicalB);
    expect(e).toContain("€58");
    expect(e).toContain("more expensive trip"); // B wins, A is more expensive
  });
  it("CASE B — A ticket €20: mentions €20, NOT €58", () => {
    const e = deriveEditorial(ticket20A, canonicalB);
    expect(e).toContain("€20");
    expect(e).not.toContain("€58");
  });
  it("CASE C — A ticket €20 + bag removed: mentions €20", () => {
    const e = deriveEditorial(ticket20NoBagA, canonicalB);
    expect(e).toContain("€20");
    expect(e).not.toContain("€58");
  });
});

describe("deriveThreshold", () => {
  // Canonical: A other = 146, B = 171. tiePoint = 25, firstWin = 24. current = 58.
  // Distance to first win = 58 - 24 = 34.
  it("CASE A — canonical (€58): B wins, distance to first win = 34", () => {
    const t = deriveThreshold(canonicalA, canonicalB);
    expect(t.aAlreadyCrossed).toBe(false);
    expect(t.data.leadLabel).toContain("where B stops winning");
    expect(t.data.lineValue).toBe(24);  // first winning fare
    expect(t.data.currentValue).toBe(58);
    expect(t.data.distanceToLine).toBe(34);
    expect(t.data.statementHtml).toContain("€34");
  });

  it("CASE TIE — A ticket €25: exact tie", () => {
    const tieA = makeOption("A", 25, 45, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
    const t = deriveThreshold(tieA, canonicalB);
    expect(t.aAlreadyCrossed).toBe(false); // not winning, just tied
    expect(t.data.leadLabel).toContain("tie");
    // 25 is tie, firstWin = 24. distance = 25 - 24 = 1
    expect(t.data.lineValue).toBe(24);
    expect(t.data.currentValue).toBe(25);
    expect(t.data.distanceToLine).toBe(1);
  });

  it("CASE A wins by €1 — A ticket €24: first winning fare", () => {
    const winA = makeOption("A", 24, 45, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
    const t = deriveThreshold(winA, canonicalB);
    expect(t.aAlreadyCrossed).toBe(true);
    expect(t.data.lineValue).toBe(24);
    expect(t.data.currentValue).toBe(24);
    expect(t.data.distanceToLine).toBe(0);
    // A is AT the line (winning by €1, but at the displayed boundary)
  });

  it("CASE A ticket €20: A deep in winning territory", () => {
    const t = deriveThreshold(ticket20A, canonicalB);
    expect(t.aAlreadyCrossed).toBe(true);
    expect(t.data.leadLabel).toContain("crossed");
    expect(t.data.lineValue).toBe(24);
    expect(t.data.currentValue).toBe(20);
    // distance = 20 - 24 = -4, abs = 4
    expect(t.data.distanceToLine).toBe(4);
    expect(t.data.statementHtml).not.toContain("B wins");
  });

  it("CASE A ticket €20 + bag removed: A deep win", () => {
    const t = deriveThreshold(ticket20NoBagA, canonicalB);
    expect(t.aAlreadyCrossed).toBe(true);
    // With bag removed: other = 0+12+15+74 = 101. tiePoint = 171-101 = 70. firstWin = 69.
    // current = 20. distance = 20 - 69 = -49, abs = 49
    expect(t.data.lineValue).toBe(69);
    expect(t.data.currentValue).toBe(20);
    expect(t.data.distanceToLine).toBe(49);
  });
});

describe("deriveFlips", () => {
  it("CASE A — canonical: shows remove bag flip, A wins by €12", () => {
    const flips = deriveFlips(canonicalA, canonicalB, false, canonicalA, canonicalB);
    const bagFlip = flips.find(f => f.conditionHtml.includes("Remove the checked bag"));
    expect(bagFlip).toBeDefined();
    expect(bagFlip!.outcomeHtml).toContain("€12");
  });
  it("CASE B — A ticket €20: remove bag shows correct diff", () => {
    const flips = deriveFlips(ticket20A, canonicalB, false, ticket20A, canonicalB);
    const bagFlip = flips.find(f => f.conditionHtml.includes("Remove the checked bag"));
    expect(bagFlip!.outcomeHtml).toContain("€50");
    expect(bagFlip!.outcomeHtml).not.toContain("€12");
  });
  it("CASE C — bag already removed: NO remove bag flip", () => {
    const flips = deriveFlips(ticket20NoBagA, canonicalB, true, ticket20NoBagA, canonicalB);
    const bagFlip = flips.find(f => f.conditionHtml.includes("Remove the checked bag"));
    expect(bagFlip).toBeUndefined();
  });
  it("CASE D — canonical flip: after remove bag, correct diff", () => {
    const bagRemovedA = makeOption("A", 58, 0, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
    const flips = deriveFlips(bagRemovedA, canonicalB, true, canonicalA, canonicalB);
    expect(flips.find(f => f.conditionHtml.includes("Remove"))).toBeUndefined();
  });
});

describe("deriveChangedConsequence", () => {
  it("A wins by €12", () => {
    expect(deriveChangedConsequence("A", 159, 171)).toContain("€12");
  });
  it("A wins by €50", () => {
    expect(deriveChangedConsequence("A", 121, 171)).toContain("€50");
  });
  it("B wins by €33", () => {
    const c = deriveChangedConsequence("B", 204, 171);
    expect(c).toContain("€33");
  });
});
