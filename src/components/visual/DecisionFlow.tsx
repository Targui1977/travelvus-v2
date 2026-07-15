"use client";

/** Decision Flow — vertical narrowing funnel ending in Verdict.
 *  Supports 3–8 stages. Last stage is always the verdict. */

export interface DecisionStage {
  label: string;
  detail?: string;
}

interface Props {
  stages: DecisionStage[];
  verdictLabel?: string;
}

export default function DecisionFlow({ stages, verdictLabel = "Travelvus Verdict" }: Props) {
  const allStages = [...stages, { label: verdictLabel, detail: "The decision" }];

  return (
    <div style={{ padding: "28px 32px", maxWidth: 420, margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        {allStages.map((s, i) => {
          const isLast = i === allStages.length - 1;
          const isFirst = i === 0;
          const width = isFirst ? 260 : isLast ? 220 : 260 - i * 14;

          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              {/* Connector */}
              {!isFirst && (
                <div style={{ width: 1, height: 20, background: isLast ? "var(--copper)" : "var(--line-2)", flex: "none" }} />
              )}
              {/* Stage box */}
              <div
                style={{
                  width,
                  padding: isLast ? "14px 20px" : "10px 16px",
                  border: isLast ? "2px solid var(--copper)" : "1.5px solid var(--line-2)",
                  borderRadius: isLast ? 11 : 10,
                  background: isLast ? "rgba(184,92,56,0.04)" : "var(--paper)",
                  textAlign: "center",
                  transition: "border-color 0.15s",
                }}
              >
                <span
                  style={{
                    fontFamily: isLast ? "var(--serif)" : "var(--sans)",
                    fontWeight: isLast ? 600 : 500,
                    fontSize: isLast ? 17 : 13,
                    color: isLast ? "var(--copper)" : "var(--ink)",
                    display: "block",
                  }}
                >
                  {s.label}
                </span>
                {s.detail && (
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 400, fontSize: 10, color: "var(--muted)", display: "block", marginTop: 2 }}>
                    {s.detail}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* SR text equivalent */}
      <ol style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {allStages.map((s, i) => (
          <li key={i}>{s.label}{s.detail ? ` — ${s.detail}` : ""}</li>
        ))}
      </ol>

      <style>{`
        @media (max-width: 600px) {
          .df-stage { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
