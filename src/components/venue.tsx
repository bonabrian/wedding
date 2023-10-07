import cn from '@/lib/cn'
import { ceremonyDate, places, receptionDate } from '@/lib/config'

import BackgroundPattern from './background-pattern'
import CeremonyCard from './ceremony-card'
import Heading from './heading'

const Venue = () => {
  return (
    <BackgroundPattern topWaves bottomWaves>
      <Heading
        title="Pernikahan"
        caption="Waktu & Tempat"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas, expedita delectus ducimus impedit, ab porro optio sequi non, dolor incidunt pariatur neque eum saepe sint magni a ut assumenda."
      />
      <div className={cn('relative z-10 mb-4', 'md:mb-16', 'lg:mb-24')}>
        <div className={cn('grid gap-8', 'md:grid-cols-2')}>
          <CeremonyCard
            title="Pemberkatan"
            date={ceremonyDate}
            place={places.ceremony}
          />
          <CeremonyCard
            title="Resepsi"
            date={receptionDate}
            place={places.reception}
          />
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default Venue
