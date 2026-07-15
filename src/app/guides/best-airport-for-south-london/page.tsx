import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best Airport for South London: Complete Guide | Travelvus",
  description: "Which London airport is best for Brixton, Croydon, Clapham, Wimbledon and south London? Compare Gatwick and Heathrow transfer costs and times.",
  alternates: { canonical: "/guides/best-airport-for-south-london" },
};

const FAQ_ITEMS = [{"question": "Which airport is closest to Clapham Junction?", "answer": "Gatwick. Southern trains take ~25 minutes from Gatwick to Clapham Junction. This is the fastest airport-to-south-London connection."}, {"question": "Is Heathrow good for south London?", "answer": "Heathrow is on the west side of London. To reach south London, you need to travel into central London and back out — typically 60–90 minutes. Gatwick is almost always the better choice for south London."}];

export default function BestAirportForSouthLondonPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for south London?</h1>
          <p className={styles.guideHeroSub}>Gatwick is the natural choice for most of south London — direct trains connect to Clapham Junction, East Croydon and Victoria.</p>
          <div className={styles.guideHeroMeta}>
            <span>3 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for south london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for south london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Gatwick is the natural choice for most of south London — direct trains connect to Clapham Junction, East Croydon and Victoria.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>Gatwick is the best airport for south London</strong>. Southern and Thameslink trains connect Gatwick directly to Clapham Junction, East Croydon, London Bridge and Victoria — without needing to cross central London. Gatwick is geographically south of the city, making transfers to south London shorter and cheaper than Heathrow.</p>
            <h2 id="section-1">South London airport comparison</h2>
            <p>Here is how the airports compare for south London neighbourhoods:</p>
            <h2 id="section-2">Why Gatwick wins for south London</h2>
            <p>Gatwick is south of London — the train lines run directly into south London stations. Southern trains serve Clapham Junction, East Croydon, Purley and Sutton. Thameslink trains serve London Bridge, Blackfriars, East Croydon and Brighton. You never need to cross central London to reach your south London destination from Gatwick.</p>
            <h2 id="section-3">When Heathrow is better for south London</h2>
            <p>Heathrow is better for southwest London — Richmond, Twickenham, Kingston. The X26 bus or a taxi from Heathrow can reach these areas faster than travelling from Gatwick. Also, if your flight only arrives at Heathrow, the Piccadilly Line to central London then a southbound train is workable (60–80 minutes total).</p>

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
                <Link href="/compare/gatwick-vs-luton" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Gatwick vs Luton</span><span className={styles.relatedGuideCardText}>Which budget-friendly southern airport wins?</span></Link>
                <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Cost Guide</span><span className={styles.relatedGuideCardTitle}>Real Cost of a Flight</span><span className={styles.relatedGuideCardText}>Why cheap tickets often become expensive after baggage and transfers.</span></Link>
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
