import type { FullResultData } from "./types";

/**
 * Travelvus V2 — Canonical mock data.
 *
 * Scenario: Stansted (A) vs Heathrow (B).
 * All values from the approved Hi-Fi final (T1 + T2 refinements).
 * Single source of truth for Phase 3 — Full Result.
 */

export const MOCK_RESULT: FullResultData = {
  optionA: {
    id: "A",
    name: "Stansted",
    code: "STN",
    visibleTicketPrice: 58,
    costLines: [
      { label: "Ticket", amount: 58, confidence: "user" },
      { label: "Checked bag", amount: 45, confidence: "estimate" },
      { label: "Seat", amount: 12, confidence: "user" },
      { label: "Origin → airport", amount: 15, confidence: "estimate" },
      {
        label: "STN → Central (night taxi)",
        amount: 74,
        confidence: "estimate",
      },
    ],
    realCost: 204,
    doorToDoorMinutes: 485,
    doorToDoorLabel: "8h 05m",
  },

  optionB: {
    id: "B",
    name: "Heathrow",
    code: "LHR",
    visibleTicketPrice: 126,
    costLines: [
      { label: "Ticket", amount: 126, confidence: "user" },
      {
        label: "Checked bag — included",
        amount: 0,
        confidence: "strong",
        isIncluded: true,
      },
      { label: "Seat", amount: 12, confidence: "user" },
      { label: "Origin → airport", amount: 15, confidence: "estimate" },
      {
        label: "LHR → Central (Piccadilly)",
        amount: 18,
        confidence: "strong",
      },
    ],
    realCost: 171,
    doorToDoorMinutes: 310,
    doorToDoorLabel: "5h 10m",
  },

  verdict: {
    winner: "B",
    winnerName: "Option B",
    winnerPlace: "Heathrow",
    headlineHtml:
      'Option B — <span class="verdict-highlight">Heathrow</span> — is the better overall deal.',
    subtextHtml:
      "Saves <b>€33</b> and <b>2h 55m</b> door-to-door versus the cheaper-looking ticket.",
    confidenceLabel: "Confidence · Strong",
    provenance: "Official fares + transit data · verified Jul 2026",
    priority: "Priority: Balanced",
  },

  savingsEuro: 33,
  savingsTimeMinutes: 175,
  savingsTimeLabel: "2h 55m",

  doorToDoorGapLabel: "2h 55m",
  doorToDoorGapCaption:
    "more of your day, door to door — a working morning you don't get back.",

  threshold: {
    variable: "Stansted's fare",
    lineValue: 24,
    currentValue: 58,
    distanceToLine: 34,
    unit: "€",
    leadLabel: "The line — where B stops winning",
    statementHtml:
      'Option B wins until Stansted\'s fare falls another <em class="threshold-amt">€34</em>. Below that, the cheaper ticket finally becomes the cheaper trip.',
    linePct: 26.7,
    nowPct: 64.4,
    gapLabel: "€34 to the line",
  },

  secondaryFlips: [
    {
      conditionHtml:
        "<b>Remove the checked bag</b> from Option A",
      outcomeHtml: '<span class="flip-arrow">→</span> A wins by €12',
    },
    {
      conditionHtml:
        "If <b>someone collects you</b> from Stansted (no €74 taxi)",
      outcomeHtml: '<span class="flip-arrow">→</span> A wins by €41',
    },
    {
      conditionHtml:
        "If you value the extra <b>2h 55m</b> at under €11/hour",
      outcomeHtml:
        '<span class="flip-arrow">→</span> A\'s saving is worth it',
    },
  ],

  decisionDebt: {
    title: "The hidden trade-off with Option A",
    textHtml:
      'It saves money by taking on more <span class="debt-term">decision debt</span> — a secondary airport, a late arrival, a night-only transfer, and greater dependence on estimated costs.',
    factors: [
      "Secondary airport",
      "23:15 arrival",
      "Night-only transfer",
      "Bag not included",
      "Estimate-dependent",
    ],
  },

  realCostEditorial:
    "The €58 ticket doesn't produce the €58 journey. Once the bag and the late-night ride into London are counted, it becomes the more expensive trip.",
};
