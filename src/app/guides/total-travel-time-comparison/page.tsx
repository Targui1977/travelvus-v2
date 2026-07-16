import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import { HeroEditorial } from "@/components/hero";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title:
    "Flight Time vs Total Travel Time: How to Compare Two Flights | Travelvus",
  description:
    "Learn how to compare two flights using airport access, waiting, connections, baggage and final transfers — not only scheduled flight duration.",
  alternates: { canonical: "/guides/total-travel-time-comparison" },
};

const TOC_ITEMS = [
  "The 30-second answer",
  "Flight time is not journey time",
  "The Travelvus Total-Time Formula",
  "Worked example: two flights compared",
  "The verdict",
  "How Travelvus reasoned",
  "The four factors that change the result",
  "When the shorter flight wins vs when it loses",
  "Quick checklist",
  "FAQ",
  "Compare your own journey",
];

/* ── Worked example data ──────────────────────────────────── */

const WORKED_EXAMPLE = {
  optionA: {
    label: "Option A · Memmingen → STN",
    badge: "A",
    rows: [
      ["Home → Memmingen (bus)", "1h 45m"],
      ["Check-in + security", "2h 00m"],
      ["Scheduled flight", "1h 50m"],
      ["Baggage collection", "25m"],
      ["Stansted → Central London (coach)", "1h 10m"],
      ["Schedule gap — 2h wait for next coach", "2h 00m"],
    ],
    total: ["Total journey time", "9h 10m"],
    isLoser: true,
  },
  optionB: {
    label: "Option B · Munich → LHR",
    badge: "B",
    rows: [
      ["Home → Munich Airport (S-Bahn)", "40m"],
      ["Check-in + security", "2h 00m"],
      ["Scheduled flight", "2h 05m"],
      ["Baggage collection", "20m"],
      ["Heathrow → Central London (Elizabeth Line)", "35m"],
      ["No schedule gap — trains every 15 min", "0m"],
    ],
    total: ["Total journey time", "5h 40m"],
    isLoser: false,
  },
  footer:
    "The scheduled flight was 15 minutes longer — but the complete journey was 3 hours and 30 minutes shorter. The shorter flight lost.",
};

/* ── FAQ data ─────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    question: "What counts as total travel time?",
    answer:
      "Total travel time is the complete duration from leaving your starting point to arriving at your final destination. It includes travel to the departure airport, check-in and security, waiting, flight time, connections, baggage collection and the final transfer to where you are actually going.",
  },
  {
    question: "Is a direct flight always faster door to door?",
    answer:
      "Usually, but not always. A direct flight from a distant airport with a long ground transfer can take longer than a connecting flight from a closer airport with better transport links. Always run the door-to-door comparison.",
  },
  {
    question: "How much airport time should I allow?",
    answer:
      "Airlines generally recommend arriving 2 hours before departure for European flights and 3 hours for long-haul international flights. Add extra time for checked baggage, peak periods or unfamiliar airports. These are guidelines — check your airline's specific requirements.",
  },
  {
    question: "How do I compare a short flight from a distant airport?",
    answer:
      "Calculate the complete door-to-door timeline for both options: home to departure airport, pre-flight time, flight duration, baggage collection and arrival airport to destination. The shorter flight only wins when the total timeline is shorter.",
  },
  {
    question: "Is an early morning flight really faster?",
    answer:
      "It can be — but check whether public transport runs early enough to reach the airport, and whether you would need an airport hotel the night before. An early flight that saves 2 hours in the air but requires a hotel stay and a 04:00 taxi may not save time or money overall.",
  },
  {
    question: "How should connection time be evaluated?",
    answer:
      "Allow at least 90 minutes for connections within the same terminal, and 2–3 hours if you need to change terminals or go through security again. Tight connections save time on paper but create real missed-flight risk. A longer, safer layover is often the smarter choice.",
  },
  {
    question: "Does the time of day I arrive matter?",
    answer:
      "Yes — significantly. A late arrival after public transport has stopped can force an expensive taxi or an unplanned hotel night. An early morning departure may require arriving at the airport before public transport begins. Always check whether transport is running at both ends of your journey.",
  },
  {
    question: "How does Travelvus calculate the faster journey?",
    answer:
      "Travelvus builds complete timelines for both flights using the same stages: home-to-airport travel, pre-flight time, flight duration, connections, baggage, final transfer and schedule waiting. For supported airport pairs, it uses verified transfer data from TfL and National Rail.",
  },
];

/* ── Door-to-door diagram ─────────────────────────────────── */

function JourneyDiagram() {
  const stages = [
    "Home-to-airport",
    "Pre-flight time",
    "Flight duration",
    "Connection / baggage",
    "Arrival transfer",
    "Destination",
  ];

  return (
    <div className={styles.insightNode}>
      <span className={styles.insightNodeLabel}>
        Door-to-door journey — flight duration is one segment
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 16,
          marginBottom: 12,
          gap: 0,
        }}
      >
        {stages.map((label, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <div
              style={{
                padding: "8px 14px",
                background:
                  i === 2
                    ? "rgba(184,92,56,0.07)"
                    : "transparent",
                borderRadius: 5,
                border:
                  i === 2
                    ? "1px solid rgba(184,92,56,0.18)"
                    : "1px solid transparent",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--mono)",
                  fontWeight: 500,
                  fontSize: 9,
                  lineHeight: 1,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: i === 2 ? "var(--copper)" : "var(--muted)",
                  marginBottom: 4,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--sans)",
                  fontWeight: i === 2 ? 600 : 400,
                  fontSize: 11,
                  lineHeight: 1.3,
                  color: i === 2 ? "var(--ink)" : "var(--muted)",
                }}
              >
                {label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--line-2)",
                  padding: "0 2px",
                  flex: "none",
                }}
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <p
        className={styles.insightNodeBody}
        style={{ marginTop: 8, fontSize: 13 }}
      >
        Flight duration is only one segment of the total door-to-door journey.
      </p>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function TotalTravelTimeGuide() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        {/* ═══ HERO ═══ */}
        <HeroEditorial
          category="Time Guide"
          question="Shorter Flight or Better Journey? How to Compare Total Travel Time"
          subtitle="The fastest flight on paper can become the slower journey once airport access, waiting, connections and final transfers are included."
          metadata={{ readTime: "7 min read", reviewedDate: "Jul 2026", verified: true }}
          decisionCard={{
            winner: "Heathrow wins in the worked example",
            timeSaved: "3h 30m faster",
            moneySaved: "5h 40m total",
            bestFor: "Travellers comparing secondary airports, connections or awkward schedules",
            confidence: "high",
          }}
          snapshot={[
            { label: "Shorter flight", value: "Not always faster" },
            { label: "Biggest time loss", value: "Access + waiting" },
            { label: "Real metric", value: "Door-to-door" },
          ]}
          cta={{ label: "Compare your own journey →", href: "/#compare" }}
          evidence={{ factors: [
            { title: "Airport access", explanation: "A shorter flight can lose its advantage before departure if the origin airport is distant or difficult to reach.", weight: "critical" },
            { title: "Final arrival transfer", explanation: "The destination-side journey — from the arrival airport to where you are actually going — can be longer than the flight-time difference.", weight: "critical" },
            { title: "Waiting and schedule time", explanation: "Early departures, connections, security queues and unusable arrival times all affect the real journey duration.", weight: "high" },
            { title: "Complete door-to-door duration", explanation: "Our comparison uses the full journey from origin to destination, not only scheduled flight time.", weight: "high" },
            { title: "Baggage and arrival processing", explanation: "Checked baggage can extend the arrival sequence by 20–30 minutes per airport.", weight: "medium" },
          ], limitations: [
            "Airport queues vary by time and terminal.",
            "Public transport availability changes by time and day.",
            "Cabin-bag-only travel can shorten the journey.",
            "A different final destination can reverse the result.",
          ], trace: ["Home-to-airport", "Pre-flight time", "Flight duration", "Arrival transfer", "Total journey time"], strength: "Strong for the illustrative example" }}
        />

        {/* ═══ TOC + CONTENT ═══ */}
        <div className={styles.tocRail}>
          <div>
            <div className={styles.tocSticky}>
              <ul>
                {TOC_ITEMS.map((item, i) => (
                  <li key={i} className={i === 0 ? styles.tocActive : ""}>
                    <a href={`#section-${i}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <MobileTOC
              items={TOC_ITEMS.map((label, i) => ({
                label,
                anchor: `#section-${i}`,
              }))}
            />
          </div>

          <div className={styles.guideContent}>
            {/* ═══ DECISION SUMMARY ═══ */}
            <div className={styles.decisionSummary}>
              <div>
                <div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div>
                <div className={styles.decisionSummaryValue}>
                  Travellers choosing between two flights with different
                  airports, schedules or connections
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>Decision it solves</div>
                <div className={styles.decisionSummaryValue}>
                  Which option creates the shorter, more practical door-to-door
                  journey
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>Key takeaway</div>
                <div className={styles.decisionSummaryValue}>
                  Compare the complete journey from your starting point to your
                  real destination — not just the hours in the air
                </div>
              </div>
            </div>

            {/* ═══ 1. THE 30-SECOND ANSWER ═══ */}
            <h2 id="section-0">The 30-second answer</h2>
            <p>
              A shorter flight only wins when the time saved in the air survives{" "}
              <strong>everything that happens before takeoff and after landing</strong>.
              Travel to the departure airport. Check-in and security. Waiting.
              Connections and terminal changes. Baggage collection. The final
              transfer to your real destination. A flight that spends 45 fewer
              minutes in the air can still produce a journey that takes two
              hours longer door to door.{" "}
              <strong>
                Do not ask which flight is shorter. Ask which complete journey
                gets you there sooner.
              </strong>
            </p>

            {/* ═══ 2. FLIGHT TIME IS NOT JOURNEY TIME ═══ */}
            <h2 id="section-1">Flight time is not journey time</h2>
            <p>
              Flight search tools show one number prominently: scheduled flight
              duration — the time between takeoff and landing. The real journey
              includes every minute from your starting point to your actual
              destination.
            </p>

            <JourneyDiagram />

            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Travelvus Insight</span>
              <p className={styles.warningBoxBody}>
                A flight that lands 30 minutes earlier can still deliver you to
                your destination an hour later — if the earlier flight uses a
                distant airport with a slow, expensive transfer. Always compare
                the complete door-to-door timeline.
              </p>
            </div>

            {/* ═══ 3. TOTAL-TIME FORMULA ═══ */}
            <h2 id="section-2">The Travelvus Total-Time Formula</h2>
            <p>
              There is no universally perfect formula. But the principle is
              always the same: add every time segment between your starting
              point and your destination, then compare.
            </p>

            <div className={styles.tipBox}>
              <span className={styles.tipBoxLabel}>Travelvus Calculation</span>
              <p
                className={styles.tipBoxBody}
                style={{
                  font: "500 14px/1.6 Geist, sans-serif",
                  color: "var(--ink)",
                }}
              >
                <strong>Total Journey Time</strong> = Home-to-airport + pre-flight
                time + flight duration + connection time + baggage time + final
                transfer + schedule waiting
              </p>
              <p className={styles.tipBoxBody} style={{ marginTop: 6 }}>
                Apply to both flights. Measure the same way. The shorter total
                journey wins.
              </p>
            </div>

            {/* ═══ 4. WORKED EXAMPLE ═══ */}
            <h2 id="section-3">Worked example: two flights compared</h2>
            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Illustrative example</span>
              <p className={styles.warningBoxBody}>
                The times below are illustrative and demonstrate the comparison
                method. They are not live schedules, current transfer times or
                real-time queue data. Replace these values with your own journey
                when comparing real flights.
              </p>
            </div>

            <div className={styles.workedExample}>
              <div className={styles.workedExampleHd}>
                <span>Option A</span><span>vs</span><span>Option B</span>
              </div>
              <div className={styles.workedExampleHd}>
                <span style={{ color: "var(--muted)" }}>
                  Illustrative example · Munich → London
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className={styles.workedExampleDot} />
                  Calculated now
                </span>
              </div>
              <div className={styles.workedCols}>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}>
                    <span className={styles.workedColLabel}>{WORKED_EXAMPLE.optionA.label}</span>
                    <span className={`${styles.workedBadge} ${styles.workedBadgeLose}`}>{WORKED_EXAMPLE.optionA.badge}</span>
                  </div>
                  {WORKED_EXAMPLE.optionA.rows.map(([label, value], i) => (
                    <div className={styles.workedRow} key={i}>
                      <span>{label}</span>
                      <span className={styles.workedRowAmount}>{value}</span>
                    </div>
                  ))}
                  <div className={styles.workedTotal}>
                    <span className={styles.workedTotalLabel}>{WORKED_EXAMPLE.optionA.total[0]}</span>
                    <span className={styles.workedTotalLose}>{WORKED_EXAMPLE.optionA.total[1]}</span>
                  </div>
                </div>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}>
                    <span className={styles.workedColLabel}>{WORKED_EXAMPLE.optionB.label}</span>
                    <span className={`${styles.workedBadge} ${styles.workedBadgeWin}`}>{WORKED_EXAMPLE.optionB.badge}</span>
                  </div>
                  {WORKED_EXAMPLE.optionB.rows.map(([label, value], i) => (
                    <div className={styles.workedRow} key={i}>
                      <span>{label}</span>
                      <span className={styles.workedRowAmount}>{value}</span>
                    </div>
                  ))}
                  <div className={styles.workedTotal}>
                    <span className={styles.workedTotalLabel}>{WORKED_EXAMPLE.optionB.total[0]}</span>
                    <span className={styles.workedTotalWin}>{WORKED_EXAMPLE.optionB.total[1]}</span>
                  </div>
                </div>
              </div>
              <div className={styles.workedFooter}>{WORKED_EXAMPLE.footer}</div>
            </div>

            <div className={styles.bridge}>
              <div className={styles.bridgeRule} />
              <span className={styles.bridgeText}>Based on this, Travelvus concludes:</span>
              <div className={styles.bridgeRule} />
            </div>

            {/* ═══ 5. VERDICT ═══ */}
            <TravelvusVerdict
              verdictLine="Heathrow wins."
              stats={[
                { label: "Total journey time", value: "340", unit: "min" },
                { label: "Time saved", value: "210", unit: "min", accent: true },
                { label: "Flight duration", value: "3", unit: "h 50m" },
              ]}
            />

            {/* ═══ 6. HOW TRAVELVUS REASONED ═══ */}
            <h2 id="section-5">How Travelvus reasoned</h2>
            <p>
              Travelvus built both complete journey timelines using seven
              stages, measured identically:
            </p>
            <ol style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>Start at the real departure point.</strong> Not the airport — your home, hotel or office. Option A required 1h 45m by bus to a distant regional airport. Option B was 40 minutes by S-Bahn.</li>
              <li><strong>Add realistic pre-flight time.</strong> Both required arriving 2 hours before departure. Standard for European flights with checked baggage.</li>
              <li><strong>Include the full flight.</strong> Option A: 1h 50m scheduled. Option B: 2h 05m. Only 15 minutes difference — Option A was shorter in the air.</li>
              <li><strong>Add baggage and terminal movement.</strong> Both included checked baggage collection and walking time. Similar at 20–25 minutes.</li>
              <li><strong>Add the final destination transfer.</strong> From Stansted, a coach to central London: 1h 10m. From Heathrow, the Elizabeth Line: 35 minutes.</li>
              <li><strong>Account for schedule gaps.</strong> Option A's arrival aligned poorly with coach departures — a 2-hour wait. Option B had trains every 15 minutes.</li>
              <li><strong>Compare usable arrival times.</strong> Option A delivered the traveller in 9h 10m. Option B in 5h 40m. The shorter flight produced the longer journey by 3h 30m.</li>
            </ol>

            {/* ═══ 7. THE FOUR FACTORS ═══ */}
            <h2 id="section-6">The four factors that most often change the result</h2>
            <p>Four things flip the winner between a shorter flight and a better journey:</p>

            <div className={styles.decisionSummary}>
              <div>
                <div className={styles.decisionSummaryLabel}>1. Connections</div>
                <div className={styles.decisionSummaryValue}>
                  A direct flight usually wins. But a connection from a closer
                  airport with good transport can beat a direct flight from a
                  distant one. Allow at least 90 minutes for same-terminal
                  connections; 2–3 hours if changing terminals.
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>2. Schedule timing</div>
                <div className={styles.decisionSummaryValue}>
                  Early departures may require arriving before public transport
                  runs or booking an airport hotel. Late arrivals after
                  transport closes force expensive taxis. The usable arrival
                  time — not the scheduled one — determines the real journey.
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>3. Airport location</div>
                <div className={styles.decisionSummaryValue}>
                  Secondary airports often mean longer, slower transfers with
                  fewer transport options. A shorter flight to a distant airport
                  can lose 45–90 minutes on the ground. Primary airports near
                  the city usually offer faster, more frequent connections.
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>4. Who is travelling</div>
                <div className={styles.decisionSummaryValue}>
                  A solo traveller can absorb more friction than a family with
                  children and luggage. Business travellers value time directly.
                  Travellers with limited mobility need short, direct transfers.
                  The same journey can be acceptable for one person and
                  impractical for another.
                </div>
              </div>
            </div>

            {/* ═══ 8. DECISION PAIR ═══ */}
            <h2 id="section-7">When the shorter flight wins vs when it loses</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
              <div>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 12 }}>When the shorter flight wins</span>
                <ul style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.65, color: "#3c4650", margin: 0, paddingLeft: 18 }}>
                  <li style={{ marginBottom: 6 }}>Airports are similarly distant from you</li>
                  <li style={{ marginBottom: 6 }}>Pre-flight requirements are the same</li>
                  <li style={{ marginBottom: 6 }}>No connection or terminal change needed</li>
                  <li style={{ marginBottom: 6 }}>Destination transfers are equivalent</li>
                  <li>Arrival time is usable — transport still running</li>
                </ul>
              </div>
              <div>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 12 }}>When the longer flight is better</span>
                <ul style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.65, color: "#3c4650", margin: 0, paddingLeft: 18 }}>
                  <li style={{ marginBottom: 6 }}>Closer airport with fast, frequent transport</li>
                  <li style={{ marginBottom: 6 }}>No overnight hotel needed before an early departure</li>
                  <li style={{ marginBottom: 6 }}>Direct rail connection from arrival airport</li>
                  <li style={{ marginBottom: 6 }}>Better arrival time — daytime, transport running</li>
                  <li>Lower connection risk and simpler baggage journey</li>
                </ul>
              </div>
            </div>
            <p>
              The shorter flight does not lose because it is shorter. It loses
              because the complete system around it — airports, transport,
              timing — is less efficient.
            </p>

            {/* ═══ 9. QUICK CHECKLIST ═══ */}
            <h2 id="section-8">Quick checklist</h2>
            <p style={{ marginBottom: 16 }}>Before choosing, run these seven questions for both flights:</p>
            <ol style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", paddingLeft: 22, margin: 0 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--ink)" }}>Departure access:</strong> How long to reach each departure airport from your real starting point?</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--ink)" }}>Airport arrival time:</strong> How early must you arrive? Include check-in, security and known queues.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--ink)" }}>Connections:</strong> Any connections? How long is each layover? Terminal change required?</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--ink)" }}>Baggage:</strong> Do you need to collect and re-check? Add 20–30 minutes per collection.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--ink)" }}>Arrival transfer:</strong> How long from the arrival airport to your final destination?</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--ink)" }}>Usable arrival:</strong> What time do you actually get there? Is transport still running?</li>
              <li><strong style={{ color: "var(--ink)" }}>Total door-to-door:</strong> Add it all up. Which option gets you there sooner with less friction?</li>
            </ol>

            {/* ═══ 10. FAQ ═══ */}
            <h2 id="section-9">FAQ</h2>
            <FAQAccordion items={FAQ_ITEMS} />

            {/* ═══ 11. FINAL CTA ═══ */}
            <h2 id="section-10">Compare your own journey</h2>
            <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.5, color: "var(--ink)", marginBottom: 24 }}>
              Do not ask which flight is shorter. Ask which complete journey
              gets you where you need to be sooner, with less friction. Run the
              door-to-door comparison for both options. Only then decide.
            </p>

            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.4, color: "var(--paper)" }}>Now compare your complete journey.</span>
                <span style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--pmuted)", display: "block", marginTop: 6 }}>Paste your two flights into Travelvus and see which really wins.</span>
              </div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>

            {/* ═══ CONTINUE YOUR DECISION ═══ */}
            <style>{`.decisionGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.decisionCard{display:flex;flex-direction:column;gap:6px;background:var(--paper);border:1px solid var(--line);border-radius:9px;padding:18px 20px;text-decoration:none;transition:border-color .2s}.decisionCard:hover{border-color:var(--copper)}@media(max-width:900px){.decisionGrid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.decisionGrid{grid-template-columns:1fr}}`}</style>
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, lineHeight: 1.25, color: "var(--ink)", margin: "0 0 8px" }}>Continue your decision</h2>
              <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "var(--muted)", margin: "0 0 22px" }}>The next guide depends on the question you&rsquo;re trying to answer.</p>
              <div className="decisionGrid">
                <Link href="/guides/real-cost-of-a-flight" className="decisionCard">
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, lineHeight: 1, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--copper)" }}>Cost Guide</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, lineHeight: 1.25, color: "var(--ink)" }}>Real Cost of a Flight</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 13, lineHeight: 1.45, color: "var(--muted)" }}>Why cheap tickets often become expensive after baggage, airports and transfers.</span>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11, lineHeight: 1, color: "var(--copper)", marginTop: 4 }}>Continue reading &rarr;</span>
                </Link>
                <Link href="/guides/heathrow-vs-gatwick" className="decisionCard">
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, lineHeight: 1, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--copper)" }}>Airport Guide</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, lineHeight: 1.25, color: "var(--ink)" }}>Heathrow vs Gatwick</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 13, lineHeight: 1.45, color: "var(--muted)" }}>Compare the complete journey before choosing your London airport.</span>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11, lineHeight: 1, color: "var(--copper)", marginTop: 4 }}>Continue reading &rarr;</span>
                </Link>
                <Link href="/compare/frankfurt-to-london" className="decisionCard">
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, lineHeight: 1, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--copper)" }}>Decision Page</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, lineHeight: 1.25, color: "var(--ink)" }}>Frankfurt to London</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 13, lineHeight: 1.45, color: "var(--muted)" }}>Hahn Airport adds 1h 45m to the door-to-door journey versus FRA.</span>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11, lineHeight: 1, color: "var(--copper)", marginTop: 4 }}>Continue reading &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer — matching approved Guide #2 footer exactly */}
        <footer style={{ padding: "88px 48px 0", borderTop: "1px solid var(--line)", marginTop: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 56, paddingBottom: 56 }}>
            <div><span style={{ font: "700 20px/1 Geist, sans-serif", letterSpacing: "-.04em", color: "var(--ink)" }}>Travelvus</span><p style={{ font: "400 14px/1.6 Geist, sans-serif", color: "var(--muted)", margin: "16px 0 0", maxWidth: 280 }}>Decision engine for smarter air travel.</p></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Product</div><div style={{ display: "flex", flexDirection: "column", gap: 13 }}><Link href="/" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Compare</Link><Link href="/london-airports" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Airport Decisions</Link><Link href="/wego-flight" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Travel Guides</Link><Link href="/methodology" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Methodology</Link></div></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Company</div><div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 28 }}><Link href="/about" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>About</Link><Link href="/contact" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Contact</Link></div></div>
          </div>
          <div style={{ borderTop: "1px solid var(--line)", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ font: "italic 400 15px/1 Instrument Serif, Georgia, serif", color: "var(--muted)" }}>Know the real cost before you book.</span><span style={{ font: "400 12px/1 IBM Plex Mono, monospace", color: "#9aa4ac" }}>&copy; 2026 Travelvus</span></div>
        </footer>
      </div>
    </div>
  );
}
