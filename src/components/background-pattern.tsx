import type { ComponentProps } from 'react'

import cn from '@/lib/cn'

import WavesImage from '../../public/assets/images/waves.svg'
import Container from './container'

interface BackgroundPatternProps {
  children: React.ReactNode
  coloredPattern?: boolean
  bottomWaves?: boolean
  topWaves?: boolean
}

const Waves = ({ ...rest }: ComponentProps<'svg'>) => {
  return <WavesImage {...rest} />
}

const BackgroundPattern = ({
  children,
  coloredPattern = false,
  bottomWaves,
  topWaves,
}: BackgroundPatternProps) => {
  return (
    <>
      <div
        className={cn(
          'relative bg-white py-12',
          bottomWaves && 'md:pb-28 lg:pb-48',
          topWaves && 'md:pt-36 lg:pt-56',
          coloredPattern && 'bg-accent',
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
            'flex bg-fixed bg-contain bg-center bg-[url("/assets/images/batak-pattern.png")] absolute top-0 left-0 w-full h-full opacity-[0.1]',
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
