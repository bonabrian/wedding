import type { Attendance } from '@prisma/client'

const useRSVP = () => {
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
    } catch (err) {
      console.error('An error occured on addRSVP', err)
    }
  }

  return { addRSVP }
}

export default useRSVP
