import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import { AirportComparisonMap, TrustGraphic } from "@/components/visual";
import { NY_AIRPORTS } from "@/lib/ny-airports-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Compare New York Airports — Which Is Actually Best? | Travelvus",
  description:
    "JFK, Newark, or LaGuardia? Compare real transfer times, costs, and convenience to choose the best New York airport for your journey.",
  alternates: { canonical: "/new-york-airports" },
};

const ROWS = [
  {
    n: "01", label: "Distance trap",
    question: "Is the closest airport actually the best?",
    pair: "JFK vs Newark",
    insight: "LaGuardia is closest at 8 miles — but has no rail connection. Newark is further but has the fastest train to Midtown. Closest is not always fastest.",
    href: "/compare/jfk-vs-newark",
    cta: "Compare JFK vs Newark →",
  },
  {
    n: "02", label: "Transit effect",
    question: "Which airport has the best public transport?",
    pair: "JFK vs LaGuardia",
    insight: "JFK's AirTrain + LIRR reaches Penn Station in ~35 min. LaGuardia requires a bus to reach the subway. Rail access changes the real journey time.",
    href: "/compare/jfk-vs-laguardia",
    cta: "Compare JFK vs LaGuardia →",
  },
  {
    n: "03", label: "Airline lock-in",
    question: "Does your airline choose your airport for you?",
    pair: "Newark vs LaGuardia",
    insight: "United flyers go to Newark by default. Delta and American serve both JFK and LGA. Your frequent flyer status may override the 'best' airport choice.",
    href: "/compare/newark-vs-laguardia",
    cta: "Compare Newark vs LaGuardia →",
  },
];

export default function NYHubPage() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <HomeHeader />

        <div style={{ background: "var(--paper)", borderRadius: 14, margin: "24px auto 0", padding: "40px 48px", boxShadow: "0 1px 2px rgba(30,42,51,.04), 0 4px 16px rgba(30,42,51,.06)" }}>
          {/* Hero */}
          <section style={{ marginBottom: 32 }}>
            <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 16 }}>
              New York Airport Hub
            </span>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 36, lineHeight: 1.15, color: "var(--ink)", margin: "0 0 16px" }}>
              Compare New York Airports — Which Is Actually Best?
            </h1>
            <p style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 17, lineHeight: 1.5, color: "#4a5560", maxWidth: 620, margin: 0 }}>
              JFK, Newark, or LaGuardia? The answer depends on where you are going in New York, which airline you fly, and whether you value speed or cost.
            </p>
          </section>

          {/* Airport Distance Map */}
          <section style={{ marginBottom: 32 }}>
            <AirportComparisonMap
              cityName="Midtown Manhattan"
              airports={[
                { code: "JFK", name: "JFK", distance: "15 mi SE", isWinner: true },
                { code: "EWR", name: "Newark", distance: "16 mi W" },
                { code: "LGA", name: "LaGuardia", distance: "8 mi E" },
              ]}
            />
          </section>

          {/* Decision Rows */}
          <section>
            {ROWS.map((row) => (
              <div key={row.n} style={{ padding: "22px 0", borderBottom: "1px solid var(--line)", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 18, color: "var(--copper)", flex: "none", paddingTop: 2 }}>{row.n}</span>
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 6 }}>{row.label}</span>
                  <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, lineHeight: 1.3, color: "var(--ink)", display: "block", marginBottom: 6 }}>{row.question}</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13, color: "var(--muted)", display: "block", marginBottom: 4 }}>{row.pair}</span>
                  <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 14, lineHeight: 1.55, color: "#4a5560", margin: "0 0 8px" }}>{row.insight}</p>
                  <Link href={row.href} style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 12, color: "var(--copper)" }}>{row.cta}</Link>
                </div>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section style={{ marginTop: 28 }}>
            <div style={{ background: "var(--navy)", borderRadius: 12, padding: "22px 26px", display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--paper)" }}>
                  Compare your own New York journey
                </span>
              </div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: 8, padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>
          </section>

          {/* Trust */}
          <section style={{ marginTop: 24 }}>
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
            <div><span className={styles.footerBrand}>Travelvus</span><p className={styles.footerBrandText}>Decision engine for smarter air travel.</p></div>
            <div><span className={styles.footerColTitle}>Product</span><div className={styles.footerLinks}><Link href="/">Compare</Link><Link href="/london-airports">London Airports</Link><Link href="/new-york-airports">New York Airports</Link><Link href="/methodology">Methodology</Link></div></div>
            <div><span className={styles.footerColTitle}>Company</span><div className={styles.footerLinks}><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
          </div>
          <div className={styles.footerBottom}><span>Know the real cost before you book.</span><span>&copy; 2026 Travelvus</span></div>
        </footer>
      </div>
    </div>
  );
}
