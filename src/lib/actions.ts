'use server'

import type { Attendance, RSVP, Source } from '@prisma/client'

import prisma from '@/lib/prisma'
import type { Guest } from '@/types/guest'
import type { Guestbook } from '@/types/guestbook'

export const findGuestBySlug = async (slug: string): Promise<Guest | null> => {
  return await prisma.guest.findFirst({
    where: { slug },
    select: { id: true, slug: true, name: true },
  })
}

export const findRSVPByGuestId = async (
  guestId: string | undefined,
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
  guestId: string | undefined,
  numberOfGuest: number,
  attendance: Attendance,
) => {
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
}

export const addGuestbook = async (
  guestId: string | undefined,
  message: string,
) => {
  const trimmedMessage = message.trim()
  await prisma.guestbook.create({
    data: {
      guestId,
      message: trimmedMessage,
    },
  })
}

export const getGuestbookEntries = async () => {
  try {
    const entries = await prisma.guestbook.findMany({
      orderBy: { createdAt: 'desc' },
      select: { id: true, message: true, createdAt: true, guest: true },
    })

    return entries.map<Guestbook>(({ id, message, createdAt, guest }) => ({
      id,
      message,
      createdAt,
      guest: {
        id: guest?.id ?? '',
        slug: guest?.slug ?? '',
        name: guest?.name ?? '',
      },
    }))
  } catch (err) {
    console.error('Error getting guestbook entries: ', err)
    return []
  }
}

export const addGuestVisit = async (
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
