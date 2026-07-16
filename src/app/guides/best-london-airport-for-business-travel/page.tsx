import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer"
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best London Airport for Business Travel: Complete Guide | Travelvus",
  description: "Which London airport is best for business travellers? Compare transfer speed, reliability, lounge access and airline choice.",
  alternates: { canonical: "/guides/best-london-airport-for-business-travel" },
};

const FAQ_ITEMS = [{"question": "Which airport is fastest for a Canary Wharf morning meeting?", "answer": "London City Airport. Land at 08:30, DLR to Canary Wharf by 08:50, at your desk by 09:00. No other airport can achieve this."}, {"question": "Is Heathrow good for business travel?", "answer": "Yes — Heathrow is the best airport for international business travel. Excellent airline choice, business lounges, and the Elizabeth Line connects to the City (Farringdon, Liverpool Street) and Canary Wharf (change at Whitechapel)."}];

export default function BestLondonAirportForBusinessTravelPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for business travel?</h1>
          <p className={styles.guideHeroSub}>London City Airport wins for Canary Wharf and the City. Heathrow wins for west London, international connections and airline choice.</p>
          <div className={styles.guideHeroMeta}>
            <span>4 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for business travel</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for business travel</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>London City Airport wins for Canary Wharf and the City. Heathrow wins for west London, international connections and airline choice.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p><strong>London City Airport is the best airport for business travellers heading to Canary Wharf, the City or Docklands</strong> — DLR to the office in 20–25 minutes. <strong>Heathrow is best for west London offices, international business travel and when you need maximum airline and schedule choice.</strong> Gatwick is a solid third option — Gatwick Express to Victoria plus a taxi works for many business travellers. Stansted and Luton are rarely ideal for business.</p>
            <h2 id="section-1">Business traveller airport comparison</h2>
            <p>Business travel has different priorities: predictable journey time, fast transfer, lounge access, flight frequency, and proximity to meeting venues. Here is how the airports compare:</p>
            <h2 id="section-2">Why London City is the business winner</h2>
            <p>LCY is designed for business travel. The DLR connects directly to Canary Wharf (~20 min) and Bank (~25 min). The airport is tiny — 20 minutes from landing to the DLR platform. Security is fast. There are no crowds. For a Canary Wharf morning meeting, you can land at 08:30 and be at your desk by 09:00.</p>
            <h2 id="section-3">Why Heathrow matters for international business</h2>
            <p>Heathrow is unmatched for international business travel. Over 80 airlines serve ~200 destinations. Business class lounges in every terminal. The Elizabeth Line connects to the City, West End and Canary Wharf (change at Whitechapel). For international client meetings, Heathrow is almost always the right choice.</p>

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
                <Link href="/compare/heathrow-vs-london-city" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Heathrow vs London City</span><span className={styles.relatedGuideCardText}>Business traveller's ultimate airport comparison.</span></Link>
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
