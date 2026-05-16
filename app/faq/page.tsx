import siteConfig from "@/lib/siteConfig";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "Solar FAQs | Solar Panel Installation Questions | ELIZ ENERGY India",
  description:
    "Answers to frequently asked questions about solar panel installation, Surya Ghar Yojana subsidy, solar cost in India, EV chargers, maintenance & more. ELIZ ENERGY – India's trusted solar company.",
  keywords: [
    "solar FAQ India",
    "solar panel installation questions",
    "Surya Ghar Yojana FAQ",
    "solar panel cost FAQ",
    "how does solar work",
    "solar subsidy India questions",
    "EV charger FAQ",
    "solar maintenance FAQ",
    "solar company FAQ India",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/faq",
    title: "Solar FAQs | Frequently Asked Questions | ELIZ ENERGY",
    description:
      "Common solar questions answered – installation, cost, subsidy, maintenance & EV chargers in India.",
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "ELIZ ENERGY Solar FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar FAQs | ELIZ ENERGY India",
    description:
      "Solar installation questions, subsidy, cost & maintenance answered.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/faq" },
  robots: { index: true, follow: true },
};

export default function FaqPage() {
  const faqs = siteConfig.faqs;

  // Group FAQs by category
  const categories = Array.from(
    new Set(faqs.map((f) => f.category || "General")),
  );
  const groupedFaqs = categories.reduce(
    (acc, cat) => {
      acc[cat] = faqs.filter((f) => (f.category || "General") === cat);
      return acc;
    },
    {} as Record<string, (typeof faqs)[number][]>,
  );

  return (
    <div className="relative isolate min-h-screen bg-[#f7faf9]">
      <FAQSchema faqs={faqs} />
      <StaticPageHeader
        title="Frequently"
        highlight="Asked Questions"
        description="Can't find what you are looking for? Reach out to our technical team for personalized support."
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="space-y-2 lg:sticky lg:top-32">
              <p className="mb-4 px-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Categories
              </p>
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/ /g, "-")}`}
                  className="block rounded-full px-4 py-3 text-sm font-semibold text-slate-600 transition-all hover:bg-white hover:text-primary hover:shadow-sm"
                >
                  {cat}
                </a>
              ))}

              <div className="group relative mt-10 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                <h4 className="relative z-10 mb-3 text-lg font-semibold tracking-tight text-slate-950">
                  Still have questions?
                </h4>
                <p className="relative z-10 mb-6 text-sm leading-6 text-slate-600">
                  Our team is ready to help you with any technical inquiries.
                </p>
                <Link href="/contact">
                  <Button className="h-11 w-full rounded-full bg-primary text-sm font-semibold text-white hover:bg-primary/90">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </aside>

          <div className="space-y-14 lg:col-span-3">
            {categories.map((cat) => (
              <div
                key={cat}
                id={cat.toLowerCase().replace(/ /g, "-")}
                className="scroll-mt-32"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <HelpCircle className="size-5" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
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

            {/* {faqs.length === 0 && (
              <div className="text-center py-24 bg-white/40 backdrop-blur-md rounded-[3rem] border border-dashed border-slate-200">
                <MessageSquare className="size-12 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">
                  No FAQs have been published yet. Please check back later.
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
