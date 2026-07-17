import type { Metadata } from "next";
import Link from "next/link";
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
    { label: "CDG → Gare du Nord", value: "€12", note: "RER B direct, ~35 min — fastest connection" },
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

/* ── Page ─────────────────────────────────────────────────── */

export default function ParisAirportChoicePage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "48px 24px 80px", fontFamily: "var(--sans)" }}>
      {/* ═══ Hero ═══ */}
      <div style={{ marginBottom: 48 }}>
        <span style={{
          fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--copper)", display: "block", marginBottom: 12,
        }}>
          Airport Choice Hub · Paris
        </span>
        <h1 style={{
          fontFamily: "var(--serif)", fontWeight: 400, fontSize: 42,
          lineHeight: 1.15, color: "var(--ink)", margin: "0 0 16px",
        }}>
          {PARIS_HUB.title}
        </h1>
        <p style={{
          fontFamily: "var(--sans)", fontWeight: 400, fontSize: 17,
          lineHeight: 1.55, color: "var(--muted)", maxWidth: 640,
        }}>
          {PARIS_HUB.heroDescription}
        </p>
      </div>

      {/* ═══ Quick Facts ═══ */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
        marginBottom: 48,
      }}>
        {PARIS_HUB.quickFacts.map((f, i) => (
          <div key={i} style={{
            padding: "16px 20px", background: "var(--card)",
            border: "1px solid var(--line)", borderRadius: "var(--radius-card)",
          }}>
            <span style={{
              fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "var(--pmuted)", display: "block", marginBottom: 4,
            }}>
              {f.label}
            </span>
            <span style={{
              fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24,
              color: "var(--ink)", display: "block",
            }}>
              {f.value}
            </span>
            {f.note && (
              <span style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", marginTop: 2, display: "block" }}>
                {f.note}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* ═══ Airport Cards ═══ */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        marginBottom: 48,
      }}>
        {PARIS_HUB.airports.map((ap) => (
          <div key={ap.code} style={{
            padding: "28px 24px", background: "var(--card)",
            border: "1px solid var(--line)", borderRadius: "var(--radius-card)",
          }}>
            <div style={{
              fontFamily: "var(--mono)", fontWeight: 700, fontSize: 12,
              letterSpacing: "0.06em", color: "var(--navy)",
              marginBottom: 4,
            }}>
              {ap.code}
            </div>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24,
              color: "var(--ink)", margin: "0 0 8px",
            }}>
              {ap.name}
            </h2>
            <p style={{
              fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.5,
              color: "var(--muted)", marginBottom: 20,
            }}>
              {ap.tagline}
            </p>

            <div style={{ marginBottom: 16 }}>
              <span style={{
                fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "var(--ok)", display: "block", marginBottom: 6,
              }}>
                Strengths
              </span>
              {ap.strengths.map((s, i) => (
                <div key={i} style={{
                  display: "flex", gap: 6, marginBottom: 4,
                  fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4, color: "var(--ink)",
                }}>
                  <span style={{ color: "var(--ok)", flex: "none" }}>+</span> {s}
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16 }}>
              <span style={{
                fontFamily: "var(--mono)", fontWeight: 600, fontSize: 8,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "var(--copper)", display: "block", marginBottom: 6,
              }}>
                Watch out
              </span>
              {ap.watchOut.map((w, i) => (
                <div key={i} style={{
                  display: "flex", gap: 6, marginBottom: 4,
                  fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4, color: "var(--muted)",
                }}>
                  <span style={{ color: "var(--copper)", flex: "none" }}>!</span> {w}
                </div>
              ))}
            </div>

            <div style={{
              padding: "10px 14px", background: "rgba(30,42,51,0.03)",
              borderRadius: 6, fontFamily: "var(--sans)", fontSize: 12,
              lineHeight: 1.4, color: "var(--ink)",
            }}>
              <b style={{ fontFamily: "var(--sans)", fontWeight: 600 }}>Best for:</b> {ap.bestFor}
            </div>
          </div>
        ))}
      </div>

      {/* ═══ CTA ═══ */}
      <div style={{
        textAlign: "center", marginBottom: 48,
        padding: "32px", background: "var(--navy)", borderRadius: 12,
      }}>
        <h2 style={{
          fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24,
          color: "var(--paper)", margin: "0 0 8px",
        }}>
          See which airport really wins
        </h2>
        <p style={{
          fontFamily: "var(--sans)", fontSize: 14, color: "var(--pmuted)",
          marginBottom: 20, lineHeight: 1.5,
        }}>
          The Decision Engine compares real trip cost, door-to-door time, and destination-specific transfers.
        </p>
        <Link
          href={PARIS_HUB.comparisonLinks[0]!.href}
          style={{
            display: "inline-block", padding: "14px 32px",
            background: "var(--paper)", color: "var(--navy)",
            fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15,
            borderRadius: 8, textDecoration: "none",
          }}
        >
          Compare CDG vs Orly →
        </Link>
      </div>

      {/* ═══ Traveller Scenarios ═══ */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{
          fontFamily: "var(--serif)", fontWeight: 400, fontSize: 28,
          color: "var(--ink)", margin: "0 0 8px",
        }}>
          Which airport for your situation?
        </h2>
        <p style={{
          fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)", marginBottom: 24, lineHeight: 1.5,
        }}>
          Different travellers need different things. Choose your scenario to see the recommendation.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PARIS_HUB.scenarios.map((s) => (
            <div key={s.id} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "18px 20px", background: "var(--card)",
              border: "1px solid var(--line)", borderRadius: "var(--radius-card)",
              flexWrap: "wrap", gap: 12,
            }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{
                  fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14,
                  color: "var(--ink)", marginBottom: 4,
                }}>
                  {s.title}
                </div>
                <div style={{
                  fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.4,
                  color: "var(--muted)",
                }}>
                  {s.description}
                </div>
                <div style={{
                  fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9,
                  color: "var(--copper)", marginTop: 4,
                }}>
                  Suggested: {s.suggestedWinner}
                </div>
              </div>
              <Link
                href={s.prefilledParams}
                style={{
                  display: "inline-block", padding: "10px 20px",
                  border: "1px solid var(--line)", borderRadius: 8,
                  fontFamily: "var(--sans)", fontWeight: 500, fontSize: 13,
                  color: "var(--ink)", textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {s.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ Related Guides ═══ */}
      <div style={{ marginBottom: 48 }}>
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
                padding: "8px 16px", border: "1px solid var(--line)",
                borderRadius: 6, fontFamily: "var(--sans)", fontSize: 13,
                color: "var(--ink)", textDecoration: "none",
              }}
            >
              {g.label} →
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ Methodology ═══ */}
      <details style={{
        border: "1px solid var(--line)", borderRadius: 8, padding: "16px 20px",
        opacity: 0.7,
      }}>
        <summary style={{
          fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11,
          color: "var(--muted)", cursor: "pointer",
        }}>
          How we calculate this
        </summary>
        <p style={{
          fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.5,
          color: "var(--muted)", marginTop: 8,
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

      {/* ═══ Footer ═══ */}
      <footer style={{
        marginTop: 48, paddingTop: 24,
        borderTop: "1px solid var(--line)",
        display: "flex", gap: 16, flexWrap: "wrap",
      }}>
        <Link href="/" style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        <Link href="/paris-airports" style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", textDecoration: "none" }}>Paris Airports</Link>
        <Link href="/methodology" style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", textDecoration: "none" }}>Methodology</Link>
        <Link href="/london-airports" style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", textDecoration: "none" }}>London Airports</Link>
        <Link href="/new-york-airports" style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", textDecoration: "none" }}>New York Airports</Link>
      </footer>
    </div>
  );
}
