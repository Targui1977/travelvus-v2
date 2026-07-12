"use client";

import { useState } from "react";
import styles from "./guide.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={styles.faqItem}>
            <button
              className={`${styles.faqTrigger} ${isOpen ? styles.faqOpen : ""}`}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              {item.question}
              <span>+</span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`${styles.faqPanel} ${isOpen ? styles.faqPanelOpen : ""}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
