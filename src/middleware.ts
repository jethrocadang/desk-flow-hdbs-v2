import NextAuth from "next-auth";

import authConfig from "auth.config";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("ROUTE :", req.nextUrl.pathname);
  console.log("LOGIN :", isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
// Matcher = invokes middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
