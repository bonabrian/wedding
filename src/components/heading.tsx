import cn from '@/lib/cn'

import GorgaBatak from './gorga-batak'

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
        <GorgaBatak
          className={cn(
            'mx-auto w-3/5 opacity-5 fill-[#6D1E1E]',
            'md:w-1/2',
            'lg:w-1/3',
          )}
        />
      </div>
    </div>
  )
}

export default Heading
