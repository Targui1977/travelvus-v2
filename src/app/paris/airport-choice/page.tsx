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

/* ── Section wrapper helper ────────────────────────────────── */

function Section({ children, bg, borderTop }: { children: React.ReactNode; bg?: string; borderTop?: boolean }) {
  return (
    <section style={{
      background: bg ?? "transparent",
      borderTop: borderTop ? "1px solid var(--line)" : "none",
      padding: "64px 0",
    }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
        {children}
      </div>
    </section>
  );
}

/* ── Hub Data ─────────────────────────────────────────────── */

const PARIS_HUB: CityAirportHub = {
  cityId: "paris",
  title: "Which Paris airport should you choose?",
  subtitle: "Charles de Gaulle vs Orly — a practical guide before you book",
  heroDescription:
    "Paris has two international airports. They serve different airlines, different routes, and connect to the city differently. Choosing the right one can save you money, time, and stress.",
  airports: [
    {
      code: "CDG",
      name: "Charles de Gaulle",
      tagline: "France's main international hub — largest airport, most routes",
      strengths: [
        "Direct RER B to central Paris (35–40 min)",
        "More airline and route choice",
        "Better for long-haul connections",
        "24h RER B service (reduced night frequency)",
      ],
      watchOut: [
        "Larger airport — longer walking distances between terminals",
        "Can be crowded during peak European holiday periods",
        "Further from southern Paris destinations",
      ],
      bestFor: "International travellers, long-haul flights, northern Paris destinations",
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
        "No direct RER — requires Orlyval shuttle or bus",
        "Limited late-night connections after 23:30",
      ],
      bestFor: "European flights, southern Paris destinations, budget travellers",
    },
  ],
  quickFacts: [
    { label: "CDG → Central Paris", value: "€12", note: "RER B, ~40 min, direct" },
    { label: "ORY → Central Paris", value: "€15", note: "Orlyval + RER B, ~50 min" },
    { label: "CDG → Gare du Nord", value: "€12", note: "RER B direct, ~35 min — fastest" },
    { label: "ORY → Montparnasse", value: "€11", note: "Orlybus, ~35 min — best ORY connection" },
  ],
  scenarios: [
    {
      id: "lowest-cost",
      title: "Lowest total cost",
      description: "CDG is often the cheaper complete journey — lower transfer cost and more competition on airfares.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "central-paris"),
      ctaLabel: "Compare cost →",
    },
    {
      id: "fastest-arrival",
      title: "Fastest city arrival",
      description: "CDG with RER B direct reaches central Paris in ~40 min. ORY requires the Orlyval shuttle, adding time and cost.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "central-paris"),
      ctaLabel: "See times →",
    },
    {
      id: "business-traveller",
      title: "Business traveller",
      description: "La Défense business district is closer to CDG. Gare du Nord is a CDG direct stop — ideal for Eurostar connections.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "la-defense"),
      ctaLabel: "La Défense →",
    },
    {
      id: "family-luggage",
      title: "Family with luggage",
      description: "CDG offers direct RER with step-free access at major stations. ORY's Orlyval + train interchange can be harder with bags and children.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "central-paris"),
      ctaLabel: "With baggage →",
    },
    {
      id: "late-night",
      title: "Late-night arrival",
      description: "CDG has RER B until 00:30 and Noctilien night buses. ORY has limited options after 23:30 when Orlyval closes.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "central-paris"),
      ctaLabel: "Late arrival →",
    },
  ],
  comparisonLinks: [
    {
      label: "CDG vs Orly — full cost comparison",
      href: buildHubCompareUrl("paris", "central-paris"),
      description: "Interactive Decision Engine: real cost, door-to-door time, evidence, and flip rules.",
    },
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

/* ── Shared Style Constants ───────────────────────────────── */

const h1Style: React.CSSProperties = {
  fontFamily: "var(--serif)", fontWeight: 400, fontSize: 48,
  lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px",
  letterSpacing: "-0.015em",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--serif)", fontWeight: 400, fontSize: 30,
  lineHeight: 1.2, color: "var(--ink)", margin: "0 0 12px",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--sans)", fontWeight: 400, fontSize: 16,
  lineHeight: 1.6, color: "var(--muted)", maxWidth: 600,
};

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--mono)", fontWeight: 500, fontSize: 10,
  letterSpacing: "0.06em", textTransform: "uppercase",
};

/* ── Page ─────────────────────────────────────────────────── */

export default function ParisAirportChoicePage() {
  return (
    <>
      {/* ═══ Shared Travelvus Header ═══ */}
      <header className="app-header">
        <span className="app-header-brand">
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span className="app-header-wordmark">Travelvus</span>
            <span className="app-header-line" />
            <span className="app-header-dot" />
          </Link>
        </span>
        <nav className="app-header-nav">
          <Link href="/" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>Home</Link>
          <Link href="/paris-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>Paris Airports</Link>
          <Link href="/london-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>London</Link>
          <Link href="/new-york-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>New York</Link>
          <Link href="/methodology" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>Methodology</Link>
        </nav>
      </header>

      <main>
        {/* ═══════════════════════════════════════════════════════
             HERO — Premium editorial opening
             ═══════════════════════════════════════════════════════ */}
        <section style={{ background: "var(--paper)", padding: "80px 0 72px" }}>
          <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
            {/* Breadcrumb */}
            <div style={{
              ...monoLabel, color: "var(--pmuted)", marginBottom: 28,
              display: "flex", gap: 6, alignItems: "center",
            }}>
              <Link href="/" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Home</Link>
              <span style={{ opacity: 0.3 }}>›</span>
              <Link href="/paris-airports" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Paris Airports</Link>
              <span style={{ opacity: 0.3 }}>›</span>
              <span style={{ color: "var(--copper)" }}>Airport Choice</span>
            </div>

            <h1 style={h1Style}>{PARIS_HUB.title}</h1>
            <p style={{ ...bodyStyle, margin: "0 0 36px" }}>
              {PARIS_HUB.heroDescription}
            </p>

            {/* Primary CTA — immediately after intro */}
            <Link
              href={PARIS_HUB.comparisonLinks[0]!.href}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 32px", background: "var(--navy)",
                color: "var(--paper)", fontFamily: "var(--sans)",
                fontWeight: 600, fontSize: 15, borderRadius: 10,
                textDecoration: "none", letterSpacing: "-0.01em",
              }}
            >
              Compare CDG vs Orly <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
             AIRPORT CARDS — Full-width comparison
             ═══════════════════════════════════════════════════════ */}
        <Section bg="var(--paper-2)" borderTop>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28,
          }}>
            {PARIS_HUB.airports.map((ap, i) => (
              <div key={ap.code} style={{
                padding: "40px 32px", background: "var(--paper)",
                border: "1px solid var(--line)", borderRadius: 12,
              }}>
                {/* Airport header */}
                <div style={{
                  display: "flex", alignItems: "baseline", gap: 14,
                  marginBottom: 20, paddingBottom: 20,
                  borderBottom: "1px solid var(--line)",
                }}>
                  <span style={{
                    fontFamily: "var(--mono)", fontWeight: 700, fontSize: 26,
                    letterSpacing: "0.02em", color: i === 0 ? "var(--navy)" : "var(--copper)",
                  }}>
                    {ap.code}
                  </span>
                  <div>
                    <h2 style={{
                      fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24,
                      color: "var(--ink)", margin: "0 0 4px", lineHeight: 1.2,
                    }}>
                      {ap.name}
                    </h2>
                  </div>
                </div>

                <p style={{
                  fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.55,
                  color: "var(--muted)", marginBottom: 28,
                }}>
                  {ap.tagline}
                </p>

                {/* Strengths */}
                <div style={{ marginBottom: 24 }}>
                  <span style={{ ...monoLabel, color: "var(--ok)", display: "block", marginBottom: 10 }}>
                    Strengths
                  </span>
                  {ap.strengths.map((s, j) => (
                    <div key={j} style={{
                      display: "flex", gap: 10, marginBottom: 8, alignItems: "baseline",
                    }}>
                      <span style={{ color: "var(--ok)", fontSize: 12, flex: "none", fontWeight: 700, lineHeight: 1 }}>+</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.45, color: "var(--ink)" }}>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Watch outs */}
                <div style={{ marginBottom: 24 }}>
                  <span style={{ ...monoLabel, color: "var(--copper)", display: "block", marginBottom: 10 }}>
                    Watch out
                  </span>
                  {ap.watchOut.map((w, j) => (
                    <div key={j} style={{
                      display: "flex", gap: 10, marginBottom: 8, alignItems: "baseline",
                    }}>
                      <span style={{ color: "var(--copper)", fontSize: 12, flex: "none", fontWeight: 700, lineHeight: 1 }}>!</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.45, color: "var(--muted)" }}>{w}</span>
                    </div>
                  ))}
                </div>

                {/* Best for */}
                <div style={{
                  padding: "16px 20px", background: i === 0
                    ? "rgba(30,42,51,0.04)"
                    : "rgba(184,92,56,0.05)",
                  borderRadius: 10, borderLeft: `3px solid ${i === 0 ? "var(--navy)" : "var(--copper)"}`,
                }}>
                  <span style={{ ...monoLabel, color: i === 0 ? "var(--navy)" : "var(--copper)", display: "block", marginBottom: 6 }}>
                    Best for
                  </span>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.45, color: "var(--ink)", fontWeight: 500 }}>
                    {ap.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════
             QUICK METRICS — Trust indicators
             ═══════════════════════════════════════════════════════ */}
        <Section>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
          }}>
            {[
              { value: "2", label: "Airports compared", sub: "CDG & Orly" },
              { value: "5", label: "Destination zones", sub: "Central Paris to Bercy" },
              { value: "Live", label: "Decision Engine", sub: "Real cost, evidence, flips" },
              { value: "5", label: "Traveller scenarios", sub: "Cost, time, business, family" },
            ].map((m, i) => (
              <div key={i} style={{
                padding: "28px 20px", textAlign: "center",
                background: "var(--card)", border: "1px solid var(--line)",
                borderRadius: 10,
              }}>
                <div style={{
                  fontFamily: "var(--serif)", fontWeight: 400, fontSize: 36,
                  color: "var(--copper)", lineHeight: 1, marginBottom: 8,
                }}>
                  {m.value}
                </div>
                <div style={{ ...monoLabel, color: "var(--ink)", marginBottom: 4 }}>
                  {m.label}
                </div>
                <div style={{
                  fontFamily: "var(--sans)", fontSize: 11, color: "var(--pmuted)",
                  lineHeight: 1.35,
                }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════
             TRANSFER OVERVIEW — At a glance
             ═══════════════════════════════════════════════════════ */}
        <Section bg="var(--paper-2)" borderTop>
          <h2 style={h2Style}>Transfer at a glance</h2>
          <p style={{ ...bodyStyle, margin: "0 0 28px", fontSize: 14 }}>
            Door-to-door transfer costs and times for the most common Paris destinations.
          </p>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
          }}>
            {PARIS_HUB.quickFacts.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "18px 22px", background: "var(--paper)",
                border: "1px solid var(--line)", borderRadius: 10,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ ...monoLabel, color: "var(--pmuted)", marginBottom: 4 }}>
                    {f.label}
                  </div>
                  {f.note && (
                    <div style={{ fontFamily: "var(--sans)", fontSize: 11, color: "var(--muted)", lineHeight: 1.4 }}>
                      {f.note}
                    </div>
                  )}
                </div>
                <div style={{
                  fontFamily: "var(--serif)", fontWeight: 400, fontSize: 28,
                  color: "var(--ink)", flex: "none",
                }}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════
             TRAVELLER SCENARIOS — Which airport for you?
             ═══════════════════════════════════════════════════════ */}
        <Section>
          <h2 style={h2Style}>Which airport for your situation?</h2>
          <p style={{ ...bodyStyle, margin: "0 0 32px", fontSize: 14 }}>
            Different travellers need different things. Each scenario links directly to the Decision Engine with prefilled assumptions.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PARIS_HUB.scenarios.map((s, i) => (
              <div key={s.id} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "24px 28px", background: "var(--card)",
                border: "1px solid var(--line)", borderRadius: 10,
                flexWrap: "wrap", gap: 16,
              }}>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <div style={{
                    display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6,
                  }}>
                    <span style={{
                      fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11,
                      color: "var(--pmuted)", opacity: 0.5, flex: "none",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{
                      fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15,
                      color: "var(--ink)",
                    }}>
                      {s.title}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.5,
                    color: "var(--muted)", marginLeft: 30,
                  }}>
                    {s.description}
                  </div>
                </div>
                <Link
                  href={s.prefilledParams}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "10px 20px", border: "1px solid var(--line)",
                    borderRadius: 8, fontFamily: "var(--sans)",
                    fontWeight: 500, fontSize: 12, color: "var(--ink)",
                    textDecoration: "none", whiteSpace: "nowrap",
                    minHeight: 44, background: "var(--paper)",
                  }}
                >
                  {s.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════
             RELATED GUIDES — Editorial navigation
             ═══════════════════════════════════════════════════════ */}
        <Section bg="var(--paper-2)" borderTop>
          <h2 style={{ ...h2Style, fontSize: 22, marginBottom: 20 }}>More about Paris airports</h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
          }}>
            {PARIS_HUB.relatedGuides.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                style={{
                  display: "block", padding: "20px 22px",
                  background: "var(--paper)", border: "1px solid var(--line)",
                  borderRadius: 10, textDecoration: "none",
                }}
              >
                <div style={{
                  fontFamily: "var(--serif)", fontWeight: 400, fontSize: 17,
                  color: "var(--ink)", marginBottom: 6, lineHeight: 1.25,
                }}>
                  {g.label}
                </div>
                <div style={{
                  fontFamily: "var(--mono)", fontWeight: 500, fontSize: 10,
                  color: "var(--copper)", letterSpacing: "0.04em",
                }}>
                  Read guide →
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════
             METHODOLOGY — Collapsible, restrained
             ═══════════════════════════════════════════════════════ */}
        <section style={{ padding: "40px 0 64px" }}>
          <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
            <details style={{ opacity: 0.65 }}>
              <summary style={{
                fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11,
                color: "var(--muted)", cursor: "pointer",
                letterSpacing: "0.04em",
              }}>
                How we calculate this
              </summary>
              <p style={{
                fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.6,
                color: "var(--muted)", marginTop: 12, maxWidth: 600,
              }}>
                {PARIS_HUB.methodology}
              </p>
              <p style={{
                fontFamily: "var(--mono)", fontSize: 10, color: "var(--pmuted)",
                marginTop: 8,
              }}>
                Last reviewed: {PARIS_HUB.lastReviewed}
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* ═══ Shared Footer ═══ */}
      <Footer columns={[
        {
          title: "Cities",
          links: [
            { label: "London Airports", href: "/london-airports" },
            { label: "New York Airports", href: "/new-york-airports" },
            { label: "Paris Airports", href: "/paris-airports" },
          ],
        },
        {
          title: "Paris Guides",
          links: [
            { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
            { label: "Best for Central Paris", href: "/guides/best-airport-for-central-paris" },
            { label: "Airport Choice Hub", href: "/paris/airport-choice" },
          ],
        },
        {
          title: "Product",
          links: [
            { label: "Compare", href: "/" },
            { label: "Methodology", href: "/methodology" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ],
        },
      ]} />
    </>
  );
}
