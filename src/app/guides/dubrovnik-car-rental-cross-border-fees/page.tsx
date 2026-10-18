import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer";
import styles from "./page.module.css";

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

const OPERATORS = [
  {
    name: "Sixt",
    fee: "€11.20",
    feeUnit: "per day · max €56",
    bosnia: "Allowed (named)",
    montenegro: "Allowed (named)",
    neum: "Exempt from the foreign-use charge",
    notice: "Request at the station",
    source: "Sixt Croatia terms + GTC PDF",
    sourceUrl: "https://www.sixt.hr/shared/t-c/sixt_HR_en.pdf",
  },
  {
    name: "Hertz",
    fee: "€40",
    feeUnit: "unit not specified",
    bosnia: "Allowed with written approval",
    montenegro: "Allowed with written approval",
    neum: "Exempt from written approval (A8/E65)",
    notice: "5 days, in writing",
    source: "Hertz Croatia — General Terms & Conditions",
    sourceUrl: "https://www.hertz.hr/en/car-rental/support-center/general-terms-conditions/",
  },
  {
    name: "Enterprise",
    fee: "€40 / €60",
    feeUnit: "EU / non-EU · per hire (stated for non-EU)",
    bosnia: "Allowed (named, non-EU fee)",
    montenegro: "Allowed (named, non-EU fee)",
    neum: "Not specified",
    notice: "Inform the branch in advance",
    source: "Enterprise — Dubrovnik Airport location terms",
    sourceUrl: "https://www.enterprise.co.uk/en/car-hire-locations/hr/dubrovnik-airport-jhag.html",
  },
  {
    name: "Nova",
    fee: "€56 / €136",
    feeUnit: "standard / special · unit not specified",
    bosnia: "Allowed (incl. Neum)",
    montenegro: "Allowed",
    neum: "Included in permitted area",
    notice: "Written authorisation before crossing",
    source: "Nova Rent a Car — FAQ",
    sourceUrl: "https://novarentacar.hr/index.php/faq?lang=en",
  },
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
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
      <div className={styles.shell}>
        <HomeHeader />

        {/* ═══ HERO — CSS-only editorial (no licensed image asset available) ═══ */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroRule} />
            <span className={styles.heroEyebrow}>Car Rental Fine Print · Croatia</span>
            <h1 className={styles.heroTitle}>
              Crossing the border in a Dubrovnik rental car: <em>what each company actually charges</em>
            </h1>
            <p className={styles.heroSub}>
              Four companies publish their Dubrovnik cross-border terms. Three others don&rsquo;t.
              Here are the verified numbers for driving into Bosnia or Montenegro — and what
              happens if you don&rsquo;t declare it.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroBadge}><span className={styles.heroDot} /> Sources checked 18 October 2026</span>
              <span className={styles.heroBadge}>Official operator terms only</span>
              <span className={styles.heroBadge}>7 min read</span>
            </div>
          </div>
        </section>

        {/* ═══ THE SHORT ANSWER ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>01 · The short answer</span></div>
          <h2>Yes, you can usually cross — if you declare it first</h2>
          <div className={styles.answerStatement}>
            You can usually drive a Dubrovnik Airport rental car into Bosnia and Herzegovina or
            Montenegro <strong>if you tell the company in advance</strong>. The four operators
            with published terms charge between <strong>€11.20 per day (Sixt, capped at €56)</strong>{" "}
            and <strong>€40–60 per rental (Hertz, Enterprise, Nova)</strong>. Hertz needs the
            request <strong>5 days before pickup</strong>. Driving across without declaring it
            voids the rental&rsquo;s insurance cover and can trigger penalties of €825 to €2,000.
          </div>

          <div className={styles.sectionKicker}><span>02 · Three questions people mix up</span></div>
          <h2>Legal, contractual, administrative — three different answers</h2>
          <p>
            Before the numbers, three separate questions. Mixing them up is the most common
            (and most expensive) mistake in this corner of travel.
          </p>
          <div className={styles.conceptGrid}>
            <div className={`${styles.conceptCard} ${styles.conceptLegal}`}>
              <span className={styles.conceptTag}>A · Legal insurance</span>
              <h3>The car is insured abroad</h3>
              <p>
                For a Croatian-plated rental, the registration plate itself is recognised in
                Bosnia (since 19 Oct 2020) and Montenegro (since 2 Aug 2021) under the
                Multilateral Agreement — a Green Card is legally not required at those borders.
              </p>
            </div>
            <div className={`${styles.conceptCard} ${styles.conceptPermission}`}>
              <span className={styles.conceptTag}>B · Contractual permission</span>
              <h3>The company allows the car to leave Croatia</h3>
              <p>
                Your rental contract can still forbid the crossing, require written approval,
                or restrict vehicle categories — even though the border police have no
                insurance objection.
              </p>
            </div>
            <div className={`${styles.conceptCard} ${styles.conceptFee}`}>
              <span className={styles.conceptTag}>C · Administrative fee</span>
              <h3>The company&rsquo;s charge for permission</h3>
              <p>
                A commercial fee, not a government fee and not a border tax. Normally paid
                at the desk in Croatia, and not always published in advance.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ OPERATOR CARDS ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>03 · The verified numbers</span></div>
          <h2>What each company publishes</h2>
          <p>
            Every figure below was read directly from the operator&rsquo;s own published terms
            on 18 October 2026. Where a company does not state something explicitly, we say so —
            we don&rsquo;t guess.
          </p>
        </div>
        <div className={styles.wide}>
          <div className={styles.operatorGrid}>
            {OPERATORS.map((op) => (
              <div key={op.name} className={styles.operatorCard}>
                <div className={styles.operatorHead}>
                  <h3 className={styles.operatorName}>{op.name}</h3>
                  <span className={styles.operatorBadge}>Dubrovnik Airport</span>
                </div>
                <div className={styles.operatorFee}>
                  {op.fee}
                  <span className={styles.operatorFeeUnit}>{op.feeUnit}</span>
                </div>
                <div className={styles.operatorRows}>
                  <div className={styles.operatorRow}><span className={styles.operatorRowKey}>Bosnia</span><span className={styles.operatorRowValue}>{op.bosnia}</span></div>
                  <div className={styles.operatorRow}><span className={styles.operatorRowKey}>Montenegro</span><span className={styles.operatorRowValue}>{op.montenegro}</span></div>
                  <div className={styles.operatorRow}><span className={styles.operatorRowKey}>Neum corridor</span><span className={styles.operatorRowValue}>{op.neum}</span></div>
                  <div className={styles.operatorRow}><span className={styles.operatorRowKey}>Notice</span><span className={styles.operatorRowValue}>{op.notice}</span></div>
                </div>
                <div className={styles.operatorSource}>
                  Source: <a href={op.sourceUrl} target="_blank" rel="noopener noreferrer">{op.source}</a>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.tableNote}>
            Vehicle categories matter too: Hertz allows &ldquo;all vehicles except luxury categories&rdquo;
            (discretionary wording) · Nova says the fee is subject to vehicle category · Sixt
            publishes no category restriction. Fees are point-in-time and may depend on pickup
            office, vehicle group and booking channel.
          </p>
        </div>

        {/* ═══ DETAILED TABLE ═══ */}
        <div className={styles.wide}>
          <div className={styles.sectionKicker}><span>04 · Full comparison</span></div>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Operator</th><th>Published fee</th><th>Fee unit</th><th>Bosnia</th>
                <th>Montenegro</th><th>Neum corridor</th><th>Advance notice</th><th>Last verified</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sixt</td><td>€11.20 per day, max €56</td><td>Per day (cap €56)</td>
                <td>Allowed (named)</td><td>Allowed (named)</td>
                <td>Exempt from the foreign-use charge</td><td>Request at the station</td><td>18 Oct 2026</td>
              </tr>
              <tr>
                <td>Hertz</td><td>€40</td><td><span className={styles.notSpecified}>Not specified</span></td>
                <td>Allowed with written approval</td><td>Allowed with written approval</td>
                <td>Exempt from written approval (A8/E65)</td><td>5 days, in writing</td><td>18 Oct 2026</td>
              </tr>
              <tr>
                <td>Enterprise</td><td>€40 EU / €60 non-EU</td><td>Per hire (stated for non-EU)</td>
                <td>Allowed (named, non-EU fee)</td><td>Allowed (named, non-EU fee)</td>
                <td><span className={styles.notSpecified}>Not specified</span></td><td>Inform the branch in advance</td><td>18 Oct 2026</td>
              </tr>
              <tr>
                <td>Nova</td><td>€56 standard / €136 special</td><td><span className={styles.notSpecified}>Not specified</span></td>
                <td>Allowed (incl. Neum)</td><td>Allowed</td>
                <td>Included in permitted area</td><td>Written authorisation before crossing</td><td>18 Oct 2026</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.tableNote}>
            &ldquo;Not specified&rdquo; means the operator&rsquo;s official terms do not state it — not that
            it does not exist. Confirm anything marked Not specified in writing before you pay.
          </p>
        </div>

        {/* ═══ THE COMPANIES THAT DON'T PUBLISH ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>05 · The companies that don&rsquo;t publish</span></div>
          <h2>What the others don&rsquo;t tell you online</h2>
          <p>
            We checked the official channels of every major operator at Dubrovnik. Some simply
            don&rsquo;t publish their Croatian cross-border policy online:
          </p>
        </div>
        <div className={styles.wide}>
          <table className={styles.dataTable}>
            <thead>
              <tr><th>Operator</th><th>What we found (18 Oct 2026)</th><th>Practical consequence</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Budget</td>
                <td>No published Croatian cross-border policy on any official Budget page.</td>
                <td>Any Budget fee figure you see online is unverified. Ask the branch in writing.</td>
              </tr>
              <tr>
                <td>Green Motion</td>
                <td>Croatian terms only available inside a JavaScript selector; no retrievable official text.</td>
                <td>Claims that Green Motion charges for Neum transit could not be verified. Confirm before booking.</td>
              </tr>
              <tr>
                <td>Oryx</td>
                <td>Official website no longer resolves to a rental company.</td>
                <td>Any Oryx fee in circulation is unverifiable against a primary source.</td>
              </tr>
              <tr>
                <td>Europcar</td>
                <td>Permission and allowed countries published, but the fee amount is not (it refers to the price list).</td>
                <td>Usable for &ldquo;permitted with consent&rdquo;, not for price comparison. Penalty for undeclared crossing: €2,000.</td>
              </tr>
              <tr>
                <td>Avis</td>
                <td>Fee published (€24 EU / €64 non-EU) but no unit, no Neum clause, no procedure.</td>
                <td>Confirm the unit and the Neum question directly with Avis.</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.tableNote}>
            That asymmetry is the point of this page: some companies let you verify the price
            before you book, and some don&rsquo;t. If a company&rsquo;s fee is not published, get it in
            writing before you pay anything.
          </p>
        </div>

        {/* ═══ ROUTE CARDS ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>06 · The three routes</span></div>
          <h2>Mostar, Kotor or just passing through?</h2>
          <p>
            People ask one question — &ldquo;can I cross?&rdquo; — but the three journeys below have
            different rules, different borders and different fees.
          </p>
        </div>
        <div className={styles.wide}>
          <div className={styles.routeGrid}>
            <div className={styles.routeCard}>
              <span className={styles.eyebrow}>Full border crossing</span>
              <h3>Dubrovnik → Mostar</h3>
              <p>
                A real border crossing into Bosnia and Herzegovina: you need the company&rsquo;s
                permission, and non-EU fees apply at Enterprise (€60) and Avis (€64). Expect
                queue variability and remember that EES biometric registration now applies to
                non-EU travellers at Croatia&rsquo;s external Schengen borders (fully operational
                since 10 April 2026) — plan extra time.
              </p>
            </div>
            <div className={styles.routeCard}>
              <span className={styles.eyebrow}>Full border crossing</span>
              <h3>Dubrovnik → Kotor</h3>
              <p>
                Another full crossing into Montenegro. The drive is short (~90–95 km) but summer
                queues at Debeli Brijeg/Karasovići have reached 15–20 km in peak season. The
                Kamenari–Lepetane ferry across the Bay of Kotor can save time on the way to
                Kotor. Same permission and fee rules apply; one-way drop-offs in Montenegro are
                usually unavailable or expensive.
              </p>
            </div>
            <div className={styles.routeCard}>
              <span className={styles.eyebrow}>Transit, not a visit</span>
              <h3>The Neum corridor</h3>
              <p>
                Neum is the ~9 km strip of Bosnian coast that interrupts the Croatian coast road
                between Split and Dubrovnik. Since the Pelješac Bridge opened (2022), most drivers
                bypass it entirely — but during the bridge renovation (from October 2026), traffic
                returns to the corridor. Sixt exempts Neum transit from the foreign-use charge and
                Hertz exempts it from the written-approval rule; other companies don&rsquo;t publish a
                Neum condition, so confirm in writing if you rent with them.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ CHECKLIST ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>07 · Before you pay</span></div>
          <h2>Pre-booking checklist</h2>
          <p>Run through this before you pay for the rental — it takes five minutes and can save you a ruined trip:</p>
          <ol className={styles.checklist}>
            <li><span>Does the company allow your destination country <strong>in writing</strong>? (Not a forum answer — the company&rsquo;s own terms.)</span></li>
            <li><span>What is the exact fee, and is it <strong>per day or per rental</strong>? Get the unit.</span></li>
            <li><span>How much advance notice is required? (<strong>Hertz: 5 days, written.</strong>)</span></li>
            <li><span>If you plan the Neum corridor: is it <strong>exempt</strong>, or does it count as a crossing?</span></li>
            <li><span>Is your <strong>vehicle category</strong> allowed to leave Croatia?</span></li>
            <li><span>Get the permission <strong>documented on the rental agreement</strong> — signed consent, not a verbal promise.</span></li>
            <li><span>Confirm what happens to your <strong>CDW/insurance cover</strong> outside Croatia before you rely on it.</span></li>
            <li><span>If you are not an EU/EEA citizen, expect <strong>EES biometric registration</strong> at the border — allow extra time.</span></li>
          </ol>
        </div>

        {/* ═══ FAQ ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>08 · Quick answers</span></div>
          <h2>FAQ</h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>

        {/* ═══ BOOKING CHANNELS NOTE ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>09 · Booking channels</span></div>
          <h2>A note on booking channels</h2>
          <p>
            Fees and permission rules can differ by pickup office, vehicle group and booking
            channel. A third-party booking platform does not set or guarantee cross-border
            permission — the contract is always with the rental company named on your voucher,
            and the final terms are confirmed at the desk. Where you see a fee quoted on a
            booking site, treat it as indicative until the rental company confirms it in writing.
            If you reserve through an intermediary, check that intermediary&rsquo;s payment rules
            before relying on a debit card: several rental desks in Croatia require a physical
            credit card in the main driver&rsquo;s name for the deposit, even when the online
            payment went through on a debit card.
          </p>
        </div>

        {/* ═══ CTA ═══ */}
        <div className={styles.ctaBlock}>
          <span className={styles.ctaKicker}>Travelvus</span>
          <h2 className={styles.ctaTitle}>Compare your complete journey — door to door.</h2>
          <p className={styles.ctaSub}>The same discipline applies to flights: the ticket price is never the whole journey.</p>
          <Link href="/#compare" className={styles.ctaButton}>Reveal the real winner</Link>
        </div>

        {/* ═══ SOURCES ═══ */}
        <div className={styles.content}>
          <div className={styles.sourcesPanel}>
            <div className={styles.sourcesHeader}>
              <h2 className={styles.sourcesTitle}>Sources and verification</h2>
              <span className={styles.verifiedPill}>All checked 18 October 2026</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--dv-body)", margin: "14px 0 8px" }}>
              Every operator figure on this page was read directly from the official source
              below. Rental fees change; treat every number as point-in-time and re-check the
              operator&rsquo;s page before booking.
            </p>
            <ul className={styles.sourceList}>
              {SOURCES.map((s, i) => (
                <li key={i}>
                  <span className={styles.sourceIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.sourceLabel}>{s.label}</span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.url.replace("https://", "")}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══ RELATED ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>10 · Continue your decision</span></div>
          <div className={styles.relatedList}>
            <Link href="/guides/total-travel-time-comparison" className={styles.relatedRow}>
              <div>
                <span className={styles.relatedTitle}>Total Travel Time Comparison</span>
                <span className={styles.relatedDesc}>Border queues are part of the journey — how to compare door-to-door time, not just flight time.</span>
              </div>
              <span className={styles.relatedCta}>Read →</span>
            </Link>
            <Link href="/guides/real-cost-of-a-flight" className={styles.relatedRow}>
              <div>
                <span className={styles.relatedTitle}>Real Cost of a Flight</span>
                <span className={styles.relatedDesc}>The same principle on four wheels: hidden fees decide what a journey really costs.</span>
              </div>
              <span className={styles.relatedCta}>Read →</span>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
