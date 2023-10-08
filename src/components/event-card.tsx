import Link from 'next/link'

import type { WeddingEvent } from '@/data/wedding-events'
import cn from '@/lib/cn'
import { dayNames, monthNames } from '@/lib/constants'

import { MapPin } from './icons'

interface EventCardProps {
  weddingEvent: WeddingEvent
}

const eventTitles: Record<string, string> = {
  ceremony: 'Pemberkatan',
  reception: 'Resepsi',
}

const EventCard = ({ weddingEvent }: EventCardProps) => {
  const { date, name, place } = weddingEvent
  const { location, address, map } = place
  const eventDateTime = new Date(date)

  return (
    <div
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
        <h3 className={cn('leading-none')}>
          {dayNames[eventDateTime.getDay()]}
        </h3>
        <div className={cn('flex items-end flex-wrap gap-4')}>
          <div>{monthNames[eventDateTime.getMonth()]}</div>
          <div className={cn('font-bold text-4xl')}>
            {eventDateTime.getDate()}
          </div>
          <div>{eventDateTime.getFullYear()}</div>
        </div>
        <h3>
          {`0${eventDateTime.getHours()}`.slice(-2)}:
          {`0${eventDateTime.getMinutes()}`.slice(-2)}
          <span className={cn('ml-1')}>WIB</span>
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
    </div>
  )
}

export default EventCard
