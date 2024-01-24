import { weddingEvents } from '@/data/wedding-events'
import { cn } from '@/lib/utils'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import EventCard from './event-card'

const Venue = () => {
  const ceremony = weddingEvents[0]
  const reception = weddingEvents[1]

  return (
    <BackgroundPattern topWaves bottomWaves>
      <Heading
        title="Pernikahan"
        caption="Waktu & Tempat"
        description="Kita menemukan keberhasilan saat kita bekerja sama, merajut mimpi-mimpi bersama dalam perjalanan cinta yang tak terlupakan."
      />
      <div className={cn('relative z-10 mb-4', 'md:mb-16', 'lg:mb-24')}>
        <div className={cn('grid gap-8', 'md:grid-cols-2')}>
          <EventCard weddingEvent={ceremony} durationInHour={2} />
          <EventCard weddingEvent={reception} durationInHour={7} />
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default Venue
