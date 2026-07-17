import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "London Airport Choice — Heathrow or Stansted? | Travelvus",
  description:
    "Which London airport should you choose? Heathrow (LHR) or Stansted (STN)? Compare costs, transfer times, and find the best airport for your London destination.",
};

/* ── Design System — Hub Standard (FROZEN) ─────────────────── */

const DS = {
  card: { padding: "32px 28px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 } as React.CSSProperties,
  cardCompact: { padding: "18px 20px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 } as React.CSSProperties,
  h1: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 42, lineHeight: 1.1, color: "var(--ink)", margin: 0, letterSpacing: "-0.015em" } as React.CSSProperties,
  h2: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 26, lineHeight: 1.18, color: "var(--ink)", margin: 0 } as React.CSSProperties,
  body: { fontFamily: "var(--sans)", fontWeight: 400, fontSize: 15, lineHeight: 1.58, color: "var(--muted)" } as React.CSSProperties,
  bodySm: { fontFamily: "var(--sans)", fontWeight: 400, fontSize: 13, lineHeight: 1.5, color: "var(--muted)" } as React.CSSProperties,
  monoLabel: { fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.07em", textTransform: "uppercase" } as React.CSSProperties,
  monoMeta: { fontFamily: "var(--mono)", fontWeight: 400, fontSize: 9, letterSpacing: "0.05em", color: "var(--pmuted)" } as React.CSSProperties,
  ctaPrimary: { display: "inline-flex", alignItems: "center", gap: 10, padding: "18px 36px", background: "var(--navy)", color: "var(--paper)", fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, borderRadius: 10, textDecoration: "none", letterSpacing: "-0.01em", boxShadow: "0 1px 3px rgba(30,42,51,0.10)", transition: "box-shadow 0.15s ease, transform 0.15s ease" } as React.CSSProperties,
  ctaSecondary: { display: "inline-flex", alignItems: "center", gap: 4, padding: "10px 18px", border: "1px solid var(--line)", borderRadius: 8, fontFamily: "var(--sans)", fontWeight: 500, fontSize: 12, color: "var(--ink)", textDecoration: "none", whiteSpace: "nowrap", minHeight: 44, background: "var(--paper)", transition: "border-color 0.15s ease" } as React.CSSProperties,
  section: { padding: "52px 0" } as React.CSSProperties,
  sectionAlt: { padding: "52px 0", background: "var(--paper-2)", borderTop: "1px solid var(--line)" } as React.CSSProperties,
  container: { maxWidth: 920, margin: "0 auto", padding: "0 24px" } as React.CSSProperties,
  trustCapsule: { display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", border: "1px solid var(--line)", borderRadius: 20, fontFamily: "var(--mono)", fontWeight: 400, fontSize: 10, letterSpacing: "0.04em", color: "var(--pmuted)", background: "var(--card)" } as React.CSSProperties,
};

const TRUST_CAPSULES = ["Interactive Decision Engine", "Destination-aware", "Door-to-door Analysis", "Scenario Recommendations"];

/* ── London Data ──────────────────────────────────────────── */

const DATA = {
  title: "Which London airport should you choose?",
  hero: "London has six airports, but for most travellers flying from Europe, the real choice is between Heathrow and Stansted. Different airlines, different transfers, different total costs. Choosing the right one saves you money and time.",
  airports: [
    { code: "LHR", name: "Heathrow", tagline: "London's main international hub — fastest transfer, most routes",
      strengths: ["Direct Tube/Elizabeth Line to central London", "Fastest door-to-door journey times", "Checked bag often included in full-service fares", "24h Piccadilly Line (Night Tube Fri–Sat)"],
      watchOut: ["Higher ticket prices on most routes", "Can be crowded during peak hours", "Further from East London destinations"],
      bestFor: "Fastest arrival, business travellers, central & west London" },
    { code: "STN", name: "Stansted", tagline: "Budget airline hub — cheaper tickets, longer transfers",
      strengths: ["Lower ticket prices on Ryanair and easyJet", "Stansted Express direct to Liverpool Street", "Good for East London and the City", "Often cheaper total cost once you compare"],
      watchOut: ["45–85 min transfer to most destinations", "Checked bag adds €45 — can erase ticket savings", "Limited late-night train service after 00:30"],
      bestFor: "Budget travellers, East London, Liverpool Street area" },
  ],
  quickFacts: [
    { label: "LHR → Central London", value: "€18", note: "Piccadilly/Elizabeth Line, ~50 min" },
    { label: "STN → Central London", value: "€32", note: "Stansted Express + Tube, ~70 min" },
    { label: "LHR → Paddington", value: "€29", note: "Heathrow Express direct, ~30 min — fastest" },
    { label: "STN → Liverpool St", value: "€28", note: "Stansted Express direct, ~55 min — best STN connection" },
  ],
  scenarios: [
    { id: "lowest-cost", title: "Lowest total cost", description: "With a €58 ticket, Stansted is often cheaper even after adding baggage and transfer costs. But the gap is narrower than it looks.", suggestedWinner: "STN", prefilledParams: buildHubCompareUrl("london", "westminster"), ctaLabel: "Compare cost →" },
    { id: "fastest-arrival", title: "Fastest city arrival", description: "Heathrow reaches central London in ~50 min with direct Tube. Stansted takes 70+ min with at least one change.", suggestedWinner: "LHR", prefilledParams: buildHubCompareUrl("london", "westminster"), ctaLabel: "See times →" },
    { id: "business-traveller", title: "Business traveller", description: "Heathrow Express reaches Paddington in 15 min. Stansted Express to Liverpool Street takes 50 min but serves the City directly.", suggestedWinner: "LHR", prefilledParams: buildHubCompareUrl("london", "paddington"), ctaLabel: "Paddington →" },
    { id: "family-luggage", title: "Family with luggage", description: "Heathrow's checked bag is often included. Stansted charges €45 — which can negate the cheaper ticket for families.", suggestedWinner: "LHR", prefilledParams: buildHubCompareUrl("london", "westminster"), ctaLabel: "With baggage →" },
    { id: "east-london", title: "East London destination", description: "Stansted Express arrives at Liverpool Street in 55 min direct. For Shoreditch, Canary Wharf, or Stratford, Stansted can be the smarter choice.", suggestedWinner: "STN", prefilledParams: buildHubCompareUrl("london", "liverpool-street"), ctaLabel: "Liverpool St →" },
  ],
  ctaHref: buildHubCompareUrl("london", "westminster"),
  ctaLabel: "Compare Heathrow vs Stansted",
  relatedGuides: [
    { label: "Best Airport for Central London", href: "/guides/best-airport-for-central-london" },
    { label: "Heathrow vs Gatwick", href: "/guides/heathrow-vs-gatwick" },
    { label: "London Airports overview", href: "/london-airports" },
  ],
  methodology: "Transfer costs are illustrative EUR values based on TfL/National Rail fares reviewed July 2026. Airfares are illustrative planning estimates. The Decision Engine calculates real trip cost including baggage, seat selection, and airport transfers.",
  lastReviewed: "July 2026",
};

export default function LondonAirportChoicePage() {
  return (
    <>
      <header className="app-header">
        <div style={{ ...DS.container, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span className="app-header-brand">
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <span className="app-header-wordmark">Travelvus</span><span className="app-header-line" /><span className="app-header-dot" />
            </Link>
          </span>
          <nav className="app-header-nav" style={{ display: "flex", gap: 8 }}>
            <Link href="/" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Home</Link>
            <Link href="/london-airports" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "var(--ink)", padding: "7px 14px", borderRadius: 20, textDecoration: "none", background: "rgba(184,92,56,.10)" }}>London Airports</Link>
            <Link href="/paris-airports" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Paris</Link>
            <Link href="/new-york-airports" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>New York</Link>
            <Link href="/methodology" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Methodology</Link>
          </nav>
        </div>
      </header>
      <style>{`.hub-nav-link:hover { color: var(--copper) !important; background: rgba(184,92,56,.06) !important; }`}</style>
      <main>
        <section style={{ background: "var(--paper)", padding: "52px 0 0" }}>
          <div style={DS.container}>
            <div style={{ ...DS.monoMeta, marginBottom: 22, display: "flex", gap: 6, alignItems: "center" }}>
              <Link href="/" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Home</Link><span style={{ opacity: 0.3 }}>›</span>
              <Link href="/london-airports" style={{ color: "var(--pmuted)", textDecoration: "none" }}>London Airports</Link><span style={{ opacity: 0.3 }}>›</span>
              <span style={{ color: "var(--copper)" }}>Airport Choice</span>
            </div>
            <h1 style={{ ...DS.h1, maxWidth: 700 }}>{DATA.title}</h1>
            <p style={{ ...DS.body, margin: "14px 0 24px", maxWidth: 540 }}>{DATA.hero}</p>
            <Link href={DATA.ctaHref} style={DS.ctaPrimary}>{DATA.ctaLabel} <span style={{ fontSize: 17, lineHeight: 1 }}>→</span></Link>
            <div style={{ display: "flex", gap: 10, marginTop: 28, paddingTop: 22, borderTop: "1px solid var(--line)", flexWrap: "wrap" }}>
              {TRUST_CAPSULES.map((t, i) => (<span key={i} style={DS.trustCapsule}>{t}</span>))}
            </div>
          </div>
          <div style={{ ...DS.container, paddingTop: 36, paddingBottom: 52 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {DATA.airports.map((ap, i) => (
                <div key={ap.code} style={DS.card}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 700, fontSize: 22, letterSpacing: "0.02em", lineHeight: 1, color: i === 0 ? "var(--navy)" : "var(--copper)" }}>{ap.code}</span>
                    <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>{ap.name}</h2>
                  </div>
                  <p style={{ ...DS.bodySm, marginBottom: 20 }}>{ap.tagline}</p>
                  <div style={{ marginBottom: 16 }}><span style={{ ...DS.monoLabel, color: "var(--ok)", display: "block", marginBottom: 8 }}>Strengths</span>{ap.strengths.map((s, j) => (<div key={j} style={{ display: "flex", gap: 7, marginBottom: 5, alignItems: "baseline" }}><span style={{ color: "var(--ok)", fontSize: 10, flex: "none", fontWeight: 700 }}>+</span><span style={{ ...DS.bodySm, fontSize: 12, color: "var(--ink)" }}>{s}</span></div>))}</div>
                  <div style={{ marginBottom: 16 }}><span style={{ ...DS.monoLabel, color: "var(--copper)", display: "block", marginBottom: 8 }}>Watch out</span>{ap.watchOut.map((w, j) => (<div key={j} style={{ display: "flex", gap: 7, marginBottom: 5, alignItems: "baseline" }}><span style={{ color: "var(--copper)", fontSize: 10, flex: "none", fontWeight: 700 }}>!</span><span style={{ ...DS.bodySm, fontSize: 12 }}>{w}</span></div>))}</div>
                  <div style={{ padding: "12px 16px", borderRadius: 8, borderLeft: `3px solid ${i === 0 ? "var(--navy)" : "var(--copper)"}`, background: i === 0 ? "rgba(30,42,51,0.03)" : "rgba(184,92,56,0.04)" }}>
                    <span style={{ ...DS.monoLabel, color: i === 0 ? "var(--navy)" : "var(--copper)", display: "block", marginBottom: 4 }}>Best for</span>
                    <span style={{ ...DS.bodySm, fontSize: 12, color: "var(--ink)", fontWeight: 500 }}>{ap.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={DS.sectionAlt}><div style={DS.container}>
          <h2 style={{ ...DS.h2, marginBottom: 6 }}>Transfer at a glance</h2><p style={{ ...DS.bodySm, margin: "0 0 22px" }}>Door-to-door transfer costs and times for the most common London destinations.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>{DATA.quickFacts.map((f, i) => (<div key={i} style={{ ...DS.cardCompact, display: "flex", alignItems: "center", gap: 14 }}><div style={{ flex: 1, minWidth: 0 }}><div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 2 }}>{f.label}</div><div style={{ fontFamily: "var(--sans)", fontSize: 11, color: "var(--muted)", lineHeight: 1.4 }}>{f.note}</div></div><div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, color: "var(--ink)", flex: "none" }}>{f.value}</div></div>))}</div>
        </div></section>
        <section style={DS.section}><div style={DS.container}>
          <h2 style={{ ...DS.h2, marginBottom: 6 }}>Which airport for your situation?</h2><p style={{ ...DS.bodySm, margin: "0 0 24px" }}>Each scenario links directly to the Decision Engine with prefilled assumptions.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{DATA.scenarios.map((s, i) => (<div key={s.id} style={{ ...DS.cardCompact, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}><div style={{ flex: 1, minWidth: 240 }}><div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 3 }}><span style={{ ...DS.monoMeta, flex: "none" }}>{String(i + 1).padStart(2, "0")}</span><span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>{s.title}</span></div><div style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.45, color: "var(--muted)", marginLeft: 26 }}>{s.description}</div></div><Link href={s.prefilledParams} style={DS.ctaSecondary}>{s.ctaLabel}</Link></div>))}</div>
        </div></section>
        <section style={DS.sectionAlt}><div style={DS.container}>
          <h2 style={{ ...DS.h2, fontSize: 22, marginBottom: 16 }}>More about London airports</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>{DATA.relatedGuides.map((g, i) => (<Link key={i} href={g.href} style={{ ...DS.cardCompact, textDecoration: "none", display: "block" }}><div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 16, color: "var(--ink)", marginBottom: 4, lineHeight: 1.25 }}>{g.label}</div><div style={{ ...DS.monoLabel, color: "var(--copper)", fontSize: 8 }}>Read guide →</div></Link>))}</div>
        </div></section>
        <section style={{ padding: "32px 0 52px" }}><div style={DS.container}><details style={{ opacity: 0.55 }}><summary style={{ ...DS.monoLabel, color: "var(--muted)", cursor: "pointer", display: "inline-block" }}>How we calculate this</summary><p style={{ ...DS.bodySm, marginTop: 10, maxWidth: 540 }}>{DATA.methodology}</p><p style={{ ...DS.monoMeta, marginTop: 6 }}>Last reviewed: {DATA.lastReviewed}</p></details></div></section>
      </main>
      <Footer columns={[{ title: "Cities", links: [{ label: "London Airports", href: "/london-airports" }, { label: "New York Airports", href: "/new-york-airports" }, { label: "Paris Airports", href: "/paris-airports" }] }, { title: "London Guides", links: [{ label: "Heathrow vs Gatwick", href: "/guides/heathrow-vs-gatwick" }, { label: "Best for Central London", href: "/guides/best-airport-for-central-london" }, { label: "Airport Choice Hub", href: "/london/airport-choice" }] }, { title: "Product", links: [{ label: "Compare", href: "/" }, { label: "Methodology", href: "/methodology" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }]} />
    </>
  );
}
