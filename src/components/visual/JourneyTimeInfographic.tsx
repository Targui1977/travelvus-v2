"use client";

/** Journey Time Infographic — monochrome proportional bar for time segments.
 *  Intentionally distinct from RealCostInfographic (no colour sequence overlap). */

export interface TimeSegment {
  label: string;
  minutes: number;
  /** Optional risk accent on a segment (e.g. "schedule gap") */
  risk?: boolean;
}

interface Props {
  segments: TimeSegment[];
  totalLabel?: string;
}

export default function JourneyTimeInfographic({ segments, totalLabel = "Total journey time" }: Props) {
  const total = segments.reduce((sum, s) => sum + s.minutes, 0);

  return (
    <div style={{ padding: "30px 32px" }}>
      {/* Proportional bar */}
      <div style={{ display: "flex", height: 14, borderRadius: 7, overflow: "hidden", marginBottom: 20 }} aria-hidden="true">
        {segments.map((s, i) => (
          <div
            key={i}
            style={{
              width: total > 0 ? `${(s.minutes / total) * 100}%` : "0%",
              background: s.risk ? "var(--copper)" : i % 2 === 0 ? "var(--navy)" : "var(--grey)",
              minWidth: total > 0 ? 4 : 0,
              borderRight: i < segments.length - 1 ? "1px solid var(--paper)" : "none",
            }}
          />
        ))}
      </div>

      {/* Legend grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 22 }}>
        {segments.map((s, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: 2, background: s.risk ? "var(--copper)" : i % 2 === 0 ? "var(--navy)" : "var(--grey)", flex: "none" }} />
              <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em", color: s.risk ? "var(--copper)" : "var(--pmuted)" }}>
                {s.label}
              </span>
            </div>
            <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, color: "var(--ink)" }}>
              {s.minutes}m
            </span>
          </div>
        ))}
      </div>

      {/* Hairline + total */}
      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18, textAlign: "right" }}>
        <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginRight: 14 }}>
          {totalLabel}
        </span>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 32, color: "var(--ink)" }}>
          {Math.floor(total / 60)}h {total % 60}m
        </span>
      </div>
    </div>
  );
}
