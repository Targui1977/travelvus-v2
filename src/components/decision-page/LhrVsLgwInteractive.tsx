"use client";

import { useState, useMemo } from "react";
import OptionToken from "@/components/ui/OptionToken";
import {
  DESTINATIONS,
  calculateResult,
  getVerdictText,
  MARGIN_LABELS,
} from "@/lib/lhr-vs-lgw-data";

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
      {/* ═══ DECISION MODULE: destination selector + live verdict ═══ */}
      <div className="lvg-module">
        {/* Destination tabs */}
        <div className="lvg-module-hd">
          <span className="lvg-module-kicker">
            Choose a destination — and watch the verdict move
          </span>
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

        {/* Live Verdict */}
        <div
          className={
            verdict.isHandoff ? "lvg-verdict lvg-verdict-handoff" : "lvg-verdict"
          }
        >
          <span className="lvg-verdict-label">
            {MARGIN_LABELS[result.marginClass]}
          </span>
          <div className="lvg-verdict-line">{verdict.winnerLine}</div>
          <p className="lvg-verdict-interp">{verdict.interpretation}</p>

          {verdict.isHandoff && (
            <div className="lvg-handoff">
              <span className="lvg-handoff-kicker">Money stops deciding.</span>
              <p className="lvg-handoff-text">
                {result.winner === "LHR" ? "Heathrow" : "Gatwick"} wins on time
                by {Math.abs(dest.lhrTransferMins - dest.lgwTransferMins)}{" "}
                minutes. When cost can&rsquo;t separate them, the faster journey
                takes over.
              </p>
            </div>
          )}

          <p className="lvg-verdict-evidence">
            2 travellers &middot; Barcelona flights &middot; contactless fares &middot; Jul 2026
          </p>
        </div>
      </div>

      {/* ═══ 01 — REAL COST ═══ */}
      <div style={{ marginTop: 28 }}>
        <div className="section-label">
          <span className="section-label-num">01</span>
          <span className="section-label-title">Real cost — door to door</span>
        </div>

        <div className="dest-cost">
          {/* Heathrow */}
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
                &euro;{result.lhrDisplay}
              </span>
            </div>
          </div>

          {/* Gatwick */}
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
                &euro;{result.lgwDisplay}
              </span>
            </div>
          </div>
        </div>
        <p className="lvg-evidence-note">
          UK transport costs converted at 1 GBP &asymp; 1.17 EUR. Fares: walk-up
          single, contactless/Oyster, off-peak daytime. Both airports measured
          identically.
        </p>
      </div>

      {/* ═══ Group-size editorial note ═══ */}
      <div style={{ marginTop: 20 }}>
        <div className="group-size-note">
          <h4>Does group size change the answer?</h4>
          <p className="lvg-evidence-note" style={{ marginBottom: 12 }}>
            The winner direction stays the same — but your group size amplifies
            the saving or the cost of choosing the cheaper airport.
          </p>
          <div className="group-size-row">
            <div className="group-size-item">
              <span className="group-size-item-label">Solo</span>
              <span className="group-size-item-value">
                &euro;{Math.round(result.marginDisplay / 2)}
              </span>
            </div>
            <div className="group-size-item">
              <span className="group-size-item-label">Couple</span>
              <span className="group-size-item-value">
                &euro;{result.marginDisplay}
              </span>
            </div>
            <div className="group-size-item">
              <span className="group-size-item-label">Family of 4</span>
              <span className="group-size-item-value">
                &euro;{result.marginDisplay * 2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
