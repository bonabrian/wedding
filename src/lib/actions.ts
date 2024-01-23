'use server'

import prisma from '@/lib/prisma'
import type { Guest } from '@/types/guest'

export const findGuestBySlug = async (slug: string): Promise<Guest | null> => {
  return await prisma.guest.findFirst({
    where: { slug },
    select: { id: true, slug: true, name: true },
  })
}
