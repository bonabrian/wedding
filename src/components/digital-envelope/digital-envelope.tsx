'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { bride, groom } from '@/data/bride'
import cn from '@/lib/cn'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import { Gift } from '../icons'
import DebitCard from './debit-card'

const DigitalEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BackgroundPattern coloredPattern>
      <Heading
        title="Amplop Digital"
        description="Kehadiran Bapak/Ibu/Saudara/i di pernikahan kami adalah hadiah terbesar yang telah kami terima. Namun bagi Anda yang ingin memberikan tanda kasih untuk kami, dapat melalui"
        inverseColor
      />
      <div className={cn('flex flex-col z-10 mb-20')}>
        <div
          className={cn('flex flex-col justify-center items-center space-y-8')}
        >
          <button
            className={cn(
              'inline-flex items-center gap-2 border-2 px-3.5 py-1.5 border-white rounded-md text-white transition-colors duration-150 ease-in-out font-cormorant-upright',
              'hover:bg-input',
              'disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-transparent',
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Gift />
            Kirim Amplop
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={cn(
                  'grid grid-cols-1 gap-4 w-full overflow-hidden',
                  'md:grid-cols-2',
                )}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <DebitCard bankAccount={bride.bankAccount} />
                <DebitCard bankAccount={groom.bankAccount} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </BackgroundPattern>
  )
}

export default DigitalEnvelope
