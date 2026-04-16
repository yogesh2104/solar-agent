"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquarePlus, Quote, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: "5",
    comment: "",
  });

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReviews(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.comment.length < 10) {
      toast.error("Comment must be at least 10 characters long");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit review");
      }
      toast.success("Review submitted! It will appear once approved.");
      setIsModalOpen(false);
      setFormData({ name: "", rating: "5", comment: "" });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (!loading && reviews.length === 0) return null;

  return (
    <section id="reviews" className="py-28 bg-[#080f1e] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4"
            >
              Client Reviews
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Customer <span className="text-white/30">Feedback</span>
            </motion.h2>
          </div>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full gap-2 bg-[#f5a623] hover:bg-[#e09520] text-black font-bold">
                <MessageSquarePlus className="w-5 h-5" /> Write a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-3xl bg-[#080f1e] border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-white">Share Your Experience</DialogTitle>
                <DialogDescription className="text-white/40">
                  Your review helps others make informed decisions about going solar.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="rev-name" className="text-white/50 text-xs uppercase tracking-wide">Full Name</Label>
                  <Input
                    id="rev-name" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="rounded-xl h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rev-rating" className="text-white/50 text-xs uppercase tracking-wide">Rating</Label>
                  <Select value={formData.rating} onValueChange={(val) => setFormData({ ...formData, rating: val })}>
                    <SelectTrigger className="rounded-xl h-12 bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#080f1e] border-white/10">
                      {[5, 4, 3, 2, 1].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="text-white hover:bg-white/5">
                          {num} Stars {num === 5 ? "⭐⭐⭐⭐⭐" : num === 4 ? "⭐⭐⭐⭐" : num >= 3 ? "⭐⭐⭐" : "⭐⭐"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rev-comment" className="text-white/50 text-xs uppercase tracking-wide">Your Thoughts</Label>
                  <textarea
                    id="rev-comment" required rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="flex w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:border-[#f5a623]/40 resize-none"
                    placeholder="Tell us about your installation experience..."
                  />
                  {formData.comment.length > 0 && formData.comment.length < 10 && (
                    <p className="text-xs text-red-400">At least 10 characters required.</p>
                  )}
                </div>
                <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl bg-[#f5a623] hover:bg-[#e09520] text-black font-bold">
                  {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : "Submit Review"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => <div key={i} className="h-64 rounded-3xl bg-white/3 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-white/8 bg-[#050a14] hover:border-[#f5a623]/20 transition-all group rounded-3xl">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} className={`w-4 h-4 ${si < review.rating ? "fill-[#f5a623] text-[#f5a623]" : "text-white/10"}`} />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-white/5 mb-3" />
                    <p className="text-white/50 mb-8 leading-relaxed italic text-sm">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/15 flex items-center justify-center font-bold text-[#f5a623] group-hover:bg-[#f5a623]/20 transition-colors">
                        {review.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{review.name}</h4>
                        <p className="text-xs text-white/30">{new Date(review.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
