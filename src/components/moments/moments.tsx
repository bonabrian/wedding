import cn from '@/lib/cn'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import Gallery from './gallery'

const Moments = () => {
  return (
    <BackgroundPattern bottomWaves>
      <Heading
        title="Bahagia Kami"
        caption="Momen"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod non officia hic. Voluptatum aliquam quaerat facere, eaque ipsa dolore ratione minus excepturi praesentium! Laborum rerum molestiae consequuntur quod ea!"
      />
      <div className={cn('flex flex-col z-10 mb-20')}>
        <div className={cn('w-full overflow-auto')}>
          <Gallery />
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default Moments
