import type { Metadata } from "next";
import Link from "next/link";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import { HeroEditorial } from "@/components/hero";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "Heathrow vs Gatwick: The Complete Decision Guide | Travelvus",
  description: "Gatwick usually wins on money — but your destination determines by how much. A complete decision framework for choosing between London's two busiest airports.",
  alternates: { canonical: "/guides/heathrow-vs-gatwick" },
};

const TOC_ITEMS = [
  "Who this guide is for",
  "The 30-second answer",
  "Why the cheaper ticket can lose",
  "Worked example: Barcelona → London",
  "The verdict",
  "How Travelvus reasoned",
  "Best choice by destination",
  "Compare the numbers",
  "FAQ",
  "How we know this",
];

function GuidePage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header — shared HomeHeader with hamburger + mobile nav */}
        <HomeHeader />

        {/* Hero */}
        <HeroEditorial
          category="Airport Decision"
          question="Heathrow vs Gatwick: The Complete Decision Guide"
          subtitle="Gatwick usually wins on money — but your destination determines by how much."
          metadata={{ readTime: "8 min read", reviewedDate: "Oct 2026", verified: true }}
          decisionCard={{
            winner: "Gatwick usually wins on money",
            moneySaved: "€13–37 by destination",
            bestFor: "South and east London, leisure routes, carry-on travellers",
            avoidFor: "West London — Paddington is a near-tie",
            confidence: "context-dependent",
          }}
          visual={{ type: "airport-map", data: { cityName: "Central London", airports: [
            { code: "LHR", name: "Heathrow", distance: "24 km west" },
            { code: "LGW", name: "Gatwick", distance: "45 km south" },
          ]}}}
          snapshot={[
            { label: "Usually cheaper", value: "Gatwick" },
            { label: "Near-tie at", value: "Paddington" },
            { label: "Largest Gatwick lead", value: "€37" },
          ]}
          cta={{ label: "Compare your own trip →", href: "/#compare" }}
          decisionIntelligence={{ state: "conditionally_recommended", recommendation: "Gatwick — for most London destinations", summary: "Gatwick's cheaper fares usually outweigh its higher transfer cost. Paddington is the exception: with advance Heathrow Express fares the totals tie, and the illustrative example shows when Heathrow can still win.", advantages: ["Lower total trip for most destinations (€13–37 in our reference set)","Cheaper flights on comparable routes","Clear wins at Victoria, Canary Wharf and Clapham"], tradeoffs: [{ advantage: "Cheaper total trip", disadvantage: "Higher transfer cost and longer transit" },{ advantage: "Best for south and east London", disadvantage: "Further from west London and Paddington" }], flips: [{ condition: "You are heading to Paddington with advance Heathrow Express fares", result: "The totals tie — time and simplicity decide" },{ condition: "The fare gap is small and you check a bag", result: "Heathrow can win the total trip (see the illustrative example)" },{ condition: "Your destination is west London", result: "Heathrow's transfer advantage grows" }], limitations: [{ condition: "Late-night arrivals", impact: "Gatwick's trains stop earlier; a taxi can erase the saving" },{ condition: "Road traffic", impact: "Gatwick Express is unaffected; taxi times vary" }] }}
          evidence={{ factors: [
            { title: "Total journey cost", explanation: "Gatwick's fares are typically lower, and for most destinations the saving outweighs its higher transfer cost.", weight: "critical" },
            { title: "Transfer penalty", explanation: "Gatwick's transfer costs more and takes longer. At Paddington the penalty exactly cancels the fare advantage — a €0 tie.", weight: "critical" },
            { title: "Destination within London", explanation: "The margin changes by destination: €37 at Canary Wharf, €27 at Victoria, €13 at King's Cross, €0 at Paddington.", weight: "high" },
            { title: "Airport access", explanation: "Heathrow has three rail options, including the 15-minute Heathrow Express. Gatwick Express reaches Victoria in about 30 minutes.", weight: "high" },
            { title: "Airline choice", explanation: "Heathrow serves more airlines and routes. Gatwick is strong for easyJet and European leisure routes.", weight: "medium" },
          ], limitations: [
            "Changes if you are staying in south London — Gatwick is closer.",
            "Changes if you travel carry-on only — removing baggage narrows Gatwick's fare advantage.",
            "Changes if you fly easyJet — Gatwick is their primary London base.",
          ], trace: ["Airport access", "Transfer time", "Journey cost", "Traveller profile", "Recommendation"], strength: "Moderate" }}
        />

        {/* TOC + Content */}
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
              <div><div className={styles.decisionSummaryLabel}>Who it's for</div><div className={styles.decisionSummaryValue}>Travellers choosing between Heathrow and Gatwick</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which airport actually costs less, door to door</div></div>
              <div><div className={styles.decisionSummaryLabel}>When it matters</div><div className={styles.decisionSummaryValue}>When ticket prices are close but transfers differ</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>Your London destination changes the margin — Paddington is the near-tie</div></div>
            </div>

            {/* Section: Who this guide is for */}
            <h2 id="section-0">Who this guide is for</h2>
            <p>You found two flights to London. One lands at Heathrow. The other at Gatwick. The ticket prices look similar. But the airports are not. This guide teaches you how to compare them using total real cost — ticket, baggage, airport transfer, and door-to-door time. If you just want a fast answer, the next section gives you the 30-second version. If you want to understand the full reasoning, read straight through.</p>

            {/* Section: 30-second answer */}
            <h2 id="section-1">The 30-second answer</h2>
            <p>Gatwick usually wins on total cost — but your London destination changes the margin. At Canary Wharf, Gatwick wins by €37. At Paddington with advance Heathrow Express fares, the two airports tie exactly. At Victoria, Gatwick wins by a comfortable €27. If you live or are staying in east or south London, Gatwick is almost certainly the cheaper door-to-door choice. If you are heading to west London or need the speed and frequency of the Heathrow Express, Heathrow earns its premium.</p>

            {/* Warning */}
            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Important</span>
              <p className={styles.warningBoxBody}>These numbers use walk-up fares for airport transfers. If you book the Heathrow Express or Gatwick Express in advance, the transfer-cost difference narrows — and in some cases, Heathrow can become the cheaper total trip. Always check advance fares before deciding.</p>
            </div>

            {/* Section: Why the cheaper ticket can lose */}
            <h2 id="section-2">Why the cheaper ticket can lose</h2>
            <p>The ticket price is only part of the story. A flight landing at Gatwick might save you money on the fare — but cost more in airport transfer, plus extra journey time, once baggage and the door-to-door trip are counted. Travelvus adds every measurable cost so you can compare the real trip, not just the ticket. The table below shows the reference costs that underpin every comparison on this page.</p>

            {/* Comparison Table */}
            <table className={styles.compTable}>
              <thead><tr><th>Cost factor</th><th>Heathrow</th><th>Gatwick</th></tr></thead>
              <tbody>
                <tr><td>Transfer to central London</td><td>£6–£26</td><td>£15–£28</td></tr>
                <tr><td>Transfer time</td><td>15–60 min</td><td>30–60 min</td></tr>
                <tr><td>Heathrow Express</td><td>15 min · ~£26</td><td>—</td></tr>
                <tr><td>Gatwick Express</td><td>—</td><td>~30 min · ~£20 off-peak</td></tr>
                <tr><td>Checked bag (typical)</td><td>Included</td><td>+£25–£40</td></tr>
                <tr><td>Seat selection</td><td>£8–£15</td><td>£6–£12</td></tr>
                <tr><td>GBP→EUR conversion</td><td>1.17</td><td>1.17</td></tr>
              </tbody>
            </table>

            {/* Section: Worked Example */}
            <h2 id="section-3">Worked example: Barcelona → London</h2>
            <p><strong>Illustrative example.</strong> This scenario uses fixed sample fares — a Gatwick ticket £68 cheaper and one checked bag — so the arithmetic stays checkable. It is not a typical fare gap. The same two travellers, same date, two different airports. The ticket to Gatwick is cheaper. But is the total trip cheaper?</p>

            <div className={styles.workedExample}>
              <div className={styles.workedExampleHd}>
                <span>Option A</span>
                <span>vs</span>
                <span>Option B</span>
              </div>
              <div className={styles.workedExampleHd}>
                <span style={{ color: "var(--muted)" }}>Verified transfer data</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span className={styles.workedExampleDot} />Calculated now</span>
              </div>
              <div className={styles.workedCols}>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}>
                    <span className={styles.workedColLabel}>Option A · Gatwick</span>
                    <span className={`${styles.workedBadge} ${styles.workedBadgeLose}`}>A</span>
                  </div>
                  <div className={styles.workedRow}><span>Ticket</span><span className={styles.workedRowAmount}>£58</span></div>
                  <div className={styles.workedRow}><span>Cabin bag</span><span className={styles.workedRowAmount}>Included</span></div>
                  <div className={styles.workedRow}><span>Checked bag</span><span className={styles.workedRowAmount}>+£42</span></div>
                  <div className={styles.workedRow}><span>Airport transfer</span><span className={styles.workedRowAmount}>+£71</span></div>
                  <div className={styles.workedRow}><span>Door-to-door time</span><span className={styles.workedRowAmount}>3h 52m</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Real cost</span><span className={styles.workedTotalLose}>£171</span></div>
                </div>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}>
                    <span className={styles.workedColLabel}>Option B · Heathrow</span>
                    <span className={`${styles.workedBadge} ${styles.workedBadgeWin}`}>B</span>
                  </div>
                  <div className={styles.workedRow}><span>Ticket</span><span className={styles.workedRowAmount}>£126</span></div>
                  <div className={styles.workedRow}><span>Cabin bag</span><span className={styles.workedRowAmount}>Included</span></div>
                  <div className={styles.workedRow}><span>Checked bag</span><span className={styles.workedRowAmount}>Included</span></div>
                  <div className={styles.workedRow}><span>Airport transfer</span><span className={styles.workedRowAmount}>+£18</span></div>
                  <div className={styles.workedRow}><span>Door-to-door time</span><span className={styles.workedRowAmount}>2h 41m</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Real cost</span><span className={styles.workedTotalWin}>£144</span></div>
                </div>
              </div>
              <div className={styles.workedFooter}>In this illustrative example: £171 − £144 = £27 advantage. The transfer costs £53 more for Gatwick, but the ticket is £68 cheaper — so Heathrow wins on total cost by £27. Converted at 1.17: ≈ €31 saved by choosing Heathrow.</div>
            </div>

            {/* Anticipation Bridge + Verdict */}
            <div className={styles.bridge}>
              <div className={styles.bridgeRule} />
              <span className={styles.bridgeText}>Based on this illustrative example, Travelvus concludes:</span>
              <div className={styles.bridgeRule} />
            </div>

            <TravelvusVerdict
              verdictLine="Heathrow wins in this illustrative example."
              stats={[
                { label: "Example real cost", value: "144", unit: "£", accent: false },
                { label: "Example saving", value: "27", unit: "£", accent: true },
                { label: "Example time gain", value: "71", unit: "min faster", accent: false },
              ]}
            />

            {/* Decision Framework */}
            <h2 id="section-4">How Travelvus reasoned</h2>
            <div className={styles.framework}>
              <div className={styles.frameworkSpine} />
              <div className={styles.frameworkNode}>
                <div className={styles.frameworkNodeNum}>1</div>
                <div className={styles.frameworkNodeCard}>
                  <div className={styles.frameworkNodeLabel}>The cheaper ticket is more expensive</div>
                  <p className={styles.frameworkNodeBody}>In the illustrative example, Gatwick saves £68 on the ticket — but baggage and transfer add £113. The ticket advantage disappears once the full trip is counted.</p>
                </div>
              </div>
              <div className={styles.frameworkNode}>
                <div className={styles.frameworkNodeNum}>2</div>
                <div className={styles.frameworkNodeCard}>
                  <div className={styles.frameworkNodeLabel}>The transfer is the dominant variable</div>
                  <p className={styles.frameworkNodeBody}>In the illustrative example, the Heathrow transfer costs £18 and the Gatwick transfer costs £71 — a £53 gap. Transfer cost is the dominant variable, and it varies by your London destination.</p>
                </div>
              </div>
              <div className={styles.frameworkNode}>
                <div className={styles.frameworkNodeNum}>3</div>
                <div className={styles.frameworkNodeCard}>
                  <div className={styles.frameworkNodeLabel}>Destination changes the margin</div>
                  <p className={styles.frameworkNodeBody}>At Canary Wharf, Gatwick wins by €37. At Paddington with an advance Heathrow Express fare, the margin collapses to zero. The winner stays the same across our reference destinations — but the margin depends entirely on where you are going.</p>
                </div>
              </div>
              <div className={styles.frameworkNode}>
                <div className={styles.frameworkNodeNum} style={{ background: "var(--navy)", color: "var(--paper)", borderColor: "var(--navy)" }}>✓</div>
                <div className={styles.insightNode}>
                  <span className={styles.insightNodeLabel}>Travelvus Insight</span>
                  <p className={styles.insightNodeBody}>For most London destinations, Gatwick wins on total cost when fares are comparable — its cheaper flights outweigh the higher transfer charge. Paddington is the near-tie: advance Heathrow Express fares bring the totals level. Heathrow can still win the whole trip when the fare gap narrows and you check a bag — as the illustrative example shows.</p>
                </div>
              </div>
            </div>

            {/* Best/Worst Choice */}
            <h2 id="section-5">Best choice by destination</h2>
            <div className={styles.bestWorstGrid}>
              <div className={`${styles.bestWorstCard}`}>
                <span className={`${styles.bestWorstLabel} ${styles.bestWorstLabelBest}`}>Best choice</span>
                <div className={styles.bestWorstTitle}>Heathrow — for west London</div>
                <p className={styles.bestWorstText}>Paddington, Ealing, Hammersmith. The Heathrow Express and Elizabeth Line give Heathrow its strongest case here. At Paddington the full trips tie at about €303 each, and Heathrow wins clearly on time.</p>
              </div>
              <div className={`${styles.bestWorstCard} ${styles.bestWorstCardWorst}`}>
                <span className={`${styles.bestWorstLabel} ${styles.bestWorstLabelWorst}`}>Worst choice</span>
                <div className={styles.bestWorstTitle}>Gatwick — for west London</div>
                <p className={styles.bestWorstText}>Gatwick to west London means a train into central London plus a Tube connection — about 50–55 minutes — at a higher transfer cost. At Paddington the money ties, but Gatwick gives up the time advantage.</p>
              </div>
            </div>

            {/* Compare the numbers */}
            <h2 id="section-6">Compare the numbers</h2>
            <table className={styles.compTable}>
              <thead><tr><th>Destination</th><th>Heathrow total</th><th>Gatwick total</th><th>Winner</th><th>Margin</th></tr></thead>
              <tbody>
                <tr><td>Paddington</td><td>€303</td><td>€303</td><td>Tie</td><td>€0</td></tr>
                <tr><td>Victoria</td><td>€323</td><td>€296</td><td>Gatwick</td><td>€27</td></tr>
                <tr><td>Canary Wharf</td><td>€316</td><td>€279</td><td>Gatwick</td><td>€37</td></tr>
                <tr><td>Clapham</td><td>€300</td><td>€271</td><td>Gatwick</td><td>€29</td></tr>
                <tr><td>King's Cross</td><td>€294</td><td>€281</td><td>Gatwick</td><td>€13</td></tr>
              </tbody>
            </table>

            {/* Tip */}
            <div className={styles.tipBox}>
              <span className={styles.tipBoxLabel}>Tip</span>
              <p className={styles.tipBoxBody}>These are reference totals: two travellers, one checked bag each, off-peak walk-up transfers, converted at 1.17. Gatwick&rsquo;s fare advantage is about €34 before transfers, so it keeps the win unless the transfer penalty passes that line. A different fare gap or a carry-on-only trip moves the margin — Paddington is the case where it lands exactly on zero.</p>
            </div>

            {/* FAQ */}
            <h2 id="section-7">FAQ</h2>
            <FAQAccordion items={[
              { question: "Is Heathrow always more expensive on the ticket?", answer: "Not always. Heathrow has a wider range of airlines including budget carriers. For comparable routes and airlines, Heathrow tickets often cost more — in our reference comparison the gap is about €20 for two travellers — but it varies widely by airline and date." },
              { question: "Can I use Oyster or contactless at both airports?", answer: "Yes. Both Heathrow and Gatwick accept Oyster cards and contactless payment on TfL and National Rail services. Gatwick Express also accepts contactless but not Oyster." },
              { question: "What if I am travelling as a family or group?", answer: "Per-person costs remain the same, but the total saving multiplies. At Victoria, Gatwick&rsquo;s €27 advantage for two travellers becomes roughly €54 for a family of four. Heathrow Express group discounts can narrow this gap — always check advance fares." },
              { question: "Does the time of day matter?", answer: "Yes. Off-peak fares significantly reduce transfer costs for both airports. Late-night arrivals at Gatwick face limited train service and may require a taxi — which can flip the total-cost winner. Travelvus uses daytime off-peak fares in all comparisons unless stated otherwise." },
            ]} />

            {/* Methodology */}
            <div className={styles.methodBlock}>
              <span className={styles.methodBlockKicker}>How we know this</span>
              <p className={styles.methodBlockText}>All transfer costs are verified from official TfL and National Rail sources as of October 2026. Walk-up contactless and Oyster fares. Off-peak daytime rates. GBP converted to EUR at 1.17. The worked example above is explicitly illustrative and uses fixed sample fares; the destination table uses the reference trip model. Every number is measured identically for both options. The winner is always determined from exact values — never from rounded display numbers.</p>
              <Link href="/methodology" className={styles.methodBlockLink}>Read our methodology →</Link>
            </div>

            {/* Final Decision */}
            <div className={styles.finalDecision}>
              <span className={styles.finalDecisionKicker}>Final decision</span>
              <p className={styles.finalDecisionText}>For most London destinations, Gatwick is the cheaper total trip — its fare advantage is larger than the transfer penalty it carries. Paddington is the near-tie: with advance Heathrow Express fares the two airports level out, and Heathrow wins on time. Heathrow can also win the whole trip when the fare gap is small and you check a bag; Gatwick keeps the edge for south and east London.</p>
            </div>

            {/* CTA */}
            <div className={styles.ctaBlock}>
              <span className={styles.ctaBlockKicker}>You understand the framework</span>
              <div className={styles.ctaBlockQuestion}>Now see your own verdict.</div>
              <p className={styles.ctaBlockSub}>Bring two flights you already found. We'll compare the real trip.</p>
              <Link href="/#compare" className={styles.ctaBlockBtn}>Compare your flights →</Link>
            </div>

            {/* Related Guides */}
            <div className={styles.relatedGuides}>
              <Link href="/compare/heathrow-vs-stansted" className={styles.relatedGuideRow}>
                <div><div className={styles.relatedGuideTitle}>Heathrow vs Stansted</div><p className={styles.relatedGuideDesc}>The hidden real cost — when the budget ticket becomes the expensive trip</p></div>
                <span className={styles.relatedGuideCta}>Read →</span>
              </Link>
              <Link href="/compare/gatwick-vs-stansted" className={styles.relatedGuideRow}>
                <div><div className={styles.relatedGuideTitle}>Gatwick vs Stansted</div><p className={styles.relatedGuideDesc}>When a small saving requires personal judgment</p></div>
                <span className={styles.relatedGuideCta}>Read →</span>
              </Link>
              <Link href="/compare/paris-to-london" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Paris to London</div><p className={styles.relatedGuideDesc}>Heathrow or Gatwick from Paris CDG? The airport decision changes the journey.</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
              <Link href="/compare/barcelona-to-london" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Barcelona to London</div><p className={styles.relatedGuideDesc}>Heathrow, Gatwick or Stansted from Barcelona — which really wins?</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
              <Link href="/questions/london-airport-break-even" className={styles.relatedGuideRow}>
                <div><div className={styles.relatedGuideTitle}>London airport break-even question</div><p className={styles.relatedGuideDesc}>How much cheaper should a flight be to justify a different airport?</p></div>
                <span className={styles.relatedGuideCta}>Read →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ padding: "88px 48px 0", borderTop: "1px solid var(--line)", marginTop: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 56, paddingBottom: 56 }}>
            <div><span style={{ font: "700 20px/1 Geist, sans-serif", letterSpacing: "-.04em", color: "var(--ink)" }}>Travelvus</span><p style={{ font: "400 14px/1.6 Geist, sans-serif", color: "var(--muted)", margin: "16px 0 0", maxWidth: 280 }}>Decision engine for smarter air travel.</p></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Product</div><div style={{ display: "flex", flexDirection: "column", gap: 13 }}><Link href="/" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Compare</Link><Link href="/london-airports" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Airport Decisions</Link><Link href="/wego-flight" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Travel Guides</Link><Link href="/methodology" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Methodology</Link></div></div>
            <div><div style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa4ac", marginBottom: 18 }}>Company</div><div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 28 }}><Link href="/about" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>About</Link><Link href="/contact" style={{ color: "#4a5560", textDecoration: "none", font: "400 14px/1 Geist, sans-serif" }}>Contact</Link></div></div>
          </div>
          <div style={{ borderTop: "1px solid var(--line)", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ font: "italic 400 15px/1 Instrument Serif, Georgia, serif", color: "var(--muted)" }}>Know the real cost before you book.</span><span style={{ font: "400 12px/1 IBM Plex Mono, monospace", color: "#9aa4ac" }}>© 2026 Travelvus</span></div>
        </footer>
      </div>
    </div>
  );
}

export default GuidePage;
