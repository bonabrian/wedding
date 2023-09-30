'use client'

import { motion } from 'framer-motion'
import Snowfall from 'react-snowfall'

import cn from '@/lib/cn'
import { bride, groom, snowfall, weddingDate } from '@/lib/config'

import { Envelope } from './icons'

interface FrontCoverProps {
  guestName?: string | null
  guestPartner?: string | null
  onOpenInvitation: () => void
}

const FrontCover = ({
  guestName,
  guestPartner,
  onOpenInvitation,
}: FrontCoverProps) => {
  const date = new Date(weddingDate)

  const day = date.getDate()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const year = date.getFullYear()

  return (
    <section>
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
            <motion.div
              className={cn('text-center mb-8', 'md:mb-12', 'lg:mb-16')}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}
              transition={{ delay: 0.5, type: 'spring', duration: 2 }}
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
            </motion.div>
            <motion.div
              className={cn('text-center mb-48', 'md:mb-32', 'lg:mb-28')}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ delay: 0.5, type: 'spring', duration: 2 }}
            >
              <h1
                className={cn(
                  'text-red font-semibold text-6xl',
                  'md:text-7xl',
                  'lg:text-9xl',
                )}
              >
                {groom.nickName} & {bride.nickName}
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.5, type: 'spring', duration: 2 }}
            >
              <div
                className={cn(
                  'text-center mb-4 text-xl',
                  'md:text-2xl',
                  'lg:text-3xl lg:mb-6',
                )}
              >
                <p className={cn('text-white')}>Kepada Yth:</p>
                <p className={cn('text-red')}>
                  {guestName ?? ''}
                  {guestPartner ? ` & ${guestPartner}` : ''}
                </p>
              </div>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontCover
