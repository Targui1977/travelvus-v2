import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import { HeroEditorial } from "@/components/hero";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best Airport for Central Paris: CDG, Orly or Beauvais? | Travelvus",
  description: "Which Paris airport is actually best for central Paris? Compare CDG, Orly, and Beauvais on real transfer time, cost, and neighbourhood fit.",
  alternates: { canonical: "/guides/best-airport-for-central-paris" },
};

export default function BestAirportForCentralParis() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />
        <HeroEditorial category="Neighbourhood Guide" question="Best Airport for Central Paris: CDG, Orly or Beauvais?" subtitle="Your Paris neighbourhood — Right Bank, Left Bank, or central arrondissements — changes which airport is actually the best choice." metadata={{ readTime: "5 min read", reviewedDate: "Oct 2026", verified: true }}
          decisionCard={{ winner: "Orly wins for central Paris · CDG for Right Bank", timeSaved: "~25 min rail to centre", moneySaved: "€36 taxi from Orly (Left Bank)", bestFor: "Orly: Left Bank, central arrondissements. CDG: Right Bank, eastern Paris.", confidence: "conditional" }}
          visual={{ type: "airport-map", data: { cityName: "Central Paris", airports: [{ code: "ORY", name: "Orly", distance: "13 km S — Metro 14 ~25 min", isWinner: true },{ code: "CDG", name: "CDG", distance: "25 km NE — RER B ~35–40 min" },{ code: "BVA", name: "Beauvais", distance: "85 km N — shuttle 1h 15m" }] }}}
          snapshot={[{ label: "Best for Left Bank", value: "Orly" },{ label: "Best for Right Bank", value: "CDG" },{ label: "Avoid for central", value: "Beauvais" }]}
          cta={{ label: "Compare your own trip →", href: "/#compare" }}
          decisionIntelligence={{ state: "conditionally_recommended", recommendation: "Orly — for central Paris and the Left Bank", summary: "Orly is the fastest airport to central Paris: Metro 14 direct to Châtelet in ~25 min at €14, with taxis at €36–45. CDG remains competitive for the Right Bank and northern Paris via RER B (~35–40 min, €14) and is required for most long-haul routes.", advantages: ["Closest airport to central Paris — Metro 14 direct to Châtelet in ~25 min","Cheapest taxis (€36–45 vs CDG €56–65)","Orlybus reaches Denfert-Rochereau in ~30 minutes (approximate fare)","Best for the Châtelet core, Left Bank, Saint-Germain and the 5e–7e"], tradeoffs: [{ advantage: "Metro 14 direct connection", disadvantage: "Fewer long-haul and international routes than CDG" },{ advantage: "Cheaper taxis than CDG", disadvantage: "Metro 14 can be crowded at peak times" },{ advantage: "Compact terminal — less walking", disadvantage: "Right Bank and northern Paris are better served by CDG's RER B" }], flips: [{ condition: "Destination is northern arrondissement (8e, 9e, 18e)", result: "CDG becomes stronger — RER B and Roissybus serve these areas directly" },{ condition: "Flying long-haul or connecting internationally", result: "CDG may be required — most long-haul routes only operate from CDG" },{ condition: "Destination is the Châtelet core or Left Bank (5e, 6e, 7e)", result: "Orly becomes the stronger recommendation" },{ condition: "Heavy road traffic during peak hours", result: "Orly's taxi distance advantage may disappear — rail from CDG becomes more predictable" }], limitations: [{ condition: "Public transport disruption", impact: "RER B or Metro 14 service interruptions affect both airports" },{ condition: "Construction or major events", impact: "Transfer times may vary from published estimates" }], unknowns: ["Your exact arrondissement or street address","Whether your flight is long-haul, medium-haul or domestic","Your preferred transport method — taxi, rail, or bus","Your arrival time — traffic conditions vary dramatically by time of day"] }}
          evidence={{ factors: [
            { title: "Exact arrondissement", explanation: "Central Paris contains materially different arrival routes. The 5th and 6th arrondissements are closest to Orly; the 8th and 9th are better served by CDG.", weight: "critical" },
            { title: "Public transport path", explanation: "Directness and interchange burden affect practical transfer quality. Both airports now have a direct train: CDG's RER B and Orly's Metro 14.", weight: "critical" },
            { title: "Flight network", explanation: "Long-haul and international airline availability may determine the airport before any transfer comparison.", weight: "high" },
            { title: "Total journey time", explanation: "Our comparison includes the complete airport-to-destination route — not only the flight or the rail segment.", weight: "high" },
            { title: "Luggage and traveller profile", explanation: "Transfers with stairs or multiple changes affect families and travellers with heavy luggage more strongly than solo travellers.", weight: "medium" },
          ], limitations: [
            "Northern central Paris can favour CDG.",
            "Long-haul availability may force CDG.",
            "Taxi traffic can erase Orly's distance advantage during peak hours.",
            "Construction and service changes affect public transport.",
          ], trace: ["Arrondissement", "Available airports", "Transport path", "Journey time", "Recommendation"], strength: "Conditional" }}
        />
        <div className={styles.tocRail}><div><MobileTOC items={["The 30-second answer","Transfer comparison","Best by neighbourhood","When Orly wins","When CDG wins","About Beauvais","FAQ"].map((label, i) => ({ label, anchor: `#section-${i}` }))} /></div>
          <div className={styles.guideContent}>
            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>Orly wins for central Paris.</strong> It is the closest airport (13km), Metro 14 runs direct to Châtelet in ~25 minutes for €14, and taxis cost €36–45 flat. The OrlyBus reaches Denfert-Rochereau in ~30 minutes. <strong>CDG wins for the Right Bank</strong> — the RER B reaches Châtelet–Les Halles in ~35–40 min for the same €14, and the Roissybus goes directly to Opéra. <strong>Avoid Beauvais for central Paris</strong> unless you are on an extreme budget — it is 85km away with a 1h 15m shuttle bus.</p>
            <h2 id="section-1">Transfer comparison</h2>
            <table className={styles.compTable}><thead><tr><th>Factor</th><th>Orly</th><th>CDG</th><th>Beauvais</th></tr></thead><tbody>
              <tr><td>Distance</td><td><strong>13 km</strong></td><td>25 km</td><td>85 km</td></tr>
              <tr><td>Fastest to central</td><td><strong>Metro 14 direct ~25 min, €14</strong></td><td>RER B ~35–40 min, €14</td><td>Shuttle bus ~1h 15m, ~€17</td></tr>
              <tr><td>Taxi</td><td><strong>€36–45 flat</strong></td><td>€56–65 flat</td><td>~€150+</td></tr>
              <tr><td>Best for</td><td><strong>Left Bank, central</strong></td><td>Right Bank, eastern</td><td>Extreme budget only</td></tr>
            </tbody></table>
            <h2 id="section-2">Best by neighbourhood</h2>
            <table className={styles.compTable}><thead><tr><th>Neighbourhood</th><th>Best</th><th>Why</th></tr></thead><tbody>
              <tr><td>Le Marais / Île de la Cité (1er–4e)</td><td><strong>Orly</strong></td><td>Metro 14 direct to Châtelet ~25 min, then Métro. Taxi €36–45.</td></tr>
              <tr><td>Saint-Germain / Latin Quarter (5e–6e)</td><td><strong>Orly</strong></td><td>Orly is south. Metro 14 to Châtelet, then a short Métro; or OrlyBus to Denfert-Rochereau.</td></tr>
              <tr><td>Opéra / Grands Boulevards (8e–9e)</td><td><strong>CDG</strong></td><td>Roissybus direct to Opéra. RER B to Châtelet + Métro.</td></tr>
              <tr><td>Champs-Élysées (8e)</td><td><strong>CDG</strong></td><td>RER B to Châtelet, then RER A to Charles de Gaulle–Étoile.</td></tr>
              <tr><td>Montmartre (18e)</td><td><strong>CDG</strong></td><td>RER B to Gare du Nord, then Métro or walk to Montmartre.</td></tr>
              <tr><td>Eiffel Tower / Invalides (7e)</td><td><strong>Orly</strong></td><td>Orly is on the south side — Metro 14 to Châtelet then Métro, or taxi €36–45.</td></tr>
            </tbody></table>
            <div className={styles.bridge}><div className={styles.bridgeRule} /><span className={styles.bridgeText}>Travelvus concludes:</span><div className={styles.bridgeRule} /></div>
            <TravelvusVerdict verdictLine="Orly wins for central Paris." stats={[{ label: "Orly to central", value: "25", unit: "min" },{ label: "Orly taxi", value: "36", unit: "€", accent: true },{ label: "CDG to central", value: "35–40", unit: "min" }]} />
            <h2 id="section-3">When Orly wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}><li>You are staying in the central arrondissements (1er–7e).</li><li>You are on the Left Bank — Orly is on the south side.</li><li>You want the fastest rail link to Châtelet: Metro 14 direct in ~25 min for €14.</li><li>You want the cheapest taxi to central Paris (€36–45 vs CDG&rsquo;s €56–65).</li><li>You are flying domestically or on a medium-haul European route.</li></ul>
            <h2 id="section-4">When CDG wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}><li>You are on the Right Bank — RER B to Châtelet or Roissybus to Opéra.</li><li>You are flying internationally outside Europe — CDG has the most routes.</li><li>You fly Air France — CDG is the main hub.</li><li>You need 24-hour transit — CDG has Noctilien night buses.</li></ul>
            <h2 id="section-5">About Beauvais</h2>
            <p>Beauvais (BVA) is 85km north of Paris. It serves Ryanair flights exclusively. The shuttle bus takes 1h 15m to Porte Maillot and costs about €17 each way (approximate). <strong>For central Paris, Beauvais is rarely the best choice</strong> — the 2h 30m of round-trip transfers and ~€34 in bus fares usually outweigh the ticket savings. Only choose Beauvais if the ticket is at least €50 cheaper than a comparable CDG or Orly fare, and you value the saving over the time.</p>
            <h2 id="section-6">FAQ</h2>
            <FAQAccordion items={[
              { question: "Which airport is best for central Paris?", answer: "Orly wins for most central Paris destinations. It is closest (13km), Metro 14 runs direct to Châtelet in ~25 minutes for €14, and taxis cost €36–45 flat. CDG is better for the Right Bank (Opéra, Champs-Élysées, Montmartre), where the RER B reaches Châtelet in ~35–40 minutes for the same €14." },
              { question: "How long does it take from CDG to central Paris?", answer: "The RER B takes ~35–40 minutes to Châtelet–Les Halles and costs €14. The Roissybus takes ~60 minutes to Opéra and costs about €16 (approximate). A taxi takes 45–70 minutes and costs €56 flat to the Right Bank or €65 to the Left Bank." },
              { question: "Is Beauvais worth it for Paris?", answer: "Rarely for central Paris. Beauvais is 85km away — the shuttle bus takes 1h 15m and costs about €17 each way (approximate). Only choose BVA if the ticket is at least €50 cheaper than CDG or Orly and you value the saving over the 2h 30m of transfer time." },
              { question: "Which airport has the cheapest transfer to Paris?", answer: "By rail, neither is cheaper: the unified airport ticket costs €14 from both CDG and Orly. Orly has the cheaper taxi (€36–45 vs €56–65 from CDG). The slow Tram T7 + Métro from Orly is the lowest published fare (~€4, approximate) but takes ~55 minutes." },
            ]} />
            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginTop: 32, marginBottom: 32 }}>
              <div style={{ flex: 1 }}><span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span><span style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--paper)" }}>Compare your complete Paris journey.</span></div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>
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
