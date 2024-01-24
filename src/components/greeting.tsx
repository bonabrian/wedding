'use client'

import 'moment/locale/id'

import { motion } from 'framer-motion'
import moment from 'moment'
import Image from 'next/image'
import type { ComponentProps } from 'react'

import { bride, groom } from '@/data/bride'
import { greetingLandscape, greetingPortrait } from '@/data/site'
import { weddingEvents } from '@/data/wedding-events'
import useMediaQuery from '@/hooks/use-media-query'
import { min } from '@/lib/screens'
import { cn } from '@/lib/utils'

import BatakTraditionalHouseImage from '../../public/images/batak-traditional-house.svg'

const BatakTraditionalHouse = ({ ...rest }: ComponentProps<'svg'>) => {
  return <BatakTraditionalHouseImage {...rest} />
}

const Greeting = () => {
  const receptionDate =
    weddingEvents.find((event) => event.name === 'reception')?.date ?? ''

  const formattedDate = moment(receptionDate).format('DD MMMM YYYY')

  const isLg = useMediaQuery(min('lg'))
  const bgCover = isLg ? greetingLandscape : greetingPortrait

  return (
    <motion.section
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, type: 'tween', duration: 0.5 }}
      id="greeting"
      className={cn('relative h-fit flex flex-col overflow-hidden')}
    >
      <Image
        src={bgCover}
        alt="Greeting"
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
            transition={{ delay: 0.8, type: 'spring', duration: 1.5 }}
            className={cn(
              'flex flex-col justify-center items-center text-center text-balance',
            )}
          >
            <BatakTraditionalHouse
              className={cn('h-36 w-28 fill-white/80', 'lg:h-40 lg:w-32')}
            />
            <h3
              className={cn(
                'uppercase text-white text-lg font-cormorant-upright',
              )}
            >
              Pernikahan
            </h3>
            <h1
              className={cn(
                'font-cormorant-upright text-red text-6xl tracking-tight font-semibold leading-none mt-4',
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
            transition={{ delay: 1.2, type: 'spring', duration: 2.5 }}
            className={cn(
              'flex flex-col justify-center items-center text-center text-balance mt-4',
            )}
          >
            <p className={cn('text-center text-white mb-4', 'md:text-lg')}>
              Tanpa Mengurangi Rasa Hormat
              <br />
              Kami Mengundang Bapak/Ibu/Saudara/i
              <br />
              Untuk Hadir Di Acara Pernikahan Kami.
            </p>
            <h3
              className={cn(
                'text-white text-center font-cal text-xl',
                'md:text-2xl',
              )}
            >
              {formattedDate}
            </h3>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Greeting
