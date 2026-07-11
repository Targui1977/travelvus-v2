import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Compare London Airports — Which Is Actually Cheaper? | Travelvus",
  description:
    "Heathrow, Gatwick, or Stansted? Three real comparisons showing which airport is cheaper — depending on your destination, baggage, and what you value.",
  alternates: { canonical: "/london-airports" },
};

const ROWS = [
  {
    n: "01",
    label: "Cheap-ticket trap",
    question: "Is the cheaper flight actually cheaper?",
    pair: "Heathrow vs Stansted",
    insight: "The €58 ticket produced a €204 journey — once the checked bag and night taxi were counted. The cheaper-looking fare can hide the more expensive trip.",
    href: "/compare/heathrow-vs-stansted/",
    cta: "Compare Heathrow vs Stansted →",
  },
  {
    n: "02",
    label: "Destination effect",
    question: "Does my London destination change the answer?",
    pair: "Heathrow vs Gatwick",
    insight: "Same flights. Same travellers. Only the London destination changed. Gatwick wins by €37 at Canary Wharf — but at Paddington, the two airports nearly tie.",
    href: "/compare/heathrow-vs-gatwick/",
    cta: "Compare Heathrow vs Gatwick →",
  },
  {
    n: "03",
    label: "Saving-worth test",
    question: "Is a small saving worth the extra journey?",
    pair: "Gatwick vs Stansted",
    insight: "Stansted saves €20 on the flight — but €16 more in fixed costs leaves only €4 net. Travelvus calculates the money truth. Whether the saving is worth the extra train time is personal.",
    href: "/compare/gatwick-vs-stansted/",
    cta: "Compare Gatwick vs Stansted →",
  },
];

export default function HubPage() {
  return (
    <div className="max-w-[var(--container-decision)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>
        <nav className="app-header-nav mobile:hidden">
          <span>Compare</span>
          <Link href="/london-airports" className="text-[var(--ink)] no-underline">Airports</Link>
          <Link href="/wego-flight" className="no-underline">Guides</Link>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">&#9776;</span>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <span className={`kicker ${styles.heroKicker}`} style={{ color: "var(--copper)" }}>London Airports</span>
        <h1 className={styles.heroH1}>Which London airport decision matches your trip?</h1>
        <p className={styles.heroSub}>Three comparisons. Three different questions. One city. Find the one that matches what you&rsquo;re actually trying to decide.</p>
      </section>

      {/* Three decision rows */}
      <div className={styles.rowList}>
        {ROWS.map((r) => (
          <div key={r.n} className={styles.decisionRow}>
            <span className={styles.rowNum}>{r.n}</span>
            <span className={styles.rowLabel}>{r.label}</span>
            <div className={styles.rowQuestion}>{r.question}</div>
            <div className={styles.rowPair}>{r.pair}</div>
            <p className={styles.rowInsight}>{r.insight}</p>
            <Link href={r.href} className={styles.rowCta}>{r.cta}</Link>
          </div>
        ))}
      </div>

      {/* Question card */}
      <section className={styles.questionCard}>
        <span className={styles.questionCardKicker}>Question</span>
        <Link href="/questions/london-airport-break-even" className={styles.questionCardLink}>
          &ldquo;How much cheaper should a London flight be to justify a different airport?&rdquo;
        </Link>
        <p className={styles.questionCardText}>
          The break-even ranges from about &euro;7 to over &euro;100 — depending on which airports you are comparing. Three real airport pairs, one principle.
        </p>
        <span className={styles.questionCardCta}>Read the answer &rarr;</span>
      </section>

      {/* Coverage */}
      <section className={styles.coverage}>
        <p className={styles.coverageText}>
          Currently comparing Heathrow, Gatwick, and Stansted across three decision types.
          More London airport comparisons coming as we verify transfer data.
        </p>
      </section>

      {/* Links */}
      <div className={styles.links}>
        <Link href="/methodology">How we compare airports →</Link>
      </div>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaLabel}>Your airports not here yet?</p>
        <Link href="/#compare" className="btn-filled inline-block no-underline" style={{ padding: "15px 28px", background: "var(--copper)" }}>Open Compare →</Link>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/london-airports">London Airports</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/compare/heathrow-vs-stansted/">Heathrow vs Stansted</Link>
          <Link href="/compare/heathrow-vs-gatwick/">Heathrow vs Gatwick</Link>
          <Link href="/compare/gatwick-vs-stansted/">Gatwick vs Stansted</Link>
        </div>
        <p className="home-footer-note">&copy; 2026 Travelvus. UK transport at 1 GBP &asymp; 1.17 EUR.</p>
      </footer>
    </div>
  );
}
