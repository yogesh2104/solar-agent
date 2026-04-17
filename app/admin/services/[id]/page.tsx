import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { db } from "@/lib/db";
import { ServiceForm } from "@/components/service/service-form";

interface EditServicePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditServicePage({ params }: EditServicePageProps) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    redirect("/sign-in");
  }

  const { id } = await params;

  const service = await db.service.findUnique({
    where: { id },
  });

  if (!service) {
    notFound();
  }

  return (
    <div className="py-8">
      <ServiceForm initialData={service} />
    </div>
  );
}
