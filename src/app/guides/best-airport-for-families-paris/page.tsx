import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Paris Airport for Families — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for families with children and luggage? Compare CDG vs Orly — direct trains, step-free access, baggage costs, and transfer ease.",
  alternates: { canonical: "/guides/best-airport-for-families-paris" },
};

const guide: GuideConfig = {
  slug: "best-airport-for-families-paris",
  type: "traveller",
  cityId: "paris",
  travellerScenario: "family",
  title: "Best Paris Airport for Families — CDG or Orly?",
  description: "Which Paris airport is best for families? Compare direct trains, step-free access, baggage costs, and transfer ease for travelling with children.",
  headline: "Which Paris airport is best for families?",
  intro: "Travelling with children and luggage changes the airport equation. Direct trains matter more than saving a few euros. Both Paris airports now have one: Orly's Metro 14 runs direct to Châtelet in ~25 minutes, and CDG's RER B reaches it in ~35–40. Orly is slightly easier for central and southern Paris — its taxis are also cheaper (€36–45 vs €56–65). Here's how they compare for families.",
  airports: [
    { code: "ORY", name: "Orly", why: "Orly is the slight lean for families heading to central or southern Paris. Metro 14 runs direct to Châtelet in ~25 minutes with no shuttle and no interchange, and the airport is compact — less walking with tired children. Official taxis are €36–45 flat. The trade-off: fewer family facilities than CDG and fewer long-haul routes.", transferNote: "Metro 14 direct ~25 min, €14, taxis €36–45, compact terminal" },
    { code: "CDG", name: "Charles de Gaulle", why: "CDG remains strong when you need long-haul routes or are staying on the Right Bank. RER B runs direct to Châtelet and Gare du Nord in ~35–40 minutes for the same €14, with step-free access at major stations and luggage space on the train. Larger terminals mean more family facilities — play areas, family security lanes and baby-changing rooms — but also longer walks.", transferNote: "RER B direct ~35–40 min, €14, step-free at major stations, taxis €56–65" },
  ],
  transferFacts: [
    { label: "CDG → Central Paris", value: "€14", note: "RER B direct, ~35–40 min, step-free at major stations" },
    { label: "ORY → Central Paris", value: "€14", note: "Metro 14 direct, ~25 min, no interchange" },
    { label: "ORY taxi", value: "€36–45", note: "Official flat fare — cheaper for a family group" },
    { label: "CDG taxi", value: "€56–65", note: "Official flat fare" },
  ],
  takeaway: "Orly is the slight lean for families heading to central or southern Paris: Metro 14 is direct, the terminal is compact, and taxis are cheaper. CDG wins when you need long-haul routes, Right Bank destinations or its larger family facilities. Both rail options cost the same €14 — use the Decision Engine to compare total costs including baggage.",
  ctaLabel: "Compare CDG vs ORY with baggage →",
  ctaHref: buildHubCompareUrl("paris", "central-paris"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "October 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
