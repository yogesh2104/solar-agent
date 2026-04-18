import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Separator } from "@/components/ui/separator";

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
    <div className="relative overflow-x-clip">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
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
               <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
             </>
          ) : (
            <div className="absolute inset-0 bg-slate-950" />
          )}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:-secondary transition-colors mb-8 group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Services</span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-7xl mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {service.features.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:-secondary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
                  >
                    <CheckCircle2 className="size-6 shrink-0 -secondary" />
                    <span className="text-lg font-semibold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Rich Text Content */}
              {service.content && (
                <div className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:-secondary">
                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                </div>
              )}
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:sticky lg:top-32 h-fit">
              <div className="rounded-[2.5rem] bg-slate-950 p-8 md:p-10 text-white shadow-2xl overflow-hidden relative group">
                <div className="absolute -right-1/4 -top-1/4 size-64 rounded-full -secondary opacity-10 blur-[80px] transition-all duration-700 group-hover:scale-150" />
                
                <h3 className="text-2xl font-bold mb-6 relative z-10">Request a custom quote for {service.title}</h3>
                <p className="text-slate-400 mb-10 relative z-10">
                  Ready to go solar? Our engineers will provide a detailed technical and financial analysis.
                </p>

                <div className="space-y-4 relative z-10">
                    <Link href="/get-quote" className="block w-full">
                        <Button className="w-full h-14 rounded-full font-bold text-base -secondary text-slate-950 hover:-secondary/90">
                            Start Solar Quote
                            <ArrowRight className="ml-2 size-5" />
                        </Button>
                    </Link>
                    <Link href="/contact" className="block w-full">
                        <Button variant="outline" className="w-full h-14 rounded-full font-bold text-base border-white/10 hover:bg-white/5">
                            Submit Inquiry
                        </Button>
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Direct Support</p>
                    <div className="space-y-4">
                        <a href="tel:+917700908508" className="flex items-center gap-4 text-white hover:-secondary transition-colors">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone className="size-4" />
                            </div>
                            <span className="font-semibold">+91 7700908508</span>
                        </a>
                        <a href="mailto:energyeliz@gmail.com" className="flex items-center gap-4 text-white hover:-secondary transition-colors">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Mail className="size-4" />
                            </div>
                            <span className="font-semibold">energyeliz@gmail.com</span>
                        </a>
                    </div>
                </div>
              </div>
            </aside>
          </div>

          <Separator className="my-24 opacity-50" />

          {/* Service FAQ Section */}
          {service.faqs.length > 0 && (
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm mb-6">
                    <span className="size-2 rounded-full -secondary" />
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
