import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, HelpCircle, Pencil, Trash2, GripVertical } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default async function AdminFaqsPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    redirect("/sign-in");
  }

  const faqs = await db.faq.findMany({
    include: {
      service: true,
    },
    orderBy: [
      { category: "asc" },
      { order: "asc" },
    ],
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            FAQ Management
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Manage global and service-specific questions and answers.
          </p>
        </div>
        <Link href="/admin/faqs/new">
          <Button className="h-12 px-8 text-base shadow-lg hover:shadow-primary/20 transition-all font-semibold rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            Add New FAQ
          </Button>
        </Link>
      </div>

      <Separator className="opacity-50" />

      {faqs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-3xl bg-muted/20">
          <div className="bg-muted p-6 rounded-full mb-4">
            <HelpCircle className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold">No FAQs found</h3>
          <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
            Get started by adding your first question.
          </p>
          <Link href="/admin/faqs/new" className="mt-8">
            <Button variant="outline" className="rounded-full px-8">
              Add First FAQ
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group relative bg-card rounded-2xl border border-border/50 p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">
                      {faq.category || "General"}
                    </Badge>
                    {faq.service && (
                      <Badge variant="outline" className="border-primary/20 text-primary">
                        Service: {faq.service.title}
                      </Badge>
                    )}
                    {!faq.isPublished && (
                        <Badge variant="destructive" className="bg-destructive/10 text-destructive">
                            Draft
                        </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground mt-2 line-clamp-2">
                    {faq.answer}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={`/admin/faqs/${faq.id}`}>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                      <Pencil className="h-4 w-4" />
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
