import Link from "next/link";
import styles from "./footer.module.css";

/** Shared Footer — premium editorial implementation, single source for all Travelvus pages. */

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface Props {
  /** Optional additional columns beyond the default Explore + Travelvus */
  columns?: FooterColumn[];
  /** Optional tagline override */
  tagline?: string;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Compare", href: "/" },
      { label: "Airport Decisions", href: "/london-airports" },
      { label: "Travel Guides", href: "/wego-flight" },
    ],
  },
  {
    title: "Travelvus",
    links: [
      { label: "About", href: "/about" },
      { label: "Methodology", href: "/methodology" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer({ columns, tagline }: Props) {
  const displayColumns = columns || DEFAULT_COLUMNS;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCell}>
            <span className={styles.brandWordmark}>Travelvus</span>
            <div className={styles.brandRule} />
            <p className={styles.brandDesc}>
              An independent decision engine for smarter air travel. We compare the real
              trip — ticket, baggage, transfers and hidden fees — so you can book with
              confidence.
            </p>
          </div>
          {displayColumns.map((col) => (
            <div key={col.title}>
              <span className={styles.colTitle}>{col.title}</span>
              <ul className={styles.links}>
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.tagline}>{tagline || "Know the real cost before you book."}</p>
        <p className={styles.copyright}>&copy; 2026 Travelvus · Independent travel decisions</p>
      </div>
    </footer>
  );
}
