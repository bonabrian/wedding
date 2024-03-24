import { Source } from '@prisma/client'
import type { NextRequest } from 'next/server'
import { userAgent } from 'next/server'

import { create } from '@/actions/guest-visits'
import { findBySlug } from '@/actions/guests'
import { getErrorMessage, response } from '@/lib/api'

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { guest: slug, source } = body

    const guest = await findBySlug(slug)

    if (!guest) {
      return response({ message: 'Not Found' }, 404)
    }

    const sourceType = source === 'qrcode' ? Source.QRCODE : Source.DIRECT

    const _userAgent = userAgent(req)

    await create(guest.id, sourceType as Source, JSON.stringify(_userAgent))

    return response({}, 201)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
