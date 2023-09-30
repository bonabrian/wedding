'use client'

import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import AudioPlayer from './audio-player'
import Container from './container'
import FrontCover from './front-cover'
import Hero from './hero'
import ScrollToTop from './scroll-to-top'

const Onboarding = () => {
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
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aperiam ex suscipit assumenda nihil quisquam unde debitis quam,
              mollitia dolore consectetur facere. Atque aliquid pariatur
              incidunt, molestias eveniet similique nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aperiam ex suscipit assumenda nihil quisquam unde debitis quam,
              mollitia dolore consectetur facere. Atque aliquid pariatur
              incidunt, molestias eveniet similique nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aperiam ex suscipit assumenda nihil quisquam unde debitis quam,
              mollitia dolore consectetur facere. Atque aliquid pariatur
              incidunt, molestias eveniet similique nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aperiam ex suscipit assumenda nihil quisquam unde debitis quam,
              mollitia dolore consectetur facere. Atque aliquid pariatur
              incidunt, molestias eveniet similique nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aperiam ex suscipit assumenda nihil quisquam unde debitis quam,
              mollitia dolore consectetur facere. Atque aliquid pariatur
              incidunt, molestias eveniet similique nostrum?
            </p>
          </Container>
          <AudioPlayer
            src="/assets/audio/audio.mp3"
            isPlaying={isPlaying}
            togglePlay={() => setIsPlaying(!isPlaying)}
          />
          <ScrollToTop />
        </>
      )}
    </AnimatePresence>
  )
}

export default Onboarding
