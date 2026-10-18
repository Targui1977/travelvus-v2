import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Dubrovnik Airport Car Rental Cross-Border Fees: Sixt, Hertz, Enterprise & Nova (2026) | Travelvus",
  description: "Verified cross-border fees for rental cars picked up at Dubrovnik Airport: Sixt, Hertz, Enterprise and Nova. Bosnia, Montenegro, the Neum corridor — checked October 2026.",
  alternates: { canonical: "/guides/dubrovnik-car-rental-cross-border-fees" },
};

const FAQ_ITEMS = [
  { question: "Do I need a Green Card to drive a Dubrovnik rental car into Bosnia?", answer: "Legally, no. Croatian registration plates are recognised as proof of motor insurance in Bosnia and Herzegovina under the Multilateral Agreement (since 19 October 2020), so a Green Card is not required at the border. The rental company, however, still has to give you contractual permission — and may charge an administrative fee for it. Those are two separate things." },
  { question: "Do I need a Green Card to drive into Montenegro?", answer: "Legally, no. Montenegro joined the Multilateral Agreement with effect from 2 August 2021, so Croatian plates are recognised there too. The same rental-contract rule applies: permission and any fee come from the company, not from the border." },
  { question: "How much notice do I need to give the rental company?", answer: "It varies. Hertz Croatia requires the request in writing at least 5 days before pickup. Sixt asks you to request cross-border travel at the station. Enterprise requires you to inform the branch of your intention. Nova requires written authorisation before you cross. Always confirm before you pay for the rental." },
  { question: "What happens if I cross the border without declaring it?", answer: "Every operator we verified states consequences. Hertz says an unauthorised crossing 'makes void all insurance policies and customer fully liable'. Sixt says all protections lose their validity. Nova charges a contractual penalty of €825. Europcar charges up to €2,000. This is the single most expensive mistake you can make with a Croatian rental." },
  { question: "Is the Neum corridor free?", answer: "Sixt explicitly exempts vehicles passing through the Neum corridor from the foreign-use charge, and Hertz exempts the corridor (the A8 main road, route E65, between Split and Dubrovnik) from the written-approval rule. Enterprise and Nova do not publish a specific Neum condition — if you rent with them and plan to use the corridor, ask in writing before pickup." },
  { question: "Can I rent a car at Dubrovnik Airport and drop it off in Kotor or Mostar?", answer: "One-way international drop-offs are restricted by most Croatian operators and are typically more expensive than returning the car to Croatia. Avax states international one-way is not available. Budget-friendly planning usually means a loop back into Croatia, or returning the car and renting again on the other side of the border. Confirm one-way availability with the specific company before booking." },
];

const SOURCES = [
  { label: "Sixt Croatia — cross-border terms (local rental information, HR)", url: "https://www.sixt.com/php/terms/view?liso=HR&rtar=000&view=IL&tlang=en_US&language=en_US" },
  { label: "Sixt Croatia — General Rental Terms (GTC PDF)", url: "https://www.sixt.hr/shared/t-c/sixt_HR_en.pdf" },
  { label: "Hertz Croatia — General Terms & Conditions", url: "https://www.hertz.hr/en/car-rental/support-center/general-terms-conditions/" },
  { label: "Enterprise — Dubrovnik Airport location terms", url: "https://www.enterprise.co.uk/en/car-hire-locations/hr/dubrovnik-airport-jhag.html" },
  { label: "Nova Rent a Car — FAQ (cross-border terms)", url: "https://novarentacar.hr/index.php/faq?lang=en" },
  { label: "Council of Bureaux — Green Card System (Multilateral Agreement)", url: "https://www.cobx.org/article/4130/green-card-system-final" },
  { label: "European Commission — Implementing Decision (EU) 2020/1358 (Bosnia and Herzegovina)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32020D1358" },
  { label: "European Commission — Implementing Decision (EU) 2021/1145 (Montenegro)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021D1145" },
  { label: "Croatian Insurance Bureau (HUO) — Bosnia and Herzegovina", url: "https://huo.hr/hr/vijesti/pristup-bosne-i-hercegovine-multilateralnom-sporazumu-o-jamstvu-temeljem-registracijske-plocice-712" },
  { label: "Croatian Insurance Bureau (HUO) — Montenegro", url: "https://huo.hr/hr/vijesti/pristup-crne-gore-multilateralnom-sporazumu-o-jamstvu-temeljem-registracijske-plocice-753" },
  { label: "Green Card Bureau of Bosnia and Herzegovina (BZKBiH) — foreign vehicles", url: "https://www.bzkbih.ba/en/informacije-za-vozace-stranih-vozila-koja-ulaze-u-bosnu-i-hercegovinu" },
  { label: "European Commission — Entry/Exit System (EES)", url: "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/entry-exit-system_en" },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dubrovnik Airport Car Rental Cross-Border Fees: Sixt, Hertz, Enterprise & Nova (2026)",
  description: "Verified cross-border fees and permission rules for rental cars picked up at Dubrovnik Airport and driven into Bosnia and Herzegovina or Montenegro. Checked 18 October 2026 against official operator terms.",
  dateModified: "2026-10-18",
  author: { "@type": "Organization", name: "Travelvus", url: "https://www.travelvus.com" },
  publisher: { "@type": "Organization", name: "Travelvus", url: "https://www.travelvus.com" },
  mainEntityOfPage: "https://www.travelvus.com/guides/dubrovnik-car-rental-cross-border-fees",
};

export default function DubrovnikCrossBorderFeesPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>Car Rental Fine Print</span>
          <h1 className={styles.guideHeroH1}>Dubrovnik Airport car rental cross-border fees: what each company actually charges</h1>
          <p className={styles.guideHeroSub}>Four companies publish their Dubrovnik cross-border terms. Three others don&rsquo;t. Here are the verified numbers for driving into Bosnia or Montenegro — and what happens if you don&rsquo;t declare it.</p>
          <div className={styles.guideHeroMeta}>
            <span>7 min read</span><span>·</span><span>Sources checked: 18 October 2026</span><span>·</span>
            <span><span className={styles.guideHeroDot} /> Methodology verified</span>
          </div>
        </section>

        <div className={styles.tocRail}>
          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers renting a car at Dubrovnik Airport and planning to drive into Bosnia and Herzegovina or Montenegro</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which rental company allows the crossing, what it costs, and what you must arrange before pickup</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Most Dubrovnik rentals can cross into Bosnia and Montenegro if you declare it first. Published fees run from €11.20 per day (Sixt) to €40–60 per rental (Hertz, Enterprise, Nova). Undeclared crossings void your insurance.</div></div>
            </div>

            <h2 id="section-0">The short answer</h2>
            <p>You can usually drive a Dubrovnik Airport rental car into Bosnia and Herzegovina or Montenegro — <strong>if you tell the company in advance</strong>. The four operators with published terms charge between <strong>€11.20 per day (Sixt, capped at €56)</strong> and <strong>€40–60 per rental (Hertz, Enterprise, Nova)</strong>. Hertz needs the request <strong>5 days before pickup</strong>. Driving across without declaring it voids the rental&rsquo;s insurance cover and can trigger penalties of €825 to €2,000.</p>

            <h2 id="section-1">Three things people confuse — and it costs them money</h2>
            <p>Before the numbers, three separate questions. Mixing them up is the most common (and most expensive) mistake in this corner of travel.</p>
            <table className={styles.compTable}>
              <thead><tr><th>Concept</th><th>What it is</th><th>Who decides it</th></tr></thead>
              <tbody>
                <tr><td><strong>Legal insurance documentation</strong></td><td>Whether the car is insured in the country you enter. For a Croatian-plated rental, the registration plate itself is recognised in Bosnia (since 19 Oct 2020) and Montenegro (since 2 Aug 2021) under the Multilateral Agreement — a Green Card is legally not required at those borders.</td><td>Insurance law / national bureaux</td></tr>
                <tr><td><strong>Rental company permission</strong></td><td>Whether your rental contract allows the car to leave Croatia at all. A company can still forbid the crossing, require written approval, or restrict vehicle categories — even though the border police have no insurance objection.</td><td>The rental contract</td></tr>
                <tr><td><strong>Administrative fee</strong></td><td>The company&rsquo;s charge for granting permission. It is a commercial fee, not a government fee and not a border tax. It is normally paid at the desk in Croatia.</td><td>The rental company</td></tr>
              </tbody>
            </table>

            <h2 id="section-2">The verified comparison table</h2>
            <p>Every figure below was read directly from the operator&rsquo;s own published terms on 18 October 2026. Where a company does not state something explicitly, the cell says <strong>Not specified</strong> — we don&rsquo;t guess.</p>
            <table className={styles.compTable}>
              <thead><tr><th>Operator</th><th>Published fee</th><th>Fee unit</th><th>Bosnia</th><th>Montenegro</th><th>Neum corridor</th><th>Advance notice</th><th>Last verified</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Sixt</strong></td>
                  <td>€11.20 per day, max €56</td>
                  <td>Per day (cap €56)</td>
                  <td>Allowed (named)</td>
                  <td>Allowed (named)</td>
                  <td>Exempt from the foreign-use charge</td>
                  <td>Request at the station</td>
                  <td>18 Oct 2026</td>
                </tr>
                <tr>
                  <td><strong>Hertz</strong></td>
                  <td>€40</td>
                  <td>Not specified</td>
                  <td>Allowed with written approval</td>
                  <td>Allowed with written approval</td>
                  <td>Exempt from written approval (A8/E65 corridor)</td>
                  <td>5 days, in writing</td>
                  <td>18 Oct 2026</td>
                </tr>
                <tr>
                  <td><strong>Enterprise</strong></td>
                  <td>€40 EU / €60 non-EU</td>
                  <td>Per hire (stated for non-EU)</td>
                  <td>Allowed (named, non-EU fee)</td>
                  <td>Allowed (named, non-EU fee)</td>
                  <td>Not specified</td>
                  <td>Inform the branch in advance</td>
                  <td>18 Oct 2026</td>
                </tr>
                <tr>
                  <td><strong>Nova</strong></td>
                  <td>€56 standard / €136 special</td>
                  <td>Not specified</td>
                  <td>Allowed (incl. Neum)</td>
                  <td>Allowed</td>
                  <td>Included in permitted area</td>
                  <td>Written authorisation before crossing</td>
                  <td>18 Oct 2026</td>
                </tr>
              </tbody>
            </table>
            <p>Vehicle categories matter too. Hertz allows travel abroad for &ldquo;all vehicles except luxury categories&rdquo; — but the wording is discretionary (&ldquo;might be allowed&rdquo;). Nova says the fee is subject to vehicle category. Sixt publishes no category restriction for cross-border use.</p>

            <h2 id="section-3">The companies that don&rsquo;t publish their terms</h2>
            <p>We checked the official channels of every major operator at Dubrovnik. Some simply don&rsquo;t publish their Croatian cross-border policy online:</p>
            <table className={styles.compTable}>
              <thead><tr><th>Operator</th><th>What we found (18 Oct 2026)</th><th>Practical consequence</th></tr></thead>
              <tbody>
                <tr><td><strong>Budget</strong></td><td>No published Croatian cross-border policy on any official Budget page.</td><td>Any Budget fee figure you see online is unverified. Ask the branch in writing.</td></tr>
                <tr><td><strong>Green Motion</strong></td><td>Croatian terms only available inside a JavaScript selector; no retrievable official text.</td><td>Claims that Green Motion charges for Neum transit could not be verified. Confirm before booking.</td></tr>
                <tr><td><strong>Oryx</strong></td><td>Official website no longer resolves to a rental company.</td><td>Any Oryx fee in circulation is unverifiable against a primary source.</td></tr>
                <tr><td><strong>Europcar</strong></td><td>Permission and allowed countries published, but the fee amount is not (it refers to the price list).</td><td>Usable for &ldquo;permitted with consent&rdquo;, not for price comparison. Penalty for undeclared crossing: €2,000.</td></tr>
                <tr><td><strong>Avis</strong></td><td>Fee published (€24 EU / €64 non-EU) but no unit, no Neum clause, no procedure.</td><td>Confirm the unit and the Neum question directly with Avis.</td></tr>
              </tbody>
            </table>
            <p>That asymmetry is the point of this page: some companies let you verify the price before you book, and some don&rsquo;t. If a company&rsquo;s fee is not published, get it in writing before you pay anything.</p>

            <h2 id="section-4">The three routes explained</h2>
            <p>People ask one question — &ldquo;can I cross?&rdquo; — but the three journeys below have different rules, different borders and different fees.</p>
            <h3>Dubrovnik → Mostar (Bosnia and Herzegovina)</h3>
            <p>A real border crossing into Bosnia: you need the company&rsquo;s permission, and non-EU fees apply at Enterprise (€60) and Avis (€64). Expect queue variability at the border and remember that EES biometric registration now applies to non-EU travellers at Croatia&rsquo;s external Schengen borders (fully operational since 10 April 2026) — plan extra time.</p>
            <h3>Dubrovnik → Kotor (Montenegro)</h3>
            <p>Another full crossing. The drive is short (~90–95 km) but summer queues at Debeli Brijeg/Karasovići have reached 15–20 km in peak season. The Kamenari–Lepetane ferry across the Bay of Kotor can save time on the way to Kotor. Same permission and fee rules apply; one-way drop-offs in Montenegro are usually unavailable or expensive.</p>
            <h3>The Neum corridor (transit, not a visit)</h3>
            <p>Neum is the ~9 km strip of Bosnian coast that interrupts the Croatian coast road between Split and Dubrovnik. Since the Pelješac Bridge opened (2022), most drivers bypass it entirely — but during the bridge renovation (from October 2026), traffic returns to the corridor. Sixt exempts Neum transit from the foreign-use charge and Hertz exempts it from the written-approval rule; other companies don&rsquo;t publish a Neum condition, so confirm in writing if you rent with them.</p>

            <h2 id="section-5">Pre-booking checklist</h2>
            <p>Run through this before you pay for the rental — it takes five minutes and can save you a ruined trip:</p>
            <table className={styles.compTable}>
              <thead><tr><th>#</th><th>Check</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Does the company allow your destination country in writing? (Not a forum answer — the company&rsquo;s own terms.)</td></tr>
                <tr><td>2</td><td>What is the exact fee, and is it per day or per rental? Get the unit.</td></tr>
                <tr><td>3</td><td>How much advance notice is required? (Hertz: 5 days, written.)</td></tr>
                <tr><td>4</td><td>If you plan the Neum corridor: is it exempt, or does it count as a crossing?</td></tr>
                <tr><td>5</td><td>Is your vehicle category allowed to leave Croatia?</td></tr>
                <tr><td>6</td><td>Get the permission documented on the rental agreement — signed consent, not a verbal promise.</td></tr>
                <tr><td>7</td><td>Confirm what happens to your CDW/insurance cover outside Croatia before you rely on it.</td></tr>
                <tr><td>8</td><td>If you are not an EU/EEA citizen, expect EES biometric registration at the border — allow extra time.</td></tr>
              </tbody>
            </table>

            <h2 id="section-6">FAQ</h2>
            <FAQAccordion items={FAQ_ITEMS} />

            <h2 id="section-7">A note on booking channels</h2>
            <p>Fees and permission rules can differ by pickup office, vehicle group and booking channel. A third-party booking platform does not set or guarantee cross-border permission — the contract is always with the rental company named on your voucher, and the final terms are confirmed at the desk. Where you see a fee quoted on a booking site, treat it as indicative until the rental company confirms it in writing. If you reserve through an intermediary, check that intermediary&rsquo;s payment rules before relying on a debit card: several rental desks in Croatia require a physical credit card in the main driver&rsquo;s name for the deposit, even when the online payment went through on a debit card.</p>

            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginTop: 32, marginBottom: 32 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.4, color: "var(--paper)" }}>Compare your complete journey — door to door.</span>
              </div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>

            <h2 id="section-8">Sources and verification</h2>
            <p>Every operator figure on this page was read directly from the official source below on <strong>18 October 2026</strong>. Rental fees change; treat every number as point-in-time and re-check the operator&rsquo;s page before booking.</p>
            <table className={styles.compTable}>
              <thead><tr><th>Source</th><th>Link</th></tr></thead>
              <tbody>
                {SOURCES.map((s, i) => (
                  <tr key={i}><td>{s.label}</td><td><a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)" }}>{s.url.replace("https://", "")}</a></td></tr>
                ))}
              </tbody>
            </table>

            <div className={styles.relatedGuides}>
              <h2>Continue your decision</h2>
              <Link href="/guides/total-travel-time-comparison" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Total Travel Time Comparison</div><p className={styles.relatedGuideDesc}>Border queues are part of the journey — how to compare door-to-door time, not just flight time.</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
              <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Real Cost of a Flight</div><p className={styles.relatedGuideDesc}>The same principle on four wheels: hidden fees decide what a journey really costs.</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
