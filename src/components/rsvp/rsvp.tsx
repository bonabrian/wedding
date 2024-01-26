'use client'

import { Attendance } from '@prisma/client'
import { motion, useInView } from 'framer-motion'
import moment from 'moment'
import { useRef, useState } from 'react'

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

const ATTENDANCE_COPYWRITING = {
  [Attendance.COMING]: {
    text: 'Kehadiran Anda sangat dinanti untuk turut merayakan momen bahagia bersama kami.',
    bgClass: 'bg-[#2e8540]',
  },
  [Attendance.NOTCOMING]: {
    text: 'Meski Anda tidak dapat hadir. Semoga dapat bertemu di kesempatan berikutnya!',
    bgClass: 'bg-[#600d0d]',
  },
  [Attendance.TENTATIVE]: {
    text: 'Meski masih belum yakin. Kami tunggu kepastianmu ya!',
    bgClass: 'bg-[#d69d23]',
  },
  [Attendance.NOTCONFIRMED]: {
    text: undefined,
    bgClass: undefined,
  },
}

const RSVP = ({ guest }: RSVPProps) => {
  const { data: rsvp, loading, addRSVP } = useRSVP(guest?.slug ?? '')
  const [isEditing, setIsEditing] = useState(false)

  const handleOnSubmit = async (body: RSVPFormBody) => {
    try {
      const { numberOfGuest, attendance } = body
      await addRSVP({
        slug: guest?.slug,
        numberOfGuest: numberOfGuest.toString(),
        attendance,
      })
      setIsEditing(false)
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
        caption={`Mohon konfirmasi kehadiran Anda sebelum ${formattedDate}`}
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
        {loading ? (
          <div className="text-center text-white animate-pulse">Loading...</div>
        ) : (
          <>
            {rsvp?.attendance === Attendance.NOTCONFIRMED || isEditing ? (
              <>
                <RSVPForm
                  onSubmit={handleOnSubmit}
                  isEditing={isEditing}
                  rsvp={rsvp}
                />
              </>
            ) : (
              <div
                className={cn(
                  'flex flex-col gap-4 justify-center items-center',
                )}
              >
                <div
                  className={cn(
                    'p-4 text-white rounded-lg',
                    ATTENDANCE_COPYWRITING[
                      rsvp?.attendance ?? Attendance.NOTCONFIRMED
                    ].bgClass,
                  )}
                >
                  <div
                    className={cn(
                      'flex flex-col justify-center items-center gap-1',
                    )}
                  >
                    <p className={cn('font-cal')}>
                      Terimakasih atas konfirmasinya
                    </p>
                    <p>
                      {
                        ATTENDANCE_COPYWRITING[
                          rsvp?.attendance ?? Attendance.NOTCONFIRMED
                        ].text
                      }
                    </p>
                  </div>
                  <button
                    className={cn('font-cal mt-4 underline inline-flex')}
                    onClick={() => setIsEditing(true)}
                  >
                    Ubah
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
    </BackgroundPattern>
  )
}

export default RSVP
