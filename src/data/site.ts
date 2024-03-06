import type { SnowfallProps } from 'react-snowfall'

// images
export const introCover = '/images/intro.jpg'
export const greetingPortrait = '/images/greeting-p.jpg'
export const greetingLandscape = '/images/greeting-l.jpg'
export const footerImage = '/images/footer-cover.jpg'
export const videoThumb = '/images/video-thumb.jpg'

// audio
export const musicBackground = '/audio/audio.mp3'

// video
export const youtubeVideoID = 'y76dB_HmVjE'

export const calendarUrl =
  'http://www.google.com/calendar/event?action=TEMPLATE&dates=20240420T010000Z%2F20240420T100000Z&text=Pernikahan%20Bona%20%26%20Silvia&location=Gedung%20R.%20A.%20Wiriadinata%2C%209%2C%20Jl.%20Terusan%20Kopo%20No.Km%2C%20RW.5%2C%20Sulaiman%2C%20Kec.%20Margahayu%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040222%2C%20Indonesia&details='

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

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://bonasilvia.vercel.app'
    : 'http://localhost:3000'

const appHost = (includeProtocol = true): string => {
  let host: string = ''

  if (process.env.NEXT_PUBLIC_APP_URL) {
    host = process.env.NEXT_PUBLIC_APP_URL
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    host = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  } else if (process.env.VERCEL_URL) {
    host = `https://${process.env.VERCEL_URL}`
  }

  return includeProtocol
    ? host
    : host.replace('https://', '').replace('http://', '')
}

/**
 * Build a URL for the given path.
 * @return the URL for the given path.
 */
export const fullURL = (path: string = '', host: string = appHost()): URL => {
  return new URL(path, host)
}
