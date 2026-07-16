import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer"
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Fastest London Airport: Door-to-Door Transfer Comparison | Travelvus",
  description: "Which London airport gets you to your destination fastest? Compare real door-to-door journey times for all five London airports.",
  alternates: { canonical: "/guides/fastest-london-airport" },
};

const FAQ_ITEMS = [{"question": "Which airport has the fastest transfer to central London?", "answer": "London City Airport (LCY) via DLR to Bank in ~25 minutes. Of the major airports, Heathrow via Heathrow Express to Paddington in 15 minutes (but costs £25). For best speed-to-cost ratio, the Elizabeth Line from Heathrow (~35 min, ~£12)."}, {"question": "Is a shorter flight always faster door-to-door?", "answer": "No. A flight 15 minutes shorter to Stansted can lose 35 minutes on the longer transfer — arriving 20 minutes later overall. Always compare total door-to-door time."}];

export default function FastestLondonAirportPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport gets you there fastest?</h1>
          <p className={styles.guideHeroSub}>London City Airport is the fastest door-to-door for east and central London. Heathrow is fastest for west London. Your destination within London determines the answer.</p>
          <div className={styles.guideHeroMeta}>
            <span>4 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for which london airport gets you there fastest</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for which london airport gets you there fastest</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>London City Airport is the fastest door-to-door for east and central London. Heathrow is fastest for west London. Your destination within London determines the answer.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>The fastest airport depends entirely on where in London you are heading.</strong> London City Airport is fastest for Canary Wharf, the City, and the eastern edge of central London (DLR, ~25 min to Bank). Heathrow is fastest for west and much of central London (Elizabeth Line, ~35 min). Gatwick is fastest for south London and Victoria (Gatwick Express, ~30 min). Stansted and Luton are rarely the fastest — their longer transfers mean you arrive later even if your flight lands earlier.</p>
            <h2 id="section-1">Fastest transfer by destination</h2>
            <p>Here is the fastest airport for each London destination:</p>
            <h2 id="section-2">Why flight time is misleading</h2>
            <p>A flight to Stansted might be 15 minutes shorter than a flight to Heathrow — but the Stansted transfer is 35 minutes longer. You arrive at your destination 20 minutes later despite the shorter flight. Always compare door-to-door time, not flight duration. Our Total Travel Time Guide explains this in detail.</p>
            <h2 id="section-3">When to choose speed over cost</h2>
            <p>Speed matters most on short trips — a weekend break, a business meeting, a one-day visit. An extra hour of transfer time each way costs you 2 hours of your trip. On longer trips, the time difference matters less and cost should be the deciding factor.</p>

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
                <Link href="/guides/total-travel-time-comparison" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Time Guide</span><span className={styles.relatedGuideCardTitle}>Total Travel Time Comparison</span><span className={styles.relatedGuideCardText}>Flight duration is just one segment of the door-to-door journey.</span></Link>
                <Link href="/compare/heathrow-vs-london-city" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Heathrow vs London City</span><span className={styles.relatedGuideCardText}>Which wins for speed — Elizabeth Line or DLR?</span></Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
