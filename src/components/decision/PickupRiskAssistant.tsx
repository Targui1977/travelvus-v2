"use client";

import { useState } from "react";

/**
 * Phase 127 — "Will Your Rental Car Pickup Be at Risk?"
 * Conservative decision assistant. Deterministic rules based only on
 * the user's own answers and the verified general principles of the
 * article. It does NOT predict any provider's behavior, does NOT
 * assign scores, and does not store anything.
 */

type Answer = "yes" | "no" | "unknown";

const QUESTIONS: { id: keyof typeof INITIAL; label: string; why: string }[] = [
  {
    id: "airport",
    label: "Is your booking at an airport rental office?",
    why: "Airport offices are where flight numbers and flight tracking have the most effect in the verified policies. Non-airport offices generally apply a fixed grace period instead (for example, 2 hours at Enterprise UK non-airport branches).",
  },
  {
    id: "flightNumber",
    label: "Have you supplied your flight number on the booking?",
    why: "A flight number is the trigger for the strongest protections we verified — SIXT's 24-hour guarantee, Hertz Switzerland's '1 hour after actual landing' rule, Enterprise UK's 'held until the flight lands and clears'. Without it, most offices fall back to a short grace period (SIXT: 60 minutes).",
  },
  {
    id: "arrivalBeforeClosing",
    label: "Will your flight arrive before the desk closes?",
    why: "Most hold rules are bounded by branch opening hours. Even a 24-hour guarantee is 'pickup available anytime during business hours' at SIXT. If you land after closing, only specific, conditional after-hours arrangements apply (and they can carry fees).",
  },
  {
    id: "prepaid",
    label: "Did you prepay the booking?",
    why: "Prepaid does not mean refundable. If you are marked as a no-show, the outcome differs by company and country: Budget UK/Spain/Australia refuse refunds, Enterprise UK refunds minus £125, Europcar Germany refunds minus up to €95. Know your number before you risk it.",
  },
  {
    id: "direct",
    label: "Did you book directly with the rental company?",
    why: "Broker terms are not supplier terms. Rentalcars.com states the supplier's rental agreement governs and the platform is not a party. If you booked through a broker, the desk applies the supplier's policy — which you should read in the supplier's own terms.",
  },
  {
    id: "writtenConfirmation",
    label: "Do you have written confirmation of a hold or after-hours pickup?",
    why: "Verbal promises at a counter do not survive a dispute. A written confirmation — an email naming the branch, the new time and any fee — is the only evidence you can show if the car is not there.",
  },
];

const INITIAL = {
  airport: "unknown",
  flightNumber: "unknown",
  arrivalBeforeClosing: "unknown",
  prepaid: "unknown",
  direct: "unknown",
  writtenConfirmation: "unknown",
} as const;

type Answers = Record<keyof typeof INITIAL, Answer>;

type Outcome = {
  level: "low" | "confirm" | "high";
  title: string;
  summary: string;
  steps: string[];
};

function evaluate(a: Answers): Outcome {
  const highRisk =
    a.flightNumber !== "yes" && a.arrivalBeforeClosing !== "yes";
  if (highRisk) {
    return {
      level: "high",
      title: "High risk of missed pickup",
      summary:
        "Without a flight number on the booking and a confirmed arrival before closing, most verified policies leave you with only a short grace period (or none) once the scheduled pickup time passes.",
      steps: [
        "Call the branch directly and tell them the new arrival time — before you board if possible.",
        "Ask exactly how long they will hold the car and whether any fee applies.",
        "Ask whether after-hours collection is available. Verified examples are conditional and priced: Enterprise Switzerland charges CHF 50 per 30 minutes; Europcar UK charges £60 (£20 for airport bookings with a flight number).",
        "Get the answer in writing. If they cannot hold the car, ask to move the pickup time instead of risking a no-show.",
        "Check the no-show fee in your booking terms before you decide anything: Europcar Germany charges up to €95, and a flight delay is explicitly not treated as force majeure there.",
      ],
    };
  }
  const lowRisk =
    a.flightNumber === "yes" &&
    a.airport === "yes" &&
    a.arrivalBeforeClosing === "yes" &&
    (a.direct === "yes" || a.writtenConfirmation === "yes");
  if (lowRisk) {
    return {
      level: "low",
      title: "Low uncertainty — with two final checks",
      summary:
        "Your setup matches the strongest protections in the verified policies: an airport office, a flight number on file, and an arrival inside opening hours. Under these conditions the policies we reviewed generally keep the reservation available. Two conditions still matter.",
      steps: [
        "Check the desk's actual closing time for your date — 'airport branches stay open up to 1 hour beyond closing' is a SIXT rule, not a universal one.",
        "One verified policy (Hertz Switzerland) only keeps the station open after hours if the airline has notified the delay — if your airline has not published the new arrival time, tell the branch yourself.",
        "Keep your booking reference and the flight number confirmation accessible at landing.",
        "If anything changes mid-air, call or message the branch from the plane's Wi-Fi before you land.",
      ],
    };
  }
  const reasons: string[] = [];
  if (a.flightNumber !== "yes")
    reasons.push("No flight number on the booking — protections fall back to a short grace period (e.g. SIXT: 60 minutes).");
  if (a.arrivalBeforeClosing === "unknown")
    reasons.push("You don't know whether you'll land before the desk closes — that single fact changes the outcome completely.");
  if (a.airport !== "yes")
    reasons.push("If this is not an airport office, fixed grace periods apply instead of flight-based holds (e.g. Enterprise UK non-airport: 2 hours).");
  if (a.prepaid === "yes")
    reasons.push("The booking is prepaid — if it is marked as a no-show, refunds are limited or refused depending on company and country.");
  if (a.direct !== "yes")
    reasons.push("Booked through a broker — the supplier's own terms apply, so the supplier's policy is the one to verify.");
  if (a.writtenConfirmation !== "yes")
    reasons.push("No written confirmation — a verbal promise is not evidence if the desk disputes the arrangement.");
  return {
    level: "confirm",
    title: "Confirmation required",
    summary:
      "Some of your answers leave material uncertainty. The steps below close each gap — none of them requires more than a phone call or an email, and each one removes a way for the reservation to be lost.",
    steps: [
      "Add your flight number to the booking if you have not already — this is the single highest-value action in every verified policy.",
      "Confirm the branch's closing time for your exact date and compare it with your expected arrival.",
      "Ask the branch in writing: how long will the car be held, is after-hours collection available, and what does it cost?",
      "If you prepaid, look up the no-show terms for your company and country — the refund outcome varies from 'full prepayment forfeited' to 'refund minus a fixed fee'.",
      "If you booked through a broker, read the supplier's own terms — the supplier's rental agreement governs the pickup.",
      ...reasons.map((r) => `Why this matters: ${r}`),
    ],
  };
}

const LEVEL_STYLES: Record<Outcome["level"], string> = {
  low: "riskLow",
  confirm: "riskConfirm",
  high: "riskHigh",
};

export default function PickupRiskAssistant() {
  const [answers, setAnswers] = useState<Answers>({ ...INITIAL });
  const answered = Object.values(answers).filter((v) => v !== "unknown").length;
  const complete = answered === QUESTIONS.length;
  const outcome = complete ? evaluate(answers) : null;

  return (
    <section className="riskAssistant" aria-label="Rental pickup risk assistant">
      <header className="riskHead">
        <span className="riskEyebrow">Decision assistant · no data stored</span>
        <h2 className="riskTitle">Will your rental car pickup be at risk?</h2>
        <p className="riskIntro">
          Answer the six questions below. The assistant applies the verified rules
          from this page — it is a checklist, not a prediction of what any company
          will do.
        </p>
      </header>

      <div className="riskBody">
      <div className="riskQuestions">
        {QUESTIONS.map((q, i) => (
          <fieldset key={q.id} className="riskQuestion">
            <legend>
              <span className="riskNum">{String(i + 1).padStart(2, "0")}</span>
              {q.label}
            </legend>
            <div className="riskOptions" role="radiogroup" aria-label={q.label}>
              {(["yes", "no", "unknown"] as const).map((v) => (
                <label key={v} className="riskOption">
                  <input
                    type="radio"
                    name={q.id}
                    value={v}
                    checked={answers[q.id] === v}
                    onChange={() => setAnswers((p) => ({ ...p, [q.id]: v }))}
                  />
                  <span>{v === "unknown" ? "Not sure" : v === "yes" ? "Yes" : "No"}</span>
                </label>
              ))}
            </div>
            <p className="riskWhy">{q.why}</p>
          </fieldset>
        ))}
      </div>

      <div className="riskResult" aria-live="polite">
        {!complete ? (
          <p className="riskPending">
            {answered === 0
              ? "Answer the six questions to see your outcome."
              : `Answer ${QUESTIONS.length - answered} more question${QUESTIONS.length - answered === 1 ? "" : "s"} to see your outcome.`}
          </p>
        ) : (
          <>
            <div className={`riskVerdict ${LEVEL_STYLES[outcome!.level]}`}>
              <span className="riskVerdictLabel">Outcome</span>
              <h3 className="riskVerdictTitle">{outcome!.title}</h3>
              <p className="riskVerdictSummary">{outcome!.summary}</p>
            </div>
            <div className="riskSteps">
              <span className="riskStepsLabel">Practical next steps</span>
              <ol className="riskStepList">
                {outcome!.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
            <p className="riskNote">
              This assistant uses only your answers and the verified general rules in
              this guide. It cannot know your rental company&rsquo;s specific terms for your
              branch — confirm those directly before you fly.
            </p>
          </>
        )}
      </div>
      </div>
    </section>
  );
}
