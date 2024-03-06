import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { videoThumb, youtubeVideoID } from '@/data/site'
import { cn } from '@/lib/utils'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import Gallery from './gallery'
import VideoPlayer from './video-player'

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 50,
    opacity: 0,
  },
}

interface AlbumProps {
  onVideoStateChange: (state: 'playing' | 'paused' | 'end') => void
}

const Album = ({ onVideoStateChange }: AlbumProps) => {
  const albumRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(albumRef, { once: false, margin: '-120px' })

  return (
    <BackgroundPattern topWaves className={cn('pb-0')}>
      <Heading
        title="Bahagia Kami"
        caption="Momen"
        description="Mencintai adalah seni merangkul perbedaan, memeluk keunikan satu sama lain dengan tulus dan tanpa syarat."
        hashtag={['BONApunberhaSIL', 'inVInityBONd']}
      />
      <motion.div
        ref={albumRef}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
        className={cn('flex flex-col z-10 mb-20 gap-4', 'md:gap-8')}
      >
        <VideoPlayer
          title="Bona & Silvia"
          youtubeID={youtubeVideoID}
          thumbnailOverride={videoThumb}
          onVideoStateChange={onVideoStateChange}
        />
        <div className={cn('w-full overflow-auto')}>
          <Gallery />
        </div>
      </motion.div>
    </BackgroundPattern>
  )
}

export default Album
