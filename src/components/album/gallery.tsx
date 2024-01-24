'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

import type { GalleryImage } from '@/data/gallery'
import { images } from '@/data/gallery'
import { cn } from '@/lib/utils'

import computeRowLayout from './utils/compute-row-layout'
import findIdealNodeSearch from './utils/find-ideal-node-search'

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null)

  const [containerWidth, setContainerWidth] = useState(0)

  useLayoutEffect(() => {
    let animationFrameId: number | null = null
    const observer = new ResizeObserver((entries) => {
      // only do something if width changes
      const newWidth = entries[0].contentRect.width
      if (containerWidth !== newWidth) {
        animationFrameId = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth))
        })
      }
    })

    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => {
      observer.disconnect()
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  })

  if (!containerWidth) return <div ref={galleryRef}>&nbsp;</div>

  const width = containerWidth - 1
  const targetRowHeight = 300

  let limitNodeSearch = 2

  if (containerWidth >= 450) {
    limitNodeSearch = findIdealNodeSearch({ containerWidth, targetRowHeight })
  }

  const thumbs: GalleryImage[] = computeRowLayout({
    containerWidth: width,
    limitNodeSearch,
    targetRowHeight,
    margin: 2,
    images,
  })

  return (
    <PhotoProvider>
      <div ref={galleryRef} className={cn('flex flex-wrap')}>
        {thumbs.map((thumb, index) => (
          <PhotoView key={index} src={thumb.src}>
            <Image
              src={thumb.src}
              alt={thumb.alt}
              width={thumb.width}
              height={thumb.height}
              className={cn('m-0.5 cursor-pointer object-cover')}
              quality={100}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}

export default Gallery
