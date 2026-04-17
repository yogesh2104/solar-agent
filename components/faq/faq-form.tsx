"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Loader2, Save, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createFaq, updateFaq } from "@/lib/actions/faq";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface Service {
  id: string;
  title: string;
}

interface FaqFormData {
  id?: string;
  question?: string;
  answer?: string;
  category?: string | null;
  serviceId?: string | null;
  order?: number;
  isPublished?: boolean;
}

interface FaqFormProps {
  initialData?: FaqFormData;
  services: Service[];
}

export const FaqForm = ({ initialData, services }: FaqFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState(initialData?.question || "");
  const [answer, setAnswer] = useState(initialData?.answer || "");
  const [category, setCategory] = useState(initialData?.category || "General");
  const [serviceId, setServiceId] = useState(initialData?.serviceId || "none");
  const [order, setOrder] = useState(initialData?.order || 0);
  const [isPublished, setIsPublished] = useState(initialData?.isPublished ?? true);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question || !answer) {
      toast.error("Please fill in question and answer");
      return;
    }

    setLoading(true);
    try {
      const data = {
        question,
        answer,
        category,
        order: Number(order),
        serviceId: serviceId === "none" ? undefined : serviceId,
        isPublished,
      };

      let result;
      if (initialData?.id) {
        result = await updateFaq(initialData.id, data as any);
      } else {
        result = await createFaq(data as any);
      }

      if (result.success) {
        toast.success(initialData ? "FAQ updated" : "FAQ created");
        router.push("/admin/faqs");
        router.refresh();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch {
      toast.error("Failed to save FAQ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 max-w-4xl mx-auto pb-20">
      <div className="flex items-center justify-between sticky top-0 z-20 bg-background/80 backdrop-blur-md py-4 border-b mb-8">
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => router.push("/admin/faqs")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {initialData ? "Edit FAQ" : "New FAQ"}
            </h1>
            <p className="text-muted-foreground">
              Define questions and answers for your users
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/faqs")}
            disabled={loading}
            className="rounded-full"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="rounded-full min-w-[140px]"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <Save className="mr-2 h-4 w-4" />
            {initialData ? "Update" : "Save"}
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm bg-card/50">
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="question">Question *</Label>
            <Input
              id="question"
              placeholder="e.g. How long does installation take?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="answer">Answer *</Label>
            <textarea
              id="answer"
              className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="Provide a detailed answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="General">General</SelectItem>
                  <SelectItem value="Installation">Installation</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                  <SelectItem value="Pricing">Pricing</SelectItem>
                  <SelectItem value="Technical">Technical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Service Link (Optional)</Label>
              <Select value={serviceId || "none"} onValueChange={setServiceId}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Link to a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Global (Not service-specific)</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl">
            <div className="space-y-0.5">
              <Label className="text-base">Published Status</Label>
              <p className="text-sm text-muted-foreground">
                Decide whether this FAQ is visible on the public site.
              </p>
            </div>
            <Switch
              checked={isPublished}
              onCheckedChange={setIsPublished}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="order">Display Order</Label>
            <Input
              id="order"
              type="number"
              placeholder="0"
              value={order}
              onChange={(e) => setOrder(Number(e.target.value))}
            />
            <p className="text-[10px] text-muted-foreground">
              Higher numbers appear later in the list.
            </p>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
