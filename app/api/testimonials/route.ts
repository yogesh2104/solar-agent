import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const testimonials = await db.testimonial.findMany();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("[TESTIMONIALS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as { role?: string } | undefined)?.role;

    if (!session || userRole !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name, company, feedback, image } = body;

    if (!name || !company || !feedback || !image) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const testimonial = await db.testimonial.create({
      data: {
        name,
        company,
        feedback,
        image,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error("[TESTIMONIALS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
