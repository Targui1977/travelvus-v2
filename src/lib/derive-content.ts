/**
 * Travelvus V2 — Dynamic content derivation.
 *
 * All visible editorial text MUST derive from actual current state,
 * never from stale MOCK_RESULT references.
 *
 * Pure functions. No React. No side effects.
 */

import type { CostLine, OptionResult, OptionId, SecondaryFlip, ThresholdData } from "./types";

/* ── Helpers ────────────────────────────────────────────── */

function nonTicketCost(lines: CostLine[]): number {
  return lines.reduce((sum, l, i) => (i === 0 ? sum : sum + l.amount), 0);
}

function formatMoney(n: number): string {
  return `€${n}`;
}

function countTrue(...vals: boolean[]): number {
  return vals.filter(Boolean).length;
}

/* ── Real Cost explanation ──────────────────────────────── */

export function deriveEditorial(
  optionA: OptionResult,
  optionB: OptionResult
): string {
  const ticketA = optionA.costLines[0]?.amount ?? 0;
  const ticketB = optionB.costLines[0]?.amount ?? 0;
  const costA = optionA.realCost;
  const costB = optionB.realCost;

  if (costA < costB) {
    return `The ${formatMoney(ticketA)} ticket produces a ${formatMoney(costA)} journey — ${formatMoney(costB - costA)} cheaper than Option B.`;
  }
  if (costB < costA) {
    return `The ${formatMoney(ticketA)} ticket doesn't produce the ${formatMoney(ticketA)} journey. Once the bag and the late-night ride into London are counted, it becomes the more expensive trip.`;
  }
  return `Both options come to ${formatMoney(costA)}. The difference is in time and convenience.`;
}

/* ── Decision Threshold (dynamic) ───────────────────────── */

export interface DynamicThreshold {
  data: ThresholdData;
  /** Whether A is currently above the line (already winning on money) */
  aAlreadyCrossed: boolean;
}

/**
 * Derive the Decision Threshold from actual current state.
 *
 * Two key values:
 *   tiePoint  = exact break-even (A total == B total)
 *   firstWin  = first whole-euro fare where A wins
 *
 * "The line" displayed to the user is firstWin — the point
 * where A STARTS winning, not where it ties.
 *
 * Canonical example:
 *   A other costs = €146, B total = €171
 *   tiePoint = 25  (A total = 25 + 146 = 171 = B total → tie)
 *   firstWin = 24  (A total = 24 + 146 = 170 < 171 → A wins by €1)
 *   current = 58, distance to winning = 58 - 24 = 34
 */
export function deriveThreshold(
  optionA: OptionResult,
  optionB: OptionResult
): DynamicThreshold {
  const ticketA = optionA.costLines[0]?.amount ?? 0;
  const otherA = nonTicketCost(optionA.costLines);
  const costB = optionB.realCost;

  // Exact break-even point (tie)
  const tiePoint = costB - otherA;

  // First whole-euro winning fare for A
  // If tiePoint is an integer (e.g. 25), first win is tiePoint - 1 (24)
  // If tiePoint has decimals (e.g. 25.50), first win is Math.floor(tiePoint) (25)
  const firstWin = Number.isInteger(tiePoint) ? tiePoint - 1 : Math.floor(tiePoint);

  // Which side is A on?
  const aWins = optionA.realCost < optionB.realCost;
  const aTies = optionA.realCost === optionB.realCost;
  const aCrossed = aWins; // "crossed" = actually winning (not just at tie)

  // Distance from current ticket to first winning fare
  const distanceToWin = ticketA - firstWin;

  // Position ticks on a normalized axis
  const maxVal = Math.max(firstWin, ticketA, 1) * 1.25;
  const linePct = Math.max(5, (firstWin / maxVal) * 100);
  const nowPct = Math.min(95, (ticketA / maxVal) * 100);

  const absDist = Math.abs(distanceToWin);

  let leadLabel: string;
  let statementHtml: string;
  let gapLabel: string;

  if (aWins) {
    // A already winning
    if (absDist <= 1) {
      leadLabel = "The line — A is just across it";
      statementHtml = `Stansted is barely across the line — a <em class="threshold-amt">€1</em> fare increase would erase the lead. At €${tiePoint} the two trips tie.`;
      gapLabel = `${formatMoney(absDist)} below the line`;
    } else {
      leadLabel = "The line — A crossed it";
      statementHtml = `Stansted is already <em class="threshold-amt">${formatMoney(absDist)}</em> below the winning line. At €${tiePoint} the two trips tie — below €${firstWin}, A wins.`;
      gapLabel = `${formatMoney(absDist)} below the line`;
    }
  } else if (aTies) {
    // Exact tie
    leadLabel = "The line — they tie here";
    statementHtml = `At €${ticketA}, both trips cost exactly the same. One euro less for Stansted's fare would tip the balance.`;
    gapLabel = "at the line — tie";
  } else {
    // B wins — show how much A must fall to START winning
    leadLabel = "The line — where B stops winning";
    statementHtml = `Option B wins until Stansted's fare falls another <em class="threshold-amt">${formatMoney(absDist)}</em>. Below that, the cheaper ticket finally becomes the cheaper trip.`;
    gapLabel = `${formatMoney(absDist)} to the line`;
  }

  return {
    aAlreadyCrossed: aCrossed,
    data: {
      variable: "Stansted's fare",
      lineValue: firstWin,      // displayed "The line" = first winning fare
      currentValue: ticketA,     // displayed "Now"
      distanceToLine: absDist,
      unit: "€",
      leadLabel,
      statementHtml,
      linePct,
      nowPct,
      gapLabel,
    },
  };
}

/* ── Secondary Flips (dynamic) ──────────────────────────── */

export function deriveFlips(
  optionA: OptionResult,
  optionB: OptionResult,
  bagRemoved: boolean,
  canonicalA: OptionResult,
  canonicalB: OptionResult
): SecondaryFlip[] {
  const flips: SecondaryFlip[] = [];

  // Only show "remove bag" if bag is NOT already removed
  if (!bagRemoved) {
    const bagLine = optionA.costLines[1];
    if (bagLine && bagLine.amount > 0) {
      const newCostA = optionA.realCost - bagLine.amount;
      const diff = optionB.realCost - newCostA;
      if (diff > 0) {
        flips.push({
          conditionHtml: `<b>Remove the checked bag</b> from Option A`,
          outcomeHtml: `<span class="flip-arrow">→</span> A wins by ${formatMoney(diff)}`,
        });
      } else {
        flips.push({
          conditionHtml: `<b>Remove the checked bag</b> from Option A`,
          outcomeHtml: `<span class="flip-arrow">→</span> A still behind by ${formatMoney(Math.abs(diff))}`,
        });
      }
    }
  }

  // Someone collects you
  const taxiLine = optionA.costLines[4]; // STN → Central
  if (taxiLine && taxiLine.amount > 0) {
    const newCostA = optionA.realCost - taxiLine.amount;
    const diff = optionB.realCost - newCostA;
    if (diff > 0) {
      flips.push({
        conditionHtml: `If <b>someone collects you</b> from Stansted (no ${formatMoney(taxiLine.amount)} taxi)`,
        outcomeHtml: `<span class="flip-arrow">→</span> A wins by ${formatMoney(diff)}`,
      });
    }
  }

  // Value of time
  const timeLabel = optionA.doorToDoorLabel;
  const timeDiff = optionA.doorToDoorMinutes - optionB.doorToDoorMinutes;
  if (timeDiff > 0 && optionA.realCost < optionB.realCost) {
    const costDiff = optionB.realCost - optionA.realCost;
    const hourlyRate = Math.round((costDiff / timeDiff) * 60);
    flips.push({
      conditionHtml: `If you value the extra <b>${timeLabel.split("h")[0]}h ${timeLabel.split(" ")[1]}</b> at under ${formatMoney(hourlyRate)}/hour`,
      outcomeHtml: `<span class="flip-arrow">→</span> A's saving is worth it`,
    });
  }

  return flips;
}

/* ── Mobile context strip data ──────────────────────────── */

export function deriveContextStrip(
  optionA: OptionResult,
  optionB: OptionResult
): { text: string } {
  const aWins = optionA.realCost < optionB.realCost;
  const diff = Math.abs(optionA.realCost - optionB.realCost);
  const winner = aWins ? "A" : "B";
  return {
    text: `${winner} wins · ${formatMoney(diff)} · ${optionA.doorToDoorLabel} vs ${optionB.doorToDoorLabel}`,
  };
}

/* ── Verdict consequence for changed state ──────────────── */

export function deriveChangedConsequence(
  newWinner: OptionId | "tie",
  costA: number,
  costB: number
): string {
  if (newWinner === "A") {
    const diff = costB - costA;
    return `Option A — Stansted — now wins on money by ${formatMoney(diff)}.`;
  }
  if (newWinner === "B") {
    const diff = costA - costB;
    return `Option B — Heathrow — is now the better deal by ${formatMoney(diff)}.`;
  }
  return `They're now tied on cost.`;
}
