import type { Attendance } from '@prisma/client'

import prisma from '@/lib/prisma'
import type { Guestbook } from '@/types/guestbook'

export const findGuestBySlug = async (slug: string) => {
  return await prisma.guest.findFirst({
    where: { slug },
    select: { id: true, slug: true, name: true },
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

export const addGuestbook = async (
  guestId: number,
  message: string,
  userAgent: string,
) => {
  const trimmedMessage = message.trim()
  await prisma.guestbook.create({
    data: {
      guestId,
      message: trimmedMessage,
      userAgent,
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
        id: guest?.id ?? 0,
        slug: guest?.slug ?? '',
        name: guest?.name ?? '',
      },
    }))
  } catch (err) {
    console.error('Error getting guestbook entries: ', err)
    return []
  }
}
