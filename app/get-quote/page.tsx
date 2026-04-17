import type { Metadata } from "next";
import GetQuoteView from "@/components/landing/GetQuoteView";

export const metadata: Metadata = {
  title: "Get a Commercial Solar Quote | Suntrix",
  description:
    "Request a tailored B2B solar proposal with first-pass feasibility, ROI thinking, and deployment-fit guidance from Suntrix.",
};

export default function GetQuotePage() {
  return <GetQuoteView />;
}
