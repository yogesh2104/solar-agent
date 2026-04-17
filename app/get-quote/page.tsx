import type { Metadata } from "next";
import GetQuoteView from "@/components/landing/GetQuoteView";

export const metadata: Metadata = {
  title: "Get a Commercial Solar Quote | ELIZ ENERGY",
  description:
    "Request a tailored B2B solar proposal with first-pass feasibility, ROI thinking, and deployment-fit guidance from ELIZ ENERGY.",
};

export default function GetQuotePage() {
  return <GetQuoteView />;
}
