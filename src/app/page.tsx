import type { Metadata } from "next";
import { QuickCompare } from "@/components/compare";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Travelvus — Compare Two Flights and Find Out Which Really Wins",
  description:
    "The cheapest ticket isn't always the cheapest journey. We compare the complete trip — ticket, baggage, transfer and time.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div style={{ background: "#F4F1EA", color: "#1E2A33", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", background: "#F4F1EA" }}>

        {/* ═══ HEADER ═══ */}
        <header className={styles.header}>
          <span className={styles.headerBrand}>
            <span className={styles.headerWordmark}>Travelvus</span>
            <span className={styles.headerLine} />
            <span className={styles.headerDot} />
          </span>
          <nav className={styles.headerNav}>
            <Link href="/">Compare</Link>
            <Link href="/london-airports">Airport Decisions</Link>
            <Link href="/wego-flight">Guides</Link>
            <Link href="/#compare" className={styles.headerCta}>Open Engine →</Link>
          </nav>
        </header>

        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <h1 className={styles.heroH1}>The cheapest ticket isn&rsquo;t<br />always the cheapest journey.</h1>
          <p className={styles.heroSub}>We compare the complete journey cost — ticket, baggage, transfer and time.</p>
        </section>
        <div className={styles.heroMicro}>
          <p>Already found two flights? Paste them in — we&rsquo;ll calculate the real winner.</p>
        </div>

        {/* ═══ COMPARISON ENGINE (static demo) ═══ */}
        <section className={styles.engineWrap}>
          <div className={styles.engine}>
            <div className={styles.engineHd}>
              <span>Verified transfer data</span>
              <span className={styles.engineHdDot}>
                <span className={styles.engineLiveDot} />
                Calculated now
              </span>
            </div>

            <div className={styles.engineCols}>
              {/* Option A — Gatwick (loses) */}
              <div className={styles.engineCol}>
                <div className={styles.engineColHd}>
                  <span className={styles.engineColLabel}>Option A · Gatwick</span>
                  <span className={`${styles.engineColBadge} ${styles.engineColBadgeLose}`}>A</span>
                </div>
                <div className={styles.engineRow}><span>Ticket</span><span className={styles.engineRowAmount}>£58</span></div>
                <div className={styles.engineRow}><span>Cabin bag</span><span className={styles.engineRowAmount}>Included</span></div>
                <div className={styles.engineRow}><span>Checked bag</span><span className={styles.engineRowAmount}>+£42</span></div>
                <div className={styles.engineRow}><span>Airport transfer</span><span className={styles.engineRowAmount}>+£71</span></div>
                <div className={styles.engineRow}><span>Door-to-door time</span><span className={styles.engineRowAmount}>3h 52m</span></div>
                <div className={styles.engineTotal}>
                  <span className={styles.engineTotalLabel}>Real cost</span>
                  <span className={styles.engineTotalLose}>£171</span>
                </div>
              </div>

              {/* Option B — Heathrow (wins) */}
              <div className={styles.engineCol}>
                <div className={styles.engineColHd}>
                  <span className={styles.engineColLabel}>Option B · Heathrow</span>
                  <span className={`${styles.engineColBadge} ${styles.engineColBadgeWin}`}>B</span>
                </div>
                <div className={styles.engineRow}><span>Ticket</span><span className={styles.engineRowAmount}>£126</span></div>
                <div className={styles.engineRow}><span>Cabin bag</span><span className={styles.engineRowAmount}>Included</span></div>
                <div className={styles.engineRow}><span>Checked bag</span><span className={styles.engineRowAmount}>Included</span></div>
                <div className={styles.engineRow}><span>Airport transfer</span><span className={styles.engineRowAmount}>+£18</span></div>
                <div className={styles.engineRow}><span>Door-to-door time</span><span className={styles.engineRowAmount}>2h 41m</span></div>
                <div className={styles.engineTotal}>
                  <span className={styles.engineTotalLabel}>Real cost</span>
                  <span className={styles.engineTotalWin}>£144</span>
                </div>
              </div>
            </div>

            {/* Verdict */}
            <div className={styles.verdict}>
              <div className={styles.verdictHd}>
                <span className={styles.verdictKicker}>Travelvus verdict</span>
                <span className={styles.verdictSig}>
                  <span className={styles.verdictSigLine} />
                  <span className={styles.verdictSigDot} />
                </span>
              </div>
              <div className={styles.verdictHeadline}>Heathrow wins.</div>
              <div className={styles.verdictStats}>
                <div>
                  <div className={styles.verdictStatLabel}>Real trip cost</div>
                  <div className={styles.verdictStatVal}>£144</div>
                </div>
                <div>
                  <div className={styles.verdictStatLabel}>Money saved</div>
                  <div className={styles.verdictStatSaved}>£27</div>
                </div>
                <div>
                  <div className={styles.verdictStatLabel}>Journey time</div>
                  <div className={styles.verdictStatVal}>71 min faster</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.engineCta}>
            <a href="#compare" className={styles.engineCtaBtn}>Reveal the real winner</a>
          </div>
          <div className={styles.engineTrust}>
            <span>Verified London transfer data</span>
            <span className={styles.engineTrustSep}>·</span>
            <span>TfL</span>
            <span className={styles.engineTrustSep}>·</span>
            <span>National Rail</span>
            <span className={styles.engineTrustSep}>·</span>
            <span>Updated daily</span>
          </div>
        </section>

        {/* ═══ REAL QUICK COMPARE ═══ */}
        <section id="compare" className={styles.qcSection}>
          <div className={styles.qcSectionLabel}>Compare your own flights</div>
          <div className={styles.qcWrapper}>
            <QuickCompare standalone={false} />
          </div>
        </section>

        {/* ═══ HOW TRAVELVUS THINKS ═══ */}
        <section className={styles.howSection}>
          <div className={styles.howGrid}>
            <div className={styles.howStep}>
              <div className={styles.howIcon}><span className={styles.howIconInner} /></div>
              <div className={styles.howLabel}>Add both flights</div>
            </div>
            <div className={styles.howStep}>
              <div className={styles.howIcon}><span className={styles.howIconBar} /></div>
              <div className={styles.howLabel}>We add the hidden costs</div>
            </div>
            <div className={styles.howStep}>
              <div className={`${styles.howIcon} ${styles.howIconDark}`}><span className={styles.howIconCircle} /></div>
              <div className={styles.howLabel}>See the real winner</div>
            </div>
          </div>
        </section>

        {/* ═══ REAL COMPARISON STORIES ═══ */}
        <section className={styles.storiesSection}>
          <h2 className={styles.storiesH2}>Real comparison stories</h2>
          <div className={styles.storiesGrid}>
            <Link href="/compare/heathrow-vs-gatwick/" className={styles.storyCard}>
              <img src="/home/canary-wharf-dlr.webp" alt="DLR platform near Canary Wharf in London" className={styles.storyImg} />
              <div className={styles.storyBody}>
                <span className={styles.storyKicker}>Heathrow vs Gatwick · Canary Wharf</span>
                <div className={`${styles.storyNumber} ${styles.storyNumberDark}`}>€37</div>
                <p className={styles.storyText}>A robust Gatwick win — the flight advantage survives the transfer almost intact.</p>
              </div>
            </Link>
            <Link href="/compare/heathrow-vs-gatwick/" className={styles.storyCard}>
              <img src="/home/paddington-station.webp" alt="Interior of London Paddington railway station" className={styles.storyImg} />
              <div className={styles.storyBody}>
                <span className={styles.storyKicker}>Heathrow vs Gatwick · Paddington</span>
                <div className={`${styles.storyNumber} ${styles.storyNumberCopper}`}>€1</div>
                <p className={styles.storyText}>A near-tie — the transfer eats the flight advantage. Money stops deciding here.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* ═══ POPULAR AIRPORT DECISIONS ═══ */}
        <section className={styles.decisionsSection}>
          <h2 className={styles.decisionsH2}>Popular airport decisions</h2>
          <Link href="/compare/heathrow-vs-gatwick/" className={styles.decisionRow}>
            <span className={styles.decisionPair}>Heathrow vs Gatwick</span>
            <p className={styles.decisionText}>The winner changes with your destination — €37 to €1.</p>
            <span className={styles.decisionCta}>Compare →</span>
          </Link>
          <Link href="/compare/heathrow-vs-stansted/" className={styles.decisionRow}>
            <span className={styles.decisionPair}>Heathrow vs Stansted</span>
            <p className={styles.decisionText}>The budget ticket rarely survives baggage and a long coach transfer.</p>
            <span className={styles.decisionCta}>Compare →</span>
          </Link>
          <Link href="/compare/gatwick-vs-stansted/" className={styles.decisionRow}>
            <span className={styles.decisionPair}>Gatwick vs Stansted</span>
            <p className={styles.decisionText}>Similar tickets, different transfers — the door-to-door cost rarely matches.</p>
            <span className={styles.decisionCta}>Compare →</span>
          </Link>
        </section>

        {/* ═══ TRAVEL QUESTIONS ═══ */}
        <section className={styles.questionsSection}>
          <h2 className={styles.questionsH2}>Travel questions</h2>
          <div className={styles.questionsGrid}>
            <div className={styles.questionItem}>
              <div className={styles.questionTitle}>Is it worth flying budget to save £40?</div>
              <p className={styles.questionText}>Once baggage and transfer are counted, the saving rarely survives.</p>
              <Link href="/questions/london-airport-break-even" className={styles.questionCta}>Read the answer →</Link>
            </div>
            <div className={styles.questionItem}>
              <div className={styles.questionTitle}>Does the landing airport matter more than price?</div>
              <p className={styles.questionText}>For some destinations, yes — the transfer can outweigh the ticket saving.</p>
              <Link href="/compare/heathrow-vs-gatwick/" className={styles.questionCta}>Read the answer →</Link>
            </div>
          </div>
        </section>

        {/* ═══ FEATURED GUIDES ═══ */}
        <section className={styles.guidesSection}>
          <h2 className={styles.guidesH2}>Featured guides</h2>
          <div className={styles.guidesGrid}>
            <div>
              <img src="/home/heathrow-express.webp" alt="Heathrow Express train at a station platform" className={styles.guideCardImg} />
              <div className={styles.guideCardTitle}>Heathrow to central London</div>
              <p className={styles.guideCardText}>Every route and price, and when the Express is worth it.</p>
              <Link href="/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system" className={styles.guideCardCta}>Read guide →</Link>
            </div>
            <div>
              <img src="/home/airport-check-in-baggage.webp" alt="Airport check-in counters with passenger baggage" className={styles.guideCardImg} />
              <div className={styles.guideCardTitle}>Baggage fees, compared honestly</div>
              <p className={styles.guideCardText}>Where the &ldquo;cheap&rdquo; airlines make it back — and how to avoid it.</p>
              <Link href="/tsa-precheck-cost" className={styles.guideCardCta}>Read guide →</Link>
            </div>
            <div>
              <img src="/home/family-airport-travel.webp" alt="Family travelling through an airport with luggage" className={styles.guideCardImg} />
              <div className={styles.guideCardTitle}>Travelling as a group of four</div>
              <p className={styles.guideCardText}>How group size changes the math without changing the winner.</p>
              <Link href="/kayak-flights" className={styles.guideCardCta}>Read guide →</Link>
            </div>
          </div>
        </section>

        {/* ═══ METHODOLOGY ═══ */}
        <section className={styles.methodSection}>
          <div className={styles.methodInner}>
            <span className={styles.methodKicker}>Methodology</span>
            <p className={styles.methodText}>Travelvus adds ticket price, checked baggage and the transfer to your actual destination — then compares the complete door-to-door cost, not just the fare.</p>
            <Link href="/methodology" className={styles.methodCta}>Read our methodology →</Link>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer className={styles.footer}>
          <div className={styles.footerGrid}>
            <div>
              <span className={styles.footerBrand}>Travelvus</span>
              <p className={styles.footerBrandText}>Decision engine for smarter air travel.</p>
            </div>
            <div>
              <div className={styles.footerColTitle}>Product</div>
              <div className={styles.footerColLinks}>
                <Link href="/">Compare</Link>
                <Link href="/london-airports">Airport Decisions</Link>
                <Link href="/wego-flight">Travel Guides</Link>
                <Link href="/methodology">Methodology</Link>
              </div>
            </div>
            <div>
              <div className={styles.footerColTitle}>Company</div>
              <div className={styles.footerColLinks} style={{ marginBottom: 28 }}>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className={styles.footerColTitle} style={{ marginBottom: 12 }}>Verified with</div>
              <p className={styles.footerVerified}>TfL · National Rail · Public airport information</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span className={styles.footerTagline}>Know the real cost before you book.</span>
            <span className={styles.footerCopy}>© 2026 Travelvus</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
