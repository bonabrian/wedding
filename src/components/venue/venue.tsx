import { weddingEvents } from '@/data/wedding-events'
import cn from '@/lib/cn'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import EventCard from './event-card'

const Venue = () => {
  const ceremony = weddingEvents[0]
  const reception = weddingEvents[1]

  return (
    <BackgroundPattern topWaves>
      <Heading
        title="Pernikahan"
        caption="Waktu & Tempat"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas, expedita delectus ducimus impedit, ab porro optio sequi non, dolor incidunt pariatur neque eum saepe sint magni a ut assumenda."
      />
      <div className={cn('relative z-10 mb-4', 'md:mb-16', 'lg:mb-24')}>
        <div className={cn('grid gap-8', 'md:grid-cols-2')}>
          <EventCard weddingEvent={ceremony} />
          <EventCard weddingEvent={reception} />
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default Venue
