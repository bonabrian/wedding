import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import WavesImage from '../../public/images/waves.svg'
import Container from './container'

interface BackgroundPatternProps {
  children: React.ReactNode
  coloredPattern?: boolean
  bottomWaves?: boolean
  topWaves?: boolean
  className?: string
}

const Waves = ({ ...rest }: ComponentProps<'svg'>) => {
  return <WavesImage {...rest} />
}

const BackgroundPattern = ({
  children,
  coloredPattern = false,
  bottomWaves,
  topWaves,
  className,
}: BackgroundPatternProps) => {
  return (
    <>
      <div
        className={cn(
          'relative bg-white py-24 overflow-hidden',
          bottomWaves && 'md:pb-28 lg:pb-48',
          topWaves && 'md:pt-40 lg:pt-56',
          coloredPattern && 'bg-accent',
          className,
        )}
      >
        {topWaves && (
          <div className={cn('absolute top-0 left-0 right-0 -mt-px')}>
            <Waves />
          </div>
        )}
        {/* https://pngtree.com/freebackground/batak-ethnic-seamless-pattern-motif-ulos_1170429.html */}
        <div
          className={cn(
            'flex bg-fixed bg-contain bg-center bg-[url("/images/batak-pattern.png")] absolute top-0 left-0 w-full h-full opacity-[0.1]',
          )}
        />
        <Container>{children}</Container>
        {bottomWaves && (
          <div className={cn('absolute bottom-0 left-0 right-0 -mb-px')}>
            <Waves className={cn('rotate-180')} />
          </div>
        )}
      </div>
    </>
  )
}

export default BackgroundPattern
