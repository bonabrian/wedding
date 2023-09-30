import Image from 'next/image'

import cn from '@/lib/cn'

interface BrideProfileProps {
  name: string
  birthOrder: string
  image: string
  reverse?: boolean
}

const BrideProfile = ({
  name,
  birthOrder,
  image,
  reverse,
}: BrideProfileProps) => {
  return (
    <div
      className={cn(
        'flex items-stretch justify-stretch gap-12 flex-grow-0',
        reverse ? 'flex-row-reverse' : 'flex-row',
        'md:flex-col',
      )}
    >
      <div
        className={cn(
          'flex relative aspect-[2/3] rounded-full shadow-[0px_0px_0px_8px_#6D1E1E]',
          'basis-3/4',
          'md:basis-full',
        )}
      >
        <Image src={image} alt={name} fill className={cn('rounded-full')} />
      </div>
      <div
        className={cn(
          'flex flex-col items-center justify-end text-center',
          'md:justify-center',
        )}
      >
        <div className={cn('pb-8 mb-4 border-b-2 border-b-foreground')}>
          <h1
            className={cn(
              'text-accent font-cormorant-upright font-bold text-4xl tracking-tighter',
              'lg:text-5xl',
            )}
          >
            {name}
          </h1>
        </div>
        <div className={cn('mb-4')}>
          <h3
            className={cn(
              'text-foreground text-2xl font-semibold font-cormorant-upright',
            )}
          >
            {birthOrder}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default BrideProfile
