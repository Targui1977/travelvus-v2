"use client";

import { type ReactNode } from "react";
import HomeHeader from "@/components/ui/HomeHeader";
import Link from "next/link";
import styles from "./legacy-article.module.css";

/* ── Props ────────────────────────────────────────────────── */

export interface LegacyArticleLayoutProps {
  children: ReactNode;
}

/* ── Component ────────────────────────────────────────────── */

export default function LegacyArticleLayout({ children }: LegacyArticleLayoutProps) {
  return (
    <div className={styles.page}>
      <HomeHeader />

      <article className={styles.article}>
        {children}
      </article>

      {/* ═══ Shared Footer ═══ */}
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
            <div className={styles.footerColTitle} style={{ marginTop: 20, marginBottom: 12 }}>
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

      {/* ═══ Related Guides — automatic interlinking ═══ */}
      <div className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <span className={styles.relatedKicker}>Continue exploring</span>
          <div className={styles.relatedGrid}>
            <Link href="/london-airports" className={styles.relatedCard}>
              <span className={styles.relatedCardTitle}>London Airport Decisions</span>
              <span className={styles.relatedCardText}>Which London airport really wins for your journey?</span>
            </Link>
            <Link href="/methodology" className={styles.relatedCard}>
              <span className={styles.relatedCardTitle}>Our Methodology</span>
              <span className={styles.relatedCardText}>How Travelvus calculates the real cost of your trip.</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
