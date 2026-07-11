import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Travelvus — Why We Compare the Real Trip, Not Just the Ticket",
  description:
    "Travelvus exists because the cheapest ticket is not always the cheapest trip. We compare real cost — ticket, baggage, transfer, and time — then tell you which flight really wins.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
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
          <Link href="/london-airports" className="no-underline">
            Airports
          </Link>
          <Link href="/wego-flight" className="no-underline">Guides</Link>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroH1}>
          The ticket price shows one number. We compare the real trip.
        </h1>
        <p className={styles.heroSub}>
          We compare the real journey — ticket, baggage, airport transfer,
          door-to-door time. Not just the ticket price.
        </p>
      </section>

      {/* Why Travelvus exists */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelNum}>01</span>
            <span className={styles.sectionLabelTitle}>
              Why Travelvus exists
            </span>
          </div>
          <p className={styles.prose}>
            Flight search tools show you ticket prices. But the ticket is only
            part of the story. A &euro;58 flight through a budget airport can
            cost more than a &euro;126 flight through a major hub — once you
            add baggage, seat selection, and the airport transfer. The tools
            that find your flights do not answer the question that actually
            matters: which option really costs less, door to door?
          </p>
          <p className={styles.prose}>
            Travelvus was built to answer that question. Not by searching
            flights — you already do that. But by comparing the complete trip
            after you have found two options. Ticket price, baggage, airport
            transfer, journey time. All measured the same way for both options.
            Then a verdict you can challenge.
          </p>
        </div>
      </section>

      {/* How Travelvus thinks */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelNum}>02</span>
            <span className={styles.sectionLabelTitle}>
              How Travelvus thinks
            </span>
          </div>
          <p className={styles.prose}>
            Travelvus does not search flights. It does not book flights. It
            compares two options you already found — and adds the costs the
            ticket price leaves out. Checked baggage. Seat selection. The
            airport transfer to your actual London destination. Door-to-door
            journey time. Every cost is measured the same way for both options
            so the comparison is fair.
          </p>
          <p className={styles.prose}>
            The winner is always determined from exact values — never from
            rounded display numbers. If the margin is too thin for arithmetic
            alone, Travelvus tells you that honestly and hands the decision to
            you.
          </p>
        </div>
      </section>

      {/* Pull-quote */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.pullQuote}>
            The cheapest ticket does not always produce the cheapest trip.
          </p>
        </div>
      </section>

      {/* Where the calculation stops */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelNum}>03</span>
            <span className={styles.sectionLabelTitle}>
              Where the calculation stops
            </span>
          </div>
          <p className={styles.prose}>
            Travelvus can calculate the money truth. It cannot decide whether a
            &euro;4 saving is worth 20 extra minutes on a train. It cannot
            decide whether simplicity matters more than a narrow cost advantage.
            It cannot decide whether you would rather arrive at Heathrow at
            10:20 or Stansted at 23:15.
          </p>
          <p className={styles.prose}>
            When the numbers are too close, or when time and personal preference
            enter the equation, Travelvus hands the decision to you — with all
            the measurable facts visible. This is not a limitation. It is the
            product.
          </p>
        </div>
      </section>

      {/* Trust block */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.trustBlock}>
            <span className={styles.trustKicker}>Our editorial promise</span>
            <p>
              We use verified transfer costs from official TfL and National Rail
              sources. Walk-up contactless and Oyster fares. Off-peak daytime
              rates. GBP converted to EUR at 1.17. Every number is measured the
              same way for both options.
            </p>
            <p>
              We do not use live pricing, because live pricing changes before
              you can act on it. We do not claim to cover every airport —
              currently we verify Heathrow, Gatwick, and Stansted. For other
              airports, we tell you honestly when the comparison is ticket-only.
            </p>
            <p>
              We do not accept payment from airlines or airports to influence
              which option wins. The numbers decide the winner — not us, and not
              anyone else.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <Link href="/#compare" className={styles.ctaBtn}>
          Open Quick Compare &rarr;
        </Link>
        <div className={styles.supportingLinks}>
          <Link href="/methodology">How we calculate this &rarr;</Link>
          <Link href="/london-airports">
            Explore London airport comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/london-airports">London Airports</Link>
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
