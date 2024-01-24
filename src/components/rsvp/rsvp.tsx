import { motion, useInView } from 'framer-motion'
import moment from 'moment'
import { useRef } from 'react'

import { weddingEvents } from '@/data/wedding-events'
import useRSVP from '@/hooks/use-rsvp'
import { cn } from '@/lib/utils'
import type { Guest } from '@/types/guest'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import type { RSVPFormBody } from './rsvp-form'
import RSVPForm from './rsvp-form'

interface RSVPProps {
  guest?: Guest
}

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 50,
    opacity: 0,
  },
}

const ATTENDANCE_CONFIRMATION_BY = -7

const RSVP = ({ guest }: RSVPProps) => {
  const { addRSVP } = useRSVP()

  const handleOnSubmit = async (body: RSVPFormBody) => {
    try {
      const { numberOfGuest, attendance } = body
      await addRSVP({ slug: guest?.slug, numberOfGuest, attendance })
    } catch (err) {
      console.error('An error occurred handleOnSubmit: ', err)
    }
  }

  const rsvpRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(rsvpRef, { once: false, margin: '-120px' })

  const receptionDate = moment(weddingEvents[1].date).add(
    ATTENDANCE_CONFIRMATION_BY,
    'days',
  )
  const formattedDate = receptionDate.format('DD MMMM YYYY')

  return (
    <BackgroundPattern coloredPattern>
      <Heading
        title="RSVP"
        caption={`Mohon konfirmasi kehadiran Anda sebelum, ${formattedDate}`}
        description="Semoga bisa berbagi kebahagiaan bersama kami! 🌸✨"
        inverseColor
      />
      <motion.div
        ref={rsvpRef}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
        className={cn('flex flex-col z-10')}
      >
        <RSVPForm onSubmit={handleOnSubmit} />
      </motion.div>
    </BackgroundPattern>
  )
}

export default RSVP
