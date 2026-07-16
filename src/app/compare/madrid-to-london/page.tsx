import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Madrid to London: Heathrow or Gatwick? | Travelvus",
  description: "Flying Madrid to London? Compare Heathrow and Gatwick on total journey time, door-to-door cost, airport transfers and convenience. Which airport really wins?",
  alternates: { canonical: "/compare/madrid-to-london" },
};

const DATA = {
  slug: "madrid-to-london",
  category: "London Airport Decision",
  question: "Madrid to London: Heathrow or Gatwick?",
  shortAnswer: "Heathrow wins for most travellers from Madrid once total journey time and cost are compared.",
  confidence: "Strong confidence",
  lastReviewed: "July 2026",
  methodologyVerified: true,
  verdict: {
    line: "Heathrow wins.",
    stats: [
      { label: "Total journey time", value: "310", unit: "min" },
      { label: "Time saved", value: "30", unit: "min", accent: true },
      { label: "Flight duration", value: "2", unit: "h 30m" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "Heathrow", a: "~5h 10m", b: "~5h 40m", verdict: "Heathrow is ~30 min faster" },
    { factor: "Total journey cost", winner: "Heathrow", a: "~€177", b: "~€140", verdict: "Heathrow saves ~€37" },
    { factor: "Transfer convenience", winner: "Heathrow", a: "Train, 30–50 min", b: "~35 min (Elizabeth Line)", verdict: "Heathrow has more options" },
    { factor: "Arrival reliability", winner: "Heathrow", a: "Fewer, less frequent connections", b: "Trains every 10–15 min", verdict: "Heathrow is more predictable" },
    { factor: "Overall winner", winner: "Heathrow", a: "—", b: "—", verdict: "Heathrow wins on 4 of 4 factors", isFinal: true },
  ],
  winnerReasons: ["Heathrow's faster transfer saves ~30 minutes door-to-door versus Gatwick.", "Full-service Iberia and BA flights include baggage — budget Gatwick fares add €35–50.", "Elizabeth Line trains every 10–15 minutes versus Gatwick Express every 15 minutes.", "Heathrow connects to more London neighbourhoods without changing trains.", "On a ~5-hour journey, the transfer time difference is proportionally significant."],
  alternative: {
    title: "When Gatwick is actually the better choice",
    points: ["Budget airline ticket savings of €70+ can justify the longer Gatwick transfer.", "If travelling with only hand luggage — the baggage cost gap disappears.", "Gatwick is better for south London, Gatwick Airport hotels and Brighton connections.", "easyJet and Vueling offer frequent MAD–LGW flights at very competitive prices."],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~€70 (budget/easyJet)", b: "~€150 (full-service/Iberia)", winner: "b" as const, note: "Budget vs full-service airline — illustrative fares" },
    { label: "Checked bag", a: "+€35–50 (typically)", b: "Often included", winner: "b" as const, note: "Budget airlines typically charge extra" },
    { label: "Airport transfer — Madrid", a: "Metro Line 8 — ~25 min from central Madrid, ~€5", b: "Metro Line 8 — ~25 min from central Madrid, ~€5", winner: "tie" as const },
    { label: "Airport transfer — London", a: "~£20 (Gatwick Express)", b: "~£12 (Elizabeth Line)", winner: "b" as const, note: "Off-peak single fares" },
    { label: "Schedule waiting", a: "Risk: 20–40 min gap", b: "Minimal: frequent service", winner: "b" as const },
  ],
  journeyTimeline: [
    { stage: "Madrid city → Airport", a: "Metro Line 8 — ~25 min from central Madrid, ~€5", b: "Metro Line 8 — ~25 min from central Madrid, ~€5" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight Madrid → London", a: "~2h 35m", b: "~2h 30m" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "~45 min (Gatwick Express)", b: "~35 min (Elizabeth Line)" },
    { stage: "Total door-to-door", a: "~5h 10m", b: "~5h 40m", isFinal: true },
  ],
  scenarios: [{"who": "Business traveller", "choice": "Heathrow", "why": "Iberia/BA full-service flights, faster transfer, more transport options."}, {"who": "Family with children", "choice": "Heathrow", "why": "Baggage included, simpler transfers, wider choice of airlines."}, {"who": "Budget traveller", "choice": "Gatwick", "why": "easyJet and Vueling fares can be significantly cheaper — justify the extra transfer time."}, {"who": "Weekend trip", "choice": "Heathrow", "why": "Every hour counts on a short trip from Madrid."}, {"who": "Heading to south London", "choice": "Gatwick", "why": "Gatwick is south of London — closer to Croydon, Brighton and Gatwick airport hotels."}, {"who": "Long stay", "choice": "Either", "why": "The transfer difference matters less on a longer trip. Choose by total cost."}],
  commonMistakes: [{"mistake": "Choosing by ticket price only", "fix": "Add baggage fees, airport transfer cost and schedule waiting time. A €50 saving on the ticket can disappear after one checked bag and a coach transfer."}, {"mistake": "Ignoring the airport transfer", "fix": "Gatwick is 45km from central London. The transfer costs time and money — factor it in."}, {"mistake": "Forgetting baggage costs", "fix": "Budget airlines into Gatwick often charge €35–60 for a checked bag. Full-service airlines into Heathrow frequently include it."}, {"mistake": "Not comparing Madrid airport access", "fix": "Metro Line 8 — factor this into the total journey before comparing London airports."}],
  faqItems: [
    { question: "Which London airport is cheaper overall for flights from Madrid?", answer: "Gatwick and other budget-airline airports often have cheaper advertised ticket prices from Madrid. However, once you add baggage fees (€35–60 on budget airlines) and the longer, more expensive airport transfer, Heathrow is frequently cheaper overall. Always compare the complete door-to-door cost." },
    { question: "How long is the transfer from Gatwick to central London?", answer: "Gatwick Express — ~30 min, ~£20 off-peak." },
    { question: "How long is the transfer from Heathrow to central London?", answer: "Elizabeth Line — ~35 min, ~£12 off-peak." },
    { question: "Does the time of day change which airport is better from Madrid?", answer: "Yes. Late-night arrivals at Gatwick mean fewer transport options. Late-night arrivals at Heathrow still have the Piccadilly Line (24-hour on Fri/Sat) and night buses. Early morning departures may require arriving at the airport the night before." },
    { question: "What is the cheapest way to get from Heathrow to central London?", answer: "The Piccadilly Line costs £5–6 and takes 50–60 minutes. The Elizabeth Line costs ~£12 and takes ~35 minutes. Both run frequently throughout the day. The Piccadilly Line is the budget option; the Elizabeth Line is faster and more comfortable." },
  ],
  cta: {
    title: "Compare your own Madrid–London journey",
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
    { claim: "Heathrow and Gatwick distances and terminal information", source: "Heathrow Airport Ltd, Stansted Airport Ltd, Gatwick Airport Ltd" },
    { claim: "London transfer times and off-peak fares", source: "Transport for London (TfL), National Rail", url: "https://tfl.gov.uk" },
    { claim: "Madrid airport access and fares", source: "Metro de Madrid, Aena" },
    { claim: "Flight durations", source: "Typical scheduled times for direct flights" },
  ],
  assumptions: [
    "Ticket prices are illustrative — actual fares vary by airline, season and booking date.",
    "Baggage costs are typical for European budget vs full-service airlines.",
    "Total journey cost and time are estimates based on typical conditions.",
    "The Verdict is illustrative — use the Comparison Engine with your real flight data.",
    "Transfer times assume off-peak, no major disruption.",
  ],
  factualReviewDate: "January 2027",
};

function AtAGlanceRow({ factor, winner, a, b, verdict, isFinal }: (typeof DATA.atAGlance)[0]) {
  return (
    <div className={`${styles.glanceRow} ${isFinal ? styles.glanceRowFinal : ""}`}>
      <span className={styles.glanceFactor}>{factor}</span>
      <span className={styles.glanceVal}>{a}</span>
      <span className={styles.glanceVal}>{b}</span>
      <span className={`${styles.glanceWinner} ${winner === "Heathrow" ? styles.glanceWinnerB : styles.glanceWinnerA}`}>{verdict}</span>
    </div>
  );
}

export default function MadridToLondonPage() {
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
            <div className={styles.glanceHeader}><span /><span className={styles.glanceColLabel}>Gatwick</span><span className={styles.glanceColLabel}>Heathrow</span><span /></div>
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
            <div className={styles.costHeader}><span>Cost factor</span><span>Gatwick</span><span>Heathrow</span></div>
            {DATA.costBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}{row.note && <span style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{row.note}</span>}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "a" ? styles.costBetter : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "b" ? styles.costBetter : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}><span>Estimated total</span><span>~€177</span><span className={styles.costBetter}>~€140</span></div>
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
