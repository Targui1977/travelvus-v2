"use client";

/** Real Cost Infographic — 4-segment proportional bar + legend.
 *  Spec: travelvus-visual-system-v1/real-cost-infographic/SPEC.md
 *  Fixed order: Ticket → Baggage → Transfer → Taxi */

export interface CostSegment {
  label: string;
  amount: number;
  /** Fixed colour index: 0=navy(ticket), 1=grey(baggage), 2=copper(transfer), 3=copper-lt(taxi) */
}

interface Props {
  segments: [CostSegment, CostSegment, CostSegment, CostSegment];
  showLiveTag?: boolean;
}

const COLORS = ["var(--navy)", "var(--grey)", "var(--copper)", "var(--copper-lt)"];

export default function RealCostInfographic({ segments, showLiveTag }: Props) {
  const total = segments.reduce((sum, s) => sum + s.amount, 0);

  return (
    <div style={{ padding: "30px 32px" }}>
      {/* Optional live tag */}
      {showLiveTag && (
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 18 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, color: "var(--muted)" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--ok)", flex: "none" }} />
            Calculated now
          </span>
        </div>
      )}

      {/* Proportional bar */}
      <div style={{ display: "flex", height: 14, borderRadius: 7, overflow: "hidden", marginBottom: 20 }} aria-hidden="true">
        {segments.map((s, i) => (
          <div
            key={i}
            style={{
              width: `${(s.amount / total) * 100}%`,
              background: COLORS[i],
              minWidth: total > 0 ? 4 : 0,
            }}
          />
        ))}
      </div>

      {/* 4-column legend grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 22 }}>
        {segments.map((s, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: 2, background: COLORS[i], flex: "none" }} />
              <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--pmuted)" }}>
                {s.label}
              </span>
            </div>
            <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, color: "var(--navy)" }}>
              €{s.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Hairline divider + total */}
      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18, textAlign: "right" }}>
        <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginRight: 14 }}>
          Real cost
        </span>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 32, color: "var(--navy)" }}>
          €{total}
        </span>
      </div>
    </div>
  );
}
