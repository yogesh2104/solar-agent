import { db } from "@/lib/db";
import { BlogCard } from "@/components/blog/blog-card";
import StaticPageHeader from "@/components/landing/StaticPageHeader";

export const metadata = {
  title: "Blog | Solar Company",
  description:
    "Stay updated with the latest news, tips, and insights about solar energy.",
};

export default async function BlogsPage() {
  const blogs = await db.blog.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <StaticPageHeader 
        title="Our Blog & "
        highlight="Insights"
        description="Discover articles about solar technology, energy savings, and our latest projects to help you transition to a sustainable future."
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {blogs.length === 0 ? (
          <div className="text-center py-32 border-2 border-dashed border-border rounded-[2.5rem]">
            <h3 className="text-3xl font-bold text-muted-foreground">
              No posts yet
            </h3>
            <p className="mt-4 text-lg text-muted-foreground/60">Check back soon for latest updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
