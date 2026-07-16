import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer"
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best Airport for East London: Complete Guide | Travelvus",
  description: "Which London airport is best for Shoreditch, Hackney, Stratford, Canary Wharf and Docklands? Compare real transfer times and cost.",
  alternates: { canonical: "/guides/best-airport-for-east-london" },
};

const FAQ_ITEMS = [{"question": "Which airport is closest to Canary Wharf?", "answer": "London City Airport (LCY) is closest. The DLR takes ~20 minutes from the terminal to Canary Wharf station. This is the fastest airport-to-office connection of any London airport."}, {"question": "Which airport is best for Stratford?", "answer": "Stansted is best for Stratford. The Stansted Express to Tottenham Hale (~40 min), then Victoria Line to Highbury & Islington, then Overground to Stratford (~25 min). Total door-to-door: ~70 minutes. London City Airport via DLR to Stratford (change at Poplar) is also good at ~30–40 minutes."}, {"question": "Is Heathrow worth it for east London?", "answer": "Heathrow is on the west side of London — a long journey to east London. Elizabeth Line to Whitechapel, then change for DLR or Overground. Total journey to Canary Wharf or Stratford: 60–80 minutes. Only use Heathrow for east London if you have no other choice."}, {"question": "Which airport is best for Hackney?", "answer": "Stansted via Tottenham Hale, then Victoria Line to Highbury & Islington and Overground to Hackney — total ~60–70 minutes. London City Airport via DLR to Stratford then Overground is also good at ~45–55 minutes."}];

export default function BestAirportForEastLondonPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for east London?</h1>
          <p className={styles.guideHeroSub}>London City Airport wins for Canary Wharf and Docklands. Stansted wins for northeast London, Hackney and Stratford.</p>
          <div className={styles.guideHeroMeta}>
            <span>4 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for east london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for east london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>London City Airport wins for Canary Wharf and Docklands. Stansted wins for northeast London, Hackney and Stratford.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p>East London is split between two airports. <strong>London City Airport is unbeatable for Canary Wharf, Docklands and the Isle of Dogs</strong> — the DLR takes ~20 minutes. <strong>Stansted is better for northeast London — Hackney, Stratford, Walthamstow</strong> — the Stansted Express to Tottenham Hale connects to the Victoria Line. Heathrow and Gatwick are both on the wrong side of London for east London destinations.</p>
            <h2 id="section-1">East London airport comparison</h2>
            <p>Here is how the airports compare for reaching different parts of east London:</p>
            <h2 id="section-2">London City Airport: the Canary Wharf specialist</h2>
            <p>London City Airport is purpose-built for east London business travellers. The DLR connects directly from the terminal to Canary Wharf (~20 min), Bank (~25 min) and Stratford (~30 min via Poplar). The total door-to-door journey from landing to office can be under 45 minutes — no other London airport achieves this for Docklands.</p>
            <h2 id="section-3">Stansted: best for northeast London</h2>
            <p>Stansted is geographically closer to northeast London than any other airport except City. The Stansted Express serves Tottenham Hale (Victoria Line) and Liverpool Street. From Tottenham Hale, Hackney, Stoke Newington and Walthamstow are a short bus or Overground ride away. For Stratford, the Stansted Express to Liverpool Street then Central Line is the best route.</p>
            <h2 id="section-4">When to use another airport</h2>
            <p>If London City doesn't serve your route and you are heading to Canary Wharf, Heathrow with the Elizabeth Line (change at Whitechapel for DLR) is the next best option at ~60–75 minutes total. Gatwick is reasonable for southeast London. Luton is rarely the best choice for east London.</p>

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
                <Link href="/compare/stansted-vs-london-city" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Stansted vs London City</span><span className={styles.relatedGuideCardText}>Budget vs speed — which wins for east London?</span></Link>
                <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Cost Guide</span><span className={styles.relatedGuideCardTitle}>Real Cost of a Flight</span><span className={styles.relatedGuideCardText}>Why cheap tickets often become expensive after baggage and transfers.</span></Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
