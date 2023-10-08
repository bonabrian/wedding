'use client'

import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import useGuest from '@/hooks/use-guest'
import { mainAudio } from '@/lib/config'

import AudioPlayer from './audio-player'
import Countdown from './countdown'
import FrontCover from './front-cover'
import Gallery from './gallery'
import GroomAndBride from './groom-and-bride'
import Guestbook from './guestbook'
import Hero from './hero'
import RSVP from './rsvp'
import ScrollToTop from './scroll-to-top'
import Venue from './venue'
// import WeddingGift from './wedding-gift'

const Content = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showCover, setShowCover] = useState(true)
  const [invitedGuest, setInvitedGuest] = useState(true)

  const searchParams = useSearchParams()
  const slug = searchParams.get('to')

  const { guest } = useGuest(slug ?? '')

  const onOpenInvitation = () => {
    setShowCover(false)
    setIsPlaying(true)
  }

  useEffect(() => {
    if ((guest && !('id' in guest)) || !slug) {
      setInvitedGuest(false)
    }
  }, [guest, slug])

  return (
    <AnimatePresence>
      {showCover ? (
        <FrontCover
          guest={guest?.name}
          onOpenInvitation={onOpenInvitation}
          invitedGuest={invitedGuest}
        />
      ) : (
        <>
          <Hero />
          <GroomAndBride />
          <Countdown />
          <Venue />
          <Gallery />
          <RSVP guest={guest} />
          <Guestbook guest={guest} />
          {/* <WeddingGift /> */}
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
