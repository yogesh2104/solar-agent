"use client";

import { useEffect, useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  MessageSquare,
  Star,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  approved: boolean;
  createdAt: string;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews?all=true"); // I need to update API to allow admin to see all
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      toast.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: !currentStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      toast.success(currentStatus ? "Review unapproved" : "Review approved");
      setReviews(reviews.map(r => r.id === id ? { ...r, approved: !currentStatus } : r));
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    try {
      const res = await fetch(`/api/reviews/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete review");

      toast.success("Review deleted");
      setReviews(reviews.filter(r => r.id !== id));
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Customer Reviews</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Moderate and manage reviews submitted by your customers.
          </p>
        </div>
      </div>

      <Separator className="mb-12 opacity-50" />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Clock className="w-12 h-12 text-primary animate-spin mb-4" />
          <p>Loading reviews...</p>
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed rounded-3xl bg-muted/20">
          <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-bold">No reviews found</h3>
          <p className="text-muted-foreground mt-2">New reviews will appear here for your approval.</p>
        </div>
      ) : (
        <div className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/5">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="w-[400px]">Comment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id} className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-semibold">{review.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      {review.rating}/5
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground italic text-sm">
                    &quot;{review.comment}&quot;
                  </TableCell>
                  <TableCell>
                    <Badge variant={review.approved ? "default" : "outline"} className={review.approved ? "bg-green-500/10 text-green-600 border-none px-3" : "px-3"}>
                      {review.approved ? "Approved" : "Pending"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {format(new Date(review.createdAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className={review.approved ? "text-amber-500 hover:text-amber-600 hover:bg-amber-500/10" : "text-green-500 hover:text-green-600 hover:bg-green-500/10"}
                        onClick={() => toggleApproval(review.id, review.approved)}
                      >
                        {review.approved ? <XCircle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="text-destructive hover:bg-destructive/10"
                        onClick={() => deleteReview(review.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
