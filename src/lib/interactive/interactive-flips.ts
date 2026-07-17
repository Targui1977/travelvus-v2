/**
 * Travelvus V2 — Interactive Flip Rules
 *
 * Generates flip rules from actual engine state.
 * Each rule answers: "What would change the recommendation?"
 *
 * Every rule must be derived from:
 *   - Existing cost lines
 *   - Existing time values
 *   - Existing assumptions
 *   - The break-even threshold from deriveThreshold()
 *
 * No fake flip rules that the engine cannot support.
 *
 * Pure functions. No React. No side effects.
 *
 * Phase 107.0 — Part F.
 */

import type { DecisionFlip } from "@/lib/decision-intelligence";
import type { InteractiveDecisionContext } from "./interactive-decision-context";
import { deriveThreshold } from "@/lib/derive-content";
import { estimateThreshold } from "@/lib/decision-engine";

/* ── Flip Generation ──────────────────────────────────────── */

/**
 * Generate all supported flip rules for the current comparison.
 *
 * Rules are conditional on the current state:
 *   - Baggage removal only shown when bag is present
 *   - Break-even rule only when threshold is calculable
 *   - Transfer-cost rule only when estimated costs are present
 *   - Time-value rule only when time difference is meaningful
 */
export function generateFlips(
  context: InteractiveDecisionContext
): DecisionFlip[] {
  const flips: DecisionFlip[] = [];

  const { optionA, optionB, winner, bagRemoved, savingsEuro } = context;

  const winnerOpt = winner === "A" ? optionA : optionB;
  const loserOpt = winner === "A" ? optionB : optionA;

  const fmtMoney = (n: number) => `€${n}`;

  /* ── 1. Remove checked baggage ─────────────────────────── */
  if (!bagRemoved) {
    const bagLine = optionA.costLines[1];
    if (bagLine && bagLine.amount > 0) {
      const newCostA = optionA.realCost - bagLine.amount;
      const diff = optionB.realCost - newCostA;

      if (diff > 0) {
        flips.push({
          condition: `You remove the checked bag from ${optionA.name}`,
          result: `${optionA.name} becomes ${fmtMoney(diff)} cheaper — the recommendation may reverse.`,
        });
      } else if (diff < 0) {
        flips.push({
          condition: `You remove the checked bag from ${optionA.name}`,
          result: `${optionA.name} becomes cheaper by ${fmtMoney(bagLine.amount)} but still costs ${fmtMoney(Math.abs(diff))} more overall.`,
        });
      } else {
        flips.push({
          condition: `You remove the checked bag from ${optionA.name}`,
          result: `Both options tie on real cost. The decision shifts to journey time.`,
        });
      }
    }
  } else {
    // Bag already removed — show restore rule
    const bagCost = 45; // canonical
    flips.push({
      condition: `You add a checked bag back to ${optionA.name} (+€${bagCost})`,
      result: `The cost gap widens — ${optionB.name}'s advantage increases.`,
    });
  }

  /* ── 2. Ticket price break-even ────────────────────────── */
  try {
    const threshold = deriveThreshold(optionA, optionB);
    const { data } = threshold;

    if (data.distanceToLine > 0) {
      if (threshold.aAlreadyCrossed) {
        // A is winning — what makes it lose?
        const breakEvenTicket = data.lineValue + 1;
        flips.push({
          condition: `${optionA.name}'s ticket price rises above ${fmtMoney(breakEvenTicket)}`,
          result: `${optionB.name} becomes the lower-cost option.`,
        });
      } else {
        // B is winning — what makes A win?
        const breakEvenTicket = data.lineValue;
        flips.push({
          condition: `${optionA.name}'s ticket price falls below ${fmtMoney(breakEvenTicket)}`,
          result: `${optionA.name} becomes the lower-cost option.`,
        });
      }
    }
  } catch {
    // Threshold derivation not applicable — skip
  }

  /* ── 3. Transfer cost changes ──────────────────────────── */
  const transferIdx = optionA.costLines.length - 1;
  if (transferIdx > 1) {
    const taxiEstimate = estimateThreshold(
      winner === "A" ? optionA : optionB,
      winner === "A" ? optionB : optionA,
      transferIdx
    );

    if (taxiEstimate && taxiEstimate.threshold > 0) {
      flips.push({
        condition: `Someone collects you from ${loserOpt.name} (no ${fmtMoney(loserOpt.costLines[transferIdx]?.amount ?? 0)} transfer)`,
        result: `The cost gap narrows — ${loserOpt.name}'s real cost drops by ${fmtMoney(loserOpt.costLines[transferIdx]?.amount ?? 0)}.`,
      });
    }
  }

  /* ── 4. Value of time ──────────────────────────────────── */
  const timeDiff = Math.abs(optionA.doorToDoorMinutes - optionB.doorToDoorMinutes);
  if (timeDiff >= 30 && savingsEuro > 0 && winner !== "tie") {
    const hourlyRate = Math.round((savingsEuro / timeDiff) * 60);
    const fasterOpt = optionA.doorToDoorMinutes < optionB.doorToDoorMinutes ? optionA : optionB;
    const slowerOpt = fasterOpt === optionA ? optionB : optionA;

    flips.push({
      condition: `You value the extra ${timeDiff} minutes on ${slowerOpt.name} at under ${fmtMoney(hourlyRate)}/hour`,
      result: `${fasterOpt.name} is the better choice — the time saving outweighs any cost difference.`,
    });
  }

  /* ── 5. Destination changes ────────────────────────────── */
  flips.push({
    condition: `Your destination changes from ${context.londonDestinationLabel}`,
    result: `Transfer costs and times change. Different London destinations favour different airports. See the destination selector to compare.`,
  });

  return flips;
}
