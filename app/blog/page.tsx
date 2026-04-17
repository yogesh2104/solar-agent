import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { db } from "@/lib/db";
import { BlogCard } from "@/components/blog/blog-card";
import StaticPageHeader from "@/components/landing/StaticPageHeader";

import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: siteConfig.footer.quickLinks.find(l => l.name === "Blog")?.name + " | ELIZ ENERGY",
  description:
    "Commercial solar insights, procurement guidance, and energy saving tips from the ELIZ ENERGY team.",
};

export default async function BlogsPage() {
  const blogs = await db.blog.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
  });

  const [featuredBlog, ...otherBlogs] = blogs;

  return (
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Blog and"
        highlight="Insights"
        breadcrumb="Blog"
        description="Guidance for commercial buyers evaluating solar panel supply, rooftop systems, hybrid planning, procurement, and long-term performance."
      />

      <div className="container mx-auto max-w-7xl px-6 pt-10">
        {blogs.length === 0 ? (
          <div className="rounded-[2.2rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              No articles published yet
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              We are preparing commercial solar explainers, buying guides, and
              case-based insights. Check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {featuredBlog && (
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="group block overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(8,17,31,0.06)]"
              >
                <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[320px]">
                    <Image
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/18 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                      <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
                      Featured article
                    </div>

                    <div className="mt-6 text-xs font-semibold uppercase  text-slate-400">
                      {featuredBlog.tags[0] || "Insight"} ·{" "}
                      {format(new Date(featuredBlog.createdAt), "MMMM d, yyyy")}
                    </div>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                      {featuredBlog.title}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600">
                      {featuredBlog.metadata ||
                        "A closer look at commercial solar decisions, implementation risk, and the operational realities behind long-term energy savings."}
                    </p>

                    <div className="mt-6 text-sm font-semibold text-slate-950">
                      Read featured insight
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {otherBlogs.length > 0 && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {otherBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
