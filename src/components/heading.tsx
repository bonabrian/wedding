import Image from 'next/image'

import cn from '@/lib/cn'
import { batakArt } from '@/lib/config'

interface HeadingProps {
  title: string
  caption: string
  description?: string
}

const Heading = ({ title, caption, description }: HeadingProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-center text-center mb-32 z-10',
      )}
    >
      <h3 className={cn('font-cormorant-upright text-foreground text-4xl')}>
        {caption}
      </h3>
      <h1 className={cn('text-accent font-bold font-rochester text-8xl')}>
        {title}
      </h1>
      {description && (
        <p
          className={cn('mt-8 text-foreground text-xl font-cormorant-upright')}
        >
          {description}
        </p>
      )}
      <div className={cn('absolute top-0 left-0 w-full -z-[5]')}>
        <div className={cn('flex justify-center')}>
          <Image
            src={batakArt}
            alt="Batak Art"
            style={{
              width: '50%',
              height: 'auto',
            }}
            width={500}
            height={500}
            className={cn('opacity-10')}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Heading
