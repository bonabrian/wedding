import useGuestbook from '@/hooks/use-guestbook'
import cn from '@/lib/cn'
import type { Guest } from '@/types/guest'

import BackgroundPattern from './background-pattern'
import GuestbookEntries from './guestbook-entries'
import GuestbookForm from './guestbook-form'
import Heading from './heading'

interface GuestbookProps {
  guest?: Guest
}

const Guestbook = ({ guest }: GuestbookProps) => {
  const { entires, addEntry, mutate } = useGuestbook()

  const handleOnSubmit = async (message: string) => {
    try {
      await addEntry({ guest: guest?.slug ?? '', message })
      mutate()
    } catch (err) {
      console.error('An error occurred handleOnSubmit: ', err)
    }
  }

  return (
    <BackgroundPattern topWaves bottomWaves>
      <Heading
        title="Doa dan Ucapan"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni cumque, quisquam praesentium ullam, expedita qui numquam deserunt ratione, blanditiis voluptatibus! Voluptates optio ullam aperiam ducimus nihil voluptatem at architecto."
      />
      <div
        className={cn(
          'flex flex-col z-10 border border-accent/60 rounded-lg px-8 py-12 space-y-8',
        )}
      >
        <GuestbookForm guest={guest?.name ?? 'N/A'} onSubmit={handleOnSubmit} />
        <GuestbookEntries entries={entires} />
      </div>
    </BackgroundPattern>
  )
}

export default Guestbook
