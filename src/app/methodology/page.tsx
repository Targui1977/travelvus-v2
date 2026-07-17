import type { Metadata } from "next";
import TrustPage from "@/components/ui/TrustPage";

export const metadata: Metadata = {
  title: "How Travelvus Works — Airport Comparison Methodology",
  description: "How Travelvus evaluates and compares airports. Our methodology for real-cost comparison, transfer profiles, and data-driven recommendations.",
};

export default function Page() {
  return (
    <TrustPage
      title="How Travelvus works"
      description="We compare the complete journey — not just the ticket price. Here's exactly how our Decision Engine evaluates airports and generates recommendations."
      lastReviewed="July 2026"
      sections={[
        {
          heading: "What Travelvus does",
          body: "Travelvus compares two airports for the same trip and answers one question: which one is actually better for your specific situation? We don't just compare airfares. We calculate the real trip cost: ticket + baggage + seat selection + airport transfer — door to door. Then we explain why one option wins, what could change the result, and what trade-offs remain. Our recommendations are data-driven, not editorial opinion.",
        },
        {
          heading: "How we calculate real trip cost",
          body: "Real trip cost is what you actually pay to get from your starting point to your final destination. It includes: (1) The ticket price you entered or the illustrative fare we use for comparison. (2) Checked baggage fees — which vary significantly between full-service and budget airlines. (3) Standard seat selection. (4) Airport transfer costs — the price of getting from the airport to your destination by public transport. We don't include food, parking, or optional upgrades. The comparison uses a single declared currency (EUR for all our current city comparisons) so you're never silently adding GBP to EUR.",
        },
        {
          heading: "How transfer profiles work",
          body: "Each airport has a transfer profile for every supported destination zone. These profiles include the recommended public transport route, the illustrative cost, the typical journey time, the number of interchanges, and the service window (e.g., 'RER B until 00:30'). Transfer profiles are based on official transport authority fares and timetables — TfL for London, RATP/SNCF for Paris, MTA/NJ Transit for New York. Values are illustrative planning estimates, not live fares. They are reviewed periodically and updated when significant changes occur.",
        },
        {
          heading: "Why recommendations vary by destination",
          body: "An airport that's best for one destination may not be best for another — even within the same city. Heathrow is excellent for Paddington (15 minutes direct) but less dominant for Canary Wharf (48 minutes). Orly is better for Montparnasse than for La Défense. Our destination-aware engine accounts for this: changing the destination can change the recommendation. This is why we always ask 'Where exactly are you going?' — because it genuinely matters.",
        },
        {
          heading: "How evidence and confidence work",
          body: "Every recommendation comes with evidence factors — specific data points that drove the result, weighted by importance. Critical factors (like 'the transfer cost reverses the ticket-price advantage') carry more weight than supporting factors (like 'arrival convenience'). We also show confidence levels: a recommendation backed by strong official data gets higher confidence than one based on estimates. We never hide uncertainty — if the cost difference is very small, we say so. If we don't have enough data, we tell you.",
        },
        {
          heading: "How trade-offs are presented",
          body: "No airport is perfect for everyone. We show advantages (what you gain by choosing the recommended option) and trade-offs (what you give up). We also show flip rules — specific conditions that would change the recommendation. For example: 'If you remove the checked bag, the cost gap narrows.' These aren't hypothetical — they're derived from the actual calculation. Every flip rule is falsifiable: you can test it yourself using the Edit controls on the result page.",
        },
        {
          heading: "Data sources and freshness",
          body: "Our data comes from official transport authorities and is reviewed regularly. London: Transport for London (TfL), National Rail, Stansted Express, Heathrow Express. Paris: RATP, SNCF, Paris Aéroport, Île-de-France Mobilités. New York: MTA, NJ Transit, Amtrak, Port Authority of NY & NJ. All datasets reviewed July 2026. Transfer costs are illustrative EUR values converted from local currency at editorial exchange rates. We do not use live FX feeds.",
        },
      ]}
    />
  );
}
