"use client";

/** Journey Diagram — weighted horizontal spine, Home → Destination.
 *  Spec: travelvus-visual-system-v1/journey-diagram/SPEC.md */

export interface JourneyStage {
  label: string;
  type: "start" | "transfer" | "flight" | "arrival" | "destination";
}

interface Props {
  stages: JourneyStage[];
  /** default = full labels for body use. hero = compact for HeroEditorial visual slot. */
  variant?: "default" | "hero";
}

const HERO_STAGES = [
  { label: "Home", num: "01", type: "start" as const },
  { label: "Airport access", num: "02", type: "transfer" as const },
  { label: "Flight", num: "03", type: "flight" as const },
  { label: "Arrival transfer", num: "04", type: "arrival" as const },
  { label: "Destination", num: "05", type: "destination" as const },
];

export default function JourneyDiagram({ stages, variant = "default" }: Props) {
  const isHero = variant === "hero";
  const displayStages = isHero ? HERO_STAGES : stages.map((s, i) => ({
    ...s, num: String(i + 1).padStart(2, "0"),
  }));

  return (
    <div style={{ padding: isHero ? "20px 14px 20px" : "28px 34px 28px" }}>
      {/* Spine + nodes */}
      <div
        className="jd-spine"
        style={{
          display: "flex",
          alignItems: isHero ? "flex-start" : "center",
          justifyContent: "space-between",
          position: "relative",
          paddingTop: isHero ? 12 : 8,
        }}
      >
        {/* The spine line behind nodes */}
        <div
          style={{
            position: "absolute",
            top: isHero ? 19 : 28,
            left: isHero ? 12 : 40,
            right: isHero ? 12 : 40,
            height: 1,
            background: "var(--line-2)",
            zIndex: 0,
          }}
        />

        {displayStages.map((stage, i) => {
          const isFlight = stage.type === "flight";
          const isDestination = stage.type === "destination";

          const nodeSize = isFlight ? 13 : isDestination ? 15 : 10;
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
                gap: isHero ? 6 : 10,
                position: "relative",
                zIndex: 1,
                background: bg,
                padding: isHero ? "0 2px" : "0 4px",
                minWidth: isHero ? 0 : undefined,
                maxWidth: isHero ? 72 : undefined,
              }}
            >
              {/* Hero: number above node */}
              {isHero && (
                <span style={{
                  fontFamily: "var(--mono)",
                  fontWeight: 500,
                  fontSize: 8,
                  color: isFlight ? "var(--copper)" : "var(--muted)",
                  lineHeight: 1,
                  marginBottom: 2,
                }}>
                  {stage.num}
                </span>
              )}

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
                  fontWeight: isDestination ? 600 : isFlight ? 600 : 500,
                  fontSize: isHero ? 10 : isDestination ? 14 : 12,
                  lineHeight: isHero ? 1.25 : 1,
                  color: isDestination
                    ? "var(--copper)"
                    : isFlight
                    ? "var(--ink)"
                    : "var(--muted)",
                  textAlign: "center",
                  whiteSpace: isHero ? "normal" : "nowrap",
                  wordBreak: isHero ? "break-word" : undefined,
                  maxWidth: isHero ? 72 : undefined,
                }}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Screen-reader list — always complete */}
      <ol style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        <li>Home → departure transfer → pre-flight process → flight → arrival process → final transfer → destination</li>
      </ol>

      <style>{`
        @media (max-width: 600px) {
          .jd-spine {
            flex-direction: column !important;
            gap: 24px !important;
            align-items: center !important;
          }
          .jd-spine > div:first-child { display: none; }
        }
      `}</style>
    </div>
  );
}
