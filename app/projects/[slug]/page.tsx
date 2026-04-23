import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Zap,
  TrendingDown,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import ProjectGallery from "@/components/project/ProjectGallery";
import { Badge } from "@/components/ui/badge";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await db.project.findUnique({
    where: { slug: slug },
  });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Solar Project Case Study`,
    description: project.description.substring(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await db.project.findUnique({
    where: { slug: slug },
  });

  console.log(project);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 pb-24 bg-[#f7fbff]">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs & Navigation */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium truncate">
            {project.title}
          </span>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Images & Summary */}
          <div className="space-y-12 lg:sticky lg:top-32">
            <ProjectGallery images={project.images} />

            <div className="bg-card border border-border/50 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Installation Overview</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Category
                  </p>
                  <p className="text-lg font-medium">{project.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Location
                  </p>
                  <div className="flex items-center text-lg font-medium">
                    <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                    {project.location}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    System Size
                  </p>
                  <div className="flex items-center text-lg font-medium">
                    <Zap className="w-4 h-4 mr-1.5 text-primary" />
                    {project.capacity} kW
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Completed
                  </p>
                  <p className="text-lg font-medium">
                    {new Date(project.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Case Study Content */}
          <div className="space-y-12">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Case Study
              </Badge>
              <h1 className="text-4xl text-black md:text-5xl font-bold tracking-tight mb-8">
                {project.title}
              </h1>
              <p className="text-xl text-black leading-relaxed italic border-l-4 border-primary/50 pl-6 mb-12">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Section */}
            {(project.problem || project.solution) && (
              <div className="grid gap-8">
                {project.problem && (
                  <div className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-destructive/20 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-destructive">
                      <AlertCircle className="w-6 h-6" />
                      <h3 className="text-xl font-bold">The Challenge</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {project.problem}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <Zap className="w-6 h-6" />
                      <h3 className="text-xl font-bold">Our Approach</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Impact Section */}
            {(project.savings || project.outcome) && (
              <div className="text-black rounded-3xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold mb-8">Key Outcomes</h3>
                <div className="space-y-8">
                  {project.savings && (
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                        <TrendingDown className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Estimated Savings</h4>
                        <p className="text-muted-foreground">{project.savings}</p>
                      </div>
                    </div>
                  )}

                  {project.outcome && (
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Final Result</h4>
                        <p className="text-black">{project.outcome}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Technical Specifications Section */}
            {(project.brand || project.modelNumber || project.length || project.weight) && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold tracking-tight">Technical Specifications</h3>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  {/* General Specs */}
                  <div className="bg-card rounded-3xl p-8 border border-border/50">
                    <h4 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      General
                    </h4>
                    <div className="divide-y divide-border/50">
                      {[
                        { label: "Brand", value: project.brand },
                        { label: "Model Number", value: project.modelNumber },
                        { label: "Material", value: project.material },
                        { label: "Type", value: project.type },
                        { label: "Number of Cells", value: project.numCells },
                        { label: "Solar Power", value: project.solarPower },
                        { label: "Output Voltage", value: project.outputVoltage },
                        { label: "Net Quantity", value: project.netQuantity },
                        { label: "Frame Material", value: project.frameMaterial },
                        { label: "Voltage Rating", value: project.voltageRating },
                      ].map((spec, i) => spec.value && (
                        <div key={i} className="py-4 flex justify-between gap-4">
                          <span className="text-muted-foreground font-medium">{spec.label}</span>
                          <span className="text-foreground font-bold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions & Weight */}
                  {(project.length || project.width || project.weight) && (
                    <div className="bg-card rounded-3xl p-8 border border-border/50">
                      <h4 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Dimensions & Weight
                      </h4>
                      <div className="divide-y divide-border/50">
                        {[
                          { label: "Length", value: project.length },
                          { label: "Width", value: project.width },
                          { label: "Weight", value: project.weight },
                        ].map((spec, i) => spec.value && (
                          <div key={i} className="py-4 flex justify-between gap-4">
                            <span className="text-muted-foreground font-medium">{spec.label}</span>
                            <span className="text-foreground font-bold text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-foreground text-background rounded-3xl p-10 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Start Your Switch to Solar</h3>
              <p className="text-background/70 mb-8 max-w-md">
                Inspired by this project? Reach out for the right solar equipment,
                partner brand, and support path for your site.
              </p>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground h-14 px-10 flex items-center justify-center rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
