"use client";

import Link from "next/link";
import type { HeroEditorialProps, HeroSnapshotItem } from "./types";
import {
  AirportComparisonMap,
  JourneyDiagram,
  RealCostInfographic,
  JourneyTimeInfographic,
  NeighbourhoodDecisionMap,
  TimelineGraphic,
} from "@/components/visual";

/* ── Confidence label map ─────────────────────────────────── */

const CONFIDENCE_LABELS: Record<string, string> = {
  robust: "Clear recommendation",
  clear: "Clear recommendation",
  narrow: "Narrow margin — verify before booking",
  "near-tie": "Near-tie — personal preference decides",
};

/* ── Visual renderer ──────────────────────────────────────── */

function renderVisual(visual: HeroEditorialProps["visual"]) {
  switch (visual.type) {
    case "airport-map":
      return <AirportComparisonMap {...visual.data} />;
    case "journey-diagram":
      return <JourneyDiagram {...visual.data} />;
    case "real-cost":
      return <RealCostInfographic {...visual.data} />;
    case "journey-time":
      return <JourneyTimeInfographic {...visual.data} />;
    case "neighbourhood-map":
      return <NeighbourhoodDecisionMap {...visual.data} />;
    case "timeline":
      return <TimelineGraphic {...visual.data} />;
  }
}

/* ── Main Component ───────────────────────────────────────── */

export default function HeroEditorial({
  category,
  question,
  subtitle,
  metadata,
  decisionCard,
  visual,
  snapshot,
  cta,
}: HeroEditorialProps) {
  return (
    <>
      <style>{`
        .hero-v2-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 40px;
          align-items: start;
        }
        .hero-v2-mobile-hidden { display: flex; }
        .hero-v2-snapshot-desktop { display: flex; }
        .hero-v2-snapshot-tablet { display: none; }
        .hero-v2-snapshot-mobile { display: none; }

        @media (max-width: 900px) {
          .hero-v2-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .hero-v2-snapshot-desktop { display: none; }
          .hero-v2-snapshot-tablet { display: flex; }
        }

        @media (max-width: 767px) {
          .hero-v2-mobile-hidden { display: none; }
          .hero-v2-snapshot-tablet { display: none; }
          .hero-v2-snapshot-mobile { display: flex; }
        }
      `}</style>

      <section style={{ padding: "40px 52px", borderBottom: "1px solid var(--line)" }}>
        <div className="hero-v2-grid">
          {/* ═══ LEFT COLUMN: Editorial ═══ */}
          <div>
            {/* 1. Category pill */}
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--mono), monospace",
                fontWeight: 600,
                fontSize: 9,
                lineHeight: 1,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--copper)",
                background: "var(--peach)",
                padding: "5px 10px",
                borderRadius: 20,
                marginBottom: 18,
              }}
            >
              {category}
            </span>

            {/* 2. Question / H1 */}
            <h1
              style={{
                fontFamily: "var(--serif), Georgia, serif",
                fontWeight: 400,
                fontSize: 34,
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                margin: "0 0 14px",
                maxWidth: 600,
              }}
            >
              {question}
            </h1>

            {/* 3. Subtitle */}
            <p
              style={{
                fontFamily: "var(--sans), sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.5,
                color: "var(--muted)",
                margin: "0 0 16px",
                maxWidth: 520,
              }}
            >
              {subtitle}
            </p>

            {/* 4. Metadata (hidden on mobile) */}
            {metadata && (
              <div
                className="hero-v2-mobile-hidden"
                style={{
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--mono), monospace",
                  fontWeight: 400,
                  fontSize: 11,
                  color: "var(--pmuted)",
                  marginBottom: 24,
                }}
              >
                {metadata.readTime && <span>{metadata.readTime}</span>}
                {metadata.readTime && metadata.reviewedDate && <span>·</span>}
                {metadata.reviewedDate && <span>{metadata.reviewedDate}</span>}
                {metadata.verified && (
                  <>
                    <span>·</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--ok)", flex: "none" }} />
                      Verified
                    </span>
                  </>
                )}
              </div>
            )}

            {/* 7. Decision Snapshot */}
            {snapshot && snapshot.length > 0 && (
              <>
                {/* Desktop: 3 items */}
                <SnapshotRow items={snapshot.slice(0, 3)} className="hero-v2-snapshot-desktop" />
                {/* Tablet: 2 items */}
                <SnapshotRow items={snapshot.slice(0, 2)} className="hero-v2-snapshot-tablet" />
                {/* Mobile: 1 item */}
                <SnapshotRow items={snapshot.slice(0, 1)} className="hero-v2-snapshot-mobile" />
              </>
            )}

            {/* 8. CTA */}
            <div style={{ marginTop: 24 }}>
              <Link
                href={cta.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--sans), sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  lineHeight: 1,
                  color: "var(--paper)",
                  background: "var(--navy)",
                  borderRadius: "var(--radius-button)",
                  padding: "14px 24px",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
              >
                {cta.label}
              </Link>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: Decision Card + Visual ═══ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* 5. Decision Card */}
            <div
              style={{
                background: "var(--navy)",
                borderRadius: 12,
                padding: "20px 22px",
                color: "var(--paper)",
              }}
            >
              {/* Winner */}
              <div
                style={{
                  fontFamily: "var(--serif), Georgia, serif",
                  fontWeight: 400,
                  fontSize: 22,
                  lineHeight: 1.2,
                  color: "var(--peach)",
                  fontStyle: "italic",
                  marginBottom: 12,
                }}
              >
                {decisionCard.winner}
              </div>

              {/* Metrics */}
              <div style={{ display: "flex", gap: 20, marginBottom: decisionCard.bestFor || decisionCard.avoidFor ? 12 : 0 }}>
                {decisionCard.moneySaved && (
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--pmuted)", marginBottom: 2 }}>
                      Money saved
                    </span>
                    <span style={{ fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1, color: "var(--paper)" }}>
                      {decisionCard.moneySaved}
                    </span>
                  </div>
                )}
                {decisionCard.timeSaved && (
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--pmuted)", marginBottom: 2 }}>
                      Time saved
                    </span>
                    <span style={{ fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1, color: "var(--paper)" }}>
                      {decisionCard.timeSaved}
                    </span>
                  </div>
                )}
              </div>

              {/* Best for / Avoid for */}
              {(decisionCard.bestFor || decisionCard.avoidFor) && (
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {decisionCard.bestFor && (
                    <div style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4, color: "var(--pmuted)" }}>
                      <span style={{ color: "var(--paper)", fontWeight: 600 }}>Best for: </span>
                      {decisionCard.bestFor}
                    </div>
                  )}
                  {decisionCard.avoidFor && (
                    <div style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4, color: "var(--pmuted)" }}>
                      <span style={{ color: "var(--copper-lt)", fontWeight: 600 }}>Avoid if: </span>
                      {decisionCard.avoidFor}
                    </div>
                  )}
                </div>
              )}

              {/* Confidence */}
              {decisionCard.confidence && (
                <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid rgba(244,241,234,0.12)" }}>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, color: "var(--pmuted)", lineHeight: 1.3 }}>
                    {CONFIDENCE_LABELS[decisionCard.confidence]}
                  </span>
                </div>
              )}
            </div>

            {/* 6. Dynamic Visual */}
            <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 }}>
              {renderVisual(visual)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Snapshot sub-component ───────────────────────────────── */

function SnapshotRow({ items, className }: { items: HeroSnapshotItem[]; className: string }) {
  if (items.length === 0) return null;

  return (
    <div
      className={className}
      style={{
        alignItems: "center",
        gap: 16,
        marginBottom: 8,
        flexWrap: "wrap",
      }}
    >
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)" }}>
            {item.label}
          </span>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 18, lineHeight: 1, color: "var(--copper)" }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
