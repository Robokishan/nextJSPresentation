// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/stats")) {
    return NextResponse.rewrite(new URL("/static", request.url));
  } else if (request.nextUrl.pathname.startsWith("/newurl")) {
    return NextResponse.redirect(new URL("/static", request.url));
  }
}
