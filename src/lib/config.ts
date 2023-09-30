import type { SnowfallProps } from 'react-snowfall'

interface Bride {
  nickName: string
  fullName: string
}

export const groom: Bride = {
  nickName: 'Bona',
  fullName: 'Bona Brian Siagian',
}

export const bride: Bride = {
  nickName: 'Silvia',
  fullName: 'Silvia Novianty Sitorus',
}

export const weddingDate = '2024-04-20'

// images
export const frontCoverImage = '/assets/images/front-cover.png'
export const introImage = '/assets/images/front-cover.png'

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
