import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Briefcase,
  Quote,
  MessageSquare,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-none   bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks for administrators</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Link
              href="/admin/blogs/new"
              className="p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 transition-colors text-center group"
            >
              <div className="font-semibold group-hover:text-primary transition-colors">
                Create Blog
              </div>
            </Link>
            <Link
              href="/admin/projects/new"
              className="p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 transition-colors text-center group"
            >
              <div className="font-semibold group-hover:text-primary transition-colors">
                Add Project
              </div>
            </Link>
            <Link
              href="/admin/quotations"
              className="p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 transition-colors text-center group"
            >
              <div className="font-semibold group-hover:text-primary transition-colors">
                View Quotes
              </div>
            </Link>
            <Link
              href="/admin/contacts"
              className="p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 transition-colors text-center group"
            >
              <div className="font-semibold group-hover:text-primary transition-colors">
                Inquiries
              </div>
            </Link>
            <Link
              href="/admin/reviews"
              className="p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 transition-colors text-center group"
            >
              <div className="font-semibold group-hover:text-primary transition-colors">
                Manage Reviews
              </div>
            </Link>
            <Link
              href="/admin/testimonials"
              className="p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 transition-colors text-center group"
            >
              <div className="font-semibold group-hover:text-primary transition-colors">
                Testimonials
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-none   bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-sky-500" />
              System Status
            </CardTitle>
            <CardDescription>Detailed overview of system data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="text-sm">Total Registered Users</span>
              <span className="font-bold">{usersCount}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="text-sm">Database Engine</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-green-500/20 text-green-600">
                MongoDB / Prisma
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="text-sm">Deployment Stage</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-600">
                Development
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
