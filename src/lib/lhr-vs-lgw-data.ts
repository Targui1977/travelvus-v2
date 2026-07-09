/**
 * Heathrow vs Gatwick — Verified data from Phase 14.1 Evidence Lock.
 *
 * All costs in EUR. UK transport converted at 1 GBP = 1.17 EUR.
 * Fare basis: walk-up single, contactless/Oyster, off-peak daytime.
 * Time basis: station-to-station + 5min platform + 5min interchange.
 */

export type MarginClass = "ROBUST" | "CLEAR" | "NARROW" | "NEAR_TIE";

export interface DestinationData {
  id: string;        // key for state
  label: string;     // display name
  lhrTransferMode: string;
  lhrTransferCostEUR: number;
  lhrTransferMins: number;
  lgwTransferMode: string;
  lgwTransferCostEUR: number;
  lgwTransferMins: number;
}

export interface CalculatedResult {
  destination: DestinationData;
  lhrTotal: number;
  lgwTotal: number;
  /** Rounded for display (€323 not €322.82) */
  lhrDisplay: number;
  lgwDisplay: number;
  winner: "LHR" | "LGW" | "TIE";
  margin: number;
  /** Rounded margin for display */
  marginDisplay: number;
  marginClass: MarginClass;
  timeWinner: "LHR" | "LGW" | "TIE";
}

/* ── Stable costs (same for all destinations) ──────────── */
const FLIGHT_LHR = 190;  // 2 adults BCN→LHR (€95 × 2)
const FLIGHT_LGW = 170;  // 2 adults BCN→LGW (€85 × 2)
const BAGGAGE_LHR = 70;  // 2 × €35
const BAGGAGE_LGW = 60;  // 2 × €30
const SEATS_LHR = 20;    // 2 × €10
const SEATS_LGW = 16;    // 2 × €8

const PRE_TRANSFER_LHR = FLIGHT_LHR + BAGGAGE_LHR + SEATS_LHR; // 280
const PRE_TRANSFER_LGW = FLIGHT_LGW + BAGGAGE_LGW + SEATS_LGW; // 246

/* ── Destination data ──────────────────────────────────── */
export const DESTINATIONS: DestinationData[] = [
  {
    id: "victoria",
    label: "Victoria",
    lhrTransferMode: "Elizabeth Line + Tube",
    lhrTransferCostEUR: 43,
    lhrTransferMins: 55,
    lgwTransferMode: "Gatwick Express",
    lgwTransferCostEUR: 50,
    lgwTransferMins: 40,
  },
  {
    id: "paddington",
    label: "Paddington",
    lhrTransferMode: "Heathrow Express (advance £10)",
    lhrTransferCostEUR: 23,
    lhrTransferMins: 25,
    lgwTransferMode: "Gatwick Express + Tube",
    lgwTransferCostEUR: 57,
    lgwTransferMins: 55,
  },
  {
    id: "canary-wharf",
    label: "Canary Wharf",
    lhrTransferMode: "Elizabeth Line direct",
    lhrTransferCostEUR: 36,
    lhrTransferMins: 45,
    lgwTransferMode: "Thameslink + Jubilee Line",
    lgwTransferCostEUR: 33,
    lgwTransferMins: 55,
  },
  {
    id: "clapham",
    label: "Clapham",
    lhrTransferMode: "Piccadilly Line + Bus/Tube",
    lhrTransferCostEUR: 20,
    lhrTransferMins: 70,
    lgwTransferMode: "Southern Railway direct",
    lgwTransferCostEUR: 25,
    lgwTransferMins: 40,
  },
  {
    id: "kings-cross",
    label: "King's Cross",
    lhrTransferMode: "Piccadilly Line direct",
    lhrTransferCostEUR: 14,
    lhrTransferMins: 55,
    lgwTransferMode: "Thameslink direct",
    lgwTransferCostEUR: 35,
    lgwTransferMins: 45,
  },
];

/* ── Calculation ───────────────────────────────────────── */

export function calculateResult(dest: DestinationData): CalculatedResult {
  const lhrTotal = PRE_TRANSFER_LHR + dest.lhrTransferCostEUR;
  const lgwTotal = PRE_TRANSFER_LGW + dest.lgwTransferCostEUR;

  const margin = Math.abs(lhrTotal - lgwTotal);
  const marginDisplay = Math.round(margin);
  const winner: "LHR" | "LGW" | "TIE" =
    lhrTotal < lgwTotal ? "LHR" : lgwTotal < lhrTotal ? "LGW" : "TIE";

  const marginClass = classifyMargin(margin);
  const timeWinner: "LHR" | "LGW" | "TIE" =
    dest.lhrTransferMins < dest.lgwTransferMins ? "LHR"
    : dest.lgwTransferMins < dest.lhrTransferMins ? "LGW"
    : "TIE";

  return {
    destination: dest,
    lhrTotal,
    lgwTotal,
    lhrDisplay: Math.round(lhrTotal),
    lgwDisplay: Math.round(lgwTotal),
    winner,
    margin,
    marginDisplay,
    marginClass,
    timeWinner,
  };
}

export function classifyMargin(margin: number): MarginClass {
  if (margin < 5) return "NEAR_TIE";
  if (margin < 15) return "NARROW";
  if (margin < 30) return "CLEAR";
  return "ROBUST";
}

/* ── Margin labels ─────────────────────────────────────── */
export const MARGIN_LABELS: Record<MarginClass, string> = {
  ROBUST: "Robust win",
  CLEAR: "Clear win",
  NARROW: "Narrow win",
  NEAR_TIE: "Near-tie",
};

/* ── Verdict text generation ───────────────────────────── */

export function getVerdictText(r: CalculatedResult): {
  winnerLine: string;
  interpretation: string;
  isHandoff: boolean;
} {
  const w = r.winner === "LHR" ? "Heathrow" : r.winner === "LGW" ? "Gatwick" : null;
  const m = `€${r.marginDisplay}`;

  if (r.marginClass === "NEAR_TIE") {
    return {
      winnerLine: w ? `${w} wins by about ${m}` : "Essentially tied",
      interpretation: "Money no longer separates them. When cost can't decide, time and simplicity take over.",
      isHandoff: true,
    };
  }

  if (r.marginClass === "NARROW") {
    return {
      winnerLine: `${w} wins by ${m}`,
      interpretation: `${w} still wins on money, but not by enough to let cost decide alone.`,
      isHandoff: false,
    };
  }

  if (r.marginClass === "ROBUST") {
    return {
      winnerLine: `${w} wins by ${m}`,
      interpretation: `The destination strengthens ${w}'s advantage. The gap is wide enough to survive normal fare variation.`,
      isHandoff: false,
    };
  }

  return {
    winnerLine: `${w} wins by ${m}`,
    interpretation: `${w} wins clearly. The transfer economics favour it for this destination.`,
    isHandoff: false,
  };
}

/* ── The Line (transfer-cost threshold) ────────────────── */
export function getThresholdData() {
  const flightAdvantage = PRE_TRANSFER_LGW - PRE_TRANSFER_LHR; // LGW is €34 cheaper pre-transfer
  return {
    flightAdvantage,
    explanation: `Gatwick flights are about €${Math.abs(flightAdvantage)} cheaper for 2 travellers. Gatwick can absorb up to €${Math.abs(flightAdvantage)} in higher transfer costs and still win.`,
  };
}
