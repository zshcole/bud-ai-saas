import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = createRouteMatcher([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
])

const isProtectedRoute = createRouteMatcher([
    '/analysis',
    '/health',
    '/guidance'
]);

export default clerkMiddleware(async (auth, req) => {

    if (publicRoutes(req)) {
        return NextResponse.next(); 
    }
    
    if (isProtectedRoute(req)) {
        const { userId } = await auth.protect();
        console.log(userId);
        if (!userId) {
            return NextResponse.redirect(new URL('/sign-in', req.url));
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }