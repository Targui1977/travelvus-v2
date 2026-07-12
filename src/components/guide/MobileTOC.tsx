"use client";

import { useState } from "react";
import styles from "./guide.module.css";

interface TOCItem {
  label: string;
  anchor: string;
}

export default function MobileTOC({ items }: { items: TOCItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.tocMobile}>
      <button
        className={styles.tocMobileBtn}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        On this page
        <span style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform .2s" }}>+</span>
      </button>
      <div className={`${styles.tocMobileList} ${open ? styles.tocMobileOpen : ""}`}>
        {items.map((item, i) => (
          <a key={i} href={item.anchor} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
