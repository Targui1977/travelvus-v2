"use client";

/** Timeline Graphic — proportionally-spaced horizontal ruler with tick events.
 *  Supports: clock times, elapsed times, connections, delays, etc. */

export interface TimelineEvent {
  label: string;
  time: string;       // e.g. "14:30" or "2h 15m"
  type?: "depart" | "transit" | "flight" | "arrival" | "destination" | "risk";
}

interface Props {
  events: TimelineEvent[];
  startLabel?: string;
  endLabel?: string;
}

const TYPE_STYLES: Record<string, { dot: string; border: string; weight: number }> = {
  depart: { dot: "var(--navy)", border: "1.5px solid var(--navy)", weight: 500 },
  transit: { dot: "var(--muted)", border: "1.5px solid var(--line-3)", weight: 400 },
  flight: { dot: "var(--navy)", border: "2px solid var(--navy)", weight: 600 },
  arrival: { dot: "var(--muted)", border: "1.5px solid var(--line-3)", weight: 400 },
  destination: { dot: "var(--copper)", border: "2.5px solid var(--copper)", weight: 700 },
  risk: { dot: "var(--copper)", border: "2px solid var(--copper)", weight: 600 },
};

export default function TimelineGraphic({ events, startLabel, endLabel }: Props) {
  return (
    <div style={{ padding: "24px 28px" }}>
      {/* Header */}
      {(startLabel || endLabel) && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)" }}>
            {startLabel}
          </span>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)" }}>
            {endLabel}
          </span>
        </div>
      )}

      {/* Spine */}
      <div style={{ position: "relative", height: 60 }}>
        <div style={{ position: "absolute", top: 12, left: 0, right: 0, height: 1, background: "var(--line-2)" }} />

        {/* Tick marks */}
        {events.map((e, i) => {
          const style = TYPE_STYLES[e.type || "transit"];
          const left = `${(i / Math.max(events.length - 1, 1)) * 100}%`;

          return (
            <div key={i} style={{ position: "absolute", left, top: 0, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Tick */}
              <div style={{ width: 1, height: 14, background: "var(--ink)", flex: "none" }} />
              {/* Dot */}
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: style.dot, border: style.border, flex: "none", marginTop: -4 }} />
              {/* Time label */}
              <span style={{ fontFamily: "var(--mono)", fontWeight: style.weight, fontSize: 9, color: "var(--ink)", marginTop: 6, whiteSpace: "nowrap" }}>
                {e.time}
              </span>
              {/* Event label */}
              <span style={{ fontFamily: "var(--sans)", fontWeight: style.weight, fontSize: 10, color: style.dot, marginTop: 2, whiteSpace: "nowrap", textAlign: "center" }}>
                {e.label}
              </span>
            </div>
          );
        })}
      </div>

      <ol style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {events.map((e, i) => (
          <li key={i}>{e.time} — {e.label}</li>
        ))}
      </ol>
    </div>
  );
}
