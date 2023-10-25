'use client'

import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { mainAudio } from '@/data/site'
import useGuest from '@/hooks/use-guest'

import Album from './album'
import AudioPlayer from './audio-player'
import Countdown from './countdown'
import DigitalEnvelope from './digital-envelope'
import Footer from './footer'
import FrontCover from './front-cover'
import GroomAndBride from './groom-and-bride'
import Guestbook from './guestbook'
import Hero from './hero'
import RSVP from './rsvp'
import ScrollToTop from './scroll-to-top'
import Venue from './venue'

const Invitation = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showCover, setShowCover] = useState(true)
  const [invitedGuest, setInvitedGuest] = useState(true)

  const searchParams = useSearchParams()
  const slug = searchParams.get('to')

  const { guest, loading } = useGuest(slug ?? '')

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
          loading={loading}
        />
      ) : (
        <>
          <Hero />
          <GroomAndBride />
          <Countdown />
          <Venue />
          <Album />
          <RSVP guest={guest} />
          <Guestbook guest={guest} />
          <DigitalEnvelope />
          <Footer />
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

export default Invitation
