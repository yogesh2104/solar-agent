import { db } from "@/lib/db";
import { ProjectForm } from "@/components/project/project-form";
import { notFound } from "next/navigation";

interface EditProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const { id } = await params;
  const project = await db.project.findUnique({
    where: {
      id: id,
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <ProjectForm initialData={project} />
    </div>
  );
}
