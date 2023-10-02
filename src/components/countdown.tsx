import cn from '@/lib/cn'
import { ceremonyDate } from '@/lib/config'

import BackgroundPattern from './background-pattern'
import CountdownTimer from './countdown-timer'
import Heading from './heading'

const Countdown = () => {
  return (
    <BackgroundPattern coloredPattern>
      <Heading
        title="Menuju Hari Bahagia"
        caption="Hitung Mundur"
        inverseColor
      />
      <div className={cn('flex flex-col items-center justify-center gap-4')}>
        <CountdownTimer date={ceremonyDate} />
      </div>
    </BackgroundPattern>
  )
}

export default Countdown
