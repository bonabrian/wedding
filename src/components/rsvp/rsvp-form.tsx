'use client'

import { Attendance } from '@prisma/client'
import { motion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'

import cn from '@/lib/cn'

import { PaperPlane } from '../icons'

export interface RSVPFormBody {
  numberOfGuest: string
  attendance: Attendance
}

interface RSVPFormProps {
  onSubmit: (body: RSVPFormBody) => Promise<void>
}

const attendanceLabel = {
  [Attendance.COMING]: 'Hadir',
  [Attendance.NOTCOMING]: 'Tidak Hadir',
  [Attendance.TENTATIVE]: 'Masih Ragu',
  [Attendance.NOTCONFIRMED]: 'Belum dikonfirmasi',
}

const RSVPForm = ({ onSubmit }: RSVPFormProps) => {
  const [numberOfGuest, setNumberOfGuest] = useState('')
  const [attendance, setAttendance] = useState<keyof typeof Attendance>(
    Attendance.NOTCONFIRMED,
  )
  const [formError, setFormError] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!numberOfGuest || !attendance) {
      setFormError(true)
      return
    }

    setIsSending(true)

    try {
      await onSubmit({ numberOfGuest, attendance })
      setNumberOfGuest('')
      setAttendance(Attendance.NOTCONFIRMED)
    } catch (err) {
      console.error('Error when submit form', err)
    } finally {
      setFormError(false)
      setIsSending(false)
    }
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className={cn(
        'space-y-4 border border-white rounded-lg px-8 py-12 font-cormorant-upright text-lg',
      )}
    >
      <div className={cn('flex flex-col gap-2')}>
        <div className={cn('flex')}>
          <label htmlFor="numberOfGuest" className={cn('text-white font-bold')}>
            Jumlah Tamu
          </label>
        </div>
        <div className={cn('flex gap-x-4')}>
          {['1', '2'].map((value) => (
            <div key={value} className="flex items-center gap-x-3">
              <input
                id={`numberOfGuest-${value}`}
                name="numberOfGuest"
                value={value}
                type="radio"
                className="h-4 w-4 border-gray-300 text-red focus:ring-red"
                checked={numberOfGuest === value}
                onChange={(e) => setNumberOfGuest(e.target.value)}
              />
              <label
                htmlFor={`numberOfGuest-${value}`}
                className="block text-xl font-medium leading-6 text-white"
              >
                {value}
              </label>
            </div>
          ))}
        </div>
        {formError && numberOfGuest === '' && (
          <motion.span
            className={cn('text-pink-200 text-xs')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.1, type: 'spring', duration: 1 }}
          >
            Jumlah Tamu harus diisi.
          </motion.span>
        )}
      </div>
      <div className={cn('flex flex-col gap-2')}>
        <label htmlFor="numberOfGuest" className={cn('text-white text-lg')}>
          Konfirmasi Kehadiran
        </label>
        <div className={cn('flex flex-col gap-y-4')}>
          {Object.keys(Attendance)
            .filter((key) => key != Attendance.NOTCONFIRMED)
            .map((key) => (
              <div key={key} className={cn('flex items-center gap-x-3')}>
                <input
                  id={`attendance-${key}`}
                  name="attendance"
                  value={key}
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-red focus:ring-red"
                  checked={attendance === key}
                  onChange={(e) => setAttendance(e.target.value as Attendance)}
                />
                <label
                  htmlFor={`attendance-${key}`}
                  className="block text-lg font-medium leading-6 text-white"
                >
                  {attendanceLabel[key as keyof typeof Attendance]}
                </label>
              </div>
            ))}
        </div>
        {formError && attendance === Attendance.NOTCONFIRMED && (
          <motion.span
            className={cn('text-pink-200 text-xs')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.1, type: 'spring', duration: 1 }}
          >
            Konfirmasi Kehadiran harus diisi.
          </motion.span>
        )}
      </div>
      <div className={cn('flex')}>
        <button
          className={cn(
            'inline-flex items-center gap-2 border-2 px-3.5 py-1.5 border-white rounded-md text-white transition-colors duration-150 ease-in-out',
            'hover:bg-input',
            'disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-transparent',
          )}
          disabled={
            isSending ||
            !numberOfGuest ||
            attendance === Attendance.NOTCONFIRMED
          }
        >
          <PaperPlane />
          {isSending ? 'Mengirim...' : 'Kirim'}
        </button>
      </div>
    </form>
  )
}

export default RSVPForm
