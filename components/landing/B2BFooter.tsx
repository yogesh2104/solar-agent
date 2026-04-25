"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function B2BFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const { company, footer } = siteConfig;

  return (
    <footer className="border-t border-white/8 bg-brand-ink text-black">
      <div className="container mx-auto px-6 py-6">
        <div className="mb-5 rounded-4xl border border-white/10 bg-white/4 p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black/55">
                Enterprise support
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {footer.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black md:text-base">
                {footer.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full -secondary px-5 text-white hover:text-secondary/90"
              >
                <Link href="/contact">
                  Contact Sales
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-transparent px-5 text-black hover:bg-white/8"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button> */}
            </div>
          </div>
        </div>

        <div className="px-0 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-40 w-40">
                  <Image
                    src="/Logo1.png"
                    alt={siteConfig.company.name}
                    fill
                    sizes="160px"
                    className={cn("object-contain transition-all duration-300")}
                    priority
                  />
                </div>
              </Link>

              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-20 w-40">
                  <Image
                    src="/MSME.jpeg"
                    alt="MSME Government Approval"
                    fill
                    className="object-fit"
                  />
                  {/* <Image
                    src="/MSME1.jpeg"
                    alt="MSME Government Approval"
                    fill
                    className="object-contain dark:hidden"
                  /> */}
                </div>
              </div>

              {/* <p className="mt-5 max-w-sm text-sm leading-7 text-black">
                {company.tagline}
              </p> */}

              {/* <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Residential Solar",
                  "Commercial Solar",
                  "Industrial Solar",
                  "Utility Solar",
                  "EV Charger",
                  "Surya Ghar Yojana",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black">
                Solutions
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {footer.solutionLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-black/60 transition-colors hover:-secondary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black">
                Company
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {footer.quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-black/60 transition-colors hover:-secondary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black">
                Contact
              </div>
              <div className="mt-5 space-y-4">
                <a
                  href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
                  className="flex min-w-0 items-start gap-3 text-sm text-black/60 transition-colors hover:-secondary"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span className="break-words">{company.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex min-w-0 items-start gap-3 text-sm text-black/60 transition-colors hover:-secondary"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  <span className="break-words">{company.contact.email}</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-black/60">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span className="break-words">{company.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-black md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <div>{footer.copyright}</div>
            <div className="font-medium text-black">
              {company.contact.locationBoost}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {footer.legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Keyword Block (Visually Hidden) */}
        <div className="sr-only mt-8 text-[10px] text-black/10 select-none pointer-events-none">
          solar company India, solar panel installation residential commercial
          industrial utility, Surya Ghar Yojana Mumbai, EV charger installation,
          robotic cleaning utility solar,Across India, Pan India solar company,
          Pan India solar installation, solar Navi Mumbai Thane Maharashtra,
          solar panel installation, solar panel installation residential, solar
          panel installation commercial, solar panel installation industrial,
          solar panel installation utility, solar panel installation Navi
          Mumbai, solar panel installation Thane, solar panel installation
          Maharashtra, best solar company India, top solar company India, solar
          panel manufacturer India, solar panel supplier India, solar panel
          distributor India, solar panel installer India, solar panel
          installation cost India, solar panel installation subsidy India, solar
          panel installation scheme India, solar panel installation government
          scheme India, solar panel installation subsidy scheme India, solar
          panel installation subsidy scheme Maharashtra, solar panel
          installation subsidy scheme Mumbai, solar panel installation subsidy
          scheme Thane, solar panel installation subsidy scheme Navi Mumbai,
          solar panel installation subsidy scheme Pune, solar panel installation
          subsidy scheme Nagpur, solar panel installation subsidy scheme Nashik,
          solar panel installation subsidy scheme Aurangabad, solar panel
          installation subsidy scheme Kolhapur, solar panel installation subsidy
          scheme Solapur, solar panel installation subsidy scheme Amravati,
          solar panel installation subsidy scheme Akola, solar panel
          installation subsidy scheme Latur, solar panel installation subsidy
          scheme Parbhani, solar panel installation subsidy scheme Nanded, solar
          panel installation subsidy scheme Jalgaon, solar panel installation
          subsidy scheme Buldhana, solar panel installation subsidy scheme
          Washim, solar panel installation subsidy scheme Yavatmal, solar panel
          installation subsidy scheme Wardha, solar panel installation subsidy
          scheme Bhandara, solar panel installation subsidy scheme Gondia, solar
          panel installation subsidy scheme Chandrapur, solar panel installation
          subsidy scheme Gadchiroli, solar panel installation subsidy scheme
          Raigad, solar panel installation subsidy scheme Ratnagiri, solar panel
          installation subsidy scheme Sindhudurg, solar panel installation
          subsidy scheme Palghar, solar panel installation subsidy scheme Thane,
          solar panel installation subsidy scheme Navi Mumbai, solar panel
          installation subsidy scheme Kalyan, solar panel installation subsidy
          scheme Dombivli, solar panel installation subsidy scheme Ulhasnagar,
          solar panel installation subsidy scheme Ambernath, solar panel
          installation subsidy scheme Badlapur, solar panel installation subsidy
          scheme Karjat, solar panel installation subsidy scheme Khopoli, solar
          panel installation subsidy scheme Pen, solar panel installation
          subsidy scheme Panvel, solar panel installation subsidy scheme Uran,
          solar panel installation subsidy scheme Alibag, solar panel
          installation subsidy scheme Murud, solar panel installation subsidy
          scheme Shrivardhan, solar panel installation subsidy scheme Dapoli,
          solar panel installation subsidy scheme Guhagar, solar panel
          installation subsidy scheme Chiplun, solar panel installation subsidy
          scheme Sangameshwar, solar panel installation subsidy scheme
          Hatkanangle, solar panel installation subsidy scheme Shirol, solar
          panel installation subsidy scheme Karvir, solar panel installation
          subsidy scheme Panhala, solar panel installation subsidy scheme
          Shahuwadi, solar panel installation subsidy scheme Radhanagari, solar
          panel installation subsidy scheme Gaganbawada, solar panel
          installation subsidy scheme Kagal, solar panel installation subsidy
          scheme Gadhinglaj, solar panel installation subsidy scheme Bhudargad,
          solar panel installation subsidy scheme Ajra, solar panel installation
          subsidy scheme Chandgad, solar panel installation subsidy scheme Jat,
          solar panel installation subsidy scheme Indi, solar panel installation
          subsidy scheme Jamkhandi, solar panel installation subsidy scheme
          Mudhol, solar panel installation subsidy scheme Bilgi, solar panel
          installation subsidy scheme Bagalkot, solar panel installation subsidy
          scheme Hungund, solar panel installation subsidy scheme Badami, solar
          panel installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation subsidy scheme Bilgi,
          solar panel installation subsidy scheme Bagalkot, solar panel
          installation subsidy scheme Hungund, solar panel installation subsidy
          scheme Badami, solar panel installation subsidy scheme Jamkhandi,
          solar panel installation subsidy scheme Mudhol, solar panel
          installation subsidy scheme Bilgi, solar panel installation subsidy
          scheme Bagalkot, solar panel installation subsidy scheme Hungund,
          solar panel installation subsidy scheme Badami, solar panel
          installation subsidy scheme Jamkhandi, solar panel installation
          subsidy scheme Mudhol, solar panel installation
        </div>
      </div>
    </footer>
  );
}
