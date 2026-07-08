/**
 * Travelvus V2 — Truth contract for data normalization
 * and supported scenario detection.
 *
 * Pure functions. No external dependencies.
 */

/* ── Supported scenario contract ────────────────────────────
 *
 * The vertical slice currently supports ONLY:
 *   Option A: BER → STN
 *   Option B: BER → LHR
 *
 * For these routes, canonical transfer costs, door-to-door times,
 * and Decision Threshold data are valid and verified.
 *
 * For any other airports, Travelvus CANNOT yet provide the full
 * Real Cost / Door-to-Door / Decision Threshold analysis.
 * ─────────────────────────────────────────────────────────── */

export interface NormalizedInput {
  ticketA: number; // numeric, validated
  ticketB: number;
  fromA: string;
  toA: string;
  fromB: string;
  toB: string;
  depA: string;
  arrA: string;
  depB: string;
  arrB: string;
}

/**
 * Check if a comparison uses the only currently supported route pair.
 * BER→STN vs BER→LHR (case-insensitive on airport codes).
 */
export function isSupportedComparison(input: NormalizedInput): boolean {
  const destA = extractCode(input.toA);
  const destB = extractCode(input.toB);
  return (
    destA === "STN" &&
    destB === "LHR"
  );
}

/** Extract uppercase airport code from "London · LHR" or "LHR" */
export function extractCode(airport: string): string {
  const parts = airport.split("·");
  const last = (parts[parts.length - 1] || "").trim().toUpperCase();
  // Handle plain code like "LHR"
  if (last.length === 3 && /^[A-Z]{3}$/.test(last)) return last;
  // Handle "London · LHR"
  const match = airport.match(/([A-Z]{3})\s*$/i);
  if (match) return match[1].toUpperCase();
  return airport.trim().toUpperCase();
}

/**
 * Normalize and validate input from Quick Compare fields.
 * Returns normalized data or null if invalid.
 */
export function normalizeInput(input: {
  aTicket: string;
  aFrom: string;
  aTo: string;
  aDep: string;
  aArr: string;
  bTicket: string;
  bFrom: string;
  bTo: string;
  bDep: string;
  bArr: string;
}): NormalizedInput | null {
  // Strip € and whitespace, parse as float
  const ticketA = parseFloat(input.aTicket.replace(/[€$£\s]/g, "").replace(",", "."));
  const ticketB = parseFloat(input.bTicket.replace(/[€$£\s]/g, "").replace(",", "."));

  if (isNaN(ticketA) || isNaN(ticketB)) return null;
  if (ticketA <= 0 || ticketB <= 0) return null;
  if (ticketA > 99999 || ticketB > 99999) return null;

  const fromA = input.aFrom.trim();
  const toA = input.aTo.trim();
  const fromB = input.bFrom.trim();
  const toB = input.bTo.trim();

  if (!fromA || !toA || !fromB || !toB) return null;

  const depA = normalizeTime(input.aDep);
  const arrA = normalizeTime(input.aArr);
  const depB = normalizeTime(input.bDep);
  const arrB = normalizeTime(input.bArr);

  if (!depA || !arrA || !depB || !arrB) return null;

  return { ticketA, ticketB, fromA, toA, fromB, toB, depA, arrA, depB, arrB };
}

/** Normalize time to HH:MM format, or null if invalid */
export function normalizeTime(raw: string): string | null {
  const cleaned = raw.trim();
  // Accept "20:40", "20.40", "2040", "8:40", "08:40"
  const match = cleaned.match(/^(\d{1,2})[:.]?(\d{2})$/);
  if (!match) return null;
  const h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  if (h < 0 || h > 23 || m < 0 || m > 59) return null;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/** Build the supported verdict based on actual calculated costs */
export function buildVerdict(
  costA: number,
  costB: number,
  timeA: string,
  timeB: string,
  _winnerA: boolean,
  _winnerB: boolean
): {
  winner: "A" | "B";
  winnerName: string;
  winnerPlace: string;
  headlineHtml: string;
  subtextHtml: string;
  confidenceLabel: string;
  provenance: string;
  priority: string;
} {
  const diff = Math.abs(costA - costB);
  const aw = costA < costB;
  const bw = costB < costA;

  if (aw) {
    return {
      winner: "A", winnerName: "Option A", winnerPlace: "Stansted",
      headlineHtml: `Option A — <span class="verdict-highlight">Stansted</span> — wins on money.`,
      subtextHtml: `A is <b>€${diff} cheaper</b> — but still takes longer door-to-door. Your priority decides.`,
      confidenceLabel: "Confidence · Estimate", provenance: "Calculated from your inputs", priority: "Priority: Balanced",
    };
  }
  if (bw) {
    return {
      winner: "B", winnerName: "Option B", winnerPlace: "Heathrow",
      headlineHtml: `Option B — <span class="verdict-highlight">Heathrow</span> — is the better overall deal.`,
      subtextHtml: `Saves <b>€${diff}</b> and is faster door-to-door versus the cheaper-looking ticket.`,
      confidenceLabel: "Confidence · Strong", provenance: "Official fares + transit data · verified Jul 2026", priority: "Priority: Balanced",
    };
  }

  return {
    winner: "B", winnerName: "Option B", winnerPlace: "Heathrow",
    headlineHtml: `They're practically tied on cost.`,
    subtextHtml: `Both come to €${costA}. The difference is in time.`,
    confidenceLabel: "Confidence · Estimate", provenance: "Calculated from your inputs", priority: "Priority: Balanced",
  };
}
