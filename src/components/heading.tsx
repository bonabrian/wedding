import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { type ComponentProps, useRef } from 'react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

import GorgaBatakImage from '../../public/images/gorga-batak.svg'

interface HeadingProps {
  title: string
  caption?: string
  description?: string
  inverseColor?: boolean
  hashtag?: string[]
}

const GorgaBatak = ({ ...rest }: ComponentProps<'svg'>) => {
  return <GorgaBatakImage {...rest} />
}

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 50,
    opacity: 0,
  },
}

const Heading = ({
  title,
  caption,
  description,
  inverseColor,
  hashtag,
}: HeadingProps) => {
  const headingRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headingRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      key={`heading-${title}`}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      exit="exit"
      variants={variants}
      ref={headingRef}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative flex flex-col justify-center text-center z-10',
        hashtag ? '' : 'mb-16',
      )}
    >
      {caption && (
        <h3
          className={cn(
            'font-cormorant-upright text-foreground text-3xl mb-4',
            'md:text-4xl',
            inverseColor ? 'text-white' : 'text-foreground',
          )}
        >
          <Balancer>{caption}</Balancer>
        </h3>
      )}
      <h1
        className={cn(
          'font-bold font-rochester text-6xl',
          'md:text-7xl',
          'lg:text-8xl',
          inverseColor ? 'text-white' : 'text-accent',
        )}
      >
        <Balancer>{title}</Balancer>
      </h1>
      {description && (
        <p
          className={cn(
            'mt-8 text-foreground font-cormorant-upright text-lg',
            'md:text-xl',
            inverseColor ? 'text-white' : 'text-foreground',
          )}
        >
          <Balancer>{description}</Balancer>
        </p>
      )}
      {!inverseColor && (
        <div className={cn('absolute top-0 left-0 w-full -z-[5]')}>
          <GorgaBatak
            className={cn(
              'mx-auto w-3/5 opacity-5 fill-[#6D1E1E]',
              'md:w-1/2',
              'lg:w-1/3',
            )}
          />
        </div>
      )}
      {hashtag && (
        <div className={cn('flex my-8 min-w-full md:min-w-[24rem] mx-auto')}>
          <div className={cn('flex justify-between flex-1')}>
            {hashtag.map((h) => (
              <Link
                key={h}
                className="font-semibold"
                href={`https://www.instagram.com/explore/tags/${h}/`}
                target="_blank"
              >
                #{h}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Heading
