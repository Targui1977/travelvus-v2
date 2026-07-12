"use client";

import type { CalculationStage } from "@/lib/calculation-contract";
import type { StepState } from "@/lib/experience-state";
import CalculationStep from "./CalculationStep";
import styles from "./experience.module.css";

/* ── Props ────────────────────────────────────────────────── */

export interface CalculationStepListProps {
  stages: CalculationStage[];
  stepStates: StepState[];
}

/* ── Component ────────────────────────────────────────────── */

export default function CalculationStepList({
  stages,
  stepStates,
}: CalculationStepListProps) {
  if (stages.length === 0) return null;

  return (
    <div className={styles.stepList} role="list" aria-label="Calculation progress">
      {stages.map((stage, i) => {
        const stepState = stepStates[i];
        if (!stepState) return null;

        return (
          <div role="listitem" key={stage.id}>
            <CalculationStep
              label={stage.label}
              detail={stage.detail}
              status={stepState.status}
              valueA={stage.valueA}
              valueB={stage.valueB}
              evidenceNote={stage.evidenceNote}
              isLast={i === stages.length - 1}
            />
          </div>
        );
      })}
    </div>
  );
}
