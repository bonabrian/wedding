import prisma from '@/lib/prisma'

export const findGuestBySlug = async (slug: string) => {
  return await prisma.guest.findFirst({
    where: { slug },
    select: { id: true, slug: true, name: true },
  })
}
