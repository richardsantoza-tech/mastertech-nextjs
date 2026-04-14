import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { blogPostingSchema, jsonLd } from "@/lib/seo/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import servicesData from "../../../../data/services.json";
import type { ServiceData } from "@/lib/types";

const services = servicesData as ServiceData[];

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return {};
    return buildMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
    });
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const relatedServices = post.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is ServiceData => !!s);

  return (
    <>
      {/* BlogPosting schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            blogPostingSchema({
              title: post.title,
              description: post.description,
              slug: post.slug,
              datePublished: post.date,
              authorName: post.author,
            })
          ),
        }}
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Articles", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />
      </div>

      {/* Article header */}
      <header className="bg-zinc-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <span className="rounded bg-zinc-800 px-2.5 py-0.5 font-medium text-blue-400">
              {post.category}
            </span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            {post.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{post.author}</p>
              <p className="text-xs text-zinc-500">MasterTech</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article body + sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Content */}
          <article
            className="prose-mastertech lg:col-span-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Sidebar */}
          <aside className="mt-12 space-y-6 lg:mt-0">
            {/* CTA */}
            <div className="rounded-lg bg-zinc-900 p-6 text-white">
              <h2 className="text-lg font-bold">Need Help Hiring?</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                MasterTech recruits qualified tradespeople across 10 verticals.
                We cut your time-to-fill by up to 50%.
              </p>
              <Link
                href="/contact"
                className="mt-5 block rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get In Touch
              </Link>
            </div>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Related Services
                </h2>
                <div className="mt-4 space-y-2">
                  {relatedServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {svc.shortName}
                      <svg
                        className="h-4 w-4 text-zinc-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Related Articles
                </h2>
                <div className="mt-4 space-y-3">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="block text-sm font-medium text-zinc-700 hover:text-blue-600"
                    >
                      {rp.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* View Jobs */}
            <a
              href="https://mastertech.zohorecruit.com/jobs/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 hover:border-blue-300 hover:text-blue-600"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              View Open Jobs
            </a>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-zinc-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Hire Qualified Tradespeople?
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            MasterTech specializes in 10 skilled trade verticals. We source
            pre-vetted, certified candidates so you interview the right people —
            not unfiltered applicants.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Get In Touch
            </Link>
            <Link
              href="/blog"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
