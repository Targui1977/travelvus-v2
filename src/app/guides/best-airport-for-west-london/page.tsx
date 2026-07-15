import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best Airport for West London: Complete Guide | Travelvus",
  description: "Which London airport is best for Paddington, Kensington, Hammersmith, Ealing and Heathrow area? Compare transfer times and costs.",
  alternates: { canonical: "/guides/best-airport-for-west-london" },
};

const FAQ_ITEMS = [{"question": "How close is Heathrow to central west London?", "answer": "Heathrow is 24km from Paddington. The Heathrow Express takes 15 minutes. Hammersmith is ~25 minutes on the Piccadilly Line. Ealing is ~20 minutes on the Elizabeth Line."}, {"question": "Is Gatwick possible for west London?", "answer": "Possible but not ideal. Gatwick Express to Victoria (~30 min), then District/Circle Line west (~20–30 min). Total: 50–70 minutes."}];

export default function BestAirportForWestLondonPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for west London?</h1>
          <p className={styles.guideHeroSub}>Heathrow wins overwhelmingly for west London — it IS west London's airport.</p>
          <div className={styles.guideHeroMeta}>
            <span>3 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for west london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for west london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Heathrow wins overwhelmingly for west London — it IS west London's airport.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>Heathrow is the definitive choice for west London</strong>. The airport is located in the London Borough of Hillingdon — it IS a west London destination. Paddington is 15 minutes away on the Heathrow Express. Ealing, Hammersmith, Chiswick and Kensington are all within 30–45 minutes by Tube, Elizabeth Line or taxi. No other airport comes close.</p>
            <h2 id="section-1">West London airport comparison</h2>
            <p>For west London, the airport choice is essentially made for you — but here is how the alternatives compare if Heathrow is not available for your route:</p>
            <h2 id="section-2">Why Heathrow dominates west London</h2>
            <p>Heathrow is physically located in west London. The Piccadilly Line serves Hounslow, Hammersmith, Acton and Ealing directly. The Elizabeth Line serves Hayes, Southall, Ealing, Acton and Paddington. Buses connect the airport to Hillingdon, Uxbridge and surrounding areas. Taxis and rideshares from Heathrow to west London destinations are short and relatively inexpensive (£20–40).</p>
            <h2 id="section-3">When another airport might work</h2>
            <p>If your route is not served from Heathrow, Gatwick (Gatwick Express to Victoria, then District/Circle Line west) is the next best at ~60–75 minutes total. London City Airport requires crossing central London to reach the west — not ideal. Stansted and Luton are on the wrong side of the city and should be avoided for west London if alternatives exist.</p>

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
                <Link href="/compare/heathrow-vs-gatwick" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Heathrow vs Gatwick</span><span className={styles.relatedGuideCardText}>Which London airport really wins on real cost?</span></Link>
                <Link href="/guides/total-travel-time-comparison" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Time Guide</span><span className={styles.relatedGuideCardTitle}>Total Travel Time Comparison</span><span className={styles.relatedGuideCardText}>Flight duration is just one segment of the door-to-door journey.</span></Link>
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
