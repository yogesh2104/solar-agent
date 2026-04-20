import { db } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Briefcase,
  Quote,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default async function AdminDashboard() {
  const [
    blogsCount,
    projectsCount,
    quotationsCount,
    contactsCount,
    usersCount,
    reviewsCount,
    testimonialsCount,
  ] = await Promise.all([
    db.blog.count(),
    db.project.count(),
    db.quotation.count(),
    db.contactMessage.count(),
    db.user.count(),
    db.review.count(),
    db.testimonial.count(),
  ]);

  const stats = [
    {
      title: "Total Blogs",
      value: blogsCount,
      icon: FileText,
      description: "Published and draft articles",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      title: "Total Projects",
      value: projectsCount,
      icon: Briefcase,
      description: "Completed solar installations",
      color: "text-pink-600",
      bgColor: "bg-pink-600/10",
    },
    {
      title: "Quotations",
      value: quotationsCount,
      icon: Quote,
      description: "Active solar quote requests",
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
    },
    {
      title: "Contact Inquiries",
      value: contactsCount,
      icon: MessageSquare,
      description: "General questions and support",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600/10",
    },
    {
      title: "Customer Reviews",
      value: reviewsCount,
      icon: Star,
      description: "Client feedback and ratings",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Testimonials",
      value: testimonialsCount,
      icon: Quote,
      description: "Featured success stories",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      title: "Total Users",
      value: usersCount,
      icon: Users,
      description: "Registered users",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Welcome back! Here&apos;s what&apos;s happening with your solar
          project.
        </p>
      </div>

      <Separator className="opacity-50" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="border-none   bg-card/50 backdrop-blur-sm -hover:translate-y-1 transition-all duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
