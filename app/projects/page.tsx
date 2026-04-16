import { db } from "@/lib/db";
import ProjectFilterWrapper from "@/components/project/ProjectFilterWrapper";
import StaticPageHeader from "@/components/landing/StaticPageHeader";

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
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Pioneering Solar"
        highlight="Projects"
        breadcrumb="Projects"
        description="From industrial warehouses to eco-friendly homes, discover how we're transforming energy landscapes one installation at a time."
      />

      <div className="container mx-auto max-w-7xl px-6 pt-10">
        <ProjectFilterWrapper
          initialProjects={projects}
          categories={categories}
          locations={locations}
        />
      </div>
    </div>
  );
}
