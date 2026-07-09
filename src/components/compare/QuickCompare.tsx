"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import OptionToken from "@/components/ui/OptionToken";
import Kicker from "@/components/ui/Kicker";
import { encodeCompareParams } from "@/lib/navigation";

/* ── Types ─────────────────────────────────────────────── */
interface OptionInput {
  ticketPrice: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
}

interface ComparisonState {
  optionA: OptionInput;
  optionB: OptionInput;
}

/* ── Canonical mock data (Heathrow vs Stansted, Hi-Fi T2) ── */
const INITIAL: ComparisonState = {
  optionA: {
    ticketPrice: "€58",
    origin: "Berlin · BER",
    destination: "London · STN",
    departureTime: "20:40",
    arrivalTime: "23:15",
  },
  optionB: {
    ticketPrice: "€126",
    origin: "Berlin · BER",
    destination: "London · LHR",
    departureTime: "14:10",
    arrivalTime: "16:45",
  },
};

/* ── Sub-components ────────────────────────────────────── */

/** A single underline-style field (matches .fld3 from Hi-Fi) */
function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="field-underline">
      <span className="field-underline-label">{label}</span>
      <input
        className="field-underline-value border-none bg-transparent text-right outline-none w-full"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
    </div>
  );
}

/** The five fields for one option — used in desktop */
function OptionFieldsDesktop({
  option,
  data,
  onChange,
}: {
  option: "A" | "B";
  data: OptionInput;
  onChange: (key: keyof OptionInput, value: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-[10px] mb-[16px] pb-[14px] border-b border-[var(--line)]">
        <OptionToken option={option} state="neutral" />
        <span className="font-semibold text-[14px] leading-none font-[var(--sans)] text-[var(--ink)]">
          Option {option}
        </span>
      </div>

      <Field
        label="Ticket price"
        value={data.ticketPrice}
        onChange={(v) => onChange("ticketPrice", v)}
      />
      <Field
        label="From"
        value={data.origin}
        onChange={(v) => onChange("origin", v)}
      />
      <Field
        label="To"
        value={data.destination}
        onChange={(v) => onChange("destination", v)}
      />
      <Field
        label="Departs"
        value={data.departureTime}
        onChange={(v) => onChange("departureTime", v)}
      />
      <Field
        label="Arrives"
        value={data.arrivalTime}
        onChange={(v) => onChange("arrivalTime", v)}
      />
    </div>
  );
}

/** The "vs" central axis — the confrontation, not decoration */
function VsDivider() {
  return (
    <div className="flex flex-col items-center justify-start pt-[44px] gap-[10px]">
      <div
        className="w-px flex-1 min-h-[40px]"
        style={{ background: "var(--line-2)" }}
      />
      <span className="font-[var(--serif)] font-normal italic text-[22px] leading-none text-[var(--muted)]">
        vs
      </span>
      <div
        className="w-px flex-1 min-h-[40px]"
        style={{ background: "var(--line-2)" }}
      />
    </div>
  );
}

/* ── Main component ────────────────────────────────────── */
export default function QuickCompare({ standalone = true }: { standalone?: boolean }) {
  const router = useRouter();
  const [state, setState] = useState<ComparisonState>(INITIAL);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");
  const [errors, setErrors] = useState<string[]>([]);

  const updateOption = (
    option: "A" | "B",
    field: keyof OptionInput,
    value: string
  ) => {
    setErrors([]);
    setState((prev) => ({
      ...prev,
      [option === "A" ? "optionA" : "optionB"]: {
        ...prev[option === "A" ? "optionA" : "optionB"],
        [field]: value,
      },
    }));
  };

  const handleCtaClick = () => {
    const a = state.optionA;
    const b = state.optionB;
    const errs: string[] = [];

    if (!a.ticketPrice || isNaN(parseFloat(a.ticketPrice.replace("€", "").trim())))
      errs.push("Option A: enter a valid ticket price");
    if (!a.origin || !a.origin.includes("·")) errs.push("Option A: enter origin airport (e.g. Berlin · BER)");
    if (!a.destination || !a.destination.includes("·")) errs.push("Option A: enter destination airport (e.g. London · STN)");
    if (!b.ticketPrice || isNaN(parseFloat(b.ticketPrice.replace("€", "").trim())))
      errs.push("Option B: enter a valid ticket price");
    if (!b.origin || !b.origin.includes("·")) errs.push("Option B: enter origin airport");
    if (!b.destination || !b.destination.includes("·")) errs.push("Option B: enter destination airport");

    if (errs.length > 0) {
      setErrors(errs);
      return;
    }

    const params = encodeCompareParams({
      aTicket: a.ticketPrice,
      aFrom: a.origin,
      aTo: a.destination,
      aDep: a.departureTime,
      aArr: a.arrivalTime,
      bTicket: b.ticketPrice,
      bFrom: b.origin,
      bTo: b.destination,
      bDep: b.departureTime,
      bArr: b.arrivalTime,
    });
    router.push(`/result?${params}`);
  };

  const a = state.optionA;
  const b = state.optionB;


  const qcBody = (
    <>

      {/* ═══ Body ═══ */}
      <div className="px-[32px] pt-[28px] pb-[28px] mobile:px-[18px] mobile:pt-[20px]">

        {/* ── Eyebrow ── */}
        <Kicker color="copper" className="mb-[10px] mobile:mb-[9px]">
          Travelvus Compare &middot; Flights
        </Kicker>

        {/* ── Headline ── */}
        <h2 className="font-[var(--serif)] font-normal text-[38px] leading-[1.12] tracking-[-0.01em] max-w-[520px] mb-[8px] mobile:text-[27px] mobile:leading-[1.13] mobile:mb-[8px]">
          You found two flights. Which really wins?
        </h2>

        {/* ── Supporting copy ── */}
        <p className="font-[var(--sans)] font-normal text-[14px] leading-[1.5] text-[var(--muted)] max-w-[480px] mb-[6px] mobile:text-[12.5px] mobile:leading-[1.45] mobile:mb-[18px]">
          Bring the two options you already found. Travelvus will judge them
          &mdash; verdict now, refine with baggage &amp; transfers next.
        </p>

        {/* ── Optional date (desktop) ── */}
        <div className="mobile:hidden flex items-center gap-[8px] mb-[22px]">
          <span className="font-[var(--mono)] font-medium text-[11px] leading-none text-[#9a9484]">
            Travel date &mdash; optional, we&rsquo;ll assume a typical weekday
          </span>
          <span className="qc-refine-link text-[11px]">Add date</span>
        </div>

        {/* ═══════════════════════════════════════════════
             DESKTOP — three columns: A | vs | B
             ═══════════════════════════════════════════════ */}
        <div className="mobile:hidden grid grid-cols-[1fr_auto_1fr] gap-x-[28px] border-t border-[var(--line)] pt-[22px]">
          <OptionFieldsDesktop
            option="A"
            data={a}
            onChange={(k, v) => updateOption("A", k, v)}
          />
          <VsDivider />
          <OptionFieldsDesktop
            option="B"
            data={b}
            onChange={(k, v) => updateOption("B", k, v)}
          />
        </div>

        {/* ═══ Validation errors ═══ */}
        {errors.length > 0 && (
          <div className="mobile:hidden mt-[16px]" role="alert">
            {errors.map((e, i) => (
              <p
                key={i}
                className="font-[var(--sans)] text-[13px] text-[#a3402f] mb-[4px]"
              >
                {e}
              </p>
            ))}
          </div>
        )}

        {/* ═══ CTA row (desktop) ═══ */}
        <div className="mobile:hidden flex items-center gap-[18px] mt-[24px]">
          <button
            className="qc-cta flex-1 max-w-[380px]"
            onClick={handleCtaClick}
            aria-label="Compare options and see which really wins"
          >
            See which option really wins
          </button>
          <span className="qc-refine-link">Add details to refine &rarr;</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
           MOBILE — A|B tabs + active option fields
           ═══════════════════════════════════════════════ */}
      <div className="hidden mobile:block px-[18px] pt-[0]" style={{ paddingBottom: "calc(80px + env(safe-area-inset-bottom, 0px))" }}>
        {/* Tab switcher */}
        <div className="flex gap-[8px] mb-[18px]">
          <button
            className={`qc-tab ${activeTab === "A" ? "qc-tab-active" : "qc-tab-inactive"}`}
            onClick={() => setActiveTab("A")}
          >
            <span
              className="inline-flex items-center justify-center flex-none rounded-full"
              style={{
                width: 19,
                height: 19,
                fontSize: 10,
                fontWeight: 600,
                lineHeight: 1,
                background: activeTab === "A" ? "var(--paper)" : "transparent",
                color: activeTab === "A" ? "var(--navy)" : "var(--grey)",
                border: activeTab === "A" ? "none" : "1.5px solid var(--grey)",
              }}
            >
              A
            </span>
            Option A
          </button>

          <button
            className={`qc-tab ${activeTab === "B" ? "qc-tab-active" : "qc-tab-inactive"}`}
            onClick={() => setActiveTab("B")}
          >
            <span
              className="inline-flex items-center justify-center flex-none rounded-full"
              style={{
                width: 19,
                height: 19,
                fontSize: 10,
                fontWeight: 600,
                lineHeight: 1,
                background: activeTab === "B" ? "var(--paper)" : "transparent",
                color: activeTab === "B" ? "var(--navy)" : "var(--grey)",
                border: activeTab === "B" ? "none" : "1.5px solid var(--grey)",
              }}
            >
              B
            </span>
            Option B
          </button>
        </div>

        {/* Active option fields */}
        {activeTab === "A" ? (
          <>
            <Field label="Ticket price" value={a.ticketPrice} onChange={(v) => updateOption("A", "ticketPrice", v)} />
            <Field label="From" value={a.origin} onChange={(v) => updateOption("A", "origin", v)} />
            <Field label="To" value={a.destination} onChange={(v) => updateOption("A", "destination", v)} />
            <div className="flex gap-[16px]">
              <div className="field-underline flex-1">
                <span className="field-underline-label">Dep</span>
                <input className="field-underline-value border-none bg-transparent text-right outline-none w-full" type="text" value={a.departureTime} onChange={(e) => updateOption("A", "departureTime", e.target.value)} aria-label="Departure time" />
              </div>
              <div className="field-underline flex-1">
                <span className="field-underline-label">Arr</span>
                <input className="field-underline-value border-none bg-transparent text-right outline-none w-full" type="text" value={a.arrivalTime} onChange={(e) => updateOption("A", "arrivalTime", e.target.value)} aria-label="Arrival time" />
              </div>
            </div>
          </>
        ) : (
          <>
            <Field label="Ticket price" value={b.ticketPrice} onChange={(v) => updateOption("B", "ticketPrice", v)} />
            <Field label="From" value={b.origin} onChange={(v) => updateOption("B", "origin", v)} />
            <Field label="To" value={b.destination} onChange={(v) => updateOption("B", "destination", v)} />
            <div className="flex gap-[16px]">
              <div className="field-underline flex-1">
                <span className="field-underline-label">Dep</span>
                <input className="field-underline-value border-none bg-transparent text-right outline-none w-full" type="text" value={b.departureTime} onChange={(e) => updateOption("B", "departureTime", e.target.value)} aria-label="Departure time" />
              </div>
              <div className="field-underline flex-1">
                <span className="field-underline-label">Arr</span>
                <input className="field-underline-value border-none bg-transparent text-right outline-none w-full" type="text" value={b.arrivalTime} onChange={(e) => updateOption("B", "arrivalTime", e.target.value)} aria-label="Arrival time" />
              </div>
            </div>
          </>
        )}

        <div className="flex items-center gap-[8px] mt-[14px]">
          <span className="font-[var(--mono)] font-medium text-[11px] leading-none text-[#9a9484]">
            Date &mdash; typical weekday
          </span>
          <span className="qc-refine-link text-[11px]">Add</span>
        </div>
      </div>

      {/* ═══ Sticky CTA footer (mobile) ═══ */}
      <div className="hidden mobile:block qc-sticky-footer sticky bottom-0">
        <button className="qc-cta" onClick={handleCtaClick}>
          See which option really wins
        </button>
      </div>
    </>
  );

  if (!standalone) return qcBody;

  return (
    <div className="max-w-[var(--container-compare)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      {/* ═══ App Header ═══ */}
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>

        <nav className="app-header-nav mobile:hidden">
          <Link href="/" className="text-[var(--ink)] no-underline">Compare</Link>
          <span>Airports</span>
          <span>Guides</span>
        </nav>

        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>
      {qcBody}
    </div>
  );
}
