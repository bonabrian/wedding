import { bride, groom } from '@/data/bride'
import cn from '@/lib/cn'

import BackgroundPattern from './background-pattern'
import BrideProfile from './bride-profile'
import Heading from './heading'

const GroomAndBride = () => {
  return (
    <BackgroundPattern bottomWaves>
      <Heading
        title="Pengantin"
        caption="Pasangan"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, incidunt vitae blanditiis vero nam itaque dignissimos sed voluptate ducimus! Voluptatibus omnis praesentium doloremque alias sequi eum ex, eveniet quidem assumenda!"
      />
      <div className={cn('relative z-10 mb-4', 'md:mb-16', 'lg:mb-24')}>
        <div
          className={cn('grid gap-16', 'md:grid-cols-2 md:gap-24', 'lg:gap-60')}
        >
          <BrideProfile
            name={groom.fullName}
            image={groom.image}
            birthOrder={groom.birthOrder}
            fatherName={groom.fatherName}
            motherName={groom.motherName}
          />
          <BrideProfile
            name={bride.fullName}
            image={bride.image}
            birthOrder={bride.birthOrder}
            fatherName={bride.fatherName}
            motherName={bride.motherName}
            reverse
          />
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default GroomAndBride
