import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Airport for La Défense — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for La Défense business district? Compare Charles de Gaulle (CDG) vs Orly (ORY) — transfer costs, times, and real trip cost.",
};

const guide: GuideConfig = {
  slug: "best-airport-for-la-defense",
  type: "destination",
  cityId: "paris",
  destinationId: "la-defense",
  title: "Best Airport for La Défense — CDG or Orly?",
  description: "Which Paris airport is best for La Défense? Compare transfer costs, times, and real trip cost for Paris's business district.",
  headline: "Which airport is best for La Défense?",
  intro: "La Défense is Europe's largest business district, west of central Paris. Neither airport has a direct connection — both require at least one change. CDG is closer and has a faster RER B → RER A connection. Orly requires Orlyval + two RER changes, making it noticeably slower. For business travellers, CDG is the clear winner.",
  airports: [
    { code: "CDG", name: "Charles de Gaulle", why: "CDG reaches La Défense via RER B to Châtelet then RER A west — about 55 min total. While not direct, this is the fastest option. CDG also offers more airline choice for business travellers and better lounge/fast-track options.", transferNote: "RER B → RER A, €12, ~55 min, 1 interchange" },
    { code: "ORY", name: "Orly", why: "Orly requires Orlyval to Antony, RER B to Châtelet, then RER A to La Défense — about 70 min with two interchanges. The Orlyval premium (€9.30) also adds to the cost. Only choose Orly if the airfare is significantly cheaper.", transferNote: "Orlyval → RER B → RER A, €15, ~70 min, 2 interchanges" },
  ],
  transferFacts: [
    { label: "CDG → La Défense", value: "€12", note: "RER B → RER A, ~55 min, 1 change" },
    { label: "ORY → La Défense", value: "€15", note: "Orlyval → RER B → RER A, ~70 min, 2 changes" },
    { label: "CDG → Châtelet", value: "€12", note: "RER B direct, ~35 min" },
    { label: "ORY → Châtelet", value: "€15", note: "Orlyval + RER B, ~50 min" },
  ],
  takeaway: "CDG is the better airport for La Défense. It's faster (55 min vs 70 min), cheaper on transfer (€12 vs €15), and has better business-travel facilities. Orly only makes sense if you find a significantly cheaper airfare — use the Decision Engine to check.",
  ctaLabel: "Compare CDG vs ORY for La Défense →",
  ctaHref: buildHubCompareUrl("paris", "la-defense"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "July 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
