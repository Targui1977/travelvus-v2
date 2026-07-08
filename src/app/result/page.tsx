import { Suspense } from "react";
import ResultClient from "./ResultClient";

/**
 * Server wrapper — provides Suspense boundary for useSearchParams().
 * The actual result logic lives in ResultClient (client component).
 */
export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            maxWidth: "var(--container-compare)",
            margin: "0 auto",
            background: "var(--paper)",
            padding: "60px 38px",
            fontFamily: "var(--sans)",
            color: "var(--muted)",
            textAlign: "center",
          }}
        >
          Loading result&hellip;
        </div>
      }
    >
      <ResultClient />
    </Suspense>
  );
}
