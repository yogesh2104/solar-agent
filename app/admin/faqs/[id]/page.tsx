import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { db } from "@/lib/db";
import { FaqForm } from "@/components/faq/faq-form";

interface EditFaqPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFaqPage({ params }: EditFaqPageProps) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    redirect("/sign-in");
  }

  const { id } = await params;

  const [faq, services] = await Promise.all([
    db.fAQ.findUnique({
      where: { id },
    }),
    db.service.findMany({
      select: {
        id: true,
        title: true,
      },
      orderBy: {
        title: "asc",
      },
    }),
  ]);

  if (!faq) {
    notFound();
  }

  return (
    <div className="py-8">
      <FaqForm initialData={faq} services={services} />
    </div>
  );
}
