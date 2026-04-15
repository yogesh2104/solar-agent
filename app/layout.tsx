import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SessionProvider from "@/components/providers/SessionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
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
      className={`${fontSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <SessionProvider>
          <SmoothScroll>
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </SmoothScroll>
        </SessionProvider>
      </body>
    </html>
  );
}
