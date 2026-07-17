import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { buildHubCompareUrl } from "@/lib/hub-model";
import type { CityAirportHub } from "@/lib/hub-model";

export const metadata: Metadata = {
  title: "Paris Airport Choice — CDG or Orly? | Travelvus",
  description:
    "Which Paris airport should you choose? Charles de Gaulle (CDG) or Orly (ORY)? Compare costs, transfer times, and find the best airport for your Paris destination.",
};

/* ── Design System — Hub Standard (FROZEN) ─────────────────── */

const DS = {
  /* Card */
  card: {
    padding: "32px 28px",
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 10,
  } as React.CSSProperties,

  cardCompact: {
    padding: "18px 20px",
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 10,
  } as React.CSSProperties,

  /* Typography */
  h1: {
    fontFamily: "var(--serif)", fontWeight: 400, fontSize: 42,
    lineHeight: 1.1, color: "var(--ink)", margin: 0,
    letterSpacing: "-0.015em",
  } as React.CSSProperties,

  h2: {
    fontFamily: "var(--serif)", fontWeight: 400, fontSize: 26,
    lineHeight: 1.18, color: "var(--ink)", margin: 0,
  } as React.CSSProperties,

  body: {
    fontFamily: "var(--sans)", fontWeight: 400, fontSize: 15,
    lineHeight: 1.58, color: "var(--muted)",
  } as React.CSSProperties,

  bodySm: {
    fontFamily: "var(--sans)", fontWeight: 400, fontSize: 13,
    lineHeight: 1.5, color: "var(--muted)",
  } as React.CSSProperties,

  monoLabel: {
    fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9,
    letterSpacing: "0.07em", textTransform: "uppercase",
  } as React.CSSProperties,

  monoMeta: {
    fontFamily: "var(--mono)", fontWeight: 400, fontSize: 9,
    letterSpacing: "0.05em", color: "var(--pmuted)",
  } as React.CSSProperties,

  /* CTA */
  ctaPrimary: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "18px 36px", background: "var(--navy)",
    color: "var(--paper)", fontFamily: "var(--sans)",
    fontWeight: 600, fontSize: 15, borderRadius: 10,
    textDecoration: "none", letterSpacing: "-0.01em",
    boxShadow: "0 1px 3px rgba(30,42,51,0.10)",
    transition: "box-shadow 0.15s ease, transform 0.15s ease",
  } as React.CSSProperties,

  ctaSecondary: {
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "10px 18px", border: "1px solid var(--line)",
    borderRadius: 8, fontFamily: "var(--sans)",
    fontWeight: 500, fontSize: 12, color: "var(--ink)",
    textDecoration: "none", whiteSpace: "nowrap",
    minHeight: 44, background: "var(--paper)",
    transition: "border-color 0.15s ease",
  } as React.CSSProperties,

  /* Layout */
  section: {
    padding: "52px 0",
  } as React.CSSProperties,

  sectionAlt: {
    padding: "52px 0",
    background: "var(--paper-2)",
    borderTop: "1px solid var(--line)",
  } as React.CSSProperties,

  container: {
    maxWidth: 920, margin: "0 auto", padding: "0 24px",
  } as React.CSSProperties,

  /* Trust capsule */
  trustCapsule: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "5px 12px",
    border: "1px solid var(--line)",
    borderRadius: 20,
    fontFamily: "var(--mono)", fontWeight: 400, fontSize: 10,
    letterSpacing: "0.04em", color: "var(--pmuted)",
    background: "var(--card)",
  } as React.CSSProperties,
};

/* ── Hub Data ─────────────────────────────────────────────── */

const PARIS_HUB: CityAirportHub = {
  cityId: "paris",
  title: "Which Paris airport should you choose?",
  subtitle: "Charles de Gaulle vs Orly — a practical guide before you book",
  heroDescription:
    "Paris has two international airports. Different airlines, different routes, different connections to the city. Choosing the right one saves you money, time, and stress.",
  airports: [
    {
      code: "CDG",
      name: "Charles de Gaulle",
      tagline: "France's main international hub — largest airport, most routes",
      strengths: [
        "Direct RER B to central Paris (35–40 min)",
        "More airline and route choice",
        "Better for long-haul connections",
        "24h RER B service",
      ],
      watchOut: [
        "Longer walking distances between terminals",
        "Can be crowded during peak holiday periods",
        "Further from southern Paris destinations",
      ],
      bestFor: "International travellers, long-haul flights, northern Paris",
    },
    {
      code: "ORY",
      name: "Orly",
      tagline: "Closer to southern Paris — popular for domestic and European flights",
      strengths: [
        "Closer to southern Paris and Montparnasse",
        "Smaller, easier to navigate",
        "Orlybus direct to Denfert-Rochereau",
        "Often cheaper on European budget airlines",
      ],
      watchOut: [
        "Fewer long-haul routes",
        "Orlyval premium adds €9.30 to transfer cost",
        "No direct RER — requires shuttle or bus",
        "Limited connections after 23:30",
      ],
      bestFor: "European flights, southern Paris, budget travellers",
    },
  ],
  quickFacts: [
    { label: "CDG → Central Paris", value: "€12", note: "RER B, ~40 min, direct" },
    { label: "ORY → Central Paris", value: "€15", note: "Orlyval + RER B, ~50 min" },
    { label: "CDG → Gare du Nord", value: "€12", note: "RER B direct, ~35 min" },
    { label: "ORY → Montparnasse", value: "€11", note: "Orlybus, ~35 min" },
  ],
  scenarios: [
    { id: "lowest-cost", title: "Lowest total cost", description: "CDG is often the cheaper complete journey — lower transfer cost and more airline competition.", suggestedWinner: "CDG", prefilledParams: buildHubCompareUrl("paris", "central-paris"), ctaLabel: "Compare cost →" },
    { id: "fastest-arrival", title: "Fastest city arrival", description: "CDG with RER B direct reaches central Paris in ~40 min. ORY requires the Orlyval shuttle.", suggestedWinner: "CDG", prefilledParams: buildHubCompareUrl("paris", "central-paris"), ctaLabel: "See times →" },
    { id: "business-traveller", title: "Business traveller", description: "La Défense is closer to CDG. Gare du Nord is a CDG direct stop — ideal for Eurostar connections.", suggestedWinner: "CDG", prefilledParams: buildHubCompareUrl("paris", "la-defense"), ctaLabel: "La Défense →" },
    { id: "family-luggage", title: "Family with luggage", description: "CDG offers direct RER with step-free access. ORY's interchange is harder with bags and children.", suggestedWinner: "CDG", prefilledParams: buildHubCompareUrl("paris", "central-paris"), ctaLabel: "With baggage →" },
    { id: "late-night", title: "Late-night arrival", description: "CDG has RER B until 00:30 and Noctilien night buses. ORY has limited options after 23:30.", suggestedWinner: "CDG", prefilledParams: buildHubCompareUrl("paris", "central-paris"), ctaLabel: "Late arrival →" },
  ],
  comparisonLinks: [
    { label: "CDG vs Orly — full cost comparison", href: buildHubCompareUrl("paris", "central-paris"), description: "Interactive Decision Engine: real cost, door-to-door time, evidence, and flip rules." },
  ],
  relatedGuides: [
    { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris" },
    { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    { label: "Paris Airports overview", href: "/paris-airports" },
  ],
  methodology:
    "Transfer costs are illustrative EUR values based on RATP/SNCF fares reviewed July 2026. Airfares are illustrative planning estimates. The Decision Engine calculates real trip cost including baggage, seat selection, and airport transfers.",
  lastReviewed: "July 2026",
};

/* ── Trust Capsules ────────────────────────────────────────── */

const TRUST_CAPSULES = [
  "Interactive Decision Engine",
  "Destination-aware",
  "Door-to-door Analysis",
  "Scenario Recommendations",
];

/* ═══════════════════════════════════════════════════════════ */
/* ── PAGE ─────────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════ */

export default function ParisAirportChoicePage() {
  return (
    <>
      {/* ═══ Header ═══ */}
      <header className="app-header">
        <div style={{ ...DS.container, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span className="app-header-brand">
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <span className="app-header-wordmark">Travelvus</span>
              <span className="app-header-line" />
              <span className="app-header-dot" />
            </Link>
          </span>
          <nav className="app-header-nav" style={{ display: "flex", gap: 22 }}>
            <Link href="/" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>Home</Link>
            <Link href="/paris-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>Paris Airports</Link>
            <Link href="/london-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>London</Link>
            <Link href="/new-york-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>New York</Link>
            <Link href="/methodology" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>Methodology</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ══════════════════════════════════════════════════
             HERO — complete above-the-fold
             ══════════════════════════════════════════════════ */}
        <section style={{ background: "var(--paper)", padding: "52px 0 0" }}>
          <div style={DS.container}>

            {/* Breadcrumb */}
            <div style={{ ...DS.monoMeta, marginBottom: 22, display: "flex", gap: 6, alignItems: "center" }}>
              <Link href="/" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Home</Link><span style={{ opacity: 0.3 }}>›</span>
              <Link href="/paris-airports" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Paris Airports</Link><span style={{ opacity: 0.3 }}>›</span>
              <span style={{ color: "var(--copper)" }}>Airport Choice</span>
            </div>

            <h1 style={{ ...DS.h1, maxWidth: 700 }}>{PARIS_HUB.title}</h1>
            <p style={{ ...DS.body, margin: "14px 0 24px", maxWidth: 540 }}>
              {PARIS_HUB.heroDescription}
            </p>

            <Link href={PARIS_HUB.comparisonLinks[0]!.href} style={DS.ctaPrimary}>
              Compare CDG vs Orly <span style={{ fontSize: 17, lineHeight: 1 }}>→</span>
            </Link>

            {/* Trust capsules */}
            <div style={{
              display: "flex", gap: 10, marginTop: 28,
              paddingTop: 22, borderTop: "1px solid var(--line)",
              flexWrap: "wrap",
            }}>
              {TRUST_CAPSULES.map((t, i) => (
                <span key={i} style={DS.trustCapsule}>{t}</span>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
               AIRPORT CARDS — inside hero for above-fold
               ══════════════════════════════════════════════════ */}
          <div style={{ ...DS.container, paddingTop: 36, paddingBottom: 52 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {PARIS_HUB.airports.map((ap, i) => (
                <div key={ap.code} style={DS.card}>
                  {/* Header */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 12,
                    marginBottom: 16, paddingBottom: 16,
                    borderBottom: "1px solid var(--line)",
                  }}>
                    <span style={{
                      fontFamily: "var(--mono)", fontWeight: 700, fontSize: 22,
                      letterSpacing: "0.02em", lineHeight: 1,
                      color: i === 0 ? "var(--navy)" : "var(--copper)",
                    }}>{ap.code}</span>
                    <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>{ap.name}</h2>
                  </div>

                  <p style={{ ...DS.bodySm, marginBottom: 20 }}>{ap.tagline}</p>

                  {/* Strengths */}
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ ...DS.monoLabel, color: "var(--ok)", display: "block", marginBottom: 8 }}>Strengths</span>
                    {ap.strengths.map((s, j) => (
                      <div key={j} style={{ display: "flex", gap: 7, marginBottom: 5, alignItems: "baseline" }}>
                        <span style={{ color: "var(--ok)", fontSize: 10, flex: "none", fontWeight: 700 }}>+</span>
                        <span style={{ ...DS.bodySm, fontSize: 12, color: "var(--ink)" }}>{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Watch outs */}
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ ...DS.monoLabel, color: "var(--copper)", display: "block", marginBottom: 8 }}>Watch out</span>
                    {ap.watchOut.map((w, j) => (
                      <div key={j} style={{ display: "flex", gap: 7, marginBottom: 5, alignItems: "baseline" }}>
                        <span style={{ color: "var(--copper)", fontSize: 10, flex: "none", fontWeight: 700 }}>!</span>
                        <span style={{ ...DS.bodySm, fontSize: 12 }}>{w}</span>
                      </div>
                    ))}
                  </div>

                  {/* Best for */}
                  <div style={{
                    padding: "12px 16px", borderRadius: 8,
                    borderLeft: `3px solid ${i === 0 ? "var(--navy)" : "var(--copper)"}`,
                    background: i === 0 ? "rgba(30,42,51,0.03)" : "rgba(184,92,56,0.04)",
                  }}>
                    <span style={{ ...DS.monoLabel, color: i === 0 ? "var(--navy)" : "var(--copper)", display: "block", marginBottom: 4 }}>Best for</span>
                    <span style={{ ...DS.bodySm, fontSize: 12, color: "var(--ink)", fontWeight: 500 }}>{ap.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             TRANSFER OVERVIEW
             ══════════════════════════════════════════════════ */}
        <section style={DS.sectionAlt}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 6 }}>Transfer at a glance</h2>
            <p style={{ ...DS.bodySm, margin: "0 0 22px" }}>Door-to-door transfer costs and times for the most common Paris destinations.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {PARIS_HUB.quickFacts.map((f, i) => (
                <div key={i} style={{ ...DS.cardCompact, display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 2 }}>{f.label}</div>
                    {f.note && <div style={{ fontFamily: "var(--sans)", fontSize: 11, color: "var(--muted)", lineHeight: 1.4 }}>{f.note}</div>}
                  </div>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, color: "var(--ink)", flex: "none" }}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             TRAVELLER SCENARIOS
             ══════════════════════════════════════════════════ */}
        <section style={DS.section}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 6 }}>Which airport for your situation?</h2>
            <p style={{ ...DS.bodySm, margin: "0 0 24px" }}>Each scenario links directly to the Decision Engine with prefilled assumptions.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PARIS_HUB.scenarios.map((s, i) => (
                <div key={s.id} style={{
                  ...DS.cardCompact, display: "flex", alignItems: "center",
                  justifyContent: "space-between", flexWrap: "wrap", gap: 14,
                }}>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 3 }}>
                      <span style={{ ...DS.monoMeta, flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>{s.title}</span>
                    </div>
                    <div style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.45, color: "var(--muted)", marginLeft: 26 }}>{s.description}</div>
                  </div>
                  <Link href={s.prefilledParams} style={DS.ctaSecondary}>{s.ctaLabel}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             RELATED GUIDES
             ══════════════════════════════════════════════════ */}
        <section style={DS.sectionAlt}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, fontSize: 22, marginBottom: 16 }}>More about Paris airports</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {PARIS_HUB.relatedGuides.map((g, i) => (
                <Link key={i} href={g.href} style={{ ...DS.cardCompact, textDecoration: "none", display: "block" }}>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 16, color: "var(--ink)", marginBottom: 4, lineHeight: 1.25 }}>{g.label}</div>
                  <div style={{ ...DS.monoLabel, color: "var(--copper)", fontSize: 8 }}>Read guide →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             METHODOLOGY
             ══════════════════════════════════════════════════ */}
        <section style={{ padding: "32px 0 52px" }}>
          <div style={DS.container}>
            <details style={{ opacity: 0.55 }}>
              <summary style={{ ...DS.monoLabel, color: "var(--muted)", cursor: "pointer", display: "inline-block" }}>How we calculate this</summary>
              <p style={{ ...DS.bodySm, marginTop: 10, maxWidth: 540 }}>{PARIS_HUB.methodology}</p>
              <p style={{ ...DS.monoMeta, marginTop: 6 }}>Last reviewed: {PARIS_HUB.lastReviewed}</p>
            </details>
          </div>
        </section>
      </main>

      <Footer columns={[
        { title: "Cities", links: [{ label: "London Airports", href: "/london-airports" }, { label: "New York Airports", href: "/new-york-airports" }, { label: "Paris Airports", href: "/paris-airports" }] },
        { title: "Paris Guides", links: [{ label: "CDG vs Orly", href: "/guides/cdg-vs-orly" }, { label: "Best for Central Paris", href: "/guides/best-airport-for-central-paris" }, { label: "Airport Choice Hub", href: "/paris/airport-choice" }] },
        { title: "Product", links: [{ label: "Compare", href: "/" }, { label: "Methodology", href: "/methodology" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
      ]} />
    </>
  );
}
