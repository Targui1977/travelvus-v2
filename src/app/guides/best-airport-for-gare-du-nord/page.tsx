import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Best Airport for Gare du Nord — CDG or Orly? | Travelvus",
  description: "Which Paris airport is best for Gare du Nord? Compare Charles de Gaulle (CDG) vs Orly (ORY) — CDG has a direct RER B connection in ~35–40 min.",
  alternates: { canonical: "/guides/best-airport-for-gare-du-nord" },
};

const guide: GuideConfig = {
  slug: "best-airport-for-gare-du-nord",
  type: "destination",
  cityId: "paris",
  destinationId: "gare-du-nord",
  title: "Best Airport for Gare du Nord — CDG or Orly?",
  description: "Which Paris airport is best for Gare du Nord? CDG has a direct RER B connection in ~35–40 min. Compare transfer costs, times, and real trip cost.",
  headline: "Which airport is best for Gare du Nord?",
  intro: "Gare du Nord is one of Paris's major railway stations — and CDG has a direct RER B connection that takes ~35–40 minutes. No changes, no shuttle transfers. Orly now reaches it with one change: Metro 14 to Châtelet, then RER B or D to Gare du Nord, about 45 minutes. For anyone arriving at Gare du Nord — especially Eurostar passengers making a connection — CDG remains the simpler choice.",
  airports: [
    { code: "CDG", name: "Charles de Gaulle", why: "RER B runs direct from CDG to Gare du Nord in ~35–40 minutes — the fastest airport-to-station connection in Paris. No interchanges, trains every 10–15 minutes, €14. Ideal for travellers connecting to Eurostar, Thalys, or TGV services.", transferNote: "RER B direct, €14, ~35–40 min, 0 interchanges" },
    { code: "ORY", name: "Orly", why: "Orly reaches Gare du Nord with one change: Metro 14 direct to Châtelet (~25 min), then RER B or D to Gare du Nord. About 45 minutes total for the same €14 airport ticket. Only worth it if the Orly airfare is significantly cheaper.", transferNote: "Metro 14 → RER B/D, €14, ~45 min, 1 interchange" },
  ],
  transferFacts: [
    { label: "CDG → Gare du Nord", value: "€14", note: "RER B direct, ~35–40 min — fastest connection" },
    { label: "ORY → Gare du Nord", value: "€14", note: "Metro 14 + RER B/D, ~45 min, 1 change" },
    { label: "CDG → Central Paris", value: "€14", note: "RER B direct, ~35–40 min" },
    { label: "ORY → Central Paris", value: "€14", note: "Metro 14 direct, ~25 min" },
  ],
  takeaway: "CDG remains the better airport for Gare du Nord — ~35–40 minutes direct on RER B versus ~45 minutes with one change from Orly. Both cost €14 by rail. Unless there is an exceptional Orly airfare deal, CDG is the right choice. Use the Decision Engine to confirm with real numbers.",
  ctaLabel: "Compare CDG vs ORY for Gare du Nord →",
  ctaHref: buildHubCompareUrl("paris", "gare-du-nord"),
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "Best Airport for La Défense", href: "/guides/best-airport-for-la-defense" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "October 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
