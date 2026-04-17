import { Metadata } from "next";
import siteConfig from "@/lib/siteConfig";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: siteConfig.seo.about.title,
  description: siteConfig.seo.about.description,
};

export default function AboutPage() {
  return <AboutClient />;
}
