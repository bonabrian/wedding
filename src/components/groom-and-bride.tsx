import cn from '@/lib/cn'
import { bride, groom } from '@/lib/config'

import BackgroundPattern from './background-pattern'
import BrideProfile from './bride-profile'
import Heading from './heading'

const GroomAndBride = () => {
  return (
    <BackgroundPattern>
      <Heading
        title="Pengantin"
        caption="Pasangan"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, incidunt vitae blanditiis vero nam itaque dignissimos sed voluptate ducimus! Voluptatibus omnis praesentium doloremque alias sequi eum ex, eveniet quidem assumenda!"
      />
      <div className={cn('relative z-10')}>
        <div
          className={cn('grid gap-16', 'md:grid-cols-2 md:gap-24', 'lg:gap-60')}
        >
          <BrideProfile
            name={groom.fullName}
            image={groom.image}
            birthOrder={groom.birthOrder}
          />
          <BrideProfile
            name={bride.fullName}
            image={bride.image}
            birthOrder={bride.birthOrder}
            reverse
          />
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default GroomAndBride
