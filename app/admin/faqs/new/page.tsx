import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { FaqForm } from "@/components/faq/faq-form";

export default async function NewFaqPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    redirect("/sign-in");
  }

  const services = await db.service.findMany({
    select: {
      id: true,
      title: true,
    },
    orderBy: {
      title: "asc",
    },
  });

  return (
    <div className="py-8">
      <FaqForm services={services} />
    </div>
  );
}
