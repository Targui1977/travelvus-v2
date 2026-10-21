import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import Footer from "@/components/ui/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Is Wego Legit? How Wego Flights Works, Fees and Booking Risks | Travelvus",
  description: "How Wego flight search really works: the two booking models, who handles your booking and refunds, what the displayed price includes — checked October 2026.",
  alternates: { canonical: "/wego-flight" },
};

const FAQ_ITEMS = [
  { question: "Is Wego a legitimate flight booking site?", answer: "Yes — Wego is an established travel metasearch and marketplace, licensed as a travel agency in Singapore (TA03513) and operating through licensed entities in several markets. That answers legality. The more useful question is which model your booking uses, because it changes who you deal with when something goes wrong." },
  { question: "Does Wego sell flights itself, or just compare them?", answer: "Both. Wego compares prices from airlines and online travel agencies, and most fares redirect you to the provider's site to pay. But Wego also offers a 'Book on Wego' checkout where you complete the purchase without leaving Wego. The two models have different support and refund paths — check which one your booking uses before you pay." },
  { question: "Who handles changes and refunds on a Wego booking?", answer: "It depends on the booking model. For bookings made with a partner, Wego's own support pages say you should contact the booking partner directly — the partner manages your reservation and payment. For bookings made directly on Wego, Wego support submits the request on your behalf. In both cases the fare rules and fees are set by the airline, not by Wego." },
  { question: "Does the price Wego shows include all fees?", answer: "Not always. Wego's official help pages state the displayed fare includes the base fare and taxes, but that payment processing fees 'may be added at a later stage of the booking process', and credit card payments 'may include a small surcharge' shown before confirmation. Wego also states prices can change during booking because airlines control fares. Compare the final total before you pay — not the search-result price." },
  { question: "How long do Wego refunds take?", answer: "Wego's published terms say it initiates refunds within 2 working days, with funds usually arriving in 15–20 working days — up to 30 days for some local payment methods, and for involuntary cancellations (airline-cancelled flights) Wego's support pages warn refunds can take up to 3 months in some cases. Cancellation charges, Wego service fees and discounts may be deducted from the refund." },
  { question: "Is Wego always the cheapest option?", answer: "No provider guarantees the lowest price, and Wego does not claim to. Its own FAQ admits it reuses cached search results for similar searches, so prices are not strictly real-time. Treat Wego as one comparison source, check the final total at checkout, and compare against at least one alternative before booking." },
];

const SOURCE_GROUPS = [
  {
    title: "Official Wego documentation",
    items: [
      { label: "Wego About — what Wego is (meta-search engine; largest MENA/APAC travel marketplace)", url: "https://company.wego.com/about-us" },
      { label: "Wego — Book on Wego and price transparency (the two booking models)", url: "https://company.wego.com/how-price-transparency-works-when-you-book-with-wego" },
      { label: "Wego Support — bookings, cancellations, refunds FAQ", url: "https://support.wego.com/" },
      { label: "Wego Terms of Service (Sep 1, 2026) — fees, refunds, currency", url: "https://company.wego.com/terms-of-service/" },
      { label: "Wego — Refund request form (90-day disruption caveat)", url: "https://www.wego.com/forms/refund-request" },
      { label: "Wego — Partner contact information", url: "https://www.wego.com/partners-contact-info?lang=en" },
    ],
  },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Wego Legit? How Wego Flights Works, Fees and Booking Risks",
  description: "How Wego flight search really works: the two booking models, who handles your booking and refunds, and what the displayed price includes.",
  datePublished: "2026-10-21",
  dateModified: "2026-10-21",
  author: { "@type": "Organization", name: "Travelvus", url: "https://www.travelvus.com" },
  publisher: { "@type": "Organization", name: "Travelvus", url: "https://www.travelvus.com" },
  mainEntityOfPage: "https://www.travelvus.com/wego-flight",
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

export default function WegoFlightPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <div className={styles.shell}>
        <HomeHeader />

        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <svg className={styles.heroChain} width="520" height="240" viewBox="0 0 520 240" fill="none" aria-hidden="true">
            <circle cx="70" cy="200" r="7" fill="#D17A52" />
            <circle cx="250" cy="200" r="5" fill="rgba(214,232,229,0.85)" />
            <circle cx="430" cy="200" r="5" fill="rgba(214,232,229,0.85)" />
            <line x1="70" y1="200" x2="430" y2="200" stroke="rgba(214,232,229,0.45)" strokeWidth="1.5" strokeDasharray="5 6" />
            <path d="M250 200 C 270 150, 310 130, 360 122" stroke="rgba(209,122,82,0.7)" strokeWidth="1.5" strokeDasharray="3 5" />
            <circle cx="368" cy="118" r="5" fill="rgba(209,122,82,0.8)" />
            <text x="30" y="228" fill="rgba(214,232,229,0.75)" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1.5">YOU</text>
            <text x="215" y="228" fill="rgba(214,232,229,0.75)" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1.5">WEGO</text>
            <text x="380" y="228" fill="rgba(214,232,229,0.75)" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1.5">AIRLINE / OTA</text>
            <text x="378" y="108" fill="rgba(209,122,82,0.85)" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="1.5">TICKET</text>
          </svg>
          <div className={styles.heroInner}>
            <div className={styles.heroRule} />
            <span className={styles.heroEyebrow}>Booking Safety · Wego Flights</span>
            <h1 className={styles.heroTitle}>
              Is Wego Legit? <em>Who You Actually Book With Matters</em>
            </h1>
            <p className={styles.heroSub}>
              Wego is a licensed travel agency and metasearch engine — and it has two different
              booking models with different refund paths. Knowing which one you&rsquo;re using is the
              difference between a smooth change request and a refund that gets stuck.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroBadge}><span className={styles.heroDot} /> Official sources checked 21 October 2026</span>
              <span className={styles.heroBadge}>6 min read</span>
            </div>
          </div>
        </section>

        {/* ═══ DIRECT ANSWER ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>01 · The short answer</span></div>
          <h2>What Wego actually is</h2>
          <div className={styles.answerBlock}>
            Wego is a <strong>travel metasearch engine and online marketplace</strong> based in
            Singapore and Dubai, licensed as a travel agency (TA03513). It compares fares from
            airlines and online travel agencies — and, through <strong>“Book on Wego”</strong>,
            it also sells flights directly. <strong>Your booking is issued by the airline, not
            by Wego</strong>, and most changes, fees and refunds follow airline rules.
          </div>
        </div>

        {/* ═══ TWO MODELS ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>02 · The two booking models</span></div>
          <h2>Who you’re actually buying from</h2>
          <p>
            This is the single most important distinction on this page. Wego’s official help
            pages describe two separate paths, and they lead to different people when something
            goes wrong.
          </p>
        </div>
        <div className={styles.wide}>
          <div className={styles.modelGrid}>
            <div className={`${styles.modelCard} ${styles.modelDirect}`}>
              <span className={styles.modelTag}>Model A · Book on Wego</span>
              <h3>You pay on Wego’s checkout</h3>
              <ul>
                <li>Payment is processed in Wego’s checkout without leaving the site.</li>
                <li>Wego’s support team submits change and refund requests on your behalf.</li>
                <li>Wego’s terms cover processing fees and its refund timelines (2 working days to initiate; usually 15–20 working days to arrive).</li>
                <li>The ticket is still issued by the airline.</li>
              </ul>
            </div>
            <div className={`${styles.modelCard} ${styles.modelPartner}`}>
              <span className={styles.modelTag}>Model B · Partner redirect</span>
              <h3>You pay on the partner’s site</h3>
              <ul>
                <li>You are redirected to an airline or online travel agency to complete payment.</li>
                <li>Wego’s own support pages say: contact the booking partner directly — they manage your reservation and payment.</li>
                <li>Wego does not control that partner’s checkout, change or refund process.</li>
                <li>Your recourse runs through the partner first — that’s the chain below.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ═══ CHAIN ═══ */}
        <div className={styles.wide}>
          <div className={styles.chainPanel}>
            <h3 className={styles.chainTitle}>The refund chain, explained</h3>
            <div className={styles.chainSteps}>
              <div className={styles.chainStep}>
                <span className={styles.chainStepNum}>01</span>
                <span className={styles.chainStepName}>You</span>
                <span className={styles.chainStepDesc}>Request a change or refund through the party you paid.</span>
              </div>
              <span className={styles.chainArrow} aria-hidden="true">→</span>
              <div className={styles.chainStep}>
                <span className={styles.chainStepNum}>02</span>
                <span className={styles.chainStepName}>Wego (if Book on Wego)</span>
                <span className={styles.chainStepDesc}>Submits the request on your behalf; deducts service fees where applicable.</span>
              </div>
              <span className={styles.chainArrow} aria-hidden="true">→</span>
              <div className={styles.chainStep}>
                <span className={styles.chainStepNum}>03</span>
                <span className={styles.chainStepName}>Partner OTA or airline</span>
                <span className={styles.chainStepDesc}>Applies its own fare rules and refund policy.</span>
              </div>
              <span className={styles.chainArrow} aria-hidden="true">→</span>
              <div className={styles.chainStep}>
                <span className={styles.chainStepNum}>04</span>
                <span className={styles.chainStepName}>Your card</span>
                <span className={styles.chainStepDesc}>Funds return to the original payment method, in the original booking currency.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ PRICE ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>03 · The displayed price</span></div>
          <h2>What the price on screen may or may not include</h2>
          <p>
            Wego’s official help pages are precise here: the search-result price includes the{" "}
            <strong>base fare and taxes</strong> — but <strong>payment processing fees “may be
            added at a later stage of the booking process”</strong>, and credit card payments{" "}
            “may include a small surcharge”, shown before you confirm. Wego also states plainly
            that <strong>fares can change during booking</strong> because airlines control prices
            and nothing is locked until the ticket is issued. Its FAQ even admits it reuses
            cached results for similar searches — so prices are not strictly real-time.
          </p>
          <p>
            That is not “hidden fees” in the legal sense — Wego’s terms say the processing fee
            is displayed before payment and is non-refundable. But it does mean the headline
            number is a starting point, not a total. For the general method of comparing total
            flight costs, see our{" "}
            <Link href="/guides/real-cost-of-a-flight">real cost of a flight guide</Link>.
          </p>
        </div>

        {/* ═══ REFUNDS ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>04 · Changes and refunds</span></div>
          <h2>What to expect when you need money back</h2>
          <p>
            Fare rules and change fees are <strong>set by the airline, not Wego</strong>. Wego’s
            published refund timeline:
          </p>
          <ol className={styles.timeline}>
            <li><strong>Initiation:</strong> for bookings paid through Wego, its Terms state Wego initiates refunds within 2 working days. Partner bookings are refunded by the partner, not Wego.</li>
            <li><strong>Arrival:</strong> depends on your issuing bank — usually 15–20 working days, and up to 30 days for Mada and some local bank transfers (such as in Pakistan).</li>
            <li><strong>Involuntary cancellations:</strong> airline-cancelled flights may take up to 3 months in some cases. Wego&rsquo;s refund request form currently warns that during Middle East flight disruptions returning funds can take up to 90 days.</li>
            <li><strong>Deductions:</strong> cancellation charges, Wego service fees and any discounts may be deducted from the refund amount.</li>
          </ol>
        </div>

        {/* ═══ SCENARIOS ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>05 · Four realistic scenarios</span></div>
          <h2>How the models play out</h2>
          <p>Hypothetical examples built from the official terms above — not real customer stories.</p>
        </div>
        <div className={styles.wide}>
          <div className={styles.scenarioGrid}>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 1</span>
              <h3>You used “Book on Wego”</h3>
              <p>
                Your contract flow runs through Wego: request changes or refunds through Wego
                support, which applies the airline’s rules on your behalf. Expect a possible
                Wego service charge and the published refund timeline above.
              </p>
            </div>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 2</span>
              <h3>You were redirected to a partner</h3>
              <p>
                Wego’s support pages direct you to the booking partner for changes and refunds —
                the partner manages your reservation and payment. Contacting Wego first still
                works for routing, but the decision sits with the partner.
              </p>
            </div>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 3</span>
              <h3>The price changes at checkout</h3>
              <p>
                Official Wego language: fares can change during booking and nothing is locked
                until the ticket is issued. Review the final total — including any card
                surcharge and processing fee — before you confirm payment.
              </p>
            </div>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioTag}>Scenario 4</span>
              <h3>Your refund is taking months</h3>
              <p>
                For involuntary cancellations, Wego’s support pages warn refunds can take up to
                3 months. Document every interaction in writing, confirm the booking model you
                used, and escalate to the party you actually paid before considering a card
                chargeback.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ CHECKLIST ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>06 · Before you pay</span></div>
          <h2>Checklist</h2>
          <ol className={styles.checklist}>
            <li><span>Identify the booking model: <strong>“Book on Wego” or partner redirect?</strong> It decides who you deal with later.</span></li>
            <li><span>Compare the <strong>final total at checkout</strong> against the search-result price — processing fees and card surcharges may appear only now.</span></li>
            <li><span>Read the <strong>fare rules for changes and cancellations</strong> before paying — they are the airline’s, not Wego’s.</span></li>
            <li><span>Check the <strong>displayed currency</strong> against the payment currency; refunds return in the original booking currency.</span></li>
            <li><span>Keep the <strong>e-ticket and payment confirmation</strong> — the e-ticket is issued by the airline and is your travel document.</span></li>
            <li><span>Compare at least <strong>one alternative search</strong> before booking; Wego reuses cached results for similar searches.</span></li>
          </ol>
        </div>

        {/* ═══ WHO SHOULD USE ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>07 · The verdict</span></div>
          <h2>Who should use Wego — and when to compare elsewhere</h2>
          <p>
            Wego is most useful as a <strong>regional comparison layer</strong>: it is strongest
            in Middle East and Asia-Pacific markets, supports local payment methods such as MADA,
            KNET and STC Pay, and its “Book on Wego” flow gives you a single support contact for
            changes. Its limitations are structural, not dishonesty: partner bookings route
            recourse elsewhere, cached search results are not strictly real-time, and there is
            no formal trip guarantee. Use Wego to <strong>find and compare fares</strong>; decide
            where to pay only after you know which model you’re in.
          </p>
          <p>
            Browse the rest of our{" "}
            <Link href="/guides">decision guides</Link> for the same treatment applied to
            airports, rental cars and flight costs.
          </p>
        </div>

        {/* ═══ FAQ ═══ */}
        <div className={styles.content}>
          <div className={styles.sectionKicker}><span>08 · Quick answers</span></div>
          <h2>FAQ</h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>

        {/* ═══ SOURCES ═══ */}
        <div className={styles.content}>
          <div className={styles.sourcesPanel}>
            <div className={styles.sourcesHeader}>
              <h2 className={styles.sourcesTitle}>Sources and verification</h2>
              <span className={styles.verifiedPill}>All checked 21 October 2026</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--dv-body)", margin: "14px 0 8px" }}>
              Every claim on this page was read directly from Wego’s official pages. Note one
              internal inconsistency we found: Wego’s Terms of Service contain a clause stating
              you must transact directly with third parties, which conflicts with the “Book on
              Wego” checkout and the same document’s own fee and refund clauses — we have relied
              on the specific clauses cited, not on the general wording.
            </p>
            <ul className={styles.sourceList}>
              {SOURCE_GROUPS.map((group, gi) => (
                <li key={group.title} style={{ display: "block", border: "none", padding: 0 }}>
                  <details className={styles.sourceDetails} open={gi === 0}>
                    <summary>{group.title}</summary>
                    <ul className={styles.sourceList}>
                      {group.items.map((s, i) => (
                        <li key={i}>
                          <span className={styles.sourceIndex}>{String(i + 1).padStart(2, "0")}</span>
                          <span className={styles.sourceLabel}>{s.label}</span>
                          <a href={s.url} target="_blank" rel="noopener noreferrer">{s.url.replace("https://", "")}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
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
