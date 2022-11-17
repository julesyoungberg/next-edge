import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request);
  const response = NextResponse.next();
  // response.cookies.set("myCookie", "test");
  return response;
}
