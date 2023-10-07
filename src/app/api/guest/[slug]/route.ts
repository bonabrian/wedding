import type { NextRequest } from 'next/server'

import { getErrorMessage, response } from '@/lib/api'
import { findGuestBySlug } from '@/lib/db'

export const GET = async (
  _req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  try {
    const { slug } = params
    const guest = await findGuestBySlug(slug)

    if (!guest) {
      return response({ message: 'Not Found' }, 404)
    }

    return response(guest)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
