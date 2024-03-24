import prisma from '@/lib/prisma'
import type { Guest } from '@/types/guest'

export const findAll = async (): Promise<Array<Guest>> => {
  try {
    return await prisma.guest.findMany()
  } catch (err) {
    throw err
  }
}

export const findBySlug = async (slug: string): Promise<Guest | null> => {
  try {
    return await prisma.guest.findFirst({
      where: { slug },
      select: { id: true, slug: true, name: true },
    })
  } catch (err) {
    throw err
  }
}
