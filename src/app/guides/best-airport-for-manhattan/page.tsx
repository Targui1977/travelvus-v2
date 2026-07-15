import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import { HeroEditorial } from "@/components/hero";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Best Airport for Manhattan: JFK, Newark or LaGuardia? | Travelvus",
  description:
    "Which New York airport is actually best for Manhattan? Compare JFK, Newark, and LaGuardia on real transfer time, cost, and neighbourhood fit for Midtown, Downtown, Upper East and West Side.",
  alternates: { canonical: "/guides/best-airport-for-manhattan" },
};

const TOC_ITEMS = [
  "Who this guide is for",
  "The 30-second answer",
  "Why the closest airport is not always best",
  "Transfer comparison: all three airports",
  "Best airport by Manhattan neighbourhood",
  "Worked example: Midtown arrival",
  "The verdict",
  "When LaGuardia wins",
  "When Newark wins",
  "When JFK wins",
  "Rush hour reality",
  "FAQ",
  "Compare your own journey",
];

const FAQ_ITEMS = [
  {
    question: "Which airport is best for Midtown Manhattan?",
    answer:
      "Newark (EWR) generally wins for Midtown Manhattan. NJ Transit goes directly to Penn Station at 34th Street — the most central train station of any NYC airport. The train ride is ~25 minutes. JFK's AirTrain + LIRR takes ~35 minutes to the same Penn Station. LaGuardia requires a bus to reach the subway.",
  },
  {
    question: "Is LaGuardia really the closest to Manhattan?",
    answer:
      "Yes — LaGuardia is 8 miles from Midtown, making it the closest by distance. A taxi or rideshare takes 25–45 minutes and costs $35–55. However, LGA has no rail connection. If you are taking public transit, the bus-to-subway combination takes 45–60 minutes — making Newark or JFK competitive despite being further away.",
  },
  {
    question: "Which airport has the fastest public transit to Manhattan?",
    answer:
      "Newark's NJ Transit to Penn Station (~40 min, ~$15) and JFK's AirTrain + LIRR to Penn Station (~35 min, ~$15) are nearly tied for speed. Newark's train is slightly more direct (no change at Jamaica). LaGuardia has no rail — the Q70 bus + subway takes 45–60 minutes.",
  },
  {
    question: "Which airport is best for Upper Manhattan (Harlem, Washington Heights)?",
    answer:
      "LaGuardia is best for Upper Manhattan. The M60 bus runs directly from LGA to 125th Street, connecting to the A/B/C/D and 4/5/6 subways. This is the most direct public transit route to Upper Manhattan of any NYC airport.",
  },
  {
    question: "Which airport is cheapest for Manhattan?",
    answer:
      "LaGuardia has the cheapest taxi/rideshare to Manhattan ($35–55) due to its proximity. JFK has a $70 flat-rate taxi. Newark taxis include a $17.50 surcharge. For public transit, JFK's AirTrain + Subway (~$8) is cheapest, followed by Newark NJ Transit (~$15) and LGA bus (~$3).",
  },
  {
    question: "Does rush hour change which airport is best?",
    answer:
      "Yes — significantly. LaGuardia's time advantage can disappear during rush hour when the Grand Central Parkway is gridlocked. A 25-minute taxi ride can become 60–90 minutes. Newark's NJ Transit and JFK's AirTrain + LIRR are largely unaffected by road traffic, making them more predictable during peak hours.",
  },
  {
    question: "Which airport is best for a late-night arrival to Manhattan?",
    answer:
      "JFK has the best 24-hour transit — the A subway runs all night. Newark's NJ Transit stops around 1am, after which you need a taxi or rideshare ($95–120). LaGuardia has no 24-hour transit — the M60 bus runs but with reduced frequency. A late-night taxi from LGA costs $40–55.",
  },
  {
    question: "How does Travelvus compare airports for Manhattan?",
    answer:
      "Travelvus builds a complete door-to-door comparison: airport transfer time and cost by neighbourhood, transit reliability, rush-hour impact, and late-night options. We use verified data from the MTA, NJ Transit, PANYNJ, and official airport operators.",
  },
];

export default function BestAirportForManhattan() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <HeroEditorial
          category="Neighbourhood Guide"
          question="Best Airport for Manhattan: JFK, Newark or LaGuardia?"
          subtitle="If your destination is Manhattan, the right airport depends on where in Manhattan you are going — Midtown, Downtown, Upper East or Upper West Side. Distance alone does not decide."
          metadata={{ readTime: "7 min read", reviewedDate: "Jul 2026", verified: true }}
          decisionCard={{
            winner: "Newark wins for Midtown · LGA for Upper Manhattan",
            timeSaved: "~25 min train to Penn",
            moneySaved: "From ~$15 NJ Transit",
            bestFor: "Newark: Midtown West. LGA: Upper East/Upper West. JFK: late-night arrivals.",
            confidence: "clear",
          }}
          visual={{
            type: "airport-map",
            data: {
              cityName: "Midtown Manhattan",
              airports: [
                { code: "EWR", name: "Newark", distance: "16 mi W — NJ Transit to Penn", isWinner: true },
                { code: "LGA", name: "LaGuardia", distance: "8 mi E — bus to subway" },
                { code: "JFK", name: "JFK", distance: "15 mi SE — AirTrain + LIRR" },
              ],
            },
          }}
          snapshot={[
            { label: "Best for Midtown", value: "Newark" },
            { label: "Best for Upper Manhattan", value: "LaGuardia" },
            { label: "Best 24-hour transit", value: "JFK" },
          ]}
          cta={{ label: "Compare your own trip →", href: "/#compare" }}
        />

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
            <MobileTOC items={TOC_ITEMS.map((label, i) => ({ label, anchor: `#section-${i}` }))} />
          </div>

          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers whose final destination is Manhattan</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which of the three NYC airports creates the best door-to-door journey for your Manhattan destination</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Midtown → Newark. Upper Manhattan → LaGuardia. Late-night → JFK. Your neighbourhood changes the answer.</div></div>
            </div>

            <h2 id="section-0">Who this guide is for</h2>
            <p>You are flying to New York and your final destination is Manhattan. You can choose between JFK, Newark, and LaGuardia. All three serve the New York area — but which one gets you to your Manhattan address fastest, cheapest, and with the least friction? This guide compares them by neighbourhood, transit type, and time of day.</p>

            <h2 id="section-1">The 30-second answer</h2>
            <p><strong>Newark wins for Midtown Manhattan.</strong> NJ Transit delivers you directly to Penn Station at 34th Street — the most central rail terminal of any NYC airport. <strong>LaGuardia wins for Upper Manhattan</strong> — it is closest to the Upper East and Upper West Side, and the M60 bus connects directly to 125th Street. <strong>JFK wins for late-night arrivals and Downtown Manhattan</strong> — the A subway runs 24 hours and serves Lower Manhattan directly. No single airport wins for all of Manhattan. Your neighbourhood chooses your airport.</p>

            <h2 id="section-2">Why the closest airport is not always best</h2>
            <p>LaGuardia is 8 miles from Midtown — half the distance of JFK and Newark. But distance is misleading. LGA has <strong>no rail connection</strong>. You take a bus to reach the subway. Newark is 16 miles away — but the NJ Transit train goes directly from the airport to Penn Station in ~25 minutes of train time. <strong>A direct rail connection beats a shorter distance every time.</strong> The quality of the transit link matters more than the mileage.</p>

            {/* Transfer comparison table */}
            <h2 id="section-3">Transfer comparison: all three airports to Midtown Manhattan</h2>
            <table className={styles.compTable}>
              <thead><tr><th>Factor</th><th>Newark (EWR)</th><th>JFK</th><th>LaGuardia (LGA)</th></tr></thead>
              <tbody>
                <tr><td>Distance from Midtown</td><td>16 miles</td><td>15 miles</td><td><strong>8 miles</strong></td></tr>
                <tr><td>Fastest rail to Midtown</td><td><strong>NJ Transit ~40 min, ~$15</strong></td><td>AirTrain + LIRR ~35 min, ~$15</td><td>No rail — bus to subway</td></tr>
                <tr><td>Cheapest public transit</td><td>~$15</td><td><strong>AirTrain + Subway ~$8</strong></td><td>Q70 bus + Subway ~$3</td></tr>
                <tr><td>Taxi to Midtown</td><td>$65–85 + surcharge (~$95–120)</td><td>$70 flat + tolls (~$85–95)</td><td><strong>$35–55</strong></td></tr>
                <tr><td>Rideshare</td><td>$55–85</td><td>$55–80</td><td><strong>$35–55</strong></td></tr>
                <tr><td>24-hour transit</td><td>No — stops ~1am</td><td><strong>Yes — A subway 24/7</strong></td><td>Limited night bus</td></tr>
                <tr><td>Rush-hour risk</td><td>Low — rail unaffected</td><td>Low — rail unaffected</td><td><strong>High — road traffic</strong></td></tr>
              </tbody>
            </table>

            {/* Best by neighbourhood */}
            <h2 id="section-4">Best airport by Manhattan neighbourhood</h2>
            <table className={styles.compTable}>
              <thead><tr><th>Neighbourhood</th><th>Best airport</th><th>Why</th></tr></thead>
              <tbody>
                <tr><td>Midtown West (Hudson Yards, Hell&rsquo;s Kitchen)</td><td><strong>Newark</strong></td><td>NJ Transit to Penn Station — walk to most Midtown West hotels</td></tr>
                <tr><td>Midtown East (Grand Central, Murray Hill)</td><td><strong>Newark</strong></td><td>Penn Station to Grand Central in 10 min via subway or 15 min walk</td></tr>
                <tr><td>Upper East Side</td><td><strong>LaGuardia</strong></td><td>Closest airport — taxi/rideshare in 25–40 min, $35–50</td></tr>
                <tr><td>Upper West Side</td><td><strong>LaGuardia</strong></td><td>M60 bus to 125th St, then 1 train downtown. Taxi also fast off-peak.</td></tr>
                <tr><td>Financial District / Wall Street</td><td><strong>JFK</strong></td><td>A train from Howard Beach direct to Fulton Street in ~55 min</td></tr>
                <tr><td>Chelsea / Greenwich Village</td><td><strong>Newark</strong></td><td>Penn Station to 14th Street via subway in 5–10 min</td></tr>
                <tr><td>Harlem / Washington Heights</td><td><strong>LaGuardia</strong></td><td>M60 bus direct to 125th St — the most direct airport transit to Upper Manhattan</td></tr>
                <tr><td>Lower East Side / East Village</td><td><strong>JFK</strong></td><td>A train or AirTrain + LIRR to Penn, then subway east</td></tr>
              </tbody>
            </table>

            {/* Worked example */}
            <h2 id="section-5">Worked example: arriving at Midtown Manhattan</h2>
            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Illustrative example</span>
              <p className={styles.warningBoxBody}>The numbers below are illustrative. Transfer times and costs vary by time of day, traffic, and exact destination within Manhattan.</p>
            </div>

            <div className={styles.workedExample}>
              <div className={styles.workedExampleHd}><span>Newark</span><span>vs</span><span>JFK</span><span>vs</span><span>LaGuardia</span></div>
              <div className={styles.workedExampleHd}>
                <span style={{ color: "var(--muted)" }}>Illustrative example · Arriving at Midtown Manhattan, 3pm weekday</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span className={styles.workedExampleDot} />Calculated now</span>
              </div>
              <div className={styles.workedCols}>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}><span className={styles.workedColLabel}>Option A · Newark</span><span className={`${styles.workedBadge} ${styles.workedBadgeWin}`}>A</span></div>
                  <div className={styles.workedRow}><span>Baggage + walking</span><span className={styles.workedRowAmount}>~15 min</span></div>
                  <div className={styles.workedRow}><span>AirTrain to NJ Transit</span><span className={styles.workedRowAmount}>~10 min</span></div>
                  <div className={styles.workedRow}><span>NJ Transit to Penn Station</span><span className={styles.workedRowAmount}>~25 min</span></div>
                  <div className={styles.workedRow}><span>Walk to Midtown hotel</span><span className={styles.workedRowAmount}>~10 min</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Transfer total</span><span className={styles.workedTotalWin}>~60 min · ~$15</span></div>
                </div>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}><span className={styles.workedColLabel}>Option B · JFK</span><span className={`${styles.workedBadge} ${styles.workedBadgeLose}`}>B</span></div>
                  <div className={styles.workedRow}><span>Baggage + walking</span><span className={styles.workedRowAmount}>~20 min</span></div>
                  <div className={styles.workedRow}><span>AirTrain to Jamaica</span><span className={styles.workedRowAmount}>~10 min</span></div>
                  <div className={styles.workedRow}><span>LIRR to Penn Station</span><span className={styles.workedRowAmount}>~20 min</span></div>
                  <div className={styles.workedRow}><span>Walk to Midtown hotel</span><span className={styles.workedRowAmount}>~10 min</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Transfer total</span><span className={styles.workedTotalLose}>~60 min · ~$15</span></div>
                </div>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}><span className={styles.workedColLabel}>Option C · LaGuardia</span></div>
                  <div className={styles.workedRow}><span>Baggage + walking</span><span className={styles.workedRowAmount}>~15 min</span></div>
                  <div className={styles.workedRow}><span>Q70 bus to Jackson Heights</span><span className={styles.workedRowAmount}>~15 min</span></div>
                  <div className={styles.workedRow}><span>E train to Midtown</span><span className={styles.workedRowAmount}>~25 min</span></div>
                  <div className={styles.workedRow}><span>Walk to Midtown hotel</span><span className={styles.workedRowAmount}>~10 min</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Transfer total</span><span className={styles.workedTotalLose}>~65 min · ~$3</span></div>
                </div>
              </div>
              <div className={styles.workedFooter}>Newark and JFK are tied on time to Midtown (~60 min). LaGuardia takes slightly longer by public transit (~65 min) but is the cheapest (~$3). <strong>For Midtown, Newark wins on transit experience — a single-seat train ride with no bus connection.</strong></div>
            </div>

            <div className={styles.bridge}><div className={styles.bridgeRule} /><span className={styles.bridgeText}>Based on this, Travelvus concludes:</span><div className={styles.bridgeRule} /></div>

            <TravelvusVerdict
              verdictLine="Newark wins for Midtown Manhattan."
              stats={[
                { label: "Newark transfer time", value: "60", unit: "min" },
                { label: "LaGuardia cheapest", value: "3", unit: "$", accent: true },
                { label: "JFK + Newark tied", value: "60", unit: "min" },
              ]}
            />

            <h2 id="section-6">When LaGuardia wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are staying on the Upper East or Upper West Side.</strong> LGA is closest — a taxi takes 25–40 minutes off-peak and costs $35–50.</li>
              <li><strong>You are taking a taxi or rideshare, not public transit.</strong> LGA has the cheapest car journeys to Manhattan of any NYC airport.</li>
              <li><strong>You are travelling during off-peak hours.</strong> The Grand Central Parkway is fast outside rush hour — but gridlocked during it.</li>
              <li><strong>You want the absolute cheapest public transit.</strong> The Q70 bus is free, and a subway ride is $2.90 — total ~$3.</li>
            </ul>

            <h2 id="section-7">When Newark wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are staying in Midtown Manhattan near Penn Station.</strong> NJ Transit drops you at 34th Street — the most central location of any airport train.</li>
              <li><strong>You value a predictable, traffic-free rail journey.</strong> Trains are immune to the Grand Central Parkway, Lincoln Tunnel, and Midtown gridlock.</li>
              <li><strong>You fly United Airlines.</strong> Newark is United's hub — if you are loyal to United, Newark is almost certainly your airport.</li>
              <li><strong>You are heading to the West Side or Chelsea.</strong> Penn Station is on the West Side — short walk or one subway stop to most West Side destinations.</li>
            </ul>

            <h2 id="section-8">When JFK wins</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are arriving late at night.</strong> The A subway runs 24/7. Newark's NJ Transit stops around 1am. JFK is the only NYC airport with true 24-hour rail transit to Manhattan.</li>
              <li><strong>You are staying in Lower Manhattan (Financial District, Battery Park).</strong> The A train goes directly from Howard Beach to Fulton Street — no Midtown detour needed.</li>
              <li><strong>You fly Delta, JetBlue, or a non-United international carrier.</strong> JFK has the widest choice of airlines and international routes of any NYC airport.</li>
              <li><strong>You want the cheapest rail option.</strong> AirTrain + Subway (~$8) is cheaper than NJ Transit (~$15) — though slower at ~60 minutes.</li>
            </ul>

            {/* Rush hour reality */}
            <h2 id="section-9">Rush hour reality</h2>
            <p>Traffic changes everything. During weekday rush hours (7–10am, 4–7pm), the Grand Central Parkway, Long Island Expressway, and Lincoln Tunnel are heavily congested. LaGuardia's time advantage can disappear completely — a 25-minute taxi ride can become 60–90 minutes. Newark's NJ Transit and JFK's AirTrain + LIRR are unaffected by road traffic. <strong>If you are arriving during rush hour, choose a rail-connected airport.</strong></p>

            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Rush hour tip</span>
              <p className={styles.warningBoxBody}>Between 4pm and 7pm on weekdays, a taxi from LaGuardia to Midtown can take over an hour. The NJ Transit train from Newark takes exactly the same ~25 minutes regardless of traffic. During peak hours, Newark's rail connection is the most reliable option for Manhattan.</p>
            </div>

            <h2 id="section-10">FAQ</h2>
            <FAQAccordion items={FAQ_ITEMS} />

            <h2 id="section-11">Compare your own journey</h2>
            <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.5, color: "var(--ink)", marginBottom: 24 }}>
              Midtown, Downtown, Upper East or Upper West — your Manhattan neighbourhood changes which airport wins. Compare your own flights with the Travelvus Decision Engine to see the real door-to-door journey.
            </p>

            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.4, color: "var(--paper)" }}>Compare your complete journey — door to door.</span>
              </div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>

            <div className={styles.relatedGuides}>
              <h2 className={styles.relatedGuidesTitle}>Continue your decision</h2>
              <div className={styles.relatedGuidesGrid}>
                <Link href="/guides/jfk-vs-newark" className={styles.relatedGuideCard}>
                  <span className={styles.relatedGuideCardKicker}>Flagship Guide</span>
                  <span className={styles.relatedGuideCardTitle}>JFK vs Newark</span>
                  <span className={styles.relatedGuideCardText}>The complete decision guide for New York's two international hubs.</span>
                </Link>
                <Link href="/new-york-airports" className={styles.relatedGuideCard}>
                  <span className={styles.relatedGuideCardKicker}>Decision Hub</span>
                  <span className={styles.relatedGuideCardTitle}>New York Airport Decisions</span>
                  <span className={styles.relatedGuideCardText}>Explore the complete New York airport ecosystem.</span>
                </Link>
                <Link href="/guides/total-travel-time-comparison" className={styles.relatedGuideCard}>
                  <span className={styles.relatedGuideCardKicker}>Time Guide</span>
                  <span className={styles.relatedGuideCardTitle}>Total Travel Time Comparison</span>
                  <span className={styles.relatedGuideCardText}>Flight duration is just one segment of the door-to-door journey.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer style={{ padding: "88px 48px 0", borderTop: "1px solid var(--line)", marginTop: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 56, paddingBottom: 56 }}>
            <div><span style={{ font: "700 20px/1 Geist, sans-serif", letterSpacing: "-.04em", color: "var(--ink)" }}>Travelvus</span><p style={{ font: "400 14px/1.6 Geist, sans-serif", color: "var(--muted)", margin: "16px 0 0", maxWidth: 280 }}>Decision engine for smarter air travel.</p></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Product</div><div style={{ display: "flex", flexDirection: "column", gap: 13 }}><Link href="/" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Compare</Link><Link href="/london-airports" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>London</Link><Link href="/new-york-airports" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>New York</Link><Link href="/methodology" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Methodology</Link></div></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Company</div><div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 28 }}><Link href="/about" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>About</Link><Link href="/contact" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Contact</Link></div></div>
          </div>
          <div style={{ borderTop: "1px solid var(--line)", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ font: "italic 400 15px/1 Instrument Serif, Georgia, serif", color: "var(--muted)" }}>Know the real cost before you book.</span><span style={{ font: "400 12px/1 IBM Plex Mono, monospace", color: "#9aa4ac" }}>&copy; 2026 Travelvus</span></div>
        </footer>
      </div>
    </div>
  );
}
