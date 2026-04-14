import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateMetadata() {
  return buildMetadata({
    title: "Terms of Service | MasterTech",
    description:
      "MasterTech terms of service — terms governing your use of mastertech.work and our skilled trades staffing services.",
    path: "/terms",
  });
}

export default function TermsPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Terms of Service", href: "/terms" },
          ]}
        />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: April 13, 2026</p>

        <div className="mt-8 space-y-6 text-base leading-7 text-zinc-700">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of mastertech.work (the &quot;Website&quot;) and the services
            provided by MasterTech, a division of Easy Outsource / BayStreet
            Staffing (&quot;MasterTech,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;). By accessing the Website or using our services,
            you agree to these Terms.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Acceptance of Terms
          </h2>
          <p>
            By using our Website or services, you confirm that you are at least
            18 years old and legally capable of entering into a binding
            agreement. If you are using our services on behalf of an
            organization, you represent that you have authority to bind that
            organization to these Terms.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Services
          </h2>
          <p>
            MasterTech provides skilled trades recruitment and staffing services
            including direct hire placement, temp-to-hire staffing, contract
            staffing, and emergency placements. Specific engagement terms,
            including fees and service levels, are governed by separate service
            agreements executed between MasterTech and each client.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Use of the Website
          </h2>
          <p>You agree not to:</p>
          <ul className="ml-6 list-disc space-y-2 text-zinc-700">
            <li>Use the Website for any unlawful purpose or in violation of applicable laws</li>
            <li>Attempt to gain unauthorized access to any portion of the Website or related systems</li>
            <li>Interfere with or disrupt the Website&apos;s operation or security</li>
            <li>Scrape, copy, or reproduce substantial portions of the Website without authorization</li>
            <li>Use automated tools (bots, scrapers) except in accordance with our robots.txt</li>
            <li>Submit false, misleading, or fraudulent information through any form or service</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Candidate Submissions
          </h2>
          <p>
            When you submit information as a candidate (resume, certifications,
            work history), you represent that the information is accurate,
            complete, and truthful. Misrepresentation may result in removal from
            our candidate database and disqualification from current and future
            placements.
          </p>
          <p>
            You grant MasterTech the right to share your professional
            information with prospective employers as part of our staffing
            services, consistent with our Privacy Policy.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Client Obligations
          </h2>
          <p>
            Clients using MasterTech for staffing services agree to:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-zinc-700">
            <li>Provide accurate information about positions, compensation, and requirements</li>
            <li>Treat candidate information confidentially</li>
            <li>Use candidate information only for evaluating employment</li>
            <li>Comply with all applicable employment laws and non-discrimination requirements</li>
            <li>Pay fees according to the terms of the executed service agreement</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Intellectual Property
          </h2>
          <p>
            All content on the Website, including text, graphics, logos, and
            software, is the property of MasterTech or its licensors and is
            protected by copyright, trademark, and other intellectual property
            laws. You may not reproduce, distribute, or create derivative works
            without prior written permission.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Third-Party Links
          </h2>
          <p>
            The Website may contain links to third-party websites and services
            (such as our job board at mastertech.zohorecruit.com). We are not
            responsible for the content, privacy practices, or terms of these
            third-party sites. Accessing them is at your own risk.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Disclaimers
          </h2>
          <p>
            The Website and our informational content are provided &quot;as
            is&quot; and &quot;as available,&quot; without warranties of any
            kind, express or implied. We do not guarantee that the Website will
            be uninterrupted, error-free, or free of viruses or other harmful
            components. Salary data, industry statistics, and job market
            information are provided for general informational purposes and
            should not be relied upon as the sole basis for business decisions.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, MasterTech shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Website or services.
            Our aggregate liability for any claim arising from these Terms shall
            not exceed the fees paid by you to MasterTech in the 12 months
            preceding the claim.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless MasterTech, its affiliates,
            officers, directors, employees, and agents from any claims, losses,
            or damages arising from your violation of these Terms or misuse of
            the Website.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in which
            MasterTech&apos;s parent company is headquartered, without regard to
            conflict of law principles. Any disputes shall be resolved in the
            courts of that jurisdiction.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Changes to Terms
          </h2>
          <p>
            We may update these Terms periodically. Material changes will be
            communicated via the Website with an updated revision date.
            Continued use of the Website after changes constitutes acceptance of
            the revised Terms.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Contact
          </h2>
          <p>Questions about these Terms:</p>
          <ul className="ml-6 list-disc space-y-2 text-zinc-700">
            <li>
              Email:{" "}
              <a href="mailto:info@mastertech.work" className="text-blue-600 hover:underline">
                info@mastertech.work
              </a>
            </li>
            <li>Phone: +1 (888) 305-0102</li>
            <li>
              Contact form:{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                mastertech.work/contact
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
