'use client'

import { m } from 'framer-motion'

import cn from '@/lib/cn'

import { Envelope } from './icons'

interface FrontCoverProps {
  maleName: string
  femaleName: string
  guestName?: string | null
  guestPartner?: string | null
  date: Date
  onOpenInvitation: () => void
}

const FrontCover = ({
  maleName,
  femaleName,
  guestName,
  guestPartner,
  date,
  onOpenInvitation,
}: FrontCoverProps) => {
  const day = date.getDate()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const year = date.getFullYear()

  return (
    <section
      className={cn(
        'flex items-center justify-center fixed bottom-0 left-0 h-screen w-screen',
      )}
    >
      <div className={cn('flex items-center p-0 w-screen h-screen')}>
        <m.div
          className={cn(
            'bg-front-cover bg-center bg-no-repeat bg-cover h-screen w-full',
            'md:p-16',
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeIn' }}
          exit={{ y: -100, opacity: 0 }}
        >
          <div
            className={cn('absolute top-0 left-0 h-full w-full bg-black/70')}
          />
          <div className={cn('flex items-center relative mx-auto h-full')}>
            <div
              className={cn(
                'flex flex-col justify-center items-center w-full font-cormorant-upright',
              )}
            >
              <m.div
                className={cn('text-center mb-8', 'md:mb-12', 'lg:mb-16')}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h2
                  className={cn(
                    'text-red text-3xl',
                    'md:text-4xl',
                    'lg:text-5xl',
                  )}
                >
                  Undangan Pernikahan
                </h2>
                <p
                  className={cn(
                    'text-white font-bold text-xl',
                    'md:text-2xl',
                    'lg:text-3xl',
                  )}
                >
                  {day} . {month} . {year}
                </p>
              </m.div>
              <m.div
                className={cn(
                  'text-center text-6xl mb-8',
                  'md:text-7xl md:mb-12',
                  'lg:text-9xl lg:mb-16',
                )}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h1 className={cn('text-red font-semibold')}>
                  {maleName} & {femaleName}
                </h1>
              </m.div>
              <m.div
                className={cn(
                  'text-center mb-8 text-xl',
                  'md:text-2xl',
                  'lg:text-3xl',
                )}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className={cn('text-white')}>Kepada Yth:</p>
                <p className={cn('text-red')}>
                  {guestName ?? ''}
                  {guestPartner ? ` & ${guestPartner}` : ''}
                </p>
              </m.div>
              <m.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button
                  className={cn(
                    'bg-red text-white py-2 px-3.5 rounded-md flex gap-2 items-center transition-colors duration-150 ease-in-out text-sm',
                    'hover:bg-red/90',
                    'md:px-4 md:text-base',
                  )}
                  onClick={onOpenInvitation}
                >
                  <Envelope />
                  <span>Buka Undangan</span>
                </button>
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default FrontCover
