"use client";

/** RecommendationEvidence — shows WHY a recommendation exists.
 *  Each factor has a weight level. Never uses percentages. */

export type EvidenceWeight = "critical" | "high" | "medium" | "supporting";

export interface EvidenceFactor {
  title: string;
  explanation: string;
  weight: EvidenceWeight;
}

const WEIGHT_LABELS: Record<EvidenceWeight, string> = {
  critical: "Decisive factor",
  high: "Strong influence",
  medium: "Moderate influence",
  supporting: "Supporting factor",
};

const WEIGHT_COLORS: Record<EvidenceWeight, string> = {
  critical: "var(--copper)",
  high: "var(--navy)",
  medium: "var(--muted)",
  supporting: "var(--pmuted)",
};

interface Props {
  factors: EvidenceFactor[];
  /** Optional: what could change the recommendation */
  limitations?: string[];
  /** Optional: decision trace labels */
  trace?: string[];
  /** Optional: recommendation strength */
  strength?: string;
}

export default function RecommendationEvidence({ factors, limitations, trace, strength }: Props) {
  return (
    <div style={{ marginTop: 10 }}>
      {/* Evidence factors */}
      <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)", display: "block", marginBottom: 8 }}>
        What this recommendation is based on
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {factors.map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "6px 10px", background: "rgba(244,241,234,0.03)", borderRadius: 6, border: "1px solid rgba(244,241,234,0.06)" }}>
            <span style={{ width: 13, height: 13, borderRadius: "50%", border: `1.5px solid ${WEIGHT_COLORS[f.weight]}`, flex: "none", marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: WEIGHT_COLORS[f.weight] }} />
            </span>
            <div style={{ minWidth: 0 }}>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 11, color: "var(--paper)", display: "block", marginBottom: 1 }}>
                {f.title}
              </span>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 10, lineHeight: 1.35, color: "var(--pmuted)", display: "block" }}>
                {f.explanation}
              </span>
            </div>
            <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 7, letterSpacing: "0.04em", textTransform: "uppercase", color: WEIGHT_COLORS[f.weight], whiteSpace: "nowrap", flex: "none", marginLeft: "auto", opacity: 0.7 }}>
              {WEIGHT_LABELS[f.weight]}
            </span>
          </div>
        ))}
      </div>

      {/* Decision trace */}
      {trace && trace.length > 0 && (
        <div style={{ marginTop: 10, padding: "8px 12px", background: "rgba(244,241,234,0.02)", borderRadius: 6, border: "1px solid rgba(244,241,234,0.05)" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 7, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)", display: "block", marginBottom: 6 }}>
            How we compared
          </span>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px 0" }}>
            {trace.map((step, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 10, color: i === trace.length - 1 ? "var(--peach)" : "var(--pmuted)", opacity: i === trace.length - 1 ? 1 : 0.7 }}>
                  {step}
                </span>
                {i < trace.length - 1 && (
                  <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--pmuted)", padding: "0 4px", opacity: 0.4 }}>→</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* What could change the result */}
      {limitations && limitations.length > 0 && (
        <div style={{ marginTop: 10, padding: "8px 12px", borderRadius: 6, border: "1px solid rgba(184,92,56,0.15)", background: "rgba(184,92,56,0.04)" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 7, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 5 }}>
            When this changes
          </span>
          {limitations.map((lim, i) => (
            <span key={i} style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 10, lineHeight: 1.4, color: "var(--pmuted)", display: "block" }}>
              {lim}
            </span>
          ))}
        </div>
      )}

      {/* Recommendation strength */}
      {strength && (
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 8, color: "var(--pmuted)" }}>Recommendation strength:</span>
          <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 10, color: "var(--peach)", fontStyle: "italic" }}>{strength}</span>
        </div>
      )}
    </div>
  );
}
