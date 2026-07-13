"use client";

import { type ReactNode, useState } from "react";
import HomeHeader from "@/components/ui/HomeHeader";
import Link from "next/link";
import styles from "./legacy-article.module.css";

/* ── Types ────────────────────────────────────────────────── */

export interface RelatedItem {
  title: string;
  description: string;
  href: string;
  label?: string;
}

export interface LegacyArticleLayoutProps {
  children: ReactNode;

  /* Hero */
  category?: string;
  title?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  readingTime?: string;
  lastReviewed?: string;

  /* Decision Summary */
  summaryTitle?: string;
  summaryPoints?: string[];

  /* Table of Contents */
  tocItems?: { id: string; title: string }[];

  /* Product CTA */
  ctaText?: string;
  ctaLink?: string;
  ctaHint?: string;

  /* Methodology */
  methodologyText?: string;

  /* Related Decisions */
  related?: RelatedItem[];

  /* Trust note */
  trustNote?: string;
}

/* ── Defaults ─────────────────────────────────────────────── */

const DEFAULT_SUMMARY_TITLE = "The quick answer";

const DEFAULT_METHODOLOGY =
  "Travelvus compares complete journeys — ticket, baggage, transfers and time — not just the listed fare. Our methodology, data sources and editorial principles are public.";

/* ── Component ────────────────────────────────────────────── */

export default function LegacyArticleLayout({
  children,
  category,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  readingTime,
  lastReviewed,
  summaryTitle,
  summaryPoints,
  tocItems,
  ctaText,
  ctaLink,
  ctaHint,
  methodologyText,
  related,
  trustNote,
}: LegacyArticleLayoutProps) {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div className={styles.page}>
      {/* 1. Shared Header */}
      <HomeHeader />

      <article className={styles.article}>
        {/* 2. Hero */}
        <header className={styles.hero}>
          {category && <span className={styles.heroCategory}>{category}</span>}

          {title && <h1 className={styles.heroH1}>{title}</h1>}

          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}

          {(readingTime || lastReviewed) && (
            <div className={styles.heroMeta}>
              {readingTime && <span>{readingTime} read</span>}
              {readingTime && lastReviewed && (
                <span className={styles.heroMetaSep}>·</span>
              )}
              {lastReviewed && <span>Reviewed {lastReviewed}</span>}
            </div>
          )}

          {heroImage && (
            <img
              src={heroImage}
              alt={heroImageAlt ?? ""}
              className={styles.heroImage}
            />
          )}
        </header>

        {/* 3. Decision Summary */}
        {summaryPoints && summaryPoints.length > 0 && (
          <section className={styles.summaryBlock} aria-label="Quick summary">
            <div className={styles.summaryCard}>
              <span className={styles.summaryTitle}>
                {summaryTitle ?? DEFAULT_SUMMARY_TITLE}
              </span>
              <ul className={styles.summaryList}>
                {summaryPoints.map((point, i) => (
                  <li key={i} className={styles.summaryItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 4. Table of Contents */}
        {tocItems && tocItems.length > 0 && (
          <section className={styles.tocSection} aria-label="Table of Contents">
            {/* Desktop TOC */}
            <nav className={styles.tocDesktop}>
              <span className={styles.tocDesktopTitle}>On this page</span>
              <div className={styles.tocDesktopList}>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={styles.tocDesktopLink}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>

            {/* Mobile TOC accordion */}
            <div className={styles.tocMobile}>
              <button
                className={styles.tocMobileBtn}
                onClick={() => setTocOpen(!tocOpen)}
                aria-expanded={tocOpen}
                aria-label="Toggle table of contents"
              >
                On this page
                <span
                  className={styles.tocMobileBtnIcon}
                  style={{
                    transform: tocOpen ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className={`${styles.tocMobileList} ${
                  tocOpen ? styles.tocMobileOpen : ""
                }`}
              >
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={styles.tocMobileLink}
                    onClick={() => setTocOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Main content */}
        <div className={styles.contentArea}>{children}</div>

        {/* 6. Product CTA */}
        {ctaText && ctaLink && (
          <section className={styles.ctaBlock} aria-label="Next step">
            <div className={styles.ctaCard}>
              <div className={styles.ctaContent}>
                <span className={styles.ctaLabel}>Travelvus</span>
                <span className={styles.ctaText}>{ctaText}</span>
                {ctaHint && <span className={styles.ctaHint}>{ctaHint}</span>}
              </div>
              <Link href={ctaLink} className={styles.ctaLink}>
                {ctaLink.startsWith("/compare") ||
                ctaLink === "/" ||
                ctaLink === "/#compare"
                  ? "Reveal the real winner"
                  : ctaLink.startsWith("/london-airports")
                  ? "Explore airport decisions"
                  : ctaLink.startsWith("/guides")
                  ? "Read the guide"
                  : "Learn more"}
              </Link>
            </div>
          </section>
        )}

        {/* 7. Methodology / Trust */}
        <section className={styles.methodBlock} aria-label="How we work">
          <div className={styles.methodCard}>
            <span className={styles.methodTitle}>How Travelvus works</span>
            <p className={styles.methodText}>
              {methodologyText ?? DEFAULT_METHODOLOGY}
            </p>
            <Link href="/methodology" className={styles.methodLink}>
              Read our methodology &rarr;
            </Link>
            {trustNote && (
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 8,
                  marginBottom: 0,
                }}
              >
                {trustNote}
              </p>
            )}
          </div>
        </section>

        {/* 8. Related Decisions */}
        {related && related.length > 0 && (
          <section className={styles.relatedSection} aria-label="Continue exploring">
            <div className={styles.relatedInner}>
              <span className={styles.relatedKicker}>Continue exploring</span>
              <div className={styles.relatedGrid}>
                {related.map((item, i) => (
                  <Link key={i} href={item.href} className={styles.relatedCard}>
                    {item.label && (
                      <span className={styles.relatedCardLabel}>
                        {item.label}
                      </span>
                    )}
                    <span className={styles.relatedCardTitle}>
                      {item.title}
                    </span>
                    <span className={styles.relatedCardText}>
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      {/* 9. Footer — absolute final element */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <span className={styles.footerBrand}>Travelvus</span>
            <p className={styles.footerBrandText}>
              Decision engine for smarter air travel.
            </p>
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
            <div className={styles.footerColLinks}>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div
              className={styles.footerColTitle}
              style={{ marginTop: 20, marginBottom: 12 }}
            >
              Verified with
            </div>
            <p className={styles.footerVerified}>
              TfL · National Rail · Public airport information
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerTagline}>
            Know the real cost before you book.
          </span>
          <span className={styles.footerCopy}>&copy; 2026 Travelvus</span>
        </div>
      </footer>
    </div>
  );
}
