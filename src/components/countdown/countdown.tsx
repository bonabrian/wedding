import Link from 'next/link'

import { calendarUrl } from '@/data/site'
import { weddingEvents } from '@/data/wedding-events'
import cn from '@/lib/cn'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import { Calendar } from '../icons'
import CountdownTimer from './countdown-timer'

const Countdown = () => {
  const ceremonyDate = weddingEvents[0].date

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
              'text-sm inline-flex items-center gap-2 border-2 px-2 py-1 border-white rounded-md text-white font-cormorant-upright',
              'lg:text-base',
            )}
          >
            <Calendar className={cn('w-4 h-4')} />
            Tambahkan ke Kalender
          </button>
        </Link>

        <div
          className={cn(
            'flex flex-col gap-4 justify-center items-center mt-16 text-white font-cormorant-upright',
          )}
        >
          <p
            className={cn('text-center text-base', 'md:text-lg', 'lg:text-xl')}
          >
            “Hendaklah kamu sehati sepikir, dalam satu kasih, satu jiwa, satu
            tujuan. Demikianlah mereka bukan lagi dua melainkan satu. Karena itu
            apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”
          </p>
          <p
            className={cn(
              'text-center text-lg font-semibold',
              'md:text-xl',
              'lg:text-2xl',
            )}
          >
            - Filipi 2:2b; Matius 19:6 -
          </p>
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default Countdown
