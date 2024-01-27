import type { NextRequest } from 'next/server'

import { findGuestBySlug } from '@/lib/actions'
import { getErrorMessage, response } from '@/lib/api'

export const dynamic = 'force-dynamic'

export const GET = async (
  _req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  try {
    const { slug } = params
    const guest = await findGuestBySlug(slug)

    if (!guest) {
      return response({}, 404)
    }

    return response(guest)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
