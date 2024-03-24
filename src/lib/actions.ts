'use server'

import type { Source } from '@prisma/client'

import prisma from '@/lib/prisma'
import type { Guestbook } from '@/types/guestbook'

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
