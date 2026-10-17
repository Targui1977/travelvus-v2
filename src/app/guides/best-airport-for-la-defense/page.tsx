import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Airport for La Défense — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for La Défense business district? Compare Charles de Gaulle (CDG) vs Orly (ORY) — transfer costs, times, and real trip cost.",
  alternates: { canonical: "/guides/best-airport-for-la-defense" },
};

const guide: GuideConfig = {
  slug: "best-airport-for-la-defense",
  type: "destination",
  cityId: "paris",
  destinationId: "la-defense",
  title: "Best Airport for La Défense — CDG or Orly?",
  description: "Which Paris airport is best for La Défense? Compare transfer costs, times, and real trip cost for Paris's business district.",
  headline: "Which airport is best for La Défense?",
  intro: "La Défense is Europe's largest business district, west of central Paris. Neither airport has a direct connection — both require one change. But since Metro 14 began running direct to Châtelet, Orly has become the faster option: Metro 14 then RER A takes about 40 minutes, versus about 50 from CDG. Both cost €14. For business travellers, Orly is now the better ground connection.",
  airports: [
    { code: "ORY", name: "Orly", why: "Orly reaches La Défense via Metro 14 direct to Châtelet (~25 min), then the RER A west (~10 min) — about 40 minutes total with one interchange. The airport ticket costs €14. Orly is also compact, which shortens the walk from gate to train.", transferNote: "Metro 14 → RER A, €14, ~40 min, 1 interchange" },
    { code: "CDG", name: "Charles de Gaulle", why: "CDG reaches La Défense via RER B to Châtelet then the RER A west — about 50 minutes with one interchange and the same €14 ticket. CDG compensates with more airline choice for business travellers and better lounge and fast-track options, and remains the practical choice for long-haul.", transferNote: "RER B → RER A, €14, ~50 min, 1 interchange" },
  ],
  transferFacts: [
    { label: "CDG → La Défense", value: "€14", note: "RER B → RER A, ~50 min, 1 change" },
    { label: "ORY → La Défense", value: "€14", note: "Metro 14 → RER A, ~40 min, 1 change" },
    { label: "CDG → Châtelet", value: "€14", note: "RER B direct, ~35–40 min" },
    { label: "ORY → Châtelet", value: "€14", note: "Metro 14 direct, ~25 min" },
  ],
  takeaway: "Orly is now the faster airport for La Défense — about 40 minutes via Metro 14 and the RER A, versus about 50 from CDG. Both cost €14 by rail. CDG still wins on airline choice, lounges and long-haul routes, so choose it when the flight matters more than the final 40 minutes.",
  ctaLabel: "Compare CDG vs ORY for La Défense →",
  ctaHref: buildHubCompareUrl("paris", "la-defense"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "October 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
