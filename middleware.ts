import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr"] as const;
const defaultLocale = "en";

// Ignore files (e.g., images, scripts) and Next internals
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip next internals, api routes, and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If path already includes a supported locale, continue
  const pathSegments = pathname.split("/");
  const maybeLocale = pathSegments[1];
  if (locales.includes(maybeLocale as any)) {
    return NextResponse.next();
  }

  // Otherwise, redirect to default locale prefix
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Apply to all paths except those with a file extension or Next internals
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
