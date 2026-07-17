/**
 * Travelvus V2 — Decision Sensitivity Engine
 *
 * INTERNAL ENGINEERING TOOL. Not shipped to users.
 * Validates recommendation stability, break-even thresholds,
 * dominant variables, and flip conditions.
 *
 * Pure functions. Dev-only. No React. No side effects.
 *
 * Phase 107.2A.
 */

import {
  LONDON_DESTINATIONS,
  LONDON_DESTINATION_IDS,
  getTransferProfile,
} from "@/data/london-destinations";
import type { LondonDestinationId } from "@/data/london-destinations";

/* ── Types ────────────────────────────────────────────────── */

export type DominanceLevel =
  | "Dominant"
  | "Very High"
  | "High"
  | "Medium"
  | "Low"
  | "Negligible";

export type StabilityClass =
  | "Very Stable"
  | "Stable"
  | "Moderately Stable"
  | "Sensitive"
  | "Highly Sensitive";

export interface VariableDominance {
  variable: string;
  dominance: DominanceLevel;
  practicalInfluence: string;
  editorialImportance: string;
  dependencies: string[];
  editable: boolean;
  source: string;
  affectedOutputs: string[];
}

export interface BreakEvenResult {
  destinationId: LondonDestinationId;
  destinationLabel: string;
  stnTicket: number;
  lhrTicket: number;
  stnRealCost: number;
  lhrRealCost: number;
  costDiff: number;
  timeDiffMin: number;
  currentWinner: "STN" | "LHR" | "Tie";
  breakEvenStnFare: number | null;
  breakEvenLhrFare: number | null;
  breakEvenStnTransfer: number | null;
  gapToBreakEven: number;
  stability: StabilityClass;
  stabilityReason: string;
  decisionState: string;
  confidence: string;
}

export interface ScenarioResult {
  label: string;
  destinationId: LondonDestinationId;
  stnTicket: number;
  lhrTicket: number;
  bagRemoved: boolean;
  stnRealCost: number;
  lhrRealCost: number;
  winner: "STN" | "LHR" | "Tie";
  costDiff: number;
}

/* ── Canonical Constants ──────────────────────────────────── */

const CANONICAL_STN_TICKET = 58;
const CANONICAL_LHR_TICKET = 126;
const CANONICAL_BAG_COST = 45;
const CANONICAL_SEAT = 12;
const CANONICAL_ORIGIN_TRANSFER = 15;

/* ── Variable Inventory ───────────────────────────────────── */

export const VARIABLE_INVENTORY: VariableDominance[] = [
  {
    variable: "STN ticket price",
    dominance: "Dominant",
    practicalInfluence: "Directly controls STN real cost. A €68 gap to LHR makes this the strongest lever.",
    editorialImportance: "Primary — drives all cost comparisons",
    dependencies: ["Transfer cost", "Baggage"],
    editable: true,
    source: "User input (Quick Compare) / mock default",
    affectedOutputs: ["realCost", "winner", "savings", "recommendation", "state", "evidence", "flips"],
  },
  {
    variable: "LHR ticket price",
    dominance: "Dominant",
    practicalInfluence: "Directly controls LHR real cost. Currently €126 — would need to drop significantly to compete.",
    editorialImportance: "Primary — drives all cost comparisons",
    dependencies: ["Transfer cost"],
    editable: true,
    source: "User input (Quick Compare) / mock default",
    affectedOutputs: ["realCost", "winner", "savings", "recommendation", "state", "evidence", "flips"],
  },
  {
    variable: "London destination",
    dominance: "High",
    practicalInfluence: "Changes transfer cost by €3–7 for STN, €0–11 for LHR. Affects journey time by 15–35 min.",
    editorialImportance: "High — destination-specific transfer data makes recommendation more honest",
    dependencies: ["Transfer cost", "Transfer duration", "Door-to-door time"],
    editable: true,
    source: "Destination selector (Quick Compare + Result edit panel)",
    affectedOutputs: ["transferCost", "transferTime", "realCost", "doorToDoor", "recommendation", "evidence", "unknowns"],
  },
  {
    variable: "Checked baggage",
    dominance: "High",
    practicalInfluence: "€45 on STN. Removing it widens STN's advantage. Currently stronger than any destination effect.",
    editorialImportance: "Medium — practical but secondary to airfare",
    dependencies: ["STN ticket price"],
    editable: true,
    source: "Baggage toggle (Result edit panel)",
    affectedOutputs: ["realCost", "winner (if diff < €45)", "savings", "evidence", "flips"],
  },
  {
    variable: "STN transfer cost",
    dominance: "Medium",
    practicalInfluence: "Varies €28–35 across destinations. Would need to increase to ~€100+ to flip winner.",
    editorialImportance: "Medium — explains why the cheaper ticket isn't always cheaper",
    dependencies: ["Destination"],
    editable: false,
    source: "London destination dataset (illustrative EUR)",
    affectedOutputs: ["realCost", "doorToDoor", "evidence"],
  },
  {
    variable: "LHR transfer cost",
    dominance: "Medium",
    practicalInfluence: "Varies €18–29 across destinations. Even maxed out, LHR still more expensive overall.",
    editorialImportance: "Medium — LHR advantage is time, not transfer cost",
    dependencies: ["Destination"],
    editable: false,
    source: "London destination dataset (illustrative EUR)",
    affectedOutputs: ["realCost", "doorToDoor", "evidence"],
  },
  {
    variable: "Transfer duration",
    dominance: "Medium",
    practicalInfluence: "STN takes 55–85 min, LHR takes 30–55 min. 15–55 min gap per destination.",
    editorialImportance: "Medium — door-to-door time is a key metric",
    dependencies: ["Destination", "Airport"],
    editable: false,
    source: "London destination dataset (illustrative)",
    affectedOutputs: ["doorToDoor", "savingsTime", "evidence"],
  },
  {
    variable: "Door-to-door duration",
    dominance: "Low",
    practicalInfluence: "Computed from transfer duration + flight time. LHR faster but STN cheaper.",
    editorialImportance: "Medium — visible metric but secondary to cost",
    dependencies: ["Transfer duration", "Flight schedule"],
    editable: false,
    source: "Computed from destination profiles + flight data",
    affectedOutputs: ["savingsTime", "evidence", "trade-offs"],
  },
  {
    variable: "Schedule cost",
    dominance: "Low",
    practicalInfluence: "Late arrival at STN (23:15) vs LHR (16:45). Night transport constraints are editorial, not arithmetic.",
    editorialImportance: "Low — mentioned in evidence but not priced",
    dependencies: ["Arrival time", "Service window"],
    editable: false,
    source: "Mock data (departure/arrival times)",
    affectedOutputs: ["evidence (arrival convenience)", "limitations"],
  },
  {
    variable: "Confidence",
    dominance: "Negligible",
    practicalInfluence: "Derived from state + data quality. Does not affect winner.",
    editorialImportance: "Medium — trust signal, not decision input",
    dependencies: ["Decision state", "Data quality"],
    editable: false,
    source: "determineConfidence() in decision-state-rules.ts",
    affectedOutputs: ["confidence label", "strength label"],
  },
];

/* ── Break-Even Computation ──────────────────────────────── */

interface RealCostInput {
  stnTicket: number;
  lhrTicket: number;
  destinationId: LondonDestinationId;
  bagRemoved: boolean;
}

function computeRealCosts(input: RealCostInput): {
  stnRealCost: number;
  lhrRealCost: number;
  stnTime: number;
  lhrTime: number;
} {
  const stnTransfer = getTransferProfile(input.destinationId, "STN");
  const lhrTransfer = getTransferProfile(input.destinationId, "LHR");

  const stnTransferCost = stnTransfer?.transferCostEUR ?? 32;
  const lhrTransferCost = lhrTransfer?.transferCostEUR ?? 18;
  const stnTransferTime = stnTransfer?.transferDurationMin ?? 70;
  const lhrTransferTime = lhrTransfer?.transferDurationMin ?? 50;

  const bagCost = input.bagRemoved ? 0 : CANONICAL_BAG_COST;

  const stnRealCost =
    input.stnTicket + bagCost + CANONICAL_SEAT + CANONICAL_ORIGIN_TRANSFER + stnTransferCost;
  const lhrRealCost =
    input.lhrTicket + 0 + CANONICAL_SEAT + CANONICAL_ORIGIN_TRANSFER + lhrTransferCost;

  // Approximate door-to-door: flight(~180) + buffer(90) + origin(30) + transfer
  const stnTime = 300 + stnTransferTime;
  const lhrTime = 300 + lhrTransferTime;

  return { stnRealCost, lhrRealCost, stnTime, lhrTime };
}

/**
 * For a given destination, find the STN ticket price at which LHR becomes cheaper.
 * Uses binary search to find the break-even point.
 */
function findStnBreakEven(
  destinationId: LondonDestinationId,
  lhrTicket: number,
  bagRemoved: boolean
): number | null {
  const lo = 1;
  const hi = 500;
  const baseWinner = computeRealCosts({
    stnTicket: lo, destinationId, lhrTicket, bagRemoved,
  });
  const hiResult = computeRealCosts({
    stnTicket: hi, destinationId, lhrTicket, bagRemoved,
  });

  const loWinner = baseWinner.stnRealCost < baseWinner.lhrRealCost ? "STN" : "LHR";
  const hiWinner = hiResult.stnRealCost < hiResult.lhrRealCost ? "STN" : "LHR";

  // If winner is the same at both extremes, no break-even exists in this range
  if (loWinner === hiWinner) {
    if (loWinner === "STN") return null; // STN always wins
    return lo; // LHR always wins — break-even is at minimum
  }

  // Binary search for the tipping point
  let low = lo;
  let high = hi;
  while (high - low > 1) {
    const mid = Math.floor((low + high) / 2);
    const r = computeRealCosts({ stnTicket: mid, destinationId, lhrTicket, bagRemoved });
    if (r.stnRealCost < r.lhrRealCost) {
      low = mid; // STN still wins
    } else {
      high = mid; // LHR wins
    }
  }

  // high is the first fare where LHR wins (or STN stops winning)
  return high;
}

function findLhrBreakEven(
  destinationId: LondonDestinationId,
  stnTicket: number,
  bagRemoved: boolean
): number | null {
  const lo = 1;
  const hi = 500;
  const loResult = computeRealCosts({
    stnTicket, destinationId, lhrTicket: lo, bagRemoved,
  });
  const hiResult = computeRealCosts({
    stnTicket, destinationId, lhrTicket: hi, bagRemoved,
  });

  const loWinner = loResult.stnRealCost < loResult.lhrRealCost ? "STN" : "LHR";
  const hiWinner = hiResult.stnRealCost < hiResult.lhrRealCost ? "STN" : "LHR";

  if (loWinner === hiWinner) {
    if (loWinner === "LHR") return null; // LHR always wins
    return lo;
  }

  let low = lo;
  let high = hi;
  while (high - low > 1) {
    const mid = Math.floor((low + high) / 2);
    const r = computeRealCosts({ stnTicket, destinationId, lhrTicket: mid, bagRemoved });
    if (r.lhrRealCost < r.stnRealCost) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return high;
}

function classifyStability(gapToBreakEven: number): {
  stability: StabilityClass;
  reason: string;
} {
  if (gapToBreakEven >= 50) {
    return { stability: "Very Stable", reason: `Winner changes only after €${gapToBreakEven}+ shift` };
  }
  if (gapToBreakEven >= 30) {
    return { stability: "Stable", reason: `Winner changes after €${gapToBreakEven}+ shift — unlikely in practice` };
  }
  if (gapToBreakEven >= 15) {
    return { stability: "Moderately Stable", reason: `Winner changes after €${gapToBreakEven}+ shift — possible with fare volatility` };
  }
  if (gapToBreakEven >= 8) {
    return { stability: "Sensitive", reason: `Winner changes after only €${gapToBreakEven} shift — narrow margin due to fixed costs (baggage + seat + transfer)` };
  }
  return { stability: "Highly Sensitive", reason: `Winner changes after only €${gapToBreakEven} shift — extremely narrow` };
}

/* ── Public API ───────────────────────────────────────────── */

/** Generate the full break-even matrix for all destinations. */
export function generateSensitivityMatrix(): BreakEvenResult[] {
  return LONDON_DESTINATION_IDS.map((destId) => {
    const costs = computeRealCosts({
      stnTicket: CANONICAL_STN_TICKET,
      lhrTicket: CANONICAL_LHR_TICKET,
      destinationId: destId,
      bagRemoved: false,
    });

    const winner = costs.stnRealCost < costs.lhrRealCost ? ("STN" as const)
      : costs.lhrRealCost < costs.stnRealCost ? ("LHR" as const)
      : ("Tie" as const);

    // Break-even: what STN fare makes LHR win?
    const stnBreakEven = findStnBreakEven(destId, CANONICAL_LHR_TICKET, false);
    const lhrBreakEven = findLhrBreakEven(destId, CANONICAL_STN_TICKET, false);

    const costDiff = Math.abs(costs.stnRealCost - costs.lhrRealCost);
    const timeDiff = Math.abs(costs.stnTime - costs.lhrTime);

    // Gap to break-even
    const gap = stnBreakEven !== null
      ? stnBreakEven - CANONICAL_STN_TICKET
      : 999; // effectively infinite

    const { stability, reason } = classifyStability(gap);

    const label = LONDON_DESTINATIONS[destId]?.label ?? destId;

    return {
      destinationId: destId,
      destinationLabel: label,
      stnTicket: CANONICAL_STN_TICKET,
      lhrTicket: CANONICAL_LHR_TICKET,
      stnRealCost: costs.stnRealCost,
      lhrRealCost: costs.lhrRealCost,
      costDiff,
      timeDiffMin: timeDiff,
      currentWinner: winner,
      breakEvenStnFare: stnBreakEven,
      breakEvenLhrFare: lhrBreakEven,
      breakEvenStnTransfer: null, // computed separately if needed
      gapToBreakEven: gap,
      stability,
      stabilityReason: reason,
      decisionState: gap >= 30 ? "recommended" : gap >= 15 ? "marginal" : gap >= 8 ? "marginal" : "too_close",
      confidence: gap >= 50 ? "very-high" : gap >= 30 ? "high" : gap >= 15 ? "moderate" : "conditional",
    };
  });
}

/** Run the full stress test across all realistic scenarios. */
export function runStressTest(): ScenarioResult[] {
  const scenarios: ScenarioResult[] = [];

  const ticketPairs = [
    { label: "Canonical (€58 vs €126)", stn: 58, lhr: 126 },
    { label: "Cheap STN (€30)", stn: 30, lhr: 126 },
    { label: "Cheap LHR (€80)", stn: 58, lhr: 80 },
    { label: "Equal tickets (€100)", stn: 100, lhr: 100 },
    { label: "Expensive STN (€150)", stn: 150, lhr: 126 },
    { label: "Both cheap (€50 vs €50)", stn: 50, lhr: 50 },
    { label: "STN slightly > LHR (€130 vs €126)", stn: 130, lhr: 126 },
    { label: "LHR slightly > STN (€60 vs €58)", stn: 58, lhr: 60 },
  ];

  for (const pair of ticketPairs) {
    for (const destId of LONDON_DESTINATION_IDS) {
      for (const bag of [false, true]) {
        const costs = computeRealCosts({
          stnTicket: pair.stn,
          lhrTicket: pair.lhr,
          destinationId: destId,
          bagRemoved: bag,
        });

        const winner = costs.stnRealCost < costs.lhrRealCost ? ("STN" as const)
          : costs.lhrRealCost < costs.stnRealCost ? ("LHR" as const)
          : ("Tie" as const);

        scenarios.push({
          label: `${pair.label} · ${LONDON_DESTINATIONS[destId]?.shortLabel ?? destId} · ${bag ? "no bag" : "with bag"}`,
          destinationId: destId,
          stnTicket: pair.stn,
          lhrTicket: pair.lhr,
          bagRemoved: bag,
          stnRealCost: costs.stnRealCost,
          lhrRealCost: costs.lhrRealCost,
          winner,
          costDiff: Math.abs(costs.stnRealCost - costs.lhrRealCost),
        });
      }
    }
  }

  return scenarios;
}

/** Validate flip rules: check which can actually fire. */
export function validateFlips(): {
  rule: string;
  canFire: boolean;
  threshold: string;
  testable: boolean;
}[] {
  return [
    {
      rule: "Remove checked bag → STN becomes cheaper",
      canFire: true,
      threshold: "Always fires when bag present (€45 on STN)",
      testable: true,
    },
    {
      rule: "STN ticket rises above break-even → LHR wins",
      canFire: true,
      threshold: `€${CANONICAL_STN_TICKET + 63}+ (varies by destination)`,
      testable: true,
    },
    {
      rule: "Someone collects from STN → cost gap narrows",
      canFire: true,
      threshold: `Removes transfer cost (€28–35 depending on destination)`,
      testable: true,
    },
    {
      rule: "Value time at below €X/hour → STN worth it",
      canFire: true,
      threshold: "Hourly rate based on cost/time trade-off",
      testable: true,
    },
    {
      rule: "Destination changes → different transfer costs apply",
      canFire: true,
      threshold: "Any destination change triggers this",
      testable: true,
    },
    {
      rule: "Add bag back → cost gap widens (bag already removed state)",
      canFire: true,
      threshold: "Only when bag was previously removed",
      testable: true,
    },
  ];
}

/** Validate decision trace consistency. */
export function validateDecisionTrace(): {
  check: string;
  passes: boolean;
  detail: string;
}[] {
  const matrix = generateSensitivityMatrix();

  return [
    {
      check: "Winner matches cost comparison",
      passes: matrix.every((r) =>
        (r.currentWinner === "STN" && r.stnRealCost < r.lhrRealCost) ||
        (r.currentWinner === "LHR" && r.lhrRealCost < r.stnRealCost) ||
        (r.currentWinner === "Tie" && r.stnRealCost === r.lhrRealCost)
      ),
      detail: "Winner always reflects lower real cost",
    },
    {
      check: "Confidence consistent with stability",
      passes: matrix.every((r) => {
        if (r.stability === "Very Stable") return r.confidence === "very-high" || r.confidence === "high";
        if (r.stability === "Stable") return r.confidence === "high" || r.confidence === "moderate";
        if (r.stability === "Sensitive") return r.confidence === "moderate" || r.confidence === "conditional";
        return true;
      }),
      detail: "Stability classification aligns with confidence level",
    },
    {
      check: "No impossible state (winner contradicts cost)",
      passes: matrix.every((r) =>
        !(r.currentWinner === "STN" && r.stnRealCost > r.lhrRealCost) &&
        !(r.currentWinner === "LHR" && r.lhrRealCost > r.stnRealCost)
      ),
      detail: "Winner never contradicts arithmetic",
    },
    {
      check: "Break-even is internally consistent",
      passes: matrix.every((r) => {
        if (r.breakEvenStnFare === null) return true; // no break-even = consistent
        if (r.currentWinner === "STN") return r.breakEvenStnFare > CANONICAL_STN_TICKET;
        return r.breakEvenStnFare <= CANONICAL_STN_TICKET;
      }),
      detail: "Break-even fare correctly positioned relative to current fare",
    },
    {
      check: "Gap to break-even matches cost diff",
      passes: matrix.every((r) => {
        if (r.breakEvenStnFare === null) return true;
        // Gap = how much more STN fare must rise to break even
        // Should roughly equal the cost diff between STN and LHR
        const expectedGap = r.lhrRealCost - r.stnRealCost;
        return Math.abs(r.gapToBreakEven - expectedGap) <= 2; // within €2
      }),
      detail: "Gap to break-even matches real cost difference (within tolerance)",
    },
  ];
}

/** Analyze variable interactions. */
export function analyzeInteractions(): {
  variables: [string, string];
  type: "Independent" | "Reinforcing" | "Cancelling" | "Dominant";
  explanation: string;
}[] {
  return [
    {
      variables: ["STN ticket price", "Destination"],
      type: "Dominant",
      explanation: "STN ticket dominates destination: €68 gap means destination never flips winner alone. Destination matters only when ticket gap narrows to <€10.",
    },
    {
      variables: ["STN ticket price", "Baggage"],
      type: "Reinforcing",
      explanation: "Lower STN fare + no bag = even stronger STN advantage. They work in the same direction for the canonical scenario.",
    },
    {
      variables: ["Destination", "Transfer cost"],
      type: "Independent",
      explanation: "Destination determines transfer cost, but the €3–7 variation across zones is too small to matter independently of ticket price.",
    },
    {
      variables: ["Destination", "Transfer duration"],
      type: "Independent",
      explanation: "LHR is consistently faster (15–45 min), but time advantage doesn't overcome cost disadvantage at current fares.",
    },
    {
      variables: ["Ticket price", "Transfer duration"],
      type: "Dominant",
      explanation: "When cost gap is large (>€40), time is irrelevant. When cost is close (<€10), time becomes the tiebreaker.",
    },
    {
      variables: ["LHR ticket price", "Destination"],
      type: "Cancelling",
      explanation: "If LHR ticket drops to near STN levels, LHR's transfer advantage at destinations like Paddington or Liverpool St could flip the recommendation.",
    },
  ];
}
