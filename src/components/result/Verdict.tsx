import type { VerdictData } from "@/lib/types";
import Signature from "@/components/ui/Signature";

interface VerdictProps {
  data: VerdictData;
}

export default function Verdict({ data }: VerdictProps) {
  return (
    <div className="verdict-block">
      {/* Top row: kicker + signature */}
      <div className="flex items-center justify-between mb-[20px]">
        <span className="kicker" style={{ color: "var(--copper-lt)" }}>
          The Verdict
        </span>
        <Signature variant="verdict" />
      </div>

      {/* Headline */}
      <h2 dangerouslySetInnerHTML={{ __html: data.headlineHtml }} />

      {/* Subtext */}
      <div
        className="verdict-sub"
        dangerouslySetInnerHTML={{ __html: data.subtextHtml }}
      />

      {/* Foot: confidence + provenance + priority */}
      <div className="verdict-foot">
        <span
          className="confidence-tag"
          style={{ color: "#c8d0d6" }}
        >
          <span className="confidence-dot strong" />
          {data.confidenceLabel}
        </span>
        <span
          style={{
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "rgba(244,241,234,.3)",
            flex: "none",
          }}
        />
        <span
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 400,
            fontSize: 11,
            lineHeight: 1,
            color: "var(--pmuted)",
          }}
        >
          {data.provenance}
        </span>
        <span style={{ flex: 1 }} />
        <span
          style={{
            fontFamily: "var(--mono)",
            fontWeight: 500,
            fontSize: 11,
            lineHeight: 1,
            color: "var(--pmuted)",
          }}
        >
          {data.priority}
        </span>
      </div>
    </div>
  );
}
