'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import cn from '@/lib/cn'
import type { Guestbook } from '@/types/guestbook'

import { ChevronUp } from '../icons'
import Entry from './entry'

interface EntriesProps {
  entries?: Guestbook[]
  resetPage?: boolean
}

const ENTRY_GAP = 16
const PER_PAGE = 5

const Entries = ({ entries, resetPage }: EntriesProps) => {
  const entriesRef = useRef<HTMLDivElement | null>(null)
  const [entriesHeight, setEntriesHeight] = useState(0)
  const [page, setPage] = useState(0)

  const displayedEntries = entries?.slice(
    PER_PAGE * page,
    PER_PAGE * (page + 1),
  )

  const totalPages = Math.ceil((entries ?? []).length / PER_PAGE)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index)
  const pageNumbersToDisplay = pageNumbers.filter((num) => {
    const prevBoundary = page - 2
    const nextBoundary = page + 2

    return (
      (num >= prevBoundary && num <= nextBoundary) ||
      (page < 4 && num < 4) ||
      (page > totalPages - 5 && num > totalPages - 5)
    )
  })

  const onChangePage = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (entriesRef.current && (entries ?? []).length > 0) {
        const totalHeight = Array.from(entriesRef.current.children).reduce(
          (acc, child) => acc + child.clientHeight + ENTRY_GAP,
          0,
        )
        setEntriesHeight(totalHeight - ENTRY_GAP)
      } else {
        setEntriesHeight(0)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [entries, page])

  useEffect(() => {
    if (resetPage && page > 0) {
      onChangePage(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, resetPage])

  return (
    <div className={cn('py-4')}>
      <div className={cn('flex flex-col gap-8')}>
        {displayedEntries?.length ? (
          <div
            ref={entriesRef}
            className={cn('overflow-hidden space-y-4')}
            style={{ height: entriesHeight }}
          >
            {displayedEntries.map((entry) => (
              <Entry key={entry.id} entry={entry} />
            ))}
          </div>
        ) : null}

        {totalPages <= 1 ? null : (
          <div className={cn('flex items-center gap-x-4 justify-start')}>
            <button
              aria-label="prev-page"
              className={cn(
                'transition-all text-foreground py-1',
                'hover:text-input',
                'disabled:opacity-50 disabled:hover:text-foreground',
              )}
              disabled={page === 0}
              onClick={() => onChangePage(page - 1)}
            >
              <ChevronUp className={cn('-rotate-90')} />
            </button>

            {pageNumbersToDisplay[0] > 0 ? (
              <>
                <button
                  className={cn(
                    'transition-all text-foreground py-1',
                    'hover:text-input',
                  )}
                  onClick={() => onChangePage(0)}
                >
                  1
                </button>
                <div className={cn('font-semibold')}>...</div>
              </>
            ) : null}

            {pageNumbersToDisplay.map((num) => (
              <button
                key={num}
                className={cn(
                  'transition-all text-foreground py-1',
                  'hover:text-input',
                  num === page && 'font-bold text-input',
                )}
                onClick={() => onChangePage(num)}
              >
                {num + 1}
              </button>
            ))}

            {pageNumbersToDisplay[pageNumbersToDisplay.length - 1] <
            totalPages - 1 ? (
              <>
                <div>...</div>
                <button
                  className={cn(
                    'transition-all text-foreground py-1',
                    'hover:text-input',
                  )}
                  onClick={() => onChangePage(totalPages - 1)}
                >
                  {totalPages}
                </button>
              </>
            ) : null}

            <button
              aria-label="next-page"
              className={cn(
                'transition-all text-foreground py-1',
                'hover:text-input',
                'disabled:opacity-50 disabled:hover:text-foreground',
              )}
              disabled={page === totalPages - 1}
              onClick={() => onChangePage(page + 1)}
            >
              <ChevronUp className={cn('rotate-90')} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Entries
