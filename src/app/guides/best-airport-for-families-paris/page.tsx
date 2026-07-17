import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Paris Airport for Families — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for families with children and luggage? Compare CDG vs Orly — direct trains, step-free access, baggage costs, and transfer ease.",
};

const guide: GuideConfig = {
  slug: "best-airport-for-families-paris",
  type: "traveller",
  cityId: "paris",
  travellerScenario: "family",
  title: "Best Paris Airport for Families — CDG or Orly?",
  description: "Which Paris airport is best for families? Compare direct trains, step-free access, baggage costs, and transfer ease for travelling with children.",
  headline: "Which Paris airport is best for families?",
  intro: "Travelling with children and luggage changes the airport equation. Direct trains matter more than saving €5. Step-free access becomes essential. And baggage fees hit harder when you're paying for multiple family members. Here's how CDG and Orly compare for families.",
  airports: [
    { code: "CDG", name: "Charles de Gaulle", why: "RER B from CDG runs direct to central Paris with step-free access at major stations like Châtelet and Gare du Nord. No shuttle transfers, no stairs with luggage. The train has dedicated luggage space. And CDG's larger terminals mean more family facilities — play areas, family security lanes, and baby-changing rooms.", transferNote: "RER B direct, step-free access at major stations, luggage space on trains" },
    { code: "ORY", name: "Orly", why: "Orly requires the Orlyval shuttle train — which means getting off the plane, finding the shuttle platform, riding to Antony, then changing to the RER B with all your luggage and children. The interchange adds stress. Orly is smaller and less crowded, which can be a plus — but the transfer complexity usually outweighs this for families.", transferNote: "Orlyval shuttle + RER B change required — harder with luggage and children" },
  ],
  transferFacts: [
    { label: "CDG → Central Paris", value: "€12", note: "RER B direct, step-free, luggage space" },
    { label: "ORY → Central Paris", value: "€15", note: "Orlyval + RER B, 1 change, stairs at Antony" },
    { label: "CDG interchange count", value: "0", note: "Direct to central Paris — no changes needed" },
    { label: "ORY interchange count", value: "1", note: "Must change at Antony — with luggage" },
  ],
  takeaway: "CDG is the better airport for families. Direct RER B means no shuttle changes with tired children and heavy bags. Step-free access at major stations, dedicated luggage space, and better terminal facilities make the journey significantly easier. Use the Decision Engine to compare total costs including baggage for your whole family.",
  ctaLabel: "Compare CDG vs ORY with baggage →",
  ctaHref: buildHubCompareUrl("paris", "central-paris"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "July 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
