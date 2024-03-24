import prisma from '@/lib/prisma'

import Templates from './templates'

const TemplatesPage = async () => {
  const guests = await prisma.guest.findMany()

  return <Templates guests={guests} />
}

export default TemplatesPage
