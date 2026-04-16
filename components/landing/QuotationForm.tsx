"use client";

import { useState } from "react";
import { Send, IndianRupee, Mail, MapPin, Phone, User, Zap, Building2, Factory } from "lucide-react";
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

const requirementOptions = [
  { value: "Commercial", label: "Commercial Solar (Offices / Malls)" },
  { value: "Industrial", label: "Industrial Solar (Factory / Plant)" },
  { value: "DataCenter", label: "Data Center / IT Park" },
  { value: "Warehouse", label: "Warehouse / Logistics" },
  { value: "Agricultural", label: "Agricultural / Farm" },
  { value: "Other", label: "Other / Not Sure" },
];

export default function QuotationForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    billAmount: "",
    requirement: "",
    capacity: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit request");
      setSubmitted(true);
      toast.success("Quotation request submitted! We'll contact you within 4 hours.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#050a14] border border-[#22c55e]/20 rounded-3xl p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center mx-auto mb-6">
          <Zap className="w-8 h-8 text-[#22c55e] fill-current" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
        <p className="text-white/50 mb-6">Our enterprise solar consultant will reach out within 4 business hours with a customized proposal.</p>
        <Button
          onClick={() => setSubmitted(false)}
          className="rounded-full px-8 bg-white/5 border border-white/10 text-white hover:bg-white/10"
          variant="outline"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#050a14] border border-white/8 rounded-3xl p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <User className="w-3 h-3 text-[#f5a623]" /> Full Name *
            </Label>
            <Input
              id="name" required placeholder="Rajesh Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <Building2 className="w-3 h-3 text-[#f5a623]" /> Company Name *
            </Label>
            <Input
              id="company" required placeholder="Mahindra & Mahindra Ltd."
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
            />
          </div>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#f5a623]" /> Phone *
            </Label>
            <Input
              id="phone" required type="tel" placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#f5a623]" /> Work Email
            </Label>
            <Input
              id="email" type="email" placeholder="rajesh@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
            />
          </div>
        </div>

        {/* Location + Monthly Bill */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="location" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#f5a623]" /> Installation Location *
            </Label>
            <Input
              id="location" required placeholder="City, State"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="billAmount" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <IndianRupee className="w-3 h-3 text-[#f5a623]" /> Monthly Bill (₹) *
            </Label>
            <Input
              id="billAmount" required type="number" placeholder="e.g. 500000"
              value={formData.billAmount}
              onChange={(e) => setFormData({ ...formData, billAmount: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
            />
          </div>
        </div>

        {/* Requirement Type + Target Capacity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="requirement" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <Factory className="w-3 h-3 text-[#f5a623]" /> Sector / Requirement *
            </Label>
            <Select
              value={formData.requirement}
              onValueChange={(value) => setFormData({ ...formData, requirement: value })}
              required
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white/60 h-12 rounded-xl focus:border-[#f5a623]/40">
                <SelectValue placeholder="Select your sector" />
              </SelectTrigger>
              <SelectContent className="bg-[#080f1e] border-white/10">
                {requirementOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value} className="text-white/70 hover:bg-white/5 focus:bg-white/5">
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="capacity" className="text-white/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-[#f5a623]" /> Target Capacity (kW)
            </Label>
            <Input
              id="capacity" type="number" placeholder="e.g. 500"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12 focus:border-[#f5a623]/40 focus:ring-0"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-14 text-base font-bold rounded-2xl bg-[#f5a623] hover:bg-[#e09520] text-black shadow-xl shadow-[#f5a623]/20 transition-all"
        >
          {loading ? "Submitting..." : "Request My Free Proposal"}
          {!loading && <Send className="ml-2 w-5 h-5" />}
        </Button>

        <p className="text-center text-xs text-white/20">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy" className="text-[#f5a623]/60 hover:text-[#f5a623]">Privacy Policy</a>{" "}
          and{" "}
          <a href="/terms" className="text-[#f5a623]/60 hover:text-[#f5a623]">Terms</a>.
          Our team responds within 4 business hours.
        </p>
      </form>
    </div>
  );
}
