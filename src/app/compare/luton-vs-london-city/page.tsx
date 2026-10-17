import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Luton vs London City: Which London Airport Wins? | Travelvus",
  description: "Compare Luton and London City on total journey cost, door-to-door time, airport transfers and convenience. Which London airport really wins for your trip?",
  alternates: { canonical: "/compare/luton-vs-london-city" },
};

export const DATA = {
  slug: "luton-vs-london-city",
  category: "London Airport Decision",
  question: "Luton vs London City — which London airport wins?",
  shortAnswer: "Luton wins on price — about £53 cheaper door-to-door — and offers far more budget routes; London City wins on speed, with a DLR transfer of about 25 minutes and a journey about 20 minutes shorter.",
  confidence: "Strong confidence",
  lastReviewed: "October 2026",
  methodologyVerified: true,
  verdict: {
    line: "Luton wins on budget, London City on speed.",
    stats: [
      { label: "Total journey time", value: "255", unit: "min" },
      { label: "Time saved", value: "20", unit: "min", accent: true },
      { label: "Flight duration", value: "1", unit: "h 30m" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "London City", a: "~4h 35m", b: "~4h 15m", verdict: "London City is ~20 min faster" },
    { factor: "Total journey cost", winner: "Luton", a: "~£100", b: "~£153", verdict: "Luton saves ~£53" },
    { factor: "Transfer convenience", winner: "London City", a: "40 min (DART + Thameslink)", b: "25 min (DLR)", verdict: "London City's transfer is ~15 min faster" },
    { factor: "Route and airline choice", winner: "Luton", a: "Budget-focused, wide European network", b: "Short-haul business routes", verdict: "Luton has more airlines and routes" },
    { factor: "Overall winner", winner: "Split decision", a: "—", b: "—", verdict: "Luton wins on budget and routes, London City on speed", isFinal: true },
  ],
  winnerReasons: [
    "Luton is about £53 cheaper door-to-door in this comparison — the ticket price gap more than covers the checked bag and the transfer.",
    "Luton's DART rail link plus Thameslink reaches St Pancras in about 40 minutes, so the transfer is workable rather than painful.",
    "Wizz Air and easyJet cover a wide European network from Luton — far more routes than LCY offers.",
    "London City wins on speed: the DLR reaches Bank in about 25 minutes and the whole journey is about 20 minutes shorter.",
    "LCY is a premium small-airport experience — about 20 minutes from plane to DLR — while Luton is functional and budget.",
  ],
  alternative: {
    title: "When Luton is actually the better choice",
    points: [
      "Wizz Air and easyJet from Luton fly to many destinations LCY does not serve.",
      "The price difference is about £53 in this comparison — significant for any traveller.",
      "Luton is better for north London, Milton Keynes, Bedford and the Midlands.",
      "Luton's DART + Thameslink connection reaches St Pancras in about 40 minutes.",
      "If your destination is north London rather than the City, Luton's geography helps too.",
    ],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~£45 (Wizz Air/easyJet)", b: "~£150 (BA CityFlyer)", winner: "a" as const, note: "Base fare before baggage" },
    { label: "Checked bag", a: "~£40", b: "£0 (included)", winner: "b" as const, note: "Budget airlines typically charge extra" },
    { label: "Airport transfer — London", a: "~£15 (DART + Thameslink)", b: "~£3 (DLR)", winner: "b" as const, note: "Off-peak single fares" },
    { label: "Schedule waiting", a: "Risk: 20–40 min gap", b: "Minimal: every 5–10 min", winner: "b" as const },
    { label: "Terminal experience", a: "Functional, basic amenities", b: "Premium facilities", winner: "b" as const },
  ],
  journeyTimeline: [
    { stage: "London city → Airport", a: "45km north of central London", b: "11km east of central London" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight (typical European)", a: "~1h 30m (typical European)", b: "~1h 30m (typical European)" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "40 min (DART + Thameslink)", b: "25 min (DLR)" },
    { stage: "Total door-to-door", a: "~4h 35m", b: "~4h 15m", isFinal: true },
  ],
  scenarios: [
    { who: "Business traveller (City/Canary Wharf)", choice: "London City", why: "LCY is purpose-built for this — the DLR reaches the office in about 25 minutes." },
    { who: "Budget traveller", choice: "Luton", why: "Wizz Air and easyJet fares are far cheaper than LCY — the saving is real." },
    { who: "North London", choice: "Luton", why: "Luton is closer to north London than LCY. DART + Thameslink to St Pancras is fast." },
    { who: "Weekend trip", choice: "London City", why: "About 20 minutes faster door-to-door — more time in London on a short trip." },
    { who: "Travelling to Eastern Europe", choice: "Luton", why: "Wizz Air's LTN base serves Eastern European destinations LCY doesn't touch." },
    { who: "Family with children", choice: "London City", why: "If LCY serves your route, the tiny airport means no long walks and no DART change — less stress." },
  ],
  commonMistakes: [
    { mistake: "Choosing by ticket price only", fix: "Add baggage fees, transfer cost and schedule waiting. A £50 saving on the ticket can disappear after one checked bag." },
    { mistake: "Ignoring the airport transfer", fix: "London City is 11km from central London. Luton is 45km. The transfer cost and time differ significantly." },
    { mistake: "Forgetting baggage costs", fix: "Budget airlines charge around £40 for a checked bag. Full-service airlines often include it." },
    { mistake: "Not checking your destination within London", fix: "Luton is better for north London. London City is better for east London and Canary Wharf." },
  ],
  faqItems: [
    { question: "Which is better — Luton or London City?", answer: "Luton wins on price — about £53 cheaper door-to-door — and has far more budget routes. London City wins on speed: about 20 minutes faster door-to-door, with a DLR transfer of about 25 minutes to Bank." },
    { question: "How long is the transfer from Luton to central London?", answer: "The DART rail link connects the terminal to Luton Airport Parkway in about 5 minutes (£4.90), then Thameslink reaches St Pancras in about 30 minutes — roughly 40 minutes and ~£15 in total. DART is an automated people mover on rails, not a bus." },
    { question: "How long is the transfer from London City to central London?", answer: "The DLR reaches Bank in about 25 minutes (~£3.30 off-peak) and runs every 5–10 minutes. London City has no Elizabeth Line and no Piccadilly Line — the DLR is its only rail link." },
    { question: "Is Luton or London City cheaper overall?", answer: "Luton typically costs around £100 door-to-door in this comparison; London City around £153 — about £53 more." },
    { question: "Which airline flies from Luton vs London City?", answer: "Luton serves mainly Wizz Air and easyJet. London City serves mainly BA CityFlyer and niche business carriers." },
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
      <span className={`${styles.glanceWinner} ${winner === "London City" ? styles.glanceWinnerB : styles.glanceWinnerA}`}>{verdict}</span>
    </div>
  );
}

export default function LutonVsLondonCityPage() {
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
            <div className={styles.glanceHeader}><span /><span className={styles.glanceColLabel}>Luton</span><span className={styles.glanceColLabel}>London City</span><span /></div>
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
            <div className={styles.costHeader}><span>Cost factor</span><span>Luton</span><span>London City</span></div>
            {DATA.costBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}{row.note && <span style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{row.note}</span>}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "a" ? styles.costBetter : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "b" ? styles.costBetter : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}><span>Estimated total</span><span className={styles.costBetter}>~£100</span><span>~£153</span></div>
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
