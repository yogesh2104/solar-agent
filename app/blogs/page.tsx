import { db } from "@/lib/db";
import { BlogCard } from "@/components/blog/blog-card";
import StaticPageHeader from "@/components/landing/StaticPageHeader";

export const metadata = {
  title: "Blog & Insights | Suntrix",
  description:
    "Expert insights on commercial solar, energy policy, ROI analysis, and industry trends from India's leading B2B solar EPC company.",
};

export default async function BlogsPage() {
  const blogs = await db.blog.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#050a14] pb-28">
      <StaticPageHeader
        title="Blog &"
        highlight="Insights"
        breadcrumb="Blog"
        description="Expert analysis on commercial solar economics, energy policy, and technology trends from Suntrix engineers and consultants."
      />

      <div className="container mx-auto px-6 max-w-7xl pt-4">
        {blogs.length === 0 ? (
          <div className="text-center py-32 border border-dashed border-white/8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white/30">No articles yet</h3>
            <p className="mt-3 text-white/20">Check back soon for expert solar energy insights.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
