'use client'

import { useState } from 'react'

import FrontCover from './front-cover'

const Onboarding = () => {
  const [showCover, setShowCover] = useState(true)

  return (
    <>
      {showCover ? (
        <FrontCover
          maleName="Bona"
          femaleName="Silvia"
          guestName="Grace & Partner"
          date={new Date('2024-04-20')}
        />
      ) : (
        <div>Opened</div>
      )}
    </>
  )
}

export default Onboarding
