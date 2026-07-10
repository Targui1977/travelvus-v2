import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "How Much Cheaper Should a London Flight Be? | Travelvus",
  description:
    "There is no single number. The required saving ranges from about €7 to over €100 — depending on which London airports you are comparing. Three real break-even examples.",
  alternates: { canonical: "/questions/london-airport-break-even" },
};

const BREAK_EVEN_PROOFS = [
  {
    pair: "Heathrow vs Stansted",
    number: ">€101",
    qualifier: "Production example · Jul 2026",
    explanation:
      "In the canonical Travelvus scenario, the Stansted flight would need to save more than €101 to overcome its higher baggage and transfer costs. At the observed €68 saving, it still loses by €33 on total cost. This is not a permanent threshold.",
    href: "/compare/heathrow-vs-stansted/",
    cta: "Full comparison →",
  },
  {
    pair: "Heathrow vs Gatwick",
    number: ">€7",
    qualifier: "Production example · Jul 2026",
    explanation:
      "In the canonical Travelvus scenario, the LHR flight would need to save more than €7. But LHR typically costs €20 more — so Gatwick holds for most destinations. The margin moves with your London destination. This is not a permanent threshold.",
    href: "/compare/heathrow-vs-gatwick/",
    cta: "Full comparison →",
  },
  {
    pair: "Gatwick vs Stansted",
    number: ">€16",
    qualifier: "Production example · Jul 2026",
    explanation:
      "At the canonical €20 saving, Stansted just wins — by €4 net. A margin thin enough that personal judgment matters more than arithmetic. This is not a permanent threshold.",
    href: "/compare/gatwick-vs-stansted/",
    cta: "Full comparison →",
  },
];

const WHAT_MOVES = [
  {
    label: "Airport pair",
    text: "Different airports have different fixed-cost profiles. The spread ranges from about €7 to over €100.",
  },
  {
    label: "London destination",
    text: "Where in London you are going changes the transfer cost. This moves the break-even within the same airport pair.",
  },
  {
    label: "Checked baggage",
    text: "Baggage fees differ by airline and airport. Removing baggage changes the fixed-cost difference and can shift the break-even point.",
  },
  {
    label: "Traveller count",
    text: "Fixed costs scale with group size. The break-even per person stays the same — but the total saving grows with each additional traveller.",
  },
];

export default function QuestionPage() {
  return (
    <div className="max-w-[var(--container-decision)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      {/* ═══ Header ═══ */}
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>
        <nav className="app-header-nav mobile:hidden">
          <span>Compare</span>
          <Link href="/london-airports" className="no-underline">Airports</Link>
          <span>Guides</span>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* ═══ 1. HERO ═══ */}
      <section className={styles.qpHero}>
        <span
          className={`kicker ${styles.qpHeroKicker}`}
          style={{ color: "var(--copper)" }}
        >
          London Airports &middot; Question
        </span>
        <h1 className={styles.qpHeroH1}>
          How much cheaper should a London flight be to justify a different
          airport?
        </h1>
        <p className={styles.qpHeroAnswer}>
          There is no single number. The required saving ranges from about
          &euro;7 to over &euro;100 &mdash; depending on which airports you are
          comparing. Whether the saving is personally worth the extra journey
          time &mdash; that part is yours.
        </p>
        <p className={styles.qpHeroEvidence}>
          Three verified London airport pairs &middot; Heathrow, Gatwick,
          Stansted &middot; Jul 2026
        </p>
      </section>

      {/* ═══ 2. THE BREAK-EVEN MODEL ═══ */}
      <section className={styles.qpSection}>
        <div className={styles.qpModel}>
          <div className={styles.qpSectionLabel}>
            <span className={styles.qpSectionLabelNum}></span>
            <h2 className={styles.qpSectionLabelTitle}>
              The break-even model
            </h2>
          </div>
          <div className={styles.qpModelFormula}>
            Required flight saving = what the alternative airport costs extra
          </div>
          <p className={styles.qpModelProse}>
            The alternative airport may have a cheaper ticket. But it often has
            higher fixed costs &mdash; more expensive baggage, seat fees, or
            airport transfer. The flight must save enough to overcome that
            difference. How much &ldquo;enough&rdquo; is depends on the airport
            pair.
          </p>
        </div>
      </section>

      {/* ═══ 3. HOW MUCH CHEAPER? — THREE PROOFS ═══ */}
      <section className={styles.qpSection}>
        <div className={styles.qpSectionLabel}>
          <span className={styles.qpSectionLabelNum}></span>
          <h2 className={styles.qpSectionLabelTitle}>
            How much cheaper? Three real answers
          </h2>
        </div>
        <div className={styles.breakEvenList}>
          {BREAK_EVEN_PROOFS.map((proof) => (
            <div key={proof.pair} className={styles.breakEvenStrip}>
              <div className={styles.stripLeft}>
                <span className={styles.stripPair}>{proof.pair}</span>
              </div>
              <div className={styles.stripCenter}>
                <span className={styles.stripNumber}>{proof.number}</span>
              </div>
              <div className={styles.stripRight}>
                <span className={styles.stripQualifier}>{proof.qualifier}</span>
                <p className={styles.stripExplanation}>{proof.explanation}</p>
                <Link href={proof.href} className={styles.stripLink}>
                  {proof.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage boundary */}
      <section className={styles.qpSection}>
        <div className={styles.coverageNote}>
          <p>
            These break-even thresholds are derived from Travelvus production
            scenarios using verified transfer costs for three London airports
            (Heathrow, Gatwick, Stansted), walk-up contactless/Oyster fares, and
            GBP→EUR at 1.17. They are not universal thresholds — different flight
            prices, baggage policies, or destinations produce different
            break-evens. Travelvus does not yet have verified transfer data for
            Luton, London City, or Southend.
          </p>
          <p>
            <Link href="/methodology">How we source and verify these numbers →</Link>
          </p>
        </div>
      </section>

      {/* ═══ 4. WHAT MOVES THE BREAK-EVEN ═══ */}
      <section className={styles.qpSection}>
        <div className={styles.qpSectionLabel}>
          <span className={styles.qpSectionLabelNum}></span>
          <h2 className={styles.qpSectionLabelTitle}>
            What moves the break-even
          </h2>
        </div>
        <div className={styles.whatMovesList}>
          {WHAT_MOVES.map((item) => (
            <div key={item.label} className={styles.whatMovesRow}>
              <span className={styles.whatMovesLabel}>{item.label}</span>
              <p className={styles.whatMovesText}>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.destEffect}>
          <p>
            Even within one airport pair, your London destination can move the
            break-even. For Heathrow vs Gatwick: at Victoria, LHR needs to save
            &gt;&euro;7. At Paddington with advance HEX fares, the two airports
            nearly tie. The break-even is not fixed &mdash; it moves with where
            you are going.
          </p>
        </div>
      </section>

      {/* ═══ 5. THE NUMBERS STOP HERE ═══ */}
      <section className={styles.qpSection}>
        <div className={styles.qpSectionLabel}>
          <span className={styles.qpSectionLabelNum}></span>
          <h2 className={styles.qpSectionLabelTitle}>
            When the numbers stop
          </h2>
        </div>
        <div className={styles.handoffBlock}>
          <span className={styles.handoffBlockKicker}>
            The calculation stops here.
          </span>
          <span className={styles.handoffBlockHeadline}>
            Your judgment starts here.
          </span>
          <p className={styles.handoffBlockText}>
            Travelvus can calculate how much cheaper a flight must be to
            overcome an alternative airport&rsquo;s higher fixed costs.
          </p>
          <p className={styles.handoffBlockText}>
            It cannot decide whether a &euro;4 net saving is worth 20 extra
            minutes on a train. It cannot decide whether simplicity matters more
            than a narrow cost advantage.
          </p>
          <p className={styles.handoffBlockText}>
            When the numbers are too close, or when time and friction enter the
            equation, Travelvus hands the decision to you.
          </p>
        </div>
      </section>

      {/* ═══ 6. COMPARE YOUR OWN FLIGHTS ═══ */}
      <section className={styles.ctaSection}>
        <Link href="/#compare" className={styles.ctaPrimaryBtn}>
          Compare your own flights &rarr;
        </Link>
        <div className={styles.ctaSupporting}>
          <Link href="/london-airports">
            Explore all London airport decisions &rarr;
          </Link>
          <Link href="/methodology">How we calculate this &rarr;</Link>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/london-airports">London Airports</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/compare/heathrow-vs-stansted/">Heathrow vs Stansted</Link>
          <Link href="/compare/heathrow-vs-gatwick/">Heathrow vs Gatwick</Link>
          <Link href="/compare/gatwick-vs-stansted/">Gatwick vs Stansted</Link>
        </div>
        <p className="home-footer-note">
          &copy; 2026 Travelvus. UK transport at 1 GBP &asymp; 1.17 EUR.
          Walk-up contactless/Oyster, off-peak. Totals rounded. Winner from raw
          values.
        </p>
      </footer>
    </div>
  );
}
