"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import siteConfig from "@/lib/siteConfig";
import ContactAvailability from "@/components/contact/contact-availability";

const industryOptions = [
  "Manufacturing and industrial",
  "Warehousing and logistics",
  "Retail and commercial real estate",
  "Healthcare and campuses",
  "Hospitality",
  "Channel partner or EPC",
  "Other",
];

type FormStatus = "idle" | "success" | "error";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unable to submit your enquiry right now.";
}

export default function ContactForm() {
  const { company } = siteConfig;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
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


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: `[Company: ${formData.company || "N/A"}] [Industry: ${formData.industry || "N/A"}] [Capacity: ${formData.capacity || "N/A"} kW]\n\n${formData.message}`,
        }),
      });

      const data = (await response.json()) as {
        errors?: Array<{ message?: string }>;
        message?: string;
      };

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          throw new Error(data.errors[0]?.message || "Validation failed");
        }

        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setStatusMessage(
        "Thanks, your enquiry is in. Our enterprise team will reach out within 4 business hours.",
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        company: "",
        industry: "",
        capacity: "",
      });
      toast.success("Enquiry submitted successfully.");
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setStatus("error");
      setStatusMessage(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <section id="contact" className="bg-[#f7faf9] pt-6 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[rgba(15,23,42,0.07)] bg-white p-8 shadow-sm md:p-10"
            >
              <h2
                className="text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Speak with a team built for B2B solar buying decisions.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Use this page for panel sourcing, rooftop solar feasibility,
                hybrid system planning, or channel-partner support. We will
                point you to the right commercial path quickly.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Response", value: "4 hrs" },
                  { label: "Coverage", value: "18 states" },
                  { label: "Project focus", value: "B2B only" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-[rgba(15,23,42,0.07)] bg-[#f7faf9] p-4"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-1.5 text-2xl font-bold text-[#0f172a]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Business Hours Contact Availability ── */}
            <ContactAvailability />

            {/* Office location card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[1.9rem] border border-[rgba(15,23,42,0.07)] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    Office
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#0f172a]">
                    {company.contact.address}
                  </div>
                  <p className="mt-0.5 text-xs leading-5 text-[#475569]">
                    Commercial solar consultations by appointment
                  </p>
                </div>
                <ArrowUpRight className="ml-auto mt-1 size-4 shrink-0 text-slate-300" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-[rgba(15,23,42,0.07)] bg-white p-8 shadow-[0_16px_60px_rgba(15,23,42,0.07)] md:p-10"
          >
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Send your enquiry
              </div>
              <h3
                className="mt-3 text-2xl font-bold tracking-tight text-[#0f172a]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Share the essentials and we will take it from there.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                We can work from a monthly bill, rough roof area, target
                capacity, or a sourcing brief.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-start gap-3 rounded-[1.4rem] border px-4 py-4 ${
                      status === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-rose-200 bg-rose-50 text-rose-700"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 size-5 shrink-0" />
                    )}
                    <div className="text-sm font-medium">{statusMessage}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Aarav"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Mehta"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="company"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Company
                </Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Example Industries Pvt. Ltd."
                  className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Work email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="capacity"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Estimated capacity
                  </Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="500"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="industry"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Industry
                </Label>
                <select
                  id="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition-colors focus:border-slate-400"
                >
                  <option value="">Select your sector</option>
                  {industryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Project details
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you are evaluating: panel supply, rooftop solar, hybrid storage, or a multi-site rollout."
                  className="rounded-2xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                />
              </div>

              <Button
                size="lg"
                type="submit"
                disabled={loading}
                className="h-13 w-full rounded-2xl bg-primary text-base font-semibold text-white hover:bg-primary/90 hover:shadow-[0_6px_24px_rgba(34,197,94,0.28)] transition-all duration-200"
              >
                {loading ? "Submitting..." : "Submit enterprise enquiry"}
                {!loading && <Send className="ml-2 size-4" />}
              </Button>

              <p className="text-center text-xs leading-6 text-slate-500">
                We will only use this information to respond to your enquiry and
                shape the right next step.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
