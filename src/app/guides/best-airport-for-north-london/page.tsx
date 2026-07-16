import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer"
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best Airport for North London: Complete Guide | Travelvus",
  description: "Which London airport is best for Camden, Islington, Hampstead and north London? Compare Luton, Stansted and Heathrow transfer times.",
  alternates: { canonical: "/guides/best-airport-for-north-london" },
};

const FAQ_ITEMS = [{"question": "Which is better for Camden — Luton or Stansted?", "answer": "Luton. Thameslink from Luton Airport Parkway to St Pancras takes ~25 minutes. Camden is a 10-minute walk or 5-minute bus from St Pancras."}, {"question": "Is Heathrow an option for north London?", "answer": "Yes but not ideal. Piccadilly Line to north London (Finsbury Park, Wood Green) takes 60–75 minutes. Only use Heathrow if your route is not served by Luton or Stansted."}];

export default function BestAirportForNorthLondonPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for north London?</h1>
          <p className={styles.guideHeroSub}>Luton and Stansted are the closest airports to north London. Luton via Thameslink to St Pancras is fastest for northwest London. Stansted via Tottenham Hale is best for northeast London.</p>
          <div className={styles.guideHeroMeta}>
            <span>3 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for north london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for north london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Luton and Stansted are the closest airports to north London. Luton via Thameslink to St Pancras is fastest for northwest London. Stansted via Tottenham Hale is best for northeast London.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p>North London is best served by <strong>Luton (northwest) and Stansted (northeast)</strong>. Luton's DART + Thameslink reaches St Pancras in ~40 minutes — ideal for Camden, Islington and King's Cross. Stansted Express to Tottenham Hale connects to the Victoria Line for Finsbury Park, Seven Sisters and Walthamstow. Heathrow is also viable for northwest London (Harrow, Wembley) but is further away.</p>
            <h2 id="section-1">North London airport comparison</h2>
            <p>Here is how the airports compare for north London:</p>
            <h2 id="section-2">Luton: best for northwest London</h2>
            <p>Luton Airport is north of London. The DART shuttle (5 minutes) connects to Luton Airport Parkway station, where Thameslink trains run to St Pancras (~25 min), West Hampstead and Kentish Town. From St Pancras, Camden, Islington and King's Cross are walking distance or a short bus ride. Total door-to-door to Camden: ~50–60 minutes.</p>
            <h2 id="section-3">Stansted: best for northeast London</h2>
            <p>Stansted Airport is northeast of London. The Stansted Express serves Tottenham Hale (~40 min), connecting to the Victoria Line for Finsbury Park, Seven Sisters and Walthamstow. For Hackney, change at Tottenham Hale for Overground or bus. Total door-to-door to Finsbury Park: ~55–65 minutes.</p>

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
                <Link href="/compare/stansted-vs-luton" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Stansted vs Luton</span><span className={styles.relatedGuideCardText}>Which budget airport wins for north London?</span></Link>
                <Link href="/guides/total-travel-time-comparison" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Time Guide</span><span className={styles.relatedGuideCardTitle}>Total Travel Time Comparison</span><span className={styles.relatedGuideCardText}>Flight duration is just one segment of the door-to-door journey.</span></Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
