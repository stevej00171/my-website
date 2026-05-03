import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 🔐 Protect admin + admin APIs
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api/admin")
  ) {
    const auth = req.headers.get("authorization");

    const USER = "admin";
    const PASS = "mjf8472@";

    if (!auth) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }

    try {
      const base64 = auth.split(" ")[1];
      const decoded = atob(base64);
      const [user, pass] = decoded.split(":");

      if (user !== USER || pass !== PASS) {
        return new NextResponse("Access denied", { status: 403 });
      }
    } catch {
      return new NextResponse("Invalid auth", { status: 400 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};