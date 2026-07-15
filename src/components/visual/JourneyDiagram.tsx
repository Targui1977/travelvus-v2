"use client";

/** Journey Diagram — weighted horizontal spine, Home → Destination.
 *  Spec: travelvus-visual-system-v1/journey-diagram/SPEC.md */

export interface JourneyStage {
  label: string;
  type: "start" | "transfer" | "flight" | "arrival" | "destination";
}

interface Props {
  stages: JourneyStage[];
}

export default function JourneyDiagram({ stages }: Props) {
  return (
    <div style={{ padding: "28px 34px 28px" }}>
      {/* Spine + nodes (desktop: horizontal) */}
      <div
        className="jd-spine"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          paddingTop: 8,
        }}
      >
        {/* The spine line behind nodes */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 40,
            right: 40,
            height: 1,
            background: "var(--line-2)",
            zIndex: 0,
          }}
        />

        {stages.map((stage, i) => {
          const isFlight = stage.type === "flight";
          const isDestination = stage.type === "destination";

          const nodeSize = isFlight ? 15 : isDestination ? 17 : 11;
          const fill = isFlight ? "var(--navy)" : "transparent";
          const border = isDestination
            ? "2.5px solid var(--copper)"
            : isFlight
            ? "1.5px solid var(--navy)"
            : "1.5px solid var(--line-3)";
          const bg = isFlight ? "var(--navy)" : "var(--paper)";

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                position: "relative",
                zIndex: 1,
                background: bg,
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  width: nodeSize,
                  height: nodeSize,
                  borderRadius: "50%",
                  background: fill,
                  border,
                  flex: "none",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: isDestination ? 600 : 500,
                  fontSize: isDestination ? 14 : 12,
                  color: isDestination
                    ? "var(--copper)"
                    : isFlight
                    ? "var(--ink)"
                    : "var(--muted)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Screen-reader list */}
      <ol style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {stages.map((s, i) => (
          <li key={i}>{s.label}</li>
        ))}
      </ol>

      <style>{`
        @media (max-width: 600px) {
          .jd-spine {
            flex-direction: column !important;
            gap: 36px !important;
          }
          .jd-spine > div:first-child { display: none; }
        }
      `}</style>
    </div>
  );
}
