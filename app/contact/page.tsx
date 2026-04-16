import StaticPageHeader from "@/components/landing/StaticPageHeader";
import ContactForm from "@/components/landing/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <StaticPageHeader
        title="Contact Us"
        description="Have a question or ready to switch to clean energy? Get in touch with our team of experts today."
      />

      <section className="py-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Contact Details */}
            {/* <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", details: "+1 (555) 123-4567" },
                    { icon: Mail, title: "Email", details: "energy@solarco.com" },
                    { icon: MapPin, title: "Office", details: "123 Solar Way, Sunshine City, CA 94101" },
                    { icon: Clock, title: "Working Hours", details: "Mon - Fri: 9:00 AM - 6:00 PM" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm">{item.title}</div>
                        <div className="text-muted-foreground text-sm">{item.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-border h-[300px] relative bg-muted group">
                 <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                    <div className="space-y-2">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                        <p className="font-bold text-foreground">Our Location</p>
                        <p className="text-xs text-muted-foreground">123 Solar Way, Sunshine City, CA 94101</p>
                    </div>
                 </div>
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.27315264875!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1712830000000!5m2!1sen!2sus"
                    className="w-full h-full border-0 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
              </div>
            </div> */}

            {/* Form Section */}
            <div className="">
              <div className="bg-card border border-border rounded-4xl p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
