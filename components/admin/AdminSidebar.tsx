"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Quote,
  MessageSquare,
  Star,
  Users,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    color: "text-sky-500",
  },
  {
    label: "Blogs",
    icon: FileText,
    href: "/admin/blogs",
    color: "text-violet-500",
  },
  {
    label: "Projects",
    icon: Briefcase,
    href: "/admin/projects",
    color: "text-pink-700",
  },
  {
    label: "Services",
    icon: LayoutDashboard, // Or choose a better icon
    href: "/admin/services",
    color: "text-indigo-500",
  },
  {
    label: "Quotations",
    icon: Quote,
    href: "/admin/quotations",
    color: "text-orange-700",
  },
  {
    label: "Contacts",
    icon: MessageSquare,
    href: "/admin/contacts",
    color: "text-emerald-500",
  },
  {
    label: "Reviews",
    icon: Star,
    href: "/admin/reviews",
    color: "text-amber-500",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-sm border-primary/20"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-card/30 backdrop-blur-xl border-r border-border transition-all duration-300 ease-in-out fixed inset-y-0 left-0 md:sticky md:top-0 z-40 h-screen overflow-y-auto flex flex-col shrink-0 md:self-start",
          isCollapsed ? "w-[80px]" : "w-[280px]",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          {!isCollapsed && (
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                SolarAdmin
              </span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex hover:bg-primary/10"
          >
            <ChevronLeft
              className={cn(
                "h-5 w-5 transition-transform duration-300",
                isCollapsed && "rotate-180"
              )}
            />
          </Button>
        </div>

        <div className="flex-1 px-4 space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-x-4 p-3 text-sm font-medium rounded-xl transition-all duration-200 group relative",
                pathname === route.href
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {!isCollapsed && route.label}
              </div>
              {pathname === route.href && !isCollapsed && (
                <div className="absolute left-0 w-1 h-6 bg-white rounded-full translate-x-1" />
              )}
            </Link>
          ))}
        </div>

        <div className="p-4 mt-auto border-t border-border/50">
          <Button
            variant="ghost"
            onClick={() => signOut({ callbackUrl: "/" })}
            className={cn(
              "w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl",
              isCollapsed && "px-2"
            )}
          >
            <LogOut className="h-5 w-5 mr-3" />
            {!isCollapsed && "Logout"}
          </Button>
        </div>
      </aside>
    </>
  );
}
