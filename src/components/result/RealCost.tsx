import type { CostLine, OptionId } from "@/lib/types";
import OptionToken from "@/components/ui/OptionToken";

/* ── Types ────────────────────────────────────────────── */

export interface CostLineDisplay extends CostLine {
  /** If this row was edited, show old→new */
  oldAmount?: number;
}

export interface CostColumnDisplay {
  name: string;
  code: string;
  visibleTicketPrice: number;
  costLines: CostLineDisplay[];
  realCost: number;
  /** Show "was €X" instead of the ticket price */
  oldRealCost?: number;
  /** Show "unchanged" marker */
  isUnchanged?: boolean;
  /** Override winner marker */
  isWinner?: boolean;
}

interface RealCostProps {
  optionA: CostColumnDisplay;
  optionB: CostColumnDisplay;
  winner: OptionId;
  editorial?: string;
  sectionTitle?: string;
}

/* ── Row ──────────────────────────────────────────────── */

function CostRow({ line }: { line: CostLineDisplay }) {
  const isEdited = line.oldAmount !== undefined;

  if (!isEdited) {
    return (
      <div className="cost-row">
        <span className="cost-row-label">{line.label}</span>
        <span
          className={`cost-row-amount${line.isIncluded ? " zero" : ""}`}
        >
          {line.isIncluded ? "€0" : `€${line.amount}`}
        </span>
      </div>
    );
  }

  /* Edited row: shows old struck → new */
  return (
    <div className="cost-row edited">
      <span className="cost-row-label">
        <span className="edit-tag">edited</span>
        {line.label}
      </span>
      <span className="cost-row-amount" style={{ color: "var(--muted)" }}>
        <span
          style={{
            textDecoration: "line-through",
            color: "#b0aa9a",
          }}
        >
          €{line.oldAmount}
        </span>{" "}
        → €{line.amount}
      </span>
    </div>
  );
}

/* ── Column ───────────────────────────────────────────── */

function CostColumn({
  option,
  data,
}: {
  option: OptionId;
  data: CostColumnDisplay;
}) {
  const winner = data.isWinner ?? false;

  return (
    <div className="cost-column">
      {/* Header */}
      <div className="cost-column-header">
        <OptionToken
          option={option}
          state={winner ? "winner" : "neutral"}
        />
        <span className="cost-column-name">{data.name}</span>
        <span className="cost-column-code">{data.code}</span>
        {data.isUnchanged && (
          <span className="unchanged-marker">unchanged</span>
        )}
      </div>

      {/* Cost lines */}
      {data.costLines.map((line, i) => (
        <CostRow key={i} line={line} />
      ))}

      {/* Total */}
      <div className="cost-total">
        <span>
          <span className="cost-total-label">Real cost</span>
          <br />
          <span className="cost-total-struck">
            {data.oldRealCost !== undefined
              ? `was €${data.oldRealCost}`
              : `visible €${data.visibleTicketPrice}`}
          </span>
        </span>
        <span
          className="cost-total-num"
          style={{ color: winner ? "var(--ink)" : "var(--grey)" }}
        >
          €{data.realCost}
        </span>
      </div>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────── */

export default function RealCost({
  optionA,
  optionB,
  winner,
  editorial,
  sectionTitle,
}: RealCostProps) {
  return (
    <div>
      <div className="section-label">
        <span className="section-label-num">01</span>
        <span className="section-label-title">
          {sectionTitle ?? "Real cost — door to door"}
        </span>
      </div>

      <div className="cost-grid">
        <CostColumn option="A" data={optionA} />
        <CostColumn option="B" data={optionB} />
      </div>

      {editorial && (
        <p
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 1.5,
            color: "var(--muted)",
            marginTop: 14,
            maxWidth: 560,
          }}
        >
          {editorial}
        </p>
      )}
    </div>
  );
}
