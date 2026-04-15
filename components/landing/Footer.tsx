"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Blog", href: "/blogs" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Maintenance", href: "/#maintenance" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  contact: [
    { icon: Phone, text: "+1 (555) 000-0000" },
    { icon: Mail, text: "contact@solarco.com" },
    { icon: MapPin, text: "123 Solar Way, Sunshine City" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/admin");

  if (hideFooter) return null;

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg">
                <Zap className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Solar<span className="text-primary">Co</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering homes and businesses with sustainable, high-efficiency
              solar solutions. Join the green revolution and start saving today.
            </p>
            <div className="flex items-center gap-4">
              {/* {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </Link>
              ))} */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground" suppressHydrationWarning>
            © {new Date().getFullYear()} SolarCo. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
