import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Stansted vs London City: Which London Airport Wins? | Travelvus",
  description: "Compare Stansted and London City on total journey cost, door-to-door time, airport transfers and convenience. Which London airport really wins for your trip?",
  alternates: { canonical: "/compare/stansted-vs-london-city" },
};

export const DATA = {
  slug: "stansted-vs-london-city",
  category: "London Airport Decision",
  question: "Stansted vs London City — which London airport wins?",
  shortAnswer: "Stansted wins on price — about £51 cheaper door-to-door — and flies far more budget routes; London City wins on speed, reaching Bank on the DLR in about 25 minutes and finishing the journey about 30 minutes sooner.",
  confidence: "Strong confidence",
  lastReviewed: "October 2026",
  methodologyVerified: true,
  verdict: {
    line: "Stansted wins on price, London City on speed.",
    stats: [
      { label: "Total journey time", value: "255", unit: "min" },
      { label: "Time saved", value: "30", unit: "min", accent: true },
      { label: "Flight duration", value: "1", unit: "h 30m" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "London City", a: "~4h 45m", b: "~4h 15m", verdict: "London City is ~30 min faster" },
    { factor: "Total journey cost", winner: "Stansted", a: "~£102", b: "~£153", verdict: "Stansted saves ~£51" },
    { factor: "Transfer convenience", winner: "London City", a: "50 min (Stansted Express)", b: "25 min (DLR)", verdict: "London City's transfer is ~25 min faster" },
    { factor: "Route and airline choice", winner: "Stansted", a: "Budget-focused, widest UK network", b: "Short-haul business routes", verdict: "Stansted has more airlines and routes" },
    { factor: "Overall winner", winner: "Split decision", a: "—", b: "—", verdict: "Stansted wins on price and routes, London City on speed", isFinal: true },
  ],
  winnerReasons: [
    "This is the most extreme comparison in London — the furthest budget airport versus the closest premium airport.",
    "London City saves about 30 minutes door-to-door — the DLR reaches Bank in about 25 minutes and the airport itself takes about 20 minutes from plane to platform.",
    "LCY's DLR costs about £3.30; the Stansted Express costs about £22 and takes about 50 minutes.",
    "Stansted serves hundreds of budget routes across Europe — LCY serves a handful of business routes.",
    "The choice is stark: speed and convenience (LCY) versus price and route choice (Stansted).",
  ],
  alternative: {
    title: "When Stansted is actually the better choice",
    points: [
      "Ryanair from Stansted flies to vastly more destinations than LCY serves — route choice alone may decide.",
      "Stansted is about £51 cheaper door-to-door in this comparison — significant for budget-conscious travellers.",
      "Stansted is better for northeast London, Cambridge and East Anglia.",
      "If you have time and value the saving, the Stansted Express transfer is comfortable and reliable.",
      "The last Stansted Express leaves around 00:30, so late arrivals are less constrained than often assumed.",
    ],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~£40 (Ryanair)", b: "~£150 (BA CityFlyer)", winner: "a" as const, note: "Base fare before baggage" },
    { label: "Checked bag", a: "~£40", b: "£0 (included)", winner: "b" as const, note: "Budget airlines typically charge extra" },
    { label: "Airport transfer — London", a: "~£22 (Stansted Express)", b: "~£3 (DLR)", winner: "b" as const, note: "Off-peak single fares" },
    { label: "Schedule waiting", a: "Risk: 20–40 min gap", b: "Minimal: every 5–10 min", winner: "b" as const },
    { label: "Terminal experience", a: "Functional, basic amenities", b: "Premium facilities", winner: "b" as const },
  ],
  journeyTimeline: [
    { stage: "London city → Airport", a: "55km northeast of central London", b: "11km east of central London" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight (typical European)", a: "~1h 30m (Ryanair)", b: "~1h 30m (BA CityFlyer)" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "50 min (Stansted Express)", b: "25 min (DLR)" },
    { stage: "Total door-to-door", a: "~4h 45m", b: "~4h 15m", isFinal: true },
  ],
  scenarios: [
    { who: "Business traveller (City/Canary Wharf)", choice: "London City", why: "About 30 minutes faster. The DLR drops you at the office. The premium is worth it." },
    { who: "Budget traveller", choice: "Stansted", why: "Ryanair fares can be very low. The saving of around £50 justifies the longer transfer." },
    { who: "Family with children", choice: "London City", why: "If LCY serves your route, the short transfer is a game-changer with tired children." },
    { who: "Weekend trip", choice: "London City", why: "The 30-minute saving means more time in London on a short trip." },
    { who: "Route not served by LCY", choice: "Stansted", why: "LCY has limited routes. If your destination isn't served, Stansted is the budget fallback." },
    { who: "Cambridge / East Anglia", choice: "Stansted", why: "Stansted is the closest airport to Cambridge — direct train in about 30 minutes." },
  ],
  commonMistakes: [
    { mistake: "Choosing by ticket price only", fix: "Add baggage fees, transfer cost and schedule waiting. A £50 saving on the ticket can disappear after one checked bag." },
    { mistake: "Ignoring the airport transfer", fix: "London City is 11km from central London. Stansted is 55km. The transfer cost and time differ significantly." },
    { mistake: "Forgetting baggage costs", fix: "Budget airlines charge around £40 for a checked bag. Full-service airlines often include it." },
    { mistake: "Not checking your destination within London", fix: "Stansted is better for northeast London. London City is better for east London and Canary Wharf." },
  ],
  faqItems: [
    { question: "Which is better — Stansted or London City?", answer: "Stansted wins on price — about £51 cheaper door-to-door — and has far more budget routes. London City wins on speed: about 30 minutes faster door-to-door, with a DLR transfer of about 25 minutes to Bank." },
    { question: "How long is the transfer from Stansted to central London?", answer: "The Stansted Express reaches Liverpool Street in about 50 minutes (~£22 walk-up; advance fares from £9.90). Coaches take 75–90 minutes for about £10–15. The last Express leaves around 00:30." },
    { question: "How long is the transfer from London City to central London?", answer: "The DLR reaches Bank in about 25 minutes (~£3.30 off-peak) and runs every 5–10 minutes. London City has no Elizabeth Line and no Piccadilly Line — the DLR is its only rail link." },
    { question: "Is Stansted or London City cheaper overall?", answer: "Stansted typically costs around £102 door-to-door in this comparison; London City around £153 — about £51 more." },
    { question: "Which airline flies from Stansted vs London City?", answer: "Stansted serves mainly Ryanair (largest UK base). London City serves mainly BA CityFlyer and niche business carriers." },
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

export default function StanstedVsLondonCityPage() {
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
            <div className={styles.glanceHeader}><span /><span className={styles.glanceColLabel}>Stansted</span><span className={styles.glanceColLabel}>London City</span><span /></div>
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
            <div className={styles.costHeader}><span>Cost factor</span><span>Stansted</span><span>London City</span></div>
            {DATA.costBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}{row.note && <span style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{row.note}</span>}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "a" ? styles.costBetter : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "b" ? styles.costBetter : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}><span>Estimated total</span><span className={styles.costBetter}>~£102</span><span>~£153</span></div>
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
