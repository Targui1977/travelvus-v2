import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import styles from "@/components/decision-page/decision-page.module.css";

export const metadata: Metadata = {
  title: "Frankfurt to London: FRA or Hahn? | Travelvus",
  description: "Flying Frankfurt to London? Compare Hahn + Stansted with FRA + Heathrow on total journey time, door-to-door cost, airport transfers and convenience. Which route really wins?",
  alternates: { canonical: "/compare/frankfurt-to-london" },
};

export const DATA = {
  slug: "frankfurt-to-london",
  category: "London Airport Decision",
  question: "Frankfurt to London: FRA or Hahn?",
  shortAnswer: "Heathrow wins for most travellers from Frankfurt: the FRA + Heathrow route is ~1h 40m faster door-to-door, though Hahn + Stansted is ~€54 cheaper.",
  confidence: "Strong confidence",
  lastReviewed: "October 2026",
  methodologyVerified: true,
  verdict: {
    line: "Heathrow wins.",
    stats: [
      { label: "Total journey time", value: "290", unit: "min" },
      { label: "Time saved", value: "100", unit: "min", accent: true },
      { label: "Flight duration", value: "1", unit: "h 40m" },
    ] as [any, any, any],
  },
  atAGlance: [
    { factor: "Total journey time", winner: "Heathrow", a: "~6h 30m", b: "~4h 50m", verdict: "Heathrow is ~1h 40m faster" },
    { factor: "Total journey cost", winner: "Stansted", a: "~€128", b: "~€182", verdict: "Stansted saves ~€54" },
    { factor: "Transfer convenience", winner: "Heathrow", a: "~50 min (Stansted Express)", b: "~35 min (Elizabeth Line)", verdict: "Heathrow transfer is ~15 min quicker" },
    { factor: "Arrival reliability", winner: "Heathrow", a: "Stansted Express every 15–30 min", b: "Elizabeth Line every 10–15 min", verdict: "Heathrow trains run more often" },
    { factor: "Overall winner", winner: "Heathrow", a: "—", b: "—", verdict: "Heathrow wins on 3 of 4 factors", isFinal: true },
  ],
  winnerReasons: ["Frankfurt–Hahn is not in Frankfurt — it is 120km away, requiring a 1h 45m bus transfer.", "The FRA+LHR combination saves ~1h 40m door-to-door — the largest saving in the London cluster.", "FRA has a direct S-Bahn connection (15 min from the city centre). HHN requires a long-distance bus.", "Full-service Lufthansa/BA flights include baggage — Ryanair from Hahn adds ~€50.", "Both the German-side and London-side airport choices heavily favour the FRA+LHR route."],
  alternative: {
    title: "When Hahn + Stansted is actually the better choice",
    points: ["Ryanair fares from Hahn can be €20–35 — the total can be ~€54 below the FRA + Heathrow route on our illustrative numbers.", "If you are already west of Frankfurt (Mainz, Wiesbaden, Koblenz) — Hahn is closer than FRA.", "Travelling with only hand luggage eliminates the baggage fee on Ryanair.", "If you have plenty of time and are on a very tight budget, the HHN+STN combination works."],
  },
  costBreakdown: [
    { label: "Flight ticket", a: "~€35 (Ryanair)", b: "~€160 (full-service/LH/BA)", winner: "a" as const, note: "Budget vs full-service airline — illustrative fares" },
    { label: "Checked bag", a: "+€50 (typically)", b: "Often included", winner: "b" as const, note: "Budget airlines typically charge extra" },
    { label: "Airport transfer — Frankfurt", a: "Bus to HHN — ~1h 45m, ~€18", b: "S-Bahn to FRA — ~15 min, ~€5", winner: "b" as const, note: "HHN is 120km from Frankfurt" },
    { label: "Airport transfer — London", a: "~€25 (~£22, Stansted Express)", b: "~€17 (~£15, Elizabeth Line)", winner: "b" as const, note: "Typical single fares" },
    { label: "Schedule waiting", a: "Risk: 20–40 min gap", b: "Minimal: frequent service", winner: "b" as const },
  ],
  journeyTimeline: [
    { stage: "Frankfurt city → Airport", a: "Bus to HHN — ~1h 45m, ~€18", b: "S-Bahn to FRA — ~15 min, ~€5" },
    { stage: "Check-in + security", a: "2h before departure", b: "2h before departure" },
    { stage: "Flight Frankfurt → London", a: "~1h 30m (from HHN)", b: "~1h 40m (from FRA)" },
    { stage: "Baggage + terminal", a: "~25 min", b: "~20 min" },
    { stage: "Airport → Central London", a: "~50 min (Stansted Express)", b: "~35 min (Elizabeth Line)" },
    { stage: "Total door-to-door", a: "~6h 30m", b: "~4h 50m", isFinal: true },
  ],
  scenarios: [{"who": "Business traveller", "choice": "FRA + Heathrow", "why": "FRA is one of Europe's best-connected airports. LHR transfer is fast. The only serious choice."}, {"who": "Family with children", "choice": "FRA + Heathrow", "why": "Avoid the 1h 45m bus to Hahn. The S-Bahn to FRA is 15 minutes."}, {"who": "Budget traveller", "choice": "Hahn + Stansted", "why": "Ryanair at €20–35 is compelling — but allow 6h 30m total door-to-door."}, {"who": "Weekend trip", "choice": "FRA + Heathrow", "why": "The HHN bus alone costs 3h 30m round-trip. FRA+LHR saves ~1h 40m each way."}, {"who": "Rheinland-Pfalz resident", "choice": "Hahn + Stansted", "why": "If you are already near Hahn (Mainz, Trier, Koblenz), the bus is shorter than reaching FRA."}, {"who": "Long stay", "choice": "FRA + Heathrow", "why": "Less friction, faster journey, more comfortable. The FRA+LHR premium is worth it."}],
  commonMistakes: [{"mistake": "Choosing by ticket price only", "fix": "Add baggage fees, airport transfer cost and schedule waiting time. A €50 saving on the ticket can disappear after one checked bag and a coach transfer."}, {"mistake": "Ignoring the airport transfer", "fix": "Stansted is 55km from central London. The Stansted Express takes ~50 min and costs ~£22 walk-up (advance fares from £9.90) — factor it in."}, {"mistake": "Forgetting baggage costs", "fix": "Budget airlines into Stansted often charge €35–60 for a checked bag. Full-service airlines into Heathrow frequently include it."}, {"mistake": "Not comparing Frankfurt airport access", "fix": "The S-Bahn to FRA takes ~15 min; the bus to HHN takes ~1h 45m and costs ~€18. Factor this into the total journey before comparing London airports."}],
  faqItems: [
    { question: "Which London airport is cheaper overall for flights from Frankfurt?", answer: "Hahn + Stansted usually has the cheaper advertised fare from Frankfurt. Once you add a checked bag (~€50) and the bus to Hahn, the total is still ~€54 below the FRA + Heathrow route on our illustrative numbers — but the journey is ~1h 40m longer door-to-door. Which matters more depends on your trip. Always compare the complete door-to-door cost." },
    { question: "How long is the transfer from Stansted to central London?", answer: "The Stansted Express takes ~50 min to Liverpool Street and costs ~£22 walk-up; advance fares start from £9.90." },
    { question: "How long is the transfer from Heathrow to central London?", answer: "The Elizabeth Line takes ~35 min and costs ~£15 off-peak (approx. 2026)." },
    { question: "Does the time of day change which airport is better from Frankfurt?", answer: "Yes. Late-night arrivals at Stansted mean fewer train departures — the last Stansted Express leaves around 23:30, though coaches run later. Late-night arrivals at Heathrow still have the Piccadilly Line (24-hour on Fri/Sat) and night buses. Early morning departures may require arriving at the airport the night before." },
    { question: "What is the cheapest way to get from Heathrow to central London?", answer: "The Piccadilly Line costs £5–6 and takes 50–60 minutes. The Elizabeth Line costs ~£15 and takes ~35 minutes. Both run frequently throughout the day. The Piccadilly Line is the budget option; the Elizabeth Line is faster and more comfortable." },
  ],
  cta: {
    title: "Compare your own Frankfurt–London journey",
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
    { claim: "Heathrow, Stansted and Frankfurt airport distances and terminal information", source: "Heathrow Airport Ltd, Stansted Airport Ltd, Fraport AG" },
    { claim: "London transfer times and off-peak fares", source: "Transport for London (TfL), National Rail", url: "https://tfl.gov.uk" },
    { claim: "Frankfurt airport access and fares", source: "RMV, Fraport AG" },
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

export default function FrankfurtToLondonPage() {
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
            <div className={styles.glanceHeader}><span /><span className={styles.glanceColLabel}>Stansted</span><span className={styles.glanceColLabel}>Heathrow</span><span /></div>
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
            <div className={styles.costHeader}><span>Cost factor</span><span>Stansted</span><span>Heathrow</span></div>
            {DATA.costBreakdown.map((row, i) => (
              <div key={i} className={styles.costRow}>
                <span className={styles.costLabel}>{row.label}{row.note && <span style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 400, fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{row.note}</span>}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "a" ? styles.costBetter : ""}`}>{row.a}</span>
                <span className={`${styles.costVal} ${(row.winner as string) === "b" ? styles.costBetter : ""}`}>{row.b}</span>
              </div>
            ))}
            <div className={styles.costTotal}><span>Estimated total</span><span className={styles.costBetter}>~€128</span><span>~€182</span></div>
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
