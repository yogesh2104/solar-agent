import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Auth pages that should be accessible without login
const authPages = ["/sign-in", "/sign-up", "/forgot-password", "/reset-password"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the session token
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  const isAuthPage = authPages.some((page) => pathname.startsWith(page));

  // Redirect authenticated users away from auth pages
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users to sign-in
  if (!isAuthPage && !token) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api/auth (NextAuth routes)
     * - _next/static, _next/image (Next.js internals)
     * - favicon.ico, public files
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
