import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, LayoutGrid, Layout } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default async function AdminServicesPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    redirect("/sign-in");
  }

  const services = await db.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Services Management
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Manage your solar service offerings and detail pages.
          </p>
        </div>
        <Link href="/admin/services/new">
          <Button className="h-12 px-8 text-base shadow-lg hover:shadow-primary/20 transition-all font-semibold rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            Add New Service
          </Button>
        </Link>
      </div>

      <Separator className="opacity-50" />

      {services.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-3xl bg-muted/20">
          <div className="bg-muted p-6 rounded-full mb-4">
            <Layout className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold">No services found</h3>
          <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
            Get started by adding your first service (e.g., Residential Solar).
          </p>
          <Link href="/admin/services/new" className="mt-8">
            <Button variant="outline" className="rounded-full px-8">
              Add First Service
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Layout className="h-12 w-12 text-muted-foreground/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded-md">
                        /{service.slug}
                    </span>
                  <Link href={`/admin/services/${service.id}`}>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      Edit Service
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
