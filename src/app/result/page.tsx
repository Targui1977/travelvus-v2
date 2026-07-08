import ResultClient from "./ResultClient";
import { decodeCompareParams } from "@/lib/navigation";
import { normalizeInput, isSupportedComparison, buildVerdict } from "@/lib/normalize";
import { MOCK_RESULT } from "@/lib/mock-data";
import { calcRealCost, monetaryWinner } from "@/lib/decision-engine";
import type { OptionResult } from "@/lib/types";

/**
 * Server component — reads searchParams at request time,
 * normalizes data, and passes to ResultClient as props.
 * SSR produces visible content (no Suspense fallback for SEO).
 */
export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const d = MOCK_RESULT;

  // Build initial data server-side
  const raw = decodeCompareParams(new URLSearchParams(
    Object.entries(sp).map(([k, v]) => [k, String(v ?? "")])
  ));
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
    initialVerdict = buildVerdict(baseA.realCost, baseB.realCost, baseA.doorToDoorLabel, baseB.doorToDoorLabel, mw === "A", mw === "B");
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
    initialVerdict = buildVerdict(partialA.realCost, partialB.realCost, "—", "—", mw === "A", mw === "B");
    initialSupported = false;
  } else {
    initialOptionA = { ...d.optionA };
    initialOptionB = { ...d.optionB };
    initialVerdict = d.verdict;
    initialSupported = true;
  }

  return (
    <ResultClient
      initialOptionA={initialOptionA}
      initialOptionB={initialOptionB}
      initialVerdict={initialVerdict}
      initialSupported={initialSupported}
      initialDataRef={d}
    />
  );
}
