import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import { AirportComparisonMap, TrustGraphic } from "@/components/visual";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Compare New York Airports — Which Is Actually Best? | Travelvus",
  description:
    "JFK, Newark, or LaGuardia? Compare real transfer times, costs, and convenience to choose the best New York airport for your journey.",
  alternates: { canonical: "/new-york-airports" },
};

/* ── Primary decision (strongest hook) ─────────────────────── */

const PRIMARY_DECISION = {
  n: "01",
  label: "The core decision",
  question: "There is no single best New York airport.",
  insight:
    "JFK wins for international flights and Brooklyn. Newark wins for Midtown Manhattan and United flyers — its NJ Transit train to Penn Station is the fastest rail connection of any NYC airport. LaGuardia wins for domestic flights and the Upper East Side — closest to Midtown at just 8 miles. The right choice depends on where you are going, which airline you fly, and whether you value speed or cost.",
};

/* ── Supporting decisions ──────────────────────────────────── */

const SUPPORTING_ROWS = [
  {
    n: "02",
    label: "Transit reality",
    question: "Closest airport is not always fastest.",
    pair: "JFK vs LaGuardia",
    insight:
      "LaGuardia is closest at 8 miles — but it has no rail connection. You need a bus to reach the subway. JFK is further but the AirTrain + LIRR reaches Penn Station in ~35 minutes. Rail access changes the real journey time more than distance.",
  },
  {
    n: "03",
    label: "Airline reality",
    question: "Your frequent flyer programme may choose for you.",
    pair: "Newark (United hub) vs JFK (Delta/JetBlue)",
    insight:
      "United operates ~70% of flights at Newark. Delta and JetBlue dominate at JFK. If you are loyal to one alliance, your airport choice may already be made — the question becomes whether the door-to-door journey is still worth it.",
  },
];

/* ── Future ecosystem links ────────────────────────────────── */

const FUTURE_LINKS = [
  { label: "Airport comparison", title: "JFK vs Newark", desc: "Which airport wins for Midtown Manhattan?" },
  { label: "Airport comparison", title: "JFK vs LaGuardia", desc: "International hub or closest domestic airport?" },
  { label: "Airport comparison", title: "Newark vs LaGuardia", desc: "United's fortress or the newly renovated LGA?" },
  { label: "Neighbourhood guide", title: "Best Airport for Manhattan", desc: "Midtown, Downtown, Upper East or Upper West Side." },
  { label: "Neighbourhood guide", title: "Best Airport for Brooklyn", desc: "Williamsburg, Park Slope, DUMBO and beyond." },
  { label: "Traveller guide", title: "Best Airport for Business", desc: "Speed, reliability and lounge access compared." },
];

export default function NYHubPage() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <HomeHeader />

        <div
          style={{
            background: "var(--paper)",
            borderRadius: 14,
            margin: "24px auto 0",
            padding: "48px 52px",
            boxShadow: "0 1px 2px rgba(30,42,51,.04), 0 4px 16px rgba(30,42,51,.06)",
          }}
        >
          {/* ═══ HERO ═══ */}
          <section style={{ marginBottom: 36 }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--copper)",
                display: "block",
                marginBottom: 16,
              }}
            >
              New York Airport Decision Hub
            </span>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: 36,
                lineHeight: 1.15,
                color: "var(--ink)",
                margin: "0 0 14px",
                maxWidth: 680,
              }}
            >
              Which New York airport is actually best for your journey?
            </h1>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.5,
                color: "#4a5560",
                maxWidth: 580,
                margin: "0 0 8px",
              }}
            >
              There is no single answer. JFK, Newark, and LaGuardia each win for
              different travellers. This hub shows you which airport fits{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>your</strong>{" "}
              journey — based on your destination, your airline, and what you value.
            </p>
          </section>

          {/* ═══ AIRPORT DISTANCE MAP ═══ */}
          <AirportComparisonMap
            cityName="Midtown Manhattan"
            airports={[
              { code: "JFK", name: "JFK", distance: "15 mi SE", isWinner: true },
              { code: "EWR", name: "Newark", distance: "16 mi W" },
              { code: "LGA", name: "LaGuardia", distance: "8 mi E" },
            ]}
          />

          {/* ═══ PRIMARY DECISION (strongest visual weight) ═══ */}
          <section style={{ marginTop: 32 }}>
            <div
              style={{
                padding: "28px 0 24px",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontWeight: 600,
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--copper)",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {PRIMARY_DECISION.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: 22,
                  lineHeight: 1.3,
                  color: "var(--ink)",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                {PRIMARY_DECISION.question}
              </span>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#4a5560",
                  margin: "0 0 16px",
                  maxWidth: 640,
                }}
              >
                {PRIMARY_DECISION.insight}
              </p>
              <Link
                href="/#compare"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--paper)",
                  background: "var(--copper)",
                  borderRadius: 8,
                  padding: "11px 22px",
                  textDecoration: "none",
                }}
              >
                Compare your own journey →
              </Link>
            </div>
          </section>

          {/* ═══ SUPPORTING DECISIONS ═══ */}
          <section>
            {SUPPORTING_ROWS.map((row) => (
              <div
                key={row.n}
                style={{
                  padding: "22px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontWeight: 600,
                    fontSize: 9,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--copper)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: 1.35,
                    color: "var(--ink)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {row.question}
                </span>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    fontSize: 12,
                    color: "var(--muted)",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {row.pair}
                </span>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "#4a5560",
                    margin: "0 0 0px",
                  }}
                >
                  {row.insight}
                </p>
              </div>
            ))}
          </section>

          {/* ═══ FUTURE ECOSYSTEM ═══ */}
          <section style={{ marginTop: 28 }}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: 20,
                color: "var(--ink)",
                margin: "0 0 4px",
              }}
            >
              Coming soon
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 13,
                color: "var(--muted)",
                margin: "0 0 16px",
              }}
            >
              Detailed airport comparisons, neighbourhood guides, and traveller-specific
              recommendations for New York.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
              }}
            >
              {FUTURE_LINKS.map((link, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: 9,
                    padding: "14px 16px",
                    background: "var(--card)",
                    opacity: 0.6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontWeight: 500,
                      fontSize: 9,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--copper)",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "var(--ink)",
                      display: "block",
                      marginBottom: 2,
                    }}
                  >
                    {link.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 400,
                      fontSize: 12,
                      color: "var(--muted)",
                    }}
                  >
                    {link.desc}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ CTA ═══ */}
          <section style={{ marginTop: 32 }}>
            <div
              style={{
                background: "var(--navy)",
                borderRadius: 12,
                padding: "26px 30px",
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontWeight: 600,
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--copper-lt)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Travelvus Decision Engine
                </span>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: 19,
                    lineHeight: 1.35,
                    color: "var(--paper)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Paste your two flights. See which airport really wins — door to
                  door, with real transfer data.
                </span>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 12,
                    color: "var(--pmuted)",
                  }}
                >
                  Ticket price is only the start. Baggage, transfers, and total
                  journey time change the answer.
                </span>
              </div>
              <Link
                href="/#compare"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "var(--paper)",
                  background: "var(--copper)",
                  borderRadius: 8,
                  padding: "14px 26px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Reveal the real winner
              </Link>
            </div>
          </section>

          {/* ═══ TRUST ═══ */}
          <section style={{ marginTop: 28 }}>
            <TrustGraphic
              verified
              lastReviewed="July 2026"
              sources={["PANYNJ", "MTA", "NJ Transit", "Port Authority"]}
              methodologyHref="/methodology"
            />
          </section>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>
              <span className={styles.footerBrand}>Travelvus</span>
              <p className={styles.footerBrandText}>
                Decision engine for smarter air travel.
              </p>
            </div>
            <div>
              <span className={styles.footerColTitle}>Product</span>
              <div className={styles.footerLinks}>
                <Link href="/">Compare</Link>
                <Link href="/london-airports">London Airports</Link>
                <Link href="/new-york-airports">New York Airports</Link>
                <Link href="/methodology">Methodology</Link>
              </div>
            </div>
            <div>
              <span className={styles.footerColTitle}>Company</span>
              <div className={styles.footerLinks}>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>Know the real cost before you book.</span>
            <span>&copy; 2026 Travelvus</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
