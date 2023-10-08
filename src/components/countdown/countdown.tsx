import Link from 'next/link'

import { calendarUrl } from '@/data/site'
import cn from '@/lib/cn'
import { ceremonyDate } from '@/lib/config'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import { Calendar } from '../icons'
import CountdownTimer from './countdown-timer'

const Countdown = () => {
  return (
    <BackgroundPattern coloredPattern>
      <Heading
        title="Menuju Hari Bahagia"
        caption="Hitung Mundur"
        inverseColor
      />
      <div
        className={cn('flex flex-col items-center justify-center gap-6 z-10')}
      >
        <CountdownTimer date={ceremonyDate} />

        <Link
          href={calendarUrl}
          target="_blank"
          rel="noreferrer"
          className={cn('mt-4')}
        >
          <button
            className={cn(
              'inline-flex items-center gap-2 border-2 px-2 py-1 text-sm border-white rounded-md text-white',
            )}
          >
            <Calendar className={cn('w-4 h-4')} />
            Tambahkan ke Kalender
          </button>
        </Link>
      </div>
    </BackgroundPattern>
  )
}

export default Countdown
