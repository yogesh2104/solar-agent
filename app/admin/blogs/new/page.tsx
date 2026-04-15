import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { BlogForm } from "@/components/blog/blog-form";

export default async function NewBlogPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user as { id?: string; role?: string } | undefined;

  if (!session || user?.role !== "admin" || !user.id) {
    redirect("/sign-in");
  }

  return (
    <div className="py-12">
      <BlogForm authorId={user.id} />
    </div>
  );
}
