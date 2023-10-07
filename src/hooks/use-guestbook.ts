'use client'

import type { Guestbook } from '@/types/guestbook'

import useRequest from './use-request'

const getUserAgent = () => {
  return navigator.userAgent
}

const useGuestbook = () => {
  const { data, loading, error, mutate } =
    useRequest<Guestbook[]>('/api/guestbook')

  const addEntry = async ({
    guest,
    message,
  }: {
    guest: string
    message: string
  }) => {
    try {
      const userAgent = getUserAgent()
      await fetch('/api/guestbook', {
        method: 'POST',
        body: JSON.stringify({ guest, message, userAgent }),
      })
    } catch (err) {
      console.error('An error occured on addEntry', err)
    }
  }

  return {
    entires: data,
    loading,
    error,
    addEntry,
    mutate,
  }
}

export default useGuestbook
