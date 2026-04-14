"use client";

import { useState } from "react";

type SliderInput = {
  id: string;
  label: string;
  help: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  format: "currency" | "percent" | "number";
  suffix?: string;
};

const inputs: SliderInput[] = [
  {
    id: "chargeOutRate",
    label: "Hourly Charge-Out Rate",
    help: "What you bill your customer per hour of labor",
    min: 75,
    max: 250,
    step: 5,
    defaultValue: 150,
    format: "currency",
    suffix: "/hr",
  },
  {
    id: "employeeRate",
    label: "Employee Hourly Rate",
    help: "What you pay the technician per hour",
    min: 20,
    max: 75,
    step: 1,
    defaultValue: 40,
    format: "currency",
    suffix: "/hr",
  },
  {
    id: "burden",
    label: "Employee Burden Rate",
    help: "Benefits, taxes, insurance — percentage of hourly rate",
    min: 10,
    max: 40,
    step: 1,
    defaultValue: 20,
    format: "percent",
  },
  {
    id: "efficiency",
    label: "Employee Efficiency",
    help: "Billable hours as percentage of paid hours (101% = overtime multiplier)",
    min: 1,
    max: 150,
    step: 1,
    defaultValue: 101,
    format: "percent",
  },
  {
    id: "hoursPerWeek",
    label: "Hours Per Week",
    help: "Billable hours the technician contributes weekly",
    min: 0,
    max: 80,
    step: 1,
    defaultValue: 20,
    format: "number",
    suffix: "hrs",
  },
  {
    id: "recruitment",
    label: "Recruitment Fee",
    help: "Agency fee as percentage of annual employee cost",
    min: 15,
    max: 30,
    step: 1,
    defaultValue: 20,
    format: "percent",
  },
];

type State = Record<string, number>;

const initialState: State = Object.fromEntries(
  inputs.map((i) => [i.id, i.defaultValue])
);

function formatValue(value: number, format: SliderInput["format"], suffix?: string) {
  if (format === "currency") return `$${value}${suffix ?? ""}`;
  if (format === "percent") return `${value}%`;
  return `${value}${suffix ? " " + suffix : ""}`;
}

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

interface Props {
  /** Show compact version (fewer descriptions, tighter spacing) for homepage embed */
  compact?: boolean;
}

export default function VacancyCostEstimator({ compact = false }: Props) {
  const [state, setState] = useState<State>(initialState);

  const chargeOutRate = state.chargeOutRate;
  const employeeRate = state.employeeRate;
  const burden = state.burden / 100;
  const efficiency = state.efficiency / 100;
  const hoursPerWeek = state.hoursPerWeek;
  const recruitment = state.recruitment / 100;

  const hoursPerYear = hoursPerWeek * 50;
  const rateWithBurden = employeeRate * (1 + burden);
  const revenueWithEfficiency = chargeOutRate * efficiency;

  const revenuePerYear = revenueWithEfficiency * hoursPerYear;
  const employeeCostPerYear = rateWithBurden * hoursPerYear;
  const recruitmentFee = employeeCostPerYear * recruitment;
  const totalEmployeeCost = employeeCostPerYear + recruitmentFee;

  const serviceProfitPerYear = revenuePerYear - totalEmployeeCost;
  const serviceProfitPerWeek = serviceProfitPerYear / 50;

  function handleChange(id: string, value: number) {
    setState((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setState(initialState);
  }

  return (
    <div className={compact ? "" : "rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10"}>
      <div className={compact ? "grid gap-6 lg:grid-cols-5 lg:gap-8" : "grid gap-8 lg:grid-cols-5 lg:gap-12"}>
        {/* Inputs */}
        <div className="lg:col-span-3">
          {!compact && (
            <>
              <h3 className="text-lg font-semibold text-zinc-900">
                Adjust the Numbers for Your Shop
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Use the sliders to model your shop&apos;s economics. The calculator
                shows how much profit a single skilled trades position generates
                when filled — and loses when vacant.
              </p>
            </>
          )}

          <div className={`${compact ? "mt-2" : "mt-6"} space-y-5`}>
            {inputs.map((input) => (
              <div key={input.id}>
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor={input.id}
                    className="text-sm font-medium text-zinc-900"
                  >
                    {input.label}
                  </label>
                  <span className="text-sm font-semibold text-blue-600">
                    {formatValue(state[input.id], input.format, input.suffix)}
                  </span>
                </div>
                {!compact && (
                  <p className="mt-0.5 text-xs text-zinc-500">{input.help}</p>
                )}
                <input
                  id={input.id}
                  type="range"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={state[input.id]}
                  onChange={(e) =>
                    handleChange(input.id, Number(e.target.value))
                  }
                  className="mt-2 w-full accent-blue-600"
                />
                <div className="mt-1 flex justify-between text-xs text-zinc-400">
                  <span>{formatValue(input.min, input.format, input.suffix)}</span>
                  <span>{formatValue(input.max, input.format, input.suffix)}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-6 text-xs font-medium text-zinc-500 hover:text-blue-600"
          >
            Reset to defaults
          </button>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 space-y-3">
            {/* Headline output */}
            <div className="rounded-xl bg-zinc-900 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Cost of Vacancy
              </p>
              <p className="mt-2 text-3xl font-bold sm:text-4xl">
                {formatCurrency(serviceProfitPerWeek)}
                <span className="text-base font-medium text-zinc-400">/week</span>
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                {formatCurrency(serviceProfitPerYear)} per year in lost profit
              </p>
            </div>

            {/* Supporting outputs */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">Revenue per year</span>
                  <span className="font-semibold text-zinc-900">
                    {formatCurrency(revenuePerYear)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">Employee cost</span>
                  <span className="font-semibold text-zinc-900">
                    {formatCurrency(employeeCostPerYear)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">Recruitment fee</span>
                  <span className="font-semibold text-zinc-900">
                    {formatCurrency(recruitmentFee)}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-zinc-200 pt-3">
                  <span className="text-sm font-medium text-zinc-900">
                    Net profit / year
                  </span>
                  <span className="font-semibold text-blue-600">
                    {formatCurrency(serviceProfitPerYear)}
                  </span>
                </div>
              </div>
            </div>

            {!compact && (
              <div className="rounded-xl bg-blue-600 p-5 text-white">
                <p className="text-sm leading-6">
                  Every week this position stays vacant, you lose{" "}
                  <strong>{formatCurrency(serviceProfitPerWeek)}</strong> in profit.
                  MasterTech cuts your time-to-fill in half.
                </p>
                <a
                  href="/contact"
                  className="mt-4 block rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Fill This Position
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
