/**
 * Travelvus V2 — Minimal decision engine.
 *
 * Pure functions for Phase 4: recalculate Real Cost,
 * detect winner flip, and produce the exact cause.
 * No external dependencies. No airport database.
 */

import type { CostLine, FullResultData, OptionResult, OptionId } from "./types";

/* ── Pure recalculation ───────────────────────────────── */

/** Recalculate real cost from cost lines */
export function calcRealCost(lines: CostLine[]): number {
  return lines.reduce((sum, l) => sum + l.amount, 0);
}

/** Determine monetary winner */
export function monetaryWinner(
  costA: number,
  costB: number
): OptionId | "tie" {
  if (costA < costB) return "A";
  if (costB < costA) return "B";
  return "tie";
}

/** Format the difference between two costs */
export function costDiff(
  costA: number,
  costB: number
): { winner: OptionId | "tie"; amount: number } {
  if (costA < costB) return { winner: "A", amount: costB - costA };
  if (costB < costA) return { winner: "B", amount: costA - costB };
  return { winner: "tie", amount: 0 };
}

/* ── Change detection ─────────────────────────────────── */

export interface VerdictChange {
  /** Whether the monetary winner flipped */
  flipped: boolean;
  /** Human-readable cause of the change */
  cause: string;
  /** Which variable changed */
  changedVariable: string;
  /** The delta applied (e.g. -45 means removed €45) */
  delta: number;
  /** Old winner */
  previousWinner: OptionId;
  /** New winner */
  newWinner: OptionId | "tie";
  /** Old cost for the changed option */
  oldCost: number;
  /** New cost for the changed option */
  newCost: number;
}

/**
 * Detect if and why the verdict changed between two states.
 * Compares old option data with new option data.
 */
export function detectChange(
  oldA: OptionResult,
  oldB: OptionResult,
  newA: OptionResult,
  newB: OptionResult
): VerdictChange | null {
  const oldWinner = monetaryWinner(oldA.realCost, oldB.realCost);
  const newWinner = monetaryWinner(newA.realCost, newB.realCost);

  if (oldWinner === newWinner) return null;

  // Find which option changed and how
  const aChanged = oldA.realCost !== newA.realCost;
  const option: OptionId = aChanged ? "A" : "B";
  const oldOpt = aChanged ? oldA : oldB;
  const newOpt = aChanged ? newA : newB;
  const delta = newOpt.realCost - oldOpt.realCost;

  // Find which specific cost line changed
  let changedVar = "a variable";
  for (let i = 0; i < oldOpt.costLines.length; i++) {
    if (oldOpt.costLines[i].amount !== newOpt.costLines[i].amount) {
      changedVar = oldOpt.costLines[i].label;
      break;
    }
  }

  const absDelta = Math.abs(delta);
  const direction = delta < 0 ? "removed" : "added";

  return {
    flipped: true,
    cause: `You ${direction} Option ${option}&rsquo;s ${changedVar.toLowerCase()} (€${absDelta}).`,
    changedVariable: changedVar,
    delta,
    previousWinner: oldWinner as OptionId,
    newWinner,
    oldCost: oldOpt.realCost,
    newCost: newOpt.realCost,
  };
}

/* ── Robustness ───────────────────────────────────────── */

/**
 * Calculate the break-even point for a single estimated cost item.
 * Returns the value at which the given option's real cost equals the other's.
 *
 * Example: A (without bag) = €159, B = €171.
 * A's estimated taxi = €74. Non-taxi A cost = €85.
 * A wins by €12. If taxi exceeds 74 + 12 = €86, B wins again.
 */
export function estimateThreshold(
  winner: OptionResult,
  loser: OptionResult,
  estimateLineIndex: number
): { label: string; threshold: number } | null {
  const line = winner.costLines[estimateLineIndex];
  if (!line) return null;

  const nonEstimateCost =
    winner.realCost - line.amount;
  const threshold = loser.realCost - nonEstimateCost;

  return {
    label: line.label,
    threshold,
  };
}

/* ── Apply a line edit ────────────────────────────────── */

/** Return a new cost-lines array with one line modified */
export function editCostLine(
  lines: CostLine[],
  index: number,
  update: Partial<CostLine>
): CostLine[] {
  return lines.map((line, i) =>
    i === index ? { ...line, ...update } : line
  );
}

/** Rebuild an OptionResult after modifying its cost lines */
export function rebuildOption(
  option: OptionResult,
  newLines: CostLine[]
): OptionResult {
  return {
    ...option,
    costLines: newLines,
    realCost: calcRealCost(newLines),
  };
}
