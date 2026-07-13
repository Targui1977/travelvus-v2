import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title:
    "Flight Time vs Total Travel Time: How to Compare Two Flights | Travelvus",
  description:
    "Learn how to compare two flights using airport access, waiting, connections, baggage and final transfers — not only scheduled flight duration.",
  alternates: { canonical: "/guides/total-travel-time-comparison" },
};

const TOC_ITEMS = [
  "Who this guide is for",
  "The 30-second answer",
  "Flight time is not journey time",
  "The Travelvus Total-Time Formula",
  "Worked example: two flights compared",
  "The verdict",
  "How Travelvus reasoned",
  "Direct vs connecting flights",
  "Early flight vs late flight",
  "Primary vs secondary airport",
  "Solo, family and business travel",
  "When the shorter flight really wins",
  "When the longer flight is better",
  "Quick decision checklist",
  "FAQ",
  "Compare your own journey",
];

export default function TotalTravelTimeGuide() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        {/* ═══ 1. HERO ═══ */}
        <section className={styles.guideHero}>
          <span className={styles.guideHeroKicker}>Travel Philosophy</span>
          <h1 className={styles.guideHeroH1}>
            Shorter Flight or Better Journey? How to Compare Total Travel Time
          </h1>
          <p className={styles.guideHeroSub}>
            The fastest flight on paper can become the slower journey once
            airport access, waiting, connections and final transfers are
            included.
          </p>
          <div className={styles.guideHeroMeta}>
            <span>10 min read</span>
            <span>·</span>
            <span>Last reviewed: July 2026</span>
            <span>·</span>
            <span>
              <span className={styles.guideHeroDot} /> Methodology verified
            </span>
          </div>
        </section>

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
            {/* ═══ 2. DECISION SUMMARY ═══ */}
            <div className={styles.decisionSummary}>
              <div>
                <div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div>
                <div className={styles.decisionSummaryValue}>
                  Travellers choosing between two flights with different
                  airports, schedules, connections or arrival times
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  Decision it solves
                </div>
                <div className={styles.decisionSummaryValue}>
                  Which option creates the shorter and more practical
                  door-to-door journey
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  When it matters most
                </div>
                <div className={styles.decisionSummaryValue}>
                  When a flight uses a distant airport, includes a connection,
                  arrives late or requires a difficult final transfer
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  Key takeaway
                </div>
                <div className={styles.decisionSummaryValue}>
                  Compare the complete journey from your starting point to your
                  real destination — not just the hours in the air
                </div>
              </div>
            </div>

            {/* ═══ 3. THE 30-SECOND ANSWER ═══ */}
            <h2 id="section-1">The 30-second answer</h2>
            <p>
              A shorter flight only wins when the time saved in the air survives{" "}
              <strong>everything that happens before takeoff and after landing</strong>.
              Those things include: travel to the departure airport, check-in
              and security, waiting at the gate, connections and terminal
              changes, baggage collection, and the final transfer to your real
              destination. A flight that spends 45 fewer minutes in the air can
              still produce a journey that takes two hours longer door to door.
              The question is never &ldquo;which flight is shorter?&rdquo; The
              question is always &ldquo;which complete journey gets me where I
              need to be sooner, with less friction?&rdquo;
            </p>

            {/* ═══ 4. FLIGHT TIME IS NOT JOURNEY TIME ═══ */}
            <h2 id="section-2">Flight time is not journey time</h2>
            <p>
              Flight search tools show one number prominently: the scheduled
              flight duration. That number measures the time between takeoff and
              landing. It ignores everything else. The real journey includes
              every minute from the moment you leave your starting point to the
              moment you arrive at your actual destination.
            </p>

            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>What flight tools show</th>
                  <th>What the real journey includes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scheduled flight time</td>
                  <td>Home-to-airport travel time</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Check-in and security queue time</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Gate waiting and boarding</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Actual flight duration (including taxi, holding)</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Connection and terminal-change time</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Baggage collection after landing</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Airport-to-destination transfer</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Schedule-related waiting (early arrival, late departure)</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Travelvus Insight</span>
              <p className={styles.warningBoxBody}>
                A flight that lands 30 minutes earlier can still deliver you to
                your destination an hour later — if the earlier flight uses a
                distant airport with a long, expensive transfer. Always compare
                the complete door-to-door timeline.
              </p>
            </div>

            {/* ═══ 5. TOTAL-TIME FORMULA ═══ */}
            <h2 id="section-3">The Travelvus Total-Time Formula</h2>
            <p>
              There is no universally perfect formula. But the principle is
              always the same: add every time cost between your starting point
              and your destination, then compare the two totals.
            </p>

            <div className={styles.insightNode}>
              <span className={styles.insightNodeLabel}>Total Journey Time</span>
              <p className={styles.insightNodeBody}>
                Total Journey Time = Home-to-airport travel + pre-flight airport
                time + flight time + connection and terminal time + baggage
                collection + airport-to-destination transfer + schedule-related
                waiting
              </p>
            </div>
            <p style={{ marginTop: 20 }}>
              Apply this formula to both flight options. Measure every time
              element the same way for both. Then compare the totals. The winner
              is the option that delivers you to your real destination sooner —
              not the one with the shorter scheduled flight.
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
                Apply this to both flights. Measure the same way. The shorter
                total journey time wins.
              </p>
            </div>

            {/* ═══ 6. WORKED EXAMPLE ═══ */}
            <h2 id="section-4">Worked example: two flights compared</h2>
            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Illustrative example</span>
              <p className={styles.warningBoxBody}>
                The times below are illustrative and intended to demonstrate the
                comparison method. They are not live schedules, current transfer
                times or real-time airport queue data. Replace these values with
                your own journey when comparing real flights.
              </p>
            </div>

            <div className={styles.workedExample}>
              <div className={styles.workedExampleHd}>
                <span>Option A</span>
                <span>vs</span>
                <span>Option B</span>
              </div>
              <div className={styles.workedExampleHd}>
                <span style={{ color: "var(--muted)" }}>
                  Illustrative example · Munich → London
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span className={styles.workedExampleDot} />
                  Calculated now
                </span>
              </div>
              <div className={styles.workedCols}>
                {/* Option A — shorter flight, distant airport */}
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}>
                    <span className={styles.workedColLabel}>
                      Option A · Memmingen → STN
                    </span>
                    <span
                      className={`${styles.workedBadge} ${styles.workedBadgeLose}`}
                    >
                      A
                    </span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Home → Memmingen (bus)</span>
                    <span className={styles.workedRowAmount}>1h 45m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Check-in + security</span>
                    <span className={styles.workedRowAmount}>2h 00m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Scheduled flight</span>
                    <span className={styles.workedRowAmount}>1h 50m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Baggage collection</span>
                    <span className={styles.workedRowAmount}>25m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Stansted → Central London (coach)</span>
                    <span className={styles.workedRowAmount}>1h 10m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Schedule waiting (2h gap before coach)</span>
                    <span className={styles.workedRowAmount}>2h 00m</span>
                  </div>
                  <div className={styles.workedTotal}>
                    <span className={styles.workedTotalLabel}>
                      Total journey time
                    </span>
                    <span className={styles.workedTotalLose}>9h 10m</span>
                  </div>
                </div>

                {/* Option B — longer flight, closer airport */}
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}>
                    <span className={styles.workedColLabel}>
                      Option B · Munich → LHR
                    </span>
                    <span
                      className={`${styles.workedBadge} ${styles.workedBadgeWin}`}
                    >
                      B
                    </span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Home → Munich Airport (S-Bahn)</span>
                    <span className={styles.workedRowAmount}>40m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Check-in + security</span>
                    <span className={styles.workedRowAmount}>2h 00m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Scheduled flight</span>
                    <span className={styles.workedRowAmount}>2h 05m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Baggage collection</span>
                    <span className={styles.workedRowAmount}>20m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>Heathrow → Central London (Elizabeth Line)</span>
                    <span className={styles.workedRowAmount}>35m</span>
                  </div>
                  <div className={styles.workedRow}>
                    <span>No schedule gap — trains every 15 min</span>
                    <span className={styles.workedRowAmount}>0m</span>
                  </div>
                  <div className={styles.workedTotal}>
                    <span className={styles.workedTotalLabel}>
                      Total journey time
                    </span>
                    <span className={styles.workedTotalWin}>5h 40m</span>
                  </div>
                </div>
              </div>
              <div className={styles.workedFooter}>
                9h 10m − 5h 40m = <strong>3h 30m saved</strong> by choosing
                Heathrow. The scheduled flight was 15 minutes longer — but the
                complete journey was 3 hours and 30 minutes shorter. The shorter
                flight lost by a wide margin.
              </div>
            </div>

            <div className={styles.bridge}>
              <div className={styles.bridgeRule} />
              <span className={styles.bridgeText}>
                Based on this, Travelvus concludes:
              </span>
              <div className={styles.bridgeRule} />
            </div>

            {/* ═══ 7. VERDICT ═══ */}
            <TravelvusVerdict
              verdictLine="Heathrow wins."
              stats={[
                {
                  label: "Total journey time",
                  value: "340",
                  unit: "min",
                },
                {
                  label: "Time saved",
                  value: "210",
                  unit: "min",
                  accent: true,
                },
                {
                  label: "Flight time",
                  value: "3",
                  unit: "h 50m",
                },
              ]}
            />

            {/* ═══ 8. HOW TRAVELVUS REASONED ═══ */}
            <h2 id="section-6">How Travelvus reasoned</h2>
            <p>
              Travelvus built both complete journey timelines using the same
              seven stages:
            </p>
            <ol
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#4a5560",
                marginBottom: 18,
                paddingLeft: 22,
              }}
            >
              <li>
                <strong>Start at the traveller&rsquo;s real departure point.</strong>{" "}
                Not the airport — your home, hotel or office. Option A required
                a 1h 45m bus to a distant regional airport. Option B required a
                40-minute S-Bahn ride to the city&rsquo;s main airport.
              </li>
              <li>
                <strong>Add realistic pre-flight time.</strong> Both options
                required arriving 2 hours before departure for check-in and
                security. This is standard for European flights with checked
                baggage.
              </li>
              <li>
                <strong>Include the full flight sequence.</strong> Option
                A&rsquo;s flight was scheduled at 1h 50m. Option B&rsquo;s was
                2h 05m. The difference in the air was only 15 minutes — Option A
                was shorter in flight.
              </li>
              <li>
                <strong>Add baggage and terminal movement.</strong> Both options
                included checked baggage collection and walking time from gate
                to transport. These were broadly similar at 20–25 minutes each.
              </li>
              <li>
                <strong>Add the final destination transfer.</strong> From
                Stansted, a coach to central London took 1h 10m. From Heathrow,
                the Elizabeth Line took 35 minutes — a difference of 35 minutes
                on the ground.
              </li>
              <li>
                <strong>Account for schedule-related waiting.</strong> Option
                A&rsquo;s arrival aligned poorly with coach departures, creating
                a 2-hour wait. Option B had trains every 15 minutes — virtually
                zero schedule gap.
              </li>
              <li>
                <strong>Compare usable arrival time and total friction.</strong>{" "}
                Option A delivered the traveller to central London after 9 hours
                and 10 minutes. Option B delivered them in 5 hours and 40
                minutes. The shorter flight produced the longer journey by 3
                hours and 30 minutes.
              </li>
            </ol>

            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Terminal insight</span>
              <p className={styles.warningBoxBody}>
                The shortest flight is only the fastest option when the complete
                journey — airport access, waiting, flight, connections, baggage
                and final transfer — remains shorter. A 15-minute flight
                advantage evaporates quickly against a 2-hour schedule gap and a
                35-minute longer ground transfer.
              </p>
            </div>

            {/* ═══ 9. DIRECT VS CONNECTING FLIGHTS ═══ */}
            <h2 id="section-7">Direct vs connecting flights</h2>
            <p>
              A direct flight is usually the faster door-to-door choice — but
              not always. A connection can sometimes win when it avoids a
              distant airport, an overnight stay or an unusable arrival time.
            </p>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Direct flight</th>
                  <th>Connecting flight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flight-only duration</td>
                  <td>Shorter</td>
                  <td>Longer</td>
                </tr>
                <tr>
                  <td>Missed-connection risk</td>
                  <td>None</td>
                  <td>Present — allow sufficient layover</td>
                </tr>
                <tr>
                  <td>Terminal-change friction</td>
                  <td>None</td>
                  <td>Can be significant at large hub airports</td>
                </tr>
                <tr>
                  <td>Schedule resilience</td>
                  <td>Higher</td>
                  <td>Lower — one delay cascades</td>
                </tr>
                <tr>
                  <td>Can beat direct when</td>
                  <td>Usually</td>
                  <td>When the direct flight uses a very distant airport</td>
                </tr>
              </tbody>
            </table>
            <p>
              A connection is acceptable when the layover is well-timed, the
              terminal change is manageable, and the total door-to-door time
              still beats the best available direct option. A connection is
              risky when the layover is tight, the connecting airport is large
              or unfamiliar, or missing the connection would strand you
              overnight.
            </p>

            {/* ═══ 10. EARLY VS LATE FLIGHT ═══ */}
            <h2 id="section-8">Early flight vs late flight</h2>
            <p>
              A 06:00 departure looks efficient — until you realise public
              transport does not run at 04:00. A 23:00 arrival looks acceptable
              — until the last train leaves at 23:30 and you are still waiting
              for baggage. Schedule timing changes the real journey
              significantly.
            </p>

            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Early departure (before 08:00)</th>
                  <th>Late arrival (after 22:00)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Public transport may not be running</td>
                  <td>Public transport may have stopped</td>
                </tr>
                <tr>
                  <td>May require an airport hotel the night before</td>
                  <td>May require an expensive taxi or rideshare</td>
                </tr>
                <tr>
                  <td>Check-in opens 2h before — you arrive at 04:00</td>
                  <td>Baggage collection adds 20–30 min after landing</td>
                </tr>
              </tbody>
            </table>
            <p>
              The usable journey time — not the scheduled departure and arrival
              — is what matters. An early flight that saves €40 but costs you a
              €60 airport hotel the night before is not saving money. A late
              arrival that forces a €70 taxi because the trains have stopped is
              not saving money either.
            </p>

            {/* ═══ 11. PRIMARY VS SECONDARY AIRPORT ═══ */}
            <h2 id="section-9">Primary vs secondary airport</h2>
            <p>
              Secondary airports often serve budget airlines with lower ticket
              prices. But they are usually further from the city centre, with
              fewer and slower transport connections. A shorter flight to a
              distant secondary airport can lose because of:
            </p>
            <ul
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#4a5560",
                marginBottom: 18,
                paddingLeft: 22,
              }}
            >
              <li>longer ground transfer — often 45–90 minutes extra;</li>
              <li>fewer transport options — coaches every 30–60 minutes instead of trains every 10–15;</li>
              <li>expensive late-night transport — night taxis from distant airports can cost €80–120;</li>
              <li>poor connection frequency — missing a coach means a long wait;</li>
              <li>more friction with luggage or family — buses are harder with children and bags than direct trains.</li>
            </ul>
            <p>
              This is exactly the dynamic we explore in detail in our{" "}
              <Link href="/guides/heathrow-vs-gatwick">
                Heathrow vs Gatwick guide
              </Link>{" "}
              and the{" "}
              <Link href="/london-airports">
                London Airport Decisions hub
              </Link>
              . The principle applies to almost any city with multiple airports.
            </p>

            {/* ═══ 12. SOLO, FAMILY AND BUSINESS ═══ */}
            <h2 id="section-10">Solo, family and business travel</h2>
            <p>
              Time has different practical value depending on who is travelling:
            </p>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Traveller type</th>
                  <th>What matters most</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Solo traveller</td>
                  <td>Can absorb more friction — a long coach transfer is tolerable if the saving is meaningful</td>
                </tr>
                <tr>
                  <td>Couple</td>
                  <td>Balance cost and comfort — saving €50 but spending 2 extra hours travelling may not be worth it</td>
                </tr>
                <tr>
                  <td>Family with children</td>
                  <td>Friction multiplies — a distant airport, long bus ride and late arrival are much harder with young children</td>
                </tr>
                <tr>
                  <td>Business traveller</td>
                  <td>Time is directly valuable — a 3-hour journey-time saving is usually worth paying for</td>
                </tr>
                <tr>
                  <td>Traveller with limited mobility</td>
                  <td>Short, direct transfers are essential — distant airports with stairs and bus connections are a genuine barrier</td>
                </tr>
                <tr>
                  <td>Traveller with checked baggage</td>
                  <td>Baggage collection adds 20–30 minutes after every landing — factor it in, especially with connections</td>
                </tr>
              </tbody>
            </table>
            <p>
              Travelvus does not assign a universal monetary value to time. What
              an hour is worth depends on who you are, why you are travelling,
              and what you would do with the time you save or lose. Use your own
              judgement.
            </p>

            {/* ═══ 13. WHEN THE SHORTER FLIGHT WINS ═══ */}
            <h2 id="section-11">When the shorter flight really wins</h2>
            <p>
              The shorter flight genuinely wins when the complete journey
              remains shorter. That happens when:
            </p>
            <ul
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#4a5560",
                marginBottom: 18,
                paddingLeft: 22,
              }}
            >
              <li>airport access is comparable — both airports are similarly distant from your starting point;</li>
              <li>pre-flight requirements are similar — same check-in time, same security burden;</li>
              <li>there is no difficult connection — direct flight, single airport;</li>
              <li>destination transfer is equivalent — both arrival airports connect to your destination with similar speed;</li>
              <li>arrival time is usable — you are not arriving after public transport closes;</li>
              <li>the time saving in the air survives all the ground costs.</li>
            </ul>
            <p>
              When these conditions hold, the shorter flight is genuinely the
              faster journey. But you can only know that by running the
              comparison — not by looking at the flight duration alone.
            </p>

            {/* ═══ 14. WHEN THE LONGER FLIGHT IS BETTER ═══ */}
            <h2 id="section-12">
              When the longer flight is the better journey
            </h2>
            <p>
              A flight with a longer scheduled duration can still produce a
              shorter and better door-to-door journey. This happens surprisingly
              often. The longer flight wins when it offers:
            </p>
            <ul
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#4a5560",
                marginBottom: 18,
                paddingLeft: 22,
              }}
            >
              <li>a closer departure airport with fast, frequent transport;</li>
              <li>no overnight hotel needed before an early departure;</li>
              <li>a direct rail connection from the arrival airport to your destination;</li>
              <li>a better arrival time — during the day, with transport running;</li>
              <li>lower connection risk — direct flight or generous layover at a manageable airport;</li>
              <li>simpler baggage journey — no need to collect and re-check bags mid-journey;</li>
              <li>reduced family friction — easier airport access, shorter ground transfers.</li>
            </ul>
            <p>
              The longer flight does not win because it is longer. It wins
              because the complete system around it — airports, transport,
              timing — is more efficient.
            </p>

            {/* ═══ 15. QUICK DECISION CHECKLIST ═══ */}
            <h2 id="section-13">Quick decision checklist</h2>
            <p>
              Before choosing between two flights, run through these questions
              for both options:
            </p>
            <div className={styles.decisionSummary}>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  Departure airport access
                </div>
                <div className={styles.decisionSummaryValue}>
                  How long does it take to reach each departure airport from
                  your real starting point?
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  Required airport arrival time
                </div>
                <div className={styles.decisionSummaryValue}>
                  How early must you arrive? Factor in check-in, security and
                  any known queue times.
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>Connections</div>
                <div className={styles.decisionSummaryValue}>
                  Are there connections? How long is each layover? Is a terminal
                  change required?
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>Baggage</div>
                <div className={styles.decisionSummaryValue}>
                  Do you need to collect and re-check baggage? Add 20–30 minutes
                  per collection.
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  Arrival airport transfer
                </div>
                <div className={styles.decisionSummaryValue}>
                  How long to reach your final destination from the arrival
                  airport? What transport is available at that time?
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  Usable arrival time
                </div>
                <div className={styles.decisionSummaryValue}>
                  What time do you actually reach your destination? Is transport
                  still running?
                </div>
              </div>
              <div>
                <div className={styles.decisionSummaryLabel}>
                  Total door-to-door duration
                </div>
                <div className={styles.decisionSummaryValue}>
                  Add it all up. Which option gets you there sooner with less
                  friction?
                </div>
              </div>
            </div>

            {/* ═══ 16. FAQ ═══ */}
            <h2 id="section-14">FAQ</h2>
            <FAQAccordion
              items={[
                {
                  question: "What counts as total travel time?",
                  answer:
                    "Total travel time is the complete duration from leaving your starting point (home, hotel, office) to arriving at your final destination. It includes travel to the departure airport, check-in and security, waiting, flight time, connections, baggage collection and the final transfer to where you are actually going.",
                },
                {
                  question: "Is a direct flight always faster door to door?",
                  answer:
                    "Usually, but not always. A direct flight from a distant airport with a long ground transfer can take longer than a connecting flight from a closer airport with better transport links. Run the complete door-to-door comparison before deciding.",
                },
                {
                  question: "How much airport time should I include?",
                  answer:
                    "Most airlines recommend arriving 2 hours before departure for European flights and 3 hours for long-haul international flights. Add extra time if you are checking baggage, travelling during peak periods, or departing from a large or unfamiliar airport.",
                },
                {
                  question: "Should I count airport waiting time?",
                  answer:
                    "Yes. The time you spend at the airport before departure — checking in, passing security, waiting at the gate — is part of the journey. A flight with a shorter check-in requirement or faster security lane can save real time.",
                },
                {
                  question: "How do I compare a short flight from a distant airport?",
                  answer:
                    "Calculate the complete door-to-door timeline for both options: home to departure airport, pre-flight time, flight duration, baggage collection, arrival airport to destination. The shorter flight only wins when the total timeline is shorter — not just the flight.",
                },
                {
                  question: "Is an early morning flight really faster?",
                  answer:
                    "It can be — but check whether public transport runs early enough to reach the airport, and whether you need an airport hotel the night before. An early flight that saves 2 hours in the air but requires a €70 hotel and a 04:00 taxi may not be the faster or cheaper choice overall.",
                },
                {
                  question: "How should connection time be evaluated?",
                  answer:
                    "Allow at least 90 minutes for connections within the same terminal, and 2–3 hours if you need to change terminals or go through security again. Tight connections save time on paper but create significant missed-flight risk. A longer, safer layover is often the smarter choice.",
                },
                {
                  question: "How does Travelvus calculate the faster journey?",
                  answer:
                    "Travelvus builds complete timelines for both flights using the same stages: home-to-airport travel, pre-flight time, flight duration, connections, baggage, final transfer and schedule waiting. It compares the two totals and identifies the shorter journey — not just the shorter flight. For supported airport pairs, it uses verified transfer data from TfL and National Rail.",
                },
              ]}
            />

            {/* ═══ 17. FINAL DECISION ═══ */}
            <h2 id="section-15">Compare your own journey</h2>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 19,
                lineHeight: 1.5,
                color: "var(--ink)",
                marginBottom: 24,
              }}
            >
              Do not ask which flight is shorter. Ask which complete journey
              gets you where you need to be sooner and with less friction. The
              flight duration is just one number in a much larger equation. Run
              the door-to-door comparison for both options. Only then decide.
            </p>

            <div
              style={{
                background: "var(--navy)",
                borderRadius: "var(--radius-card)",
                padding: "22px 26px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 32,
              }}
            >
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontWeight: 600,
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--copper-lt)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Travelvus
                </span>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 17,
                    lineHeight: 1.4,
                    color: "var(--paper)",
                  }}
                >
                  Now compare your complete journey.
                </span>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 12,
                    color: "var(--pmuted)",
                    display: "block",
                    marginTop: 6,
                  }}
                >
                  Paste your two flights into Travelvus and see which really
                  wins — door to door.
                </span>
              </div>
              <Link
                href="/#compare"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--paper)",
                  background: "var(--copper)",
                  borderRadius: "var(--radius-button)",
                  padding: "12px 22px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Reveal the real winner
              </Link>
            </div>

            {/* ═══ RELATED GUIDES ═══ */}
            <div className={styles.relatedGuides}>
              <h2 className={styles.relatedGuidesTitle}>Continue reading</h2>
              <div className={styles.relatedGuidesGrid}>
                <Link
                  href="/guides/heathrow-vs-gatwick"
                  className={styles.relatedGuideCard}
                >
                  <span className={styles.relatedGuideCardKicker}>
                    Flagship Guide
                  </span>
                  <span className={styles.relatedGuideCardTitle}>
                    Heathrow vs Gatwick
                  </span>
                  <span className={styles.relatedGuideCardText}>
                    The complete decision guide — which London airport wins on
                    real cost?
                  </span>
                </Link>
                <Link
                  href="/guides/real-cost-of-a-flight"
                  className={styles.relatedGuideCard}
                >
                  <span className={styles.relatedGuideCardKicker}>
                    Flagship Guide
                  </span>
                  <span className={styles.relatedGuideCardTitle}>
                    How to Compare Two Flights Properly
                  </span>
                  <span className={styles.relatedGuideCardText}>
                    The ticket price is never the full story. Learn the real
                    cost framework.
                  </span>
                </Link>
                <Link
                  href="/london-airports"
                  className={styles.relatedGuideCard}
                >
                  <span className={styles.relatedGuideCardKicker}>
                    Decision Hub
                  </span>
                  <span className={styles.relatedGuideCardTitle}>
                    London Airport Decisions
                  </span>
                  <span className={styles.relatedGuideCardText}>
                    Explore real comparisons between London&rsquo;s major
                    airports.
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ FOOTER ═══ */}
        <footer className={styles.guideFooter}>
          <div className={styles.guideFooterInner}>
            <div>
              <span className={styles.footerBrand}>Travelvus</span>
              <p className={styles.footerBrandText}>
                Decision engine for smarter air travel.
              </p>
            </div>
            <div>
              <span className={styles.footerColTitle}>Product</span>
              <div className={styles.footerLinks}>
                <Link href="/">Compare</Link>
                <Link href="/london-airports">Airport Decisions</Link>
                <Link href="/wego-flight">Travel Guides</Link>
                <Link href="/methodology">Methodology</Link>
              </div>
            </div>
            <div>
              <span className={styles.footerColTitle}>Company</span>
              <div className={styles.footerLinks}>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className={styles.guideFooterBottom}>
            <span>Know the real cost before you book.</span>
            <span>&copy; 2026 Travelvus</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
