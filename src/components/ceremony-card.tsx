import Link from 'next/link'

import cn from '@/lib/cn'
import { dayNames, monthNames } from '@/lib/constants'

import { MapPin } from './icons'

interface Place {
  location: string
  address: string
  map: string
}

interface CeremonyCardProps {
  title: string
  date: string
  place: Place
}

const CeremonyCard = ({ title, date, place }: CeremonyCardProps) => {
  const ceremonyDateTime = new Date(date)

  return (
    <div
      className={cn(
        'border border-accent/60 flex flex-col justify-center items-center font-cormorant-upright px-8 py-12 rounded-lg gap-8 text-foreground',
      )}
    >
      <h1 className={cn('text-accent text-5xl')}>{title}</h1>
      <div
        className={cn(
          'flex flex-col justify-center items-center text-xl gap-1',
        )}
      >
        <h3 className={cn('leading-none')}>
          {dayNames[ceremonyDateTime.getDay()]}
        </h3>
        <div className={cn('flex items-end flex-wrap gap-4')}>
          <div>{monthNames[ceremonyDateTime.getMonth()]}</div>
          <div className={cn('font-bold text-4xl')}>
            {ceremonyDateTime.getDate()}
          </div>
          <div>{ceremonyDateTime.getFullYear()}</div>
        </div>
        <h3>
          {`0${ceremonyDateTime.getHours()}`.slice(-2)}:
          {`0${ceremonyDateTime.getMinutes()}`.slice(-2)}
          <span className={cn('ml-1')}>WIB</span>
        </h3>
      </div>
      <div
        className={cn(
          'flex flex-col items-center justify-center text-center gap-1',
        )}
      >
        <p className={cn('font-bold text-2xl')}>{place.location}</p>
        <p className={cn('text-secondary')}>{place.address}</p>
        <Link
          href={place.map}
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

export default CeremonyCard
