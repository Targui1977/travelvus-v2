"use client";

/** Comparison Graphic — generic A-vs-B bar for any metric.
 *  Supports: cost, time, distance, CO2, walking, transfer count, etc. */

export interface ComparisonMetric {
  label: string;
  valueA: string;
  valueB: string;
  winner: "A" | "B" | "tie";
  unit?: string;
}

interface Props {
  optionA: { name: string; code?: string };
  optionB: { name: string; code?: string };
  metrics: ComparisonMetric[];
  /** Optional: show a winner summary row */
  winnerSummary?: string;
}

export default function ComparisonGraphic({ optionA, optionB, metrics, winnerSummary }: Props) {
  return (
    <div style={{ padding: "18px 0" }}>
      {/* Header row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px 120px", gap: 10, alignItems: "center", padding: "0 0 8px", borderBottom: "1px solid var(--line-2)" }}>
        <span />
        <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center" }}>
          {optionA.code || optionA.name}
        </span>
        <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center" }}>
          {optionB.code || optionB.name}
        </span>
        <span />
      </div>

      {/* Metric rows */}
      {metrics.map((m, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px 120px", gap: 10, alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, color: "var(--ink)" }}>{m.label}</span>
          <span style={{ fontFamily: "var(--mono)", fontWeight: m.winner === "A" ? 600 : 400, fontSize: 13, color: m.winner === "A" ? "var(--ink)" : "var(--muted)", textAlign: "center" }}>
            {m.valueA}{m.unit ? ` ${m.unit}` : ""}
          </span>
          <span style={{ fontFamily: "var(--mono)", fontWeight: m.winner === "B" ? 600 : 400, fontSize: 13, color: m.winner === "B" ? "var(--ink)" : "var(--muted)", textAlign: "center" }}>
            {m.valueB}{m.unit ? ` ${m.unit}` : ""}
          </span>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 13, color: "var(--copper)", textAlign: "right" }}>
            {m.winner === "A" ? `${optionA.name} better` : m.winner === "B" ? `${optionB.name} better` : "Tie"}
          </span>
        </div>
      ))}

      {/* Winner summary */}
      {winnerSummary && (
        <div style={{ padding: "14px 0 0", fontFamily: "var(--serif)", fontWeight: 400, fontSize: 17, color: "var(--copper)", textAlign: "right" }}>
          {winnerSummary}
        </div>
      )}
    </div>
  );
}
