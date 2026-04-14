import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateMetadata() {
  return buildMetadata({
    title: "Privacy Policy | MasterTech",
    description:
      "MasterTech privacy policy — how we collect, use, and protect your personal information when you visit our website or use our staffing services.",
    path: "/privacy-policy",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: April 13, 2026</p>

        <div className="mt-8 space-y-6 text-base leading-7 text-zinc-700">
          <p>
            MasterTech (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit mastertech.work or use our staffing services.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, including:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-zinc-700">
            <li>Name, email address, phone number, and company information when you contact us</li>
            <li>Position details, certifications, and employment history when you submit a job application</li>
            <li>Hiring requirements, role specifications, and compensation ranges when you request staffing services</li>
            <li>Usage data (IP address, browser type, pages visited) collected automatically via cookies and analytics</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="ml-6 list-disc space-y-2 text-zinc-700">
            <li>Provide and improve our staffing services</li>
            <li>Match qualified candidates with employer positions</li>
            <li>Respond to your inquiries and communications</li>
            <li>Send relevant job opportunities and staffing updates (with your consent)</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Information Sharing
          </h2>
          <p>We share your information only in these circumstances:</p>
          <ul className="ml-6 list-disc space-y-2 text-zinc-700">
            <li>
              <strong>With employers:</strong> When you apply for positions or
              we present you as a candidate, we share relevant qualifications,
              experience, and contact information with the hiring employer.
            </li>
            <li>
              <strong>With service providers:</strong> Third-party vendors who
              help us operate our business (background check providers,
              certification verification services, email platforms, analytics).
            </li>
            <li>
              <strong>For legal reasons:</strong> When required by law,
              subpoena, or to protect our rights and safety.
            </li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Cookies and Tracking
          </h2>
          <p>
            We use cookies and similar technologies to enhance your experience,
            analyze site traffic, and understand where our visitors come from.
            You can control cookies through your browser settings. We use Google
            Analytics to understand site usage; you can opt out of Google
            Analytics tracking via Google&apos;s opt-out browser add-on.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no internet transmission is completely secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Your Rights
          </h2>
          <p>
            Depending on your location, you may have rights including:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-zinc-700">
            <li>Access to the personal information we hold about you</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information (subject to legal retention requirements)</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability in a machine-readable format</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:info@mastertech.work" className="text-blue-600 hover:underline">
              info@mastertech.work
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Data Retention
          </h2>
          <p>
            We retain candidate information for as long as you maintain an
            active relationship with us, or as long as necessary to comply with
            our legal obligations and resolve disputes. You can request deletion
            at any time.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Children&apos;s Privacy
          </h2>
          <p>
            Our services are not directed to individuals under 18. We do not
            knowingly collect personal information from children.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with an updated revision date. Material changes
            will be communicated directly to affected users when possible.
          </p>

          <h2 className="mt-10 text-xl font-bold tracking-tight text-zinc-900">
            Contact Us
          </h2>
          <p>
            Questions about this Privacy Policy or our data practices:
          </p>
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
