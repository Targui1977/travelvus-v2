import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Barcelona to London: Gatwick or Heathrow? | Travelvus",
  description: "Flying Barcelona to London? Compare Gatwick and Heathrow on total journey time, door-to-door cost, airport transfers and convenience. Which airport really wins?",
  alternates: { canonical: "/compare/barcelona-to-london" },
};

export const DATA = {
  slug: "barcelona-to-london",
  category: "London Airport Decision",
  question: "Barcelona to London: Gatwick or Heathrow?",
  shortAnswer: "Gatwick wins for most travellers from Barcelona: on our illustrative fares it is ~€32 cheaper and ~5 minutes faster door-to-door than Heathrow.",
  confidence: "Strong confidence",
  lastReviewed: "October 2026",
  methodologyVerified: true,
  verdict: {
    line: "Gatwick wins.",
    stats: [
      { label: "Total journey cost", value: "131", unit: "€" },
      { label: "Money saved", value: "32", unit: "€", accent: true },
      { label: "Door-to-door time", value: "340", unit: "min" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "Gatwick", a: "~5h 40m", b: "~5h 45m", verdict: "Gatwick is ~5 min faster" },
    { factor: "Total journey cost", winner: "Gatwick", a: "~€131", b: "~€163", verdict: "Gatwick saves ~€32" },
    { factor: "Transfer convenience", winner: "Gatwick", a: "~30 min (Gatwick Express)", b: "~35 min (Elizabeth Line)", verdict: "Gatwick Express is ~5 min quicker" },
    { factor: "Arrival reliability", winner: "Heathrow", a: "Gatwick Express every 15 min", b: "Elizabeth Line every 10–15 min", verdict: "Heathrow trains run more often" },
    { factor: "Overall winner", winner: "Gatwick", a: "—", b: "—", verdict: "Gatwick wins on 3 of 4 factors", isFinal: true },
  ],
  winnerReasons: ["Gatwick's total journey cost is ~€32 lower once the checked bag and the Gatwick Express are included.", "Budget easyJet fares from Barcelona are ~€80 below full-service Heathrow fares.", "The Gatwick Express takes ~30 minutes to Victoria — ~5 minutes quicker than the Elizabeth Line from Heathrow.", "Door-to-door, Gatwick is ~5 minutes faster on these timings.", "For south London, Brighton and the south coast, Gatwick is also geographically closer."],
  alternative: {
    title: "When Heathrow is actually the better choice",
    points: ["If the Heathrow fare is within ~€32 of the Gatwick fare — baggage inclusion and the cheaper Elizabeth Line can swing the total.", "If you are heading to west London or the West End — the Elizabeth Line runs direct to Paddington and Tottenham Court Road.", "If you want the widest choice of airlines and departure times — Heathrow serves far more routes.", "If you are connecting to a long-haul flight — Heathrow is the UK's main hub."],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~€60 (budget/easyJet)", b: "~€140 (full-service/BA)", winner: "a" as const, note: "Budget vs full-service airline — illustrative fares" },
    { label: "Checked bag", a: "+€42 (typically)", b: "Often included", winner: "b" as const, note: "Budget airlines typically charge extra" },
    { label: "Airport transfer — Barcelona", a: "Aerobús or R2 Nord train — ~30 min from central Barcelona, ~€6", b: "Aerobús or R2 Nord train — ~30 min from central Barcelona, ~€6", winner: "tie" as const },
    { label: "Airport transfer — London", a: "~€23 (~£20, Gatwick Express)", b: "~€17 (~£15, Elizabeth Line)", winner: "b" as const, note: "Typical single fares" },
    { label: "Schedule waiting", a: "Risk: 20–40 min gap", b: "Minimal: frequent service", winner: "b" as const },
  ],
  journeyTimeline: [
    { stage: "Barcelona city → Airport", a: "Aerobús or R2 Nord train — ~30 min from central Barcelona, ~€6", b: "Aerobús or R2 Nord train — ~30 min from central Barcelona, ~€6" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight Barcelona → London", a: "~2h 15m", b: "~2h 20m" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "~30 min (Gatwick Express)", b: "~35 min (Elizabeth Line)" },
    { stage: "Total door-to-door", a: "~5h 40m", b: "~5h 45m", isFinal: true },
  ],
  scenarios: [{"who": "Business traveller", "choice": "Heathrow", "why": "Direct Elizabeth Line to Paddington and the City, with more full-service departures."}, {"who": "Family with children", "choice": "Heathrow", "why": "Checked baggage is usually included on full-service fares — no €42 fee at check-in."}, {"who": "Budget traveller", "choice": "Gatwick", "why": "easyJet fares from BCN can be very low — the saving covers the transfer."}, {"who": "Weekend trip", "choice": "Gatwick", "why": "Slightly faster door-to-door on these timings and ~€32 cheaper."}, {"who": "Beach + city combo", "choice": "Gatwick", "why": "If combining London with Brighton or the south coast, Gatwick is the natural choice."}, {"who": "Long stay", "choice": "Either", "why": "With a longer trip, transfer time matters less. Choose by total cost."}],
  commonMistakes: [{"mistake": "Choosing by ticket price only", "fix": "Add baggage fees, airport transfer cost and schedule waiting time. A €30 saving on the ticket can disappear after one checked bag and the Gatwick Express."}, {"mistake": "Ignoring the airport transfer", "fix": "Gatwick is 45km south of central London. The Gatwick Express takes ~30 min and costs ~£20 — factor it in."}, {"mistake": "Forgetting baggage costs", "fix": "Budget airlines into Gatwick often charge €35–60 for a checked bag. Full-service airlines into Heathrow frequently include it."}, {"mistake": "Not comparing Barcelona airport access", "fix": "Aerobús or R2 Nord train — factor this into the total journey before comparing London airports."}],
  faqItems: [
    { question: "Which London airport is cheaper overall for flights from Barcelona?", answer: "Gatwick usually has the cheaper advertised fare from Barcelona. Add a checked bag (~€42) and the Gatwick Express (~£20), and the total is still ~€32 below a full-service Heathrow fare on our illustrative numbers. Always compare the complete door-to-door cost." },
    { question: "How long is the transfer from Gatwick to central London?", answer: "The Gatwick Express takes ~30 min to Victoria and costs ~£20 off-peak." },
    { question: "How long is the transfer from Heathrow to central London?", answer: "The Elizabeth Line takes ~35 min and costs ~£15 off-peak (approx. 2026)." },
    { question: "Does the time of day change which airport is better from Barcelona?", answer: "Yes. Late-night arrivals at Gatwick mean fewer rail options after the last Gatwick Express. Heathrow still has the Piccadilly Line (24-hour on Fri/Sat) and night buses. Early morning departures may require arriving at the airport the night before." },
    { question: "What is the cheapest way to get from Heathrow to central London?", answer: "The Piccadilly Line costs £5–6 and takes 50–60 minutes. The Elizabeth Line costs ~£15 and takes ~35 minutes. Both run frequently throughout the day. The Piccadilly Line is the budget option; the Elizabeth Line is faster and more comfortable." },
  ],
  cta: {
    title: "Compare your own Barcelona–London journey",
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
    { claim: "Gatwick and Heathrow distances and terminal information", source: "Heathrow Airport Ltd, Gatwick Airport Ltd" },
    { claim: "London transfer times and off-peak fares", source: "Transport for London (TfL), National Rail", url: "https://tfl.gov.uk" },
    { claim: "Barcelona airport access and fares", source: "TMB, Aena" },
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
      <span className={`${styles.glanceWinner} ${winner === "Heathrow" ? styles.glanceWinnerB : styles.glanceWinnerA}`}>{verdict}</span>
    </div>
  );
}

export default function BarcelonaToLondonPage() {
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
            <div className={styles.costTotal}><span>Estimated total</span><span className={styles.costBetter}>~€131</span><span>~€163</span></div>
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
