import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { cn } from '@/lib/utils'

interface BrideProfileProps {
  name: string
  type: 'groom' | 'bride'
  fatherName: string
  motherName: string
  image: string
  reverse?: boolean
}

const BrideProfile = ({
  name,
  type,
  fatherName,
  motherName,
  image,
  reverse,
}: BrideProfileProps) => {
  const profileRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(profileRef, { once: false, margin: '-120px' })

  const variants = {
    initial: { x: reverse ? 50 : -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: reverse ? 50 : -50, opacity: 0 },
  }

  const [isLoadingImage, setIsLoadingImage] = useState(true)

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      exit="exit"
      variants={variants}
      transition={{
        duration: 1.2,
        type: 'spring',
        delay: 0.3,
      }}
      ref={profileRef}
      className={cn(
        'flex items-stretch justify-stretch gap-3',
        reverse ? 'flex-row-reverse' : 'flex-row',
        'md:flex-col md:gap-12',
      )}
    >
      <div
        className={cn(
          'flex relative aspect-[2/3] rounded-full basis-1/2',
          'lg:basis-full',
          isLoadingImage ? 'animate-pulse' : '',
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={cn(
            'rounded-full object-cover object-center',
            isLoadingImage && 'scale-[1.01] blur-xl grayscale',
          )}
          onLoad={() => setIsLoadingImage(false)}
        />
      </div>
      <div
        className={cn(
          'flex flex-col items-center justify-end text-center basis-1/2',
          'md:justify-center md:basis-0',
        )}
      >
        <div className={cn('border-b-2 border-b-foreground pb-3 mb-3')}>
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
              'md:text-2xl',
            )}
          >
            {`${type === 'groom' ? 'Putra' : 'Putri'}`} dari
          </h3>
          <p
            className={cn(
              'text-secondary font-cormorant-upright flex flex-col leading-none',
              'md:text-xl',
            )}
          >
            <span>{fatherName}</span>
            <span>&</span>
            <span>{motherName}</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default BrideProfile
