import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import { HeroEditorial } from "@/components/hero";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "JFK vs Newark: Which New York Airport Is Actually Better? | Travelvus",
  description:
    "JFK or Newark? Compare real transfer times, total journey cost, airline choice, and door-to-door convenience. Which New York airport wins for your trip?",
  alternates: { canonical: "/guides/jfk-vs-newark" },
};

const TOC_ITEMS = [
  "Who this guide is for",
  "The 30-second answer",
  "Why the closest airport can lose",
  "Transfer comparison",
  "Worked example: two journeys compared",
  "The verdict",
  "How Travelvus reasoned",
  "When JFK is the better choice",
  "When Newark is the better choice",
  "By neighbourhood",
  "FAQ",
  "Compare your own journey",
];

const FAQ_ITEMS = [
  {
    question: "Which is better — JFK or Newark?",
    answer:
      "It depends on where you are going in New York, which airline you fly, and your priorities. Newark generally wins for Midtown Manhattan — NJ Transit to Penn Station is the fastest rail connection of any NYC airport. JFK wins for Brooklyn, Queens, and international travellers who value airline choice. There is no universal best.",
  },
  {
    question: "How long does it take from JFK to Midtown Manhattan?",
    answer:
      "AirTrain + LIRR takes ~35 minutes to Penn Station and costs ~$15. AirTrain + Subway (A/E) takes ~60 minutes and costs ~$8. A taxi takes 45–75 minutes with a $70 flat fare plus tolls and tip (~$85–95 total). Rideshare costs $55–80 depending on demand.",
  },
  {
    question: "How long does it take from Newark to Midtown Manhattan?",
    answer:
      "AirTrain + NJ Transit takes ~40 minutes total to Penn Station and costs ~$15. The train ride itself is only ~25 minutes. A taxi takes 35–60 minutes and costs $65–85 plus a $17.50 airport surcharge and tolls (~$95–120 total). Rideshare costs $55–85.",
  },
  {
    question: "Is Newark really in New York?",
    answer:
      "Newark Liberty International Airport is in Newark, New Jersey — not New York City. However, it is only 16 miles from Midtown Manhattan and the NJ Transit train connects directly to Penn Station in ~25 minutes. For many Manhattan destinations, Newark is faster than JFK despite being in a different state.",
  },
  {
    question: "Which airport has more flight options?",
    answer:
      "JFK has more airlines and international routes. Over 80 airlines serve ~200 destinations. Newark is dominated by United Airlines (~70% of flights) but still offers strong international and domestic coverage. If you are loyal to Delta, JetBlue, or a non-United international carrier, JFK is your airport. If you fly United, Newark is your hub.",
  },
  {
    question: "Which airport is cheaper to fly into?",
    answer:
      "Ticket prices are comparable between JFK and Newark for most routes, as both are major international airports with competitive pricing. The real cost difference comes from the airport transfer — Newark's NJ Transit (~$15) is cheaper than JFK's taxi ($70 flat) but similar to JFK's AirTrain + LIRR (~$15). Always compare the total door-to-door cost.",
  },
  {
    question: "Which airport is better for a connecting flight?",
    answer:
      "JFK generally offers more connection options due to its larger number of airlines and routes. However, Newark's smaller size and better on-time performance make connections more reliable there. If you are connecting through a United flight, Newark is seamless. For other airlines, JFK offers more choices.",
  },
  {
    question: "How does Travelvus compare JFK and Newark?",
    answer:
      "Travelvus builds a complete door-to-door comparison: origin-to-airport time, pre-flight time, flight duration, baggage collection, and airport-to-destination transfer. We use verified public transport data from the MTA, NJ Transit, and PANYNJ. For supported routes, the Comparison Engine calculates the real winner with your specific flight data.",
  },
];

export default function JFKvsNewarkGuide() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <HeroEditorial
          category="Airport Decision"
          question="JFK vs Newark: Which New York Airport Is Actually Better?"
          subtitle="Both are international hubs 15–16 miles from Midtown. But the transfer, the airline, and your destination in New York change which one wins."
          metadata={{ readTime: "8 min read", reviewedDate: "Jul 2026", verified: true }}
          decisionCard={{
            winner: "Newark wins for Midtown — JFK for Brooklyn",
            timeSaved: "~25 min faster to Penn",
            moneySaved: "From ~$15 NJ Transit",
            bestFor: "Newark: Midtown, United flyers. JFK: Brooklyn, international choice.",
            confidence: "too-close",
          }}
          visual={{
            type: "airport-map",
            data: {
              cityName: "Midtown Manhattan",
              airports: [
                { code: "JFK", name: "JFK", distance: "15 mi SE", isWinner: false },
                { code: "EWR", name: "Newark", distance: "16 mi W", isWinner: true },
                { code: "LGA", name: "LaGuardia", distance: "8 mi E" },
              ],
            },
          }}
          snapshot={[
            { label: "Fastest to Midtown", value: "Newark" },
            { label: "Most airlines", value: "JFK" },
            { label: "Best for Brooklyn", value: "JFK" },
          ]}
          cta={{ label: "Compare your own trip →", href: "/#compare" }}
          evidence={{ factors: [
            { title: "Transfer time to Midtown", explanation: "Newark's NJ Transit reaches Penn Station in ~25 min train. JFK's AirTrain + LIRR takes ~35 min. A 10-minute difference — negligible on a transatlantic journey.", weight: "critical" },
            { title: "Airline lock-in", explanation: "If you fly United, Newark is your airport (~70% of flights). If you fly Delta or JetBlue, JFK is yours. The airline often makes the decision for you.", weight: "critical" },
            { title: "Destination in New York", explanation: "JFK wins for Brooklyn and Queens. Newark wins for Midtown West and New Jersey. Your neighbourhood changes the answer.", weight: "high" },
            { title: "Total journey time", explanation: "In our illustrative example: JFK 785 min, Newark 790 min. A 5-minute difference over 13 hours. Effectively tied on time.", weight: "high" },
            { title: "Late-night arrivals", explanation: "JFK's A subway runs 24/7. NJ Transit stops around 1am. For late arrivals, JFK has the edge.", weight: "medium" },
          ], limitations: [
            "Changes if you fly United — Newark becomes the default.",
            "Changes if you are staying in Brooklyn — JFK is closer.",
            "Changes if you arrive after midnight — JFK has 24-hour transit.",
          ], trace: ["Airline choice", "Destination", "Transfer time", "Total journey", "Recommendation"], strength: "Too close to call — airline and neighbourhood decide" }}
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
            {/* Decision Summary */}
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it&rsquo;s for</div><div className={styles.decisionSummaryValue}>Travellers choosing between JFK and Newark</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport creates the better door-to-door journey</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Newark wins for Midtown. JFK wins for Brooklyn and Queens. Your airline may choose for you.</div></div>
            </div>

            {/* Who this guide is for */}
            <h2 id="section-0">Who this guide is for</h2>
            <p>You are flying to New York and choosing between JFK and Newark. Both are major international airports. Both are 15–16 miles from Midtown Manhattan. The ticket prices are often similar. But the transfer experience, the airline options, and where you are staying in New York change which airport is actually better. This guide compares them on total journey time, transfer cost, convenience, and neighbourhood fit.</p>

            {/* 30-second answer */}
            <h2 id="section-1">The 30-second answer</h2>
            <p><strong>Newark wins for Midtown Manhattan</strong> — NJ Transit to Penn Station is the fastest rail connection of any New York airport, reaching 34th Street in ~25 minutes of train time. <strong>JFK wins for Brooklyn, Queens, and international travellers who want maximum airline choice.</strong> Both airports are well-connected. The right answer depends on where you are staying in New York and which airline you fly. If you fly United, Newark is your hub. If you fly Delta, JetBlue, or almost any other international carrier, JFK is your airport.</p>

            {/* Why the closest airport can lose */}
            <h2 id="section-2">Why the closest airport is not always the best</h2>
            <p>JFK and Newark are almost exactly the same distance from Midtown Manhattan — JFK at 15 miles, Newark at 16. But distance is misleading. Newark's NJ Transit train goes directly from the airport to Penn Station in Midtown. JFK requires the AirTrain to Jamaica Station, then the LIRR or Subway — an extra step that adds time. A shorter distance does not guarantee a faster journey. The quality and directness of the transit connection matters more than the mileage.</p>

            {/* Transfer comparison */}
            <h2 id="section-3">Transfer comparison: JFK vs Newark to Midtown</h2>
            <table className={styles.compTable}>
              <thead><tr><th>Transfer option</th><th>JFK</th><th>Newark</th></tr></thead>
              <tbody>
                <tr><td>Fastest rail</td><td>AirTrain + LIRR (~35 min, ~$15)</td><td>AirTrain + NJ Transit (~40 min, ~$15)</td></tr>
                <tr><td>Cheapest public transit</td><td>AirTrain + Subway A/E (~60 min, ~$8)</td><td>NJ Transit alone (~$15)</td></tr>
                <tr><td>Taxi</td><td>$70 flat + tolls/tip (~$85–95)</td><td>Metered + $17.50 surcharge (~$95–120)</td></tr>
                <tr><td>Rideshare</td><td>$55–80</td><td>$55–85</td></tr>
                <tr><td>Rail frequency</td><td>Every 5–10 min</td><td>Every 15–30 min</td></tr>
                <tr><td>24-hour transit</td><td>Subway A train (limited night service)</td><td>No — NJ Transit stops ~1am</td></tr>
              </tbody>
            </table>

            {/* Worked example */}
            <h2 id="section-4">Worked example: two journeys compared</h2>
            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Illustrative example</span>
              <p className={styles.warningBoxBody}>The numbers below are illustrative and demonstrate the comparison method. They are not live schedules, current transfer times, or real-time pricing. Replace these values with your own journey when comparing real flights.</p>
            </div>

            <div className={styles.workedExample}>
              <div className={styles.workedExampleHd}><span>Option A</span><span>vs</span><span>Option B</span></div>
              <div className={styles.workedExampleHd}>
                <span style={{ color: "var(--muted)" }}>Illustrative example · London → New York</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span className={styles.workedExampleDot} />Calculated now</span>
              </div>
              <div className={styles.workedCols}>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}><span className={styles.workedColLabel}>Option A · JFK</span><span className={`${styles.workedBadge} ${styles.workedBadgeLose}`}>A</span></div>
                  <div className={styles.workedRow}><span>Home → London airport</span><span className={styles.workedRowAmount}>~45 min</span></div>
                  <div className={styles.workedRow}><span>Check-in + security</span><span className={styles.workedRowAmount}>3h before departure</span></div>
                  <div className={styles.workedRow}><span>Flight LHR → JFK</span><span className={styles.workedRowAmount}>~8h 00m</span></div>
                  <div className={styles.workedRow}><span>Immigration + baggage</span><span className={styles.workedRowAmount}>~45 min</span></div>
                  <div className={styles.workedRow}><span>JFK → Midtown (AirTrain + LIRR)</span><span className={styles.workedRowAmount}>~35 min</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Total journey time</span><span className={styles.workedTotalLose}>13h 05m</span></div>
                </div>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}><span className={styles.workedColLabel}>Option B · Newark</span><span className={`${styles.workedBadge} ${styles.workedBadgeWin}`}>B</span></div>
                  <div className={styles.workedRow}><span>Home → London airport</span><span className={styles.workedRowAmount}>~45 min</span></div>
                  <div className={styles.workedRow}><span>Check-in + security</span><span className={styles.workedRowAmount}>3h before departure</span></div>
                  <div className={styles.workedRow}><span>Flight LHR → EWR</span><span className={styles.workedRowAmount}>~8h 05m</span></div>
                  <div className={styles.workedRow}><span>Immigration + baggage</span><span className={styles.workedRowAmount}>~40 min</span></div>
                  <div className={styles.workedRow}><span>Newark → Midtown (NJ Transit)</span><span className={styles.workedRowAmount}>~40 min</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Total journey time</span><span className={styles.workedTotalWin}>13h 10m</span></div>
                </div>
              </div>
              <div className={styles.workedFooter}>The total door-to-door journey is nearly identical — a 5-minute difference over 13 hours. <strong>The airport choice matters less than the airline, schedule, and where in New York you are heading.</strong></div>
            </div>

            <div className={styles.bridge}><div className={styles.bridgeRule} /><span className={styles.bridgeText}>Based on this, Travelvus concludes:</span><div className={styles.bridgeRule} /></div>

            {/* Verdict */}
            <TravelvusVerdict
              verdictLine="Too close to call on time alone."
              stats={[
                { label: "JFK total journey", value: "785", unit: "min" },
                { label: "Newark total journey", value: "790", unit: "min" },
                { label: "Difference", value: "5", unit: "min", accent: true },
              ]}
            />

            {/* How Travelvus reasoned */}
            <h2 id="section-5">How Travelvus reasoned</h2>
            <p>Travelvus built complete door-to-door timelines for both airports using the same stages, measured identically:</p>
            <ol style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>Start at the real departure point.</strong> Both options begin with ~45 minutes to the London departure airport. This is the same for both — the difference is on the New York side.</li>
              <li><strong>Add realistic pre-flight time.</strong> Both require arriving 3 hours before a long-haul international departure.</li>
              <li><strong>Include the full flight.</strong> LHR→JFK is ~8h 00m. LHR→EWR is ~8h 05m. A 5-minute difference — negligible on a transatlantic flight.</li>
              <li><strong>Add immigration and baggage.</strong> JFK immigration averages ~45 minutes. Newark averages ~40 minutes — slightly faster due to lower passenger volume.</li>
              <li><strong>Add the final transfer.</strong> JFK to Midtown via AirTrain + LIRR: ~35 min. Newark via AirTrain + NJ Transit: ~40 min. The JFK LIRR is slightly faster than the NJ Transit train.</li>
              <li><strong>Compare the totals.</strong> JFK: ~785 min. Newark: ~790 min. A 5-minute difference. On a 13-hour journey, the airports are effectively tied on time. <strong>The decision should be based on airline, schedule, price, and where in New York you are staying — not the airport transfer alone.</strong></li>
            </ol>

            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Terminal insight</span>
              <p className={styles.warningBoxBody}>JFK and Newark are so close on total journey time that other factors — airline preference, flight schedule, ticket price, and your New York destination — should drive your decision. Do not choose based on the airport transfer alone. Choose based on the complete journey.</p>
            </div>

            {/* When JFK is better */}
            <h2 id="section-6">When JFK is the better choice</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are staying in Brooklyn or Queens.</strong> The AirTrain + A train serves these boroughs directly.</li>
              <li><strong>You fly Delta, JetBlue, or a non-United international carrier.</strong> JFK has over 80 airlines versus Newark's United-dominated terminals.</li>
              <li><strong>You want the widest choice of flight times and routes.</strong> JFK has ~67% more international routes than Newark.</li>
              <li><strong>You are arriving very late at night.</strong> The A subway runs 24/7. NJ Transit stops around 1am.</li>
              <li><strong>You want the cheapest possible public transit.</strong> AirTrain + Subway is ~$8 versus ~$15 for NJ Transit.</li>
            </ul>

            {/* When Newark is better */}
            <h2 id="section-7">When Newark is the better choice</h2>
            <ul style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.7, color: "#4a5560", marginBottom: 18, paddingLeft: 22 }}>
              <li><strong>You are staying in Midtown Manhattan near Penn Station.</strong> NJ Transit drops you at 34th Street — the most central location of any airport train.</li>
              <li><strong>You fly United Airlines.</strong> Newark is United's East Coast hub — ~70% of flights. Seamless connections and better schedules.</li>
              <li><strong>You value on-time performance.</strong> Newark consistently has the best on-time record of the three NYC airports.</li>
              <li><strong>You are heading to New Jersey.</strong> Newark is in New Jersey — the only logical choice for Jersey City, Hoboken, or Newark itself.</li>
              <li><strong>You want the most predictable rail journey.</strong> NJ Transit to Penn Station is direct — no changing at Jamaica Station like JFK's AirTrain connection.</li>
            </ul>

            {/* Neighbourhood guide */}
            <h2 id="section-8">Best airport by New York neighbourhood</h2>
            <table className={styles.compTable}>
              <thead><tr><th>Neighbourhood</th><th>Best airport</th><th>Why</th></tr></thead>
              <tbody>
                <tr><td>Midtown Manhattan (Times Square, Hudson Yards)</td><td><strong>Newark</strong></td><td>NJ Transit direct to Penn Station — the best rail connection</td></tr>
                <tr><td>Financial District / Wall Street</td><td><strong>Newark</strong></td><td>NJ Transit to Penn, then express subway downtown</td></tr>
                <tr><td>Upper East / Upper West Side</td><td><strong>Newark</strong></td><td>Penn Station to Uptown subway in ~15 min</td></tr>
                <tr><td>Williamsburg / Greenpoint</td><td><strong>JFK</strong></td><td>AirTrain to A train serves Brooklyn directly</td></tr>
                <tr><td>Park Slope / Brooklyn Heights</td><td><strong>JFK</strong></td><td>A train to Jay Street in ~50 min from JFK</td></tr>
                <tr><td>DUMBO / Downtown Brooklyn</td><td><strong>JFK</strong></td><td>A train or AirTrain + LIRR to Atlantic Terminal</td></tr>
                <tr><td>Long Island City / Astoria</td><td><strong>JFK</strong></td><td>Closest to Queens — AirTrain + subway connections</td></tr>
                <tr><td>Jersey City / Hoboken</td><td><strong>Newark</strong></td><td>Only logical choice for New Jersey</td></tr>
              </tbody>
            </table>

            {/* FAQ */}
            <h2 id="section-9">FAQ</h2>
            <FAQAccordion items={FAQ_ITEMS} />

            {/* Final CTA */}
            <h2 id="section-10">Compare your own journey</h2>
            <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.5, color: "var(--ink)", marginBottom: 24 }}>
              JFK and Newark are separated by only 5 minutes of total journey time in our illustrative example. The right airport depends on your airline, your New York destination, and your priorities. Compare your own flights to see which really wins.
            </p>

            <div style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--copper-lt)", display: "block", marginBottom: 6 }}>Travelvus</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.4, color: "var(--paper)" }}>Compare your complete journey — door to door.</span>
              </div>
              <Link href="/#compare" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--paper)", background: "var(--copper)", borderRadius: "var(--radius-button)", padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap" }}>Reveal the real winner</Link>
            </div>

            {/* Related Guides */}
            <div className={styles.relatedGuides}>
              <h2 className={styles.relatedGuidesTitle}>Continue your decision</h2>
              <div className={styles.relatedGuidesGrid}>
                <Link href="/new-york-airports" className={styles.relatedGuideCard}>
                  <span className={styles.relatedGuideCardKicker}>Decision Hub</span>
                  <span className={styles.relatedGuideCardTitle}>New York Airport Decisions</span>
                  <span className={styles.relatedGuideCardText}>Explore the complete New York airport ecosystem.</span>
                </Link>
                <Link href="/guides/real-cost-of-a-flight" className={styles.relatedGuideCard}>
                  <span className={styles.relatedGuideCardKicker}>Cost Guide</span>
                  <span className={styles.relatedGuideCardTitle}>How to Compare Two Flights Properly</span>
                  <span className={styles.relatedGuideCardText}>The ticket price is never the full story.</span>
                </Link>
                <Link href="/guides/total-travel-time-comparison" className={styles.relatedGuideCard}>
                  <span className={styles.relatedGuideCardKicker}>Time Guide</span>
                  <span className={styles.relatedGuideCardTitle}>Total Travel Time Comparison</span>
                  <span className={styles.relatedGuideCardText}>Flight duration is just one segment of the journey.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
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
