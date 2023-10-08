import type { SnowfallProps } from 'react-snowfall'

// images
export const frontCoverImage = '/assets/images/front-cover.png'
export const introImage = '/assets/images/front-cover.png'

// audio
export const mainAudio = '/assets/audio/audio.mp3'

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
