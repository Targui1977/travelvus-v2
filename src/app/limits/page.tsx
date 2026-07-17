import type { Metadata } from "next";
import TrustPage from "@/components/ui/TrustPage";

export const metadata: Metadata = {
  title: "Limitations — What Travelvus Cannot Do | Travelvus",
  description: "Honest limitations of the Travelvus Decision Engine. Transfer estimates, illustrative fares, and what our comparisons can and cannot tell you.",
};

export default function Page() {
  return (
    <TrustPage
      title="Limitations"
      description="Being honest about what our engine can and cannot do. We believe transparency about limitations builds more trust than pretending to have perfect information."
      lastReviewed="July 2026"
      sections={[
        {
          heading: "Transfer times are estimates",
          body: "Transfer times are based on official timetables and include reasonable allowances for walking, waiting, and platform changes. Actual journey times vary with: real-time train frequency, platform changes, crowding, luggage, mobility needs, and unfamiliarity with the station. Add 10–15 minutes if you're new to the city or travelling during peak hours.",
        },
        {
          heading: "Airfares are illustrative",
          body: "The ticket prices shown in our comparisons are illustrative planning estimates — not live fares. Real airfares vary by: booking date, travel date, season, demand, airline, cabin class, and booking window. Our engine shows you how the cost comparison works — but you should check current fares on your booking platform before purchasing. The relative comparison (which airport is cheaper once all costs are counted) is usually stable even as absolute fares change.",
        },
        {
          heading: "Timetables and service patterns change",
          body: "Public transport timetables change. Engineering works, strikes, and service disruptions are not reflected in our data. Night service patterns (e.g., London Night Tube is Friday and Saturday only) are noted in service window descriptions. If you're travelling during a known disruption period, check the operator's website for current status.",
        },
        {
          heading: "We don't account for traffic",
          body: "Transfer times assume normal operating conditions. Bus transfers (Orlybus, Roissybus, National Express coaches) can take significantly longer during peak traffic. If your arrival coincides with rush hour and you're taking a bus, add 15–30 minutes. Train and Tube transfers are not affected by road traffic.",
        },
        {
          heading: "One-way comparison only",
          body: "Our comparisons cover one direction — airport to destination. Return journeys may differ: different departure times mean different transfer options, and some routes have asymmetric pricing. We plan to add return-journey comparison in a future update.",
        },
        {
          heading: "Limited origin cities",
          body: "Currently all comparisons assume Berlin as the origin. The airfare comparison uses illustrative fares in EUR. Future versions will support multiple origin cities. The transfer analysis (airport to destination) is independent of origin, so our destination-specific transfer recommendations remain valid regardless of where you're flying from.",
        },
        {
          heading: "No real-time disruption data",
          body: "We don't integrate live disruption feeds, traffic data, or real-time transit information. Always check your transport operator's website or app on the day of travel for current conditions, especially during: severe weather, public holidays, planned engineering works, or strike action.",
        },
        {
          heading: "Not a booking service",
          body: "Travelvus is a decision-support tool — not a booking platform. We don't sell tickets, process payments, or guarantee availability. Our role is to help you understand which airport is better for your specific trip before you book. Once you've decided, book through your preferred airline and check transfer details with the transport operator.",
        },
      ]}
    />
  );
}
