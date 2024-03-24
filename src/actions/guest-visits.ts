'use server'

import type { Source } from '@prisma/client'

import prisma from '@/lib/prisma'

export const createGuestVisit = async (
  guestId?: string,
  source?: Source,
  userAgent?: string,
) => {
  try {
    await prisma.guestVisits.create({
      data: {
        guestId,
        source,
        userAgent,
      },
    })
  } catch (err) {
    throw err
  }
}
