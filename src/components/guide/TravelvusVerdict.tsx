"use client";

import { useEffect, useState } from "react";
import styles from "./guide.module.css";

interface VerdictStat {
  label: string;
  value: string;
  unit?: string;
  accent?: boolean;
}

interface Props {
  verdictLine: string;
  stats: [VerdictStat, VerdictStat, VerdictStat];
}

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }

export default function TravelvusVerdict({ verdictLine, stats }: Props) {
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState(stats.map(() => 0));
  const targets = stats.map((s) => parseInt(s.value) || 0);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setValues(targets);
      setMounted(true);
      return;
    }
    const t1 = setTimeout(() => setMounted(true), 40);
    const t2 = setTimeout(() => {
      const start = performance.now();
      const duration = 700;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValues(targets.map((v) => Math.round(v * easeOutCubic(t))));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 380);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className={`${styles.verdict} ${mounted ? styles.verdictVisible : ""}`}>
      <div className={styles.verdictHd}>
        <span className={styles.verdictKicker}>Travelvus verdict</span>
        <span className={styles.verdictSig}>
          <span className={styles.verdictSigLine} />
          <span className={styles.verdictSigDot} />
        </span>
      </div>
      <div className={styles.verdictHeadline}>{verdictLine}</div>
      <div className={styles.verdictStats}>
        {stats.map((s, i) => (
          <div key={s.label}>
            <div className={styles.verdictStatLabel}>{s.label}</div>
            <div className={s.accent ? styles.verdictStatAccent : styles.verdictStatVal}>
              {values[i]}{s.unit ? ` ${s.unit}` : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
