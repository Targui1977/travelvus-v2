import type { ThresholdData } from "@/lib/types";

interface DecisionThresholdProps {
  data: ThresholdData;
}

export default function DecisionThreshold({ data }: DecisionThresholdProps) {
  return (
    <div>
      {/* Section label */}
      <div className="section-label">
        <span className="section-label-num">03</span>
        <span className="section-label-title">
          What would change the verdict?
        </span>
      </div>

      {/* T2: "The line" — measured ruler, not a chart */}
      <div className="threshold-block">
        {/* Lead */}
        <div className="threshold-lead">{data.leadLabel}</div>

        {/* Statement */}
        <div
          className="threshold-stmt"
          dangerouslySetInnerHTML={{ __html: data.statementHtml }}
        />

        {/* The axis — exactly two ticks, one copper segment */}
        <div className="threshold-axis">
          {/* Hairline rule */}
          <div className="threshold-axis-rule" />

          {/* Copper segment between the two ticks */}
          <div
            className="threshold-axis-seg"
            style={{
              left: `${data.linePct}%`,
              width: `${data.nowPct - data.linePct}%`,
            }}
          />

          {/* Soft tick: "The line" */}
          <div
            className="threshold-axis-tk soft"
            style={{ left: `${data.linePct}%` }}
          />

          {/* Solid tick: "Now" */}
          <div
            className="threshold-axis-tk"
            style={{ left: `${data.nowPct}%` }}
          />

          {/* Gap label */}
          <div
            className="threshold-gap"
            style={{
              left: `${(data.linePct + data.nowPct) / 2}%`,
            }}
          >
            {data.gapLabel}
          </div>

          {/* Label: The line */}
          <div
            className="threshold-axis-lab"
            style={{ left: `${data.linePct}%` }}
          >
            <span className="threshold-axis-lab-k">The line</span>
            <span className="threshold-axis-lab-v">
              {data.unit}
              {data.lineValue}
            </span>
          </div>

          {/* Label: Now */}
          <div
            className="threshold-axis-lab here"
            style={{ left: `${data.nowPct}%` }}
          >
            <span className="threshold-axis-lab-k">Now</span>
            <span className="threshold-axis-lab-v">
              {data.unit}
              {data.currentValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
