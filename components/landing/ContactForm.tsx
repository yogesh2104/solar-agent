"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          // Display the first validation error message
          const errorMsg = data.errors[0]?.message || "Validation failed";
          throw new Error(errorMsg);
        }
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setStatusMessage("Message sent successfully! We'll get back to you soon.");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
      
      toast.success("Message sent successfully!");
    } catch (error: any) {
      setStatus("error");
      setStatusMessage(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                Contact Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Ready to Start Your <br />
                <span className="text-muted-foreground">Solar Journey?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Have questions about installation, pricing, or tax credits? Our
                team is here to help you every step of the way.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", details: "+1 (555) 123-4567" },
                {
                  icon: Mail,
                  title: "Email Us",
                  details: "energy@solarco.com",
                },
                {
                  icon: MapPin,
                  title: "Our Office",
                  details: "123 Solar Way, Sunshine City, CA 94101",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 md:p-12 rounded-4xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Status Alert */}
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-2xl flex items-start gap-3 border ${
                      status === "success" 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" 
                        : "bg-rose-500/10 border-rose-500/20 text-rose-500"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    )}
                    <div className="text-sm font-medium">{statusMessage}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button size="lg" disabled={loading} className="w-full rounded-full h-12 text-lg">
                {loading ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                We&apos;ll get back to you within 24 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
