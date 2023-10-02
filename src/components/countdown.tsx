import cn from '@/lib/cn'
import { weddingDate } from '@/lib/config'

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
      <div className={cn('flex items-center justify-center')}>
        <CountdownTimer date={weddingDate} />
      </div>
    </BackgroundPattern>
  )
}

export default Countdown
