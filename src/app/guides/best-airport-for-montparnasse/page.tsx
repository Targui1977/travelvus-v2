import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Airport for Montparnasse — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for Montparnasse? Compare Charles de Gaulle (CDG) vs Orly (ORY) — transfer costs, times, and real trip cost.",
  alternates: { canonical: "/guides/best-airport-for-montparnasse" },
};

const guide: GuideConfig = {
  slug: "best-airport-for-montparnasse",
  type: "destination",
  cityId: "paris",
  destinationId: "montparnasse",
  title: "Best Airport for Montparnasse — CDG or Orly?",
  description: "Which Paris airport is best for Montparnasse? Compare transfer costs, times, and real trip cost.",
  headline: "Which airport is best for Montparnasse?",
  intro: "Montparnasse is in southern Paris — and Orly has a direct advantage. Orlybus runs straight to Denfert-Rochereau in ~30 min, with Montparnasse about five minutes further by Metro. CDG's RER B also runs direct to Denfert-Rochereau (~40 min), so the rail route is simpler than it used to be — but the total transfer to Montparnasse is still about 45 minutes. Here's how they compare.",
  airports: [
    { code: "ORY", name: "Orly", why: "Orlybus runs direct to Denfert-Rochereau in ~30 min; from there it's a short Metro ride to Montparnasse, about 35 minutes total. Orly is physically closer to southern Paris. The Orlybus fare is about €11 (approximate) — the lowest-cost airport transfer to this side of the city.", transferNote: "Orlybus ~€11 (approx), ~35 min, 1 interchange to Montparnasse" },
    { code: "CDG", name: "Charles de Gaulle", why: "CDG's RER B runs direct to Denfert-Rochereau in ~40 min, then a short Metro to Montparnasse — about 45 minutes total. One interchange, €14. CDG often has cheaper airfares and more airline choice, which can offset the longer transfer for budget-conscious travellers.", transferNote: "RER B + Metro €14, ~45 min, 1 interchange to Montparnasse" },
  ],
  transferFacts: [
    { label: "ORY → Montparnasse", value: "~€11", note: "Orlybus + Metro, ~35 min (approximate)" },
    { label: "CDG → Montparnasse", value: "€14", note: "RER B + Metro, ~45 min" },
    { label: "ORY → Denfert-Rochereau", value: "~€11", note: "Orlybus direct, ~30 min (approximate)" },
    { label: "CDG → Denfert-Rochereau", value: "€14", note: "RER B direct, ~40 min" },
  ],
  takeaway: "Orly is the better airport for Montparnasse — Orlybus reaches Denfert-Rochereau in ~30 minutes and Montparnasse in about 35, for around €11 (approximate). CDG's direct RER B to Denfert takes ~40 minutes (~45 total), so it remains competitive if the airfare is meaningfully cheaper. Use the Decision Engine to see which wins for your specific trip.",
  ctaLabel: "Compare CDG vs ORY for Montparnasse →",
  ctaHref: buildHubCompareUrl("paris", "montparnasse"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Best Airport for La Défense", href: "/guides/best-airport-for-la-defense" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "October 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
