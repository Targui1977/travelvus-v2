import OptionToken from "@/components/ui/OptionToken";

interface DoorToDoorProps {
  gapLabel: string; // "2h 55m"
  gapCaption: string;
  optionA: {
    name: string;
    code: string;
    label: string; // "8h 05m"
    totalMins: number;
  };
  optionB: {
    name: string;
    code: string;
    label: string; // "5h 10m"
    totalMins: number;
  };
  winner: "A" | "B";
  footnote: string;
}

export default function DoorToDoor({
  gapLabel,
  gapCaption,
  optionA,
  optionB,
  winner,
  footnote,
}: DoorToDoorProps) {
  return (
    <div>
      {/* Section label */}
      <div className="section-label">
        <span className="section-label-num">02</span>
        <span className="section-label-title">
          Door-to-door time — not just flight length
        </span>
      </div>

      {/* T2 refined: gap hero + quiet totals */}
      <div className="dd-hero">
        {/* The gap — the hero */}
        <div className="dd-gap">
          <div className="dd-gap-kicker">Option A asks for</div>
          <div className="dd-gap-big">{gapLabel}</div>
          <div className="dd-gap-cap">{gapCaption}</div>
        </div>

        {/* Quiet totals */}
        <div className="dd-totals">
          <div className="dd-total-row">
            <span className="dd-total-who">
              <OptionToken option="A" state="neutral" size="compact" />
              <span>{optionA.name}</span>
            </span>
            <span className="dd-total-dur muted">{optionA.label}</span>
          </div>
          <div className="dd-total-row">
            <span className="dd-total-who">
              <OptionToken
                option="B"
                state={winner === "B" ? "winner" : "neutral"}
                size="compact"
              />
              <span>{optionB.name}</span>
            </span>
            <span
              className="dd-total-dur"
              style={{ color: winner === "B" ? "var(--ink)" : "var(--grey)" }}
            >
              {optionB.label}
            </span>
          </div>
          <div className="dd-footnote">{footnote}</div>
        </div>
      </div>
    </div>
  );
}
