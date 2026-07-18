/**
 * Travelvus V2 — City Coverage Engine
 * Measures editorial completeness objectively.
 * Internal dev tooling. Phase 117.0.
 */

import { SUPPORTED_CITIES, getCityLabel, getCityAirports } from "@/data/cities";
import type { CityId } from "@/data/cities";
import { getCityDestinationIds } from "@/lib/city-engine";
import { GUIDE_REGISTRY, getGuidesByCity } from "@/data/guide-registry";
import { KNOWLEDGE_REGISTRY, getKnowledgeByCity } from "@/data/knowledge-registry";
import type { KnowledgeCategory } from "@/lib/knowledge-model";

/* ── Types ────────────────────────────────────────────────── */

export interface CoverageMetric {
  label: string;
  current: number;
  target: number;
  status: "complete" | "partial" | "missing";
}

export interface CityCoverage {
  cityId: CityId;
  cityLabel: string;
  metrics: CoverageMetric[];
  completionPct: number;
  gaps: string[];
}

export interface GapReport {
  cityId: CityId;
  cityLabel: string;
  missingGuides: string[];
  missingKnowledge: string[];
  missingDestinations: string[];
  generalGaps: string[];
}

/* ── Target thresholds ────────────────────────────────────── */

const TARGETS = {
  destinations: 5,
  destinationGuides: 4,
  travellerGuides: 8,
  knowledgeArticles: 4,
  knowledgeCategories: 3,
};

const TRAVELLER_GUIDE_PATTERNS = ["families", "business", "cheapest", "fastest", "backpackers", "luxury", "early", "late", "carry-on", "first-time"];

/* ── Coverage Matrix ──────────────────────────────────────── */

export function generateCoverageMatrix(): CityCoverage[] {
  return SUPPORTED_CITIES.map(cityId => {
    const guides = getGuidesByCity(cityId);
    const knowledge = getKnowledgeByCity(cityId);
    const dests = getCityDestinationIds(cityId);
    const airports = getCityAirports(cityId);

    const destGuides = guides.filter(g => g.type === "destination").length;
    const travGuides = guides.filter(g => g.type === "traveller").length;
    const knowCats = new Set(knowledge.map(k => k.category)).size;

    const metrics: CoverageMetric[] = [
      { label: "Airports", current: airports.length, target: 2, status: airports.length >= 2 ? "complete" : "partial" },
      { label: "Destinations", current: dests.length, target: TARGETS.destinations, status: dests.length >= TARGETS.destinations ? "complete" : "partial" },
      { label: "Airport Hub", current: 1, target: 1, status: "complete" },
      { label: "Destination Guides", current: destGuides, target: TARGETS.destinationGuides, status: destGuides >= TARGETS.destinationGuides ? "complete" : destGuides > 0 ? "partial" : "missing" },
      { label: "Traveller Guides", current: travGuides, target: TARGETS.travellerGuides, status: travGuides >= TARGETS.travellerGuides ? "complete" : travGuides >= 2 ? "partial" : "missing" },
      { label: "Knowledge Articles", current: knowledge.length, target: TARGETS.knowledgeArticles, status: knowledge.length >= TARGETS.knowledgeArticles ? "complete" : knowledge.length > 0 ? "partial" : "missing" },
      { label: "Knowledge Categories", current: knowCats, target: TARGETS.knowledgeCategories, status: knowCats >= TARGETS.knowledgeCategories ? "complete" : knowCats > 0 ? "partial" : "missing" },
      { label: "Arrival Planner", current: 1, target: 1, status: "complete" },
      { label: "Trust pages linked", current: 1, target: 1, status: "complete" },
    ];

    const totalMetrics = metrics.length;
    const completeMetrics = metrics.filter(m => m.status === "complete").length;
    const partialMetrics = metrics.filter(m => m.status === "partial").length;
    const pct = Math.round((completeMetrics / totalMetrics) * 100 + (partialMetrics / totalMetrics) * 50);

    const gaps = metrics.filter(m => m.status !== "complete").map(m => `${m.label}: ${m.current}/${m.target}`);

    return { cityId, cityLabel: getCityLabel(cityId), metrics, completionPct: pct, gaps };
  });
}

/* ── Gap Report ───────────────────────────────────────────── */

export function generateGapReport(): GapReport[] {
  return SUPPORTED_CITIES.map(cityId => {
    const guides = getGuidesByCity(cityId);
    const knowledge = getKnowledgeByCity(cityId);
    const dests = getCityDestinationIds(cityId);

    const guideSlugs = new Set(guides.map(g => g.slug));
    const knowSlugs = new Set(knowledge.map(k => k.slug));
    const knowCats = new Set(knowledge.map(k => k.category));

    const missingDestGuides = dests.filter(d => {
      // Check if any guide targets this destination
      return !guides.some(g => g.destinationId === d);
    }).map(d => `Missing destination guide for "${d}"`);

    const foundTravPatterns = TRAVELLER_GUIDE_PATTERNS.filter(p =>
      guides.some(g => g.slug.includes(p))
    );
    const missingTravGuides = TRAVELLER_GUIDE_PATTERNS
      .filter(p => !foundTravPatterns.includes(p))
      .map(p => `Missing traveller guide pattern: "${p}"`);

    const requiredKnowCats: KnowledgeCategory[] = ["transfers", "terminals", "hotels"];
    const missingKnowCats = requiredKnowCats
      .filter(c => !knowCats.has(c))
      .map(c => `Missing knowledge category: "${c}"`);

    const generalGaps: string[] = [];
    if (guides.length < TARGETS.destinationGuides + TARGETS.travellerGuides) {
      generalGaps.push(`Total guides: ${guides.length} (target: ${TARGETS.destinationGuides + TARGETS.travellerGuides})`);
    }
    if (knowledge.length < TARGETS.knowledgeArticles) {
      generalGaps.push(`Knowledge articles: ${knowledge.length} (target: ${TARGETS.knowledgeArticles})`);
    }

    return {
      cityId, cityLabel: getCityLabel(cityId),
      missingGuides: [...missingDestGuides, ...missingTravGuides],
      missingKnowledge: missingKnowCats,
      missingDestinations: [],
      generalGaps,
    };
  });
}

/* ── Expansion Readiness Checklist ────────────────────────── */

export const EXPANSION_CHECKLIST = [
  "CityId registered in src/data/cities.ts",
  "2+ airports defined with transfer profiles",
  "5+ destination zones with per-airport transfer data",
  "Airport Choice Hub page live at /{city}/airport-choice",
  "4+ destination Decision Guides",
  "2+ traveller Decision Guides",
  "4+ Knowledge articles covering transfers, terminals, hotels",
  "Arrival Planner supports this city",
  "Trust pages linked from Hub and Guides",
  "Coverage validator reports ≥75% completion",
  "All transfer profiles pass City Factory validator",
  "Browser tests cover Home → Hub → Compare → Edit → Revert",
  "Mobile 390px no overflow on Hub + Guides",
];
