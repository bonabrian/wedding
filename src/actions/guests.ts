'use server'

import prisma from '@/lib/prisma'
import type { Guest } from '@/types/guest'

export const findAllGuests = async (): Promise<Array<Guest>> => {
  try {
    return await prisma.guest.findMany()
  } catch (err) {
    throw err
  }
}

export const findGuestBySlug = async (slug: string): Promise<Guest | null> => {
  try {
    return await prisma.guest.findFirst({
      where: { slug },
      select: { id: true, slug: true, name: true },
    })
  } catch (err) {
    throw err
  }
}
