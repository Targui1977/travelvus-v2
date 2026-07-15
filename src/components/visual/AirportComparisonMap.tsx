"use client";

/** Airport Comparison Map — concentric-ring schematic.
 *  Spec: travelvus-visual-system-v1/airport-comparison-map/SPEC.md */

export interface AirportMarker {
  code: string;
  name: string;
  distance: string;
  isWinner?: boolean;
}

interface Props {
  cityName: string;
  airports: AirportMarker[];
  /** Max 3 rings (desktop), 2 (tablet), 1 (mobile) */
}

export default function AirportComparisonMap({ cityName, airports }: Props) {
  return (
    <div style={{ padding: "16px 26px 26px", maxWidth: 320, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingBottom: 8,
          borderBottom: "1px solid var(--line)",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--pmuted)",
          }}
        >
          Airport distance from {cityName}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 400,
            fontSize: 10,
            color: "var(--muted)",
          }}
        >
          Schematic — not to scale
        </span>
      </div>

      {/* SVG Map */}
      <svg
        viewBox="0 0 280 280"
        width="280"
        height="280"
        aria-hidden="true"
        style={{ display: "block", margin: "0 auto" }}
      >
        {/* Concentric rings */}
        {[70, 105, 140].map((r, i) => (
          <circle
            key={i}
            cx={140}
            cy={140}
            r={r}
            fill="none"
            stroke="#E9E2D2"
            strokeWidth={1}
            className={i >= 1 ? "hide-mobile-ring" : ""}
          />
        ))}

        {/* City centre dot */}
        <circle cx={140} cy={140} r={9} fill="#1E2A33" />

        {/* Airport markers — positioned around the centre */}
        {airports.map((a, i) => {
          const angle = (i / airports.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const dist = 95;
          const x = 140 + dist * Math.cos(rad);
          const y = 140 + dist * Math.sin(rad);

          const isWinner = a.isWinner;
          const dotR = isWinner ? 6 : 5;

          return (
            <g key={a.code}>
              {/* Connector line */}
              <line
                x1={140}
                y1={140}
                x2={x}
                y2={y}
                stroke={isWinner ? "#B85C38" : "#8A959D"}
                strokeWidth={0.8}
                opacity={0.55}
              />
              {/* Airport dot */}
              <circle
                cx={x}
                cy={y}
                r={dotR}
                fill={isWinner ? "none" : "none"}
                stroke={isWinner ? "#B85C38" : "#8A959D"}
                strokeWidth={isWinner ? 2 : 1.5}
              />
              {isWinner && <circle cx={x} cy={y} r={3} fill="#B85C38" />}
              {/* Label */}
              <text
                x={x}
                y={y + 16}
                textAnchor="middle"
                fontFamily="var(--sans), Geist, sans-serif"
                fontWeight={600}
                fontSize={12}
                fill={isWinner ? "#B85C38" : "#6B7078"}
              >
                {a.code}
              </text>
              <text
                x={x}
                y={y + 28}
                textAnchor="middle"
                fontFamily="var(--mono), monospace"
                fontWeight={400}
                fontSize={9}
                fill="#6B7078"
              >
                {a.distance}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Screen-reader text equivalent */}
      <ul style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {airports.map((a) => (
          <li key={a.code}>
            {a.name} ({a.code}): {a.distance} from {cityName}
            {a.isWinner ? " — recommended" : ""}
          </li>
        ))}
      </ul>

      <style>{`@media (max-width: 600px) { .hide-mobile-ring { display: none; } }`}</style>
    </div>
  );
}
