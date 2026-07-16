import Link from "next/link";

/** Shared Footer — single implementation for all Travelvus pages. */

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface Props {
  /** Optional additional columns beyond the default Product + Company */
  columns?: FooterColumn[];
  /** Optional tagline override */
  tagline?: string;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Compare", href: "/" },
      { label: "Airport Decisions", href: "/london-airports" },
      { label: "Travel Guides", href: "/wego-flight" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer({ columns, tagline }: Props) {
  const displayColumns = columns || DEFAULT_COLUMNS;

  return (
    <footer style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 48px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: `1.2fr ${"1fr ".repeat(displayColumns.length)}`, gap: 40, paddingBottom: 28 }}>
        <div>
          <span style={{ font: "700 18px/1 Geist, sans-serif", letterSpacing: "-0.04em", color: "var(--ink)" }}>Travelvus</span>
          <p style={{ font: "400 13px/1.5 Geist, sans-serif", color: "var(--muted)", margin: "12px 0 0", maxWidth: 220 }}>
            Decision engine for smarter air travel.
          </p>
        </div>
        {displayColumns.map((col) => (
          <div key={col.title}>
            <span style={{ font: "600 10px/1 IBM Plex Mono, monospace", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 14 }}>
              {col.title}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((link) => (
                <Link key={link.href} href={link.href} style={{ font: "400 14px/1 Geist, sans-serif", color: "var(--muted)", textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: "1px solid var(--line)" }}>
        <span style={{ font: "italic 400 14px/1 Instrument Serif, serif", color: "var(--muted)" }}>
          {tagline || "Know the real cost before you book."}
        </span>
        <span style={{ font: "400 11px/1 IBM Plex Mono, monospace", color: "var(--muted)" }}>
          &copy; 2026 Travelvus
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer { padding: 24px 28px 28px !important; }
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 600px) {
          footer { padding: 20px 18px 24px !important; }
          footer > div:first-child { grid-template-columns: 1fr !important; gap: 18px !important; }
          footer > div:last-child { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; }
        }
      `}</style>
    </footer>
  );
}
