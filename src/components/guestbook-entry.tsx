import 'moment/locale/id'

import moment from 'moment'
import Image from 'next/image'

import cn from '@/lib/cn'
import type { Guestbook } from '@/types/guestbook'

interface GuestbookEntryProps {
  entry: Guestbook
}

const formatDatetime = (dateTime: Date) => {
  return moment(dateTime).locale('id').format('dddd, DD MMM yyyy HH:mm')
}

const GuestbookEntry = ({ entry }: GuestbookEntryProps) => {
  return (
    <div className={cn('flex items-start gap-3 px-3')}>
      <Image
        src={`https://avatar.oxro.io/avatar.svg?name=${entry.guest.name}&background=random&length=1&caps=1&fontSize=250&bold=true`}
        width={40}
        height={40}
        alt={entry.guest.name}
        className={cn('rounded-full aspect-square')}
      />
      <div className={cn('space-y-1')}>
        <div
          className={cn(
            'flex flex-col items-start gap-3',
            'md:flex-row md:items-center',
          )}
        >
          <div className={cn('flex items-center gap-2')}>
            <div className={cn('font-semibold text-sm')}>
              {entry.guest.name}
            </div>
          </div>
        </div>
        <div className={cn('flex items-center gap-3 group')}>
          <p
            className={cn(
              'w-fit bg-input/20 rounded-md py-2 px-3 rounded-tl-none flex flex-col gap-4',
            )}
          >
            {entry.message}
            <div className={cn('text-muted-foreground text-xs')}>
              {formatDatetime(entry.createdAt)}
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GuestbookEntry
