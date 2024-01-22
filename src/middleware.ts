import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]);
const isApiRoute = createRouteMatcher(["/api/(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isApiRoute(req)) return NextResponse.next();

  const { userId, redirectToSignIn, protect } = auth();
  const isPublic = isPublicRoute(req);

  if (!userId && !isPublic) redirectToSignIn();
  if (!isPublic) protect();

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/api(.*)"],
};
