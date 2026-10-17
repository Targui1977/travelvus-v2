import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Stansted vs Luton: Which London Airport Wins? | Travelvus",
  description: "Compare Stansted and Luton on total journey cost, door-to-door time, airport transfers and convenience. Which London airport really wins for your trip?",
  alternates: { canonical: "/compare/stansted-vs-luton" },
};

export const DATA = {
  slug: "stansted-vs-luton",
  category: "London Airport Decision",
  question: "Stansted vs Luton — which London airport wins?",
  shortAnswer: "Luton edges it for most travellers: its DART + Thameslink transfer is about 10 minutes faster, the total journey is about 15 minutes shorter, and total costs are effectively level. Stansted wins on route choice through Ryanair.",
  confidence: "Strong confidence",
  lastReviewed: "October 2026",
  methodologyVerified: true,
  verdict: {
    line: "Luton edges it.",
    stats: [
      { label: "Total journey time", value: "300", unit: "min" },
      { label: "Time saved", value: "15", unit: "min", accent: true },
      { label: "Flight duration", value: "2", unit: "h 00m" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "Luton", a: "~5h 15m", b: "~5h 00m", verdict: "Luton is ~15 min faster" },
    { factor: "Total journey cost", winner: "Luton", a: "~£102", b: "~£100", verdict: "Luton saves ~£2 — effectively a tie" },
    { factor: "Transfer convenience", winner: "Luton", a: "50 min (Stansted Express)", b: "40 min (DART + Thameslink)", verdict: "Luton's transfer is ~10 min faster" },
    { factor: "Route and airline choice", winner: "Stansted", a: "Widest UK budget network (Ryanair)", b: "Budget-focused, good choice", verdict: "Stansted has more airlines and routes" },
    { factor: "Overall winner", winner: "Luton", a: "—", b: "—", verdict: "Luton wins on time, cost and transfer", isFinal: true },
  ],
  winnerReasons: [
    "Luton's DART + Thameslink reaches St Pancras in about 40 minutes versus about 50 minutes on the Stansted Express — about 10 minutes faster.",
    "Total costs are effectively level in this comparison — about £100 at Luton versus about £102 at Stansted.",
    "Luton's total journey is about 15 minutes shorter door-to-door once baggage and the transfer are counted.",
    "Stansted still wins on route choice: Ryanair's base there is the widest budget network in the UK.",
    "Luton is better placed for north London, Milton Keynes, Bedford and the Midlands.",
  ],
  alternative: {
    title: "Which budget airport is right for you?",
    points: [
      "Choose Stansted if flying Ryanair — it is their largest UK base with the most routes.",
      "Choose Luton if flying Wizz Air or easyJet — both have major operations at LTN.",
      "Stansted is better for Cambridge, northeast London and East Anglia.",
      "Luton is better for north London, Milton Keynes, Bedford and the Midlands.",
      "Choose Luton if a 10-minute faster transfer and slightly lower total cost matter to you.",
    ],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~£40 (Ryanair)", b: "~£45 (Wizz Air/easyJet)", winner: "a" as const, note: "Budget fare, varies by airline" },
    { label: "Checked bag", a: "~£40", b: "~£40", winner: "tie" as const, note: "Budget airlines typically charge extra" },
    { label: "Airport transfer — London", a: "~£22 (Stansted Express)", b: "~£15 (DART + Thameslink)", winner: "b" as const, note: "Off-peak single fares" },
    { label: "Schedule waiting", a: "Risk: 20–40 min gap", b: "Risk: 20–40 min gap", winner: "tie" as const },
    { label: "Terminal experience", a: "Functional, basic amenities", b: "Functional, basic amenities", winner: "tie" as const },
  ],
  journeyTimeline: [
    { stage: "London city → Airport", a: "55km northeast of central London", b: "45km north of central London" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight (typical European)", a: "~2h 00m (typical European)", b: "~2h 00m (typical European)" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "50 min (Stansted Express)", b: "40 min (DART + Thameslink)" },
    { stage: "Total door-to-door", a: "~5h 15m", b: "~5h 00m", isFinal: true },
  ],
  scenarios: [
    { who: "Ryanair flyer", choice: "Stansted", why: "Ryanair's biggest UK base — maximum route choice and frequency." },
    { who: "Wizz Air / easyJet flyer", choice: "Luton", why: "Both airlines have major operations at Luton with competitive fares." },
    { who: "Northeast London / Cambridge", choice: "Stansted", why: "Stansted is geographically closer and the Stansted Express serves Liverpool Street." },
    { who: "North London / Home Counties", choice: "Luton", why: "Luton is closer to north London, Luton, Bedford and Milton Keynes." },
    { who: "Budget weekend trip", choice: "Either", why: "Both are budget airports. Choose by which airline has the best fare and schedule." },
    { who: "Family with children", choice: "Neither — try Gatwick", why: "Both budget airports involve longer transfers. Gatwick is more family-friendly with direct trains." },
  ],
  commonMistakes: [
    { mistake: "Choosing by ticket price only", fix: "Add baggage fees, transfer cost and schedule waiting. A £50 saving on the ticket can disappear after one checked bag." },
    { mistake: "Ignoring the airport transfer", fix: "Luton is 45km from central London. Stansted is 55km. The transfer cost and time differ significantly." },
    { mistake: "Forgetting baggage costs", fix: "Budget airlines charge around £40 for a checked bag. Full-service airlines often include it." },
    { mistake: "Not checking your destination within London", fix: "Stansted is better for northeast London. Luton is better for north London." },
  ],
  faqItems: [
    { question: "Which is better — Stansted or Luton?", answer: "Luton edges it for most travellers: its transfer is about 10 minutes faster, the total journey about 15 minutes shorter, and total costs are effectively level. Stansted wins if Ryanair's route network is the reason you are flying there." },
    { question: "How long is the transfer from Stansted to central London?", answer: "The Stansted Express reaches Liverpool Street in about 50 minutes (~£22 walk-up; advance fares from £9.90). Coaches take 75–90 minutes for about £10–15. The last Express leaves around 00:30." },
    { question: "How long is the transfer from Luton to central London?", answer: "The DART rail link connects the terminal to Luton Airport Parkway in about 5 minutes (£4.90), then Thameslink reaches St Pancras in about 30 minutes — roughly 40 minutes and ~£15 in total. DART is an automated people mover on rails, not a bus." },
    { question: "Is Stansted or Luton cheaper overall?", answer: "Stansted typically costs around £102 door-to-door in this comparison; Luton around £100. The difference is within £2 — effectively a tie." },
    { question: "Which airline flies from Stansted vs Luton?", answer: "Stansted serves mainly Ryanair (largest UK base). Luton serves mainly Wizz Air and easyJet." },
  ],
  cta: {
    title: "Compare your own journey",
    subtitle: "Paste your two flight options into the Travelvus Comparison Engine and see which really wins — door to door.",
    buttonText: "Reveal the real winner",
    buttonHref: "/#compare",
  },
  continueCards: [
    { kicker: "Decision Center", title: "London Airport Decision Center", desc: "The complete guide to choosing the best London airport for your journey.", href: "/london-airport-decision-center", link: "Explore →" },
    { kicker: "Cost Guide", title: "Real Cost of a Flight", desc: "Why cheap tickets often become expensive after baggage, airports and transfers.", href: "/guides/real-cost-of-a-flight", link: "Continue reading →" },
    { kicker: "Time Guide", title: "Total Travel Time Comparison", desc: "Flight duration is just one segment of the door-to-door journey.", href: "/guides/total-travel-time-comparison", link: "Continue reading →" },
  ],
  sources: [
    { claim: "Airport distances and terminal information", source: "Heathrow Airport Ltd, Gatwick Airport Ltd, Stansted Airport Ltd, London Luton Airport Ltd, London City Airport Ltd" },
    { claim: "London transfer times and off-peak fares", source: "Transport for London (TfL), National Rail" },
    { claim: "Airline operations", source: "Public airline route data" },
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
      <span className={`${styles.glanceWinner} ${winner === "Luton" ? styles.glanceWinnerB : styles.glanceWinnerA}`}>{verdict}</span>
    </div>
  );
}

export default function StanstedVsLutonPage() {
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
            <div className={styles.glanceHeader}><span /><span className={styles.glanceColLabel}>Stansted</span><span className={styles.glanceColLabel}>Luton</span><span /></div>
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
            <div className={styles.costHeader}><span>Cost factor</span><span>Stansted</span><span>Luton</span></div>
            {DATA.costBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}{row.note && <span style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{row.note}</span>}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "a" ? styles.costBetter : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "b" ? styles.costBetter : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}><span>Estimated total</span><span>~£102</span><span className={styles.costBetter}>~£100</span></div>
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
