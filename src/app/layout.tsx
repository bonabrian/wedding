import './globals.css'
import 'react-photo-view/dist/react-photo-view.css'

import type { Metadata } from 'next'
import {
  Averia_Sans_Libre as AveriaSansLibre,
  Cormorant_Upright as CormorantUpright,
  Inter,
  Rochester,
} from 'next/font/google'

import { BASE_URL, fullURL } from '@/data/site'
import cn from '@/lib/cn'

import ClientLayout from './client.layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const cormorantUpright = CormorantUpright({
  subsets: ['latin'],
  variable: '--font-cormorant-upright',
  weight: ['500', '600', '700'],
})

const rochester = Rochester({
  subsets: ['latin'],
  variable: '--font-rochester',
  weight: ['400'],
})

const averia = AveriaSansLibre({
  subsets: ['latin'],
  variable: '--font-averia',
  weight: ['400', '700'],
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
        inter.variable,
        cormorantUpright.variable,
        rochester.variable,
        averia.variable,
      )}
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
