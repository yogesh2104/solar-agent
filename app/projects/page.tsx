import { db } from "@/lib/db";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectFilterWrapper from "@/components/project/ProjectFilterWrapper";
import { motion } from "framer-motion";

export const metadata = {
  title: "Our Solar Projects | Portfolio",
  description: "Explore our recently completed solar installations across residential, commercial, and industrial sectors.",
};

export default async function ProjectsPage() {
  const projects = await db.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Get unique categories and locations for filters
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const locations = Array.from(new Set(projects.map((p) => p.location)));

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Pioneering <span className="text-primary italic">Solar</span> <br />
            Installations
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From industrial warehouses to eco-friendly homes, discover how we're
            transforming energy landscapes one installation at a time.
          </p>
        </div>

        <ProjectFilterWrapper 
          initialProjects={projects} 
          categories={categories} 
          locations={locations} 
        />
      </div>
    </main>
  );
}
