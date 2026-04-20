"use client";

import { useState } from "react";
import { BlogEditor } from "./blog-editor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Card, CardContent } from "@/components/ui/card";
import { X, Loader2, Globe, FileText } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createBlog, updateBlog } from "@/lib/actions/blog";
import { slugify } from "@/lib/utils";

interface BlogFormData {
  id?: string;
  title?: string;
  content?: string;
  image?: string;
  tags?: string[];
  slug?: string;
  metadata?: string | null;
  isPublished?: boolean;
}

interface BlogFormProps {
  initialData?: BlogFormData;
  authorId: string;
}

export const BlogForm = ({ initialData, authorId }: BlogFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [tagInput, setTagInput] = useState("");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [isSlugModified, setIsSlugModified] = useState(!!initialData?.slug);
  const [metadata, setMetadata] = useState(initialData?.metadata || "");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!isSlugModified) {
      setSlug(slugify(newTitle));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(slugify(e.target.value));
    setIsSlugModified(true);
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim().toLowerCase())) {
        setTags([...tags, tagInput.trim().toLowerCase()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !image) {
      toast.error("Please fill in all required fields");
      return;
    }

    const nativeEvent = e.nativeEvent as SubmitEvent;
    const submitter = nativeEvent.submitter as HTMLButtonElement | null;
    const shouldPublish = submitter?.value === "publish";

    setLoading(true);
    try {
      const blogData = {
        title,
        content,
        image,
        tags,
        slug,
        metadata,
        isPublished: shouldPublish,
      };

      let result;
      if (initialData?.id) {
        result = await updateBlog(initialData.id, blogData);
      } else {
        result = await createBlog({
          ...blogData,
          authorId,
        });
      }

      if (result.success) {
        toast.success(
          shouldPublish
            ? initialData
              ? "Blog published successfully"
              : "Blog created and published"
            : initialData
              ? "Draft updated successfully"
              : "Draft saved successfully",
        );
        router.push("/admin/blogs");
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch {
      toast.error("Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-6xl mx-auto pb-20">
      <div className="flex items-center justify-between sticky top-0 z-20 bg-background/80 backdrop-blur-md py-4 border-b mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {initialData ? "Edit Blog" : "Create New Blog"}
          </h1>
          <p className="text-muted-foreground">
            {initialData
              ? "Modify your post details"
              : "Share your thoughts with the world"}
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/blogs")}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            name="publicationAction"
            value="draft"
            variant="outline"
            disabled={loading}
            className="min-w-[140px]"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <FileText className="mr-2 h-4 w-4" />
            {initialData?.isPublished ? "Move to Draft" : "Save Draft"}
          </Button>
          <Button
            type="submit"
            name="publicationAction"
            value="publish"
            disabled={loading}
            className="min-w-[140px]"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <Globe className="mr-2 h-4 w-4" />
            {initialData?.isPublished ? "Update Published" : "Publish Blog"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-lg">
                Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Enter a catchy title..."
                value={title}
                onChange={handleTitleChange}
                className="text-xl py-6 font-semibold"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-lg">
                Content <span className="text-destructive">*</span>
              </Label>
              <BlogEditor
                content={content}
                onChange={setContent}
                placeholder="Start writing your amazing blog post here..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Publication Status</p>
                    <p className="text-sm text-muted-foreground">
                      {initialData?.isPublished
                        ? "This blog is currently live on the public site."
                        : "This blog is currently saved as a draft."}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      initialData?.isPublished
                        ? "bg-primary/15 text-primary"
                        : "bg-amber-500/15 text-amber-600"
                    }`}
                  >
                    {initialData?.isPublished ? "Published" : "Draft"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>
                  Featured Image <span className="text-destructive">*</span>
                </Label>
                {image ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden border">
                    <Image
                      src={image}
                      alt="Blog featured image"
                      fill
                      className="object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => setImage("")}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted/80">
                    <UploadButton
                      endpoint="blogImage"
                      onClientUploadComplete={(res) => {
                        setImage(res[0].url);
                        toast.success("Image uploaded");
                      }}
                      onUploadError={(error: Error) => {
                        toast.error(`Upload failed: ${error.message}`);
                      }}
                      appearance={{
                        button:
                          "bg-primary px-4 text-primary-foreground hover:bg-primary/90 transition-colors",
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <Input
                  placeholder="Type and press Enter..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm font-medium"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-destructive transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Custom URL Slug</Label>
                <div className="relative">
                  <Input
                    id="slug"
                    placeholder="post-url-slug"
                    value={slug}
                    onChange={handleSlugChange}
                    className="pr-10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                  URL Preview:{" "}
                  <span className="text-primary truncate">
                    /blog/{slug || "your-slug"}
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <Label>SEO Metadata (Description)</Label>
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter a brief summary for search engines..."
                  value={metadata}
                  onChange={(e) => setMetadata(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
};
