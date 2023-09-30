'use client'

import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import FrontCover from './front-cover'
import Hero from './hero'

const Onboarding = () => {
  const [showCover, setShowCover] = useState(true)

  const searchParams = useSearchParams()
  const guestName = searchParams.get('guest')
  const guestPartner = searchParams.get('partner')

  return (
    <AnimatePresence>
      {showCover ? (
        <FrontCover
          guestName={guestName}
          guestPartner={guestPartner}
          onOpenInvitation={() => setShowCover(false)}
        />
      ) : (
        <>
          <Hero />
        </>
      )}
    </AnimatePresence>
  )
}

export default Onboarding
