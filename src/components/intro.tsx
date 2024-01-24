import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { bride, groom } from '@/data/bride'
import { introCover } from '@/data/site'
import { cn } from '@/lib/utils'
import type { Guest } from '@/types/guest'

import { EnvelopeClose, EnvelopeOpen } from './icons'

interface IntroProps {
  guest?: Guest
  onOpenInvitation: () => void
}

const Intro = ({ guest, onOpenInvitation }: IntroProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      id="intro"
      className={cn('relative h-screen flex flex-col overflow-hidden')}
    >
      <Image
        src={introCover}
        alt="Intro"
        quality={100}
        fill
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className={cn('object-cover absolute filter brightness-[0.3] -z-10')}
      />
      <div
        className={cn('flex flex-col items-center justify-end w-full h-screen')}
      >
        <div className={cn('pt-16 py-24')}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', duration: 1.5 }}
            className={cn(
              'flex flex-col justify-center items-center text-center text-balance',
            )}
          >
            <h2
              className={cn(
                'font-cal bg-gradient-to-b from-gray-50 via-gray-300 to-gray-500 bg-clip-text text-transparent pb-1 text-2xl leading-none',
                'md:text-3xl',
                'xl:text-4xl',
              )}
            >
              Undangan Pernikahan
            </h2>
            <h1
              className={cn(
                'font-cormorant-upright text-red text-6xl tracking-tight font-semibold leading-none',
                'md:text-7xl',
                'lg:text-8xl',
              )}
            >
              {groom.nickName} & {bride.nickName}
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.85, type: 'spring', duration: 2 }}
            className={cn(
              'flex flex-col text-balance justify-center items-center text-center text-white mt-4',
            )}
          >
            <p className={cn('md:text-lg')}>Kepada Yth:</p>
            <p className={cn('text-xl', 'md:text-xl font-cal')}>
              {guest?.id && guest?.name ? guest?.name : 'Guest Name'}
            </p>
            <button
              className={cn(
                'inline-flex gap-2 mt-4 items-center border-2 border-red py-2 px-3.5 rounded-xl transition-all duration-300',
                'hover:[&:not(:disabled)]:bg-red',
                'disabled:opacity-80 disabled:cursor-not-allowed',
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={onOpenInvitation}
              disabled={!guest?.id}
            >
              {isHovered ? <EnvelopeOpen /> : <EnvelopeClose />}
              <span>
                {!guest?.id
                  ? 'Ups! Ini khusus buat tamu undangan ya'
                  : 'Buka Undangan'}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Intro
