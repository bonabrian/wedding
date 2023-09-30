'use client'

import { m } from 'framer-motion'
import Snowfall from 'react-snowfall'

import cn from '@/lib/cn'
import { snowfall } from '@/lib/config'

import { Envelope } from './icons'

interface FrontCoverProps {
  groom: string
  bride: string
  guestName?: string | null
  guestPartner?: string | null
  date: Date
  onOpenInvitation: () => void
}

const FrontCover = ({
  groom,
  bride,
  guestName,
  guestPartner,
  date,
  onOpenInvitation,
}: FrontCoverProps) => {
  const day = date.getDate()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const year = date.getFullYear()

  return (
    <m.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      exit={{ y: -100, opacity: 0 }}
    >
      <div className={cn('relative')}>
        <div
          className={cn(
            'bg-front-cover h-screen bg-cover bg-no-repeat bg-scroll bg-center inset-0 filter brightness-[0.3]',
          )}
        />
        <Snowfall
          color={snowfall.color}
          style={snowfall.style}
          speed={snowfall.speed}
          wind={snowfall.wind}
          radius={snowfall.radius}
          snowflakeCount={snowfall.snowflakeCount}
        />
        <div className={cn('absolute top-0 left-0 bottom-0 right-0')}>
          <div
            className={cn(
              'flex flex-col justify-center items-center w-full font-cormorant-upright h-screen',
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
              className={cn('text-center mb-48', 'md:mb-32', 'lg:mb-28')}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h1
                className={cn(
                  'text-red font-semibold text-6xl',
                  'md:text-7xl',
                  'lg:text-9xl',
                )}
              >
                {groom} & {bride}
              </h1>
            </m.div>
            <m.div
              className={cn(
                'text-center mb-4 text-xl',
                'md:text-2xl',
                'lg:text-3xl lg:mb-6',
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
      </div>
    </m.section>
  )
}

export default FrontCover
