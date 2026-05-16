import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Separator } from "@/components/ui/separator";
import ContactAvailability from "@/components/contact/contact-availability";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await db.service.findUnique({ where: { slug } });
  
  return {
    title: service ? `${service.title} | ELIZ ENERGY` : "Service Details",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  
  const service = await db.service.findUnique({
    where: { slug },
    include: {
      faqs: {
        where: { isPublished: true },
        orderBy: { order: "asc" },
      },
    },
  });

  if (!service) {
    notFound();
  }

  return (
    <div className="relative overflow-x-clip bg-[#f7faf9]">
      <section className="relative flex min-h-[60vh] items-center overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
        <div className="absolute inset-0 -z-10">
          {service.image ? (
             <>
               <Image
                 src={service.image}
                 alt={service.title}
                 fill
                 className="object-cover"
                 priority
               />
               <div className="absolute inset-0 bg-white/82 backdrop-blur-[2px]" />
             </>
          ) : (
            <div className="absolute inset-0 bg-white" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7faf9]/90 via-white/82 to-white" />
          <div className="absolute right-0 top-0 h-[420px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <Link 
            href="/services"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Services</span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              {service.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
                {service.features.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-start gap-4 rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                  >
                    <CheckCircle2 className="size-6 shrink-0 text-primary" />
                    <span className="text-base font-semibold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>

              {service.content && (
                <div className="prose prose-lg max-w-none rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm prose-headings:font-bold prose-headings:tracking-tight md:p-10">
                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-32 h-fit">
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="absolute -right-1/4 -top-1/4 size-64 rounded-full bg-primary/10 blur-[80px] transition-all duration-700 group-hover:scale-150" />
                
                <h3 className="relative z-10 mb-4 text-2xl font-semibold tracking-tight text-slate-950">Talk to us about {service.title}</h3>
                <p className="relative z-10 mb-8 text-sm leading-7 text-slate-600">
                  Ready to go solar? Our team will help you choose the right equipment, partner brand, and support path.
                </p>

                <div className="space-y-4 relative z-10">
                    <Link href="/contact" className="block w-full">
                        <Button className="h-12 w-full rounded-full bg-primary text-sm font-semibold text-white hover:bg-primary/90">
                            Contact Our Team
                            <ArrowRight className="ml-2 size-5" />
                        </Button>
                    </Link>
                    <Link href="/contact" className="block w-full">
                        <Button variant="outline" className="h-12 w-full rounded-full border-slate-200 bg-white text-sm font-semibold text-slate-800 hover:bg-[#f7faf9]">
                            Submit Inquiry
                        </Button>
                    </Link>
                </div>

                <div className="relative z-10 mt-10 border-t border-slate-100 pt-6">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Direct Support</p>
                    <ContactAvailability />
                </div>
              </div>
            </aside>
          </div>

          <Separator className="my-16 opacity-70 md:my-24" />

          {/* Service FAQ Section */}
          {service.faqs.length > 0 && (
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm mb-6">
                    <span className="size-2 rounded-full bg-primary" />
                    Service FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl mb-12">
                     Frequently Asked Questions
                </h2>
                <FAQAccordion items={service.faqs.map(f => ({ id: f.id, question: f.question, answer: f.answer }))} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
