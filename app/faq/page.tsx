import { db } from "@/lib/db";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StaticPageHeader from "@/components/landing/StaticPageHeader";

export const metadata = {
  title: "Frequently Asked Questions | ELIZ ENERGY Solar",
  description:
    "Find answers to common questions about solar installation, maintenance, pricing, and technical specifications.",
};

export default async function FaqPage() {
  const faqs = await db.FAQ.findMany({
    where: { isPublished: true },
    orderBy: { order: "asc" },
  });

  // Group FAQs by category
  const categories = Array.from(
    new Set(faqs.map((f) => f.category || "General")),
  );
  const groupedFaqs = categories.reduce(
    (acc, cat) => {
      acc[cat] = faqs.filter((f) => (f.category || "General") === cat);
      return acc;
    },
    {} as Record<string, typeof faqs>,
  );

  return (
    <div className="relative isolate min-h-screen">
      <StaticPageHeader
        title="Frequently"
        highlight="Asked Questions"
        description="Can't find what you are looking for? Reach out to our technical team for personalized support."
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
                Categories
              </p>
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-white hover:text-primary transition-all"
                >
                  {cat}
                </a>
              ))}

              <div className="mt-12 p-6 rounded-3xl bg-slate-950 text-white relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 size-32 rounded-full bg-[var(--brand-lime)] opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <h4 className="font-bold mb-4 relative z-10">
                  Still have questions?
                </h4>
                <p className="text-sm text-slate-400 mb-6 relative z-10">
                  Our team is ready to help you with any technical inquiries.
                </p>
                <Link href="/contact">
                  <Button className="w-full rounded-full bg-(--brand-lime) text-slate-950 hover:bg-(--brand-lime)/90 h-10 text-xs font-bold uppercase tracking-wider">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* FAQ Groups */}
          <div className="lg:col-span-3 space-y-20">
            {categories.map((cat) => (
              <div
                key={cat}
                id={cat.toLowerCase().replace(/ /g, "-")}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <HelpCircle className="size-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                    {cat} Questions
                  </h2>
                </div>
                <FAQAccordion
                  items={groupedFaqs[cat].map((f) => ({
                    id: f.id,
                    question: f.question,
                    answer: f.answer,
                  }))}
                />
              </div>
            ))}

            {faqs.length === 0 && (
              <div className="text-center py-24 bg-white/40 backdrop-blur-md rounded-[3rem] border border-dashed border-slate-200">
                <MessageSquare className="size-12 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">
                  No FAQs have been published yet. Please check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
