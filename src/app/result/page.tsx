import type { Metadata } from "next";
import ResultClient from "./ResultClient";
import { decodeCompareParams } from "@/lib/navigation";
import { normalizeInput, isSupportedComparison, buildVerdict } from "@/lib/normalize";
import { MOCK_RESULT } from "@/lib/mock-data";
import { calcRealCost, monetaryWinner } from "@/lib/decision-engine";
import { buildCalculationResult } from "@/lib/calculation-contract";
import { STEP_IDS } from "@/lib/experience-state";
import type { OptionResult } from "@/lib/types";

export const metadata: Metadata = {
  title: "Travelvus — Comparison Result",
  robots: "noindex, follow",
};

/* ── Step labels ───────────────────────────────────────────── */

const STEP_LABELS: Record<string, string> = {
  reading_flight_details: "Reading your flight details",
  adding_baggage_and_extras: "Adding baggage and extras",
  calculating_airport_transfers: "Calculating airport transfers",
  measuring_journey_time: "Measuring total journey time",
  calculating_real_cost: "Calculating real trip cost",
  comparing_journeys: "Comparing both journeys",
  preparing_verdict: "Preparing your Travelvus Verdict",
};

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const d = MOCK_RESULT;

  const raw = decodeCompareParams(
    new URLSearchParams(
      Object.entries(sp).map(([k, v]) => [k, String(v ?? "")])
    )
  );
  const norm = raw ? normalizeInput(raw) : null;
  const supported = norm ? isSupportedComparison(norm) : false;

  let initialOptionA: OptionResult;
  let initialOptionB: OptionResult;
  let initialVerdict: typeof d.verdict;
  let initialSupported: boolean;

  if (norm && supported) {
    const baseA = { ...d.optionA };
    const baseB = { ...d.optionB };
    baseA.costLines = baseA.costLines.map((l, i) =>
      i === 0 ? { ...l, amount: norm.ticketA } : l
    );
    baseA.visibleTicketPrice = norm.ticketA;
    baseA.realCost = calcRealCost(baseA.costLines);
    baseB.costLines = baseB.costLines.map((l, i) =>
      i === 0 ? { ...l, amount: norm.ticketB } : l
    );
    baseB.visibleTicketPrice = norm.ticketB;
    baseB.realCost = calcRealCost(baseB.costLines);
    const mw = monetaryWinner(baseA.realCost, baseB.realCost);
    initialOptionA = baseA;
    initialOptionB = baseB;
    initialVerdict = buildVerdict(
      baseA.realCost, baseB.realCost, baseA.doorToDoorLabel, baseB.doorToDoorLabel,
      mw === "A", mw === "B"
    );
    initialSupported = true;
  } else if (norm && !supported) {
    const partialA: OptionResult = {
      id: "A", name: "A", code: "", visibleTicketPrice: norm.ticketA,
      costLines: [{ label: "Ticket", amount: norm.ticketA, confidence: "user" }],
      realCost: norm.ticketA, doorToDoorMinutes: 0, doorToDoorLabel: "—",
    };
    const partialB: OptionResult = {
      id: "B", name: "B", code: "", visibleTicketPrice: norm.ticketB,
      costLines: [{ label: "Ticket", amount: norm.ticketB, confidence: "user" }],
      realCost: norm.ticketB, doorToDoorMinutes: 0, doorToDoorLabel: "—",
    };
    const mw = monetaryWinner(partialA.realCost, partialB.realCost);
    initialOptionA = partialA;
    initialOptionB = partialB;
    initialVerdict = buildVerdict(
      partialA.realCost, partialB.realCost, "—", "—", mw === "A", mw === "B"
    );
    initialSupported = false;
  } else {
    initialOptionA = { ...d.optionA };
    initialOptionB = { ...d.optionB };
    initialVerdict = d.verdict;
    initialSupported = true;
  }

  const isDemo = !norm;

  // Build the CalculationResult for the cascade experience
  const calculationResult = buildCalculationResult({
    optionA: initialOptionA,
    optionB: initialOptionB,
    verdict: initialVerdict,
    savingsEuro: Math.abs(initialOptionA.realCost - initialOptionB.realCost),
    savingsTimeMinutes: Math.abs(
      initialOptionA.doorToDoorMinutes - initialOptionB.doorToDoorMinutes
    ),
    savingsTimeLabel: formatTimeDiff(
      initialOptionA.doorToDoorMinutes,
      initialOptionB.doorToDoorMinutes
    ),
    isSupported: initialSupported,
    calculatedAt: Date.now(),
  });

  const stepLabels = STEP_IDS.map((id) => STEP_LABELS[id] ?? id);

  return (
    <ResultClient
      initialOptionA={initialOptionA}
      initialOptionB={initialOptionB}
      initialVerdict={initialVerdict}
      initialSupported={initialSupported}
      isDemo={isDemo}
      initialDataRef={d}
      calculationResult={calculationResult}
      stepLabels={stepLabels}
    />
  );
}

/* ── Helpers ───────────────────────────────────────────────── */

function formatTimeDiff(minsA: number, minsB: number): string {
  const diff = Math.abs(minsA - minsB);
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}
