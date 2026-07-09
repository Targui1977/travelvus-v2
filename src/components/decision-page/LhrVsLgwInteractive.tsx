"use client";

import { useState, useMemo } from "react";
import OptionToken from "@/components/ui/OptionToken";
import {
  DESTINATIONS,
  calculateResult,
  getVerdictText,
  MARGIN_LABELS,
  type DestinationData,
} from "@/lib/lhr-vs-lgw-data";

/**
 * Client island: destination selector + live verdict + Real Cost.
 * One state variable: selectedDestination.
 */
export default function LhrVsLgwInteractive() {
  const [destId, setDestId] = useState<string>("victoria");

  const dest = useMemo(
    () => DESTINATIONS.find((d) => d.id === destId) ?? DESTINATIONS[0],
    [destId]
  );

  const result = useMemo(() => calculateResult(dest), [dest]);
  const verdict = useMemo(() => getVerdictText(result), [result]);

  const lhrWinner = result.winner === "LHR";
  const lgwWinner = result.winner === "LGW";

  return (
    <div>
      {/* ═══ Destination Tabs ═══ */}
      <div className="dest-tabs-wrapper">
        <span className="dest-tabs-label">Where in London are you going?</span>
        <div className="dest-tabs">
          {DESTINATIONS.map((d) => (
            <button
              key={d.id}
              className={`dest-tab ${d.id === destId ? "dest-tab-active" : ""}`}
              onClick={() => setDestId(d.id)}
              aria-pressed={d.id === destId}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ Live Verdict ═══ */}
      <div className={verdict.isHandoff ? "dest-verdict-handoff" : "dest-verdict"}>
        <div className="dest-verdict-top">
          <span className="dest-verdict-label">
            {MARGIN_LABELS[result.marginClass]}
          </span>
          <span className="dest-verdict-line">{verdict.winnerLine}</span>
        </div>
        <p className="dest-verdict-interp">{verdict.interpretation}</p>
        {verdict.isHandoff && (
          <div className="dest-handoff">
            <span className="dest-handoff-kicker">Decision Handoff</span>
            <p className="dest-handoff-text">
              {result.winner === "LHR" ? "Heathrow" : "Gatwick"} wins on time
              by {Math.abs(dest.lhrTransferMins - dest.lgwTransferMins)} minutes.
              When money can&rsquo;t decide, the faster journey takes over.
            </p>
          </div>
        )}
        <p className="dest-verdict-evidence">
          Based on 2 travellers, Barcelona flights, contactless fares &middot; Jul 2026
        </p>
      </div>

      {/* ═══ Real Cost ═══ */}
      <div className="dest-cost">
        {/* A: Heathrow */}
        <div className="dest-cost-col">
          <div className="dest-cost-hd">
            <OptionToken option="A" state={lhrWinner ? "winner" : "neutral"} size="compact" />
            <span className="dest-cost-name">Heathrow</span>
            <span className="dest-cost-code">LHR</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">Flight (&times;2)</span>
            <span className="dest-cost-row-amount">&euro;190</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">Baggage (&times;2)</span>
            <span className="dest-cost-row-amount">&euro;70</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">Seats (&times;2)</span>
            <span className="dest-cost-row-amount">&euro;20</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">{dest.lhrTransferMode}</span>
            <span className="dest-cost-row-amount">&euro;{dest.lhrTransferCostEUR}</span>
          </div>
          <div className="dest-cost-total">
            <span className="dest-cost-total-label">Real cost</span>
            <span
              className="dest-cost-total-num"
              style={{ color: lhrWinner ? "var(--ink)" : "var(--grey)" }}
            >
              &euro;{result.lhrTotal}
            </span>
          </div>
        </div>

        {/* B: Gatwick */}
        <div className="dest-cost-col">
          <div className="dest-cost-hd">
            <OptionToken option="B" state={lgwWinner ? "winner" : "neutral"} size="compact" />
            <span className="dest-cost-name">Gatwick</span>
            <span className="dest-cost-code">LGW</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">Flight (&times;2)</span>
            <span className="dest-cost-row-amount">&euro;170</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">Baggage (&times;2)</span>
            <span className="dest-cost-row-amount">&euro;60</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">Seats (&times;2)</span>
            <span className="dest-cost-row-amount">&euro;16</span>
          </div>
          <div className="dest-cost-row">
            <span className="dest-cost-row-label">{dest.lgwTransferMode}</span>
            <span className="dest-cost-row-amount">&euro;{dest.lgwTransferCostEUR}</span>
          </div>
          <div className="dest-cost-total">
            <span className="dest-cost-total-label">Real cost</span>
            <span
              className="dest-cost-total-num"
              style={{ color: lgwWinner ? "var(--ink)" : "var(--grey)" }}
            >
              &euro;{result.lgwTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
