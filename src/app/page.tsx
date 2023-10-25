import type { Metadata } from 'next'

import Invitation from '@/components/invitation'

export const metadata: Metadata = {
  title: 'Undangan Pernikahan Bona & Silvia',
}

const HomePage = () => {
  return <Invitation />
}

export default HomePage
