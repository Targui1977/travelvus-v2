import type { Metadata } from "next";
import { MOCK_RESULT } from "@/lib/mock-data";
import { buildCalculationResult } from "@/lib/calculation-contract";
import { STEP_IDS } from "@/lib/experience-state";
import CascadePreviewClient from "./CascadePreviewClient";

/* ── Metadata ──────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Calculation Cascade — Product Preview",
  robots: "noindex, nofollow",
};

/* ── Canonical step labels ─────────────────────────────────── */

const STEP_LABELS: Record<string, string> = {
  reading_flight_details: "Reading your flight details",
  adding_baggage_and_extras: "Adding baggage and extras",
  calculating_airport_transfers: "Calculating airport transfers",
  measuring_journey_time: "Measuring total journey time",
  calculating_real_cost: "Calculating real trip cost",
  comparing_journeys: "Comparing both journeys",
  preparing_verdict: "Preparing your Travelvus Verdict",
};

const orderedLabels = STEP_IDS.map((id) => STEP_LABELS[id] ?? id);

/* ── Page ──────────────────────────────────────────────────── */

export default function CalculationCascadePreviewPage() {
  // Build the canonical calculation result from the real mock data
  const result = buildCalculationResult({
    optionA: MOCK_RESULT.optionA,
    optionB: MOCK_RESULT.optionB,
    verdict: MOCK_RESULT.verdict,
    savingsEuro: MOCK_RESULT.savingsEuro,
    savingsTimeMinutes: MOCK_RESULT.savingsTimeMinutes,
    savingsTimeLabel: MOCK_RESULT.savingsTimeLabel,
    isSupported: true,
    calculatedAt: Date.now(),
  });

  return (
    <CascadePreviewClient
      result={result}
      stepLabels={orderedLabels}
    />
  );
}
