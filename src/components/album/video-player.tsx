import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  youtubeID: string
  title?: string
  thumbnailOverride?: string
}

const VideoPlayer = ({
  youtubeID,
  title,
  thumbnailOverride,
}: VideoPlayerProps) => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      {showVideo ? (
        <iframe
          width={560}
          height={315}
          src={`https://www.youtube-nocookie.com/embed/${youtubeID}?autoplay=1`}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title || 'Youtube video'}
          className="aspect-[16/9] h-full w-full p-0 rounded-lg"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="group relative aspect-[16/9] w-full"
          aria-label={`Play video ${title}`}
        >
          <Image
            src={
              thumbnailOverride ??
              `https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`
            }
            fill
            alt={title ?? ''}
            className={cn('h-full w-full rounded-lg')}
            loading="lazy"
          />
          <div className="relative grid place-items-center text-xl text-white opacity-90">
            <div
              className={cn(
                'bg-red p-4 rounded-full flex items-center justify-center',
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                className={cn(
                  'h-12 w-12 transform transition',
                  'group-hover:scale-105',
                )}
              >
                <path
                  fill="currentColor"
                  d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
                />
              </svg>
            </div>
          </div>
        </button>
      )}
    </>
  )
}

export default VideoPlayer
