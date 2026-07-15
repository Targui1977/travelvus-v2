import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best Airport for Central London: Complete Guide | Travelvus",
  description: "Which London airport is actually best for Westminster, Soho, Covent Garden and the West End? Compare real transfer times, costs and convenience.",
  alternates: { canonical: "/guides/best-airport-for-central-london" },
};

const FAQ_ITEMS = [{"question": "What is the closest airport to central London?", "answer": "London City Airport (LCY) is closest at 10km. The DLR takes ~25 minutes to Bank. However, LCY serves limited routes (mostly European business destinations). Of the major airports serving all routes, Heathrow is closest at 24km."}, {"question": "How long does it take from Heathrow to central London?", "answer": "The Elizabeth Line takes ~35 minutes to Tottenham Court Road and costs ~£12 off-peak. The Heathrow Express takes 15 minutes to Paddington and costs ~£25. The Piccadilly Line takes 50–60 minutes and costs ~£5–6."}, {"question": "Is Gatwick good for central London?", "answer": "Gatwick is reasonable for central London if you are staying near Victoria Station. The Gatwick Express takes ~30 minutes to Victoria for ~£20. However, from Victoria you may need a further Tube or taxi journey to reach Westminster, Soho or Covent Garden — adding 15–25 minutes."}, {"question": "Is Stansted too far from central London?", "answer": "Stansted is 55km from central London — the furthest of the five airports. The Stansted Express takes ~50 minutes to Liverpool Street for ~£17. From Liverpool Street, you will need a further Tube journey of 15–25 minutes to reach most central London destinations. Total door-to-door: 65–75 minutes."}, {"question": "Which airport has the best Tube connection to central London?", "answer": "Heathrow is the only London airport connected to the London Underground (Tube) network. The Piccadilly Line runs directly from all Heathrow terminals to central London. No other airport has a direct Tube connection."}];

export default function BestAirportForCentralLondonPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>London Airport Guide</span>
          <h1 className={styles.guideHeroH1}>Which London airport is best for central London?</h1>
          <p className={styles.guideHeroSub}>Heathrow wins for most central London destinations — the Elizabeth Line reaches Tottenham Court Road and Bond Street in ~30 minutes.</p>
          <div className={styles.guideHeroMeta}>
            <span>5 min read</span><span>·</span><span>Last reviewed: July 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers deciding which London airport to use for central london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the best journey for central london</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Heathrow wins for most central London destinations — the Elizabeth Line reaches Tottenham Court Road and Bond Street in ~30 minutes.</div></div>
            </div>

            <h2 id="section-0">The 30-second answer</h2>
            <p>For most central London destinations — Westminster, Soho, Covent Garden, the West End — <strong>Heathrow is the best airport</strong>. The Elizabeth Line connects directly to central London stations (Tottenham Court Road, Bond Street, Paddington) in ~30–35 minutes for ~£12. London City Airport is also excellent for central London — the DLR to Bank takes ~25 minutes — but it serves far fewer routes. Gatwick, Stansted and Luton involve longer transfers of 40–90 minutes and are generally better for other parts of London.</p>
            <h2 id="section-1">Central London airport comparison</h2>
            <p>Here is how the five London airports compare for reaching central London (Westminster, Soho, Covent Garden, the West End):</p>
            <h2 id="section-2">Best for specific central London locations</h2>
            <p>Central London is not one place. Here is the best airport for each central area:</p>
            <h2 id="section-3">Why Heathrow wins for central London</h2>
            <p>Heathrow has three separate rail connections to central London. The Elizabeth Line is the best balance of speed and cost (~35 min, ~£12). The Heathrow Express is fastest (15 min to Paddington, ~£25). The Piccadilly Line is cheapest (~50–60 min, ~£5–6). No other London airport has this range of central London connections.</p>
            <h2 id="section-4">When another airport is better</h2>
            <p>London City Airport is better if you are heading to the eastern edge of central London (Bank, Monument, Tower Hill) — the DLR takes ~25 minutes. Gatwick is competitive if your central London destination is near Victoria Station (Gatwick Express, ~30 min). Stansted and Luton are rarely the best choice for central London — their transfers take 50–90 minutes.</p>

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
                <Link href="/compare/heathrow-vs-london-city" className={styles.relatedGuideCard}><span className={styles.relatedGuideCardKicker}>Decision Page</span><span className={styles.relatedGuideCardTitle}>Heathrow vs London City</span><span className={styles.relatedGuideCardText}>Which wins for central London — Heathrow's Elizabeth Line or City's DLR?</span></Link>
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
