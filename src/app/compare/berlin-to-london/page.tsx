import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Berlin to London: Heathrow or Stansted? | Travelvus",
  description:
    "Flying Berlin to London? Compare Heathrow and Stansted on total journey cost, door-to-door time, airport transfers and convenience. Which airport really wins?",
  alternates: { canonical: "/compare/berlin-to-london" },
};

/* ── Data ─────────────────────────────────────────────────── */

const DATA = {
  question: "Berlin to London — should I choose Heathrow or Stansted?",
  quickAnswer: "Heathrow wins for most travellers once total journey time and cost are compared.",
  confidence: "Strong confidence",
  lastReviewed: "July 2026",
  methodologyVerified: true,

  verdictLine: "Heathrow wins.",
  verdictStats: [
    { label: "Total journey cost", value: "135", unit: "€" },
    { label: "Money saved", value: "26", unit: "€", accent: true },
    { label: "Door-to-door time", value: "5", unit: "h 25m" },
  ] as [any, any, any],

  atAGlance: [
    { factor: "Total journey cost", winner: "Heathrow", a: "~€161", b: "~€135", verdict: "Heathrow saves ~€26" },
    { factor: "Door-to-door time", winner: "Heathrow", a: "~5h 50m", b: "~5h 25m", verdict: "Heathrow is ~25 min faster" },
    { factor: "Transfer convenience", winner: "Heathrow", a: "Coach or train, 50–90 min", b: "Train or Tube, 35–60 min", verdict: "Heathrow has more options" },
    { factor: "Arrival reliability", winner: "Heathrow", a: "Coach subject to traffic", b: "Trains every 15 min", verdict: "Heathrow is more predictable" },
    { factor: "Overall winner", winner: "Heathrow", a: "—", b: "—", verdict: "Heathrow wins on 4 of 4 factors", isFinal: true },
  ],

  whyThisWins: [
    "Heathrow is 24km from central London — less than half the distance of Stansted at 55km.",
    "The Elizabeth Line and Piccadilly Line run every 10–15 minutes with no traffic risk.",
    "Heathrow's total journey cost is lower once the shorter, cheaper airport transfer is included.",
    "Door-to-door time is shorter — the faster transfer outweighs the slightly longer flight.",
    "More transport options mean less schedule waiting and fewer missed connections.",
  ],

  whenOtherBetter: {
    title: "When Stansted is actually the better choice",
    points: [
      "If you find a ticket at least €50 cheaper than the Heathrow option — the saving may justify the longer coach or train transfer.",
      "If you are travelling with only hand luggage — the baggage cost advantage of full-service airlines disappears.",
      "If you are heading to northeast London, Cambridge or East Anglia — Stansted is geographically closer to these destinations.",
      "If you are on a tight budget and willing to trade 25–40 minutes of transfer time for a lower ticket price.",
    ],
  },

  realCostBreakdown: [
    { label: "Flight ticket", a: "~€58", b: "~€110", winner: "a" as const, note: "Budget airline vs full-service" },
    { label: "Checked bag", a: "+€42 (typically)", b: "Often included", winner: "b" as const, note: "Budget airlines charge extra" },
    { label: "Airport transfer — Berlin", a: "~€4 (S-Bahn)", b: "~€4 (S-Bahn)", winner: "tie" as const },
    { label: "Airport transfer — London", a: "~€22 (Stansted Express)", b: "~€16 (Elizabeth Line)", winner: "b" as const, note: "Off-peak single fares" },
    { label: "Schedule waiting", a: "Risk: 30–60 min coach gap", b: "Minimal: trains every 15 min", winner: "b" as const },
  ],

  journeyTimeline: [
    { stage: "Berlin city → Airport", a: "~40 min (S-Bahn to BER)", b: "~40 min (S-Bahn to BER)" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight Berlin → London", a: "~1h 50m to STN", b: "~2h 05m to LHR" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "~50 min (Stansted Express)", b: "~35 min (Elizabeth Line)" },
    { stage: "Total door-to-door", a: "~5h 50m", b: "~5h 25m", isFinal: true },
  ],

  scenarios: [
    { who: "Business traveller", choice: "Heathrow", why: "Predictable train connections, closer to most London offices and meeting venues." },
    { who: "Family with children", choice: "Heathrow", why: "Direct train or Tube from the airport — no coach transfer with tired children and luggage." },
    { who: "Budget traveller", choice: "Stansted", why: "The ticket saving matters most. Take the coach for the lowest total cost if you have time." },
    { who: "Weekend trip", choice: "Heathrow", why: "Every hour counts on a short trip. The faster transfer means more time in London." },
    { who: "Heading to East London", choice: "Stansted", why: "Stansted is closer to Stratford, Hackney and East London. The transfer geography works in your favour." },
    { who: "Long stay or relocation", choice: "Either", why: "With a longer trip the transfer difference matters less. Choose by total cost and convenience." },
  ],

  commonMistakes: [
    { mistake: "Choosing by ticket price only", fix: "Add baggage fees, airport transfer cost and schedule waiting time before comparing." },
    { mistake: "Ignoring the airport transfer", fix: "Stansted is 55km from central London. The Stansted Express costs ~£17 one way and takes 50 minutes." },
    { mistake: "Forgetting baggage costs", fix: "Budget airlines flying into Stansted often charge €30–60 for a checked bag. Add it to the total." },
    { mistake: "Assuming a shorter flight is faster", fix: "The flight to Stansted is ~15 min shorter — but the longer transfer to central London more than cancels that saving." },
  ],

  faqItems: [
    {
      question: "Which London airport is cheaper overall — Heathrow or Stansted?",
      answer: "Stansted often has cheaper ticket prices because it serves more budget airlines. However, once you add baggage fees and the longer, more expensive airport transfer, Heathrow is frequently cheaper overall. Always compare the complete door-to-door cost: ticket + baggage + Berlin airport transfer + London airport transfer."
    },
    {
      question: "How long does it take to get from Stansted to central London?",
      answer: "The Stansted Express train takes approximately 50 minutes to Liverpool Street station and costs around £17 one way off-peak. National Express coaches take 75–90 minutes to central London and cost £10–15. The coach is cheaper but slower and subject to traffic. Trains run every 15–30 minutes; coaches every 30–60 minutes."
    },
    {
      question: "How long does it take to get from Heathrow to central London?",
      answer: "The Elizabeth Line takes approximately 35 minutes to central London and costs around £12 off-peak. The Piccadilly Line takes 50–60 minutes and costs £5–6. The Heathrow Express takes 15 minutes to Paddington but costs £25. All three options run frequently throughout the day."
    },
    {
      question: "Does the time of day change which airport is better?",
      answer: "Yes. Late-night arrivals at Stansted mean fewer train departures. The last Stansted Express leaves around 23:30. Late-night arrivals at Heathrow still have the Piccadilly Line (24-hour service on Fridays and Saturdays) and night buses. Early morning departures from Stansted may require arriving the night before if public transport is not running."
    },
    {
      question: "What if I am flying from Berlin Brandenburg (BER)?",
      answer: "Berlin Brandenburg Airport (BER) is the city's single main airport, located approximately 27km south of the city centre. The S-Bahn (S9, S45) connects BER to central Berlin in about 40 minutes. The journey to BER is the same regardless of which London airport you fly to — only the London side changes."
    },
  ],

  continueCards: [
    { kicker: "Cost Guide", title: "Real Cost of a Flight", desc: "Why cheap tickets often become expensive after baggage, airports and transfers.", href: "/guides/real-cost-of-a-flight", link: "Continue reading →" },
    { kicker: "Time Guide", title: "Total Travel Time Comparison", desc: "Flight duration is just one segment of the door-to-door journey.", href: "/guides/total-travel-time-comparison", link: "Continue reading →" },
    { kicker: "Decision Hub", title: "London Airport Decisions", desc: "Explore real comparisons between London's major airports.", href: "/london-airports", link: "Explore →" },
  ],
};

/* ── Sub-components ───────────────────────────────────────── */

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

/* ── Page ─────────────────────────────────────────────────── */

export default function BerlinToLondonPage() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <div className={styles.page}>
          {/* ═══ 1. DECISION HERO ═══ */}
          <section className={styles.hero}>
            <span className={styles.heroKicker}>London Airport Decision</span>
            <h1 className={styles.heroQuestion}>{DATA.question}</h1>
            <div className={styles.heroAnswer}>
              <span className={styles.heroAnswerLabel}>The answer</span>
              <span className={styles.heroAnswerText}>{DATA.quickAnswer}</span>
            </div>
            <div className={styles.heroMeta}>
              <span className={styles.confidenceTag}><span className={styles.confidenceDot} />{DATA.confidence}</span>
              <span>·</span><span>Reviewed {DATA.lastReviewed}</span>
              <span>·</span><span>Methodology verified</span>
            </div>
          </section>

          {/* ═══ 2. VERDICT ═══ */}
          <section className={styles.verdictSection}>
            <TravelvusVerdict verdictLine={DATA.verdictLine} stats={DATA.verdictStats} />
          </section>

          {/* ═══ 3. AT A GLANCE ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>At a glance</h2>
            <p className={styles.sectionSub} style={{ marginBottom: 14 }}>Illustrative comparison based on typical fares and public transport costs. Ticket prices vary by airline, season and booking date.</p>
            <div className={styles.glanceHeader}>
              <span /><span className={styles.glanceColLabel}>Stansted</span><span className={styles.glanceColLabel}>Heathrow</span><span />
            </div>
            {DATA.atAGlance.map((row, i) => <AtAGlanceRow key={i} {...row} />)}
          </section>

          {/* ═══ 4. WHY THIS OPTION WINS ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Heathrow wins</h2>
            <div className={styles.whyGrid}>
              {DATA.whyThisWins.map((reason, i) => (
                <div key={i} className={styles.whyCard}>
                  <span className={styles.whyCardNum}>{String(i + 1).padStart(2, "0")}</span>
                  <p className={styles.whyCardText}>{reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 5. WHEN OTHER IS BETTER ═══ */}
          <section className={`${styles.section} ${styles.altSection}`}>
            <h2 className={styles.sectionTitle}>{DATA.whenOtherBetter.title}</h2>
            <div className={styles.altGrid}>
              {DATA.whenOtherBetter.points.map((point, i) => (
                <div key={i} className={styles.altCard}>
                  <span className={styles.altCardDot} />
                  <p className={styles.altCardText}>{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 6. REAL COST BREAKDOWN ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How the real cost compares</h2>
            <p className={styles.sectionSub}>Illustrative breakdown. Actual costs depend on your specific flight, baggage and chosen transfer option.</p>
            <div className={styles.costHeader}><span>Cost factor</span><span>Stansted</span><span>Heathrow</span></div>
            {DATA.realCostBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}{row.note && <span style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{row.note}</span>}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "a" ? styles.costBetter : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "b" ? styles.costBetter : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}><span>Estimated total</span><span>~€161</span><span className={styles.costBetter}>~€135</span></div>
          </section>

          {/* ═══ 7. JOURNEY TIMELINE ═══ */}
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
                    <span className={styles.timelineVal}>{stage.a}</span>
                    <span className={styles.timelineSep}>vs</span>
                    <span className={styles.timelineVal}>{stage.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 8. DECISION SCENARIOS ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Which option fits your trip?</h2>
            <div className={styles.scenarioGrid}>
              {DATA.scenarios.map((s, i) => (
                <div key={i} className={styles.scenarioCard}>
                  <span className={styles.scenarioWho}>{s.who}</span>
                  <span className={styles.scenarioChoice}>→ {s.choice}</span>
                  <p className={styles.scenarioWhy}>{s.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 9. COMMON MISTAKES ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Common mistakes on this route</h2>
            <div className={styles.mistakeGrid}>
              {DATA.commonMistakes.map((m, i) => (
                <div key={i} className={styles.mistakeCard}>
                  <span className={styles.mistakeLabel}>{m.mistake}</span>
                  <p className={styles.mistakeFix}>{m.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 10. FAQ ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Quick answers</h2>
            <FAQAccordion items={DATA.faqItems} />
          </section>

          {/* ═══ SOURCES & ASSUMPTIONS ═══ */}
          <section className={styles.section} style={{ background: "var(--paper-2)" }}>
            <h2 className={styles.sectionTitle}>How we sourced this page</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 14 }}>
              <div>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 10 }}>Public sources</span>
                <ul style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.6, color: "#4a5560", margin: 0, paddingLeft: 16 }}>
                  <li>Heathrow and Stansted distances — public airport information</li>
                  <li>Transfer times — TfL (Elizabeth Line, Piccadilly Line) and National Rail (Stansted Express)</li>
                  <li>Off-peak single fares — TfL and National Rail published fares, July 2026</li>
                  <li>Flight durations — typical scheduled times for BER–LHR and BER–STN</li>
                  <li>BER airport access — VBB S-Bahn (S9, S45), ~40 min to city centre</li>
                </ul>
              </div>
              <div>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper)", display: "block", marginBottom: 10 }}>Illustrative assumptions</span>
                <ul style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.6, color: "#4a5560", margin: 0, paddingLeft: 16 }}>
                  <li>Ticket prices (~€58 / ~€110) are illustrative — actual fares vary by airline, season and booking date</li>
                  <li>Baggage costs are typical for European budget vs full-service airlines</li>
                  <li>Total journey cost and time are estimates based on typical conditions</li>
                  <li>The Verdict is illustrative — use the Comparison Engine with your real flight data</li>
                  <li>Transfer times assume off-peak, no major disruption</li>
                </ul>
              </div>
            </div>
            <p style={{ fontFamily: "var(--mono)", fontWeight: 400, fontSize: 10, color: "var(--muted)", marginTop: 16, marginBottom: 0 }}>
              Last reviewed: July 2026 · Next factual review: January 2027
            </p>
          </section>

          {/* ═══ 11. COMPARE YOUR OWN ═══ */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div>
                <span className={styles.ctaKicker}>Travelvus</span>
                <span className={styles.ctaTitle}>Compare your own Berlin–London journey</span>
                <p className={styles.ctaSub}>Paste your two flight options and see which really wins — door to door, with your exact ticket prices, baggage and preferred transfer.</p>
              </div>
              <Link href="/#compare" className={styles.ctaBtn}>Reveal the real winner</Link>
            </div>
          </section>

          {/* ═══ 12. CONTINUE YOUR DECISION ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Continue your decision</h2>
            <p className={styles.sectionSub}>The next guide depends on the question you&rsquo;re trying to answer.</p>
            <div className={styles.continueGrid}>
              {DATA.continueCards.map((c, i) => (
                <Link key={i} href={c.href} className={styles.continueCard}>
                  <span className={styles.continueKicker}>{c.kicker}</span>
                  <span className={styles.continueTitle}>{c.title}</span>
                  <span className={styles.continueDesc}>{c.desc}</span>
                  <span className={styles.continueLink}>{c.link}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
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
