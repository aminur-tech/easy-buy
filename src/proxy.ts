import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const privateRoutes = ["/dashboard", "/cart", "/add-products"];

export async function proxy(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthenticated = !!token;
  const pathname = req.nextUrl.pathname;

  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isAuthenticated && isPrivateRoute) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/cart/:path*", "/add-products/:path*"],
};
