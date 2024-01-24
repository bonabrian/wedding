'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import { SpeakerHigh, SpeakerX } from './icons'

interface AudioPlayerProps {
  src: string
  isPlaying: boolean
  togglePlay: () => void
}

const AudioPlayer = ({ src, isPlaying, togglePlay }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // check if the user agent is not a mobile browser
        const isMobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          )

        if (!isMobile) {
          audioRef.current.play()
        } else {
          audioRef.current.muted = true
          audioRef.current.play()
          audioRef.current.muted = false
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <div className={cn('fixed bottom-4 left-4 z-50')}>
      <audio
        src={src}
        ref={audioRef}
        autoPlay
        loop
        controls
        className={cn('hidden')}
      />
      <button
        onClick={togglePlay}
        className={cn('rounded-lg text-white p-1 bg-red', 'hover:bg-red/90')}
      >
        {isPlaying ? <SpeakerHigh /> : <SpeakerX />}
      </button>
    </div>
  )
}

export default AudioPlayer
