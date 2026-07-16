import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import { HeroEditorial } from "@/components/hero";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "CDG vs Orly: Which Paris Airport Is Actually Better? | Travelvus",
  description: "Charles de Gaulle or Orly? Compare real transfer times, costs, airline choice, and neighbourhood fit to choose the best Paris airport.",
  alternates: { canonical: "/guides/cdg-vs-orly" },
};

const TOC_ITEMS = ["The 30-second answer","Why distance does not decide","Transfer comparison","Best by neighbourhood","When CDG wins","When Orly wins","The verdict","FAQ"];

export default function CdgVsOrly() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />
        <HeroEditorial category="Airport Decision" question="CDG vs Orly: Which Paris Airport Is Actually Better?" subtitle="Both are 13–25km from central Paris with rail connections. But the airline, your destination in Paris, and the type of flight change which one wins." metadata={{ readTime: "5 min read", reviewedDate: "Jul 2026", verified: true }}
          decisionCard={{ winner: "CDG wins for international · Orly for domestic", timeSaved: "~35 min RER to central", moneySaved: "From ~€11 RER B", bestFor: "CDG: international, Air France. Orly: domestic, southern Paris.", confidence: "context-dependent" }}
          visual={{ type: "airport-map", data: { cityName: "Central Paris", airports: [{ code: "CDG", name: "CDG", distance: "25 km NE", isWinner: true },{ code: "ORY", name: "Orly", distance: "13 km S" }] }}}
          snapshot={[{ label: "Best for international", value: "CDG" },{ label: "Best for domestic", value: "Orly" },{ label: "Fastest to central", value: "Tied ~35 min" }]}
          cta={{ label: "Compare your own trip →", href: "/#compare" }}
        />
        <div className={styles.tocRail}>
          <div><div className={styles.tocSticky}><ul>{TOC_ITEMS.map((item, i) => (<li key={i}><a href={`#section-${i}`}>{item}</a></li>))}</ul></div><MobileTOC items={TOC_ITEMS.map((label, i) => ({ label, anchor: `#section-${i}` }))} /></div>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Decision</div><div className={styles.decisionSummaryValue}>Which Paris airport creates the better journey</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>CDG for international and Air France. Orly for domestic, medium-haul, and southern Paris.</div></div>
            </div>
            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>CDG wins for international flights and Air France connections.</strong> It is France's primary hub with the widest route choice. <strong>Orly wins for domestic French flights, medium-haul European routes, and southern Paris.</strong> Both airports have rail connections that reach central Paris in ~35 minutes. The airports are tied on transfer speed — your airline and destination in Paris should decide.</p>
            <h2 id="section-1">Why distance does not decide</h2>
            <p>Orly is 13km from central Paris — half the distance of CDG at 25km. But CDG's RER B train takes ~35 min to Châtelet–Les Halles. Orly requires the Orlyval light rail to Antony station, then a transfer to the RER B — also ~35 min total. <strong>Distance is misleading. Both airports reach central Paris in about the same time by rail.</strong> The quality of the transit link matters more than the mileage.</p>
            <h2 id="section-2">Transfer comparison: CDG vs Orly to central Paris</h2>
            <table className={styles.compTable}><thead><tr><th>Factor</th><th>CDG</th><th>Orly</th></tr></thead><tbody>
              <tr><td>Distance</td><td>25 km</td><td><strong>13 km</strong></td></tr>
              <tr><td>Fastest rail to central Paris</td><td>RER B ~35 min, ~€11</td><td>Orlyval + RER B ~35 min, ~€14</td></tr>
              <tr><td>Cheapest transit</td><td><strong>RER B ~€11</strong></td><td>Tram T7 + Métro ~€4</td></tr>
              <tr><td>Taxi to central</td><td>€55–60 flat</td><td><strong>€35–40 flat</strong></td></tr>
              <tr><td>24-hour transit</td><td><strong>Noctilien night buses</strong></td><td>Limited night service</td></tr>
            </tbody></table>
            <h2 id="section-3">Best airport by Paris neighbourhood</h2>
            <table className={styles.compTable}><thead><tr><th>Neighbourhood</th><th>Best</th><th>Why</th></tr></thead><tbody>
              <tr><td>Central Paris (Le Marais, Île de la Cité)</td><td><strong>Orly</strong></td><td>Closer — taxi in 30–40 min. OrlyBus to Denfert-Rochereau.</td></tr>
              <tr><td>Right Bank (Opéra, Champs-Élysées)</td><td><strong>CDG</strong></td><td>RER B to Châtelet. Roissybus direct to Opéra.</td></tr>
              <tr><td>Left Bank (Saint-Germain, Montparnasse)</td><td><strong>Orly</strong></td><td>Orly is on the south side. OrlyBus to Denfert in ~30 min.</td></tr>
              <tr><td>La Défense</td><td><strong>CDG</strong></td><td>RER B to Châtelet, then RER A to La Défense.</td></tr>
              <tr><td>Eastern Paris (Bastille, Nation)</td><td><strong>CDG</strong></td><td>RER B to Gare du Nord, then Métro 5.</td></tr>
              <tr><td>Versailles</td><td><strong>Orly</strong></td><td>Orlyval + RER C direct to Versailles–Rive Gauche.</td></tr>
            </tbody></table>
            <h2 id="section-4">When CDG wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are flying internationally outside Europe.</strong> CDG is France's primary long-haul hub.</li>
              <li><strong>You fly Air France.</strong> CDG is Air France's main base — the best schedules and connections.</li>
              <li><strong>You are staying on the Right Bank or eastern Paris.</strong> RER B serves these areas directly.</li>
              <li><strong>You need 24-hour transit options.</strong> CDG has Noctilien night buses when the RER stops.</li>
            </ul>
            <h2 id="section-5">When Orly wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are flying domestically within France.</strong> Orly has extensive domestic and medium-haul routes.</li>
              <li><strong>You fly Transavia, easyJet, or Vueling.</strong> These budget/leisure airlines primarily use Orly.</li>
              <li><strong>You are staying on the Left Bank or southern Paris.</strong> Orly is on the south side — closer and cheaper by taxi.</li>
              <li><strong>You want the cheapest possible taxi.</strong> Orly's flat-rate taxis are €35–40 versus CDG's €55–60.</li>
            </ul>
            <div className={styles.bridge}><div className={styles.bridgeRule} /><span className={styles.bridgeText}>Travelvus concludes:</span><div className={styles.bridgeRule} /></div>
            <TravelvusVerdict verdictLine="CDG for international. Orly for domestic." stats={[{ label: "CDG RER to central", value: "35", unit: "min" },{ label: "Orly transit to central", value: "35", unit: "min" },{ label: "Orly taxi", value: "35", unit: "€", accent: true }]} />
            <h2 id="section-6">FAQ</h2>
            <FAQAccordion items={[
              { question: "Which is better — CDG or Orly?", answer: "CDG wins for international flights and Air France connections. Orly wins for domestic French flights, medium-haul European routes, and southern Paris. Both reach central Paris in ~35 minutes by rail. The right choice depends on your airline and where in Paris you are staying." },
              { question: "Is Orly closer to Paris than CDG?", answer: "Yes — Orly is 13km from central Paris versus CDG at 25km. However, the transit time to central Paris is nearly identical (~35 min) because CDG has a direct RER B connection while Orly requires the Orlyval light rail plus a transfer at Antony. Distance does not equal speed." },
              { question: "How much is a taxi from CDG to central Paris?", answer: "Official flat-rate taxis cost €55 to the Right Bank and €60 to the Left Bank. The journey takes 45–70 minutes depending on traffic. Rideshare services cost approximately €35–55." },
              { question: "How much is a taxi from Orly to central Paris?", answer: "Official flat-rate taxis cost €35 to the Right Bank and €40 to the Left Bank. The journey takes 30–50 minutes depending on traffic. Orly taxis are significantly cheaper than CDG taxis due to the shorter distance." },
              { question: "Should I consider Beauvais (BVA) for Paris?", answer: "Only if you are on a very tight budget and value ticket price over time. Beauvais is 85km from Paris. The Ryanair shuttle bus takes 1h 15m and costs €17 each way. A €20 Ryanair ticket becomes €54 with the bus, and costs you 2h 30m in transfers. For most travellers, CDG or Orly are better choices." },
            ]} />
            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginTop: 32, marginBottom: 32 }}>
              <div style={{ flex: 1 }}><span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span><span style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--paper)" }}>Compare your complete Paris journey.</span></div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>
            <div className={styles.relatedGuides}><h2 className={styles.relatedGuidesTitle}>Continue your decision</h2><div className={styles.relatedGuidesGrid}>
              <Link href="/paris-airports" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Hub</span><span className={styles.relatedGuideCardTitle}>Paris Airport Decisions</span><span className={styles.relatedGuideCardText}>Explore the complete Paris airport ecosystem.</span></Link>
              <Link href="/guides/best-airport-for-central-paris" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Neighbourhood Guide</span><span className={styles.relatedGuideCardTitle}>Best Airport for Central Paris</span><span className={styles.relatedGuideCardText}>Which airport wins for your Paris neighbourhood?</span></Link>
              <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Cost Guide</span><span className={styles.relatedGuideCardTitle}>How to Compare Two Flights Properly</span><span className={styles.relatedGuideCardText}>The ticket price is never the full story.</span></Link>
            </div></div>
          </div>
        </div>
        <footer style={{ padding: "88px 48px 0", borderTop: "1px solid var(--line)", marginTop: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 56, paddingBottom: 56 }}>
            <div><span style={{ font: "700 20px/1 Geist, sans-serif", letterSpacing: "-.04em", color: "var(--ink)" }}>Travelvus</span><p style={{ font: "400 14px/1.6 Geist, sans-serif", color: "var(--muted)", margin: "16px 0 0", maxWidth: 280 }}>Decision engine for smarter air travel.</p></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Product</div><div style={{ display: "flex", flexDirection: "column", gap: 13 }}><Link href="/" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Compare</Link><Link href="/london-airports" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>London</Link><Link href="/new-york-airports" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>New York</Link><Link href="/paris-airports" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Paris</Link></div></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Company</div><div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 28 }}><Link href="/about" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>About</Link><Link href="/contact" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Contact</Link></div></div>
          </div>
          <div style={{ borderTop: "1px solid var(--line)", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ font: "italic 400 15px/1 Instrument Serif, Georgia, serif", color: "var(--muted)" }}>Know the real cost before you book.</span><span style={{ font: "400 12px/1 IBM Plex Mono, monospace", color: "#9aa4ac" }}>&copy; 2026 Travelvus</span></div>
        </footer>
      </div>
    </div>
  );
}
