import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer";
import PickupRiskAssistant from "@/components/decision/PickupRiskAssistant";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Flight Delayed? What Happens to Your Rental Car Booking | Travelvus",
  description: "Verified rental company policies for delayed flights: grace periods, flight-number protection, closed desks, after-hours pickup and no-show fees — checked October 2026.",
  alternates: { canonical: "/guides/rental-car-pickup-flight-delayed" },
};

const FAQ_ITEMS = [
  { question: "Does adding my flight number guarantee my rental car will be held?", answer: "No. A flight number changes the rules at several companies — SIXT extends the hold to up to 24 hours, Hertz Switzerland holds until one hour after actual landing, Enterprise UK holds an airport booking until the flight lands and clears — but every one of these rules is bounded by branch opening hours and by the company's own conditions. Budget and Avis only promise to track the flight. A flight number reduces risk; it is not a guarantee." },
  { question: "What is the typical grace period if I am late without a flight number?", answer: "There is no universal number. SIXT states 60 minutes within branch opening hours. Hertz Switzerland states 1 hour, or until closing if earlier. Enterprise UK holds non-airport bookings for 2 hours. Budget publishes no official grace period on the pages we verified. Any figure you see presented as a universal rule is wrong — check your company and branch." },
  { question: "Will my prepaid booking be refunded if my flight is delayed and I miss the pickup?", answer: "Not necessarily. If the booking is marked as a no-show, the outcome differs by company and country: Budget UK and Spain refuse refunds, Enterprise UK refunds minus £125, Europcar Germany refunds minus up to €95, Hertz prepaid refunds minus the no-show charge on written request within 90 days. Europcar Germany explicitly states that a flight delay is not treated as force majeure. Prepaid is not the same as refundable." },
  { question: "What happens if my flight lands after the rental desk has closed?", answer: "Only specific, conditional arrangements exist. SIXT says airport branches stay open up to 1 hour beyond closing for delayed pickups. Enterprise Switzerland offers after-hours collection at airport stations with a valid flight number for CHF 50 per 30 minutes. Europcar UK charges £60 for out-of-hours collection, reduced to £20 for airport bookings linked to a flight number. Hertz Switzerland keeps the station open only if the airline has notified the delay. If your provider has no such arrangement, your reservation is at risk." },
  { question: "Is a booking through a broker protected differently?", answer: "Yes — broker terms are not supplier terms. Rentalcars.com's own conditions state that the supplier's rental agreement governs the rental and that the platform is not a party to it. If you booked through a broker, read the supplier's pickup and no-show terms in the supplier's own documentation, because those are the rules the desk will apply." },
  { question: "Should I call the rental branch when my flight is delayed?", answer: "Yes, unless your booking terms say otherwise. Enterprise Norway asks customers to contact the rental company at least 30 minutes before the pickup time even when a flight number is on file. SIXT asks you to message via live chat only if you will be later than 60 minutes. Hertz Switzerland does not require contact when a flight number was provided. A short call costs minutes and removes ambiguity — and ask for written confirmation of whatever you are told." },
  { question: "Is a delayed flight treated as force majeure so no-show fees are waived?", answer: "No provider we verified says so, and Europcar Germany's terms explicitly state that flight delays do not release the customer from the no-show fee (up to €95). Do not assume a delay waives anything — check the fee and the conditions before you decide how to respond." },
  { question: "What is the difference between being delayed and missing the pickup?", answer: "A delay means you arrive later than scheduled but within the company's hold rules. A missed pickup (no-show) means you did not collect the car within the applicable window — and that is what triggers cancellation and no-show fees. The difference between them is the company's hold rule, your flight number, and the desk's opening hours. That is exactly what the three determinants in this guide are for." },
];

const SOURCE_GROUPS = [
  {
    title: "Rental company policies (by country)",
    items: [
      { label: "SIXT — What happens if my flight is delayed? (14 countries listed)", url: "https://www.sixt.com/help-center/articles/what-happens-if-my-flight-is-delayed/" },
      { label: "SIXT — Grace period for late pickup", url: "https://www.sixt.com/help-center/articles/what-is-the-sixt-grace-period-if-i-arrive-late-for-pick-up/" },
      { label: "Hertz — Late pickup terms, Switzerland (ZRH)", url: "https://www.hertz.com/rentacar/reservation/reviewmodifycancel/templates/rentalTerms.jsp?EOAG=ZRH&KEYWORD=LATE" },
      { label: "Hertz — No-show and cancellation terms, US/Canada", url: "https://www.hertz.com/rentacar/reservation/reviewmodifycancel/templates/rentalTerms.jsp?KEYWORD=CANCELLATIONUSA&EOAG=LAX" },
      { label: "Enterprise UK — Pay Now terms (airport flight-number hold)", url: "https://www.enterprise.co.uk/content/dam/eu-brand/eu-pdfs/pre-pay-ts-cs/pay-now-ts-and-cs.pdf" },
      { label: "Enterprise Switzerland — After-hours pickup policy", url: "https://www.enterprise.ch/en/support/pick-up-after-opening-hours" },
      { label: "Enterprise Switzerland — No-show / expired policy", url: "https://www.enterprise.ch/en/support/no-show-/-expired-policy" },
      { label: "Europcar Germany — Rental terms (delay and no-show clauses)", url: "https://www.europcar.de/files/live/sites/Europcar.de/files/PDF/AVB/EUROPCAR%20AVB_DE_06_2024.pdf" },
      { label: "Europcar UK — Terms and conditions (out-of-hours collection)", url: "https://www.europcar.co.uk/files/live/sites/Europcar/files/Conf_email_attachment/CGL_EN_GB.pdf" },
      { label: "Budget UK — No-show fee FAQ", url: "https://budgetinternational.com/budgetonline/eu-gb/faq.nsf/(FAQByDOCID)/1901848F3FAB0896C12576090056A792?1901848F3FAB0896C12576090056A792&Answer=n&Level=Sub%20Topic&OpenDocument" },
      { label: "Budget Sweden — Flight tracking FAQ", url: "https://faq.budget.se/?question=what-happens-if-my-flight-is-late" },
      { label: "Avis Germany — Flight tracking FAQ", url: "https://faq.avis.de/?question=was-passiert-wenn-sich-mein-flug-verspatet" },
      { label: "Avis Switzerland — Pay-on-arrival and no-show terms", url: "https://eixnbeweb03.rent-at-avis.com/avisonline/terms.nsf/termsbycountryandlngcategories/ch-de-poa?OpenDocument" },
    ],
  },
  {
    title: "Broker terms",
    items: [
      { label: "Rentalcars.com — Terms and conditions (intermediary)", url: "https://www.rentalcars.com/en/terms-and-conditions/" },
    ],
  },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Flight Delayed? What Happens to Your Rental Car Booking",
  description: "Verified rental company policies for delayed flights: grace periods, flight-number protection, closed desks, after-hours pickup and no-show fees.",
  datePublished: "2026-10-21",
  dateModified: "2026-10-21",
  author: { "@type": "Organization", name: "Travelvus", url: "https://www.travelvus.com" },
  publisher: { "@type": "Organization", name: "Travelvus", url: "https://www.travelvus.com" },
  mainEntityOfPage: "https://www.travelvus.com/guides/rental-car-pickup-flight-delayed",
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function RentalCarPickupFlightDelayedPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <div className={styles.shell}>
        <HomeHeader />

        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <svg className={styles.heroTimeline} width="520" height="260" viewBox="0 0 520 260" fill="none" aria-hidden="true">
            <line x1="20" y1="200" x2="500" y2="200" stroke="rgba(214,232,229,0.45)" strokeWidth="1.5" strokeDasharray="5 6" />
            <circle cx="90" cy="200" r="7" fill="#D17A52" />
            <circle cx="280" cy="200" r="5" fill="rgba(214,232,229,0.85)" />
            <circle cx="430" cy="200" r="5" fill="rgba(214,232,229,0.85)" />
            <path d="M280 200 C 300 160, 340 140, 380 128" stroke="rgba(209,122,82,0.7)" strokeWidth="1.5" strokeDasharray="3 5" />
            <circle cx="388" cy="124" r="5" fill="rgba(209,122,82,0.8)" />
            <text x="66" y="228" fill="rgba(214,232,229,0.75)" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1.5">BOOKED PICKUP</text>
            <text x="250" y="228" fill="rgba(214,232,229,0.75)" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1.5">DELAYED</text>
            <text x="380" y="228" fill="rgba(214,232,229,0.75)" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1.5">DESK CLOSES?</text>
          </svg>
          <div className={styles.heroInner}>
            <div className={styles.heroRule} />
            <span className={styles.heroEyebrow}>Rental Car Fine Print · Delays</span>
            <h1 className={styles.heroTitle}>
              Flight delayed? <em>What actually happens to your rental car booking</em>
            </h1>
            <p className={styles.heroSub}>
              Some companies hold your car for hours when you give them a flight number.
              Others give you 60 minutes and a no-show fee. The difference is three things —
              and one of them is in your hands.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroBadge}><span className={styles.heroDot} /> Policies checked 21 October 2026</span>
              <span className={styles.heroBadge}>Official company terms only</span>
              <span className={styles.heroBadge}>8 min read</span>
            </div>
          </div>
        </section>

        {/* ═══ IMMEDIATE ANSWER ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>01 · The short answer</span></div>
          <h2>It depends on three things — and two of them you control</h2>
          <div className={styles.answerBlock}>
            If you gave the rental company your <strong>flight number</strong> and your flight
            lands <strong>before the desk closes</strong>, most verified policies hold the car
            for you. If either of those is missing, you may have as little as 60 minutes —
            and a no-show fee. <strong>Adding your flight number is the single most valuable
            thing you can do.</strong>
          </div>

          <div className={styles.factorGrid}>
            <div className={styles.factorCard}>
              <span className={styles.factorTag}>Factor 1 · Provider policy</span>
              <h3>What your company actually promises</h3>
              <p>
                SIXT holds up to 24 hours with a flight number. Hertz Switzerland holds one
                hour after actual landing. Enterprise UK holds an airport booking until the
                flight lands and clears. Budget and Avis only promise to track the flight.
                The policy is company-specific and country-specific.
              </p>
            </div>
            <div className={styles.factorCard}>
              <span className={styles.factorTag}>Factor 2 · Opening hours</span>
              <h3>When the desk closes</h3>
              <p>
                Every hold rule we verified is bounded by branch opening hours. Even a
                24-hour guarantee means pickup during business hours. If you land after
                closing, only specific, conditional after-hours arrangements apply — and
                they usually cost money.
              </p>
            </div>
            <div className={styles.factorCard}>
              <span className={styles.factorTag}>Factor 3 · Your booking</span>
              <h3>Flight number, payment, channel</h3>
              <p>
                A flight number changes the clock at SIXT, Hertz and Enterprise. Prepaid
                changes what a no-show costs you. Booking through a broker means the
                supplier&rsquo;s terms apply, not the broker&rsquo;s. These three details decide
                the outcome before you even land.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ POLICY MATRIX ═══ */}
        <div className={styles.wide}>
          <div className={styles.sectionKicker}><span>02 · The verified policies</span></div>
          <div className={styles.tableScroll}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Provider (country)</th>
                <th>Grace without flight number</th>
                <th>With flight number</th>
                <th>Desk closed / after hours</th>
                <th>No-show &amp; prepaid outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SIXT (14 countries listed by SIXT)</td>
                <td>60 minutes, within branch opening hours</td>
                <td>Reservation guaranteed up to 24 hours; pickup still only during business hours</td>
                <td>Airport branches stay open up to 1 hour beyond closing for delayed pickups</td>
                <td>Booking may be marked no-show after grace period expires; prepaid held for the rental period (no fee amount published)</td>
              </tr>
              <tr>
                <td>Hertz (Switzerland)</td>
                <td>1 hour, or until closing if earlier</td>
                <td>Until 1 hour after actual landing; Gold Plus Rewards: 2 hours</td>
                <td>Station stays open only if the airline has notified the delay and new arrival time</td>
                <td>Reservation expires if the window is missed; prepaid no-show fee CHF 140 (prepaid schedule)</td>
              </tr>
              <tr>
                <td>Enterprise (UK)</td>
                <td>Airport: 2 hours or closing, whichever earlier. Non-airport: 2 hours</td>
                <td>Airport: held until the flight has landed and cleared; staff wait if landing passes closing</td>
                <td>Staff member waits for the flight when a flight number is on the booking</td>
                <td>Prepaid no-show refunded minus £125</td>
              </tr>
              <tr>
                <td>Enterprise (Switzerland)</td>
                <td>2-hour grace without a valid flight number</td>
                <td>After-hours collection at airport stations with a valid flight number</td>
                <td>CHF 50 per 30 minutes; staff wait maximum 30 minutes after landing</td>
                <td>No-show policy published (fee per local terms)</td>
              </tr>
              <tr>
                <td>Europcar (Germany)</td>
                <td>Without prepayment or card/personal data: vehicle not guaranteed beyond 2 hours</td>
                <td>Flight/train number affects the airport closing-time wait</td>
                <td>Airport/rail stations without a number: staff wait up to 1 hour after regular closing</td>
                <td>No-show fee up to €95, capped at the rental price; flight delays explicitly not force majeure</td>
              </tr>
              <tr>
                <td>Europcar (UK)</td>
                <td>Per terms; airport bookings linked to a flight number get a reduced out-of-hours charge</td>
                <td>Reduced out-of-hours charge for delayed arrivals</td>
                <td>Out-of-hours collection £60; £20 for airport bookings with a flight number</td>
                <td>Prepayment refunded less the No Show Charge</td>
              </tr>
              <tr>
                <td>Budget (UK / Spain / Sweden / Australia)</td>
                <td>No official grace period published on the pages verified</td>
                <td>Tracking only (Sweden: &ldquo;Budget will still track late flights&rdquo; with correct flight details)</td>
                <td>No desk-closing or after-hours rule found</td>
                <td>UK: €40/£40 no-show fee, booking cancelled with no refund. Spain/Australia: prepaid forfeited</td>
              </tr>
              <tr>
                <td>Avis (Switzerland / Germany / Sweden / Spain)</td>
                <td>Swiss terms: 24-hour collection window before a no-show fee (hold not guaranteed)</td>
                <td>Tracking only (Germany/Sweden) with correct flight details</td>
                <td>No desk-closing or after-hours rule found</td>
                <td>Switzerland: Non Cancellation Fee €60/€65/CHF 76. Spain: prepaid not refunded on no-show</td>
              </tr>
            </tbody>
          </table>
          </div>
          <p className={styles.tableNote}>
            Every cell is from the provider&rsquo;s own official page or terms document, checked
            21 October 2026, and applies only to the country named. &ldquo;No rule found&rdquo; means the
            official pages we verified do not state one — not that a rule does not exist. Always
            confirm your branch&rsquo;s terms before you fly.
          </p>
        </div>

        {/* ═══ FLIGHT NUMBER ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>03 · The flight number</span></div>
          <h2>What a flight number actually buys you</h2>
          <p>
            This is the one action that changes outcomes across the most providers — and it is
            also the most overpromised. Here is exactly what it does and does not do.
          </p>
          <div className={styles.duoGrid}>
            <div className={`${styles.duoCard} ${styles.duoHelps}`}>
              <span className={styles.duoTag}>What it helps with</span>
              <h3>Verified effects</h3>
              <ul>
                <li>SIXT: extends the hold from a 60-minute grace period to up to 24 hours, and activates arrival tracking.</li>
                <li>Hertz Switzerland: moves the clock from scheduled pickup to actual landing + 1 hour (Gold Plus: 2 hours).</li>
                <li>Enterprise UK: an airport booking is held until the flight has landed and cleared; staff wait past closing.</li>
                <li>Europcar UK: reduces the out-of-hours collection charge from £60 to £20 for delayed arrivals.</li>
              </ul>
            </div>
            <div className={`${styles.duoCard} ${styles.duoNo}`}>
              <span className={styles.duoTag}>What it does NOT do</span>
              <h3>Verified limits</h3>
              <ul>
                <li>It does not override opening hours — a 24-hour SIXT guarantee is still &ldquo;pickup anytime during business hours&rdquo;.</li>
                <li>It is not a guarantee of vehicle availability at every company — Budget and Avis only promise tracking.</li>
                <li>At Hertz Switzerland, the after-hours extension depends on the airline notifying the delay — not on you entering the number.</li>
                <li>It does not waive no-show or after-hours fees anywhere we verified.</li>
              </ul>
            </div>
          </div>

          <div className={styles.callout}>
            <p>
              <strong>Delayed is not the same as missed.</strong> A delay means you arrive late
              but inside the company&rsquo;s hold rules. A missed pickup means you did not collect
              the car within the applicable window — and that is what triggers cancellation and
              fees. Your flight number, the hold rule and the desk&rsquo;s closing time are what
              separate the two.
            </p>
          </div>
        </div>

        {/* ═══ PREPAID + BROKER ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>04 · Payment and booking channel</span></div>
          <h2>Prepaid is not refundable — and broker terms are not supplier terms</h2>
          <p>
            If your booking is marked as a no-show, the refund outcome depends on company and
            country: <strong>Budget UK and Spain refuse refunds</strong>, Enterprise UK refunds
            minus £125, Europcar Germany refunds minus up to €95, and Hertz prepaid refunds minus
            the no-show charge on written request within 90 days. SIXT is the outlier — it
            describes prepaid reservations as held throughout the rental period. None of this
            changes because a flight was delayed: Europcar Germany explicitly states that flight
            delays do not release you from the fee.
          </p>
          <p>
            If you booked through a broker, the desk applies the <strong>supplier&rsquo;s</strong>{" "}
            terms. Rentalcars.com&rsquo;s own conditions say the supplier&rsquo;s rental agreement governs
            the rental and that the platform is not a party to it. Read the pickup and no-show
            rules in the supplier&rsquo;s own documentation — that is the contract the counter will
            follow.
          </p>
        </div>

        {/* ═══ SCENARIOS ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>05 · Five realistic scenarios</span></div>
          <h2>What the rules mean in practice</h2>
          <p>Hypothetical examples built from the verified policies above — not real customer stories.</p>
        </div>
        <div className={styles.wide}>
          <div className={styles.scenarioGrid}>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 1</span>
              <h3>Flight delayed by two hours, lands before closing</h3>
              <p>
                With a flight number on the booking: SIXT holds up to 24 hours, Hertz Switzerland
                holds until landing + 1 hour, Enterprise UK holds until the flight lands and clears.
                Low risk — but carry your booking reference and the flight number confirmation.
              </p>
            </div>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 2</span>
              <h3>Flight arrives after the desk closes</h3>
              <p>
                You are now in after-hours territory: conditional and priced. SIXT airport branches
                may stay open up to 1 hour past closing. Enterprise Switzerland: CHF 50 per 30
                minutes with a flight number. Europcar UK: £60, or £20 with a flight-number booking.
                If your provider has no arrangement, the reservation is at risk.
              </p>
            </div>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 3</span>
              <h3>Flight canceled until the next morning</h3>
              <p>
                The original pickup window is gone. Do not wait — call or message the branch,
                ask them to move the pickup time, and get written confirmation. If the booking
                was prepaid, check the no-show terms first so you know what a &ldquo;no collection on
                the rental start day&rdquo; would cost you (Budget UK: booking cancelled with no refund).
              </p>
            </div>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 4</span>
              <h3>Connecting flight missed, new arrival unknown</h3>
              <p>
                Highest-risk case: the airline may not publish a new arrival time, which breaks
                the Hertz Switzerland after-hours condition (it requires airline notification).
                Contact the branch yourself with your best estimate, ask about hold and after-hours
                rules, and get the answer in writing before you board.
              </p>
            </div>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 5</span>
              <h3>No flight number was entered</h3>
              <p>
                You are on the fallback clock: 60 minutes at SIXT, 1 hour (or closing) at Hertz
                Switzerland, 2 hours at Enterprise non-airport branches — and tracking-only at
                Budget and Avis. If the delay exceeds the window, you risk cancellation and a
                no-show fee. Add the flight number now if the booking allows it.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ DECISION ASSISTANT ═══ */}
        <div className={styles.wide}>
          <div className={styles.sectionKicker}><span>06 · Decision assistant</span></div>
          <PickupRiskAssistant />
        </div>

        {/* ═══ CHECKLISTS ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>07 · Checklists</span></div>
          <h2>Before you fly — and the moment a delay is announced</h2>
          <h3>Before you fly</h3>
          <ol className={styles.checklist}>
            <li><span><strong>Add your flight number</strong> to the booking — the single highest-value action in every verified policy.</span></li>
            <li><span>Check the branch&rsquo;s <strong>closing time for your exact date</strong> and compare it with your scheduled arrival.</span></li>
            <li><span>Look up the <strong>grace period and no-show fee</strong> for your company and country — in the supplier&rsquo;s own terms if you booked through a broker.</span></li>
            <li><span>If prepaid, note <strong>what a no-show costs you</strong> (forfeit vs fixed fee) before you rely on the booking.</span></li>
            <li><span>Save the <strong>branch phone number</strong> in your phone and screenshot your booking reference.</span></li>
          </ol>
          <h3>The moment a delay is announced</h3>
          <ol className={styles.checklist}>
            <li><span>Check whether the airline has <strong>published a new arrival time</strong> — one verified policy depends on it.</span></li>
            <li><span><strong>Call or message the branch</strong> with the new estimate; ask how long the car will be held and whether after-hours collection exists and at what price.</span></li>
            <li><span>Ask them to <strong>move the pickup time</strong> if the delay threatens the window — modifying beats gambling.</span></li>
            <li><span>Get <strong>written confirmation</strong> naming the branch, the new time and any fee. A verbal promise is not evidence.</span></li>
            <li><span>Re-check before landing — <strong>if the desk closes before you arrive, the after-hours rules (and fees) now apply</strong>.</span></li>
          </ol>
        </div>

        {/* ═══ FAQ ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>08 · Quick answers</span></div>
          <h2>FAQ</h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>

        {/* ═══ RELATED ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>09 · Continue your decision</span></div>
          <p>
            <Link href="/guides/dubrovnik-car-rental-cross-border-fees" style={{ color: "var(--dv-terracotta)" }}>
              Dubrovnik car rental cross-border fees
            </Link>{" "}
            — the other rental fine print that changes a trip&rsquo;s real cost ·{" "}
            <Link href="/guides/total-travel-time-comparison" style={{ color: "var(--dv-terracotta)" }}>
              Total travel time comparison
            </Link>{" "}
            — delays are a segment of the door-to-door journey ·{" "}
            <Link href="/guides/real-cost-of-a-flight" style={{ color: "var(--dv-terracotta)" }}>
              Real cost of a flight
            </Link>{" "}
            — no-show fees are hidden costs too.
          </p>
        </div>

        {/* ═══ SOURCES ═══ */}
        <div className={styles.content}>
          <div className={styles.sourcesPanel}>
            <div className={styles.sourcesHeader}>
              <h2 className={styles.sourcesTitle}>Sources and verification</h2>
              <span className={styles.verifiedPill}>All checked 21 October 2026</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--dv-body)", margin: "14px 0 8px" }}>
              Every provider claim on this page was read directly from the official source below.
              Policies are country-specific and change; treat every figure as point-in-time and
              re-check before booking. Where an official page does not state a rule, this page
              says so rather than guessing.
            </p>
            <ul className={styles.sourceList}>
              {SOURCE_GROUPS.map((group) => (
                <li key={group.title} className={styles.sourceGroup}>
                  <span className={styles.sourceGroupTitle}>{group.title}</span>
                  <ul className={styles.sourceList}>
                    {group.items.map((s, i) => (
                      <li key={i}>
                        <span className={styles.sourceIndex}>{String(i + 1).padStart(2, "0")}</span>
                        <span className={styles.sourceLabel}>{s.label}</span>
                        <a href={s.url} target="_blank" rel="noopener noreferrer">{s.url.replace("https://", "")}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
