import cn from '@/lib/cn'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import Gallery from './gallery'

const Album = () => {
  return (
    <BackgroundPattern topWaves className={cn('pb-0')}>
      <Heading
        title="Bahagia Kami"
        caption="Momen"
        description="Mencintai adalah seni merangkul perbedaan, memeluk keunikan satu sama lain dengan tulus dan tanpa syarat."
        hashtag={['BONApunberhaSIL', 'inVInityBONd']}
      />
      <div className={cn('flex flex-col z-10 mb-20')}>
        <div className={cn('w-full overflow-auto')}>
          <Gallery />
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default Album
