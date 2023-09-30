import type { Metadata } from 'next'

import Onboarding from '@/components/onboarding'

export const metadata: Metadata = {
  title: 'Undangan Pernikahan Bona & Silvia',
}

const HomePage = () => {
  return <Onboarding />
}

export default HomePage
