import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/auth/register', origin))
  }
}
