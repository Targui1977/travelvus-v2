import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Cheapest London Airport: Complete Cost Comparison | Travelvus",
  description: "Which London airport is actually cheapest after baggage, airport transfers and total journey costs? Real door-to-door cost comparison.",
  alternates: { canonical: "/guides/cheapest-london-airport" },
};

const FAQ_ITEMS = [{"question": "Which London airport has the cheapest tickets?", "answer": "Stansted (Ryanair's largest UK base), Luton (Wizz Air, easyJet) and Gatwick (easyJet) typically have the lowest advertised ticket prices, often £30–60 one-way within Europe. But ticket price is not total journey cost."}, {"question": "How much does the airport transfer add to the total cost?", "answer": "Heathrow: £5–25 (Piccadilly Line or Elizabeth Line). Gatwick: £15–20. Stansted: £10–17. Luton: £10–15. London City: ~£3 (DLR). The cheapest transfer is London City, but it has the most expensive tickets."}, {"question": "Is a £30 Ryanair ticket actually cheaper than a £120 BA ticket?", "answer": "Add it up: £30 ticket + £45 checked bag + £17 Stansted Express = £92. The £120 BA ticket to Heathrow often includes baggage. Plus the Elizabeth Line to central London is £12, total £132. The gap shrinks from £90 to £40. If you value your time, Heathrow may actually win."}];

export default function CheapestLondonAirportPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is actually the cheapest?</h1>
          <p className={styles.guideHeroSub}>Stansted, Luton and Gatwick have the cheapest tickets — but once you add baggage and the airport transfer, a more expensive ticket to Heathrow can be cheaper overall.</p>
          <div className={styles.guideHeroMeta}>
            <span>5 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for actually the cheapest</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for actually the cheapest</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Stansted, Luton and Gatwick have the cheapest tickets — but once you add baggage and the airport transfer, a more expensive ticket to Heathrow can be cheaper overall.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p>The cheapest ticket is rarely the cheapest journey. <strong>Stansted, Luton and Gatwick have the lowest advertised ticket prices</strong> (Ryanair, Wizz Air, easyJet — often £30–60 one-way). But once you add a checked bag (£35–60), an airport transfer (£10–25), and factor in schedule waiting, a more expensive ticket to Heathrow (which is closer to central London and has cheaper transfers) can be cheaper overall. Always compare the <strong>complete door-to-door cost</strong> — not just the ticket price.</p>
            <h2 id="section-1">Real cost comparison: ticket vs total journey</h2>
            <p>Here is a typical comparison for a European flight with one checked bag to central London:</p>
            <h2 id="section-2">Why the cheapest ticket loses</h2>
            <p>The budget airline model works by unbundling: the base fare is low, but everything else costs extra. Checked bag: £35–60. Seat selection: £5–25. Airport transfer from a distant airport: £10–25. Schedule waiting: 30–90 minutes of your time. When you add everything up, the 'cheap' ticket can become the expensive journey.</p>
            <h2 id="section-3">How to find the genuinely cheapest journey</h2>
            <p>Write down the total cost for both options: ticket + baggage + seat selection + airport transfer (both ends) + any schedule-related costs (hotel, taxi). Only then compare. Or use the Travelvus Comparison Engine — paste both flights and it calculates the real cost automatically for supported routes.</p>

            <h2>FAQ</h2>
            <FAQAccordion items={FAQ_ITEMS} />

            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginTop: 32, marginBottom: 32 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.4, color: "var(--paper)" }}>Compare your complete journey — door to door.</span>
              </div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>

            <div className={styles.relatedGuides}>
              <h2 className={styles.relatedGuidesTitle}>Continue your decision</h2>
              <div className={styles.relatedGuidesGrid}>
                <Link href="/london-airport-decision-center" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Center</span><span className={styles.relatedGuideCardTitle}>London Airport Decision Center</span><span className={styles.relatedGuideCardText}>The complete guide to choosing the best London airport.</span></Link>
                <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Cost Guide</span><span className={styles.relatedGuideCardTitle}>How to Compare Two Flights Properly</span><span className={styles.relatedGuideCardText}>The complete framework for comparing the real cost of any two flights.</span></Link>
                <Link href="/compare/heathrow-vs-stansted" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Heathrow vs Stansted</span><span className={styles.relatedGuideCardText}>The budget ticket that became the expensive trip.</span></Link>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.guideFooter}>
          <div className={styles.guideFooterInner}>
            <div><span className={styles.footerBrand}>Travelvus</span><p className={styles.footerBrandText}>Decision engine for smarter air travel.</p></div>
            <div><span className={styles.footerColTitle}>Product</span><div className={styles.footerLinks}><Link href="/">Compare</Link><Link href="/london-airports">Airport Decisions</Link><Link href="/wego-flight">Travel Guides</Link><Link href="/methodology">Methodology</Link></div></div>
            <div><span className={styles.footerColTitle}>Company</span><div className={styles.footerLinks}><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
          </div>
          <div className={styles.guideFooterBottom}><span>Know the real cost before you book.</span><span>&copy; 2026 Travelvus</span></div>
        </footer>
      </div>
    </div>
  );
}
