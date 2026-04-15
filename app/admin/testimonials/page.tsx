"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Quote, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  feedback: string;
  image: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    feedback: "",
    image: "",
  });

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      setTestimonials(data);
    } catch {
      toast.error("Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add testimonial");

      toast.success("Testimonial added successfully");
      setIsModalOpen(false);
      setFormData({ name: "", company: "", feedback: "", image: "" });
      fetchTestimonials();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to add testimonial"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");

      toast.success("Testimonial deleted");
      setTestimonials(testimonials.filter(t => t.id !== id));
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Testimonial Management</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Add and manage featured client success stories.
          </p>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="rounded-full gap-2 shadow-lg shadow-primary/20">
              <Plus className="w-5 h-5" /> Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] rounded-3xl">
            <DialogHeader>
              <DialogTitle>Add New Testimonial</DialogTitle>
              <DialogDescription>
                This will be displayed in the featured carousel on the home page.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="t-name">Client Name</Label>
                  <Input
                    id="t-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="t-company">Company/Role</Label>
                  <Input
                    id="t-company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="CEO, TechCorp"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="t-image">Image URL</Label>
                <Input
                  id="t-image"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/photo.jpg"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="t-feedback">Feedback Content</Label>
                <textarea
                  id="t-feedback"
                  required
                  rows={4}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  className="flex w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="The solar installation was perfect..."
                />
              </div>
              <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl">
                {submitting ? "Saving..." : "Save Testimonial"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Separator className="mb-12 opacity-50" />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Clock className="w-12 h-12 text-primary animate-spin mb-4" />
          <p>Loading testimonials...</p>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed rounded-3xl bg-muted/20">
          <Quote className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-bold">No testimonials yet</h3>
          <p className="text-muted-foreground mt-2">Display client success stories on your homepage.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="group relative bg-card border border-border/50 rounded-3xl p-6 hover:border-primary/30 transition-all shadow-xl shadow-primary/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-6">
                &quot;{t.feedback}&quot;
              </p>
              <div className="flex justify-end pt-4 border-t border-border/50">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-destructive hover:bg-destructive/10"
                  onClick={() => deleteTestimonial(t.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
