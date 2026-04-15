import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { Plus, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default async function AdminBlogsPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    redirect("/sign-in");
  }

  const blogs = await db.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Blog Management
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Manage, edit, and publish your content.
          </p>
        </div>
        <Link href="/admin/blogs/new">
          <Button className="h-12 px-8 text-base shadow-lg hover:shadow-primary/20 transition-all font-semibold rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            Create New Post
          </Button>
        </Link>
      </div>

      <Separator className="opacity-50" />

      {blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-3xl bg-muted/20">
          <div className="bg-muted p-6 rounded-full mb-4">
            <LayoutGrid className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold">No blogs found</h3>
          <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
            Get started by creating your very first blog post.
          </p>
          <Link href="/admin/blogs/new" className="mt-8">
            <Button variant="outline" className="rounded-full px-8">
              Create First Post
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative group">
              <BlogCard blog={blog} isAdmin />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
