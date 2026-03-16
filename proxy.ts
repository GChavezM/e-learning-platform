import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isGuestMode = request.nextUrl.searchParams.get('guest') === '1';

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }

  if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
    if (session) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-guest-mode', isGuestMode ? '1' : '0');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
};
