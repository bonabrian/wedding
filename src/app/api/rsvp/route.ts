import type { NextRequest } from 'next/server'

import { addRSVP, findGuestBySlug } from '@/lib/actions'
import { getErrorMessage, response } from '@/lib/api'

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { slug, numberOfGuest, attendance } = body

    const guest = await findGuestBySlug(slug)

    if (!guest) {
      return response({ message: 'Not Found' }, 404)
    }

    await addRSVP(guest.id, parseInt(numberOfGuest), attendance)

    return response({}, 201)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
