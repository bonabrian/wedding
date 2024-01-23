import './globals.css'
import 'react-photo-view/dist/react-photo-view.css'

import type { Metadata } from 'next'
import {
  Averia_Sans_Libre as AveriaSansLibre,
  Cormorant_Upright as CormorantUpright,
  Plus_Jakarta_Sans as PlusJakartaSans,
  Rochester,
} from 'next/font/google'
import localFont from 'next/font/local'

import { BASE_URL, fullURL } from '@/data/site'
import { cn } from '@/lib/utils'

import ClientLayout from './client.layout'

const fontPlusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500'],
})

const fontCormorantUpright = CormorantUpright({
  subsets: ['latin'],
  variable: '--font-cormorant-upright',
  weight: ['500', '600', '700'],
})

const fontRochester = Rochester({
  subsets: ['latin'],
  variable: '--font-rochester',
  weight: ['400'],
})

const fontAveria = AveriaSansLibre({
  subsets: ['latin'],
  variable: '--font-averia',
  weight: ['400', '700'],
})

const fontCal = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal',
})

const buildOgImageURL = () => {
  return `${BASE_URL}/api/og`
}

export const metadata: Metadata = {
  metadataBase: fullURL(),
  title: 'Undangan Pernikahan Bona & Silvia',
  description: 'Pernikahan Bona & Silvia',
  openGraph: {
    title: 'Undangan Pernikahan Bona & Silvia',
    description: 'Pernikahan Bona & Silvia',
    images: buildOgImageURL(),
    url: '/',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        fontPlusJakartaSans.variable,
        fontCormorantUpright.variable,
        fontRochester.variable,
        fontAveria.variable,
        fontCal.variable,
      )}
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
