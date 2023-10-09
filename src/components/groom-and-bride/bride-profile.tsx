import Image from 'next/image'

import cn from '@/lib/cn'

interface BrideProfileProps {
  name: string
  birthOrder: string
  fatherName: string
  motherName: string
  image: string
  reverse?: boolean
}

const BrideProfile = ({
  name,
  birthOrder,
  fatherName,
  motherName,
  image,
  reverse,
}: BrideProfileProps) => {
  return (
    <div
      className={cn(
        'flex items-stretch justify-stretch gap-3',
        reverse ? 'flex-row-reverse' : 'flex-row',
        'md:flex-col md:gap-12',
      )}
    >
      <div
        className={cn(
          'flex relative aspect-[2/3] rounded-full shadow-[0px_0px_0px_2px_#6D1E1E] basis-1/2',
          'lg:basis-full',
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={cn('rounded-full object-cover')}
        />
      </div>
      <div
        className={cn(
          'flex flex-col items-center justify-end text-center basis-1/2',
          'md:justify-center md:basis-0',
        )}
      >
        <div
          className={cn('pb-4 mb-4 border-b-2 border-b-foreground', 'md:pb-8')}
        >
          <h1
            className={cn(
              'text-accent font-cormorant-upright font-bold text-3xl tracking-tighter',
              'md:text-4xl',
              'lg:text-5xl',
            )}
          >
            {name}
          </h1>
        </div>
        <div className={cn('mb-4')}>
          <h3
            className={cn(
              'text-foreground text-xl font-semibold font-cormorant-upright mb-4',
              'md:text-2xl md:mb-8',
            )}
          >
            {birthOrder} dari
          </h3>
          <p
            className={cn(
              'text-secondary font-cormorant-upright leading-none text-base',
              'md:text-xl md:leading-tight',
            )}
          >
            {fatherName}
            <br />
            &
            <br />
            {motherName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BrideProfile
