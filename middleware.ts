import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Request URL", request.url);

  if (new URL(request.url).pathname === "/") {
    return NextResponse.next();
  }

  const newUrl = new URL("/", request.url);
  console.log("Rewritten URL", newUrl);
  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico).*)",
};
