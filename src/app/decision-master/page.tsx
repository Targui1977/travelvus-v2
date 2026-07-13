import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Decision Page Master — Template Preview | Travelvus",
  description: "Master template for Travelvus Decision Pages. Placeholder content only.",
  robots: "noindex, nofollow",
};

/* ── Placeholder data ─────────────────────────────────────── */

const PLACEHOLDER = {
  question: "Which option creates the better journey — Stansted or Heathrow?",
  quickAnswer: "Heathrow wins for most London destinations.",
  confidence: "Strong confidence",
  lastReviewed: "July 2026",
  methodologyVerified: true,

  verdictLine: "Heathrow wins.",
  verdictStats: [
    { label: "Real trip cost", value: "144", unit: "€" },
    { label: "Money saved", value: "27", unit: "€", accent: true },
    { label: "Time saved", value: "71", unit: "min" },
  ] as [any, any, any],

  atAGlance: [
    { factor: "Total cost", winner: "Heathrow", a: "£171", b: "£144", verdict: "B saves £27" },
    { factor: "Journey time", winner: "Heathrow", a: "3h 52m", b: "2h 41m", verdict: "B is 71 min faster" },
    { factor: "Convenience", winner: "Heathrow", a: "Coach + Tube", b: "Direct train", verdict: "B is simpler" },
    { factor: "Reliability", winner: "Heathrow", a: "Coach schedule", b: "Train every 15m", verdict: "B is more frequent" },
    { factor: "Overall winner", winner: "Heathrow", a: "—", b: "—", verdict: "B wins on 4 of 4 factors", isFinal: true },
  ],

  whyThisWins: [
    "Heathrow is closer to central London — the transfer is shorter and cheaper.",
    "The Elizabeth Line and Heathrow Express provide frequent, reliable connections.",
    "Heathrow's total journey cost is lower once baggage and transfers are included.",
    "The door-to-door time is significantly shorter — you arrive sooner.",
    "Heathrow offers more transport options, reducing schedule risk.",
  ],

  whenOtherBetter: {
    title: "When Stansted is actually the better choice",
    points: [
      "If you live north or east of London — Stansted is closer.",
      "If the ticket price difference exceeds €50 — the saving may justify the longer transfer.",
      "If you're travelling with only hand luggage — the baggage cost gap disappears.",
      "If you're heading to Cambridge or East Anglia — Stansted is more convenient.",
    ],
  },

  realCostBreakdown: [
    { label: "Ticket", a: "€58", b: "€126", winner: "a" as const },
    { label: "Checked bag", a: "+€42", b: "Included", winner: "b" as const },
    { label: "Seat selection", a: "+€11", b: "+€10", winner: "b" as const },
    { label: "Departure transfer", a: "+€15", b: "+€15", winner: "tie" as const },
    { label: "Arrival transfer", a: "+€71", b: "+€18", winner: "b" as const },
  ],

  journeyTimeline: [
    { stage: "Home → Airport", a: "45 min (Berlin → BER)", b: "45 min (Berlin → BER)" },
    { stage: "Pre-flight", a: "2h 00m check-in + security", b: "2h 00m check-in + security" },
    { stage: "Flight", a: "1h 55m BER → STN", b: "2h 05m BER → LHR" },
    { stage: "Arrival transfer", a: "1h 10m coach to central London", b: "35 min Elizabeth Line" },
    { stage: "Total door-to-door", a: "5h 50m", b: "5h 25m", isFinal: true },
  ],

  scenarios: [
    { who: "Business traveller", choice: "Heathrow", why: "Reliable train connections, predictable journey time, closer to most offices." },
    { who: "Family with children", choice: "Heathrow", why: "Direct train from airport — no coach transfer with tired children and luggage." },
    { who: "Budget backpacker", choice: "Stansted", why: "The ticket saving matters more than transfer comfort. Coaches are fine with one bag." },
    { who: "Weekend trip", choice: "Heathrow", why: "Every hour counts on a short trip. The faster transfer means more time in London." },
    { who: "Long holiday", choice: "Either", why: "With a longer trip, the transfer difference is less significant. Choose by total cost." },
    { who: "One-way relocation", choice: "Stansted", why: "You only do the transfer once. The ticket saving matters more than the return journey." },
  ],

  commonMistakes: [
    { mistake: "Choosing by ticket price only", fix: "Add baggage, seat selection and airport transfer before comparing." },
    { mistake: "Ignoring the airport transfer", fix: "Stansted is 55 km from central London. The coach costs time and money." },
    { mistake: "Forgetting baggage costs", fix: "Budget airlines often charge €30–60 for a checked bag. Add it to the comparison." },
    { mistake: "Assuming a shorter flight is faster", fix: "A 10-minute shorter flight can lose 45 minutes on a longer airport transfer." },
  ],

  faqItems: [
    { question: "Which London airport is cheapest overall?", answer: "Gatwick and Stansted often have cheaper tickets, but Heathrow's shorter transfer can make the total journey cheaper. Always compare the complete door-to-door cost — ticket, baggage, and airport transfer — before deciding." },
    { question: "Is the Heathrow Express worth the cost?", answer: "The Heathrow Express is the fastest option at 15 minutes to Paddington, but it costs more than the Elizabeth Line or Tube. If speed is your priority and you're heading to west London, it's worth it. For budget travellers, the Elizabeth Line or Piccadilly Line offer better value." },
    { question: "How much time should I allow between landing and my central London meeting?", answer: "Allow at least 90 minutes from landing at Heathrow (baggage, walking, train, Paddington arrival). From Stansted, allow at least 2 hours (baggage, coach queue, journey time). Add more during peak hours or if you're unfamiliar with the airports." },
    { question: "Does the time of day change which airport is better?", answer: "Yes. Late-night arrivals at Stansted mean fewer coach departures and potentially a long wait. Late-night arrivals at Heathrow still have the Tube and night buses. Early morning departures from Stansted may require arriving the night before." },
    { question: "What if I'm renting a car?", answer: "All three major London airports have car rental facilities. If you're driving, the airport choice matters less for transfer time — compare only ticket price, baggage costs, and car rental rates at each airport." },
  ],
};

/* ── At a Glance row ──────────────────────────────────────── */

function AtAGlanceRow({ factor, winner, a, b, verdict, isFinal }: (typeof PLACEHOLDER.atAGlance)[0]) {
  return (
    <div className={`${styles.glanceRow} ${isFinal ? styles.glanceRowFinal : ""}`}>
      <span className={styles.glanceFactor}>{factor}</span>
      <span className={styles.glanceVal}>{a}</span>
      <span className={styles.glanceVal}>{b}</span>
      <span className={`${styles.glanceWinner} ${winner === "Heathrow" ? styles.glanceWinnerB : styles.glanceWinnerA}`}>
        {verdict}
      </span>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function DecisionMasterPage() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        {/* Prototype label */}
        <div className={styles.protoLabel}>
          <span className={styles.protoLabelText}>Decision Page Master · Template Preview</span>
        </div>

        <div className={styles.page}>
          {/* ═══ 1. DECISION HERO ═══ */}
          <section className={styles.hero}>
            <span className={styles.heroKicker}>London Airport Decision</span>
            <h1 className={styles.heroQuestion}>{PLACEHOLDER.question}</h1>
            <div className={styles.heroAnswer}>
              <span className={styles.heroAnswerLabel}>The answer</span>
              <span className={styles.heroAnswerText}>{PLACEHOLDER.quickAnswer}</span>
            </div>
            <div className={styles.heroMeta}>
              <span className={styles.confidenceTag}>
                <span className={styles.confidenceDot} />
                {PLACEHOLDER.confidence}
              </span>
              <span>·</span>
              <span>Reviewed {PLACEHOLDER.lastReviewed}</span>
              <span>·</span>
              <span>Methodology verified</span>
            </div>
          </section>

          {/* ═══ 2. VERDICT ═══ */}
          <section className={styles.verdictSection}>
            <TravelvusVerdict
              verdictLine={PLACEHOLDER.verdictLine}
              stats={PLACEHOLDER.verdictStats}
            />
          </section>

          {/* ═══ 3. AT A GLANCE ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>At a glance</h2>
            <div className={styles.glanceHeader}>
              <span></span>
              <span className={styles.glanceColLabel}>Stansted</span>
              <span className={styles.glanceColLabel}>Heathrow</span>
              <span></span>
            </div>
            {PLACEHOLDER.atAGlance.map((row, i) => (
              <AtAGlanceRow key={i} {...row} />
            ))}
          </section>

          {/* ═══ 4. WHY THIS OPTION WINS ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Heathrow wins</h2>
            <div className={styles.whyGrid}>
              {PLACEHOLDER.whyThisWins.map((reason, i) => (
                <div key={i} className={styles.whyCard}>
                  <span className={styles.whyCardNum}>{String(i + 1).padStart(2, "0")}</span>
                  <p className={styles.whyCardText}>{reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 5. WHEN THE OTHER OPTION IS BETTER ═══ */}
          <section className={`${styles.section} ${styles.altSection}`}>
            <h2 className={styles.sectionTitle}>{PLACEHOLDER.whenOtherBetter.title}</h2>
            <div className={styles.altGrid}>
              {PLACEHOLDER.whenOtherBetter.points.map((point, i) => (
                <div key={i} className={styles.altCard}>
                  <span className={styles.altCardDot} />
                  <p className={styles.altCardText}>{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 6. REAL COST BREAKDOWN ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Real cost breakdown</h2>
            <div className={styles.costHeader}>
              <span>Cost factor</span>
              <span>Stansted</span>
              <span>Heathrow</span>
            </div>
            {PLACEHOLDER.realCostBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}</span>
                <span className={`${styles.costVal} ${row.winner === "a" ? styles.costBetter : row.winner === "b" ? "" : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${row.winner === "b" ? styles.costBetter : row.winner === "a" ? "" : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}>
              <span>Real total</span>
              <span>£171</span>
              <span className={styles.costBetter}>£144</span>
            </div>
          </section>

          {/* ═══ 7. JOURNEY TIMELINE ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Journey timeline</h2>
            <div className={styles.timeline}>
              {PLACEHOLDER.journeyTimeline.map((stage, i) => (
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
              {PLACEHOLDER.scenarios.map((s, i) => (
                <div key={i} className={styles.scenarioCard}>
                  <span className={styles.scenarioWho}>{s.who}</span>
                  <span className={styles.scenarioChoice}>
                    {s.choice === "Heathrow" ? "→ Heathrow" : s.choice === "Stansted" ? "→ Stansted" : `→ ${s.choice}`}
                  </span>
                  <p className={styles.scenarioWhy}>{s.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 9. COMMON MISTAKES ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Common mistakes</h2>
            <div className={styles.mistakeGrid}>
              {PLACEHOLDER.commonMistakes.map((m, i) => (
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
            <FAQAccordion items={PLACEHOLDER.faqItems} />
          </section>

          {/* ═══ 11. COMPARE YOUR OWN ═══ */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div>
                <span className={styles.ctaKicker}>Travelvus</span>
                <span className={styles.ctaTitle}>Compare your own journey</span>
                <p className={styles.ctaSub}>Paste two flight options and see which really wins — door to door.</p>
              </div>
              <Link href="/#compare" className={styles.ctaBtn}>Reveal the real winner</Link>
            </div>
          </section>

          {/* ═══ 12. CONTINUE YOUR DECISION ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Continue your decision</h2>
            <p className={styles.sectionSub}>The next guide depends on the question you&rsquo;re trying to answer.</p>
            <div className={styles.continueGrid}>
              <Link href="/guides/real-cost-of-a-flight" className={styles.continueCard}>
                <span className={styles.continueKicker}>Cost Guide</span>
                <span className={styles.continueTitle}>Real Cost of a Flight</span>
                <span className={styles.continueDesc}>Why cheap tickets often become expensive after baggage, airports and transfers.</span>
                <span className={styles.continueLink}>Continue reading &rarr;</span>
              </Link>
              <Link href="/guides/total-travel-time-comparison" className={styles.continueCard}>
                <span className={styles.continueKicker}>Time Guide</span>
                <span className={styles.continueTitle}>Total Travel Time Comparison</span>
                <span className={styles.continueDesc}>Flight duration is just one segment of the door-to-door journey.</span>
                <span className={styles.continueLink}>Continue reading &rarr;</span>
              </Link>
              <Link href="/london-airports" className={styles.continueCard}>
                <span className={styles.continueKicker}>Decision Hub</span>
                <span className={styles.continueTitle}>London Airport Decisions</span>
                <span className={styles.continueDesc}>Explore comparisons between London&rsquo;s major airports.</span>
                <span className={styles.continueLink}>Explore &rarr;</span>
              </Link>
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
