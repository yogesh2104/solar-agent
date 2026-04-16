import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SessionProvider from "@/components/providers/SessionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import B2BNavbar from "@/components/landing/B2BNavbar";
import B2BFooter from "@/components/landing/B2BFooter";
import "./globals.css";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Suntrix | B2B Solar Panels and Commercial Solar Systems",
  description:
    "Suntrix helps industrial and commercial buyers procure solar panels, rooftop systems, hybrid-ready designs, and long-term O&M support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans text-foreground">
        <SessionProvider>
          <SmoothScroll>
            <B2BNavbar />
            <main className="grow">{children}</main>
            <B2BFooter />
          </SmoothScroll>
        </SessionProvider>
      </body>
    </html>
  );
}
