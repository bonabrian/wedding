'use client'

import { useEffect, useRef, useState } from 'react'

import cn from '@/lib/cn'
import type { Guestbook } from '@/types/guestbook'

import GuestbookEntry from './guestbook-entry'

interface GuestbookEntriesProps {
  entries?: Guestbook[]
}

const ENTRIES_HEIGHT = 320

const GuestbookEntries = ({ entries }: GuestbookEntriesProps) => {
  const entriesRef = useRef<HTMLDivElement | null>(null)
  const [entriesHeight, setEntriesHeight] = useState(ENTRIES_HEIGHT)

  useEffect(() => {
    const handleResize = () => {
      const height =
        window.innerHeight > ENTRIES_HEIGHT
          ? ENTRIES_HEIGHT
          : window.innerHeight
      setEntriesHeight(height)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      ref={entriesRef}
      className={cn('overflow-hidden overflow-y-auto py-4 space-y-4')}
      style={{ height: entriesHeight }}
    >
      {entries?.length ? (
        <>
          {entries.map((entry) => (
            <GuestbookEntry key={entry.id} entry={entry} />
          ))}
        </>
      ) : null}
    </div>
  )
}

export default GuestbookEntries
