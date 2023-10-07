import 'moment/locale/id'

import moment from 'moment'
import Image from 'next/image'

import cn from '@/lib/cn'
import type { Guestbook } from '@/types/guestbook'

interface GuestbookEntryProps {
  entry: Guestbook
}

const formatDatetime = (dateTime: Date) => {
  return moment(dateTime).fromNow()
}

const GuestbookEntry = ({ entry }: GuestbookEntryProps) => {
  return (
    <div className={cn('flex items-start gap-3 font-cormorant-upright')}>
      <Image
        src={`https://avatar.oxro.io/avatar.svg?name=${entry.guest.name}&background=random&length=1&caps=1&fontSize=250&bold=true`}
        width={36}
        height={36}
        alt={entry.guest.name}
        className={cn('rounded-full aspect-square')}
      />
      <div className={cn('space-y-1')}>
        <div className={cn('flex flex-col items-start mb-2')}>
          <div className={cn('flex')}>
            <div className={cn('font-bold text-foreground text-lg')}>
              {entry.guest.name}
              <div className={cn('text-secondary text-sm')}>
                {formatDatetime(entry.createdAt)}
              </div>
            </div>
          </div>
        </div>
        <div className={cn('flex items-center gap-3')}>
          <p
            className={cn(
              'w-fit bg-input/10 rounded-md py-2 px-3 rounded-tl-none flex flex-col text-lg',
            )}
          >
            {entry.message}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GuestbookEntry
