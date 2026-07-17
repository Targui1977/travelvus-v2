/**
 * Travelvus V2 — Decision Guide Model
 *
 * Typed configuration for programmatic decision guides.
 * Every guide consumes the Decision Engine — no duplicated reasoning.
 * Phase 112.0.
 */

import type { CityId } from "@/data/cities";

/* ── Guide Types ──────────────────────────────────────────── */

export type GuideType = "destination" | "traveller";

export type TravellerScenario =
  | "lowest-cost"
  | "fastest-arrival"
  | "business"
  | "family"
  | "late-night";

/* ── Guide Config ─────────────────────────────────────────── */

export interface GuideAirportRecommendation {
  code: string;
  name: string;
  why: string;
  transferNote: string;
}

export interface GuideConfig {
  /** URL slug, e.g. "best-airport-for-central-paris" */
  slug: string;

  /** Guide type */
  type: GuideType;

  /** City */
  cityId: CityId;

  /** Destination ID (for destination guides) or traveller scenario (for traveller guides) */
  destinationId?: string;
  travellerScenario?: TravellerScenario;

  /** SEO */
  title: string;
  description: string;

  /** Content */
  headline: string;
  intro: string;

  /** Airport recommendations (ordered: winner first) */
  airports: GuideAirportRecommendation[];

  /** Transfer comparison */
  transferFacts: { label: string; value: string; note: string }[];

  /** Key takeaway */
  takeaway: string;

  /** Decision Engine CTA */
  ctaLabel: string;
  ctaHref: string;

  /** Related */
  relatedGuides: { label: string; href: string }[];

  /** Metadata */
  lastReviewed: string;
}
