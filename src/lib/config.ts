import type { SnowfallProps } from 'react-snowfall'

interface Bride {
  nickName: string
  fullName: string
  birthOrder: string
  fatherName: string
  motherName: string
  image: string
}

export const groom: Bride = {
  nickName: 'Bona',
  fullName: 'Bona Brian Siagian',
  birthOrder: 'Putra',
  fatherName: 'Bpk. Salomo Siagian',
  motherName: 'Ibu Monika Purba',
  image: 'https://placehold.co/400x600/black/white',
}

export const bride: Bride = {
  nickName: 'Silvia',
  fullName: 'Silvia Novianty Sitorus',
  birthOrder: 'Putri',
  fatherName: 'Bpk. Sarbini Sitorus',
  motherName: 'Ibu Elsa Agustina Sirait ✞',
  image: 'https://placehold.co/400x600/9f80ff/white',
}

export const weddingDate = 'April 20, 2024 11:00:00 UTC+07:00'

// images
export const frontCoverImage = '/assets/images/front-cover.png'
export const introImage = '/assets/images/front-cover.png'

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
