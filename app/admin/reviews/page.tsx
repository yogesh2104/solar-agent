"use client";

import { useEffect, useState, useMemo } from "react";
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
  Clock,
  Search,
  Filter,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "approved">("all");

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews?all=true");
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

  const stats = useMemo(() => {
    const total = reviews.length;
    const pending = reviews.filter(r => !r.approved).length;
    const approved = reviews.filter(r => r.approved).length;
    const avgRating = total > 0 
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1) 
      : "0";
    
    return { total, pending, approved, avgRating };
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    return reviews.filter(review => {
      const matchesSearch = review.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           review.comment.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || 
                           (statusFilter === "pending" && !review.approved) || 
                           (statusFilter === "approved" && review.approved);
      
      return matchesSearch && matchesStatus;
    });
  }, [reviews, searchQuery, statusFilter]);

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
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Customer Reviews</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Moderate and manage reviews submitted by your customers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card/40 backdrop-blur-sm border-none shadow-lg shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground mt-1">Overall submissions</p>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-none shadow-lg shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.pending}</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting moderation</p>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-none shadow-lg shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.approved}</div>
            <p className="text-xs text-muted-foreground mt-1">Live on site</p>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-none shadow-lg shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.avgRating}/5.0</div>
            <p className="text-xs text-muted-foreground mt-1">Customer satisfaction</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card/30 p-4 rounded-2xl border border-border/50">
        <div className="flex p-1 bg-muted/50 rounded-xl w-full md:w-auto">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              statusFilter === "all" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("pending")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              statusFilter === "pending" ? "bg-background shadow-sm text-amber-600 font-bold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Pending {stats.pending > 0 && <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] bg-amber-500 text-white rounded-full">{stats.pending}</span>}
          </button>
          <button
            onClick={() => setStatusFilter("approved")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              statusFilter === "approved" ? "bg-background shadow-sm text-emerald-600 font-bold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Approved
          </button>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search reviews..." 
            className="pl-10 rounded-xl bg-card/50 border-border/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 bg-card/20 rounded-3xl border border-dashed">
          <Clock className="w-12 h-12 text-primary animate-spin mb-4" />
          <p className="text-muted-foreground">Loading reviews...</p>
        </div>
      ) : filteredReviews.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed rounded-3xl bg-muted/20">
          <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
          <h3 className="text-2xl font-bold text-muted-foreground">No matches found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
          <Button variant="link" onClick={() => {setSearchQuery(""); setStatusFilter("all");}} className="mt-4">
            Reset All Filters
          </Button>
        </div>
      ) : (
        <div className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/5">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="py-5 px-6">Customer</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="w-[450px]">Comment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right px-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.map((review) => (
                <TableRow key={review.id} className="hover:bg-primary/5 transition-colors group">
                  <TableCell className="py-5 px-6 font-semibold">{review.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < review.rating ? "fill-current" : "text-muted"}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{review.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5">
                    <div className="max-w-[400px] overflow-hidden text-ellipsis text-muted-foreground italic text-sm group-hover:text-foreground transition-colors leading-relaxed">
                      &quot;{review.comment}&quot;
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={review.approved ? "default" : "outline"} className={
                      review.approved 
                        ? "bg-emerald-500/10 text-emerald-600 border-none px-4 py-1 rounded-full text-xs font-bold" 
                        : "bg-amber-500/10 text-amber-600 border-none px-4 py-1 rounded-full text-xs font-bold"
                    }>
                      {review.approved ? "Approved" : "Pending"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {format(new Date(review.createdAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="text-right px-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className={review.approved ? "h-9 w-9 p-0 text-amber-500 hover:text-amber-600 hover:bg-amber-500/10 rounded-xl" : "h-9 w-9 p-0 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10 rounded-xl"}
                        onClick={() => toggleApproval(review.id, review.approved)}
                        title={review.approved ? "Unapprove" : "Approve"}
                      >
                        {review.approved ? <XCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-9 w-9 p-0 text-destructive hover:bg-destructive/10 rounded-xl"
                        onClick={() => deleteReview(review.id)}
                        title="Delete Review"
                      >
                        <Trash2 className="h-5 w-5" />
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
