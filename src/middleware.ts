import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/api/(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId, redirectToSignIn } = auth();

  if (!userId && !isPublicRoute(req)) {
    redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Omit API routes and static files
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
