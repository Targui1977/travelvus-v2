import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import Footer from "@/components/ui/Footer";
import { AirportComparisonMap, TrustGraphic } from "@/components/visual";

export const metadata: Metadata = {
  title: "Compare Paris Airports — Which Is Actually Best? | Travelvus",
  description: "CDG, Orly, or Beauvais? Compare real transfer times, costs, and convenience to choose the best Paris airport for your journey.",
  alternates: { canonical: "/paris-airports" },
};

const ROWS = [
  { n: "01", label: "The core decision", question: "CDG or Orly — which Paris airport wins?", pair: "Charles de Gaulle vs Orly",
    insight: "CDG wins for international flights and Air France connections. Orly wins for medium-haul European flights, domestic routes, and southern Paris. Beauvais is budget-only — 85km from Paris with a 1h 15m shuttle bus.", cta: "Compare CDG vs Orly →", href: "/guides/cdg-vs-orly" },
  { n: "02", label: "Transit reality", question: "Closest airport is not always fastest.", pair: "Orly vs CDG",
    insight: "Orly is 13km from central Paris — half the distance of CDG at 25km. But CDG's RER B takes ~35 min to Châtelet. Orly requires the Orlyval light rail plus a transfer at Antony to reach the same RER B — also ~35 min total. Distance alone does not decide.", cta: "Compare CDG vs Orly →", href: "/guides/cdg-vs-orly" },
  { n: "03", label: "Budget reality", question: "Is Beauvais worth the 1h 15m shuttle bus?", pair: "Beauvais vs CDG/Orly",
    insight: "Ryanair tickets from Beauvais can be €15–30. But the shuttle bus costs €17 and takes 1h 15m — each way. A €30 ticket becomes €64 with the bus, and costs you 2h 30m in transfers. Compare the total door-to-door cost before choosing Beauvais.", cta: "Compare your journey →", href: "/#compare" },
];

export default function ParisHubPage() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <HomeHeader />
        <div style={{ background: "var(--paper)", borderRadius: 14, margin: "24px auto 0", padding: "48px 52px", boxShadow: "0 1px 2px rgba(30,42,51,.04), 0 4px 16px rgba(30,42,51,.06)" }}>
          <section style={{ marginBottom: 36 }}>
            <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 16 }}>Paris Airport Decision Hub</span>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 36, lineHeight: 1.15, color: "var(--ink)", margin: "0 0 14px", maxWidth: 680 }}>Which Paris airport is actually best for your journey?</h1>
            <p style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.5, color: "#4a5560", maxWidth: 580 }}>CDG, Orly, or Beauvais? Each wins for different travellers. This hub shows you which airport fits <strong style={{ fontWeight: 600, color: "var(--ink)" }}>your</strong> journey — based on your destination, your airline, and what you value.</p>
          </section>
          <AirportComparisonMap cityName="Central Paris" airports={[{ code: "CDG", name: "CDG", distance: "25 km NE", isWinner: true },{ code: "ORY", name: "Orly", distance: "13 km S" },{ code: "BVA", name: "Beauvais", distance: "85 km N" }]} />
          <section style={{ marginTop: 32 }}>
            {ROWS.map((row) => (
              <div key={row.n} style={{ padding: "22px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 6 }}>{row.label}</span>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, lineHeight: 1.3, color: "var(--ink)", display: "block", marginBottom: 6 }}>{row.question}</span>
                <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13, color: "var(--muted)", display: "block", marginBottom: 4 }}>{row.pair}</span>
                <p style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.55, color: "#4a5560", margin: "0 0 8px" }}>{row.insight}</p>
                <Link href={row.href} style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 12, color: "var(--copper)" }}>{row.cta}</Link>
              </div>
            ))}
          </section>
          <section style={{ marginTop: 28 }}>
            <div style={{ background: "var(--navy)", borderRadius: 12, padding: "22px 26px", display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ flex: 1 }}><span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span><span style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--paper)" }}>Compare your own Paris journey</span></div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: 8, padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>
          </section>
          <section style={{ marginTop: 24 }}><TrustGraphic verified lastReviewed="July 2026" sources={["RATP", "SNCF", "Aéroports de Paris"]} methodologyHref="/methodology" /></section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
