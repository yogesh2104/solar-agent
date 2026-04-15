import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";

export default async function BlogHighlights() {
  const blogs = await db.blog.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Solar Journal
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Guides and stories for people planning smarter energy moves
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Explore practical solar advice, project updates, and industry
              insights from our team. When you want the full archive, the public
              blog page is one click away.
            </p>
          </div>

          <Link href="/blogs">
            <Button size="lg" className="rounded-full px-8">
              View All Blogs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/70 bg-card/40 px-8 py-16 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Blog posts are on the way
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Published articles will appear here automatically, and visitors can
              browse the full list from the dedicated blog page.
            </p>
            <Link href="/blogs" className="mt-8 inline-flex">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Open Blog Page
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
