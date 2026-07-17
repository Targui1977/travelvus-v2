import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Airport for Gare du Nord — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for Gare du Nord? Compare Charles de Gaulle (CDG) vs Orly (ORY) — CDG has a direct RER B connection in 35 min.",
};

const guide: GuideConfig = {
  slug: "best-airport-for-gare-du-nord",
  type: "destination",
  cityId: "paris",
  destinationId: "gare-du-nord",
  title: "Best Airport for Gare du Nord — CDG or Orly?",
  description: "Which Paris airport is best for Gare du Nord? CDG has a direct RER B connection in 35 min. Compare transfer costs, times, and real trip cost.",
  headline: "Which airport is best for Gare du Nord?",
  intro: "Gare du Nord is one of Paris's major railway stations — and CDG has a direct RER B connection that takes just 35 minutes. No changes, no shuttle transfers. Orly requires the Orlyval shuttle plus RER B, taking 55 minutes. For anyone arriving at Gare du Nord — especially Eurostar or Thalys passengers making a connection — CDG is the obvious choice.",
  airports: [
    { code: "CDG", name: "Charles de Gaulle", why: "RER B runs direct from CDG to Gare du Nord in 35 minutes — the fastest airport-to-station connection in Paris. No interchanges, trains every 10–15 minutes. Ideal for travellers connecting to Eurostar, Thalys, or TGV services.", transferNote: "RER B direct, €12, ~35 min, 0 interchanges" },
    { code: "ORY", name: "Orly", why: "Orly requires Orlyval to Antony, then RER B to Gare du Nord — about 55 minutes total. The Orlyval premium adds cost, and the interchange at Antony adds complexity. Only worth it if the Orly airfare is dramatically cheaper.", transferNote: "Orlyval → RER B, €15, ~55 min, 1 interchange" },
  ],
  transferFacts: [
    { label: "CDG → Gare du Nord", value: "€12", note: "RER B direct, ~35 min — fastest connection" },
    { label: "ORY → Gare du Nord", value: "€15", note: "Orlyval + RER B, ~55 min" },
    { label: "CDG → Central Paris", value: "€12", note: "RER B direct, ~40 min" },
    { label: "ORY → Central Paris", value: "€15", note: "Orlyval + RER B, ~50 min" },
  ],
  takeaway: "CDG is overwhelmingly the better airport for Gare du Nord — 35 minutes direct on RER B vs 55 minutes with a change from Orly. Unless there's an exceptional Orly airfare deal, CDG is the right choice. Use the Decision Engine to confirm with real numbers.",
  ctaLabel: "Compare CDG vs ORY for Gare du Nord →",
  ctaHref: buildHubCompareUrl("paris", "gare-du-nord"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Best Airport for La Défense", href: "/guides/best-airport-for-la-defense" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "July 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
