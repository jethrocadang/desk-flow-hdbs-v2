import NextAuth from "next-auth";

import authConfig from "auth.config";
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // destructure NextUrl
  const { nextUrl } = req;

  // Login : true || false
  const isLoggedIn = !!req.auth;

  // Import your routes and define the routes
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // allow API auth route for Auth.js
  if (isApiAuthRoute) {
    return null;
  }

  // Check if in auth routes, redirect to default if login is true
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  // Check if login: true && is in public route, if login redirect to default
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/signin", nextUrl));
  }
  return null;
});

// Optionally, don't invoke Middleware on some paths
// Matcher = invokes middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
