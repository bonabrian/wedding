'use client'

import type { Moment } from 'moment'
import moment from 'moment'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

interface CountdownTimerProps {
  date: string
}

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Timer = ({ time, label }: { time: number; label: string }) => {
  return (
    <div className={cn('flex flex-col items-center gap-2 text-white')}>
      <span className={cn('font-cal text-3xl', 'md:text-5xl', 'lg:text-7xl')}>
        {time.toString().padStart(2, '0')}
      </span>
      <span
        className={cn(
          'uppercase text-sm font-medium',
          'md:text-base',
          'lg:text-xl',
        )}
      >
        {label}
      </span>
    </div>
  )
}

const CountdownTimer = ({ date }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now: Moment = moment()
      const isoDateString = new Date(date).toISOString()
      const targetDate: Moment = moment(isoDateString)
      const duration: moment.Duration = moment.duration(targetDate.diff(now))
      const daysDiff = Math.floor(duration.asDays())

      setTimeRemaining({
        days: daysDiff,
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [date])

  return (
    <div className={cn('flex gap-4 z-10', 'lg:gap-12')}>
      <Timer time={timeRemaining.days} label="Hari" />
      <Timer time={timeRemaining.hours} label="Jam" />
      <Timer time={timeRemaining.minutes} label="Menit" />
      <Timer time={timeRemaining.seconds} label="Detik" />
    </div>
  )
}

export default CountdownTimer
