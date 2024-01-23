import { type NextRequest, NextResponse } from 'next/server'

export const config = {
  matchers: [
    /**
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside public)
     * 4. all root files inside public (e.g. /favicon)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
}

const middleware = async (req: NextRequest) => {
  const url = req.nextUrl

  const pathname = url.pathname

  if (pathname === '/') {
    return NextResponse.rewrite(new URL(`/guest`, req.url))
  }

  return NextResponse.next()
}

export default middleware
