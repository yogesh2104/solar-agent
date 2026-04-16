import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  rating: z.coerce.number().min(1).max(5),
  comment: z.string().min(10, "Comment must be at least 10 characters"),
});

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
    
    const validatedData = reviewSchema.parse(body);

    const review = await db.review.create({
      data: {
        ...validatedData,
        approved: false, // Must be approved by admin
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify({ 
        message: "Validation error", 
        errors: error.issues 
      }), { status: 400 });
    }
    console.error("[REVIEWS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
