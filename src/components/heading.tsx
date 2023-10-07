import type { ComponentProps } from 'react'

import cn from '@/lib/cn'

import GorgaBatakImage from '../../public/assets/images/gorga-batak.svg'

interface HeadingProps {
  title: string
  caption?: string
  description?: string
  inverseColor?: boolean
}

const GorgaBatak = ({ ...rest }: ComponentProps<'svg'>) => {
  return <GorgaBatakImage {...rest} />
}

const Heading = ({
  title,
  caption,
  description,
  inverseColor,
}: HeadingProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-center text-center mb-20 z-10',
        'md:mb-24',
        'lg:mb-32',
      )}
    >
      {caption && (
        <h3
          className={cn(
            'font-cormorant-upright text-foreground text-3xl mb-8',
            'md:text-4xl',
            inverseColor ? 'text-white' : 'text-foreground',
          )}
        >
          {caption}
        </h3>
      )}
      <h1
        className={cn(
          'font-bold font-rochester text-6xl',
          'md:text-7xl',
          'lg:text-8xl',
          inverseColor ? 'text-white' : 'text-accent',
        )}
      >
        {title}
      </h1>
      {description && (
        <p
          className={cn(
            'mt-8 text-foreground font-cormorant-upright text-lg',
            'md:text-xl',
            inverseColor ? 'text-white' : 'text-foreground',
          )}
        >
          {description}
        </p>
      )}
      {!inverseColor && (
        <div className={cn('absolute top-0 left-0 w-full -z-[5]')}>
          <GorgaBatak
            className={cn(
              'mx-auto w-3/5 opacity-5 fill-[#6D1E1E]',
              'md:w-1/2',
              'lg:w-1/3',
            )}
          />
        </div>
      )}
    </div>
  )
}

export default Heading
