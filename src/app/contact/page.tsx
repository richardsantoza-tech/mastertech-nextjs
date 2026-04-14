import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export function generateMetadata() {
  return buildMetadata({
    title: "Contact MasterTech | Skilled Trades Recruitment",
    description:
      "Contact MasterTech to discuss your skilled trades hiring needs. Call (888) 305-0102 or submit our form — we respond within one business day.",
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get In Touch
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Solve Your Hiring Problem
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us what positions you&apos;re trying to fill. A MasterTech
            recruiter specialized in your trade will reach out within one
            business day.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Required fields are marked with <span className="text-red-500">*</span>
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <aside className="mt-12 space-y-6 lg:mt-0">
              <div className="rounded-lg bg-zinc-900 p-6 text-white">
                <h2 className="text-lg font-bold">Prefer to Call?</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Our team is available Monday through Friday, 8am-6pm CT.
                </p>
                <a
                  href="tel:+18883050102"
                  className="mt-4 flex items-center gap-2 text-xl font-bold text-white hover:text-blue-400"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (888) 305-0102
                </a>
                <a
                  href="mailto:info@mastertech.work"
                  className="mt-3 flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@mastertech.work
                </a>
              </div>

              {/* Job seekers */}
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Looking for a Job?
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Browse open positions across all 10 skilled trade verticals on
                  our job board.
                </p>
                <a
                  href="https://mastertech.zohorecruit.com/jobs/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-lg border border-blue-500 px-4 py-2.5 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Search Open Positions
                </a>
              </div>

              {/* Expected response */}
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  What to Expect
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                  <li className="flex gap-3">
                    <span className="font-semibold text-blue-600">1.</span>
                    <span>Initial response within 1 business day</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-blue-600">2.</span>
                    <span>Discovery call to understand your needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-blue-600">3.</span>
                    <span>Candidate profiles within 7-14 days</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-blue-600">4.</span>
                    <span>Interviews, offers, and onboarding support</span>
                  </li>
                </ul>
              </div>

              {/* Emergency */}
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-900">
                  Emergency Staffing?
                </h2>
                <p className="mt-3 text-sm leading-6 text-amber-900">
                  We can deploy qualified candidates within 5-7 business days
                  for urgent needs. Call directly — don&apos;t wait on the form.
                </p>
                <a
                  href="tel:+18883050102"
                  className="mt-3 block font-semibold text-amber-900"
                >
                  (888) 305-0102
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
