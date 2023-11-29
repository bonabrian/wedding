import { useState } from 'react'

import useGuestbook from '@/hooks/use-guestbook'
import cn from '@/lib/cn'
import type { Guest } from '@/types/guest'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import Entries from './entries'
import EntryForm from './entry-form'

interface GuestbookProps {
  guest?: Guest
}

const Guestbook = ({ guest }: GuestbookProps) => {
  const { entires, addEntry, mutate } = useGuestbook()
  const [resetPage, setResetPage] = useState(false)

  const handleOnSubmit = async (message: string) => {
    try {
      await addEntry({ guest: guest?.slug ?? '', message })
      mutate()
      setResetPage(true)

      setTimeout(() => {
        setResetPage(false)
      }, 100)
    } catch (err) {
      console.error('An error occurred handleOnSubmit: ', err)
    }
  }

  return (
    <BackgroundPattern bottomWaves>
      <Heading
        title="Doa dan Ucapan"
        description="Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir, untuk memberikan do'a restu kepada kami."
      />
      <div
        className={cn(
          'flex flex-col z-10 border border-accent/60 rounded-lg px-8 py-8 space-y-4 mb-4',
          'sm:mb-8',
          'md:mb-12',
          'lg:mb-16',
          'xl:mb-20',
        )}
      >
        <EntryForm onSubmit={handleOnSubmit} />
        <Entries entries={entires} resetPage={resetPage} />
      </div>
    </BackgroundPattern>
  )
}

export default Guestbook
