import type { NextRequest } from 'next/server'

import { getErrorMessage, response } from '@/lib/api'
import { addGuestbook, findGuestBySlug, getGuestbookEntries } from '@/lib/db'

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
    const { guest: slug, message, userAgent } = body

    const guest = await findGuestBySlug(slug)

    if (!guest) {
      return response({ message: 'Not Found' }, 404)
    }

    await addGuestbook(guest.id, message, userAgent)

    return response({}, 201)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
