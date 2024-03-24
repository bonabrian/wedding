import { Attendance } from '@prisma/client'
import type { NextRequest } from 'next/server'

import { findBySlug } from '@/actions/guests'
import { findByGuestId } from '@/actions/rsvp'
import { response } from '@/lib/api'

export const dynamic = 'force-dynamic'
export const preferredRegion = ['sin1']

export const GET = async (
  _req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  try {
    const { slug } = params
    const guest = await findBySlug(slug)

    if (!guest) {
      return response({ attendance: Attendance.NOTCONFIRMED })
    }

    const rsvp = await findByGuestId(guest.id)

    if (!rsvp) {
      return response({ attendance: Attendance.NOTCONFIRMED })
    }

    return response(rsvp)
  } catch (err) {
    return response({ attendance: Attendance.NOTCONFIRMED })
  }
}
