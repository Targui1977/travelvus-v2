/**
 * URL-based state transfer between Quick Compare and Result.
 * Keys deliberately compact (not user-facing). Values are normalized.
 *
 * Key reference:
 *   at  = A ticket price (numeric, e.g. "58")
 *   af  = A from airport (e.g. "Berlin · BER")
 *   at2 = A to airport   (e.g. "London · STN")
 *   ad  = A departure time (HH:MM, e.g. "20:40")
 *   aa  = A arrival time   (HH:MM, e.g. "23:15")
 *   bt  = B ticket price
 *   bf  = B from airport
 *   bt2 = B to airport
 *   bd  = B departure time
 *   ba  = B arrival time
 */

export interface CompareParams {
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
}

/**
 * Encode Quick Compare fields into URL search params.
 * Prices are stripped of € symbol before encoding.
 */
export function encodeCompareParams(p: CompareParams): string {
  const sp = new URLSearchParams();
  // Strip currency symbols from prices
  const atVal = p.aTicket.replace(/[€$£]/g, "").trim();
  const btVal = p.bTicket.replace(/[€$£]/g, "").trim();

  sp.set("at", atVal);
  sp.set("af", p.aFrom.trim());
  sp.set("at2", p.aTo.trim());
  sp.set("ad", p.aDep.trim());
  sp.set("aa", p.aArr.trim());
  sp.set("bt", btVal);
  sp.set("bf", p.bFrom.trim());
  sp.set("bt2", p.bTo.trim());
  sp.set("bd", p.bDep.trim());
  sp.set("ba", p.bArr.trim());
  return sp.toString();
}

/**
 * Decode URL search params into CompareParams.
 * Returns null if ANY required field is missing or empty.
 */
export function decodeCompareParams(
  searchParams: URLSearchParams
): CompareParams | null {
  const keys = ["at", "af", "at2", "ad", "aa", "bt", "bf", "bt2", "bd", "ba"];
  const vals = keys.map((k) => searchParams.get(k));

  if (vals.some((v) => !v || v.trim() === "")) return null;

  return {
    aTicket: vals[0]!,
    aFrom: vals[1]!,
    aTo: vals[2]!,
    aDep: vals[3]!,
    aArr: vals[4]!,
    bTicket: vals[5]!,
    bFrom: vals[6]!,
    bTo: vals[7]!,
    bDep: vals[8]!,
    bArr: vals[9]!,
  };
}
