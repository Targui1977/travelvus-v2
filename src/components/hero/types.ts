/**
 * Hero Editorial V2 — Types
 * Approved design contract from travelvus-hero-editorial-v2/PROPS_MODEL.md
 */

import type { ReactNode } from "react";
import type { AirportMarker } from "@/components/visual";
import type { JourneyStage } from "@/components/visual";
import type { CostSegment } from "@/components/visual";
import type { TimeSegment } from "@/components/visual";
import type { Neighbourhood } from "@/components/visual";

/* ── Metadata ─────────────────────────────────────────────── */

export interface HeroMetadata {
  readTime?: string;
  reviewedDate?: string;
  verified?: boolean;
}

/* ── Decision Card ────────────────────────────────────────── */

/** Confidence level — determines visual treatment and editorial language.
 *  very-high: multiple verified data sources, strong winner, no ambiguity
 *  high: clear recommendation based on typical scenarios
 *  moderate: recommendation holds for most but not all travellers
 *  conditional: winner depends on specific traveller context
 *  context-dependent: no single winner — depends entirely on circumstances
 *  too-close: effectively tied — personal preference decides */
export type HeroConfidence = "very-high" | "high" | "moderate" | "conditional" | "context-dependent" | "too-close";

export const CONFIDENCE_META: Record<HeroConfidence, { label: string; shortLabel: string; color: string; description: string }> = {
  "very-high": { label: "Very high confidence", shortLabel: "Very high confidence", color: "var(--ok)", description: "Multiple verified data sources support a clear winner." },
  "high": { label: "High confidence", shortLabel: "High confidence", color: "var(--navy)", description: "Clear recommendation based on typical traveller scenarios." },
  "moderate": { label: "Moderate confidence", shortLabel: "Moderate confidence", color: "var(--muted)", description: "Recommendation holds for most, but not all, travellers." },
  "conditional": { label: "Conditional", shortLabel: "Conditional recommendation", color: "var(--copper)", description: "The winner depends on your specific circumstances." },
  "context-dependent": { label: "Context dependent", shortLabel: "Context dependent", color: "var(--copper)", description: "No single winner — depends entirely on your situation." },
  "too-close": { label: "Too close to call", shortLabel: "Too close to call", color: "var(--grey)", description: "Effectively tied. Personal preference should decide." },
};

export interface HeroDecisionCard {
  winner: string;
  timeSaved?: string;
  moneySaved?: string;
  bestFor?: string;
  avoidFor?: string;
  confidence?: HeroConfidence;
}

/* ── Visual discriminated union ────────────────────────────── */

export type HeroVisual =
  | { type: "airport-map"; data: { cityName: string; airports: AirportMarker[] } }
  | { type: "journey-diagram"; data: { stages: JourneyStage[] } }
  | { type: "real-cost"; data: { segments: [CostSegment, CostSegment, CostSegment, CostSegment]; showLiveTag?: boolean } }
  | { type: "journey-time"; data: { segments: TimeSegment[]; totalLabel?: string } }
  | { type: "neighbourhood-map"; data: { cityName: string; neighbourhoods: Neighbourhood[]; airports: { code: string; name: string; color: string }[] } }
  | { type: "timeline"; data: { events: { label: string; time: string; type?: "depart" | "transit" | "flight" | "arrival" | "destination" | "risk" }[]; startLabel?: string; endLabel?: string } };

/* ── Snapshot ──────────────────────────────────────────────── */

export interface HeroSnapshotItem {
  label: string;
  value: string;
}

/* ── CTA ──────────────────────────────────────────────────── */

export interface HeroCTA {
  label: string;
  href: string;
}

/* ── Full Props ───────────────────────────────────────────── */

export interface HeroEditorialProps {
  category: string;
  question: string;
  subtitle: string;
  metadata?: HeroMetadata;
  decisionCard: HeroDecisionCard;
  /** Optional — omit when no visual adds clear decision value in the hero space */
  visual?: HeroVisual;
  snapshot?: HeroSnapshotItem[];
  cta: HeroCTA;
  /** Evidence factors explaining why this recommendation exists */
  evidence?: { factors: { title: string; explanation: string; weight: "critical" | "high" | "medium" | "supporting" }[]; limitations?: string[]; trace?: string[]; strength?: string };
}
