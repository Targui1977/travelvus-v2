/**
 * Travelvus V2 — Knowledge Base Model
 *
 * Educational content that explains facts. Knowledge pages answer questions.
 * Decision Guides recommend actions. Both share the same visual language.
 * Phase 114.0.
 */

import type { CityId } from "@/data/cities";

export type KnowledgeCategory =
  | "airport-basics"
  | "transfers"
  | "terminals"
  | "hotels"
  | "security"
  | "check-in"
  | "baggage"
  | "connections"
  | "public-transport"
  | "late-night"
  | "accessibility"
  | "family-travel";

export interface KnowledgeConfig {
  slug: string;
  cityId: CityId;
  category: KnowledgeCategory;
  title: string;
  description: string;
  headline: string;
  intro: string;
  keyFacts: { label: string; value: string }[];
  sections: { heading: string; body: string }[];
  tips: string[];
  relatedGuides: { label: string; href: string }[];
  relatedKnowledge: { label: string; href: string }[];
  hubLink: { label: string; href: string };
  ctaLabel: string;
  ctaHref: string;
  lastReviewed: string;
}
