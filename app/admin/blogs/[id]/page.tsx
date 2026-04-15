import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect, notFound } from "next/navigation";
import { BlogForm } from "@/components/blog/blog-form";

interface EditBlogPageProps {
  params: {
    id: string;
  };
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { id?: string; role?: string } | undefined;

  if (!session || user?.role !== "admin" || !user.id) {
    redirect("/sign-in");
  }

  const { id } = await params;

  const blog = await db.blog.findUnique({
    where: { id },
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="py-12">
      <BlogForm initialData={blog} authorId={user.id} />
    </div>
  );
}
