"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Building2,
  Factory,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import siteConfig from "@/lib/siteConfig";

const requirementOptions = [
  { value: "Commercial", label: "Commercial rooftop solar" },
  { value: "Industrial", label: "Industrial or factory solar" },
  { value: "DataCenter", label: "Data center or IT park" },
  { value: "Warehouse", label: "Warehouse or logistics site" },
  { value: "Agricultural", label: "Agricultural or food-processing site" },
  { value: "Other", label: "Other or not sure yet" },
];

const defaultFormData = {
  name: "",
  phone: "",
  email: "",
  company: "",
  location: "",
  billAmount: "",
  requirement: "",
  capacity: "",
};

export default function QuotationForm() {
  const { company } = siteConfig;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setSubmitted(true);
      setFormData(defaultFormData);
      toast.success("Quotation request submitted. We will contact you shortly.");
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : "Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[2.4rem] border border-slate-200 bg-white p-10 text-center shadow-[0_24px_70px_rgba(8,17,31,0.06)]">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[var(--brand-lime)]/35 text-slate-950">
          <Zap className="size-7" />
        </div>
        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">
          Request received
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600">
          Our enterprise solar team will review your details and get back to you with the next practical step within 4 business hours.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-8 h-12 rounded-full border-slate-200 bg-white px-6 text-slate-950 hover:bg-slate-50"
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-[2.4rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(8,17,31,0.06)] md:p-10">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          Project brief
        </div>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Tell us about the site, load, and buying intent.
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          A monthly electricity spend, location, and target capacity is enough for a strong first-pass commercial response.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-3.5 text-slate-400" />
                Full name
              </span>
            </Label>
            <Input
              id="name"
              required
              placeholder="Aarav Mehta"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="size-3.5 text-slate-400" />
                Company name
              </span>
            </Label>
            <Input
              id="company"
              required
              placeholder="Example Industries Pvt. Ltd."
              value={formData.company}
              onChange={(event) => setFormData({ ...formData, company: event.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-3.5 text-slate-400" />
                Phone
              </span>
            </Label>
            <Input
              id="phone"
              required
              type="tel"
              placeholder={company.contact.phone}
              value={formData.phone}
              onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-3.5 text-slate-400" />
                Work email
              </span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={company.contact.email}
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="location" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-slate-400" />
                Site location
              </span>
            </Label>
            <Input
              id="location"
              required
              placeholder="City, state"
              value={formData.location}
              onChange={(event) => setFormData({ ...formData, location: event.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="billAmount" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <IndianRupee className="size-3.5 text-slate-400" />
                Monthly bill (INR)
              </span>
            </Label>
            <Input
              id="billAmount"
              required
              type="number"
              placeholder="500000"
              value={formData.billAmount}
              onChange={(event) => setFormData({ ...formData, billAmount: event.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="requirement" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Factory className="size-3.5 text-slate-400" />
                Requirement
              </span>
            </Label>
            <Select
              value={formData.requirement}
              onValueChange={(value) => setFormData({ ...formData, requirement: value })}
            >
              <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-700">
                <SelectValue placeholder="Choose the closest fit" />
              </SelectTrigger>
              <SelectContent className="border-slate-200 bg-white">
                {requirementOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="capacity" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Zap className="size-3.5 text-slate-400" />
                Target capacity (kW)
              </span>
            </Label>
            <Input
              id="capacity"
              type="number"
              placeholder="500"
              value={formData.capacity}
              onChange={(event) => setFormData({ ...formData, capacity: event.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="h-14 w-full rounded-2xl bg-slate-950 text-base font-semibold text-white hover:bg-slate-800"
        >
          {loading ? "Submitting..." : "Request my proposal"}
          {!loading && <Send className="ml-2 size-4" />}
        </Button>

        <p className="text-center text-xs leading-6 text-slate-500">
          By submitting, you agree to our{" "}
          <Link href="/privacy-policy" className="font-medium text-slate-950 underline underline-offset-4">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="font-medium text-slate-950 underline underline-offset-4">
            Terms
          </Link>
          . You can also reach us directly at{" "}
          <a href={`mailto:${company.contact.email}`} className="font-medium text-slate-950 underline underline-offset-4">
            {company.contact.email}
          </a>
          .
        </p>
      </form>
    </div>
  );
}
