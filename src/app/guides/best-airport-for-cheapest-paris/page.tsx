import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Cheapest Paris Airport — CDG or Orly? | Travelvus",
  description: "Which Paris airport is cheapest? Compare CDG vs Orly — real trip cost including baggage, seat selection, and airport transfers.",
};

const guide: GuideConfig = {
  slug: "best-airport-for-cheapest-paris",
  type: "traveller",
  cityId: "paris",
  travellerScenario: "lowest-cost",
  title: "Cheapest Paris Airport — CDG or Orly?",
  description: "Which Paris airport is cheapest? Real trip cost comparison including baggage, seat selection, and airport transfers.",
  headline: "Which Paris airport is actually cheapest?",
  intro: "Ticket prices can be misleading. A €60 fare that becomes €120 after baggage, seat selection, and a €15 airport transfer isn't cheaper than an €80 all-in fare. Here's how CDG and Orly compare on real trip cost — the number that actually matters.",
  airports: [
    { code: "CDG", name: "Charles de Gaulle", why: "CDG often wins on total cost. Transfer is cheaper (€12 RER B vs €15 Orlyval+RER). More airline competition means lower base fares. And with direct RER access, you save time as well as money. The combination of lower transfer cost and competitive airfares makes CDG the value champion for most Paris destinations.", transferNote: "Transfer €12, direct RER B, more airline competition" },
    { code: "ORY", name: "Orly", why: "Orly's airfares can sometimes be lower — especially on European budget airlines. But the Orlyval premium (€9.30 of the €15 transfer) erodes that advantage. And once you add baggage fees (which budget airlines charge), the apparent savings often disappear. For Montparnasse, Orly wins — but for most other destinations, CDG is cheaper.", transferNote: "Transfer €15, Orlyval premium €9.30, budget airlines may charge for bags" },
  ],
  transferFacts: [
    { label: "CDG transfer cost", value: "€12", note: "RER B to central Paris" },
    { label: "ORY transfer cost", value: "€15", note: "Orlyval + RER B to central Paris" },
    { label: "CDG airfare range", value: "€80+", note: "Illustrative — varies by route and season" },
    { label: "ORY airfare range", value: "€60+", note: "Often cheaper on budget airlines" },
  ],
  takeaway: "CDG is usually the cheaper total journey despite sometimes having higher ticket prices. The €12 direct transfer beats Orly's €15 shuttle-dependent connection. But for Montparnasse — where Orlybus costs only €11 — Orly can win. Use the Decision Engine to see the real numbers for your specific trip.",
  ctaLabel: "Compare real cost CDG vs ORY →",
  ctaHref: buildHubCompareUrl("paris", "central-paris"),
  relatedGuides: [
    { label: "Best Airport for Families", href: "/guides/best-airport-for-families-paris" },
    { label: "Best Airport for Montparnasse", href: "/guides/best-airport-for-montparnasse" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "July 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
