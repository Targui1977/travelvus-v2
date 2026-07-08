"use client";

import { useState } from "react";
import OptionToken from "@/components/ui/OptionToken";
import Signature from "@/components/ui/Signature";

interface LiveComparisonProps {
  initialA: { cost: number; time: string };
  initialB: { cost: number; time: string };
}

/**
 * Client interactive island — matches the Hi-Fi .livewrap module.
 * A vs B with control chips and toggle.
 */
export default function LiveComparison({
  initialA,
  initialB,
}: LiveComparisonProps) {
  const [bagRemoved, setBagRemoved] = useState(false);

  const costA = bagRemoved ? 159 : initialA.cost;
  const costB = initialB.cost;
  const aWins = costA < costB;

  return (
    <div className="live-wrap">
      {/* Header */}
      <div className="live-wrap-hd">
        <span>Live comparison &middot; a typical case &mdash; make it yours</span>
        <span style={{ color: "var(--copper)" }}>
          &#9670; recalculates as you edit
        </span>
      </div>

      {/* A vs B */}
      <div className="live-wrap-body">
        {/* Option A */}
        <div>
          <div className="flex items-center gap-[8px] mb-[6px]">
            <OptionToken
              option="A"
              state={aWins ? "winner" : "neutral"}
              size="compact"
            />
            <span className="font-[var(--mono)] font-medium text-[12px] text-[var(--muted)]">
              Stansted
            </span>
          </div>
          <div
            className="font-[var(--serif)] font-normal text-[40px] leading-none"
            style={{ color: aWins ? "var(--ink)" : "var(--grey)" }}
          >
            &euro;{costA}
          </div>
          <div className="font-[var(--mono)] font-medium text-[11px] text-[var(--muted)] mt-[6px]">
            {initialA.time} door-to-door
          </div>
        </div>

        {/* VS */}
        <div className="font-[var(--mono)] font-normal text-[15px] text-[#b0aa9a] self-end pb-[22px]">
          vs
        </div>

        {/* Option B */}
        <div>
          <div className="flex items-center gap-[8px] mb-[6px]">
            <OptionToken
              option="B"
              state={!aWins ? "winner" : "neutral"}
              size="compact"
            />
            <span className="font-[var(--mono)] font-medium text-[12px] text-[var(--ink)]">
              Heathrow
            </span>
            {!aWins && (
              <span className="live-wrap-badge">Wins</span>
            )}
          </div>
          <div
            className="font-[var(--serif)] font-normal text-[40px] leading-none"
            style={{ color: !aWins ? "var(--ink)" : "var(--grey)" }}
          >
            &euro;{costB}
          </div>
          <div className="font-[var(--mono)] font-medium text-[11px] text-[var(--muted)] mt-[6px]">
            {initialB.time} door-to-door
          </div>
        </div>

        {/* Spacer + signature */}
        <div style={{ flex: 1 }} />
        <Signature variant="default" />
      </div>

      {/* Control chips */}
      <div className="live-wrap-ctrls">
        <span className="ctrl-chip">Travellers: 1 &#9662;</span>
        <span className="ctrl-chip">
          Baggage: {bagRemoved ? "none" : "1 checked"} &#9662;
        </span>
        <span className="ctrl-chip">Destination: Central &#9662;</span>

        {/* Toggle action */}
        <button
          className="live-wrap-toggle"
          onClick={() => setBagRemoved(!bagRemoved)}
        >
          {bagRemoved ? "Restore checked bag (+€45)" : "Remove checked bag (−€45)"}
        </button>
      </div>
    </div>
  );
}
