import { db } from "@/lib/db";
import { BlogCard } from "@/components/blog/blog-card";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Our Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover articles about solar technology, energy savings, and our
            latest projects to help you transition to a sustainable future.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-muted-foreground">
              No posts yet
            </h3>
            <p className="mt-2">Check back soon for latest updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
