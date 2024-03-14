import 'moment/locale/id'

import { motion, useInView } from 'framer-motion'
import moment from 'moment'
import Link from 'next/link'
import { useRef } from 'react'

import type { WeddingEvent } from '@/data/wedding-events'
import { cn } from '@/lib/utils'

import { MapPin } from '../icons'

interface EventCardProps {
  weddingEvent: WeddingEvent
  durationInHour: number | null
}

const eventTitles: Record<string, string> = {
  ceremony: 'Pemberkatan',
  reception: 'Resepsi',
}

const EventCard = ({ weddingEvent, durationInHour }: EventCardProps) => {
  const { date, name, place } = weddingEvent
  const { location, address, map } = place
  const eventDateTime = moment(date)

  const eventCardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(eventCardRef, { once: false, margin: '-120px' })
  const reverse = name === 'reception'

  const variants = {
    initial: { x: reverse ? 50 : -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: reverse ? 50 : -50, opacity: 0 },
  }

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      exit="exit"
      variants={variants}
      transition={{
        duration: 1.2,
        type: 'spring',
        delay: 0.3,
      }}
      ref={eventCardRef}
      className={cn(
        'border border-accent/60 flex flex-col justify-center items-center font-cormorant-upright px-8 py-12 rounded-lg gap-8 text-foreground',
      )}
    >
      <h1 className={cn('text-accent text-5xl')}>{eventTitles[name]}</h1>
      <div
        className={cn(
          'flex flex-col justify-center items-center text-xl gap-1',
        )}
      >
        <h3 className={cn('leading-none')}>{eventDateTime.format('dddd')}</h3>
        <div
          className={cn(
            'flex items-end flex-wrap gap-2 text-2xl font-semibold',
          )}
        >
          <div>{eventDateTime.date()}</div>
          <div>{eventDateTime.format('MMMM')}</div>
          <div>{eventDateTime.year()}</div>
        </div>
        <h3>
          {eventDateTime.format('HH')}:{eventDateTime.format('mm')} WIB -{' '}
          {durationInHour ? (
            <>
              {eventDateTime.add(durationInHour, 'hour').format('HH')}:
              {eventDateTime.add(durationInHour, 'hour').format('mm')}
              <span className={cn('ml-1')}>WIB</span>
            </>
          ) : (
            <span>Selesai</span>
          )}
        </h3>
      </div>
      <div
        className={cn(
          'flex flex-col items-center justify-center text-center gap-1',
        )}
      >
        <p className={cn('font-bold text-2xl')}>{location}</p>
        <p className={cn('text-secondary')}>{address}</p>
        <Link
          href={map}
          target="_blank"
          rel="noreferrer"
          className={cn('mt-4')}
        >
          <button
            className={cn(
              'inline-flex items-center gap-2 border-2 px-2 py-1 text-sm border-accent rounded-md text-accent',
            )}
          >
            <MapPin className={cn('w-4 h-4')} />
            Lihat Peta
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

export default EventCard
