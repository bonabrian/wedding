'use client'

import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { mainAudio } from '@/lib/config'

import AudioPlayer from './audio-player'
import FrontCover from './front-cover'
import GroomAndBride from './groom-and-bride'
import Hero from './hero'
import ScrollToTop from './scroll-to-top'

const Content = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showCover, setShowCover] = useState(true)

  const searchParams = useSearchParams()
  const guestName = searchParams.get('guest')
  const guestPartner = searchParams.get('partner')

  const onOpenInvitation = () => {
    setShowCover(false)
    setIsPlaying(true)
  }

  return (
    <AnimatePresence>
      {showCover ? (
        <FrontCover
          guestName={guestName}
          guestPartner={guestPartner}
          onOpenInvitation={onOpenInvitation}
        />
      ) : (
        <>
          <Hero />
          <GroomAndBride />
          <AudioPlayer
            src={mainAudio}
            isPlaying={isPlaying}
            togglePlay={() => setIsPlaying(!isPlaying)}
          />
          <ScrollToTop />
        </>
      )}
    </AnimatePresence>
  )
}

export default Content
