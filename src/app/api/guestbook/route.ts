import type { NextRequest } from 'next/server'

import { findBySlug } from '@/actions/guests'
import { addGuestbook, getGuestbookEntries } from '@/lib/actions'
import { getErrorMessage, response } from '@/lib/api'

export const dynamic = 'force-dynamic'
export const preferredRegion = ['sin1']

export const GET = async () => {
  try {
    const entries = await getGuestbookEntries()
    return response(entries)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { guest: slug, message } = body

    const guest = await findBySlug(slug)

    if (!guest) {
      return response({ message: 'Not Found' }, 404)
    }

    await addGuestbook(guest.id, message)

    return response({}, 201)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
