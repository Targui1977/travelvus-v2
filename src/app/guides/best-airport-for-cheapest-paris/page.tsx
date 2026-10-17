import type { Metadata } from "next";
import type { GuideConfig } from "@/lib/guide-model";
import GuidePage from "@/components/guide/GuidePage";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Cheapest Paris Airport — CDG or Orly? | Travelvus",
  description: "Which Paris airport is cheapest? Compare CDG vs Orly — real trip cost including baggage, seat selection, and airport transfers.",
  alternates: { canonical: "/guides/best-airport-for-cheapest-paris" },
};

const guide: GuideConfig = {
  slug: "best-airport-for-cheapest-paris",
  type: "traveller",
  cityId: "paris",
  travellerScenario: "lowest-cost",
  title: "Cheapest Paris Airport — CDG or Orly?",
  description: "Which Paris airport is cheapest? Real trip cost comparison including baggage, seat selection, and airport transfers.",
  headline: "Which Paris airport is actually cheapest?",
  intro: "Ticket prices can be misleading. A €60 fare that becomes €120 after baggage, seat selection, and an airport transfer isn't cheaper than an €80 all-in fare. And the transfer no longer separates CDG from Orly: both use the same €14 Paris Region ⇄ Airports ticket. Here's how they compare on real trip cost — the number that actually matters.",
  airports: [
    { code: "ORY", name: "Orly", why: "Orly is the cheaper airport once you are on the ground: the unified airport ticket costs €14 by Metro 14, and official taxis are €36–45 flat versus €56–65 from CDG. On airfare, Orly competes mainly with budget and leisure carriers — but baggage and seat fees can erase the ticket saving. There is no single cheapest airport: compare the all-in fare.", transferNote: "Transfer €14 by Metro 14, taxis €36–45, budget airlines may charge for bags" },
    { code: "CDG", name: "Charles de Gaulle", why: "CDG uses the same €14 airport ticket on the RER B, so rail cost is identical. Its advantage is airline competition and long-haul route density, which can produce lower all-in fares on some routes. Its weakness is ground cost: official taxis are €56–65 flat. CDG is not automatically cheaper — the airfare decides.", transferNote: "Transfer €14 by RER B, taxis €56–65, widest airline choice" },
  ],
  transferFacts: [
    { label: "CDG transfer cost", value: "€14", note: "RER B to central Paris" },
    { label: "ORY transfer cost", value: "€14", note: "Metro 14 to Châtelet — same unified ticket" },
    { label: "ORY taxi", value: "€36–45", note: "Official flat fare — cheaper than CDG" },
    { label: "CDG taxi", value: "€56–65", note: "Official flat fare" },
  ],
  takeaway: "There is no single cheapest Paris airport. Rail transfers cost the same €14 from both CDG and Orly, so the decision comes down to the airfare, baggage and seat fees — and how you leave the airport. Orly is cheaper by taxi (€36–45 vs €56–65); CDG has more airline competition. Compare the all-in trip, not the headline fare.",
  ctaLabel: "Compare real cost CDG vs ORY →",
  ctaHref: buildHubCompareUrl("paris", "central-paris"),
  relatedGuides: [
    { label: "Best Airport for Families", href: "/guides/best-airport-for-families-paris" },
    { label: "Best Airport for Montparnasse", href: "/guides/best-airport-for-montparnasse" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
  ],
  lastReviewed: "October 2026",
};

export default function Page() { return <GuidePage guide={guide} />; }
