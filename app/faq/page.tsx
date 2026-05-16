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
    images: [{ url: "/Logo1.png", width: 1200, height: 630, alt: "ELIZ ENERGY Solar FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar FAQs | ELIZ ENERGY India",
    description: "Solar installation questions, subsidy, cost & maintenance answered.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/faq" },
  robots: { index: true, follow: true },
};

export default function FaqPage() {
  const faqs = siteConfig.faqs;

  const categories = Array.from(new Set(faqs.map((f) => f.category || "General")));
  const groupedFaqs = categories.reduce(
    (acc, cat) => {
      acc[cat] = faqs.filter((f) => (f.category || "General") === cat);
      return acc;
    },
    {} as Record<string, (typeof faqs)[number][]>,
  );

  return (
    <div className="relative isolate min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <StaticPageHeader
        title="Frequently"
        highlight="Asked Questions"
        description="Can't find what you are looking for? Reach out to our technical team for personalized support."
      />

      <div className="container mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-1 lg:sticky lg:top-32">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#94a3b8] mb-4 px-3">
                Categories
              </p>
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#475569] hover:bg-[#f8faf9] hover:text-[#0f172a] transition-colors"
                >
                  {cat}
                </a>
              ))}

              <div className="mt-10 p-6 rounded-[1.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9]">
                <h4
                  className="font-black text-[#0f172a] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Still have questions?
                </h4>
                <p className="text-sm text-[#64748b] mb-5 leading-6">
                  Our team is ready to help with any technical inquiries.
                </p>
                <Link href="/contact">
                  <Button className="w-full rounded-full bg-[#0f172a] text-white hover:bg-[#1e293b] h-10 text-xs font-semibold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* FAQ Groups */}
          <div className="lg:col-span-3 space-y-16">
            {categories.map((cat) => (
              <div
                key={cat}
                id={cat.toLowerCase().replace(/ /g, "-")}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className="size-9 rounded-xl bg-[rgba(34,197,94,0.07)] flex items-center justify-center">
                    <HelpCircle className="size-4 text-[#22c55e]" />
                  </div>
                  <h2
                    className="text-xl font-black tracking-tight text-[#0f172a]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
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
          </div>
        </div>
      </div>
    </div>
  );
}
