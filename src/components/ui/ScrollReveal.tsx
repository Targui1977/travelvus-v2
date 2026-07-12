"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";

export default function ScrollReveal({
  children,
  stagger = 0,
}: {
  children: React.ReactNode;
  stagger?: 0 | 1 | 2;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const staggerClass =
    stagger === 1 ? styles.stagger1 : stagger === 2 ? styles.stagger2 : "";

  return (
    <div
      ref={ref}
      className={`${styles.animateIn} ${visible ? styles.visible : ""} ${staggerClass}`}
    >
      {children}
    </div>
  );
}
