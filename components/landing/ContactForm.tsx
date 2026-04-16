"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle, Building2, Users, Zap } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const industryOptions = [
  "Manufacturing & Industrial",
  "Commercial Real Estate",
  "IT / Data Centers",
  "Retail & Hospitality",
  "Healthcare",
  "Education",
  "Government / PSU",
  "Other",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    company: "",
    industry: "",
    capacity: "",
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
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: `[Company: ${formData.company || "N/A"}] [Industry: ${formData.industry || "N/A"}] [Capacity: ${formData.capacity || "N/A"} kW]\n\n${formData.message}`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          throw new Error(data.errors[0]?.message || "Validation failed");
        }
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setStatusMessage("Enquiry received! Our enterprise team will contact you within 4 business hours.");
      setFormData({ firstName: "", lastName: "", email: "", message: "", company: "", industry: "", capacity: "" });
      setTimeout(() => setStatus("idle"), 6000);
      toast.success("Enquiry submitted successfully!");
    } catch (error: any) {
      setStatus("error");
      setStatusMessage(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-28 bg-[#080f1e]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">Enterprise Enquiries</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Start Your
                <br />
                <span className="text-white/30">Solar Journey Today</span>
              </h2>
              <p className="text-white/40 text-lg mb-12 leading-relaxed">
                Fill in your details and our enterprise solar consultants will prepare a customized feasibility report with ROI projections — free and with no obligation.
              </p>
            </motion.div>

            {/* Contact chips */}
            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, label: "Call Us", value: "+91 98765 43210", sub: "Mon–Sat, 9 AM – 6 PM" },
                { icon: Mail, label: "Email Us", value: "enterprise@suntrix.in", sub: "Response within 4 hrs" },
                { icon: MapPin, label: "HQ", value: "Suntrix Tower, BKC, Mumbai", sub: "Maharashtra – 400 051" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5"
                  >
                    <div className="w-12 h-12 bg-[#f5a623]/8 border border-[#f5a623]/15 rounded-xl flex items-center justify-center text-[#f5a623] flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs uppercase tracking-widest mb-0.5">{item.label}</div>
                      <h4 className="font-bold text-white text-sm">{item.value}</h4>
                      <p className="text-white/30 text-xs">{item.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust indicators */}
            <div className="border-t border-white/8 pt-8">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Why reach out?</p>
              <div className="space-y-3">
                {[
                  { icon: Zap, text: "Free site assessment & energy audit" },
                  { icon: Building2, text: "Custom ROI model for your enterprise" },
                  { icon: Users, text: "Dedicated enterprise account manager" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[#f5a623]" />
                      <span className="text-white/50 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#050a14] border border-white/8 rounded-3xl p-8 md:p-10"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Status Alert */}
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-2xl flex items-start gap-3 border ${
                      status === "success"
                        ? "bg-emerald-500/8 border-emerald-500/20 text-emerald-400"
                        : "bg-rose-500/8 border-rose-500/20 text-rose-400"
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

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="text-white/50 text-xs font-semibold uppercase tracking-wide">First Name *</Label>
                  <Input
                    id="firstName" required value={formData.firstName} onChange={handleChange}
                    placeholder="Rajesh"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName" className="text-white/50 text-xs font-semibold uppercase tracking-wide">Last Name *</Label>
                  <Input
                    id="lastName" required value={formData.lastName} onChange={handleChange}
                    placeholder="Sharma"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-white/50 text-xs font-semibold uppercase tracking-wide">Company Name *</Label>
                <Input
                  id="company" required value={formData.company} onChange={handleChange}
                  placeholder="Mahindra & Mahindra Ltd."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-white/50 text-xs font-semibold uppercase tracking-wide">Work Email *</Label>
                <Input
                  id="email" type="email" required value={formData.email} onChange={handleChange}
                  placeholder="rajesh@company.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
                />
              </div>

              {/* Industry + Capacity */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="industry" className="text-white/50 text-xs font-semibold uppercase tracking-wide">Industry</Label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 h-12 text-white/60 text-sm focus:outline-none focus:border-[#f5a623]/40"
                  >
                    <option value="" disabled className="bg-[#050a14]">Select sector</option>
                    {industryOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#050a14] text-white">{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="capacity" className="text-white/50 text-xs font-semibold uppercase tracking-wide">Est. Capacity (kW)</Label>
                  <Input
                    id="capacity" type="number" value={formData.capacity} onChange={handleChange}
                    placeholder="e.g. 500"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-white/50 text-xs font-semibold uppercase tracking-wide">Project Details *</Label>
                <textarea
                  id="message" required rows={4} value={formData.message} onChange={handleChange}
                  className="flex w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:border-[#f5a623]/40 resize-none"
                  placeholder="Tell us about your energy requirements, site details, or any specific questions..."
                />
              </div>

              <Button
                size="lg" type="submit" disabled={loading}
                className="w-full rounded-2xl h-14 text-base font-bold bg-[#f5a623] hover:bg-[#e09520] text-black shadow-xl shadow-[#f5a623]/20 transition-all"
              >
                {loading ? "Submitting..." : "Submit Enterprise Enquiry"}
                {!loading && <Send className="ml-2 w-4 h-4" />}
              </Button>
              <p className="text-center text-white/20 text-xs mt-2">
                Our enterprise team responds within 4 business hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
