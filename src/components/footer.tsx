'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Snowfall from 'react-snowfall'

import { bride, groom } from '@/data/bride'
import { footerImage, snowfall } from '@/data/site'
import cn from '@/lib/cn'

const Footer = () => {
  return (
    <section className={cn('relative h-screen flex flex-col overflow-hidden')}>
      <Image
        src={footerImage}
        alt="Footer Cover Background"
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
          'flex flex-col justify-between items-center w-full h-screen pt-16 pb-4',
        )}
      >
        <motion.div
          className={cn('text-center mb-5 font-cormorant-upright text-white')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, type: 'spring', duration: 2 }}
        >
          <h1
            className={cn(
              'font-semibold text-6xl',
              'md:text-7xl',
              'lg:text-9xl',
            )}
          >
            {groom.nickName} & {bride.nickName}
          </h1>
          <h2 className={cn('text-3xl')}>
            Sampai berjumpa di hari bahagia kami
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ delay: 0.5, type: 'spring', duration: 2 }}
        >
          <p className={cn('text-center text-sm text-white mb-4')}>
            © {new Date().getFullYear()} by{' '}
            <Link
              href="https://bonabrian.com"
              target="_blank"
              className={cn('text-input underline font-semibold')}
            >
              Bona Brian Siagian
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Footer
