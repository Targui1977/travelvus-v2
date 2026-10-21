/**
 * Travelvus — Site inventory: single source of truth for public routes.
 *
 * Phase 123.1 — used by sitemap.ts, robots-adjacent tooling and
 * regression tests. Any new indexable route must be registered here.
 */

import { getAllGuideSlugs } from "@/data/guide-registry";
import { getAllKnowledgeSlugs } from "@/data/knowledge-registry";
import { SUPPORTED_CITIES } from "@/data/cities";

export const SITE_HOST = "https://www.travelvus.com";

/** Internal tools: noindex + excluded from sitemap by design. */
export const NOINDEX_ROUTES = [
  "/coverage",
  "/result",
  "/decision-master",
  "/visual-system-preview",
] as const;

/**
 * Every static (non-dynamic) public route that should be indexable.
 * Curated against the App Router route tree (83 page.tsx minus dynamic
 * templates minus the 4 NOINDEX_ROUTES above = 77 entries).
 */
export const STATIC_INDEXABLE_ROUTES: string[] = [
  // Home
  "/",
  // City hubs & choice hubs
  "/london-airports",
  "/london/airport-choice",
  "/new-york-airports",
  "/new-york/airport-choice",
  "/paris-airports",
  "/paris/airport-choice",
  "/london-airport-decision-center",
  // Static guides
  "/guides/best-airport-for-central-london",
  "/guides/best-airport-for-east-london",
  "/guides/best-airport-for-north-london",
  "/guides/best-airport-for-south-london",
  "/guides/best-airport-for-west-london",
  "/guides/best-london-airport-for-budget-travellers",
  "/guides/best-london-airport-for-business-travel",
  "/guides/best-london-airport-for-families",
  "/guides/cheapest-london-airport",
  "/guides/fastest-london-airport",
  "/guides/heathrow-vs-gatwick",
  "/guides/best-airport-for-central-paris",
  "/guides/best-airport-for-cheapest-paris",
  "/guides/best-airport-for-families-paris",
  "/guides/best-airport-for-gare-du-nord",
  "/guides/best-airport-for-la-defense",
  "/guides/best-airport-for-montparnasse",
  "/guides/cdg-vs-orly",
  "/guides/best-airport-for-manhattan",
  "/guides/jfk-vs-newark",
  "/guides/real-cost-of-a-flight",
  "/guides/total-travel-time-comparison",
  "/guides/dubrovnik-car-rental-cross-border-fees",
  "/guides/rental-car-pickup-flight-delayed",
  // Compare pages
  "/compare/heathrow-vs-stansted",
  "/compare/heathrow-vs-gatwick",
  "/compare/gatwick-vs-stansted",
  "/compare/heathrow-vs-luton",
  "/compare/heathrow-vs-london-city",
  "/compare/gatwick-vs-luton",
  "/compare/gatwick-vs-london-city",
  "/compare/luton-vs-london-city",
  "/compare/stansted-vs-luton",
  "/compare/stansted-vs-london-city",
  "/compare/amsterdam-to-london",
  "/compare/barcelona-to-london",
  "/compare/berlin-to-london",
  "/compare/dublin-to-london",
  "/compare/frankfurt-to-london",
  "/compare/lisbon-to-london",
  "/compare/madrid-to-london",
  "/compare/milan-to-london",
  "/compare/paris-to-london",
  "/compare/rome-to-london",
  // Trust & support
  "/methodology",
  "/editorial-standards",
  "/data-coverage",
  "/limits",
  "/planner",
  "/about",
  "/contact",
  "/questions/london-airport-break-even",
  // Legacy articles (still valid routes)
  "/google-flight-matrix",
  "/expedia-taap",
  "/vrl-bus-booking",
  "/trimet-trip-planner",
  "/top-rated-tourists-attractions-in-rome",
  "/tsa-precheck-cost",
  "/kayak-flights",
  "/points-guy",
  "/irctc-train-ticket-booking",
  "/defense-travel-system",
  "/bart-trip-planner",
  "/mta-trip-planner",
  "/aaa-travel",
  "/costco-vacation",
  "/tsa-lock",
  "/wego-flight",
  "/ultimate-guide-to-interrailing-explore-europe-by-train-with-ease",
  "/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide",
  "/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system",
];

/**
 * All public, indexable URLs (deduplicated, sorted).
 * Dynamic guide slugs that collide with a static route are dropped:
 * the static page always wins in the App Router.
 */
export function getAllPublicUrls(): string[] {
  const urls = new Set<string>([...STATIC_INDEXABLE_ROUTES]);

  for (const slug of getAllGuideSlugs()) {
    urls.add(`/guides/${slug}`);
  }
  for (const slug of getAllKnowledgeSlugs()) {
    urls.add(`/knowledge/${slug}`);
  }
  // City hub pairs emitted from SUPPORTED_CITIES (already in the static
  // list, kept here so hub coverage follows the city registry).
  for (const cityId of SUPPORTED_CITIES) {
    urls.add(`/${cityId}/airport-choice`);
    urls.add(`/${cityId}-airports`);
  }

  return [...urls].sort();
}
