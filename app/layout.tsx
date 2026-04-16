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
  title: "SolarCo | Powering a Sustainable Future",
  description:
    "Leading solar energy solutions for residential, industrial, and maintenance needs.",
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
      <body className="flex flex-col font-sans">
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
