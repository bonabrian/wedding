import cn from '@/lib/cn'

import Container from './container'

interface BackgroundPatternProps {
  children: React.ReactNode
}

const BackgroundPattern = ({ children }: BackgroundPatternProps) => {
  return (
    <div className={cn('relative bg-white py-24')}>
      <div
        className={cn(
          'flex bg-fixed bg-contain bg-center bg-[url("/assets/images/batak-pattern.png")] opacity-[0.07] absolute top-0 left-0 w-full h-full',
        )}
      />
      <Container>{children}</Container>
    </div>
  )
}

export default BackgroundPattern
