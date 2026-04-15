import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all") === "true";
    
    if (all) {
      const session = await getServerSession(authOptions);
      const userRole = (session?.user as { role?: string } | undefined)?.role;

      if (!session || userRole !== "admin") {
        return new NextResponse("Unauthorized", { status: 401 });
      }
      
      const reviews = await db.review.findMany({
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json(reviews);
    }

    const reviews = await db.review.findMany({
      where: {
        approved: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("[REVIEWS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, rating, comment } = body;

    if (!name || !rating || !comment) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const review = await db.review.create({
      data: {
        name,
        rating: parseInt(rating),
        comment,
        approved: false, // Must be approved by admin
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error("[REVIEWS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
