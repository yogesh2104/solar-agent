"use client";

import { useState } from "react";
import {
  Send,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
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
import { Card, CardContent } from "@/components/ui/card";

export default function QuotationForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    billAmount: "",
    requirement: "",
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

      toast.success("Quotation request submitted! We'll contact you soon.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        billAmount: "",
        requirement: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to submit request"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-xl rounded-3xl overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Full Name
              </Label>
              <Input
                id="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50 border-border focus:ring-primary h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> Phone Number
              </Label>
              <Input
                id="phone"
                required
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background/50 border-border focus:ring-primary h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background/50 border-border focus:ring-primary h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Installation Location
              </Label>
              <Input
                id="location"
                required
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="bg-background/50 border-border focus:ring-primary h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bill" className="text-sm font-semibold flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-primary" /> Monthly Electricity Bill
              </Label>
              <Input
                id="bill"
                required
                type="number"
                placeholder="Average Monthly Bill"
                value={formData.billAmount}
                onChange={(e) => setFormData({ ...formData, billAmount: e.target.value })}
                className="bg-background/50 border-border focus:ring-primary h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirement" className="text-sm font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" /> Requirement Type
            </Label>
            <Select 
              value={formData.requirement} 
              onValueChange={(value) => setFormData({ ...formData, requirement: value })}
              required
            >
              <SelectTrigger className="bg-background/50 border-border focus:ring-primary h-12 rounded-xl">
                <SelectValue placeholder="Select requirement type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Residential">Residential Solar</SelectItem>
                <SelectItem value="Commercial">Commercial Solar</SelectItem>
                <SelectItem value="Industrial">Industrial Solar</SelectItem>
                <SelectItem value="Agricultural">Agricultural Solar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 active:scale-[0.98]"
          >
            {loading ? "Processing..." : "Get Free Quotation"}
            <Send className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By clicking the button above, you agree to our terms and privacy policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
