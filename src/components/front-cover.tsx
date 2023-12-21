'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Snowfall from 'react-snowfall'

import { bride, groom } from '@/data/bride'
import { frontCoverImage, snowfall } from '@/data/site'
import cn from '@/lib/cn'

import { Envelope } from './icons'

interface FrontCoverProps {
  guest?: string | null
  onOpenInvitation: () => void
  invitedGuest: boolean
  loading?: boolean
}

const FrontCover = ({
  guest,
  onOpenInvitation,
  invitedGuest,
  loading,
}: FrontCoverProps) => {
  return (
    <section className={cn('relative h-screen flex flex-col overflow-hidden')}>
      <Image
        src={frontCoverImage}
        alt="Front Cover Background"
        quality={100}
        fill
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className={cn(
          'absolute object-cover object-center filter brightness-[0.3] -z-10',
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
      <div
        className={cn(
          'flex flex-col justify-end items-center w-full font-cormorant-upright h-screen',
        )}
      >
        <div className={cn('py-16')}>
          <motion.div
            className={cn('text-center')}
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            transition={{ delay: 0.5, type: 'spring', duration: 2 }}
          >
            <h2
              className={cn('text-white text-2xl leading-none', 'md:text-3xl')}
            >
              Undangan Pernikahan
            </h2>
          </motion.div>
          <motion.div
            className={cn('text-center mb-4', 'md:mb-8')}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
            transition={{ delay: 0.5, type: 'spring', duration: 2 }}
          >
            <h1
              className={cn(
                'text-red font-semibold text-6xl tracking-tighter',
                'md:text-7xl',
                'lg:text-8xl',
              )}
            >
              {groom.nickName} & {bride.nickName}
            </h1>
          </motion.div>
          <motion.div
            className={cn('flex flex-col justify-center items-center')}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ delay: 0.5, type: 'spring', duration: 2 }}
          >
            {loading ? (
              <div className={cn('flex gap-2 mb-4')}>
                <div
                  className={cn('w-3 h-3 rounded-full animate-pulse bg-input')}
                />
                <div
                  className={cn('w-3 h-3 rounded-full animate-pulse bg-input')}
                />
                <div
                  className={cn('w-3 h-3 rounded-full animate-pulse bg-input')}
                />
              </div>
            ) : (
              <>
                {invitedGuest && (
                  <div
                    className={cn('text-center mb-4 text-xl', 'md:text-2xl')}
                  >
                    <p className={cn('text-white')}>Kepada Yth:</p>
                    <p className={cn('text-red')}>{guest}</p>
                  </div>
                )}
              </>
            )}
            <button
              className={cn(
                'bg-red text-white py-2.5 px-4 rounded-md flex gap-2 items-center transition-colors duration-150 ease-in-out text-sm',
                'hover:bg-red/90',
                'md:px-4 md:text-base',
                'disabled:opacity-80 disabled:cursor-not-allowed',
              )}
              onClick={onOpenInvitation}
              disabled={!invitedGuest || loading}
            >
              <Envelope />
              <span>
                {invitedGuest ? 'Buka Undangan' : 'Maaf, Khusus Tamu Undangan!'}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FrontCover
