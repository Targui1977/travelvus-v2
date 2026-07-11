import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "How Travelvus Compares Flights — Methodology & Evidence | Travelvus",
  description:
    "Travelvus compares the real trip — not just the ticket. How we calculate real cost, door-to-door time, and what changes the answer. Verified for London airports.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <div className="max-w-[var(--container-decision)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>
        <nav className="app-header-nav mobile:hidden">
          <span>Compare</span><Link href="/london-airports" className="no-underline">Airports</Link><Link href="/wego-flight" className="no-underline">Guides</Link>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">&#9776;</span>
      </header>

      {/* 1. HERO */}
      <section className={styles.methodHero}>
        <span className="kicker" style={{ color: "var(--copper)" }}>Methodology</span>
        <h1 className={styles.methodHeroH1}>How Travelvus compares two flights</h1>
        <p className={styles.methodHeroSub}>
          We add what the ticket price leaves out — then tell you exactly where
          the calculation ends and your judgment begins.
        </p>
        <p className={styles.methodHeroEvidence}>
          Verified for London airports &middot; Heathrow, Gatwick, Stansted &middot; Jul 2026
        </p>
      </section>

      {/* 2. DECISION PIPELINE */}
      <section className={styles.methodSection}>
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">The decision pipeline</span>
        </div>
        <div className={styles.pipelineList}>
          {[
            { n:"01", label:"The ticket number", text:"You bring the price you found. Travelvus does not search or book flights. The ticket price is the starting number — not the final cost.", tag:"User-provided" },
            { n:"02", label:"The real trip", text:"We add checked baggage, seat selection, and airport transfers — measured identically for both options. Transfer costs come from official TfL and National Rail sources.", tag:"Sourced data" },
            { n:"03", label:"The calculable winner", text:"The lower real cost wins. The winner is always determined from exact values, never from rounded display numbers.", tag:"Calculated" },
            { n:"04", label:"What can change the answer", text:"Remove baggage. Change the fare gap. Switch destination. Travelvus recalculates and shows exactly what flipped the verdict.", tag:"Calculated" },
            { n:"05", label:"Where the numbers stop", text:"When the monetary difference is too small, or when time and simplicity matter, Travelvus hands the decision to you — with all the measurable facts visible.", tag:"Your judgment", boundary:true },
          ].map((s) => (
            <div key={s.n} className={`${styles.pipelineRow} ${s.boundary ? styles.pipelineBoundary : ""}`}>
              <span className={styles.pipelineNum}>{s.n}</span>
              <div className={styles.pipelineBody}>
                <span className={styles.pipelineLabel}>{s.label}</span>
                <p className={styles.pipelineText}>{s.text}</p>
              </div>
              <span className={styles.pipelineTag}>{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE NUMBERS WE USE */}
      <section className={styles.methodSection}>
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">The numbers we use</span>
        </div>
        <div className={styles.evidenceList}>
          <div className={styles.evidenceBand}>
            <span className={styles.evidenceBandLabel}>What you provide</span>
            <p className={styles.evidenceBandText}>Ticket price, airports, departure and arrival times. You already found the flights. Travelvus does not search or book.</p>
            <span className={styles.evidenceBandTag}>User-provided</span>
          </div>
          <div className={styles.evidenceBand}>
            <span className={styles.evidenceBandLabel}>What we source</span>
            <p className={styles.evidenceBandText}>Airport transfer costs from official TfL and National Rail sources. Walk-up single, contactless/Oyster, off-peak daytime. Both airports measured identically. GBP converted to EUR at 1.17 (July 2026 estimate).</p>
            <span className={styles.evidenceBandTag}>Sourced · updated periodically</span>
          </div>
          <div className={styles.evidenceBand}>
            <span className={styles.evidenceBandLabel}>What we estimate</span>
            <p className={styles.evidenceBandText}>Sample flight fares, baggage policies, and representative journey times. These are scenario assumptions — not live data, not guaranteed prices. We label estimates clearly.</p>
            <span className={styles.evidenceBandTag}>Estimate · scenario assumption</span>
          </div>
        </div>
      </section>

      {/* 4. ROUNDING */}
      <section className={styles.methodSection}>
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">Raw values decide. Rounded values display.</span>
        </div>
        <p className={styles.methodProse}>
          The winner is always determined from exact values. Displayed totals are rounded to the nearest euro. A small raw win never shows as &ldquo;wins by &euro;0&rdquo; — we say &ldquo;just wins&rdquo; instead. Exact ties remain ties.
        </p>
        <div className={styles.roundingExample}>
          <div className={styles.roundingRow}>
            <span className={styles.roundingLabel}>Raw</span>
            <span className={styles.roundingVal}>LGW &euro;145.52</span>
            <span className={styles.roundingDot}>&middot;</span>
            <span className={styles.roundingVal}>STN &euro;141.17</span>
            <span className={styles.roundingArrow}>&rarr;</span>
            <span className={styles.roundingWinner}>STN wins by &euro;4.35</span>
          </div>
          <div className={styles.roundingRow}>
            <span className={styles.roundingLabel}>Display</span>
            <span className={styles.roundingVal}>LGW &euro;146</span>
            <span className={styles.roundingDot}>&middot;</span>
            <span className={styles.roundingVal}>STN &euro;141</span>
            <span className={styles.roundingArrow}>&rarr;</span>
            <span className={styles.roundingWinner}>STN wins by &euro;4</span>
          </div>
        </div>
      </section>

      {/* 5. PERSONAL HANDOFF */}
      <section className={styles.methodSection}>
        <div className={styles.handoffBlock}>
          <span className={styles.handoffBlockKicker}>The numbers stop here.</span>
          <span className={styles.handoffBlockHeadline}>Your priorities start here.</span>
          <p className={styles.handoffBlockText}>Travelvus can calculate the money truth. It cannot decide whether &euro;4 is worth 20 extra minutes on a train. It cannot decide whether simplicity matters more than a narrow cost advantage.</p>
          <p className={styles.handoffBlockText}>When the margin is too thin for arithmetic alone, Travelvus hands the decision to you — with all the measurable facts visible.</p>
          <p className={styles.handoffBlockFootnote}>This is not a limitation. It is the product.</p>
        </div>
      </section>

      {/* 6. COVERAGE */}
      <section className={styles.methodSection}>
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">What we can compare today</span>
        </div>
        <div className={styles.coverageList}>
          <div className={styles.coverageCard}>
            <span className={styles.coverageCardLabel}>Full comparison</span>
            <p className={styles.coverageCardText}>Heathrow, Gatwick, and Stansted. Real cost, door-to-door time, what changes the winner, and hidden trade-offs.</p>
            <span className={styles.coverageCardFoot}>3 Decision Pages available</span>
          </div>
          <div className={styles.coverageCard}>
            <span className={styles.coverageCardLabel}>Ticket comparison only</span>
            <p className={styles.coverageCardText}>Any other airport pair. You can still compare ticket prices. We tell you honestly when we don&rsquo;t yet have the full transfer data.</p>
            <span className={styles.coverageCardFoot}><Link href="/">Use Quick Compare &rarr;</Link></span>
          </div>
          <div className={styles.coverageCard}>
            <span className={styles.coverageCardLabel}>Not yet available</span>
            <p className={styles.coverageCardText}>Live fare tracking, live disruption data, guaranteed taxi prices, and universal baggage policies for every airline.</p>
            <span className={styles.coverageCardFoot}>We tell you what we know, not what we guess</span>
          </div>
        </div>
      </section>

      {/* 7. THREE PROOFS */}
      <section className={styles.methodSection}>
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">See the system working</span>
        </div>
        <div className={styles.proofList}>
          <Link href="/compare/heathrow-vs-stansted/" className={styles.proofRow}>
            <span className={styles.proofNum}>01</span>
            <span className={styles.proofLabel}>Heathrow vs Stansted</span>
            <span className={styles.proofLesson}>A cheaper ticket can become the more expensive trip after hidden costs are counted.</span>
            <span className={styles.proofEvidence}>The &euro;58 ticket produced a &euro;204 journey &rarr;</span>
          </Link>
          <Link href="/compare/heathrow-vs-gatwick/" className={styles.proofRow}>
            <span className={styles.proofNum}>02</span>
            <span className={styles.proofLabel}>Heathrow vs Gatwick</span>
            <span className={styles.proofLesson}>The same flights can produce very different margins depending on where in London you are going.</span>
            <span className={styles.proofEvidence}>&euro;37 at Canary Wharf &middot; near-tie at Paddington &rarr;</span>
          </Link>
          <Link href="/compare/gatwick-vs-stansted/" className={styles.proofRow}>
            <span className={styles.proofNum}>03</span>
            <span className={styles.proofLabel}>Gatwick vs Stansted</span>
            <span className={styles.proofLesson}>A mathematical winner can still require a personal judgment when the margin is thin.</span>
            <span className={styles.proofEvidence}>&euro;20 flight saving &middot; &euro;16 fixed costs &middot; &euro;4 net &rarr;</span>
          </Link>
        </div>
      </section>

      {/* 8. CTA */}
      <section className={styles.methodSection} style={{ textAlign: "center" }}>
        <Link href="/" className="btn-filled inline-block no-underline" style={{ padding: "15px 28px", background: "var(--copper)" }}>Open Compare &rarr;</Link>
      </section>

      {/* 9. FOOTER */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/compare/heathrow-vs-stansted/">Heathrow vs Stansted</Link>
          <Link href="/compare/heathrow-vs-gatwick/">Heathrow vs Gatwick</Link>
          <Link href="/compare/gatwick-vs-stansted/">Gatwick vs Stansted</Link>
        </div>
        <p className="home-footer-note">&copy; 2026 Travelvus. UK transport at 1 GBP &asymp; 1.17 EUR. Walk-up contactless/Oyster, off-peak. Totals rounded. Winner from raw values.</p>
      </footer>
    </div>
  );
}
