"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { generatePlan } from "@/lib/planner-engine";
import { getCityAirports, getCityLabel, SUPPORTED_CITIES } from "@/data/cities";
import { getCityDestinationIds, getCityDestinationShortLabel, getCityTransfer } from "@/lib/city-engine";
import type { CityId } from "@/data/cities";
import type { PlannerInput, PlannerResult, PlannerPriority, TravellerType, BaggageOption } from "@/lib/planner-model";

const DS = {
  h1: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 36, lineHeight: 1.12, color: "var(--ink)", margin: 0, letterSpacing: "-0.015em" } as React.CSSProperties,
  h2: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: "var(--ink)", margin: 0 } as React.CSSProperties,
  body: { fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.55, color: "var(--muted)" } as React.CSSProperties,
  monoLabel: { fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.07em", textTransform: "uppercase" } as React.CSSProperties,
  card: { padding: "20px 24px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 } as React.CSSProperties,
  pill: (active: boolean) => ({ padding: "10px 16px", borderRadius: 24, border: active ? "1px solid var(--copper)" : "1px solid var(--line)", background: active ? "rgba(184,92,56,0.08)" : "var(--card)", fontFamily: "var(--sans)", fontSize: 13, fontWeight: active ? 600 : 400, color: active ? "var(--copper)" : "var(--muted)", cursor: "pointer", transition: "all 0.15s", minHeight: 44, display: "inline-flex", alignItems: "center" } as React.CSSProperties),
  container: { maxWidth: 720, margin: "0 auto", padding: "0 24px" } as React.CSSProperties,
};

const PRIORITIES: { id: PlannerPriority; label: string }[] = [
  { id: "fastest", label: "Fastest" },
  { id: "cheapest", label: "Cheapest" },
  { id: "balanced", label: "Balanced" },
  { id: "lowest-stress", label: "Lowest Stress" },
];

const TRAVELLERS: { id: TravellerType; label: string }[] = [
  { id: "solo", label: "Solo" },
  { id: "couple", label: "Couple" },
  { id: "family", label: "Family" },
  { id: "business", label: "Business" },
];

const BAGGAGE: { id: BaggageOption; label: string }[] = [
  { id: "checked", label: "Checked bag" },
  { id: "carry-on", label: "Carry-on only" },
  { id: "none", label: "No luggage" },
];

const STRESS_COLORS: Record<string, string> = { low: "var(--ok)", medium: "var(--copper)", high: "#a3402f" };

export default function PlannerPage() {
  const [cityId, setCityId] = useState<CityId>("paris");
  const [airportCode, setAirportCode] = useState("CDG");
  const [destinationId, setDestinationId] = useState("central-paris");
  const [arrivalTime, setArrivalTime] = useState("14:00");
  const [traveller, setTraveller] = useState<TravellerType>("solo");
  const [baggage, setBaggage] = useState<BaggageOption>("carry-on");
  const [priority, setPriority] = useState<PlannerPriority>("balanced");

  const airports = useMemo(() => getCityAirports(cityId), [cityId]);
  const destinations = useMemo(() => getCityDestinationIds(cityId), [cityId]);

  // Ensure airport/destination stay valid on city change
  const currentAirport = airports.find(a => a.code === airportCode)?.code ?? airports[0]?.code ?? "CDG";
  const currentDest = destinations.includes(destinationId) ? destinationId : (destinations[0] ?? "central-paris");

  const result: PlannerResult | null = useMemo(() => {
    try {
      return generatePlan({
        cityId, airportCode: currentAirport, destinationId: currentDest,
        arrivalTime, travellerType: traveller, baggage, priority,
      });
    } catch { return null; }
  }, [cityId, currentAirport, currentDest, arrivalTime, traveller, baggage, priority]);

  const handleCityChange = (id: CityId) => {
    setCityId(id);
    const apts = getCityAirports(id);
    setAirportCode(apts[0]?.code ?? "CDG");
    const dests = getCityDestinationIds(id);
    setDestinationId(dests[0] ?? "central-paris");
  };

  return (
    <>
      <header className="app-header">
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span className="app-header-brand">
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <span className="app-header-wordmark">Travelvus</span><span className="app-header-line" /><span className="app-header-dot" />
            </Link>
          </span>
          <nav className="app-header-nav" style={{ display: "flex", gap: 8 }}>
            <Link href="/" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Home</Link>
            <Link href="/london-airports" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>London</Link>
            <Link href="/new-york-airports" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>New York</Link>
            <Link href="/paris-airports" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Paris</Link>
          </nav>
        </div>
      </header>
      <style>{`.hub-nav-link:hover { color: var(--copper) !important; background: rgba(184,92,56,.06) !important; }`}</style>

      <main>
        <section style={{ background: "var(--paper)", padding: "48px 0 36px" }}>
          <div style={DS.container}>
            <h1 style={DS.h1}>Plan your airport arrival</h1>
            <p style={{ ...DS.body, margin: "10px 0 0", maxWidth: 500 }}>
              Get a personalised transfer plan based on your flight, destination, and priorities.
            </p>
          </div>
        </section>

        {/* Form */}
        <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "36px 0" }}>
          <div style={DS.container}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              {/* City */}
              <div>
                <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>City</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {SUPPORTED_CITIES.map(id => (
                    <button key={id} onClick={() => handleCityChange(id)} style={DS.pill(id === cityId)}>{getCityLabel(id)}</button>
                  ))}
                </div>
              </div>

              {/* Airport */}
              <div>
                <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Airport</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {airports.map(ap => (
                    <button key={ap.code} onClick={() => setAirportCode(ap.code)} style={DS.pill(ap.code === currentAirport)}>{ap.name} ({ap.code})</button>
                  ))}
                </div>
              </div>

              {/* Destination */}
              <div>
                <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Destination</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {destinations.map(id => (
                    <button key={id} onClick={() => setDestinationId(id)} style={DS.pill(id === currentDest)}>{getCityDestinationShortLabel(cityId, id)}</button>
                  ))}
                </div>
              </div>

              {/* Time + Traveller row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Arrival time</div>
                  <input type="time" value={arrivalTime} onChange={e => setArrivalTime(e.target.value)}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--line)", background: "var(--card)", fontFamily: "var(--mono)", fontSize: 15, color: "var(--ink)", minHeight: 48 }} />
                </div>
                <div>
                  <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Traveller</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {TRAVELLERS.map(t => (
                      <button key={t.id} onClick={() => setTraveller(t.id)} style={DS.pill(t.id === traveller)}>{t.label}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Baggage + Priority row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Baggage</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {BAGGAGE.map(b => (
                      <button key={b.id} onClick={() => setBaggage(b.id)} style={DS.pill(b.id === baggage)}>{b.label}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Priority</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {PRIORITIES.map(p => (
                      <button key={p.id} onClick={() => setPriority(p.id)} style={DS.pill(p.id === priority)}>{p.label}</button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Results */}
        {result && (
          <>
            <section style={{ padding: "40px 0 32px" }}>
              <div style={DS.container}>
                <h2 style={{ ...DS.h2, marginBottom: 4 }}>Your arrival plan</h2>
                <p style={{ ...DS.body, margin: "0 0 24px", fontSize: 13 }}>
                  {result.airportName} → {result.destinationLabel} · Arriving {result.input.arrivalTime} · {result.cityLabel}
                </p>

                {/* Recommended */}
                <div style={{ ...DS.card, marginBottom: 16, borderLeft: "3px solid var(--navy)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
                    <span style={{ ...DS.monoLabel, color: "var(--navy)" }}>Recommended</span>
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, color: STRESS_COLORS[result.recommended.stressLevel], letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {result.recommended.stressLevel === "low" ? "Easy journey" : result.recommended.stressLevel === "medium" ? "Manageable" : "Plan ahead"}
                    </span>
                  </div>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, color: "var(--ink)", marginBottom: 10 }}>{result.recommended.mode.split("→")[0]?.trim() ?? result.recommended.mode}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 10 }}>
                    <div><span style={{ ...DS.monoLabel, color: "var(--pmuted)", display: "block", marginBottom: 2 }}>Time</span><span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>{result.recommended.timeLabel}</span></div>
                    <div><span style={{ ...DS.monoLabel, color: "var(--pmuted)", display: "block", marginBottom: 2 }}>Cost</span><span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>{result.recommended.cost}</span></div>
                    <div><span style={{ ...DS.monoLabel, color: "var(--pmuted)", display: "block", marginBottom: 2 }}>Changes</span><span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>{result.recommended.changesLabel}</span></div>
                  </div>
                  <p style={{ ...DS.body, fontSize: 12, margin: 0 }}>{result.recommended.bestFor} · {result.recommended.walkingDistance} walking</p>
                </div>

                {/* Alternative */}
                <div style={{ ...DS.card, opacity: 0.8 }}>
                  <span style={{ ...DS.monoLabel, color: "var(--pmuted)", display: "block", marginBottom: 10 }}>Alternative</span>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 18, color: "var(--ink)", marginBottom: 8 }}>{result.alternative.mode.split("→")[0]?.trim() ?? result.alternative.mode}</div>
                  <div style={{ display: "flex", gap: 24 }}>
                    <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)" }}>{result.alternative.timeLabel}</span>
                    <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)" }}>{result.alternative.cost}</span>
                    <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)" }}>{result.alternative.changesLabel}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips + Assumptions */}
            <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "36px 0" }}>
              <div style={DS.container}>
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ ...DS.monoLabel, color: "var(--copper)", marginBottom: 10 }}>Practical tips</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {result.tips.map((t, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                        <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, color: "var(--copper)", flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
                        <span style={DS.body}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <details style={{ opacity: 0.55 }}>
                  <summary style={{ ...DS.monoLabel, color: "var(--muted)", cursor: "pointer", display: "inline-block" }}>Assumptions</summary>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
                    {result.assumptions.map((a, i) => (
                      <span key={i} style={{ ...DS.body, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </details>
              </div>
            </section>

            {/* Knowledge + Guides + CTA */}
            <section style={{ padding: "36px 0" }}>
              <div style={DS.container}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}>
                  <div>
                    <h3 style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Knowledge</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {result.relatedKnowledge.map((k, i) => (
                        <Link key={i} href={k.href} style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", textDecoration: "none" }}>{k.label} →</Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 8 }}>Decision Guides</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {result.relatedGuides.map((g, i) => (
                        <Link key={i} href={g.href} style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", textDecoration: "none" }}>{g.label} →</Link>
                      ))}
                    </div>
                  </div>
                </div>
                <Link href={result.compareHref} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", background: "var(--navy)", color: "var(--paper)", fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, borderRadius: 10, textDecoration: "none" }}>
                  Compare airports in Decision Engine <span style={{ fontSize: 17 }}>→</span>
                </Link>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer columns={[
        { title: "Cities", links: [{ label: "London Airports", href: "/london-airports" }, { label: "New York Airports", href: "/new-york-airports" }, { label: "Paris Airports", href: "/paris-airports" }] },
        { title: "Tools", links: [{ label: "Compare flights", href: "/" }, { label: "Arrival Planner", href: "/planner" }, { label: "Airport Hubs", href: "/paris/airport-choice" }] },
        { title: "Product", links: [{ label: "Methodology", href: "/methodology" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
      ]} />
    </>
  );
}
