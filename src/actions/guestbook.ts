'use server'

import prisma from '@/lib/prisma'
import type { Guestbook } from '@/types/guestbook'

export const mapGuestbookEntries = async () => {
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
    throw err
  }
}

export const createGuestbook = async (
  guestId: string | undefined,
  message: string,
) => {
  try {
    const trimmedMessage = message.trim()
    await prisma.guestbook.create({
      data: {
        guestId,
        message: trimmedMessage,
      },
    })
  } catch (err) {
    throw err
  }
}
