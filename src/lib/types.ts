/* ── Travelvus V2 — Shared types for the decision/result layer ── */

export type OptionId = "A" | "B";

export type ConfidenceLevel = "user" | "estimate" | "strong";

export interface CostLine {
  label: string;
  amount: number;
  confidence: ConfidenceLevel;
  /** "€0" or "included" rendered in --ok green */
  isIncluded?: boolean;
}

export interface OptionResult {
  id: OptionId;
  name: string; // "Stansted"
  code: string; // "STN"
  visibleTicketPrice: number; // the struck-through visible fare
  costLines: CostLine[];
  realCost: number;
  doorToDoorMinutes: number;
  doorToDoorLabel: string; // "8h 05m"
}

export interface VerdictData {
  winner: OptionId;
  winnerName: string;
  winnerPlace: string; // "Heathrow" — the peach italic word
  headlineHtml: string; // full serif headline with <span> markup
  subtextHtml: string; // sans sub with bold amounts
  confidenceLabel: string; // "Confidence · Strong"
  provenance: string; // "Official fares + transit data · verified Jul 2026"
  priority: string; // "Priority: Balanced"
}

export interface ThresholdData {
  variable: string; // "Stansted's fare"
  lineValue: number; // 24
  currentValue: number; // 58
  distanceToLine: number; // 34
  unit: string; // "€"
  leadLabel: string; // "The line — where B stops winning"
  statementHtml: string; // serif statement with copper amount
  /** Percentage positions on the axis (0-100) */
  linePct: number; // "The line" tick position
  nowPct: number; // "Now" tick position
  gapLabel: string; // "€34 to the line"
}

export interface SecondaryFlip {
  conditionHtml: string; // serif clause with <b> for emphasis
  outcomeHtml: string; // mono outcome with copper arrow
}

export interface DecisionDebtData {
  title: string;
  textHtml: string;
  factors: string[];
}

export interface FullResultData {
  optionA: OptionResult;
  optionB: OptionResult;
  verdict: VerdictData;
  savingsEuro: number;
  savingsTimeMinutes: number;
  savingsTimeLabel: string; // "2h 55m"
  doorToDoorGapLabel: string; // "2h 55m"
  doorToDoorGapCaption: string; // editorial line
  threshold: ThresholdData;
  secondaryFlips: SecondaryFlip[];
  decisionDebt: DecisionDebtData;
  realCostEditorial: string; // the explanatory sentence below Real Cost
}
