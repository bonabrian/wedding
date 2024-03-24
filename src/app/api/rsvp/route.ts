import type { NextRequest } from 'next/server'

import { findBySlug } from '@/actions/guests'
import { create } from '@/actions/rsvp'
import { getErrorMessage, response } from '@/lib/api'

export const dynamic = 'force-dynamic'
export const preferredRegion = ['sin1']

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { slug, numberOfGuest, attendance } = body

    const guest = await findBySlug(slug)

    if (!guest) {
      return response({ message: 'Not Found' }, 404)
    }

    await create({
      guestId: guest.id,
      numberOfGuest: parseInt(numberOfGuest),
      attendance,
    })

    return response({}, 201)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
