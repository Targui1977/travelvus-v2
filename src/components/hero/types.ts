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

export type HeroConfidence = "robust" | "clear" | "narrow" | "near-tie";

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
  visual: HeroVisual;
  snapshot?: HeroSnapshotItem[];
  cta: HeroCTA;
}
