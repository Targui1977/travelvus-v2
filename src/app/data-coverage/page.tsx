import type { Metadata } from "next";
import Link from "next/link";
import TrustPage from "@/components/ui/TrustPage";
import { SUPPORTED_CITIES, getCityLabel, getCityAirports } from "@/data/cities";
import { getCityDestinationIds, getCityDestinationShortLabel } from "@/lib/city-engine";
import { getGuidesByCity } from "@/data/guide-registry";
import { getKnowledgeByCity } from "@/data/knowledge-registry";

export const metadata: Metadata = {
  title: "Data Coverage — Supported Cities & Airports | Travelvus",
  description: "Travelvus currently supports London, Paris, and New York airports. See our full data coverage: airports, destinations, guides, and knowledge articles.",
};

export default function Page() {
  return (
    <TrustPage
      title="Data Coverage"
      description="What we cover, which cities and airports are supported, and what's coming next."
      lastReviewed="July 2026"
      sections={[
        {
          heading: "Supported cities",
          body: (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SUPPORTED_CITIES.map(cityId => {
                const airports = getCityAirports(cityId);
                const dests = getCityDestinationIds(cityId);
                const guides = getGuidesByCity(cityId);
                const knowledge = getKnowledgeByCity(cityId);
                return (
                  <div key={cityId} style={{ padding: "20px 24px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 }}>
                    <div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, color: "var(--ink)", marginBottom: 12 }}>{getCityLabel(cityId)}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                      <div>
                        <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)", display: "block", marginBottom: 4 }}>Airports</span>
                        {airports.map(a => <div key={a.code} style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>{a.name} ({a.code})</div>)}
                      </div>
                      <div>
                        <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)", display: "block", marginBottom: 4 }}>Destinations</span>
                        {dests.slice(0, 5).map(d => <div key={d} style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>{getCityDestinationShortLabel(cityId, d)}</div>)}
                      </div>
                      <div>
                        <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)", display: "block", marginBottom: 4 }}>Content</span>
                        <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>{guides.length} guides</div>
                        <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>{knowledge.length} articles</div>
                        <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>Arrival Planner</div>
                        <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>Airport Hub</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 14 }}>
                      <Link href={`/${cityId}/airport-choice`} style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 10, color: "var(--copper)", textDecoration: "none", letterSpacing: "0.04em" }}>Airport Choice Hub →</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ),
        },
        {
          heading: "What's not yet covered",
          body: "We currently support Berlin as the origin city for all comparisons. Future expansions will add more origin cities and additional destination airports (Gatwick, Luton, London City, LaGuardia). Our City Factory framework means adding a new city requires only data entry — no engine changes. If you'd like to see a specific city or airport added, let us know through the feedback form.",
        },
      ]}
    />
  );
}
