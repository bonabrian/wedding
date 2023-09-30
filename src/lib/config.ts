import type { SnowfallProps } from 'react-snowfall'

interface Bride {
  nickName: string
  fullName: string
  birthOrder: string
  image: string
}

export const groom: Bride = {
  nickName: 'Bona',
  fullName: 'Bona Brian Siagian',
  birthOrder: 'Putra Pertama',
  image: 'https://placehold.co/400x600/black/white',
}

export const bride: Bride = {
  nickName: 'Silvia',
  fullName: 'Silvia Novianty Sitorus',
  birthOrder: 'Putri Pertama',
  image: 'https://placehold.co/400x600/9f80ff/white',
}

export const weddingDate = '2024-04-20'

// images
export const frontCoverImage = '/assets/images/front-cover.png'
export const introImage = '/assets/images/front-cover.png'
export const batakArt = '/assets/images/batak-art.png'

// audio
export const mainAudio = '/assets/audio/audio.mp3'

export const snowfall: SnowfallProps = {
  color: '#BB4A4A',
  speed: [0, 1],
  wind: [0, 1],
  radius: [0.5, 5],
  snowflakeCount: 50,
  style: {
    opacity: 0.4,
    zIndex: 1,
  },
}
