import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { BlogCard } from "@/components/blog/blog-card";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { getUnifiedBlogs } from "@/lib/blog-service";
import FAQSchema from "@/components/FAQSchema";
import siteConfig from "@/lib/siteConfig";
import HomeFAQ from "@/components/landing/HomeFAQ";

export const metadata = {
  title: "Solar Blog & Insights | Solar Energy Tips & News India | ELIZ ENERGY",
  description:
    "Solar energy articles, buying guides, Surya Ghar Yojana updates, EV charger tips and industry insights from the ELIZ ENERGY team. Stay informed about solar installation across India.",
  keywords: [
    "solar blog India",
    "solar energy news",
    "solar panel buying guide",
    "Surya Ghar Yojana updates",
    "solar installation tips",
    "solar energy insights",
    "EV charger guide India",
    "solar industry India",
    "ELIZ ENERGY blog",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/blog",
    title: "Solar Blog & Insights | ELIZ ENERGY India",
    description:
      "Solar energy articles, guides, Surya Ghar Yojana updates & EV charger insights from ELIZ ENERGY.",
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "ELIZ ENERGY Solar Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Blog & Insights | ELIZ ENERGY India",
    description: "Solar energy articles, guides & insights from ELIZ ENERGY.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/blog" },
  robots: { index: true, follow: true },
};

export default async function BlogsPage() {
  const blogs = await getUnifiedBlogs();
  const [featuredBlog, ...otherBlogs] = blogs;

  return (
    <div className="bg-white pb-16">
      <StaticPageHeader
        title="Blog and"
        highlight="Insights"
        breadcrumb="Blog"
        description="Guidance for commercial buyers evaluating solar panel supply, rooftop systems, hybrid planning, procurement, and long-term performance."
      />

      <div className="container mx-auto max-w-7xl px-6 lg:px-10 pt-12">
        <FAQSchema faqs={siteConfig.faqs} />
        {blogs.length === 0 ? (
          <div className="rounded-[1.75rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] px-6 py-20 text-center">
            <h3 className="text-2xl font-black tracking-tight text-[#0f172a]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              No articles published yet
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#64748b]">
              We are preparing commercial solar explainers, buying guides, and
              case-based insights. Check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {featuredBlog && (
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="group block overflow-hidden rounded-[1.75rem] border border-[rgba(15,23,42,0.08)] bg-white transition-shadow hover:shadow-[0_12px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[300px] overflow-hidden">
                    <Image
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f8faf9] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#64748b]">
                      Featured article
                    </div>

                    <div className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                      {featuredBlog.tags[0] || "Insight"} ·{" "}
                      {format(new Date(featuredBlog.createdAt), "MMMM d, yyyy")}
                    </div>

                    <h2
                      className="mt-3 text-2xl font-black tracking-tight text-[#0f172a] md:text-3xl"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {featuredBlog.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#64748b]">
                      {featuredBlog.metadata ||
                        "A closer look at commercial solar decisions, implementation risk, and the operational realities behind long-term energy savings."}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#22c55e]">
                      Read article
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {otherBlogs.length > 0 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {otherBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog as any} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="mt-20 border-t border-[rgba(15,23,42,0.07)] bg-white">
        <HomeFAQ faqs={siteConfig.faqs.slice(0, 5)} />
      </div>
    </div>
  );
}
