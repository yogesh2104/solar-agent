import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ServiceForm } from "@/components/service/service-form";

export default async function NewServicePage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    redirect("/sign-in");
  }

  return (
    <div className="py-8">
      <ServiceForm />
    </div>
  );
}
