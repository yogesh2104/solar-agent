import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string } | undefined)?.role;

  if (!session || userRole !== "admin") {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background md:flex">
      <AdminSidebar />
      <main className="flex-1 min-w-0">
        <div className="mx-auto max-w-7xl p-2 pt-5 ">{children}</div>
      </main>
    </div>
  );
}
