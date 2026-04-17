"use client";

import { useState } from "react";
import { BlogEditor } from "@/components/blog/blog-editor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Card, CardContent } from "@/components/ui/card";
import { X, Loader2, Save, ArrowLeft, Plus } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createService, updateService } from "@/lib/actions/service";

interface ServiceFormData {
  id?: string;
  title?: string;
  slug?: string;
  description?: string;
  content?: string | null;
  image?: string | null;
  icon?: string | null;
  features?: string[];
}

interface ServiceFormProps {
  initialData?: ServiceFormData;
}

export const ServiceForm = ({ initialData }: ServiceFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [icon, setIcon] = useState(initialData?.icon || "");
  const [features, setFeatures] = useState<string[]>(initialData?.features || []);
  const [featureInput, setFeatureInput] = useState("");

  const handleAddFeature = (e: React.KeyboardEvent | React.MouseEvent) => {
    if ((e.type === "click" || (e as React.KeyboardEvent).key === "Enter") && featureInput.trim()) {
      if (e.type === "keydown") (e as React.KeyboardEvent).preventDefault();
      if (!features.includes(featureInput.trim())) {
        setFeatures([...features, featureInput.trim()]);
      }
      setFeatureInput("");
    }
  };

  const removeFeature = (featureToRemove: string) => {
    setFeatures(features.filter((f) => f !== featureToRemove));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !description) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const data = {
        title,
        slug,
        description,
        content,
        image,
        icon,
        features,
      };

      let result;
      if (initialData?.id) {
        result = await updateService(initialData.id, data);
      } else {
        result = await createService(data);
      }

      if (result.success) {
        toast.success(initialData ? "Service updated" : "Service created");
        router.push("/admin/services");
        router.refresh();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch {
      toast.error("Failed to save service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 max-w-5xl mx-auto pb-20">
      <div className="flex items-center justify-between sticky top-0 z-20 bg-background/80 backdrop-blur-md py-4 border-b mb-8">
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => router.push("/admin/services")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {initialData ? "Edit Service" : "New Service"}
            </h1>
            <p className="text-muted-foreground">
              Define your solar service offering
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/services")}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm bg-card/50">
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g. Residential Solar"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if (!initialData) setSlug(e.target.value.toLowerCase().replace(/ /g, '-'));
                    }}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    placeholder="e.g. residential-solar"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/ /g, '-'))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Short Description *</Label>
                <textarea
                  id="description"
                  className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Summary for listings..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Detailed Content</Label>
                <BlogEditor
                  content={content || ""}
                  onChange={setContent}
                  placeholder="Tell more about this service..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-sm bg-card/50">
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <Label>Featured Image</Label>
                {image ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden border">
                    <Image
                      src={image}
                      alt="Service image"
                      fill
                      className="object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 rounded-full h-8 w-8"
                      onClick={() => setImage("")}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center aspect-video rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/30 transition-colors hover:bg-muted/50">
                    <UploadButton
                      endpoint="blogImage" // Reusing blogImage endpoint
                      onClientUploadComplete={(res) => {
                        setImage(res[0].url);
                        toast.success("Image uploaded");
                      }}
                      onUploadError={(error: Error) => {
                        toast.error(`Upload failed: ${error.message}`);
                      }}
                      appearance={{
                        button: "bg-primary rounded-full px-6",
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Features / Key Points</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a feature..."
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={handleAddFeature}
                  />
                  <Button type="button" size="icon" onClick={handleAddFeature}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2 mt-3">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-lg text-sm group"
                    >
                      <span>{feature}</span>
                      <button
                        type="button"
                        onClick={() => removeFeature(feature)}
                        className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="icon">Icon Name (Lucide)</Label>
                <Input
                  id="icon"
                  placeholder="e.g. Home, Building, Settings"
                  value={icon || ""}
                  onChange={(e) => setIcon(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
};
