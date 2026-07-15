import type { Metadata } from "next";
import {
  AirportComparisonMap,
  NeighbourhoodDecisionMap,
  JourneyDiagram,
  DecisionFlow,
  RealCostInfographic,
  JourneyTimeInfographic,
  ComparisonGraphic,
  TimelineGraphic,
  TrustGraphic,
  HeroEditorialPlaceholder,
} from "@/components/visual";
import type { AirportMarker } from "@/components/visual";

export const metadata: Metadata = {
  title: "Visual System Preview — Development | Travelvus",
  robots: "noindex, nofollow",
};

export default function VisualSystemPreview() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh", padding: "20px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", background: "var(--paper)", borderRadius: 14, padding: "32px 0", boxShadow: "0 1px 2px rgba(30,42,51,.04), 0 4px 16px rgba(30,42,51,.06)" }}>
        <div style={{ padding: "0 32px 28px", borderBottom: "1px solid var(--line)", marginBottom: 28 }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", background: "var(--navy)", padding: "5px 12px", borderRadius: 4, display: "inline-block", marginBottom: 12 }}>
            Internal Development Preview
          </span>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 28, color: "var(--ink)", margin: "0 0 8px" }}>
            Visual Decision System
          </h1>
          <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)", margin: 0 }}>
            All 10 reusable visual components rendered with sample data. Not indexed.
          </p>
        </div>

        {/* 1. AirportComparisonMap */}
        <Section title="1. AirportComparisonMap" border>
          <AirportComparisonMap
            cityName="Central London"
            airports={[
              { code: "LHR", name: "Heathrow", distance: "24 km west", isWinner: true },
              { code: "LCY", name: "London City", distance: "10 km east" },
              { code: "LGW", name: "Gatwick", distance: "45 km south" },
              { code: "STN", name: "Stansted", distance: "55 km northeast" },
              { code: "LTN", name: "Luton", distance: "45 km north" },
            ] satisfies AirportMarker[]}
          />
        </Section>

        {/* 2. NeighbourhoodDecisionMap */}
        <Section title="2. NeighbourhoodDecisionMap" border>
          <NeighbourhoodDecisionMap
            cityName="Central London"
            airports={[
              { code: "LHR", name: "Heathrow", color: "#1E2A33" },
              { code: "LCY", name: "London City", color: "#B85C38" },
              { code: "LGW", name: "Gatwick", color: "#8A959D" },
              { code: "STN", name: "Stansted", color: "#6B7078" },
            ]}
            neighbourhoods={[
              { name: "West End", bestAirport: "Heathrow", bestAirportCode: "LHR" },
              { name: "Canary Wharf", bestAirport: "London City", bestAirportCode: "LCY" },
              { name: "Clapham", bestAirport: "Gatwick", bestAirportCode: "LGW" },
              { name: "Dalston", bestAirport: "Stansted", bestAirportCode: "STN" },
              { name: "Paddington", bestAirport: "Heathrow", bestAirportCode: "LHR" },
              { name: "Stratford", bestAirport: "Stansted", bestAirportCode: "STN" },
            ]}
          />
        </Section>

        {/* 3. JourneyDiagram */}
        <Section title="3. JourneyDiagram" border>
          <JourneyDiagram
            stages={[
              { label: "Home", type: "start" },
              { label: "Departure transfer", type: "transfer" },
              { label: "Flight", type: "flight" },
              { label: "Arrival transfer", type: "arrival" },
              { label: "Destination", type: "destination" },
            ]}
          />
        </Section>

        {/* 4. DecisionFlow */}
        <Section title="4. DecisionFlow" border>
          <DecisionFlow
            stages={[
              { label: "Where are you going?", detail: "Identify your London destination" },
              { label: "Which airport serves your route?", detail: "Heathrow, Gatwick or Stansted?" },
              { label: "What type of traveller are you?", detail: "Business, family or budget?" },
              { label: "Compare total door-to-door journey", detail: "Ticket + baggage + transfer + time" },
            ]}
            verdictLabel="Heathrow wins"
          />
        </Section>

        {/* 5. RealCostInfographic */}
        <Section title="5. RealCostInfographic" border>
          <RealCostInfographic
            segments={[
              { label: "Ticket", amount: 58 },
              { label: "Baggage", amount: 42 },
              { label: "Transfer", amount: 71 },
              { label: "Taxi", amount: 0 },
            ]}
            showLiveTag
          />
        </Section>

        {/* 6. JourneyTimeInfographic */}
        <Section title="6. JourneyTimeInfographic" border>
          <JourneyTimeInfographic
            segments={[
              { label: "Transfer", minutes: 40 },
              { label: "Security", minutes: 20 },
              { label: "Flight", minutes: 110 },
              { label: "Arrival", minutes: 35 },
            ]}
            totalLabel="Total journey time"
          />
        </Section>

        {/* 7. ComparisonGraphic */}
        <Section title="7. ComparisonGraphic" border>
          <ComparisonGraphic
            optionA={{ name: "Stansted", code: "STN" }}
            optionB={{ name: "Heathrow", code: "LHR" }}
            metrics={[
              { label: "Total journey cost", valueA: "171", valueB: "144", winner: "B", unit: "€" },
              { label: "Journey time", valueA: "3h 52m", valueB: "2h 41m", winner: "B" },
              { label: "Transfer time", valueA: "50m", valueB: "35m", winner: "B" },
              { label: "Ticket price", valueA: "58", valueB: "126", winner: "A", unit: "€" },
            ]}
            winnerSummary="Heathrow wins on 3 of 4 metrics"
          />
        </Section>

        {/* 8. TimelineGraphic */}
        <Section title="8. TimelineGraphic">
          <TimelineGraphic
            startLabel="Home"
            endLabel="Destination"
            events={[
              { label: "Leave home", time: "14:00", type: "depart" },
              { label: "Arrive LHR", time: "15:30", type: "transit" },
              { label: "Take off", time: "17:30", type: "flight" },
              { label: "Land at STN", time: "18:50", type: "arrival" },
              { label: "Coach departure", time: "20:00", type: "risk" },
              { label: "Arrive hotel", time: "21:10", type: "destination" },
            ]}
          />
        </Section>

        {/* 9. TrustGraphic */}
        <Section title="9. TrustGraphic" border>
          <TrustGraphic
            verified
            lastReviewed="July 2026"
            sources={["TfL", "National Rail", "Heathrow Airport Ltd"]}
            methodologyHref="/methodology"
          />
        </Section>

        {/* 10. HeroEditorialPlaceholder */}
        <Section title="10. HeroEditorialPlaceholder" border>
          <HeroEditorialPlaceholder pageId="preview" src="/home/heathrow-express.webp" alt="Heathrow Express train" />
          <p style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", textAlign: "center" }}>
            Image renders only when src is provided. Renders nothing when omitted.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children, border }: { title: string; children: React.ReactNode; border?: boolean }) {
  return (
    <div style={{ padding: "0 0 20px", marginBottom: 20, borderBottom: border ? "1px solid var(--line)" : "none" }}>
      <h2 style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", margin: "0 32px 14px" }}>
        {title}
      </h2>
      <div style={{ border: "1px solid var(--line)", borderRadius: 12, margin: "0 32px", background: "var(--card)" }}>
        {children}
      </div>
    </div>
  );
}
