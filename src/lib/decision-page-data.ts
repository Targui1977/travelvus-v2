/**
 * Travelvus V2 — Decision Page Data Contract
 *
 * Typed contract for all Travelvus Decision Pages.
 * Every future Decision Page must conform to this contract.
 * The page renderer consumes this contract — never duplicates JSX.
 *
 * Phase 91.2
 */

/* ── Core types ────────────────────────────────────────────── */

export interface DecisionPageData {
  /** URL slug, e.g. "berlin-to-london" */
  slug: string;

  /** Category label shown above the question */
  category: string;

  /** The single decision question this page answers */
  question: string;

  /** Short answer shown below the question */
  shortAnswer: string;

  /** Confidence level — only include if editorially justified */
  confidence?: string;

  /** Last reviewed date (Month YYYY) */
  lastReviewed: string;

  /** Whether methodology has been verified */
  methodologyVerified: boolean;

  /** Verdict data consumed by TravelvusVerdict */
  verdict: DecisionVerdict;

  /** At-a-glance comparison rows */
  atAGlance: AtAGlanceRow[];

  /** Why the winner wins (3-5 numbered reasons) */
  winnerReasons: string[];

  /** When the alternative option is actually better */
  alternative: DecisionAlternative;

  /** Real cost breakdown rows */
  costBreakdown: CostBreakdownRow[];

  /** Door-to-door journey timeline stages */
  journeyTimeline: TimelineStage[];

  /** Traveller-type scenarios with recommendations */
  scenarios: TravellerScenario[];

  /** Common mistakes with fixes */
  commonMistakes: CommonMistake[];

  /** FAQ items for the shared FAQAccordion */
  faqItems: FAQItem[];

  /** Call-to-action section */
  cta: DecisionCTA;

  /** Related decision cards */
  continueCards: ContinueCard[];

  /** Source references for factual claims */
  sources?: DecisionSource[];

  /** Illustrative assumptions disclosed to the reader */
  assumptions?: string[];

  /** Date when factual claims should next be reviewed */
  factualReviewDate?: string;
}

/* ── Sub-types ────────────────────────────────────────────── */

export interface DecisionVerdict {
  line: string;
  stats: [
    { label: string; value: string; unit: string; accent?: boolean },
    { label: string; value: string; unit: string; accent?: boolean },
    { label: string; value: string; unit: string; accent?: boolean }
  ];
}

export interface AtAGlanceRow {
  factor: string;
  winner: string;
  a: string;
  b: string;
  verdict: string;
  isFinal?: boolean;
}

export interface DecisionAlternative {
  title: string;
  points: string[];
}

export interface CostBreakdownRow {
  label: string;
  a: string;
  b: string;
  winner: "a" | "b" | "tie";
  note?: string;
}

export interface TimelineStage {
  stage: string;
  a: string;
  b: string;
  isFinal?: boolean;
}

export interface TravellerScenario {
  who: string;
  choice: string;
  why: string;
}

export interface CommonMistake {
  mistake: string;
  fix: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DecisionCTA {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export interface ContinueCard {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  link: string;
}

export interface DecisionSource {
  /** What the source supports */
  claim: string;
  /** Public source name, e.g. "TfL" or "National Rail" */
  source: string;
  /** Optional URL for verification */
  url?: string;
}

/* ── Factory ───────────────────────────────────────────────── */

/**
 * Validate that a DecisionPageData object has all required sections.
 * Returns missing sections as strings.
 */
export function validateDecisionPage(data: DecisionPageData): string[] {
  const issues: string[] = [];

  if (!data.slug) issues.push("Missing slug");
  if (!data.question) issues.push("Missing question");
  if (!data.shortAnswer) issues.push("Missing shortAnswer");
  if (!data.verdict?.line) issues.push("Missing verdict line");
  if (!data.atAGlance?.length) issues.push("Missing at-a-glance rows");
  if (!data.winnerReasons?.length) issues.push("Missing winner reasons");
  if (!data.alternative?.points?.length) issues.push("Missing alternative points");
  if (!data.costBreakdown?.length) issues.push("Missing cost breakdown");
  if (!data.journeyTimeline?.length) issues.push("Missing journey timeline");
  if (!data.scenarios?.length) issues.push("Missing scenarios");
  if (!data.commonMistakes?.length) issues.push("Missing common mistakes");
  if (!data.faqItems?.length) issues.push("Missing FAQ items");

  return issues;
}
