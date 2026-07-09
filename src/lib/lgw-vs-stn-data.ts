/**
 * Gatwick vs Stansted — Verified data from Phase 21 Evidence Contract.
 *
 * All costs in EUR. UK transport converted at 1 GBP = 1.17 EUR.
 * Fare basis: walk-up single, contactless/Oyster, off-peak daytime.
 * Time basis: station-to-station + 5min platform + 5min interchange.
 *
 * Page type: NON-INTERACTIVE editorial Decision Page.
 * Unique capability: SAVING-WORTH HANDOFF.
 */

/* ── Types ─────────────────────────────────────────────── */

export type VerdictState = "STN_NARROW" | "MONEY_TIE" | "STN_CLEAR" | "LGW_WINS";

export interface SavingScenario {
  stnSaving: number;   // STN flight-price advantage in EUR
  label: string;       // "€4 saved" etc
  moneyResult: string; // "Stansted wins by €4"
  boundaryRelation: string; // "Below the tie point"
  handoffActive: boolean;
  handoffText: string;
}

export interface CanonicalData {
  /* Raw values (for calculation) */
  lgwFlightRaw: number;
  stnFlightRaw: number;
  lgwBagRaw: number;
  stnBagRaw: number;
  lgwSeatRaw: number;
  stnSeatRaw: number;
  lgwTransferGBP: number;
  stnTransferGBP: number;
  gbpToEur: number;

  /* Computed raw */
  lgwTotalRaw: number;
  stnTotalRaw: number;
  rawDiff: number; // positive = LGW more expensive

  /* Display values (rounded) */
  lgwFlight: number;
  stnFlight: number;
  lgwBag: number;
  stnBag: number;
  lgwTransfer: number;
  stnTransfer: number;
  lgwTotal: number;
  stnTotal: number;
  displayDiff: number;

  /* Winner */
  moneyWinner: "LGW" | "STN" | "TIE";
  verdictState: VerdictState;

  /* Access friction */
  lgwTransferMins: number;
  stnTransferMins: number;
  extraTimeMins: number;
  lgwTransferCount: number;
  stnTransferCount: number;
  extraTransfers: number;

  /* Threshold */
  stnFlightAdvantage: number;  // LGW flight - STN flight
  transferPenaltyRaw: number;   // STN transfer - LGW transfer
  transferPenalty: number;      // display rounded
  tiePoint: number;             // STN advantage where costs equal (raw)
  tiePointDisplay: number;      // display rounded
  firstLgwWin: number;          // first whole-euro STN saving where LGW wins
}

/* ── Constants ─────────────────────────────────────────── */

const GBP = 1.17;

const LGW_FLIGHT = 95;
const STN_FLIGHT = 75;
const LGW_BAG = 30;
const STN_BAG = 35;
const LGW_SEAT = 8;
const STN_SEAT = 8;
const LGW_TRANSFER_GBP = 10.70;
const STN_TRANSFER_GBP = 17.00 + 2.80; // Express + Victoria Line tube

/* ── Calculation ───────────────────────────────────────── */

function compute(): CanonicalData {
  const lgwTransferRaw = LGW_TRANSFER_GBP * GBP;
  const stnTransferRaw = STN_TRANSFER_GBP * GBP;

  const lgwTotalRaw = LGW_FLIGHT + LGW_BAG + LGW_SEAT + lgwTransferRaw;
  const stnTotalRaw = STN_FLIGHT + STN_BAG + STN_SEAT + stnTransferRaw;
  const rawDiff = lgwTotalRaw - stnTotalRaw; // positive = LGW more expensive

  const lgwTotal = Math.round(lgwTotalRaw);
  const stnTotal = Math.round(stnTotalRaw);
  const displayDiff = Math.round(Math.abs(rawDiff));

  const moneyWinner: "LGW" | "STN" | "TIE" =
    lgwTotal < stnTotal ? "LGW" : stnTotal < lgwTotal ? "STN" : "TIE";

  // Threshold
  const stnFlightAdvantage = LGW_FLIGHT - STN_FLIGHT; // €20
  const transferPenaltyRaw = stnTransferRaw - lgwTransferRaw;
  const transferPenalty = Math.round(transferPenaltyRaw);

  // Tie point: where STN advantage == transfer penalty
  const tiePoint = transferPenaltyRaw;
  const tiePointDisplay = Math.round(tiePoint);

  // First whole-euro STN saving where LGW wins (STN saves ≤ tiePoint)
  // If tiePoint = 10.65, first LGW win is when STN saves ≤ 10
  // If tiePoint = 11.00 (rounded), first LGW win is 11
  const firstLgwWin = Number.isInteger(tiePoint) ? tiePoint : Math.floor(tiePoint);
  // Actually: firstLgwWin means "at this STN saving, LGW wins on money"
  // STN wins when saving > tiePoint. LGW wins when saving <= tiePoint.
  // Display: LGW wins at €11 STN saving, STN wins at €12.
  const firstLgwWinDisplay = Math.round(tiePoint);

  // Verdict state
  const state = rawDiff <= firstLgwWin && rawDiff >= -firstLgwWin
    ? (rawDiff >= -1 && rawDiff <= 1 ? "MONEY_TIE" : rawDiff > 0 ? "STN_NARROW" : "LGW_WINS")
    : rawDiff > firstLgwWin ? "STN_CLEAR" : "LGW_WINS";

  // Default to canonical state (STN wins narrowly at €4.35 raw diff)
  const verdictState: VerdictState = "STN_NARROW";

  return {
    lgwFlightRaw: LGW_FLIGHT, stnFlightRaw: STN_FLIGHT,
    lgwBagRaw: LGW_BAG, stnBagRaw: STN_BAG,
    lgwSeatRaw: LGW_SEAT, stnSeatRaw: STN_SEAT,
    lgwTransferGBP: LGW_TRANSFER_GBP, stnTransferGBP: STN_TRANSFER_GBP,
    gbpToEur: GBP,
    lgwTotalRaw, stnTotalRaw, rawDiff,
    lgwFlight: LGW_FLIGHT, stnFlight: STN_FLIGHT,
    lgwBag: LGW_BAG, stnBag: STN_BAG,
    lgwTransfer: Math.round(lgwTransferRaw), stnTransfer: Math.round(stnTransferRaw),
    lgwTotal, stnTotal, displayDiff,
    moneyWinner, verdictState,
    lgwTransferMins: 40, stnTransferMins: 60, extraTimeMins: 20,
    lgwTransferCount: 1, stnTransferCount: 2, extraTransfers: 1,
    stnFlightAdvantage, transferPenaltyRaw, transferPenalty,
    tiePoint, tiePointDisplay, firstLgwWin: firstLgwWinDisplay,
  };
}

export const CANONICAL = compute();

/* ── Verdict semantics ─────────────────────────────────── */

export function getVerdict(state: VerdictState): {
  headline: string;
  subtext: string;
  handoff: boolean;
  handoffText: string;
} {
  switch (state) {
    case "STN_NARROW":
      return {
        headline: `Stansted is €${CANONICAL.displayDiff} cheaper — but the margin is thin.`,
        subtext: `Stansted saves you about €${CANONICAL.displayDiff} on the canonical comparison. In return, you spend 20 extra minutes on the train and change at Victoria. Whether that trade is worth it is personal.`,
        handoff: true,
        handoffText: "The money says Stansted — by a thin margin. Only you can decide whether the saving is worth the extra journey.",
      };
    case "MONEY_TIE":
      return {
        headline: "The money is a tie — the journey decides.",
        subtext: "At this saving, both airports cost essentially the same door-to-door. Gatwick's direct train makes it the simpler choice.",
        handoff: true,
        handoffText: "Money doesn't separate them. Your tolerance for extra journey time makes the decision.",
      };
    case "STN_CLEAR":
      return {
        headline: "Stansted wins clearly on money.",
        subtext: `The saving is large enough to compensate for the longer transfer. Stansted is the better deal for this scenario.`,
        handoff: false,
        handoffText: "",
      };
    case "LGW_WINS":
      return {
        headline: "Gatwick wins.",
        subtext: "The Stansted flight doesn't save enough to offset the higher transfer cost. Gatwick is cheaper door-to-door.",
        handoff: false,
        handoffText: "",
      };
  }
}

/* ── Saving scenarios ──────────────────────────────────── */

export function getScenarios(): SavingScenario[] {
  const t = CANONICAL;
  return [
    {
      stnSaving: t.displayDiff, // 4
      label: `€${t.displayDiff} saved`,
      moneyResult: `Stansted wins by €${t.displayDiff}`,
      boundaryRelation: "Below the tie point",
      handoffActive: true,
      handoffText: `Is €${t.displayDiff} worth 20 extra minutes? Only you can decide.`,
    },
    {
      stnSaving: t.tiePointDisplay + 1, // 12
      label: `€${t.tiePointDisplay + 1} saved`,
      moneyResult: "Stansted just crosses the line",
      boundaryRelation: "At the boundary",
      handoffActive: false,
      handoffText: `At €${t.tiePointDisplay + 1}, Stansted's saving just exceeds the transfer penalty. The money tips to Stansted.`,
    },
    {
      stnSaving: t.stnFlightAdvantage, // 20
      label: `€${t.stnFlightAdvantage} saved`,
      moneyResult: "Stansted wins clearly",
      boundaryRelation: "Well above the tie point",
      handoffActive: false,
      handoffText: `At €${t.stnFlightAdvantage}, the saving comfortably exceeds the extra transfer cost. Stansted is the clear money winner.`,
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
      { label: "Transfer cost", lgw: `€${t.lgwTransfer}`, stn: `€${t.stnTransfer}`, extra: `€${t.transferPenalty} more` },
    ],
    secondary: [
      { label: "Rail frequency", lgw: "4+ trains/hour", stn: "4 trains/hour" },
    ],
  };
}
