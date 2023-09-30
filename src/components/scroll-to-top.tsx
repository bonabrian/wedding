import { AnimatePresence, motion } from 'framer-motion'

import useOnScroll from '@/hooks/use-on-scroll'
import cn from '@/lib/cn'

import { ChevronUp } from './icons'

const THRESHOLD = 10

const ScrollToTop = () => {
  const isScrolled = useOnScroll(THRESHOLD)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          className={cn('fixed bottom-4 right-4 z-50')}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className={cn(
              'rounded-lg text-white p-1 bg-red',
              'hover:bg-red/90',
            )}
            onClick={scrollToTop}
          >
            <ChevronUp />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
