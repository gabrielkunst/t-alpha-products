import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const AUTH_ROUTES = ['/auth/login', '/auth/register']
const PRIVATE_ROUTES = ['/app']

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/auth/login', origin))
  }

  if (AUTH_ROUTES.includes(pathname)) {
    if (!accessToken) {
      return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/app', origin))
  }

  if (PRIVATE_ROUTES.includes(pathname)) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/auth/login', origin))
    }

    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
