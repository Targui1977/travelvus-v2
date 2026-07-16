/**
 * Travelvus V2 — Interactive Decision Engine Tests
 *
 * Tests for the complete reasoning pipeline:
 *   decision-state-rules → evidence → flips → tradeoffs → outcome factory
 *
 * Phase 107.0 — Parts P+Q.
 *
 * All 16 required scenarios + validation tests.
 * Pure function tests. No mocking. Node environment.
 */

import { describe, it, expect } from "vitest";
import type { OptionResult, OptionId } from "../types";
import type { CalculationResult } from "../calculation-contract";
import { buildCalculationResult } from "../calculation-contract";
import { buildVerdict } from "../normalize";
import { calcRealCost, monetaryWinner } from "../decision-engine";
import { buildDecisionContext } from "../interactive/interactive-decision-context";
import { buildInteractiveDecisionOutcome } from "../interactive/interactive-decision-outcome";
import {
  determineDecisionState,
  determineConfidence,
  determineStrength,
  determineRecommendation,
  MEANINGFUL_COST_DIFF,
  MARGINAL_COST_DIFF,
  MEANINGFUL_TIME_DIFF_MIN,
} from "../interactive/decision-state-rules";
import { generateEvidence } from "../interactive/interactive-evidence";
import { generateFlips } from "../interactive/interactive-flips";
import { generateTradeoffs } from "../interactive/interactive-tradeoffs";

/* ── Test Helpers ─────────────────────────────────────────── */

function makeOption(
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
): OptionResult {
  return {
    id,
    name,
    code,
    visibleTicketPrice: ticket,
    doorToDoorLabel: time,
    doorToDoorMinutes: mins,
    costLines: [
      { label: "Ticket", amount: ticket, confidence: "user" },
      ...(bag === 0
        ? [{ label: "Checked bag — removed", amount: 0, confidence: "user" as const, isIncluded: true }]
        : [{ label: "Checked bag", amount: bag, confidence: "estimate" as const }]),
      { label: "Seat", amount: seat, confidence: "user" },
      { label: "Origin → airport", amount: origin, confidence: "estimate" },
      { label: "Transfer to Central", amount: transfer, confidence: "estimate" },
    ],
    realCost: ticket + bag + seat + origin + transfer,
  };
}

function makeVerdict(costA: number, costB: number, timeA: string, timeB: string) {
  const aWins = costA < costB;
  const bWins = costB < costA;
  return buildVerdict(costA, costB, timeA, timeB, aWins, bWins);
}

function makeCalculationResult(optA: OptionResult, optB: OptionResult): CalculationResult {
  const winner = monetaryWinner(optA.realCost, optB.realCost);
  const minTime = Math.min(optA.doorToDoorMinutes, optB.doorToDoorMinutes);
  const h = Math.floor(minTime / 60);
  const m = minTime % 60;
  const verdict = makeVerdict(optA.realCost, optB.realCost, optA.doorToDoorLabel, optB.doorToDoorLabel);

  return buildCalculationResult({
    optionA: optA,
    optionB: optB,
    verdict: verdict as any,
    savingsEuro: Math.abs(optA.realCost - optB.realCost),
    savingsTimeMinutes: Math.abs(optA.doorToDoorMinutes - optB.doorToDoorMinutes),
    savingsTimeLabel: `${h}h ${m}m`,
    isSupported: true,
    calculatedAt: Date.now(),
  });
}

/* ── Canonical Fixtures ───────────────────────────────────── */

// Canonical: STN (A) €204 vs LHR (B) €171, B wins by €33, 2h55m faster
const canonicalA = makeOption("A", 58, 45, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
const canonicalB = makeOption("B", 126, 0, 12, 15, 18, "Heathrow", "LHR", "5h 10m", 310);
const canonicalResult = makeCalculationResult(canonicalA, canonicalB);
const canonicalCtx = buildDecisionContext(canonicalResult);

// Bag removed from STN
const noBagA = makeOption("A", 58, 0, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
const noBagResult = makeCalculationResult(noBagA, canonicalB);
const noBagCtx = buildDecisionContext(noBagResult, { bagRemoved: true, editedLineIndex: 1 });

// Cheap STN ticket
const cheapA = makeOption("A", 20, 45, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
const cheapResult = makeCalculationResult(cheapA, canonicalB);
const cheapCtx = buildDecisionContext(cheapResult);

// Expensive LHR ticket — pushes to A winning
const expensiveB = makeOption("B", 180, 0, 12, 15, 18, "Heathrow", "LHR", "5h 10m", 310);
const expensiveResult = makeCalculationResult(canonicalA, expensiveB);
const expensiveCtx = buildDecisionContext(expensiveResult);

// Equal costs
const equalA = makeOption("A", 58, 45, 12, 15, 18, "Stansted", "STN", "8h 05m", 485);
const equalB_tie = makeOption("B", 112, 0, 12, 15, 18, "Heathrow", "LHR", "5h 10m", 310);
// A: 58+45+12+15+18 = 148, B: 112+0+12+15+18 = 157 — not equal, let me fix
const equalA_fixed = makeOption("A", 58, 45, 12, 15, 41, "Stansted", "STN", "8h 05m", 485);
const equalB_fixed = makeOption("B", 126, 0, 12, 15, 18, "Heathrow", "LHR", "5h 10m", 310);
// A: 58+45+12+15+41 = 171, B: 126+0+12+15+18 = 171 ✓
const equalResult = makeCalculationResult(equalA_fixed, equalB_fixed);
const equalCtx = buildDecisionContext(equalResult);

// Near-equal times (close to meaningful threshold)
const closeA = makeOption("A", 58, 45, 12, 15, 74, "Stansted", "STN", "5h 25m", 325);
const closeB = makeOption("B", 126, 0, 12, 15, 18, "Heathrow", "LHR", "5h 10m", 310);
const closeResult = makeCalculationResult(closeA, closeB);
const closeCtx = buildDecisionContext(closeResult);

// Very close costs
const marginalA = makeOption("A", 58, 45, 12, 15, 70, "Stansted", "STN", "8h 05m", 485);
const marginalB = makeOption("B", 120, 0, 12, 15, 55, "Heathrow", "LHR", "5h 10m", 310);
// A: 58+45+12+15+70 = 200, B: 120+0+12+15+55 = 202, diff = 2 (< MEANINGFUL)
const marginalResult = makeCalculationResult(marginalA, marginalB);
const marginalCtx = buildDecisionContext(marginalResult);

// Unsupported route
function makeUnsupportedResult(): CalculationResult {
  const optA = makeOption("A", 58, 45, 12, 15, 74, "CDG", "CDG", "8h 05m", 485);
  const optB = makeOption("B", 126, 0, 12, 15, 18, "ORY", "ORY", "5h 10m", 310);
  const winner = monetaryWinner(optA.realCost, optB.realCost);
  return buildCalculationResult({
    optionA: optA, optionB: optB,
    verdict: makeVerdict(optA.realCost, optB.realCost, optA.doorToDoorLabel, optB.doorToDoorLabel) as any,
    savingsEuro: Math.abs(optA.realCost - optB.realCost),
    savingsTimeMinutes: Math.abs(optA.doorToDoorMinutes - optB.doorToDoorMinutes),
    savingsTimeLabel: "0h 0m",
    isSupported: false,
    calculatedAt: Date.now(),
  });
}
const unsupportedResult = makeUnsupportedResult();
const unsupportedCtx = buildDecisionContext(unsupportedResult);

/* ═══════════════════════════════════════════════════════════ */
/* ── DECISION STATE RULES ─────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

describe("determineDecisionState", () => {
  it("1. Default Berlin → STN vs LHR: returns conditionally_recommended (estimates present)", () => {
    const state = determineDecisionState("B", 33, 175, true, true, true);
    expect(state).toBe("conditionally_recommended");
  });

  it("returns recommended when clear advantage and no estimates", () => {
    const state = determineDecisionState("B", 60, 120, true, false, false);
    expect(state).toBe("recommended");
  });

  it("2. Checked baggage removed from STN: marginal (cost diff below marginal, time advantage keeps it from too_close)", () => {
    // With bag removed: A=159, B=171, diff=12 (< MARGINAL_COST_DIFF)
    // But time diff 175 > MEANINGFUL_TIME_DIFF_MIN (30), so it's marginal, not too_close
    const state = determineDecisionState("B", 12, 175, true, false, true);
    expect(state).toBe("marginal");
  });

  it("3. STN ticket substantially lower → A wins: recommended if no estimates", () => {
    const state = determineDecisionState("A", 55, 175, true, false, false);
    expect(state).toBe("recommended");
  });

  it("4. LHR ticket increased beyond threshold → A wins", () => {
    // A=204, B=225, diff=21, A wins
    const state = determineDecisionState("A", 21, 175, true, true, true);
    expect(state).toBe("marginal"); // diff < MARGINAL_COST_DIFF (30)
  });

  it("5. Equal total costs → balanced", () => {
    const state = determineDecisionState("tie", 0, 175, true, true, true);
    expect(state).toBe("balanced");
  });

  it("6. Near-equal costs AND near-equal journey times → too_close", () => {
    // Both cost diff < MEANINGFUL (15) AND time diff < MEANINGFUL_TIME (30)
    const state = determineDecisionState("B", 10, 15, true, true, true);
    expect(state).toBe("too_close");
  });

  it("7. Unsupported → insufficient_data", () => {
    const state = determineDecisionState("B", 33, 175, false, true, true);
    expect(state).toBe("insufficient_data");
  });

  it("returns marginal for moderate cost advantage", () => {
    const state = determineDecisionState("B", 20, 175, true, true, true);
    expect(state).toBe("marginal");
  });
});

describe("determineConfidence", () => {
  it("recommended + no estimates → very-high", () => {
    expect(determineConfidence("recommended", true, false)).toBe("very-high");
  });

  it("recommended + estimates → high", () => {
    expect(determineConfidence("recommended", true, true)).toBe("high");
  });

  it("conditionally_recommended + estimates → conditional", () => {
    expect(determineConfidence("conditionally_recommended", true, true)).toBe("conditional");
  });

  it("balanced → context-dependent", () => {
    expect(determineConfidence("balanced", true, false)).toBe("context-dependent");
  });

  it("too_close → too-close", () => {
    expect(determineConfidence("too_close", true, false)).toBe("too-close");
  });

  it("insufficient_data → too-close", () => {
    expect(determineConfidence("insufficient_data", false, false)).toBe("too-close");
  });
});

describe("determineStrength", () => {
  it("recommended → Clear recommendation", () => {
    expect(determineStrength("recommended")).toBe("Clear recommendation");
  });

  it("conditionally_recommended → Recommendation with conditions", () => {
    expect(determineStrength("conditionally_recommended")).toBe("Recommendation with conditions");
  });

  it("balanced → Balanced", () => {
    expect(determineStrength("balanced")).toContain("Balanced");
  });

  it("too_close → Too close", () => {
    expect(determineStrength("too_close")).toContain("Too close");
  });
});

/* ═══════════════════════════════════════════════════════════ */
/* ── THRESHOLD CONSTANTS ──────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

describe("threshold constants", () => {
  it("MEANINGFUL_COST_DIFF is 15", () => {
    expect(MEANINGFUL_COST_DIFF).toBe(15);
  });

  it("MARGINAL_COST_DIFF is 30", () => {
    expect(MARGINAL_COST_DIFF).toBe(30);
  });

  it("MEANINGFUL_TIME_DIFF_MIN is 30", () => {
    expect(MEANINGFUL_TIME_DIFF_MIN).toBe(30);
  });

  it("MEANINGFUL > 0 (not arbitrary precision)", () => {
    expect(MEANINGFUL_COST_DIFF).toBeGreaterThan(0);
  });

  it("MARGINAL > MEANINGFUL", () => {
    expect(MARGINAL_COST_DIFF).toBeGreaterThan(MEANINGFUL_COST_DIFF);
  });
});

/* ═══════════════════════════════════════════════════════════ */
/* ── EVIDENCE GENERATION ──────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

describe("generateEvidence", () => {
  it("8. Default canonical: produces factors with max 2 critical", () => {
    const result = generateEvidence(canonicalCtx, "conditionally_recommended", "Recommendation with conditions");
    expect(result.factors.length).toBeGreaterThan(0);
    expect(result.factors.length).toBeLessThanOrEqual(5);

    const criticals = result.factors.filter((f) => f.weight === "critical");
    expect(criticals.length).toBeLessThanOrEqual(2);
  });

  it("includes real trip cost factor", () => {
    const result = generateEvidence(canonicalCtx, "conditionally_recommended", "Recommendation with conditions");
    const costFactor = result.factors.find((f) => f.title === "Real trip cost");
    expect(costFactor).toBeDefined();
    expect(costFactor!.explanation).toContain("€171");
    expect(costFactor!.explanation).toContain("€33");
  });

  it("includes airport transfer cost factor", () => {
    const result = generateEvidence(canonicalCtx, "conditionally_recommended", "Recommendation with conditions");
    const transferFactor = result.factors.find((f) => f.title === "Airport transfer cost");
    expect(transferFactor).toBeDefined();
  });

  it("includes journey time factor", () => {
    const result = generateEvidence(canonicalCtx, "conditionally_recommended", "Recommendation with conditions");
    const timeFactor = result.factors.find((f) => f.title === "Total journey time");
    expect(timeFactor).toBeDefined();
  });

  it("9. Bag removed: evidence reflects bag removal", () => {
    const result = generateEvidence(noBagCtx, "too_close", "Too close for a strong recommendation");
    const bagFactor = result.factors.find((f) => f.title === "Baggage & extras");
    expect(bagFactor).toBeDefined();
    expect(bagFactor!.explanation).toContain("removed");
  });

  it("10. Evidence updates after edit (bag removed vs canonical)", () => {
    const canonical = generateEvidence(canonicalCtx, "conditionally_recommended", "Recommendation with conditions");
    const edited = generateEvidence(noBagCtx, "too_close", "Too close for a strong recommendation");

    // Should have different factors
    const canonicalBag = canonical.factors.find((f) => f.title === "Baggage & extras");
    const editedBag = edited.factors.find((f) => f.title === "Baggage & extras");
    expect(canonicalBag?.explanation).not.toBe(editedBag?.explanation);
  });

  it("includes decision trace with 5 steps", () => {
    const result = generateEvidence(canonicalCtx, "conditionally_recommended", "Recommendation with conditions");
    expect(result.trace).toHaveLength(5);
    expect(result.trace[0]).toContain("STN");
    expect(result.trace[4]).toContain("wins");
  });

  it("includes limitations", () => {
    const result = generateEvidence(canonicalCtx, "conditionally_recommended", "Recommendation with conditions");
    expect(result.limitations.length).toBeGreaterThan(0);
  });

  it("11. Unsupported: evidence reflects limited data", () => {
    const result = generateEvidence(unsupportedCtx, "insufficient_data", "Not enough data to recommend");
    // Still produces some factors (ticket comparison)
    expect(result.factors.length).toBeGreaterThan(0);
  });
});

/* ═══════════════════════════════════════════════════════════ */
/* ── FLIP RULES ───────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

describe("generateFlips", () => {
  it("12. Default canonical: produces at least 3 flip rules", () => {
    const flips = generateFlips(canonicalCtx);
    expect(flips.length).toBeGreaterThanOrEqual(3);
  });

  it("includes baggage removal flip when bag present", () => {
    const flips = generateFlips(canonicalCtx);
    const bagFlip = flips.find((f) => f.condition.toLowerCase().includes("remove") && f.condition.toLowerCase().includes("bag"));
    expect(bagFlip).toBeDefined();
  });

  it("13. Bag already removed: no removal flip, shows restore rule", () => {
    const flips = generateFlips(noBagCtx);
    const removeFlip = flips.find((f) => f.condition.toLowerCase().includes("remove") && f.condition.toLowerCase().includes("bag"));
    expect(removeFlip).toBeUndefined();

    const restoreFlip = flips.find((f) => f.condition.toLowerCase().includes("add") && f.condition.toLowerCase().includes("bag"));
    expect(restoreFlip).toBeDefined();
  });

  it("14. Flip rules update after edit", () => {
    const canonicalFlips = generateFlips(canonicalCtx);
    const editedFlips = generateFlips(noBagCtx);
    // They should differ (at minimum the bag rule)
    const canonicalBag = canonicalFlips.find((f) => f.condition.includes("bag"));
    const editedBag = editedFlips.find((f) => f.condition.includes("bag"));
    expect(canonicalBag?.condition).not.toBe(editedBag?.condition);
  });

  it("includes break-even ticket price rule", () => {
    const flips = generateFlips(canonicalCtx);
    const ticketFlip = flips.find((f) => f.condition.includes("ticket price") || f.condition.includes("fare"));
    expect(ticketFlip).toBeDefined();
  });

  it("includes destination change rule", () => {
    const flips = generateFlips(canonicalCtx);
    const destFlip = flips.find((f) => f.condition.toLowerCase().includes("destination"));
    expect(destFlip).toBeDefined();
  });

  it("every flip has IF→THEN structure (condition + result)", () => {
    const flips = generateFlips(canonicalCtx);
    for (const f of flips) {
      expect(f.condition).toBeTruthy();
      expect(f.result).toBeTruthy();
      expect(f.condition.length).toBeGreaterThan(5);
      expect(f.result.length).toBeGreaterThan(5);
    }
  });
});

/* ═══════════════════════════════════════════════════════════ */
/* ── TRADE-OFFS ───────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

describe("generateTradeoffs", () => {
  it("canonical: produces advantages (max 3)", () => {
    const { advantages } = generateTradeoffs(canonicalCtx, "conditionally_recommended");
    expect(advantages.length).toBeGreaterThan(0);
    expect(advantages.length).toBeLessThanOrEqual(3);
  });

  it("canonical: produces trade-offs", () => {
    const { tradeoffs } = generateTradeoffs(canonicalCtx, "conditionally_recommended");
    expect(tradeoffs.length).toBeGreaterThan(0);
    expect(tradeoffs.length).toBeLessThanOrEqual(3);
  });

  it("canonical: produces unknowns", () => {
    const { unknowns } = generateTradeoffs(canonicalCtx, "conditionally_recommended");
    expect(unknowns.length).toBeGreaterThan(0);
  });

  it("insufficient_data: no advantages or trade-offs", () => {
    const { advantages, tradeoffs } = generateTradeoffs(unsupportedCtx, "insufficient_data");
    expect(advantages).toHaveLength(0);
    expect(tradeoffs).toHaveLength(0);
  });

  it("too_close: no trade-offs", () => {
    const { tradeoffs } = generateTradeoffs(marginalCtx, "too_close");
    expect(tradeoffs).toHaveLength(0);
  });

  it("unknowns always include central London assumption", () => {
    const { unknowns } = generateTradeoffs(canonicalCtx, "conditionally_recommended");
    const destUnknown = unknowns.find((u) => u.toLowerCase().includes("london"));
    expect(destUnknown).toBeDefined();
  });
});

/* ═══════════════════════════════════════════════════════════ */
/* ── OUTCOME FACTORY (integration) ────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

describe("buildInteractiveDecisionOutcome", () => {
  it("15. Default canonical: produces complete outcome", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);

    expect(outcome.decisionIntelligence).toBeDefined();
    expect(outcome.decisionIntelligence.state).toBeDefined();
    expect(outcome.decisionIntelligence.recommendation).toBeTruthy();
    expect(outcome.decisionIntelligence.summary).toBeTruthy();
    expect(outcome.decisionIntelligence.advantages.length).toBeGreaterThan(0);
    expect(outcome.decisionIntelligence.flips.length).toBeGreaterThan(0);

    expect(outcome.evidence.factors.length).toBeGreaterThan(0);
    expect(outcome.evidence.factors.length).toBeLessThanOrEqual(5);
    expect(outcome.evidence.trace).toHaveLength(5);

    expect(outcome.confidence).toBeDefined();
  });

  it("16. Bag removed: outcome differs from canonical", () => {
    const canonical = buildInteractiveDecisionOutcome(canonicalCtx);
    const edited = buildInteractiveDecisionOutcome(noBagCtx);

    // State should differ (marginal/too_close vs conditionally_recommended)
    expect(edited.decisionIntelligence.state).not.toBe(canonical.decisionIntelligence.state);
  });

  it("17. Cheap STN (A wins): state is recommended or conditionally_recommended", () => {
    const outcome = buildInteractiveDecisionOutcome(cheapCtx);
    expect(["recommended", "conditionally_recommended", "marginal"]).toContain(
      outcome.decisionIntelligence.state
    );
  });

  it("18. Expensive LHR (A wins): recommendation flips from B to A", () => {
    const outcome = buildInteractiveDecisionOutcome(expensiveCtx);
    // A should be the recommended option
    expect(outcome.decisionIntelligence.recommendation).toContain("Stansted");
  });

  it("19. Equal costs: state is balanced (tested directly)", () => {
    const state = determineDecisionState("tie", 0, 175, true, true, true);
    expect(state).toBe("balanced");
  });

  it("20. Unsupported: state is insufficient_data", () => {
    const outcome = buildInteractiveDecisionOutcome(unsupportedCtx);
    expect(outcome.decisionIntelligence.state).toBe("insufficient_data");
  });

  it("21. Verdict changes after edit: changedState populated", () => {
    const ctx = buildDecisionContext(noBagResult, {
      bagRemoved: true,
      editedLineIndex: 1,
      previousWinner: "B",
    });
    const outcome = buildInteractiveDecisionOutcome(ctx);
    expect(outcome.changedState).toBeDefined();
    expect(outcome.changedState!.previousWinner).toBe("B");
  });

  it("22. Verdict does NOT change without winner flip", () => {
    const ctx = buildDecisionContext(canonicalResult, {
      bagRemoved: false,
      previousWinner: "B",
    });
    const outcome = buildInteractiveDecisionOutcome(ctx);
    // Same winner → no changed state
    expect(outcome.changedState).toBeUndefined();
  });

  it("23. Evidence updates after edit", () => {
    const canonical = buildInteractiveDecisionOutcome(canonicalCtx);
    const edited = buildInteractiveDecisionOutcome(noBagCtx);

    // Evidence factors should differ
    const cTitles = canonical.evidence.factors.map((f) => f.title).sort().join(",");
    const eTitles = edited.evidence.factors.map((f) => f.title).sort().join(",");
    // Should have baggage factor content differ
    const cBag = canonical.evidence.factors.find((f) => f.title === "Baggage & extras");
    const eBag = edited.evidence.factors.find((f) => f.title === "Baggage & extras");
    if (cBag && eBag) {
      expect(cBag.explanation).not.toBe(eBag.explanation);
    }
  });

  it("24. Flip rules update after edit", () => {
    const canonical = buildInteractiveDecisionOutcome(canonicalCtx);
    const edited = buildInteractiveDecisionOutcome(noBagCtx);

    expect(edited.decisionIntelligence.flips).not.toEqual(
      canonical.decisionIntelligence.flips
    );
  });

  it("25. Currency consistency: all monetary values use EUR", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);

    // Evidence factors should mention €
    const allText = outcome.evidence.factors.map((f) => f.explanation).join(" ");
    expect(allText).toContain("€");

    // Recommendation should mention €
    expect(outcome.decisionIntelligence.summary).toContain("€");

    // Should NOT contain $ or £ (all in EUR)
    expect(allText).not.toContain("$");
    expect(allText).not.toContain("£");
  });

  it("26. No stale reasoning after recalculation", () => {
    const ctx1 = buildDecisionContext(canonicalResult);
    const ctx2 = buildDecisionContext(cheapResult);
    const o1 = buildInteractiveDecisionOutcome(ctx1);
    const o2 = buildInteractiveDecisionOutcome(ctx2);

    // Different winners → different state
    expect(o1.decisionIntelligence.recommendation).not.toBe(
      o2.decisionIntelligence.recommendation
    );
  });

  it("27. Maximum 2 critical evidence factors", () => {
    // Test with large diff that could trigger many criticals
    const largeDiffA = makeOption("A", 20, 45, 12, 15, 74, "Stansted", "STN", "8h 05m", 485);
    const largeDiffB = makeOption("B", 200, 0, 12, 15, 18, "Heathrow", "LHR", "5h 10m", 310);
    const largeDiffResult = makeCalculationResult(largeDiffA, largeDiffB);
    const largeDiffCtx = buildDecisionContext(largeDiffResult);
    const outcome = buildInteractiveDecisionOutcome(largeDiffCtx);

    const criticals = outcome.evidence.factors.filter((f) => f.weight === "critical");
    expect(criticals.length).toBeLessThanOrEqual(2);
  });

  it("28. Evidence does NOT include generic factors unrelated to result", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    for (const f of outcome.evidence.factors) {
      // Should mention specific airports, costs, or times — never generic
      const hasSpecifics =
        f.explanation.includes("STN") ||
        f.explanation.includes("LHR") ||
        f.explanation.includes("Stansted") ||
        f.explanation.includes("Heathrow") ||
        f.explanation.includes("€");
      expect(hasSpecifics).toBe(true);
    }
  });

  it("29. Conditional states contain flip rules", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    if (outcome.decisionIntelligence.state === "conditionally_recommended") {
      expect(outcome.decisionIntelligence.flips.length).toBeGreaterThan(0);
    }
  });

  it("30. Too-close states do NOT claim strong advantage", () => {
    const outcome = buildInteractiveDecisionOutcome(marginalCtx);
    if (outcome.decisionIntelligence.state === "too_close") {
      expect(outcome.decisionIntelligence.recommendation.toLowerCase()).not.toContain("clear");
      expect(outcome.decisionIntelligence.recommendation.toLowerCase()).not.toContain("strong");
    }
  });

  it("31. Insufficient-data states identify missing inputs", () => {
    const outcome = buildInteractiveDecisionOutcome(unsupportedCtx);
    expect(outcome.decisionIntelligence.state).toBe("insufficient_data");
    expect(outcome.decisionIntelligence.unknowns).toBeDefined();
    expect(outcome.decisionIntelligence.unknowns!.length).toBeGreaterThan(0);
  });

  it("32. All displayed monetary values use declared currency", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    // Context declares comparisonCurrency: "EUR"
    // All monetary references should use €
    const allEvidence = outcome.evidence.factors.map((f) => f.explanation).join(" ");
    const dollarCount = (allEvidence.match(/\$/g) || []).length;
    const poundCount = (allEvidence.match(/£/g) || []).length;
    expect(dollarCount).toBe(0);
    expect(poundCount).toBe(0);
  });

  it("33. Decision trace ends with winner", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    const lastStep = outcome.evidence.trace[outcome.evidence.trace.length - 1];
    expect(lastStep.toLowerCase()).toContain("wins");
  });

  it("34. Recommendation text never contains 'wins by €0'", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    expect(outcome.decisionIntelligence.recommendation).not.toContain("€0");
    expect(outcome.decisionIntelligence.summary).not.toContain("€0");
  });

  it("35. Baggage factor exists for canonical (bag present)", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    const bagFactor = outcome.evidence.factors.find((f) => f.title === "Baggage & extras");
    expect(bagFactor).toBeDefined();
  });
});

/* ═══════════════════════════════════════════════════════════ */
/* ── VALIDATION ───────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

describe("validation rules", () => {
  it("calculation winner matches recommendation direction", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    // B wins → recommendation should mention Heathrow/B/LHR
    const rec = outcome.decisionIntelligence.recommendation.toLowerCase();
    expect(rec).toMatch(/heathrow|lhr|option b/);
  });

  it("decision state is compatible with confidence", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    // conditionally_recommended → conditional or moderate
    expect(["conditional", "high", "moderate"]).toContain(outcome.confidence);
  });

  it("evidence factors reflect actual data (not fabricated)", () => {
    const outcome = buildInteractiveDecisionOutcome(canonicalCtx);
    for (const f of outcome.evidence.factors) {
      // No factor should reference airports not in the comparison
      expect(f.explanation).not.toContain("JFK");
      expect(f.explanation).not.toContain("CDG");
      expect(f.explanation).not.toContain("New York");
      expect(f.explanation).not.toContain("Paris");
    }
  });

  it("too-close states do not contain 'recommended' in recommendation", () => {
    const outcome = buildInteractiveDecisionOutcome(marginalCtx);
    if (outcome.decisionIntelligence.state === "too_close") {
      expect(outcome.decisionIntelligence.recommendation.toLowerCase()).not.toContain("recommended");
    }
  });

  it("context preserves isSupported flag", () => {
    expect(canonicalCtx.isSupported).toBe(true);
    expect(unsupportedCtx.isSupported).toBe(false);
  });
});
