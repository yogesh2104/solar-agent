import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Plus, Briefcase, MapPin, Zap, Trash2, Edit } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DeleteProjectButton } from "@/components/project/DeleteProjectButton";

export default async function AdminProjectsPage() {
  const projects = await db.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Project Management</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Showcase your successful solar installations and case studies.
          </p>
        </div>
        <Link href="/admin/projects/new">
          <Button className="h-12 px-8 text-base shadow-lg hover:shadow-primary/20 transition-all font-semibold rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            Add New Project
          </Button>
        </Link>
      </div>

      <Separator className="mb-12 opacity-50" />

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-3xl bg-muted/20">
          <div className="bg-muted p-6 rounded-full mb-4">
            <Briefcase className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold">No projects found</h3>
          <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
            Highlight your expertise by adding your first project.
          </p>
          <Link href="/admin/projects/new" className="mt-8">
            <Button variant="outline" className="rounded-full px-8">
              Add First Project
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-xl shadow-primary/5 bg-card/50 backdrop-blur-sm group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.images[0] || "/images/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md">
                  {project.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 p-2 rounded-lg w-fit">
                  <Zap className="h-4 w-4 fill-primary" />
                  {project.capacity} kW Capacity
                </div>
                <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href={`/admin/projects/${project.id}`} className="flex-1">
                  <Button variant="outline" className="w-full rounded-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
                <DeleteProjectButton id={project.id} />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
