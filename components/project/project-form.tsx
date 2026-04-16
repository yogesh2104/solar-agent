"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Card, CardContent } from "@/components/ui/card";
import { X, Loader2, Plus } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createProject, updateProject } from "@/lib/actions/project";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ProjectFormProps {
  initialData?: any;
}

export const ProjectForm = ({ initialData }: ProjectFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [problem, setProblem] = useState(initialData?.problem || "");
  const [solution, setSolution] = useState(initialData?.solution || "");
  const [savings, setSavings] = useState(initialData?.savings || "");
  const [outcome, setOutcome] = useState(initialData?.outcome || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [capacity, setCapacity] = useState(initialData?.capacity?.toString() || "");
  const [category, setCategory] = useState(initialData?.category || "Residential");
  const [images, setImages] = useState<string[]>(initialData?.images || []);
  
  // Technical Specifications
  const [brand, setBrand] = useState(initialData?.brand || "");
  const [modelNumber, setModelNumber] = useState(initialData?.modelNumber || "");
  const [material, setMaterial] = useState(initialData?.material || "");
  const [type, setType] = useState(initialData?.type || "");
  const [numCells, setNumCells] = useState(initialData?.numCells || "");
  const [solarPower, setSolarPower] = useState(initialData?.solarPower || "");
  const [outputVoltage, setOutputVoltage] = useState(initialData?.outputVoltage || "");
  const [netQuantity, setNetQuantity] = useState(initialData?.netQuantity || "");
  const [frameMaterial, setFrameMaterial] = useState(initialData?.frameMaterial || "");
  const [voltageRating, setVoltageRating] = useState(initialData?.voltageRating || "");
  
  // Dimensions
  const [length, setLength] = useState(initialData?.length || "");
  const [width, setWidth] = useState(initialData?.width || "");
  const [weight, setWeight] = useState(initialData?.weight || "");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !location || !capacity || images.length === 0) {
      toast.error("Please fill in all required fields and upload at least one image");
      return;
    }

    setLoading(true);
    try {
      const data = {
        title,
        description,
        problem,
        solution,
        savings,
        outcome,
        location,
        capacity: parseInt(capacity),
        category,
        images,
        brand,
        modelNumber,
        material,
        type,
        numCells,
        solarPower,
        outputVoltage,
        netQuantity,
        frameMaterial,
        voltageRating,
        length,
        width,
        weight,
      };

      let result;
      if (initialData) {
        result = await updateProject(initialData.id, data);
      } else {
        result = await createProject(data);
      }

      if (result.success) {
        toast.success(initialData ? "Project updated" : "Project created");
        router.push("/admin/projects");
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (url: string) => {
    setImages(images.filter((img) => img !== url));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 max-w-5xl mx-auto pb-20">
      <div className="flex items-center justify-between sticky top-0 z-20 bg-background/80 backdrop-blur-md py-4 border-b mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {initialData ? "Edit Project" : "Add New Project"}
          </h1>
          <p className="text-muted-foreground">
            {initialData ? "Modify project details" : "Showcase a new solar installation"}
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/projects")}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading} className="min-w-[120px]">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {initialData ? "Update Project" : "Save Project"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title <span className="text-destructive">*</span></Label>
                <Input
                  id="title"
                  placeholder="e.g. Green Valley Industrial Park"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Overview Description <span className="text-destructive">*</span></Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about the project specifications and impact..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="problem">The Problem (Optional)</Label>
                  <Textarea
                    id="problem"
                    placeholder="What challenge did the client face?"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="solution">Our Solution (Optional)</Label>
                  <Textarea
                    id="solution"
                    placeholder="How did we solve it with solar?"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="savings">Estimated Savings (Optional)</Label>
                  <Input
                    id="savings"
                    placeholder="e.g. 40% reduction in bills"
                    value={savings}
                    onChange={(e) => setSavings(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="outcome">Final Outcome (Optional)</Label>
                  <Input
                    id="outcome"
                    placeholder="e.g. Fully operational since Jan 2024"
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location <span className="text-destructive">*</span></Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity (kW) <span className="text-destructive">*</span></Label>
                  <Input
                    id="capacity"
                    type="number"
                    placeholder="e.g. 50"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <h3 className="text-lg font-semibold border-b pb-2">Technical Specifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Input id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="e.g. ZunSolar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modelNumber">Model Number</Label>
                  <Input id="modelNumber" value={modelNumber} onChange={(e) => setModelNumber(e.target.value)} placeholder="e.g. 200 Watt 12 Volt Mono PERC" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="material">Material</Label>
                  <Input id="material" value={material} onChange={(e) => setMaterial(e.target.value)} placeholder="e.g. Silver Anodized Aluminum Frame" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Input id="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="e.g. Monocrystalline" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numCells">Number of Cells</Label>
                  <Input id="numCells" value={numCells} onChange={(e) => setNumCells(e.target.value)} placeholder="e.g. 36" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="solarPower">Solar Power</Label>
                  <Input id="solarPower" value={solarPower} onChange={(e) => setSolarPower(e.target.value)} placeholder="e.g. 200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="outputVoltage">Output Voltage</Label>
                  <Input id="outputVoltage" value={outputVoltage} onChange={(e) => setOutputVoltage(e.target.value)} placeholder="e.g. 12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="netQuantity">Net Quantity</Label>
                  <Input id="netQuantity" value={netQuantity} onChange={(e) => setNetQuantity(e.target.value)} placeholder="e.g. 1 Solar Panel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frameMaterial">Frame Material</Label>
                  <Input id="frameMaterial" value={frameMaterial} onChange={(e) => setFrameMaterial(e.target.value)} placeholder="e.g. Silver Anodized Aluminium" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="voltageRating">Voltage Rating</Label>
                <Input id="voltageRating" value={voltageRating} onChange={(e) => setVoltageRating(e.target.value)} placeholder="e.g. 12 V" />
              </div>

              <h3 className="text-lg font-semibold border-b pb-2 pt-4">Dimensions & Weight</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="length">Length</Label>
                  <Input id="length" value={length} onChange={(e) => setLength(e.target.value)} placeholder="e.g. 149 cm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="e.g. 66.5 cm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight</Label>
                  <Input id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 11.6 kg" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <Label>Project Images <span className="text-destructive">*</span></Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((url) => (
                  <div key={url} className="relative aspect-video rounded-lg overflow-hidden border group">
                    <Image
                      src={url}
                      alt="Project image"
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(url)}
                      className="absolute top-1 right-1 bg-destructive text-destructive-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {images.length < 5 && (
                  <div className="flex flex-col items-center justify-center aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted/80">
                    <UploadButton
                      endpoint="projectImage"
                      onClientUploadComplete={(res) => {
                        if (res) {
                          setImages([...images, ...res.map(r => r.url)]);
                          toast.success("Images uploaded");
                        }
                      }}
                      onUploadError={(error: Error) => {
                        toast.error(`Upload failed: ${error.message}`);
                      }}
                      appearance={{
                        button: "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full h-full",
                      }}
                      content={{
                        button({ ready }) {
                          if (ready) return <Plus className="h-6 w-6" />;
                          return "Loading...";
                        },
                      }}
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground">Upload up to 5 images. Recommended size: 1200x800px.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label>Category <span className="text-destructive">*</span></Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residential">Residential</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
};
