import type { SecondaryFlip } from "@/lib/types";

interface SecondaryFlipsProps {
  flips: SecondaryFlip[];
}

export default function SecondaryFlips({ flips }: SecondaryFlipsProps) {
  return (
    <div style={{ marginTop: 24 }}>
      {/* Header */}
      <div className="flips-header">Other ways the verdict flips</div>

      {/* Editorial list — NOT cards */}
      <ul className="flips-list">
        {flips.map((flip, i) => (
          <li key={i} className="flips-item">
            <span
              className="flips-condition"
              dangerouslySetInnerHTML={{ __html: flip.conditionHtml }}
            />
            <span
              className="flips-outcome"
              dangerouslySetInnerHTML={{ __html: flip.outcomeHtml }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
