import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Airport for Montparnasse — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for Montparnasse? Compare Charles de Gaulle (CDG) vs Orly (ORY) — transfer costs, times, and real trip cost.",
};

const guide: GuideConfig = {
  slug: "best-airport-for-montparnasse",
  type: "destination",
  cityId: "paris",
  destinationId: "montparnasse",
  title: "Best Airport for Montparnasse — CDG or Orly?",
  description: "Which Paris airport is best for Montparnasse? Compare transfer costs, times, and real trip cost.",
  headline: "Which airport is best for Montparnasse?",
  intro: "Montparnasse is in southern Paris — and Orly has a direct advantage. Orlybus runs straight to Denfert-Rochereau in ~35 min, while CDG requires a longer RER B + Metro connection. But CDG's lower airfares can still make it the cheaper total journey. Here's how they compare.",
  airports: [
    { code: "ORY", name: "Orly", why: "Orlybus direct to Denfert-Rochereau takes ~35 min — the fastest connection to Montparnasse of any Paris airport. From there it's a short Metro ride or walk. Orly is physically closer to southern Paris, making it the natural choice for this destination.", transferNote: "Orlybus €11, ~35 min, 1 interchange to Montparnasse" },
    { code: "CDG", name: "Charles de Gaulle", why: "CDG requires RER B to Denfert-Rochereau (~50 min) then a Metro connection. The transfer is longer and more complex than Orly. However, CDG often has cheaper airfares and more airline choice — which can offset the longer transfer for budget-conscious travellers.", transferNote: "RER B + Metro €12, ~55 min, 1 interchange to Montparnasse" },
  ],
  transferFacts: [
    { label: "ORY → Montparnasse", value: "€11", note: "Orlybus + Metro, ~35 min" },
    { label: "CDG → Montparnasse", value: "€12", note: "RER B + Metro, ~55 min" },
    { label: "ORY → Denfert-Rochereau", value: "€11", note: "Orlybus direct, ~30 min" },
    { label: "CDG → Denfert-Rochereau", value: "€12", note: "RER B direct, ~50 min" },
  ],
  takeaway: "Orly is the better airport for Montparnasse — it's closer, the transfer is faster, and Orlybus is reliable. But CDG's lower airfares can still win on total cost if the ticket price gap is wide enough. Use the Decision Engine to see which wins for your specific trip.",
  ctaLabel: "Compare CDG vs ORY for Montparnasse →",
  ctaHref: buildHubCompareUrl("paris", "montparnasse"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Best Airport for La Défense", href: "/guides/best-airport-for-la-defense" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "July 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
