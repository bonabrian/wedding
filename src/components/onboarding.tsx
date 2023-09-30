'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import FrontCover from './front-cover'

const Onboarding = () => {
  const [showCover, setShowCover] = useState(true)

  const searchParams = useSearchParams()
  const guestName = searchParams.get('guest')
  const guestPartner = searchParams.get('partner')

  return (
    <>
      {showCover ? (
        <FrontCover
          maleName="Bona"
          femaleName="Silvia"
          guestName={guestName}
          guestPartner={guestPartner}
          date={new Date('2024-04-20')}
          onOpenInvitation={() => setShowCover(false)}
        />
      ) : (
        <div>Opened</div>
      )}
    </>
  )
}

export default Onboarding
