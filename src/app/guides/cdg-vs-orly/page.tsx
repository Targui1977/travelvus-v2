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

const TOC_ITEMS = ["The 30-second answer","Why distance only half-decides","Transfer comparison","Best by neighbourhood","When CDG wins","When Orly wins","The verdict","FAQ"];

export default function CdgVsOrly() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />
        <HeroEditorial category="Airport Decision" question="CDG vs Orly: Which Paris Airport Is Actually Better?" subtitle="Both are 13–25km from central Paris with direct rail connections. But the airline, your destination in Paris, and the type of flight change which one wins." metadata={{ readTime: "5 min read", reviewedDate: "Oct 2026", verified: true }}
          decisionCard={{ winner: "CDG for long-haul · Orly for central and southern Paris", timeSaved: "~25 min Metro 14 to central", moneySaved: "€14 rail from both airports", bestFor: "CDG: long-haul, Right Bank. Orly: central, Left Bank, domestic.", confidence: "context-dependent" }}
          visual={{ type: "airport-map", data: { cityName: "Central Paris", airports: [{ code: "ORY", name: "Orly", distance: "13 km S — Metro 14 ~25 min", isWinner: true },{ code: "CDG", name: "CDG", distance: "25 km NE — RER B ~35–40 min" }] }}}
          snapshot={[{ label: "Best for long-haul", value: "CDG" },{ label: "Best for central Paris", value: "Orly" },{ label: "Fastest to central", value: "Orly ~25 min" }]}
          cta={{ label: "Compare your own trip →", href: "/#compare" }}
          decisionIntelligence={{ state: "conditionally_recommended", recommendation: "Orly for central Paris and the Left Bank — CDG for long-haul and the Right Bank", summary: "Orly is now the faster airport to central Paris: Metro 14 runs direct to Châtelet in ~25 minutes. CDG's RER B takes ~35–40 minutes. Both use the same €14 airport ticket. Orly also has cheaper taxis (€36–45 vs €56–65), while CDG wins on long-haul routes and Right Bank access.", advantages: ["Orly: Metro 14 direct to Châtelet in ~25 min for €14","Orly: cheaper official taxis (€36–45 vs CDG €56–65)","CDG: widest long-haul network and Air France hub","CDG: direct RER B to Gare du Nord in ~35–40 min"], tradeoffs: [{ advantage: "Orly's direct Metro 14 connection", disadvantage: "Fewer long-haul and international routes than CDG" },{ advantage: "CDG's direct RER B to Gare du Nord", disadvantage: "Higher taxi flat fares than Orly (€56–65 vs €36–45)" },{ advantage: "Both airports use the same €14 rail ticket", disadvantage: "Rail cost no longer separates the two airports" }], flips: [{ condition: "Flying internationally outside Europe", result: "CDG becomes the practical choice — most long-haul routes only serve CDG" },{ condition: "Destination is central Paris or the Left Bank", result: "Orly becomes the stronger recommendation — Metro 14 direct and cheaper taxis" },{ condition: "Destination is the Right Bank or northern Paris", result: "CDG becomes stronger — RER B serves Gare du Nord and Châtelet directly" },{ condition: "Flying domestically within France", result: "Orly often has more domestic options and better schedules" }], limitations: [{ condition: "Major transport disruption or strike", impact: "Normal transfer comparison no longer applies — both airports affected" },{ condition: "Construction at either airport", impact: "Transfer times may be longer than published estimates" }], unknowns: ["Whether you are flying long-haul, medium-haul or domestic","Your exact arrondissement or final destination in Paris","Your preferred airline — Air France operates from both airports on different routes","Your arrival time — late-night options differ between the two airports"] }}
          evidence={{ factors: [
            { title: "Flight availability", explanation: "CDG and Orly serve different route and airline networks. Long-haul international flights require CDG; many domestic and medium-haul routes use Orly.", weight: "critical" },
            { title: "Paris destination", explanation: "The final arrondissement or onward connection can change the best airport. Orly is closer to the Left Bank; CDG serves the Right Bank better.", weight: "critical" },
            { title: "Public transport connection", explanation: "Both airports now have a direct train to central Paris: CDG's RER B (~35–40 min) and Orly's Metro 14 (~25 min).", weight: "high" },
            { title: "Total transfer cost", explanation: "Rail costs are identical (€14 airport ticket from both). Orly taxis are cheaper: €36–45 flat versus €56–65 from CDG.", weight: "high" },
            { title: "Traveller profile", explanation: "International connections, families and short city trips have different priorities between the two airports.", weight: "medium" },
          ], limitations: [
            "Long-haul or connecting flights may require CDG.",
            "Southern Paris destinations can favour Orly.",
            "Strike disruption or construction can change transfer performance.",
            "Flight schedule may outweigh airport convenience.",
          ], trace: ["Flight type", "Paris destination", "Transport options", "Transfer cost and time", "Recommendation"], strength: "Conditional" }}
        />
        <div className={styles.tocRail}>
          <div><div className={styles.tocSticky}><ul>{TOC_ITEMS.map((item, i) => (<li key={i}><a href={`#section-${i}`}>{item}</a></li>))}</ul></div><MobileTOC items={TOC_ITEMS.map((label, i) => ({ label, anchor: `#section-${i}` }))} /></div>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Decision</div><div className={styles.decisionSummaryValue}>Which Paris airport creates the better journey</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>CDG for long-haul and Air France. Orly for central Paris, the Left Bank, and domestic.</div></div>
            </div>
            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>CDG wins for long-haul international flights and Air France connections.</strong> It has the widest route choice and the direct RER B to Gare du Nord and Châtelet in ~35–40 minutes (€14). <strong>Orly wins for central Paris and the Left Bank</strong> — Metro 14 runs direct to Châtelet in ~25 minutes for the same €14, and official taxis are cheaper (€36–45 vs €56–65). Orly also remains strong for domestic French and medium-haul European routes. Your airline, your destination in Paris, and how you leave the airport should decide.</p>
            <h2 id="section-1">Why distance only half-decides</h2>
            <p>Orly is 13km from central Paris — half the distance of CDG at 25km. Since Metro 14 opened direct to Châtelet in June 2024, that proximity shows up in the journey time: ~25 minutes from Orly versus ~35–40 from CDG on the RER B. <strong>The distance gap is real, but it is only half the decision.</strong> Your destination side of Paris and your airline network still decide which airport is actually better for your trip.</p>
            <h2 id="section-2">Transfer comparison: CDG vs Orly to central Paris</h2>
            <table className={styles.compTable}><thead><tr><th>Factor</th><th>CDG</th><th>Orly</th></tr></thead><tbody>
              <tr><td>Distance</td><td>25 km</td><td><strong>13 km</strong></td></tr>
              <tr><td>Fastest rail to central Paris</td><td>RER B ~35–40 min, €14</td><td><strong>Metro 14 ~25 min, €14</strong></td></tr>
              <tr><td>Other rail option</td><td>—</td><td>Orlyval + RER B ~50 min, same €14 ticket</td></tr>
              <tr><td>Cheapest transit</td><td>€14 airport ticket</td><td>€14 airport ticket · T7 ~€4 (approx, ~55 min)</td></tr>
              <tr><td>Taxi to central</td><td>€56–65 flat</td><td><strong>€36–45 flat</strong></td></tr>
              <tr><td>Late-night service</td><td>RER B until ~00:30, then Noctilien buses</td><td>Metro 14 until ~00:40 (approx), then night buses</td></tr>
            </tbody></table>
            <h2 id="section-3">Best airport by Paris neighbourhood</h2>
            <table className={styles.compTable}><thead><tr><th>Neighbourhood</th><th>Best</th><th>Why</th></tr></thead><tbody>
              <tr><td>Central Paris (Le Marais, Île de la Cité)</td><td><strong>Orly</strong></td><td>Metro 14 direct to Châtelet ~25 min. Taxi €36–45.</td></tr>
              <tr><td>Right Bank (Opéra, Champs-Élysées)</td><td><strong>CDG</strong></td><td>RER B to Châtelet. Roissybus direct to Opéra.</td></tr>
              <tr><td>Left Bank (Saint-Germain, Montparnasse)</td><td><strong>Orly</strong></td><td>Metro 14 to Châtelet ~25 min. OrlyBus to Denfert in ~30 min.</td></tr>
              <tr><td>La Défense</td><td><strong>Orly</strong></td><td>Metro 14 to Châtelet ~25 min, then RER A ~10 min (≈40 total). CDG: RER B + RER A ≈50 min.</td></tr>
              <tr><td>Eastern Paris (Bastille, Nation)</td><td><strong>CDG</strong></td><td>RER B to Gare du Nord, then Métro 5.</td></tr>
              <tr><td>Versailles</td><td><strong>Orly</strong></td><td>Closer by road. By rail, both reach Versailles–Rive Gauche via central Paris (Metro 14 + RER C / RER B + RER C).</td></tr>
            </tbody></table>
            <h2 id="section-4">When CDG wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are flying internationally outside Europe.</strong> CDG is France's primary long-haul hub.</li>
              <li><strong>You fly Air France.</strong> CDG is Air France's main base — the best schedules and connections.</li>
              <li><strong>You are staying on the Right Bank or eastern Paris.</strong> RER B serves these areas directly.</li>
              <li><strong>You arrive after the last RER B.</strong> Noctilien night buses keep serving Paris when the train stops.</li>
            </ul>
            <h2 id="section-5">When Orly wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are staying in central Paris or on the Left Bank.</strong> Metro 14 is direct and the fastest rail link to Châtelet (~25 min).</li>
              <li><strong>You are flying domestically within France.</strong> Orly has extensive domestic and medium-haul routes.</li>
              <li><strong>You fly Transavia, easyJet, or Vueling.</strong> These budget/leisure airlines primarily use Orly.</li>
              <li><strong>You want the cheapest possible taxi.</strong> Orly's flat-rate taxis are €36–45 versus €56–65 from CDG.</li>
            </ul>
            <div className={styles.bridge}><div className={styles.bridgeRule} /><span className={styles.bridgeText}>Travelvus concludes:</span><div className={styles.bridgeRule} /></div>
            <TravelvusVerdict verdictLine="CDG for long-haul. Orly for central Paris." stats={[{ label: "CDG RER to central", value: "35–40", unit: "min" },{ label: "Orly Metro 14 to central", value: "25", unit: "min" },{ label: "Orly taxi", value: "36", unit: "€", accent: true }]} />
            <h2 id="section-6">FAQ</h2>
            <FAQAccordion items={[
              { question: "Which is better — CDG or Orly?", answer: "CDG wins for long-haul international flights, Air France connections, and the Right Bank. Orly wins for central Paris, the Left Bank, domestic French flights, and medium-haul European routes. Orly's Metro 14 reaches Châtelet in ~25 minutes; CDG's RER B takes ~35–40. Both cost €14 by rail." },
              { question: "Is Orly closer to Paris than CDG?", answer: "Yes — Orly is 13km from central Paris versus CDG at 25km. Since Metro 14 opened direct to Châtelet in June 2024, Orly is also faster to central Paris: ~25 minutes versus ~35–40 minutes on CDG's RER B." },
              { question: "How much is a taxi from CDG to central Paris?", answer: "Official flat-rate taxis cost €56 to the Right Bank and €65 to the Left Bank. The journey takes 45–70 minutes depending on traffic. Rideshare services are typically cheaper." },
              { question: "How much is a taxi from Orly to central Paris?", answer: "Official flat-rate taxis cost €45 to the Right Bank and €36 to the Left Bank. The journey takes 30–50 minutes depending on traffic. Orly taxis are significantly cheaper than CDG taxis due to the shorter distance." },
              { question: "Should I consider Beauvais (BVA) for Paris?", answer: "Only if you are on a very tight budget and value ticket price over time. Beauvais is 85km from Paris. The Ryanair shuttle bus takes 1h 15m and costs about €17 each way (approximate). A €20 Ryanair ticket becomes ~€54 with the bus, and costs you 2h 30m in transfers. For most travellers, CDG or Orly are better choices." },
            ]} />
            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginTop: 32, marginBottom: 32 }}>
              <div style={{ flex: 1 }}><span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span><span style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--paper)" }}>Compare your complete Paris journey.</span></div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>
            <div className={styles.relatedGuides}><h2>Continue your decision</h2><div>
              <Link href="/paris-airports" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Paris Airport Decisions</div><p className={styles.relatedGuideDesc}>Explore the complete Paris airport ecosystem.</p></div><span className={styles.relatedGuideCta}>Read &rarr;</span></Link>
              <Link href="/guides/best-airport-for-central-paris" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Best Airport for Central Paris</div><p className={styles.relatedGuideDesc}>Which airport wins for your Paris neighbourhood?</p></div><span className={styles.relatedGuideCta}>Read &rarr;</span></Link>
              <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>How to Compare Two Flights Properly</div><p className={styles.relatedGuideDesc}>The ticket price is never the full story.</p></div><span className={styles.relatedGuideCta}>Read &rarr;</span></Link>
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
