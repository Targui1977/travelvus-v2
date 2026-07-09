/**
 * Gatwick vs Stansted — Verified data from Phase 21 + 23.1 correction.
 *
 * All costs in EUR. UK transport converted at 1 GBP = 1.17 EUR.
 * Fare basis: walk-up single, contactless/Oyster, off-peak daytime.
 *
 * Page type: NON-INTERACTIVE editorial Decision Page.
 * Unique capability: SAVING-WORTH HANDOFF.
 *
 * THRESHOLD CORRECTION (Phase 23.1):
 * The tie point is NOT just the transfer penalty.
 * STN has €15.65 more in fixed costs (transfer + baggage).
 * Exact tie: STN flight saving = €15.65.
 * First whole-euro STN win: S = 16. First LGW win: S = 15.
 */

export type VerdictState = "STN_NARROW" | "MONEY_TIE" | "STN_CLEAR" | "LGW_WINS";

export interface SavingScenario {
  stnSaving: number;
  label: string;
  moneyResult: string;
  boundaryRelation: string;
  handoffActive: boolean;
  handoffText: string;
}

export interface CanonicalData {
  /* Raw values */
  lgwFlightRaw: number; stnFlightRaw: number;
  lgwBagRaw: number; stnBagRaw: number;
  lgwSeatRaw: number; stnSeatRaw: number;
  lgwTransferRaw: number; stnTransferRaw: number;
  gbpToEur: number;
  lgwTotalRaw: number; stnTotalRaw: number; rawDiff: number;

  /* Display values */
  lgwFlight: number; stnFlight: number;
  lgwBag: number; stnBag: number;
  lgwTransfer: number; stnTransfer: number;
  lgwTotal: number; stnTotal: number; displayDiff: number;

  /* Winner */
  moneyWinner: "LGW" | "STN" | "TIE";
  verdictState: VerdictState;

  /* Access friction */
  lgwTransferMins: number; stnTransferMins: number; extraTimeMins: number;
  lgwTransferCount: number; stnTransferCount: number; extraTransfers: number;

  /* Threshold (corrected) */
  stnFlightAdvantage: number;  // canonical: 20
  stnFixedDisadvantageRaw: number;  // STN bag+seat+transfer - LGW bag+seat+transfer (=15.65)
  stnFixedDisadvantage: number;     // display rounded (=16)
  tiePoint: number;                 // exact tie (raw) = 15.65
  tiePointDisplay: number;          // display = 16
}

/* ── Constants ─────────────────────────────────────────── */

const GBP = 1.17;
const LGW_FLIGHT = 95, STN_FLIGHT = 75;
const LGW_BAG = 30, STN_BAG = 35;
const LGW_SEAT = 8, STN_SEAT = 8;
const LGW_TRANSFER_GBP = 10.70;
const STN_TRANSFER_GBP = 17.00 + 2.80;

/* ── Calculation ───────────────────────────────────────── */

function compute(): CanonicalData {
  const lgwTransferRaw = LGW_TRANSFER_GBP * GBP;
  const stnTransferRaw = STN_TRANSFER_GBP * GBP;

  const lgwFixed = LGW_BAG + LGW_SEAT + lgwTransferRaw;  // ~50.52
  const stnFixed = STN_BAG + STN_SEAT + stnTransferRaw;  // ~66.17
  const stnFixedDisadvantageRaw = stnFixed - lgwFixed;    // 15.65

  const lgwTotalRaw = LGW_FLIGHT + lgwFixed;
  const stnTotalRaw = STN_FLIGHT + stnFixed;
  const rawDiff = lgwTotalRaw - stnTotalRaw; // positive = LGW more expensive

  const lgwTotal = Math.round(lgwTotalRaw);
  const stnTotal = Math.round(stnTotalRaw);
  const displayDiff = Math.round(Math.abs(rawDiff));

  const moneyWinner: "LGW" | "STN" | "TIE" =
    rawDiff > 0.005 ? "STN" : rawDiff < -0.005 ? "LGW" : "TIE";

  const stnFlightAdvantage = LGW_FLIGHT - STN_FLIGHT; // 20
  const tiePoint = stnFixedDisadvantageRaw;            // 15.65
  const tiePointDisplay = Math.round(tiePoint);        // 16

  const verdictState: VerdictState = "STN_NARROW";

  return {
    lgwFlightRaw: LGW_FLIGHT, stnFlightRaw: STN_FLIGHT,
    lgwBagRaw: LGW_BAG, stnBagRaw: STN_BAG,
    lgwSeatRaw: LGW_SEAT, stnSeatRaw: STN_SEAT,
    lgwTransferRaw, stnTransferRaw, gbpToEur: GBP,
    lgwTotalRaw, stnTotalRaw, rawDiff,
    lgwFlight: LGW_FLIGHT, stnFlight: STN_FLIGHT,
    lgwBag: LGW_BAG, stnBag: STN_BAG,
    lgwTransfer: Math.round(lgwTransferRaw), stnTransfer: Math.round(stnTransferRaw),
    lgwTotal, stnTotal, displayDiff,
    moneyWinner, verdictState,
    lgwTransferMins: 40, stnTransferMins: 60, extraTimeMins: 20,
    lgwTransferCount: 1, stnTransferCount: 2, extraTransfers: 1,
    stnFlightAdvantage, stnFixedDisadvantageRaw, stnFixedDisadvantage: Math.round(stnFixedDisadvantageRaw),
    tiePoint, tiePointDisplay,
  };
}

export const CANONICAL = compute();

/* ── Compute result at any STN flight saving ───────────── */

export function computeAtSaving(stnSaving: number): {
  lgwTotal: number; stnTotal: number; winner: "LGW" | "STN" | "TIE"; diff: number;
} {
  const stnFlight = LGW_FLIGHT - stnSaving;
  const lgwTotal = CANONICAL.lgwTotalRaw;
  const stnTotal = stnFlight + CANONICAL.stnBagRaw + CANONICAL.stnSeatRaw + CANONICAL.stnTransferRaw;
  const diff = lgwTotal - stnTotal;
  const winner: "LGW" | "STN" | "TIE" = diff > 0.005 ? "STN" : diff < -0.005 ? "LGW" : "TIE";
  return { lgwTotal, stnTotal, winner, diff };
}

/* ── Verdict semantics ─────────────────────────────────── */

export function getVerdict(state: VerdictState): {
  headline: string; subtext: string; handoff: boolean; handoffText: string;
} {
  const t = CANONICAL;
  switch (state) {
    case "STN_NARROW":
      return {
        headline: `Stansted is €${t.displayDiff} cheaper — but the margin is thin.`,
        subtext: `Stansted saves €${t.stnFlightAdvantage} on the flight, but €${t.stnFixedDisadvantage} more in fixed costs. The result: only €${t.displayDiff} net saving — and 20 extra minutes on the train.`,
        handoff: true,
        handoffText: `Stansted is ahead by €${t.displayDiff}. Whether that is worth the extra journey is personal.`,
      };
    case "MONEY_TIE":
      return {
        headline: "The money is a tie — the journey decides.",
        subtext: "At this saving, both airports cost essentially the same. Gatwick's direct train makes it the simpler choice.",
        handoff: true,
        handoffText: "Money doesn't separate them. Your tolerance for extra journey time decides.",
      };
    case "STN_CLEAR":
      return {
        headline: "Stansted wins clearly on money.",
        subtext: "The saving comfortably exceeds the extra fixed costs. Stansted is the better money choice.",
        handoff: false,
        handoffText: "",
      };
    case "LGW_WINS":
      return {
        headline: "Gatwick wins.",
        subtext: "The Stansted flight does not save enough to offset its higher fixed costs. Gatwick is cheaper door-to-door.",
        handoff: false,
        handoffText: "",
      };
  }
}

/* ── Display helper ────────────────────────────────────── */

/** Produce money-result text. Never emits "wins by €0". */
function moneyResultText(winner: "LGW" | "STN" | "TIE", rawDiff: number): string {
  const displayAmt = Math.round(Math.abs(rawDiff));
  if (winner === "TIE") return "Exact tie";
  const who = winner === "STN" ? "Stansted" : "Gatwick";
  if (displayAmt === 0) return `${who} just wins`;
  return `${who} wins by €${displayAmt}`;
}

/* ── Saving scenarios ──────────────────────────────────── */

export function getScenarios(): SavingScenario[] {
  const t = CANONICAL;

  const s10 = computeAtSaving(10);
  const s16 = computeAtSaving(16);
  const s20 = computeAtSaving(20);

  return [
    {
      stnSaving: 10,
      label: "Stansted saves €10",
      moneyResult: moneyResultText(s10.winner, s10.diff),
      boundaryRelation: "Below the break-even",
      handoffActive: false,
      handoffText: `At €10 saving, Stansted's cheaper flight does not overcome its €${t.stnFixedDisadvantage} in higher fixed costs. Gatwick is cheaper door-to-door.`,
    },
    {
      stnSaving: 16,
      label: "Stansted saves €16",
      moneyResult: moneyResultText(s16.winner, s16.diff),
      boundaryRelation: "Just above the break-even",
      handoffActive: true,
      handoffText: `At €16, Stansted crosses the break-even — but by less than €1. The margin is razor-thin.`,
    },
    {
      stnSaving: 20,
      label: "Stansted saves €20",
      moneyResult: moneyResultText(s20.winner, s20.diff),
      boundaryRelation: "Clearly above the break-even",
      handoffActive: false,
      handoffText: `At €20, Stansted's flight saving exceeds its higher fixed costs by a clear margin.`,
    },
  ];
}

/* ── Access friction ───────────────────────────────────── */

export function getAccessFriction() {
  const t = CANONICAL;
  return {
    primary: [
      { label: "Extra ground time", lgw: `${t.lgwTransferMins} min`, stn: `${t.stnTransferMins} min`, extra: `${t.extraTimeMins} min` },
      { label: "Train changes", lgw: "Direct (0)", stn: "1 change at Victoria", extra: "+1" },
      { label: "Fixed costs (bag+transfer)", lgw: `€${Math.round(t.lgwBagRaw + t.lgwTransferRaw)}`, stn: `€${Math.round(t.stnBagRaw + t.stnTransferRaw)}`, extra: `€${t.stnFixedDisadvantage} more` },
    ],
  };
}
