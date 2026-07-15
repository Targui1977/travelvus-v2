import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import FAQAccordion from "@/components/guide/FAQAccordion";
import { HeroEditorial } from "@/components/hero";
import { JourneyDiagram, TrustGraphic } from "@/components/visual";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Which London Airport Is Actually Best? The Complete Decision Guide | Travelvus",
  description:
    "Compare Heathrow, Gatwick, Stansted, Luton and London City on real cost, transfer time, convenience and journey quality. Find the best London airport for your trip.",
  alternates: { canonical: "/london-airport-decision-center" },
};

/* ── Airport profile data ─────────────────────────────────── */

const AIRPORTS = [
  {
    code: "LHR",
    name: "Heathrow",
    bestFor: "International travellers, business, west London",
    strengths: "Elizabeth Line and Heathrow Express. Most airlines and routes. Excellent terminal facilities.",
    weaknesses: "Furthest from east and south London. Can be expensive for budget travellers.",
    typicalTraveller: "Long-haul flyers, BA and Virgin passengers, business travellers heading to west London or the City.",
    href: "/compare/heathrow-vs-gatwick",
  },
  {
    code: "LGW",
    name: "Gatwick",
    bestFor: "South London, Brighton, budget European flights",
    strengths: "Gatwick Express to Victoria in 30 min. Strong easyJet and BA presence. Single-terminal design (mostly South Terminal).",
    weaknesses: "Further from north and east London. Fewer international long-haul options than Heathrow.",
    typicalTraveller: "European city-breakers, south London residents, easyJet and TUI passengers, Brighton commuters.",
    href: "/compare/heathrow-vs-gatwick",
  },
  {
    code: "STN",
    name: "Stansted",
    bestFor: "Budget travellers, northeast London, Cambridge",
    strengths: "Ryanair's largest UK base. Very low ticket prices. Efficient single-terminal layout.",
    weaknesses: "55km from central London. Coach or train transfer adds 50-90 min and £17+. Few transport options late at night.",
    typicalTraveller: "Budget-conscious travellers, Ryanair passengers, northeast London and Cambridge residents.",
    href: "/compare/heathrow-vs-stansted",
  },
  {
    code: "LTN",
    name: "Luton",
    bestFor: "Budget airlines, north London, Milton Keynes",
    strengths: "easyJet and Wizz Air hub. Low ticket prices. DART shuttle to Luton Airport Parkway (5 min).",
    weaknesses: "45km from central London. No direct rail connection — bus or shuttle+train required.",
    typicalTraveller: "Budget travellers, easyJet and Wizz Air passengers, north London and Home Counties residents.",
    href: "/london-airports",
  },
  {
    code: "LCY",
    name: "London City",
    bestFor: "Business travellers, Canary Wharf, short-haul",
    strengths: "Only 10km from central London. DLR connection. Tiny airport — 20 min from landing to train. No long walks.",
    weaknesses: "Limited routes (mostly European business destinations). Short runway — no long-haul. Higher ticket prices.",
    typicalTraveller: "Business travellers, Canary Wharf and City workers, short-haul European flyers who value speed.",
    href: "/london-airports",
  },
];

/* ── Neighbourhood data ───────────────────────────────────── */

const NEIGHBORHOODS = [
  { area: "West London (Paddington, Kensington, Hammersmith)", best: "LHR", note: "Heathrow Express to Paddington in 15 min. Elizabeth Line covers all west London." },
  { area: "Central London (Westminster, Soho, Covent Garden)", best: "LHR", note: "Elizabeth Line to Tottenham Court Road and Bond Street in ~30 min." },
  { area: "The City & Canary Wharf", best: "LCY", note: "DLR from City Airport to Bank in 25 min. Canary Wharf in 20 min. Unbeatable for Docklands." },
  { area: "South London (Brixton, Croydon, Clapham)", best: "LGW", note: "Gatwick Express and Southern trains connect directly to Clapham Junction and Victoria." },
  { area: "East London (Stratford, Hackney, Shoreditch)", best: "STN", note: "Stansted Express to Liverpool Street — close to Shoreditch and east London." },
  { area: "North London (Camden, Islington, King's Cross)", best: "STN", note: "Stansted Express to Tottenham Hale for Victoria Line connections to north London." },
  { area: "Brighton & South Coast", best: "LGW", note: "Direct Thameslink and Southern trains from Gatwick to Brighton in 30 min." },
  { area: "Cambridge & East Anglia", best: "STN", note: "Stansted is the closest London airport to Cambridge — direct train in 30 min." },
];

/* ── Transfer data ────────────────────────────────────────── */

const TRANSFERS = [
  { airport: "Heathrow", options: [
    { name: "Elizabeth Line", time: "~35 min to central London", cost: "~£12 off-peak", freq: "Every 10–15 min" },
    { name: "Heathrow Express", time: "15 min to Paddington", cost: "~£25", freq: "Every 15 min" },
    { name: "Piccadilly Line", time: "50–60 min to central London", cost: "~£5–6", freq: "Every 5–10 min" },
  ]},
  { airport: "Gatwick", options: [
    { name: "Gatwick Express", time: "~30 min to Victoria", cost: "~£20 off-peak", freq: "Every 15 min" },
    { name: "Southern / Thameslink", time: "40–50 min to London Bridge", cost: "~£15", freq: "Every 10–15 min" },
  ]},
  { airport: "Stansted", options: [
    { name: "Stansted Express", time: "~50 min to Liverpool Street", cost: "~£17 off-peak", freq: "Every 15–30 min" },
    { name: "National Express coach", time: "75–90 min to central London", cost: "~£10–15", freq: "Every 30–60 min" },
  ]},
  { airport: "Luton", options: [
    { name: "DART + Thameslink", time: "~40 min to St Pancras", cost: "~£15", freq: "Every 10–15 min" },
    { name: "National Express coach", time: "60–75 min to central London", cost: "~£10–12", freq: "Every 30–60 min" },
  ]},
  { airport: "London City", options: [
    { name: "DLR", time: "~25 min to Bank", cost: "~£3 off-peak", freq: "Every 5–10 min" },
  ]},
];

/* ── Decision pages data ──────────────────────────────────── */

const DECISION_PAGES = [
  { city: "Berlin", slug: "berlin-to-london" },
  { city: "Paris", slug: "paris-to-london" },
  { city: "Amsterdam", slug: "amsterdam-to-london" },
  { city: "Madrid", slug: "madrid-to-london" },
  { city: "Barcelona", slug: "barcelona-to-london" },
  { city: "Rome", slug: "rome-to-london" },
  { city: "Milan", slug: "milan-to-london" },
  { city: "Lisbon", slug: "lisbon-to-london" },
  { city: "Dublin", slug: "dublin-to-london" },
  { city: "Frankfurt", slug: "frankfurt-to-london" },
];

/* ── FAQ data ─────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    question: "Which London airport is actually the best?",
    answer: "There is no single best airport — it depends on where you are flying from, where in London you are heading, which airline you prefer, and your budget. Heathrow wins for international flights and west/central London. Gatwick is best for south London and European budget flights. Stansted suits budget travellers heading to northeast London or Cambridge. London City is unbeatable for business travellers to Canary Wharf and the City. Luton is a budget option for north London. Use our door-to-door Decision Pages to compare your specific route.",
  },
  {
    question: "What is the cheapest London airport to fly into?",
    answer: "Stansted, Gatwick and Luton typically have the cheapest ticket prices because they serve budget airlines like Ryanair, easyJet and Wizz Air. However, the cheapest ticket does not always produce the cheapest journey — once you add baggage fees, airport transfer costs and schedule waiting time, a more expensive ticket into Heathrow can be cheaper overall. Always compare the door-to-door total cost before booking.",
  },
  {
    question: "Which London airport is closest to central London?",
    answer: "London City Airport (LCY) is closest — only 10km from central London with a 25-minute DLR connection to Bank. However, LCY has limited routes (mostly short-haul European business destinations). Of the three major airports, Heathrow is closest at 24km with the fastest transfer (Elizabeth Line, ~35 min). Stansted is furthest at 55km.",
  },
  {
    question: "Is the Heathrow Express worth the cost?",
    answer: "The Heathrow Express is the fastest option at 15 minutes to Paddington, but it costs ~£25. The Elizabeth Line takes ~35 minutes and costs ~£12 — the 20-minute time saving costs roughly £13 extra. If speed is your priority and you are heading to west London or Paddington, it is worth it. For most travellers, the Elizabeth Line offers better value.",
  },
  {
    question: "How much does the airport transfer cost from each London airport?",
    answer: "Heathrow: £5–25 (Piccadilly Line £5–6, Elizabeth Line ~£12, Heathrow Express ~£25). Gatwick: £15–20 (Thameslink ~£15, Gatwick Express ~£20). Stansted: £10–17 (coach £10–15, Stansted Express ~£17). Luton: £10–15 (coach or DART+train). London City: ~£3 (DLR). All prices are off-peak single adult fares as of July 2026.",
  },
  {
    question: "Which London airport is best for families with children?",
    answer: "Heathrow generally offers the best experience for families — direct train connections (no coach transfers), more space, wider choice of airlines and flight times, and better terminal facilities including play areas. Gatwick is also good for families, especially if flying to southern Europe. Stansted and Luton are less ideal — the coach or longer train transfer is harder with tired children and luggage.",
  },
  {
    question: "Does the time of day change which airport is better?",
    answer: "Yes — significantly. Late-night arrivals at Stansted and Luton have fewer transport options; the last Stansted Express leaves around 23:30. Late-night arrivals at Heathrow still have the Piccadilly Line (24-hour on Fridays and Saturdays) and night buses. Early morning departures from any airport may require arriving the night before if public transport is not running. Always check your flight time against available transfers.",
  },
  {
    question: "Which airport has the best public transport connection?",
    answer: "Heathrow has the best public transport — three separate rail options (Elizabeth Line, Piccadilly Line, Heathrow Express) plus coaches and taxis. It is the only London airport connected to the Tube network. London City has the simplest connection (DLR, one line, ~25 min to Bank). Gatwick and Stansted each have a dedicated express train plus coaches. Luton requires a shuttle bus (DART) to reach the train station.",
  },
  {
    question: "Should I choose my London airport based on where I'm staying?",
    answer: "Yes — this is one of the most important factors. West London → Heathrow. South London → Gatwick. East/Northeast London → Stansted. Canary Wharf/City → London City. North London → Luton or Stansted. The transfer geography can change your door-to-door journey by 30–60 minutes. Check our neighbourhood guide on this page for specific recommendations.",
  },
  {
    question: "How does Travelvus compare London airports?",
    answer: "Travelvus builds a complete door-to-door comparison for both flight options: ticket price + baggage costs + airport transfer cost + schedule waiting + total journey time. We use verified public transport data from TfL, National Rail and airport operators. Our Decision Pages for specific origin cities show exactly how the comparison works with real transfer times and illustrative fares. You can also use our Comparison Engine with your own flight data.",
  },
];

/* ── Page ─────────────────────────────────────────────────── */

export default function LondonDecisionCenterPage() {
  return (
    <div style={{ background: "#E4E2DC", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <HomeHeader />

        <div className={styles.page}>
          {/* ═══ 1. HERO ═══ */}
          <HeroEditorial
            category="Airport Decision"
            question="Which London airport is actually the best?"
            subtitle="The answer depends on where you are flying from, where in London you are heading, your budget, and who you are travelling with."
            metadata={{ readTime: "11 min read", reviewedDate: "Jul 2026", verified: true }}
            decisionCard={{
              winner: "Heathrow wins for most travellers",
              timeSaved: "Fastest transfer",
              moneySaved: "From ~£5 Tube",
              bestFor: "International flights, west & central London, families",
              confidence: "clear",
            }}
            visual={{ type: "airport-map", data: { cityName: "Central London", airports: [
              { code: "LHR", name: "Heathrow", distance: "24 km west", isWinner: true },
              { code: "LCY", name: "London City", distance: "10 km east" },
              { code: "LGW", name: "Gatwick", distance: "45 km south" },
              { code: "STN", name: "Stansted", distance: "55 km northeast" },
              { code: "LTN", name: "Luton", distance: "45 km north" },
            ]}}}
            snapshot={[
              { label: "Best overall", value: "Heathrow" },
              { label: "Fastest to central", value: "London City" },
              { label: "Best budget", value: "Stansted" },
            ]}
            cta={{ label: "Compare your own journey →", href: "/#compare" }}
          />

          {/* ═══ 2. EXECUTIVE SUMMARY ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>At a glance: which airport should you choose?</h2>
            <div className={styles.execGrid}>
              {AIRPORTS.map((a) => (
                <div key={a.code} className={styles.execCard}>
                  <div className={styles.execCardHd}>
                    <span className={styles.execCode}>{a.code}</span>
                    <span className={styles.execName}>{a.name}</span>
                  </div>
                  <p className={styles.execBest}>{a.bestFor}</p>
                  <Link href={a.href!} className={styles.execLink}>Compare {a.name} →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 4. AIRPORT COMPARISON MATRIX ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>Airport comparison matrix</h2>
            <div className={styles.matrixScroll}>
              <table className={styles.matrix}>
                <thead>
                  <tr>
                    <th>Airport</th>
                    <th>Best for</th>
                    <th>Transfer speed</th>
                    <th>Typical transfer cost</th>
                    <th>Business</th>
                    <th>Families</th>
                    <th>Budget</th>
                    <th>Overall</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Heathrow</strong></td><td>International, west London</td><td>★★★★★</td><td>£5–25</td><td>★★★★★</td><td>★★★★★</td><td>★★★</td><td>★★★★★</td></tr>
                  <tr><td><strong>Gatwick</strong></td><td>South London, Europe</td><td>★★★★</td><td>£15–20</td><td>★★★★</td><td>★★★★</td><td>★★★★</td><td>★★★★</td></tr>
                  <tr><td><strong>Stansted</strong></td><td>Budget, east London</td><td>★★★</td><td>£10–17</td><td>★★</td><td>★★</td><td>★★★★★</td><td>★★★</td></tr>
                  <tr><td><strong>Luton</strong></td><td>Budget, north London</td><td>★★★</td><td>£10–15</td><td>★★</td><td>★★</td><td>★★★★★</td><td>★★★</td></tr>
                  <tr><td><strong>London City</strong></td><td>Business, Canary Wharf</td><td>★★★★★</td><td>~£3</td><td>★★★★★</td><td>★★★</td><td>★</td><td>★★★★</td></tr>
                </tbody>
              </table>
            </div>
            <p className={styles.matrixNote}>Ratings are editorial assessments based on publicly available transfer data, terminal facilities and traveller feedback. Transfer costs are off-peak single adult fares as of July 2026. ★ = poor fit, ★★★★★ = excellent fit.</p>
          </section>

          {/* ═══ 4. AIRPORT PROFILES ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>Airport profiles</h2>
            <div className={styles.profileGrid}>
              {AIRPORTS.map((a) => (
                <div key={a.code} className={styles.profileCard}>
                  <div className={styles.profileHd}>
                    <span className={styles.profileCode}>{a.code}</span>
                    <span className={styles.profileName}>{a.name}</span>
                  </div>
                  <div className={styles.profileRow}><span>Best for</span><span>{a.bestFor}</span></div>
                  <div className={styles.profileRow}><span>Strengths</span><span>{a.strengths}</span></div>
                  <div className={styles.profileRow}><span>Watch out for</span><span>{a.weaknesses}</span></div>
                  <div className={styles.profileRow}><span>Typical traveller</span><span>{a.typicalTraveller}</span></div>
                  <Link href={a.href!} className={styles.profileLink}>Read the complete guide →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 5. NEIGHBOURHOOD GUIDE ═══ */}
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <h2 className={styles.sectionH2}>Which airport is best for your London neighbourhood?</h2>
            <p className={styles.sectionSub}>Your destination within London changes which airport is the best choice. Here is the recommendation for each area.</p>
            <div className={styles.neighborGrid}>
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className={styles.neighborCard}>
                  <span className={styles.neighborArea}>{n.area}</span>
                  <span className={styles.neighborBest}>{n.best}</span>
                  <p className={styles.neighborNote}>{n.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 6. TRANSFER COMPARISON ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>Airport transfer options compared</h2>
            <div className={styles.transferGrid}>
              {TRANSFERS.map((t) => (
                <div key={t.airport} className={styles.transferCard}>
                  <span className={styles.transferAirport}>{t.airport}</span>
                  {t.options.map((o, i) => (
                    <div key={i} className={styles.transferRow}>
                      <span className={styles.transferName}>{o.name}</span>
                      <span className={styles.transferDetail}>{o.time} · {o.cost} · {o.freq}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className={styles.matrixNote} style={{ marginTop: 18 }}>All fares are off-peak single adult as of July 2026. Sources: Transport for London (TfL), National Rail, airport operators. Verify current fares before travelling.</p>
          </section>

          {/* ═══ 7. REAL COST ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>The real cost of flying into London</h2>
            <p className={styles.sectionSub}>The ticket price shows one number. The real trip cost includes baggage, airport transfer, and schedule waiting. A £30 budget ticket to Stansted can become a £90+ journey once everything is counted.</p>
            <div className={styles.guideCard}>
              <div>
                <span className={styles.guideCardKicker}>Flagship Guide</span>
                <span className={styles.guideCardTitle}>How to Compare Two Flights Properly</span>
                <p className={styles.guideCardText}>See how baggage, airport transfers and schedule costs can change the apparent cheapest fare.</p>
              </div>
              <Link href="/guides/real-cost-of-a-flight" className={styles.guideCardLink}>Read the guide →</Link>
            </div>
          </section>

          {/* ═══ 8. REAL JOURNEY TIME ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>Flight time is not journey time</h2>
            <p className={styles.sectionSub}>A shorter flight to a distant airport can still produce a longer door-to-door journey. The airport you choose changes the total travel time by 30–90 minutes.</p>
            <div className={styles.guideCard}>
              <div>
                <span className={styles.guideCardKicker}>Flagship Guide</span>
                <span className={styles.guideCardTitle}>Shorter Flight or Better Journey?</span>
                <p className={styles.guideCardText}>Compare the complete door-to-door journey, not only the scheduled flight time.</p>
              </div>
              <Link href="/guides/total-travel-time-comparison" className={styles.guideCardLink}>Read the guide →</Link>
            </div>
          </section>

          {/* ═══ 9. DECISION ENGINE ═══ */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div>
                <span className={styles.ctaKicker}>Travelvus Decision Engine</span>
                <span className={styles.ctaTitle}>Compare your complete journey — door to door.</span>
                <p className={styles.ctaText}>Paste your two flight options. Travelvus adds baggage, airport transfers and total journey time to reveal which really wins.</p>
              </div>
              <Link href="/#compare" className={styles.ctaBtn}>Reveal the real winner</Link>
            </div>
          </section>

          {/* ═══ 10. DECISION PAGES ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>Compare your route</h2>
            <p className={styles.sectionSub}>See the door-to-door comparison for flights from these European cities to London.</p>
            <div className={styles.routeGrid}>
              {DECISION_PAGES.map((d) => (
                <Link key={d.slug} href={`/compare/${d.slug}`} className={styles.routeCard}>
                  <span className={styles.routeCity}>{d.city}</span>
                  <span className={styles.routeArrow}>→ London</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ═══ 11. FLAGSHIP GUIDES ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>Flagship Guides</h2>
            <div className={styles.flagshipGrid}>
              <Link href="/guides/heathrow-vs-gatwick" className={styles.flagshipCard}>
                <span className={styles.flagshipKicker}>Airport Decision</span>
                <span className={styles.flagshipTitle}>Heathrow vs Gatwick: The Complete Decision Guide</span>
                <p className={styles.flagshipText}>Compare real trip cost, transfer time and destination convenience before choosing your London airport.</p>
                <span className={styles.flagshipLink}>Read guide →</span>
              </Link>
              <Link href="/guides/real-cost-of-a-flight" className={styles.flagshipCard}>
                <span className={styles.flagshipKicker}>Cost Guide</span>
                <span className={styles.flagshipTitle}>How to Compare Two Flights Properly</span>
                <p className={styles.flagshipText}>See how baggage, airport transfers and schedule costs can change the apparent cheapest fare.</p>
                <span className={styles.flagshipLink}>Read guide →</span>
              </Link>
              <Link href="/guides/total-travel-time-comparison" className={styles.flagshipCard}>
                <span className={styles.flagshipKicker}>Time Guide</span>
                <span className={styles.flagshipTitle}>Shorter Flight or Better Journey?</span>
                <p className={styles.flagshipText}>Compare the complete door-to-door journey, not only the scheduled flight time.</p>
                <span className={styles.flagshipLink}>Read guide →</span>
              </Link>
            </div>
          </section>

          {/* ═══ 12. METHODOLOGY ═══ */}
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <h2 className={styles.sectionH2}>How we sourced this page</h2>
            <div className={styles.sourceGrid}>
              <div>
                <span className={styles.sourceLabel}>Public sources</span>
                <ul className={styles.sourceList}>
                  <li>Airport distances and terminal information — Heathrow Airport Ltd, Gatwick Airport Ltd, Stansted Airport Ltd, London Luton Airport Ltd, London City Airport Ltd</li>
                  <li>London transfer times and off-peak fares — Transport for London (TfL), National Rail, airport operators</li>
                  <li>Transfer frequencies — TfL timetables, National Rail timetables, coach operator schedules</li>
                </ul>
              </div>
              <div>
                <span className={styles.sourceLabelCopper}>Illustrative assumptions</span>
                <ul className={styles.sourceList}>
                  <li>Ticket price comparisons are illustrative and vary by airline, season and booking date</li>
                  <li>Airport ratings (★) are editorial assessments based on publicly available data</li>
                  <li>"Best for" recommendations are general guidance — verify with the Comparison Engine for your specific journey</li>
                </ul>
              </div>
            </div>
            <p className={styles.sourceReview}>Last reviewed: July 2026 · Next factual review: January 2027</p>
          </section>

          {/* ═══ 13. FAQ ═══ */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>Frequently asked questions</h2>
            <FAQAccordion items={FAQ_ITEMS} />
          </section>

          {/* ═══ 14. FINAL CTA ═══ */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div>
                <span className={styles.ctaKicker}>Travelvus</span>
                <span className={styles.ctaTitle}>Now compare your own journey.</span>
                <p className={styles.ctaText}>Paste your two flight options. See which really wins — door to door.</p>
              </div>
              <Link href="/#compare" className={styles.ctaBtn}>Reveal the real winner</Link>
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
