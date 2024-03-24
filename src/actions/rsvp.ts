import type { Attendance, RSVP } from '@prisma/client'

import prisma from '@/lib/prisma'

export const findByGuestId = async (guestId?: string): Promise<RSVP | null> => {
  try {
    return await prisma.rSVP.findFirst({
      where: { guestId },
      select: {
        id: true,
        guestId: true,
        attendance: true,
        numberOfGuest: true,
        createdAt: true,
        updatedAt: true,
        guest: true,
      },
    })
  } catch (err) {
    throw err
  }
}

export const create = async ({
  guestId,
  numberOfGuest,
  attendance,
}: {
  guestId?: string
  numberOfGuest: number
  attendance: Attendance
}) => {
  try {
    await prisma.rSVP.upsert({
      where: { guestId },
      update: {
        numberOfGuest,
        attendance,
      },
      create: {
        guestId,
        numberOfGuest,
        attendance,
      },
    })
  } catch (err) {
    throw err
  }
}
