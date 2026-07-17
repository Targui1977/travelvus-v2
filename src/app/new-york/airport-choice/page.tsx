import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { buildHubCompareUrl } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "New York Airport Choice — JFK or Newark? | Travelvus",
  description:
    "Which New York airport should you choose? JFK or Newark (EWR)? Compare costs, transfer times, and find the best airport for your New York destination.",
};

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

const DATA = {
  title: "Which New York airport should you choose?",
  hero: "Flying into New York gives you two main options: JFK in Queens or Newark in New Jersey. They serve different airlines, connect to Manhattan differently, and the total cost varies by destination. Choose carefully — it matters more than you think.",
  airports: [
    { code: "JFK", name: "JFK", tagline: "New York's largest international airport — most routes, AirTrain + LIRR connection",
      strengths: ["AirTrain + LIRR to Grand Central (50 min)", "Most international routes and airlines", "Best for Brooklyn and Long Island City", "24h AirTrain service"],
      watchOut: ["Longer transfer to Midtown than Newark", "Can be crowded at peak international hours", "Further from Upper Manhattan"],
      bestFor: "International travellers, Brooklyn, Queens, Long Island City" },
    { code: "EWR", name: "Newark", tagline: "Closer to Midtown Manhattan — NJ Transit direct to Penn Station",
      strengths: ["NJ Transit/Amtrak to Penn Station (30–40 min)", "Closer to Midtown and Lower Manhattan", "Often cheaper on United and domestic routes", "Less crowded than JFK"],
      watchOut: ["NJ Transit not 24h — limited late-night options", "AirTrain + train transfer adds complexity", "Not ideal for Brooklyn or Queens destinations"],
      bestFor: "Midtown Manhattan, Financial District, business travellers" },
  ],
  quickFacts: [
    { label: "JFK → Midtown", value: "€16", note: "AirTrain + LIRR, ~50 min" },
    { label: "EWR → Midtown", value: "€20", note: "AirTrain + NJ Transit, ~40 min" },
    { label: "JFK → Brooklyn", value: "€14", note: "AirTrain + LIRR to Atlantic Terminal, ~40 min" },
    { label: "EWR → Financial District", value: "€20", note: "NJ Transit + subway, ~55 min" },
  ],
  scenarios: [
    { id: "lowest-cost", title: "Lowest total cost", description: "JFK often has a lower total cost thanks to cheaper AirTrain + LIRR transfers. But check baggage policies — they can flip the result.", suggestedWinner: "JFK", prefilledParams: buildHubCompareUrl("new-york", "midtown"), ctaLabel: "Compare cost →" },
    { id: "fastest-arrival", title: "Fastest city arrival", description: "Newark reaches Midtown in ~40 min via NJ Transit. JFK takes 50+ min. For Manhattan business travellers, Newark is often faster.", suggestedWinner: "EWR", prefilledParams: buildHubCompareUrl("new-york", "midtown"), ctaLabel: "See times →" },
    { id: "brooklyn", title: "Brooklyn destination", description: "JFK's AirTrain + LIRR reaches Atlantic Terminal in 40 min. Newark requires NJ Transit + subway — nearly 60 min to Downtown Brooklyn.", suggestedWinner: "JFK", prefilledParams: buildHubCompareUrl("new-york", "brooklyn-downtown"), ctaLabel: "Brooklyn →" },
    { id: "business-traveller", title: "Business traveller", description: "For Midtown offices, Newark's direct NJ Transit to Penn Station is hard to beat. For Financial District, both are competitive.", suggestedWinner: "EWR", prefilledParams: buildHubCompareUrl("new-york", "midtown"), ctaLabel: "Midtown →" },
    { id: "late-night", title: "Late-night arrival", description: "JFK's AirTrain runs 24h. Newark's NJ Transit stops around 01:30 — after that you're looking at a pricey taxi or rideshare.", suggestedWinner: "JFK", prefilledParams: buildHubCompareUrl("new-york", "midtown"), ctaLabel: "Late arrival →" },
  ],
  ctaHref: buildHubCompareUrl("new-york", "midtown"),
  ctaLabel: "Compare JFK vs Newark",
  relatedGuides: [
    { label: "Best Airport for Manhattan", href: "/guides/best-airport-for-manhattan" },
    { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    { label: "New York Airports overview", href: "/new-york-airports" },
  ],
  methodology: "Transfer costs are illustrative EUR values based on MTA/NJ Transit/Amtrak fares reviewed July 2026. Airfares are illustrative planning estimates. The Decision Engine calculates real trip cost including baggage, seat selection, and airport transfers.",
  lastReviewed: "July 2026",
};

export default function NewYorkAirportChoicePage() {
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
            <Link href="/new-york-airports" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "var(--ink)", padding: "7px 14px", borderRadius: 20, textDecoration: "none", background: "rgba(184,92,56,.10)" }}>New York Airports</Link>
            <Link href="/london-airports" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>London</Link>
            <Link href="/paris-airports" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Paris</Link>
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
              <Link href="/new-york-airports" style={{ color: "var(--pmuted)", textDecoration: "none" }}>New York Airports</Link><span style={{ opacity: 0.3 }}>›</span>
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
          <h2 style={{ ...DS.h2, marginBottom: 6 }}>Transfer at a glance</h2><p style={{ ...DS.bodySm, margin: "0 0 22px" }}>Door-to-door transfer costs and times for the most common New York destinations.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>{DATA.quickFacts.map((f, i) => (<div key={i} style={{ ...DS.cardCompact, display: "flex", alignItems: "center", gap: 14 }}><div style={{ flex: 1, minWidth: 0 }}><div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 2 }}>{f.label}</div><div style={{ fontFamily: "var(--sans)", fontSize: 11, color: "var(--muted)", lineHeight: 1.4 }}>{f.note}</div></div><div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, color: "var(--ink)", flex: "none" }}>{f.value}</div></div>))}</div>
        </div></section>
        <section style={DS.section}><div style={DS.container}>
          <h2 style={{ ...DS.h2, marginBottom: 6 }}>Which airport for your situation?</h2><p style={{ ...DS.bodySm, margin: "0 0 24px" }}>Each scenario links directly to the Decision Engine with prefilled assumptions.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{DATA.scenarios.map((s, i) => (<div key={s.id} style={{ ...DS.cardCompact, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}><div style={{ flex: 1, minWidth: 240 }}><div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 3 }}><span style={{ ...DS.monoMeta, flex: "none" }}>{String(i + 1).padStart(2, "0")}</span><span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>{s.title}</span></div><div style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.45, color: "var(--muted)", marginLeft: 26 }}>{s.description}</div></div><Link href={s.prefilledParams} style={DS.ctaSecondary}>{s.ctaLabel}</Link></div>))}</div>
        </div></section>
        <section style={DS.sectionAlt}><div style={DS.container}>
          <h2 style={{ ...DS.h2, fontSize: 22, marginBottom: 16 }}>More about New York airports</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>{DATA.relatedGuides.map((g, i) => (<Link key={i} href={g.href} style={{ ...DS.cardCompact, textDecoration: "none", display: "block" }}><div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 16, color: "var(--ink)", marginBottom: 4, lineHeight: 1.25 }}>{g.label}</div><div style={{ ...DS.monoLabel, color: "var(--copper)", fontSize: 8 }}>Read guide →</div></Link>))}</div>
        </div></section>
        <section style={{ padding: "32px 0 52px" }}><div style={DS.container}><details style={{ opacity: 0.55 }}><summary style={{ ...DS.monoLabel, color: "var(--muted)", cursor: "pointer", display: "inline-block" }}>How we calculate this</summary><p style={{ ...DS.bodySm, marginTop: 10, maxWidth: 540 }}>{DATA.methodology}</p><p style={{ ...DS.monoMeta, marginTop: 6 }}>Last reviewed: {DATA.lastReviewed}</p></details></div></section>
      </main>
      <Footer columns={[{ title: "Cities", links: [{ label: "London Airports", href: "/london-airports" }, { label: "New York Airports", href: "/new-york-airports" }, { label: "Paris Airports", href: "/paris-airports" }] }, { title: "New York Guides", links: [{ label: "JFK vs Newark", href: "/guides/jfk-vs-newark" }, { label: "Best for Manhattan", href: "/guides/best-airport-for-manhattan" }, { label: "Airport Choice Hub", href: "/new-york/airport-choice" }] }, { title: "Product", links: [{ label: "Compare", href: "/" }, { label: "Methodology", href: "/methodology" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }]} />
    </>
  );
}
