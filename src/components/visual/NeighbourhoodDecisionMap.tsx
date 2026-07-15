"use client";

/** Neighbourhood Decision Map — shows which airport is best for each area.
 *  NOT a street map. Schematic relationship diagram using SVG primitives. */

export interface Neighbourhood {
  name: string;
  bestAirport: string;
  bestAirportCode: string;
}

interface Props {
  cityName: string;
  neighbourhoods: Neighbourhood[];
  /** Airports referenced in the neighbourhoods */
  airports: { code: string; name: string; color: string }[];
}

const COLORS = ["#1E2A33", "#B85C38", "#8A959D", "#5C8A5E", "#6B7078"];

export default function NeighbourhoodDecisionMap({ cityName, neighbourhoods, airports }: Props) {
  // Assign colors to airport codes
  const colorMap: Record<string, string> = {};
  airports.forEach((a, i) => {
    colorMap[a.code] = a.color || COLORS[i % COLORS.length];
  });

  return (
    <div style={{ padding: "20px 26px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid var(--line)" }}>
        <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pmuted)" }}>
          Best airport by area — {cityName}
        </span>
        <span style={{ fontFamily: "var(--mono)", fontWeight: 400, fontSize: 10, color: "var(--muted)" }}>
          Schematic — not to scale
        </span>
      </div>

      {/* Central hub + area spokes */}
      <svg viewBox="0 0 300 240" width="300" height="240" aria-hidden="true" style={{ display: "block", margin: "0 auto" }}>
        {/* City centre */}
        <circle cx={150} cy={120} r={8} fill="#1E2A33" />
        <text x={150} y={112} textAnchor="middle" fontFamily="var(--sans)" fontWeight={600} fontSize={11} fill="#1E2A33">
          {cityName}
        </text>

        {/* Neighbourhood arcs */}
        {neighbourhoods.map((n, i) => {
          const angle = (i / neighbourhoods.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const dist = 75;
          const x = 150 + dist * Math.cos(rad);
          const y = 120 + dist * Math.sin(rad);
          const dotColor = colorMap[n.bestAirportCode] || "#8A959D";

          return (
            <g key={i}>
              <line x1={150} y1={120} x2={x} y2={y} stroke={dotColor} strokeWidth={0.8} opacity={0.35} />
              <circle cx={x} cy={y} r={5} fill="none" stroke={dotColor} strokeWidth={1.5} />
              <circle cx={x} cy={y} r={2.5} fill={dotColor} />
              <text x={x} y={y + 14} textAnchor="middle" fontFamily="var(--sans)" fontWeight={500} fontSize={10} fill="#3C4650">
                {n.name}
              </text>
              <text x={x} y={y + 26} textAnchor="middle" fontFamily="var(--mono)" fontWeight={500} fontSize={8} fill={dotColor}>
                {n.bestAirportCode}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 14 }}>
        {airports.map((a) => (
          <div key={a.code} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: colorMap[a.code], flex: "none" }} />
            <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, color: "var(--muted)" }}>
              {a.code}
            </span>
          </div>
        ))}
      </div>

      <ul style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {neighbourhoods.map((n, i) => (
          <li key={i}>{n.name}: best served by {n.bestAirport} ({n.bestAirportCode})</li>
        ))}
      </ul>
    </div>
  );
}
