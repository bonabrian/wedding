import './globals.css'

import type { Metadata } from 'next'
import {
  Corinthia,
  Cormorant_Upright as CormorantUpright,
  Inter,
} from 'next/font/google'

import cn from '@/lib/cn'

import ClientLayout from './client.layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const cormorantUpright = CormorantUpright({
  subsets: ['latin'],
  variable: '--font-cormorant-upright',
  weight: ['500', '600', '700'],
})

const corinthia = Corinthia({
  subsets: ['latin'],
  variable: '--font-corinthia',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        corinthia.variable,
      )}
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
