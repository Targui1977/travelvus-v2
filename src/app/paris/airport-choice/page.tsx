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
      ctaLabel: "Compare CDG vs ORY cost →",
    },
    {
      id: "fastest-arrival",
      title: "Fastest city arrival",
      description: "CDG with RER B direct reaches central Paris in ~40 min. ORY requires the Orlyval shuttle, adding time and cost.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "central-paris"),
      ctaLabel: "See door-to-door times →",
    },
    {
      id: "business-traveller",
      title: "Business traveller",
      description: "La Défense business district is closer to CDG. Gare du Nord is a CDG direct stop — ideal for Eurostar connections.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "la-defense"),
      ctaLabel: "Best for La Défense →",
    },
    {
      id: "family-luggage",
      title: "Family with luggage",
      description: "CDG offers direct RER with step-free access at major stations. ORY's Orlyval + train interchange can be harder with bags and children.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "central-paris"),
      ctaLabel: "Compare with baggage →",
    },
    {
      id: "late-night",
      title: "Late-night arrival",
      description: "CDG has RER B until 00:30 and Noctilien night buses. ORY has limited options after 23:30 when Orlyval closes.",
      suggestedWinner: "CDG",
      prefilledParams: buildHubCompareUrl("paris", "central-paris"),
      ctaLabel: "Late arrival comparison →",
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

/* ── Quick Metrics ─────────────────────────────────────────── */

const QUICK_METRICS = [
  { value: "2", label: "Airports compared" },
  { value: "5", label: "Destination zones" },
  { value: "5", label: "Traveller scenarios" },
  { value: "Live", label: "Decision Engine" },
];

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
          <Link href="/" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/paris-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>
            Paris Airports
          </Link>
          <Link href="/london-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>
            London
          </Link>
          <Link href="/new-york-airports" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>
            New York
          </Link>
          <Link href="/methodology" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--muted)", textDecoration: "none" }}>
            Methodology
          </Link>
        </nav>
      </header>

      <main style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
        {/* ═══ Hero ═══ */}
        <section style={{ padding: "56px 0 40px" }}>
          {/* Breadcrumb */}
          <div style={{
            fontFamily: "var(--mono)", fontWeight: 400, fontSize: 10,
            letterSpacing: "0.04em", color: "var(--pmuted)",
            marginBottom: 24, display: "flex", gap: 6, alignItems: "center",
          }}>
            <Link href="/" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/paris-airports" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Paris</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--copper)" }}>Airport Choice</span>
          </div>

          <h1 style={{
            fontFamily: "var(--serif)", fontWeight: 400, fontSize: 46,
            lineHeight: 1.12, color: "var(--ink)", margin: "0 0 14px",
            letterSpacing: "-0.01em",
          }}>
            {PARIS_HUB.title}
          </h1>
          <p style={{
            fontFamily: "var(--sans)", fontWeight: 400, fontSize: 17,
            lineHeight: 1.55, color: "var(--muted)", maxWidth: 600,
            margin: 0,
          }}>
            {PARIS_HUB.heroDescription}
          </p>

          {/* Quick Metrics Row */}
          <div style={{
            display: "flex", gap: 32, marginTop: 32,
            padding: "20px 0", borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            flexWrap: "wrap",
          }}>
            {QUICK_METRICS.map((m, i) => (
              <div key={i} style={{ textAlign: "center", minWidth: 100 }}>
                <div style={{
                  fontFamily: "var(--serif)", fontWeight: 400, fontSize: 28,
                  color: "var(--copper)", lineHeight: 1.1,
                }}>
                  {m.value}
                </div>
                <div style={{
                  fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "var(--pmuted)", marginTop: 4,
                }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Airport Cards ═══ */}
        <section style={{ padding: "8px 0 48px" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
          }}>
            {PARIS_HUB.airports.map((ap) => (
              <div key={ap.code} style={{
                padding: "32px 28px", background: "var(--card)",
                border: "1px solid var(--line)", borderRadius: "var(--radius-card)",
              }}>
                <div style={{
                  display: "flex", alignItems: "baseline", gap: 10, marginBottom: 16,
                }}>
                  <span style={{
                    fontFamily: "var(--mono)", fontWeight: 700, fontSize: 20,
                    letterSpacing: "0.04em", color: "var(--navy)",
                  }}>
                    {ap.code}
                  </span>
                  <h2 style={{
                    fontFamily: "var(--serif)", fontWeight: 400, fontSize: 26,
                    color: "var(--ink)", margin: 0, lineHeight: 1.2,
                  }}>
                    {ap.name}
                  </h2>
                </div>
                <p style={{
                  fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.5,
                  color: "var(--muted)", marginBottom: 24,
                }}>
                  {ap.tagline}
                </p>

                {/* Strengths */}
                <div style={{ marginBottom: 18 }}>
                  <span style={{
                    fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "var(--ok)", display: "block", marginBottom: 8,
                  }}>
                    Strengths
                  </span>
                  {ap.strengths.map((s, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 8, marginBottom: 6, alignItems: "baseline",
                    }}>
                      <span style={{ color: "var(--ok)", fontSize: 11, flex: "none", fontWeight: 700 }}>+</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4, color: "var(--ink)" }}>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Watch out */}
                <div style={{ marginBottom: 18 }}>
                  <span style={{
                    fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "var(--copper)", display: "block", marginBottom: 8,
                  }}>
                    Watch out
                  </span>
                  {ap.watchOut.map((w, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 8, marginBottom: 6, alignItems: "baseline",
                    }}>
                      <span style={{ color: "var(--copper)", fontSize: 11, flex: "none", fontWeight: 700 }}>!</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4, color: "var(--muted)" }}>{w}</span>
                    </div>
                  ))}
                </div>

                {/* Best for */}
                <div style={{
                  padding: "12px 16px", background: "rgba(30,42,51,0.03)",
                  borderRadius: 8, borderLeft: "3px solid var(--copper)",
                }}>
                  <span style={{
                    fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "var(--copper)", display: "block", marginBottom: 4,
                  }}>
                    Best for
                  </span>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4, color: "var(--ink)" }}>
                    {ap.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Primary CTA ═══ */}
        <section style={{ paddingBottom: 48 }}>
          <div style={{
            padding: "36px 40px", background: "var(--navy)",
            borderRadius: 12, textAlign: "center",
          }}>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 400, fontSize: 26,
              color: "var(--paper)", margin: "0 0 10px",
            }}>
              See which airport really wins
            </h2>
            <p style={{
              fontFamily: "var(--sans)", fontSize: 14, color: "var(--pmuted)",
              marginBottom: 24, lineHeight: 1.5, maxWidth: 500, margin: "0 auto 24px",
            }}>
              The Decision Engine compares real trip cost, door-to-door time, and destination-specific transfers — including baggage, seat selection, and airport transfers.
            </p>
            <Link
              href={PARIS_HUB.comparisonLinks[0]!.href}
              style={{
                display: "inline-block", padding: "14px 36px",
                background: "var(--paper)", color: "var(--navy)",
                fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15,
                borderRadius: 8, textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Compare CDG vs Orly →
            </Link>
          </div>
        </section>

        {/* ═══ Quick Facts ═══ */}
        <section style={{ paddingBottom: 48 }}>
          <h2 style={{
            fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24,
            color: "var(--ink)", margin: "0 0 20px",
          }}>
            Transfer at a glance
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
          }}>
            {PARIS_HUB.quickFacts.map((f, i) => (
              <div key={i} style={{
                padding: "18px 22px", background: "var(--card)",
                border: "1px solid var(--line)", borderRadius: "var(--radius-card)",
              }}>
                <span style={{
                  fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "var(--pmuted)", display: "block", marginBottom: 6,
                }}>
                  {f.label}
                </span>
                <span style={{
                  fontFamily: "var(--serif)", fontWeight: 400, fontSize: 28,
                  color: "var(--ink)", display: "block",
                }}>
                  {f.value}
                </span>
                {f.note && (
                  <span style={{
                    fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)",
                    marginTop: 4, display: "block", lineHeight: 1.4,
                  }}>
                    {f.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Traveller Scenarios ═══ */}
        <section style={{ paddingBottom: 48 }}>
          <h2 style={{
            fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24,
            color: "var(--ink)", margin: "0 0 8px",
          }}>
            Which airport for your situation?
          </h2>
          <p style={{
            fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)",
            marginBottom: 24, lineHeight: 1.5,
          }}>
            Different travellers need different things. Choose your scenario to see the recommendation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PARIS_HUB.scenarios.map((s) => (
              <div key={s.id} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px", background: "var(--card)",
                border: "1px solid var(--line)", borderRadius: "var(--radius-card)",
                flexWrap: "wrap", gap: 14,
              }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div style={{
                    fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14,
                    color: "var(--ink)", marginBottom: 4,
                  }}>
                    {s.title}
                  </div>
                  <div style={{
                    fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.45,
                    color: "var(--muted)",
                  }}>
                    {s.description}
                  </div>
                  <div style={{
                    fontFamily: "var(--mono)", fontWeight: 500, fontSize: 10,
                    color: "var(--copper)", marginTop: 6,
                    letterSpacing: "0.04em",
                  }}>
                    Suggested: {s.suggestedWinner}
                  </div>
                </div>
                <Link
                  href={s.prefilledParams}
                  style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "12px 22px",
                    border: "1px solid var(--line)", borderRadius: 8,
                    fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13,
                    color: "var(--ink)", textDecoration: "none",
                    whiteSpace: "nowrap", minHeight: 44,
                  }}
                >
                  {s.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Related Guides ═══ */}
        <section style={{ paddingBottom: 48 }}>
          <h2 style={{
            fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22,
            color: "var(--ink)", margin: "0 0 16px",
          }}>
            More about Paris airports
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {PARIS_HUB.relatedGuides.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                style={{
                  padding: "10px 18px", border: "1px solid var(--line)",
                  borderRadius: 8, fontFamily: "var(--sans)", fontSize: 13,
                  color: "var(--ink)", textDecoration: "none",
                  background: "var(--card)",
                }}
              >
                {g.label} →
              </Link>
            ))}
          </div>
        </section>

        {/* ═══ Methodology ═══ */}
        <section style={{ paddingBottom: 56 }}>
          <details style={{
            border: "1px solid var(--line)", borderRadius: "var(--radius-card)",
            padding: "18px 22px", opacity: 0.75,
          }}>
            <summary style={{
              fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11,
              color: "var(--muted)", cursor: "pointer",
              letterSpacing: "0.04em",
            }}>
              How we calculate this
            </summary>
            <p style={{
              fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.55,
              color: "var(--muted)", marginTop: 10,
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
