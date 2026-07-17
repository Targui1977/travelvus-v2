"use client";

import type { DecisionIntelligenceData } from "@/lib/decision-intelligence";
import { DECISION_STATE_LABELS } from "@/lib/decision-intelligence";

/** Renders the complete reasoning behind a recommendation.
 *  Small, reusable, no duplicated JSX.
 *  Phase 107.1 — added progressive disclosure for extended flips + unknowns. */

const STATE_COLORS: Record<string, string> = {
  recommended: "var(--ok)",
  conditionally_recommended: "var(--copper)",
  balanced: "var(--muted)",
  marginal: "var(--grey)",
  too_close: "var(--grey)",
  insufficient_data: "var(--pmuted)",
};

const FLIP_VISIBLE_DEFAULT = 3;

interface Props {
  data: DecisionIntelligenceData;
}

export default function DecisionIntelligence({ data }: Props) {
  const hasMoreFlips = data.flips.length > FLIP_VISIBLE_DEFAULT;
  const visibleFlips = hasMoreFlips
    ? data.flips.slice(0, FLIP_VISIBLE_DEFAULT)
    : data.flips;
  const hiddenFlips = hasMoreFlips
    ? data.flips.slice(FLIP_VISIBLE_DEFAULT)
    : [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
      {/* State + Recommendation */}
      <div style={{ padding: "12px 16px", background: "rgba(244,241,234,0.03)", borderRadius: 8, border: "1px solid rgba(244,241,234,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: STATE_COLORS[data.state], flex: "none" }} />
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)" }}>
            {DECISION_STATE_LABELS[data.state]}
          </span>
        </div>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 16, lineHeight: 1.3, color: "var(--paper)", fontStyle: "italic", display: "block", marginBottom: 4 }}>
          {data.recommendation}
        </span>
        <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, lineHeight: 1.4, color: "var(--pmuted)" }}>
          {data.summary}
        </span>
      </div>

      {/* Advantages */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)" }}>
          Advantages
        </span>
        {data.advantages.map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
            <span style={{ color: "var(--ok)", fontSize: 10, flex: "none" }}>+</span>
            <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, lineHeight: 1.4, color: "var(--pmuted)" }}>{a}</span>
          </div>
        ))}
      </div>

      {/* Trade-offs */}
      {data.tradeoffs.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)" }}>
            Trade-offs
          </span>
          {data.tradeoffs.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
              <span style={{ color: "var(--copper)", fontSize: 10, flex: "none" }}>±</span>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, lineHeight: 1.4, color: "var(--pmuted)" }}>
                <span style={{ color: "var(--paper)" }}>{t.advantage}</span> — {t.disadvantage}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Decision Flips — first 3 visible, rest behind progressive disclosure */}
      {data.flips.length > 0 && (
        <div style={{ padding: "10px 14px", borderRadius: 6, border: "1px solid rgba(184,92,56,0.15)", background: "rgba(184,92,56,0.04)" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 8 }}>
            When the recommendation changes
          </span>
          {visibleFlips.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: i < visibleFlips.length - 1 || hasMoreFlips ? 6 : 0 }}>
              <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 8, color: "var(--copper)", flex: "none", opacity: 0.6 }}>IF</span>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 10, color: "var(--pmuted)" }}>{f.condition}</span>
              <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 8, color: "var(--copper)", flex: "none", opacity: 0.6 }}>→</span>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 10, color: "var(--peach)", fontStyle: "italic" }}>{f.result}</span>
            </div>
          ))}

          {hasMoreFlips && (
            <details style={{ marginTop: 4 }}>
              <summary style={{
                fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9,
                color: "var(--copper)", cursor: "pointer", opacity: 0.7,
                listStyle: "none", display: "flex", alignItems: "center", gap: 4,
              }}>
                <span>+ {hiddenFlips.length} more condition{hiddenFlips.length > 1 ? "s" : ""}</span>
              </summary>
              <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 6 }}>
                {hiddenFlips.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 8, color: "var(--copper)", flex: "none", opacity: 0.6 }}>IF</span>
                    <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 10, color: "var(--pmuted)" }}>{f.condition}</span>
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 8, color: "var(--copper)", flex: "none", opacity: 0.6 }}>→</span>
                    <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 10, color: "var(--peach)", fontStyle: "italic" }}>{f.result}</span>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      )}

      {/* Limitations */}
      {data.limitations.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", opacity: 0.6 }}>
            Known limitations
          </span>
          {data.limitations.map((l, i) => (
            <span key={i} style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 10, lineHeight: 1.35, color: "var(--pmuted)", opacity: 0.7 }}>
              {l.condition} — {l.impact}
            </span>
          ))}
        </div>
      )}

      {/* Unknowns — progressive disclosure */}
      {data.unknowns && data.unknowns.length > 0 && (
        <details style={{ opacity: 0.6 }}>
          <summary style={{
            fontFamily: "var(--mono)", fontWeight: 500, fontSize: 8,
            letterSpacing: "0.06em", textTransform: "uppercase",
            color: "var(--pmuted)", cursor: "pointer",
            listStyle: "none", display: "flex", alignItems: "center", gap: 4,
          }}>
            <span>Unknown — {data.unknowns.length} thing{data.unknowns.length > 1 ? "s" : ""} we don&rsquo;t know</span>
          </summary>
          <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 3 }}>
            {data.unknowns.map((u, i) => (
              <span key={i} style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 10, lineHeight: 1.35, color: "var(--pmuted)", opacity: 0.5 }}>
                {u}
              </span>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
