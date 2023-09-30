'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Snowfall from 'react-snowfall'

import cn from '@/lib/cn'
import { bride, groom, introImage, snowfall, weddingDate } from '@/lib/config'
import { monthNames } from '@/lib/constants'

const Hero = () => {
  const date = new Date(weddingDate)
  const day = date.getDate()
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  return (
    <section className={cn('relative h-screen flex flex-col overflow-hidden')}>
      <Image
        src={introImage}
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
          'flex flex-col justify-center items-center w-full font-cormorant-upright h-screen',
        )}
      >
        <motion.div
          className={cn('mb-5')}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.5, type: 'spring', duration: 2 }}
        >
          <div className={cn('relative z-10 w-32 h-48', 'lg:w-36 lg:h-52')}>
            <Image
              src="/assets/images/rumah-batak.png"
              alt="Rumah Batak"
              fill
              className={cn(
                'filter saturate-200 hue-rotate-90 blur-0 contrast-0 brightness-0',
              )}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className={cn('uppercase text-2xl text-white font-semibold')}>
            Pernikahan
          </h3>
        </motion.div>
        <motion.div
          className={cn('text-center mb-5')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
          <p className={cn('text-center text-white mb-4', 'md:text-lg')}>
            Tanpa Mengurangi Rasa Hormat,
            <br />
            Kami Mengundang Bapak/Ibu/Saudara/i
            <br />
            Untuk Hadir Di Acara Pernikahan Kami.
          </p>
          <h3
            className={cn(
              'text-white text-center text-2xl',
              'md:text-3xl',
              'lg:text-3xl',
            )}
          >
            {`${day} ${month} ${year}`}
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
