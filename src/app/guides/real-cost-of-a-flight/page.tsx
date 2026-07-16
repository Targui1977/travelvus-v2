import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import TravelvusVerdict from "@/components/guide/TravelvusVerdict";
import FAQAccordion from "@/components/guide/FAQAccordion";
import MobileTOC from "@/components/guide/MobileTOC";
import { HeroEditorial } from "@/components/hero";
import styles from "@/components/guide/guide.module.css";

export const metadata: Metadata = {
  title: "How to Compare Two Flights Properly: The Real Cost of a Flight | Travelvus",
  description: "The ticket price is not the trip cost. Learn how to compare the real cost of two flights — ticket, baggage, airport transfers, schedule costs, and time.",
  alternates: { canonical: "/guides/real-cost-of-a-flight" },
};

const TOC_ITEMS = [
  "Why the ticket price lies",
  "Every hidden cost",
  "The Real Cost Formula",
  "Worked example: two flights compared",
  "The verdict",
  "How Travelvus reasoned",
  "Solo vs group travel",
  "When the cheapest ticket wins",
  "When paying more is smarter",
  "FAQ",
  "Compare your own journey",
];

export default function RealCostGuide() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <HeroEditorial
          category="Cost Guide"
          question="How to compare two flights properly"
          subtitle="The ticket price shows one number. The real trip costs much more. Here is the framework that reveals which flight actually costs less."
          metadata={{ readTime: "9 min read", reviewedDate: "Jul 2026", verified: true }}
          decisionCard={{
            winner: "Heathrow wins in the worked example",
            timeSaved: "85 min faster",
            moneySaved: "€46 saved",
            bestFor: "Travellers comparing two apparently different fares",
            confidence: "high",
          }}
          visual={{ type: "real-cost", data: { segments: [
            { label: "Ticket", amount: 58 },
            { label: "Baggage", amount: 42 },
            { label: "Transfer", amount: 71 },
            { label: "Schedule", amount: 33 },
          ], showLiveTag: true }}}
          snapshot={[
            { label: "Ticket price alone", value: "Misleading" },
            { label: "Real cost winner", value: "Heathrow" },
            { label: "Biggest hidden factor", value: "Transfers" },
          ]}
          cta={{ label: "Compare your own flights →", href: "/#compare" }}
          evidence={{ factors: [
            { title: "Baggage and extras", explanation: "The apparent cheapest ticket changes when mandatory extras — checked baggage, seat selection — are added to the total.", weight: "critical" },
            { title: "Airport transfers", explanation: "Ground transport from the airport to the destination can outweigh the original fare difference between two flights.", weight: "critical" },
            { title: "Schedule-related costs", explanation: "Very early or late flights can introduce taxis, hotels or lost usable time that change the real cost.", weight: "high" },
            { title: "Complete journey cost", explanation: "Our comparison uses all journey costs — ticket, baggage, transfers, schedule — rather than ticket price alone.", weight: "high" },
            { title: "Journey time", explanation: "The cheaper complete option may also reduce total travel time, but this is not guaranteed.", weight: "medium" },
          ], limitations: [
            "The worked example is illustrative, not a live fare.",
            "Hand-luggage-only travel can change the result.",
            "Transfer prices vary by date and booking method.",
            "Personal time value is not universal.",
          ], trace: ["Ticket", "Baggage and extras", "Ground transfers", "Schedule costs", "Real trip cost"], strength: "Strong for the worked example" }}
        />

        <div className={styles.tocRail}>
          <div>
            <div className={styles.tocSticky}>
              <ul>{TOC_ITEMS.map((item, i) => (<li key={i} className={i === 0 ? styles.tocActive : ""}><a href={`#section-${i}`}>{item}</a></li>))}</ul>
            </div>
            <MobileTOC items={TOC_ITEMS.map((label, i) => ({ label, anchor: `#section-${i}` }))} />
          </div>

          <div className={styles.guideContent}>
            <div className={styles.decisionSummary}>
              <div><div className={styles.decisionSummaryLabel}>Who it's for</div><div className={styles.decisionSummaryValue}>Anyone comparing two flight options</div></div>
              <div><div className={styles.decisionSummaryLabel}>Decision it solves</div><div className={styles.decisionSummaryValue}>Which flight actually costs less, door to door</div></div>
              <div><div className={styles.decisionSummaryLabel}>When it matters</div><div className={styles.decisionSummaryValue}>Every time you book a flight</div></div>
              <div><div className={styles.decisionSummaryLabel}>Key takeaway</div><div className={styles.decisionSummaryValue}>The ticket price is never the full story</div></div>
            </div>

            <h2 id="section-0">Why the ticket price lies</h2>
            <p>You find two flights. One costs €58. The other costs €126. The choice seems obvious — book the cheaper one and save €68. But the €58 flight lands at an airport 70 kilometres from your destination. It charges €42 for a checked bag. It arrives at midnight, forcing an expensive taxi or an extra hotel night. The €126 flight includes baggage, lands at a closer airport with a fast train connection, and arrives in time for dinner. When you add up the total cost from your front door to your final destination, the cheapest ticket rarely produces the cheapest trip.</p>

            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Important</span>
              <p className={styles.warningBoxBody}>Flight search tools show ticket prices. They do not show total trip costs. The responsibility to compare the full journey is yours — unless you use a tool like Travelvus that does it for you.</p>
            </div>

            <h2 id="section-1">Every hidden cost people forget</h2>
            <p>Most travellers compare two numbers: the ticket price of Option A and the ticket price of Option B. But a dozen other costs stand between the ticket and the actual trip. Here is what most people forget:</p>

            <table className={styles.compTable}>
              <thead><tr><th>Cost factor</th><th>Typical range</th><th>Who forgets it</th></tr></thead>
              <tbody>
                <tr><td>Checked baggage</td><td>€15–€60 per bag</td><td>Budget airline passengers</td></tr>
                <tr><td>Cabin bag (when not included)</td><td>€10–€35</td><td>Short-haul travellers</td></tr>
                <tr><td>Seat selection</td><td>€5–€25 per seat</td><td>Families wanting to sit together</td></tr>
                <tr><td>Airport transfer — departure</td><td>€10–€50</td><td>Almost everyone</td></tr>
                <tr><td>Airport transfer — arrival</td><td>€10–€80</td><td>Almost everyone</td></tr>
                <tr><td>Late arrival taxi surcharge</td><td>€30–€120</td><td>Budget flight passengers</td></tr>
                <tr><td>Extra hotel night (late arrival)</td><td>€60–€150</td><td>Travellers arriving after midnight</td></tr>
                <tr><td>Airport parking (departure)</td><td>€20–€80</td><td>Drivers</td></tr>
                <tr><td>Meals during long layovers</td><td>€10–€30</td><td>Connecting flight passengers</td></tr>
                <tr><td>Time (valued or wasted)</td><td>Personal</td><td>Everyone</td></tr>
              </tbody>
            </table>

            <div className={styles.tipBox}>
              <span className={styles.tipBoxLabel}>Tip</span>
              <p className={styles.tipBoxBody}>Write down every cost before booking. Ticket + baggage + seat + transfer from home to departure airport + transfer from arrival airport to destination + any extras (parking, hotel, meals). Only then compare.</p>
            </div>

            <h2 id="section-2">The Real Cost Formula</h2>
            <p>There is no universally perfect formula, because every trip is different. But the principle is always the same:</p>
            <div className={styles.insightNode}>
              <span className={styles.insightNodeLabel}>Real Cost Model</span>
              <p className={styles.insightNodeBody}>Real Trip Cost = Ticket + Baggage + Seat Selection + Departure Transfer + Arrival Transfer + Schedule Costs + Time Value</p>
            </div>
            <p style={{ marginTop: 20 }}>Apply this formula to both flight options. Measure every cost the same way for both. Then compare the totals. The winner is the option with the lower total real cost — not the lower ticket price.</p>
            <p>If the margin between the two totals is very small — less than €10 — then non-monetary factors like arrival time, airline reliability, and personal convenience should guide your decision. Travelvus calls this the personal handoff.</p>

            <div className={styles.tipBox}>
              <span className={styles.tipBoxLabel}>Travelvus Calculation</span>
              <p className={styles.tipBoxBody} style={{ font: "500 14px/1.6 Geist, sans-serif", color: "var(--ink)" }}><strong>Real Trip Cost</strong> = Ticket + Baggage + Seat Selection + Departure Transfer + Arrival Transfer + Schedule Costs + Time Value</p>
              <p className={styles.tipBoxBody} style={{ marginTop: 6 }}>Apply this to both flights. Measure every cost the same way. The lower real cost wins.</p>
            </div>

            <h2 id="section-3">Worked example: two flights compared</h2>
            <div className={styles.warningBox}>
              <span className={styles.warningBoxLabel}>Illustrative example</span>
              <p className={styles.warningBoxBody}>The prices below are hypothetical and intended to demonstrate the comparison method. They are not live fares, current schedules, or real-time airport transfer prices. Replace these values with your own journey data when comparing real flights.</p>
            </div>
            <div className={styles.workedExample}>
              <div className={styles.workedExampleHd}><span>Option A</span><span>vs</span><span>Option B</span></div>
              <div className={styles.workedExampleHd}><span style={{ color: "var(--muted)" }}>Illustrative example</span><span style={{ display: "flex", alignItems: "center", gap: 6 }}><span className={styles.workedExampleDot} />Calculated now</span></div>
              <div className={styles.workedCols}>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}><span className={styles.workedColLabel}>Option A · Stansted</span><span className={`${styles.workedBadge} ${styles.workedBadgeLose}`}>A</span></div>
                  <div className={styles.workedRow}><span>Ticket</span><span className={styles.workedRowAmount}>€58</span></div>
                  <div className={styles.workedRow}><span>Checked bag</span><span className={styles.workedRowAmount}>+€42</span></div>
                  <div className={styles.workedRow}><span>Seat selection</span><span className={styles.workedRowAmount}>+€11</span></div>
                  <div className={styles.workedRow}><span>Departure transfer</span><span className={styles.workedRowAmount}>+€15</span></div>
                  <div className={styles.workedRow}><span>Arrival transfer (Stansted Express + Tube)</span><span className={styles.workedRowAmount}>+€28</span></div>
                  <div className={styles.workedRow}><span>Late arrival hotel</span><span className={styles.workedRowAmount}>+€65</span></div>
                  <div className={styles.workedRow}><span>Door-to-door time</span><span className={styles.workedRowAmount}>6h 15m</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Real cost</span><span className={styles.workedTotalLose}>€219</span></div>
                </div>
                <div className={styles.workedCol}>
                  <div className={styles.workedColHd}><span className={styles.workedColLabel}>Option B · Heathrow</span><span className={`${styles.workedBadge} ${styles.workedBadgeWin}`}>B</span></div>
                  <div className={styles.workedRow}><span>Ticket</span><span className={styles.workedRowAmount}>€126</span></div>
                  <div className={styles.workedRow}><span>Checked bag</span><span className={styles.workedRowAmount}>Included</span></div>
                  <div className={styles.workedRow}><span>Seat selection</span><span className={styles.workedRowAmount}>+€10</span></div>
                  <div className={styles.workedRow}><span>Departure transfer</span><span className={styles.workedRowAmount}>+€15</span></div>
                  <div className={styles.workedRow}><span>Arrival transfer (Heathrow Express)</span><span className={styles.workedRowAmount}>+€22</span></div>
                  <div className={styles.workedRow}><span>Arrives before dinner — no hotel needed</span><span className={styles.workedRowAmount}>€0</span></div>
                  <div className={styles.workedRow}><span>Door-to-door time</span><span className={styles.workedRowAmount}>4h 50m</span></div>
                  <div className={styles.workedTotal}><span className={styles.workedTotalLabel}>Real cost</span><span className={styles.workedTotalWin}>€173</span></div>
                </div>
              </div>
              <div className={styles.workedFooter}>€219 − €173 = €46 saved by choosing Heathrow. The ticket was €68 more expensive — but the total trip was €46 cheaper. The cheaper ticket lost. This is the real cost.</div>
            </div>

            <div className={styles.bridge}><div className={styles.bridgeRule} /><span className={styles.bridgeText}>Based on this, Travelvus concludes:</span><div className={styles.bridgeRule} /></div>

            <TravelvusVerdict
              verdictLine="Heathrow wins."
              stats={[
                { label: "Real trip cost", value: "173", unit: "€", accent: false },
                { label: "Money saved", value: "46", unit: "€", accent: true },
                { label: "Journey time", value: "85", unit: "min faster", accent: false },
              ]}
            />

            <h2 id="section-4">How Travelvus reasoned</h2>
            <div className={styles.framework}>
              <div className={styles.frameworkSpine} />
              <div className={styles.frameworkNode}><div className={styles.frameworkNodeNum}>1</div><div className={styles.frameworkNodeCard}><div className={styles.frameworkNodeLabel}>The ticket was the cheapest part of the expensive trip</div><p className={styles.frameworkNodeBody}>Option A saved €68 on the ticket. But baggage (+€42), the long transfer (+€28), and a forced hotel night (+€65) added €135 in costs the ticket price hid.</p></div></div>
              <div className={styles.frameworkNode}><div className={styles.frameworkNodeNum}>2</div><div className={styles.frameworkNodeCard}><div className={styles.frameworkNodeLabel}>The schedule created a hidden hotel cost</div><p className={styles.frameworkNodeBody}>Option A arrived at 23:15 — too late for public transport to most destinations. The traveller needed a hotel near the airport. Option B arrived at 16:45, allowing a normal journey home.</p></div></div>
              <div className={styles.frameworkNode}><div className={styles.frameworkNodeNum}>3</div><div className={styles.frameworkNodeCard}><div className={styles.frameworkNodeLabel}>The transfer cost asymmetry was decisive</div><p className={styles.frameworkNodeBody}>Stansted is far from central London. The Stansted Express alone costs ~£21. Heathrow is directly connected via the Tube (£5.60) and the Heathrow Express. The budget airport costs more to leave.</p></div></div>
              <div className={styles.frameworkNode}><div className={styles.frameworkNodeNum} style={{ background: "var(--navy)", color: "var(--paper)", borderColor: "var(--navy)" }}>✓</div><div className={styles.insightNode}><span className={styles.insightNodeLabel}>Travelvus Insight</span><p className={styles.insightNodeBody}>When you compare the total trip instead of the ticket, the more expensive fare is often the cheaper journey. This happens more often than most travellers realise — especially with budget airlines serving remote airports.</p></div></div>
            </div>

            <h2 id="section-5">Solo vs group travel: how the math changes</h2>
            <div className={styles.bestWorstGrid}>
              <div className={styles.bestWorstCard}><span className={`${styles.bestWorstLabel} ${styles.bestWorstLabelBest}`}>Best for solo travellers</span><div className={styles.bestWorstTitle}>Budget airline + carry-on only</div><p className={styles.bestWorstText}>When you travel alone with only a cabin bag, many of the hidden costs disappear. No baggage fees. One transfer ticket. No seat selection needed. The cheap ticket can genuinely win.</p></div>
              <div className={`${styles.bestWorstCard} ${styles.bestWorstCardWorst}`}><span className={`${styles.bestWorstLabel} ${styles.bestWorstLabelWorst}`}>Worst for families</span><div className={styles.bestWorstTitle}>Budget airline + checked bags × 4</div><p className={styles.bestWorstText}>Four checked bags. Four transfer tickets. Four seat selections to sit together. The hidden costs multiply by four. The cheaper ticket becomes the more expensive trip for everyone.</p></div>
            </div>

            <h2 id="section-6">When the cheapest ticket really wins</h2>
            <p>The cheapest ticket IS sometimes the best choice. Here is when:</p>
            <p>1. <strong>You travel carry-on only.</strong> No baggage fees. No seat selection. Just you and a small bag. The budget airline's business model does not touch you.</p>
            <p>2. <strong>Both flights use the same airport.</strong> The transfer cost is identical. Only the ticket price and airline extras differ. Compare those honestly.</p>
            <p>3. <strong>You arrive during the day.</strong> You can use affordable public transport. You do not need a hotel. The schedule does not penalise you.</p>
            <p>4. <strong>You are travelling alone.</strong> Costs do not multiply. One bag, one transfer, one seat.</p>
            <p>5. <strong>The price difference is very large.</strong> If Option A saves €200 on the ticket and only adds €30 in extras, the cheap ticket wins. The formula still works — the numbers just point the other way.</p>

            <h2 id="section-7">When paying more is smarter</h2>
            <p>The more expensive ticket wins more often than you think. Here is when paying more is the correct financial decision:</p>
            <p>1. <strong>You are checking bags.</strong> A €15 checked bag on a budget airline plus a €50 transfer from a remote airport can erase a €60 ticket saving instantly.</p>
            <p>2. <strong>You are travelling as a group.</strong> Every hidden cost multiplies. Four people × €42 baggage + four × €28 transfer = the budget airline costs €280 more than the ticket suggests.</p>
            <p>3. <strong>You arrive late at night.</strong> If the budget flight lands at 23:30 and the mainline flight lands at 16:00, the budget flight may force an extra hotel night. That single cost often flips the winner.</p>
            <p>4. <strong>Time matters to you.</strong> If the budget option adds three hours of travel time each way, and you value your time, the more expensive direct flight may be the smarter choice — even before counting the monetary extras.</p>

            <h2 id="section-8">FAQ</h2>
            <FAQAccordion items={[
              { question: "Should I always choose the flight with the lowest total cost?", answer: "Almost always, yes — with one important exception. If the total cost difference is very small (less than about €10), you should consider non-monetary factors: arrival time, airline reliability, airport convenience, and personal preference. The cheapest trip is not always the best trip — but it is the correct starting point for the decision." },
              { question: "How do I find out baggage fees before booking?", answer: "Check the airline's website directly. Do not rely on the flight search tool to show accurate baggage fees. Budget airlines in particular make their money from extras — the ticket is cheap precisely because baggage, seat selection, and other fees are charged separately." },
              { question: "What is the most commonly forgotten cost?", answer: "The airport transfer on the arrival side. Most people think about getting to their departure airport, but forget they also need to get from the arrival airport to their actual destination. At some airports (Stansted, Beauvais, Hahn), this transfer can cost more than the flight itself." },
              { question: "Is a connecting flight ever cheaper than a direct one?", answer: "Sometimes — but you must add the cost of meals during the layover, the risk of missing the connection, and the value of the extra travel time. A €40 saving is not worth a six-hour layover for most travellers." },
              { question: "How does Travelvus calculate the real cost?", answer: "Travelvus uses verified airport transfer costs from official TfL and National Rail sources, standard baggage fee estimates for the airlines currently covered, and a consistent methodology that measures every cost the same way for both options. The winner is always determined from exact values, never from rounded display numbers. Read our methodology for the full details." },
            ]} />

            <div className={styles.methodBlock}>
              <span className={styles.methodBlockKicker}>Methodology</span>
              <p className={styles.methodBlockText}>All transfer costs are verified from official sources (TfL, National Rail). GBP converted to EUR at 1.17. Walk-up contactless/Oyster fares. Off-peak daytime rates. Every cost measured identically for both options. Winner from raw values.</p>
              <Link href="/methodology" className={styles.methodBlockLink}>Read our methodology →</Link>
            </div>

            <div className={styles.finalDecision}>
              <span className={styles.finalDecisionKicker}>Final decision</span>
              <p className={styles.finalDecisionText}>The ticket price is never the full story. Compare the total trip — ticket, baggage, seat, transfer, schedule, and time. Apply the same formula to both options. The lower total cost wins. If the margin is razor-thin, your personal priorities decide.</p>
            </div>

            <div className={styles.ctaBlock}>
              <span className={styles.ctaBlockKicker}>You understand the framework</span>
              <div className={styles.ctaBlockQuestion}>Now compare your own flights.</div>
              <p className={styles.ctaBlockSub}>Bring two flight options. We'll compare the real trip cost.</p>
              <Link href="/#compare" className={styles.ctaBlockBtn}>Compare your flights →</Link>
            </div>

            <div className={styles.relatedGuides} style={{ marginTop: 48 }}>
              <Link href="/guides/heathrow-vs-gatwick" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Heathrow vs Gatwick: The Complete Decision Guide</div><p className={styles.relatedGuideDesc}>Which airport actually costs less — and why your destination changes the answer</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
              <Link href="/compare/paris-to-london" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Paris to London</div><p className={styles.relatedGuideDesc}>Heathrow or Gatwick from Charles de Gaulle — which wins on real cost?</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
              <Link href="/compare/frankfurt-to-london" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Frankfurt to London</div><p className={styles.relatedGuideDesc}>FRA or Hahn? The airport choice alone can change the journey by 1h 45m.</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
              <Link href="/compare/heathrow-vs-stansted" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>Heathrow vs Stansted</div><p className={styles.relatedGuideDesc}>The hidden real cost — when the budget ticket becomes the expensive trip</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
              <Link href="/questions/london-airport-break-even" className={styles.relatedGuideRow}><div><div className={styles.relatedGuideTitle}>London airport break-even question</div><p className={styles.relatedGuideDesc}>How much cheaper should a flight be to justify a different airport?</p></div><span className={styles.relatedGuideCta}>Read →</span></Link>
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
