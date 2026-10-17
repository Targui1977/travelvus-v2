import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Heathrow vs London City: Which London Airport Wins? | Travelvus",
  description: "Compare Heathrow and London City on total journey cost, door-to-door time, airport transfers and convenience. Which London airport really wins for your trip?",
  alternates: { canonical: "/compare/heathrow-vs-london-city" },
};

export const DATA = {
  slug: "heathrow-vs-london-city",
  category: "London Airport Decision",
  question: "Heathrow vs London City — which London airport wins?",
  shortAnswer: "London City wins for the City and Canary Wharf — about 15 minutes faster door-to-door, with a DLR transfer of roughly 25 minutes — while Heathrow is about £8 cheaper and flies far more routes.",
  confidence: "Strong confidence",
  lastReviewed: "October 2026",
  methodologyVerified: true,
  verdict: {
    line: "London City wins for the City, Heathrow for the rest of London.",
    stats: [
      { label: "Total journey time", value: "255", unit: "min" },
      { label: "Time saved", value: "15", unit: "min", accent: true },
      { label: "Flight duration", value: "1", unit: "h 30m" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "London City", a: "~4h 30m", b: "~4h 15m", verdict: "London City is ~15 min faster" },
    { factor: "Total journey cost", winner: "Heathrow", a: "~£145", b: "~£153", verdict: "Heathrow saves ~£8" },
    { factor: "Transfer convenience", winner: "London City", a: "35 min (Elizabeth Line)", b: "25 min (DLR)", verdict: "London City's transfer is ~10 min faster" },
    { factor: "Route and airline choice", winner: "Heathrow", a: "Wide choice, all alliances", b: "Short-haul business routes", verdict: "Heathrow has far more airlines and routes" },
    { factor: "Overall winner", winner: "Split decision", a: "—", b: "—", verdict: "London City wins on speed, Heathrow on cost and routes", isFinal: true },
  ],
  winnerReasons: [
    "London City is 11km east of central London — the DLR reaches Bank in about 25 minutes for around £3.30.",
    "LCY is tiny — you walk from the plane to the DLR platform in about 20 minutes, with no long terminal walks.",
    "For business travellers heading to Canary Wharf or the City, LCY is untouchable — the DLR drops you at your office.",
    "Heathrow wins on money in this comparison: roughly £145 door-to-door versus £153 for London City.",
    "Heathrow also flies almost everywhere — if LCY does not serve your route, the choice is made for you.",
  ],
  alternative: {
    title: "When Heathrow is actually the better choice",
    points: [
      "Heathrow serves far more routes — if LCY doesn't fly where you need to go, the choice is made for you.",
      "Heathrow has better terminal facilities — lounges, restaurants, shops — for longer waits.",
      "Heathrow connects to the Tube network (Piccadilly Line) and the Elizabeth Line; LCY has only the DLR.",
      "Heathrow is better for west London, Windsor, and connecting to worldwide long-haul flights.",
      "Heathrow is about £8 cheaper door-to-door in this comparison, with a lower base fare.",
    ],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~£130 (full-service)", b: "~£150 (BA CityFlyer)", winner: "a" as const, note: "Base fare before baggage" },
    { label: "Checked bag", a: "£0 (included)", b: "£0 (included)", winner: "tie" as const, note: "Both fares include a checked bag" },
    { label: "Airport transfer — London", a: "~£15 (Elizabeth Line)", b: "~£3 (DLR)", winner: "b" as const, note: "Off-peak single fares" },
    { label: "Schedule waiting", a: "Minimal: every 10–15 min", b: "Minimal: every 5–10 min", winner: "b" as const },
    { label: "Terminal experience", a: "Premium facilities", b: "Premium facilities", winner: "tie" as const },
  ],
  journeyTimeline: [
    { stage: "London city → Airport", a: "24km west of central London", b: "11km east of central London" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight (typical European)", a: "~1h 30m (typical European)", b: "~1h 30m (typical European)" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "35 min (Elizabeth Line)", b: "25 min (DLR)" },
    { stage: "Total door-to-door", a: "~4h 30m", b: "~4h 15m", isFinal: true },
  ],
  scenarios: [
    { who: "Business traveller (Canary Wharf)", choice: "London City", why: "DLR to the office in about 25 minutes. The fastest city-to-desk journey in London." },
    { who: "Business traveller (West End)", choice: "Heathrow", why: "Elizabeth Line to Tottenham Court Road in about 30 minutes. Better for West End offices." },
    { who: "Tourist (central London)", choice: "London City", why: "DLR to Bank, then the Central Line — easy access to central London sights." },
    { who: "Flying long-haul", choice: "Heathrow", why: "LCY has no long-haul flights. Heathrow is the UK's international hub." },
    { who: "Budget traveller", choice: "Neither — try Gatwick or Stansted", why: "Both LCY and Heathrow are premium-price airports. Budget options are at STN, LGW and LTN." },
    { who: "Weekend trip", choice: "London City", why: "About 15 minutes faster door-to-door — more time in London." },
  ],
  commonMistakes: [
    { mistake: "Choosing by ticket price only", fix: "Add baggage fees, transfer cost and schedule waiting. A £50 saving on the ticket can disappear after one checked bag." },
    { mistake: "Ignoring the airport transfer", fix: "London City is 11km from central London. Heathrow is 24km. The transfer cost and time differ significantly." },
    { mistake: "Forgetting baggage costs", fix: "Budget airlines charge around £40 for a checked bag. Full-service airlines often include it." },
    { mistake: "Not checking your destination within London", fix: "Heathrow is better for west London. London City is better for east London and Canary Wharf." },
  ],
  faqItems: [
    { question: "Which is better — Heathrow or London City?", answer: "It depends where you are going: London City wins for the City and Canary Wharf, Heathrow for west London, long-haul and route choice. Door-to-door, London City is about 15 minutes faster; Heathrow is about £8 cheaper." },
    { question: "How long is the transfer from Heathrow to central London?", answer: "The Elizabeth Line reaches central London in about 35 minutes (~£15). The Piccadilly Line takes 50–60 minutes (~£6) and the Heathrow Express 15 minutes (£26). Trains run every 10–15 minutes." },
    { question: "How long is the transfer from London City to central London?", answer: "The DLR reaches Bank in about 25 minutes (~£3.30 off-peak) and runs every 5–10 minutes. London City has no Elizabeth Line and no Piccadilly Line — the DLR is its only rail link." },
    { question: "Is Heathrow or London City cheaper overall?", answer: "Heathrow typically costs around £145 door-to-door in this comparison; London City around £153 — about £8 more. The gap is small enough that route availability usually decides." },
    { question: "Which airline flies from Heathrow vs London City?", answer: "Heathrow serves full-service and budget airlines across all alliances. London City serves mainly BA CityFlyer and niche business carriers." },
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

export default function HeathrowVsLondonCityPage() {
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
            <div className={styles.costTotal}><span>Estimated total</span><span className={styles.costBetter}>~£145</span><span>~£153</span></div>
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
