'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

import cn from '@/lib/cn'

import { PaperPlane } from '../icons'

interface EntryFormProps {
  onSubmit: (message: string) => Promise<void>
}

const EntryForm = ({ onSubmit }: EntryFormProps) => {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!message) {
      setFormError(true)
    }

    setIsSending(true)

    try {
      await onSubmit(message)
      setMessage('')
    } catch (err) {
      console.error('Error when submit form', err)
    } finally {
      setIsSending(false)
      setFormError(false)
    }
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className={cn('space-y-4 font-cormorant-upright text-lg')}
    >
      <div className={cn('flex flex-col gap-2')}>
        <textarea
          className={cn(
            'rounded-lg border-transparent border-0 text-foreground px-4 py-2 text-lg',
            'focus:outline-none focus:ring-2 focus:ring-input',
            formError && !message && 'ring-red focus:ring-red',
          )}
          placeholder="Ucapan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
        />
      </div>
      <div className={cn('flex justify-end')}>
        <button
          className={cn(
            'inline-flex items-center gap-2 border-2 px-3.5 py-1.5 bg-input border-white rounded-md text-white transition-colors duration-150 ease-in-out',
            'disabled:cursor-not-allowed disabled:opacity-70',
          )}
          disabled={isSending || !message}
        >
          <PaperPlane />
          {isSending ? 'Mengirim...' : 'Kirim'}
        </button>
      </div>
    </form>
  )
}

export default EntryForm
