import type { Attendance, RSVP } from '@prisma/client'

import useRequest from './use-request'

const useRSVP = (slug: string) => {
  const { data, loading, mutate } = useRequest<RSVP>(`/api/rsvp/${slug}`)

  const addRSVP = async ({
    slug,
    numberOfGuest,
    attendance,
  }: {
    slug?: string
    numberOfGuest: string
    attendance: Attendance
  }) => {
    try {
      await fetch('/api/rsvp', {
        method: 'POST',
        body: JSON.stringify({ slug, numberOfGuest, attendance }),
      })

      mutate(data)
    } catch (err) {
      console.error('An error occurred on addRSVP', err)
    }
  }

  return { data, loading, addRSVP }
}

export default useRSVP
