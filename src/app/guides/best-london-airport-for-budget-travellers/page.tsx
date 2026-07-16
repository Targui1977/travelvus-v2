import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer"
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best London Airport for Budget Travellers: Complete Guide | Travelvus",
  description: "Which London airport is genuinely cheapest for budget travellers? Compare ticket prices, baggage costs and cheapest airport transfers.",
  alternates: { canonical: "/guides/best-london-airport-for-budget-travellers" },
};

const FAQ_ITEMS = [{"question": "What is the absolute cheapest way to fly into London?", "answer": "A Ryanair flight to Stansted with hand luggage only (£20–40 ticket) plus the National Express coach to central London (£10–12). Total: £30–52 one-way. This is the lowest possible door-to-door cost."}, {"question": "Which budget airline has the lowest total cost?", "answer": "It depends on the route. Ryanair usually has the lowest base fares. Wizz Air competes aggressively on Eastern European routes. easyJet often provides the best balance of price and convenience because its main base is Gatwick — closer to London than Stansted or Luton."}];

export default function BestLondonAirportForBudgetTravellersPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for budget travellers?</h1>
          <p className={styles.guideHeroSub}>Stansted wins for Ryanair flyers. Luton wins for Wizz Air and easyJet. Gatwick wins for easyJet with better transfer. Always compare total cost.</p>
          <div className={styles.guideHeroMeta}>
            <span>4 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for budget travellers</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for budget travellers</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Stansted wins for Ryanair flyers. Luton wins for Wizz Air and easyJet. Gatwick wins for easyJet with better transfer. Always compare total cost.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>Budget travellers should choose their airport based on which budget airline serves their route.</strong> Ryanair: Stansted. Wizz Air: Luton. easyJet: Gatwick (primary) or Luton. Once you know your airline, check the total cost — ticket + baggage + transfer. A £30 Ryanair ticket to Stansted becomes a £90+ journey once you add a checked bag (£45) and the Stansted Express (£17).</p>
            <h2 id="section-1">Budget airport comparison</h2>
            <p>Here is how the three budget-focused airports compare for the budget traveller:</p>
            <h2 id="section-2">The hidden costs of budget travel</h2>
            <p>Budget airlines save you money on the ticket but charge for everything else. Checked bag: £35–60. Cabin bag (if not included): £10–25. Seat selection: £5–15. Airport transfer from a distant airport: £10–25. Always calculate the total cost before booking — a £60 easyJet ticket from Gatwick can be cheaper in total than a £30 Ryanair ticket from Stansted once everything is added up.</p>
            <h2 id="section-3">When to choose a non-budget airport on a budget</h2>
            <p>Sometimes a full-service ticket to Heathrow is cheaper overall. BA and other full-service airlines often include checked baggage in the ticket price. The Heathrow transfer is cheaper (£5–12 on the Tube/Elizabeth Line). If the gap between the budget ticket + extras and the full-service ticket is less than £20, the full-service option is usually the better choice.</p>

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
                <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Cost Guide</span><span className={styles.relatedGuideCardTitle}>How to Compare Two Flights Properly</span><span className={styles.relatedGuideCardText}>The complete framework for comparing real flight costs.</span></Link>
                <Link href="/compare/stansted-vs-luton" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Stansted vs Luton</span><span className={styles.relatedGuideCardText}>Which budget airport is right for your journey?</span></Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
