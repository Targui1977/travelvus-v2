import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer"
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best London Airport for Families: Complete Guide | Travelvus",
  description: "Which London airport is easiest with children? Compare transfers, terminal facilities, waiting times and family-friendly features.",
  alternates: { canonical: "/guides/best-london-airport-for-families" },
};

const FAQ_ITEMS = [{"question": "Which airport has the shortest walks with children?", "answer": "London City Airport — you walk from the plane to the DLR platform in about 20 minutes. The terminal is tiny. However, LCY serves very limited routes. Of the major airports, Gatwick's single-terminal design (South Terminal handles most flights) has the shortest walks."}, {"question": "Is Stansted OK for families?", "answer": "Stansted is functional but the 50-minute Stansted Express or 75–90 minute coach transfer is hard with tired children and luggage. If you have no choice, book the Stansted Express and allow extra time."}];

export default function BestLondonAirportForFamiliesPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for families?</h1>
          <p className={styles.guideHeroSub}>Heathrow is the best airport for families — direct train connections, no coach transfers, good terminal facilities and the widest choice of airlines and flight times.</p>
          <div className={styles.guideHeroMeta}>
            <span>4 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for families</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for families</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Heathrow is the best airport for families — direct train connections, no coach transfers, good terminal facilities and the widest choice of airlines and flight times.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>Heathrow is the best London airport for families with children.</strong> Direct train connections (no coach transfers with tired children and luggage), good terminal facilities including play areas and family lanes at security, and the widest choice of airlines and flight times. Gatwick is also good for families, especially for south London and southern Europe flights. Stansted, Luton and London City are less family-friendly — longer transfers, fewer facilities, or limited routes.</p>
            <h2 id="section-1">What makes an airport family-friendly</h2>
            <p>When travelling with children, these factors matter most: direct train connection from the terminal (no shuttle bus or coach), short walking distances, family security lanes, play areas or quiet spaces near gates, and a good choice of flight times so you can avoid very early or very late departures.</p>
            <h2 id="section-2">Why Heathrow wins for families</h2>
            <p>Heathrow scores highly on every family factor. The Elizabeth Line and Piccadilly Line connect directly from all terminals — no shuttle bus needed. Terminals have family lanes at security. There are play areas in Terminals 2, 3, 4 and 5. Flight choice is unmatched — you can find a departure time that works for your family's routine rather than being forced into a 06:00 Ryanair departure.</p>
            <h2 id="section-3">Which airports to avoid with children</h2>
            <p><strong>Stansted</strong> requires a 50-minute train or 75–90 minute coach transfer — hard with tired children. <strong>Luton</strong> requires the DART shuttle bus plus a train — two transfers before you even reach London. <strong>London City</strong> has limited routes — if it serves your destination, the tiny size is actually a plus, but route choice is very limited for family holiday destinations.</p>

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
                <Link href="/compare/heathrow-vs-gatwick" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Heathrow vs Gatwick</span><span className={styles.relatedGuideCardText}>Which London airport really wins on real cost and convenience?</span></Link>
                <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Cost Guide</span><span className={styles.relatedGuideCardTitle}>Real Cost of a Flight</span><span className={styles.relatedGuideCardText}>Why cheap tickets become expensive after baggage and transfers.</span></Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
