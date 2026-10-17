import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Dublin to London: Heathrow or London City? | Travelvus",
  description: "Flying Dublin to London? Compare Heathrow and London City on total journey time, door-to-door cost, airport transfers and convenience. Which airport really wins?",
  alternates: { canonical: "/compare/dublin-to-london" },
};

export const DATA = {
  slug: "dublin-to-london",
  category: "London Airport Decision",
  question: "Dublin to London: Heathrow or London City?",
  shortAnswer: "London City wins for most travellers from Dublin: the DLR reaches Bank in ~25 minutes, making the door-to-door journey ~15 minutes faster and ~€3 cheaper than Heathrow once baggage and transfers are included.",
  confidence: "Strong confidence",
  lastReviewed: "October 2026",
  methodologyVerified: true,
  verdict: {
    line: "London City wins.",
    stats: [
      { label: "Total journey time", value: "280", unit: "min" },
      { label: "Time saved", value: "15", unit: "min", accent: true },
      { label: "Flight duration", value: "1", unit: "h 20m" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "London City", a: "~4h 55m", b: "~4h 40m", verdict: "London City is ~15 min faster" },
    { factor: "Total journey cost", winner: "London City", a: "~€115", b: "~€112", verdict: "London City saves ~€3" },
    { factor: "Transfer convenience", winner: "London City", a: "~35 min (Elizabeth Line)", b: "~25 min (DLR to Bank)", verdict: "London City's DLR is quicker" },
    { factor: "Arrival reliability", winner: "London City", a: "Elizabeth Line every 10–15 min", b: "DLR every 5–10 min", verdict: "London City is more predictable" },
    { factor: "Overall winner", winner: "London City", a: "—", b: "—", verdict: "London City wins on 4 of 4 factors", isFinal: true },
  ],
  winnerReasons: ["London City Airport's DLR connection is dramatically faster — ~25 min to Bank versus ~35 min on the Elizabeth Line from Heathrow.", "LCY is a small airport — baggage arrives faster and walking distances are shorter.", "For Dublin flights (Common Travel Area), there is no passport control at LCY — even faster.", "Total door-to-door is ~15 minutes shorter through City Airport on this route.", "For business travellers heading to Canary Wharf or the City, LCY is the clear winner."],
  alternative: {
    title: "When Heathrow is actually the better choice",
    points: ["Heathrow has more flight options and airlines on the Dublin route — better schedule flexibility.", "Heathrow is better for west London, Windsor and connecting to long-haul flights.", "Heathrow terminals have more shops, lounges and facilities than London City.", "If the Heathrow fare is more than ~€3 below the City fare, the Elizabeth Line's higher cost no longer decides the total."],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~€90 (Aer Lingus/BA)", b: "~€100 (BA Cityflyer)", winner: "a" as const, note: "Illustrative fares — Heathrow vs London City" },
    { label: "Checked bag", a: "Often included on Aer Lingus", b: "Often included on City routes", winner: "tie" as const, note: "Both carriers usually include a cabin bag; checked bags may cost extra" },
    { label: "Airport transfer — Dublin", a: "Aircoach or Dublin Bus — ~35 min from city centre, ~€8", b: "Aircoach or Dublin Bus — ~35 min from city centre, ~€8", winner: "tie" as const },
    { label: "Airport transfer — London", a: "~€17 (~£15, Elizabeth Line)", b: "~€4 (~£3.30, DLR to Bank)", winner: "b" as const, note: "Typical single fares" },
    { label: "Schedule waiting", a: "Minimal: trains every 10–15 min", b: "Minimal: DLR every 5–10 min", winner: "tie" as const },
  ],
  journeyTimeline: [
    { stage: "Dublin city → Airport", a: "Aircoach or Dublin Bus — ~35 min from city centre, ~€8", b: "Aircoach or Dublin Bus — ~35 min from city centre, ~€8" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight Dublin → London", a: "~1h 20m", b: "~1h 20m" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "~35 min (Elizabeth Line)", b: "~25 min (DLR to Bank)" },
    { stage: "Total door-to-door", a: "~4h 55m", b: "~4h 40m", isFinal: true },
  ],
  scenarios: [{"who": "Business traveller (City/Canary Wharf)", "choice": "London City", "why": "DLR to the office in ~25 min. No passport control. The fastest option."}, {"who": "Business traveller (West End)", "choice": "Heathrow", "why": "Elizabeth Line to Tottenham Court Road. Better for West End meetings."}, {"who": "Family with children", "choice": "Heathrow", "why": "More facilities, more space, wider choice of airlines and flight times."}, {"who": "Budget traveller", "choice": "Heathrow", "why": "Aer Lingus sale fares are often the cheapest option and include a cabin bag."}, {"who": "Weekend trip", "choice": "London City", "why": "Fastest door-to-door — more time enjoying London."}, {"who": "Connecting to long-haul", "choice": "Heathrow", "why": "Heathrow is the UK hub — seamless connections to worldwide destinations."}],
  commonMistakes: [{"mistake": "Choosing by ticket price only", "fix": "Add baggage fees, airport transfer cost and schedule waiting time. A small fare saving can disappear once the Elizabeth Line and a checked bag are added."}, {"mistake": "Ignoring the airport transfer", "fix": "Heathrow is 24km west of central London. The Elizabeth Line takes ~35 min and costs ~£15 — factor it in."}, {"mistake": "Assuming baggage is free", "fix": "Both Aer Lingus and BA Cityflyer usually include a cabin bag, but checked luggage can cost extra on the cheapest fares. Check the fare rules."}, {"mistake": "Not comparing Dublin airport access", "fix": "Aircoach or Dublin Bus takes ~35 min — factor this into the total journey before comparing London airports."}],
  faqItems: [
    { question: "Which London airport is cheaper overall for flights from Dublin?", answer: "Heathrow and London City are closely matched on price once baggage is included. Heathrow's advertised fares are sometimes lower, but the Elizabeth Line costs ~£15 versus ~£3.30 on the DLR, which offsets most of the difference. On our illustrative numbers London City is ~€3 cheaper overall — a small gap, so compare your exact fares." },
    { question: "How long is the transfer from Heathrow to central London?", answer: "The Elizabeth Line takes ~35 min and costs ~£15 off-peak (approx. 2026)." },
    { question: "How long is the transfer from London City to central London?", answer: "The DLR takes ~25 min to Bank and costs ~£3.30 off-peak. London City has no Elizabeth Line station — the DLR is the only rail link." },
    { question: "Does the time of day change which airport is better from Dublin?", answer: "Yes. Heathrow keeps the Piccadilly Line (24-hour on Fri/Sat) and night buses after the Elizabeth Line stops. London City's DLR runs until around 00:30, with night buses from Canary Wharf after that. Early morning departures may require arriving at the airport the night before." },
    { question: "What is the cheapest way to get from London City to central London?", answer: "The DLR — ~25 min to Bank, ~€4 (~£3.30 off-peak). There is no Elizabeth Line and no Piccadilly Line at London City; the DLR is the only rail connection." },
  ],
  cta: {
    title: "Compare your own Dublin–London journey",
    subtitle: "Paste your two flight options and see which really wins — door to door, with your exact ticket prices, baggage and preferred transfer.",
    buttonText: "Reveal the real winner",
    buttonHref: "/#compare",
  },
  continueCards: [
    { kicker: "Cost Guide", title: "Real Cost of a Flight", desc: "Why cheap tickets often become expensive after baggage, airports and transfers.", href: "/guides/real-cost-of-a-flight", link: "Continue reading →" },
    { kicker: "Time Guide", title: "Total Travel Time Comparison", desc: "Flight duration is just one segment of the door-to-door journey.", href: "/guides/total-travel-time-comparison", link: "Continue reading →" },
    { kicker: "Decision Hub", title: "London Airport Decisions", desc: "Explore real comparisons between London's major airports.", href: "/london-airports", link: "Explore →" },
  ],
  sources: [
    { claim: "London City and Heathrow distances and terminal information", source: "Heathrow Airport Ltd, London City Airport" },
    { claim: "London transfer times and off-peak fares", source: "Transport for London (TfL), National Rail", url: "https://tfl.gov.uk" },
    { claim: "Dublin airport access and fares", source: "Dublin Airport Authority, Aircoach" },
    { claim: "Flight durations", source: "Typical scheduled times for direct flights" },
  ],
  assumptions: [
    "Ticket prices are illustrative — actual fares vary by airline, season and booking date.",
    "Baggage costs are typical for European budget vs full-service airlines.",
    "Total journey cost and time are estimates based on typical conditions.",
    "The Verdict is illustrative — use the Comparison Engine with your real flight data.",
    "Transfer times assume off-peak, no major disruption.",
  ],
  factualReviewDate: "April 2027",
};

function AtAGlanceRow({ factor, winner, a, b, verdict, isFinal }: (typeof DATA.atAGlance)[0]) {
  return (
    <div className={`${styles.glanceRow} ${isFinal ? styles.glanceRowFinal : ""}`}>
      <span className={styles.glanceFactor}>{factor}</span>
      <span className={styles.glanceVal}>{a}</span>
      <span className={styles.glanceVal}>{b}</span>
      <span className={`${styles.glanceWinner} ${winner === "London City" ? styles.glanceWinnerB : styles.glanceWinnerA}`}>{verdict}</span>
    </div>
  );
}

export default function DublinToLondonPage() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />
        <div className={styles.page}>
          <section className={styles.hero}>
            <span className={styles.heroKicker}>London Airport Decision</span>
            <h1 className={styles.heroQuestion}>{DATA.question}</h1>
            <div className={styles.heroAnswer}>
              <span className={styles.heroAnswerLabel}>The answer</span>
              <span className={styles.heroAnswerText}>{DATA.shortAnswer}</span>
            </div>
            <div className={styles.heroMeta}>
              <span className={styles.confidenceTag}><span className={styles.confidenceDot} />{DATA.confidence}</span>
              <span>·</span><span>Reviewed {DATA.lastReviewed}</span>
              <span>·</span><span>Methodology verified</span>
            </div>
          </section>
          <section className={styles.verdictSection}>
            <TravelvusVerdict verdictLine={DATA.verdict.line} stats={DATA.verdict.stats} />
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>At a glance</h2>
            <p className={styles.sectionSub} style={{ marginBottom: 14 }}>Illustrative comparison based on typical fares and public transport costs. Ticket prices vary by airline, season and booking date.</p>
            <div className={styles.glanceHeader}><span /><span className={styles.glanceColLabel}>Heathrow</span><span className={styles.glanceColLabel}>London City</span><span /></div>
            {DATA.atAGlance.map((row, i) => <AtAGlanceRow key={i} {...row} />)}
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why {DATA.verdict.line}</h2>
            <div className={styles.whyGrid}>
              {DATA.winnerReasons.map((reason, i) => (
                <div key={i} className={styles.whyCard}>
                  <span className={styles.whyCardNum}>{String(i + 1).padStart(2, "0")}</span>
                  <p className={styles.whyCardText}>{reason}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={`${styles.section} ${styles.altSection}`}>
            <h2 className={styles.sectionTitle}>{DATA.alternative.title}</h2>
            <div className={styles.altGrid}>
              {DATA.alternative.points.map((point, i) => (
                <div key={i} className={styles.altCard}><span className={styles.altCardDot} /><p className={styles.altCardText}>{point}</p></div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How the real cost compares</h2>
            <p className={styles.sectionSub}>Illustrative breakdown. Actual costs depend on your specific flight, baggage and chosen transfer option.</p>
            <div className={styles.costHeader}><span>Cost factor</span><span>Heathrow</span><span>London City</span></div>
            {DATA.costBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}{row.note && <span style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{row.note}</span>}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "a" ? styles.costBetter : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "b" ? styles.costBetter : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}><span>Estimated total</span><span>~€115</span><span className={styles.costBetter}>~€112</span></div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Door-to-door journey timeline</h2>
            <div className={styles.timeline}>
              {DATA.journeyTimeline.map((stage, i) => (
                <div key={i} className={`${styles.timelineStage} ${stage.isFinal ? styles.timelineStageFinal : ""}`}>
                  <div className={styles.timelineLeft}>
                    <span className={styles.timelineDot} style={{ background: stage.isFinal ? "var(--copper)" : i === 0 ? "var(--navy)" : "var(--muted)" }} />
                    <span className={styles.timelineLabel}>{stage.stage}</span>
                  </div>
                  <div className={styles.timelineRight}>
                    <span className={styles.timelineVal}>{stage.a}</span><span className={styles.timelineSep}>vs</span><span className={styles.timelineVal}>{stage.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Which option fits your trip?</h2>
            <div className={styles.scenarioGrid}>
              {DATA.scenarios.map((s, i) => (
                <div key={i} className={styles.scenarioCard}>
                  <span className={styles.scenarioWho}>{s.who}</span><span className={styles.scenarioChoice}>→ {s.choice}</span>
                  <p className={styles.scenarioWhy}>{s.why}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Common mistakes on this route</h2>
            <div className={styles.mistakeGrid}>
              {DATA.commonMistakes.map((m, i) => (
                <div key={i} className={styles.mistakeCard}><span className={styles.mistakeLabel}>{m.mistake}</span><p className={styles.mistakeFix}>{m.fix}</p></div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Quick answers</h2>
            <FAQAccordion items={DATA.faqItems} />
          </section>
          <section className={styles.section} style={{ background: "var(--paper-2)" }}>
            <h2 className={styles.sectionTitle}>How we sourced this page</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 14 }}>
              <div>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 10 }}>Public sources</span>
                <ul style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.6, color: "#4a5560", margin: 0, paddingLeft: 16 }}>
                  {DATA.sources.map((s, i) => <li key={i}>{s.claim} — {s.source}</li>)}
                </ul>
              </div>
              <div>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 10 }}>Illustrative assumptions</span>
                <ul style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.6, color: "#4a5560", margin: 0, paddingLeft: 16 }}>
                  {DATA.assumptions.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            </div>
            <p style={{ fontFamily: "var(--mono)", fontWeight: 400, fontSize: 10, color: "var(--muted)", marginTop: 16, marginBottom: 0 }}>Last reviewed: {DATA.lastReviewed} · Next factual review: {DATA.factualReviewDate}</p>
          </section>
          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div><span className={styles.ctaKicker}>Travelvus</span><span className={styles.ctaTitle}>{DATA.cta.title}</span><p className={styles.ctaSub}>{DATA.cta.subtitle}</p></div>
              <Link href={DATA.cta.buttonHref} className={styles.ctaBtn}>{DATA.cta.buttonText}</Link>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Continue your decision</h2>
            <p className={styles.sectionSub}>The next guide depends on the question you&rsquo;re trying to answer.</p>
            <div className={styles.continueGrid}>
              {DATA.continueCards.map((c, i) => (
                <Link key={i} href={c.href} className={styles.continueCard}>
                  <span className={styles.continueKicker}>{c.kicker}</span><span className={styles.continueTitle}>{c.title}</span>
                  <span className={styles.continueDesc}>{c.desc}</span><span className={styles.continueLink}>{c.link}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div><span className={styles.footerBrand}>Travelvus</span><p className={styles.footerBrandText}>Decision engine for smarter air travel.</p></div>
            <div><span className={styles.footerColTitle}>Product</span><div className={styles.footerLinks}><Link href="/">Compare</Link><Link href="/london-airports">Airport Decisions</Link><Link href="/wego-flight">Travel Guides</Link><Link href="/methodology">Methodology</Link></div></div>
            <div><span className={styles.footerColTitle}>Company</span><div className={styles.footerLinks}><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
          </div>
          <div className={styles.footerBottom}><span>Know the real cost before you book.</span><span>&copy; 2026 Travelvus</span></div>
        </footer>
      </div>
    </div>
  );
}
