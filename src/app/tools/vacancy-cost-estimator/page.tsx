import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, jsonLd } from "@/lib/seo/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import VacancyCostEstimator from "@/components/VacancyCostEstimator";

export function generateMetadata() {
  return buildMetadata({
    title: "Vacancy Cost Estimator | MasterTech",
    description:
      "Calculate the true cost of an unfilled skilled trades position. Free calculator shows weekly and annual profit lost when a technician role sits vacant.",
    path: "/tools/vacancy-cost-estimator",
  });
}

const calculatorFaqs = [
  {
    question: "How does the Vacancy Cost Estimator work?",
    answer:
      "The calculator uses six inputs to model your shop's economics: charge-out rate, employee rate, burden rate, efficiency rate, hours per week, and recruitment fee. It calculates annual revenue, employee cost, and net profit — then shows you how much profit is lost weekly when the position stays unfilled.",
  },
  {
    question: "What is an employee burden rate?",
    answer:
      "Burden rate is the additional cost of employing someone beyond their base hourly wage. It typically includes payroll taxes, benefits (health insurance, retirement), workers' comp, paid time off, and other employment costs. For skilled trades, burden rates usually run 15-25% of base wage.",
  },
  {
    question: "Why is the efficiency rate above 100%?",
    answer:
      "The default 101% reflects typical shop economics where a small amount of overtime or above-standard productivity contributes to revenue. You can adjust this up (high-efficiency shops) or down (shops with significant non-billable time) based on your actual operations.",
  },
  {
    question: "How accurate is the cost of vacancy estimate?",
    answer:
      "The calculator provides a reasonable estimate based on your inputs. Real-world vacancy costs may be higher due to factors not captured here — customer dissatisfaction, overtime on remaining staff, declined jobs, and reputational damage. For a full cost analysis, contact a MasterTech recruiter.",
  },
  {
    question: "Can I use this calculator for roles other than diesel mechanics?",
    answer:
      "Yes. The calculator works for any skilled trades role where you bill customer time — HVAC technicians, electricians, heavy equipment mechanics, marine mechanics, and similar positions. Adjust the charge-out rate and employee rate to match the specific trade.",
  },
];

export default function VacancyCostEstimatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(calculatorFaqs)) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools/vacancy-cost-estimator" },
            {
              name: "Vacancy Cost Estimator",
              href: "/tools/vacancy-cost-estimator",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Free Calculator
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Skilled Trades Vacancy Cost Estimator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Every week a skilled trades position stays open costs your business
            real money in lost revenue. Use this calculator to see exactly how
            much — then decide what that open position is actually costing you.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-zinc-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <VacancyCostEstimator />
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            How the Calculator Works
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600">
            The Vacancy Cost Estimator calculates the net profit a single
            skilled trades position generates for your business. When that
            position is unfilled, that entire profit amount is lost — which is
            why vacancy is so expensive.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-zinc-900">
            The Math Behind the Numbers
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-600">
            <div className="rounded-lg bg-zinc-50 p-4">
              <p className="font-semibold text-zinc-900">Annual Revenue</p>
              <p className="mt-1">
                Charge-out rate × efficiency × hours per year
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Hours per year = hours per week × 50
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4">
              <p className="font-semibold text-zinc-900">Total Employee Cost</p>
              <p className="mt-1">
                (Hourly rate × burden multiplier × hours per year) + recruitment fee
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Burden multiplier = 1 + burden rate (e.g., 20% burden = 1.2x)
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4">
              <p className="font-semibold text-zinc-900">Net Profit / Vacancy Cost</p>
              <p className="mt-1">Annual revenue − total employee cost</p>
              <p className="mt-1 text-xs text-zinc-500">
                Divide by 50 to get weekly profit (and weekly cost of vacancy)
              </p>
            </div>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-zinc-900">
            What the Calculator Doesn&apos;t Show
          </h3>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            The calculator gives you a clean picture of direct profit loss from
            one vacant position. But the real cost is typically higher because
            it doesn&apos;t include:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Overtime paid to remaining staff to cover the gap",
              "Customer dissatisfaction from longer turnaround times",
              "Jobs declined because you don't have capacity",
              "Reputational damage from missed deadlines",
              "Burnout and turnover risk among remaining team",
              "Delayed equipment repairs that compound downtime",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-zinc-700"
              >
                <svg
                  className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-zinc-600">
            A conservative rule: the true cost of vacancy is typically 1.5-2x
            what this calculator shows.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-zinc-200">
            {calculatorFaqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-base font-semibold text-zinc-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stop Losing Money to Vacant Positions
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Now that you know what vacancy is costing you, let MasterTech fix
            it. We fill skilled trades positions in 14-21 days with pre-vetted,
            certified candidates.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Get In Touch
            </Link>
            <Link
              href="/how-it-works"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
