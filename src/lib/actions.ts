'use server'

import type { Attendance, RSVP } from '@prisma/client'

import prisma from '@/lib/prisma'
import type { Guest } from '@/types/guest'

export const findGuestBySlug = async (slug: string): Promise<Guest | null> => {
  return await prisma.guest.findFirst({
    where: { slug },
    select: { id: true, slug: true, name: true },
  })
}

export const findRSVPByGuestId = async (
  guestId: number,
): Promise<RSVP | null> => {
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
}

export const addRSVP = async (
  guestId: number,
  numberOfGuest: number,
  attendance: Attendance,
) => {
  await prisma.rSVP.upsert({
    where: { guestId },
    update: {
      numberOfGuest,
      attendance,
      updatedAt: new Date(),
    },
    create: {
      guestId,
      numberOfGuest,
      attendance,
    },
  })
}
