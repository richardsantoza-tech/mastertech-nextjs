import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAllPosts } from "@/lib/blog";

export function generateMetadata() {
  return buildMetadata({
    title: "Skilled Trades Hiring Articles | MasterTech",
    description:
      "Expert guides on hiring diesel mechanics, welders, electricians, HVAC techs, and more. Salary data, recruitment strategies, and industry insights.",
    path: "/blog",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Articles", href: "/blog" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Insights &amp; Guides
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Skilled Trades Hiring Articles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Expert guides on recruiting, hiring, and retaining skilled
            tradespeople. Salary benchmarks, industry trends, and actionable
            strategies for employers.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-zinc-500">
                Blog posts are being migrated. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-lg border border-zinc-200 bg-white transition-colors hover:border-blue-300"
                >
                  {/* Gradient placeholder */}
                  <div className="aspect-[2/1] rounded-t-lg bg-gradient-to-br from-zinc-800 to-zinc-900" />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="rounded bg-zinc-100 px-2 py-0.5 font-medium text-zinc-600">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="mt-3 text-base font-semibold leading-6 text-zinc-900 group-hover:text-blue-600">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
                      {post.description}
                    </p>
                    <p className="mt-4 text-xs font-medium text-blue-600 group-hover:underline">
                      Read article &rarr;
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Need Skilled Tradespeople Now?
            </h2>
            <p className="mt-2 text-base text-blue-100">
              Skip the research — let MasterTech find qualified candidates for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 lg:mt-0"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
