'use client'

import { MotionConfig as MotionProvider } from 'framer-motion'

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return <MotionProvider reducedMotion="user">{children}</MotionProvider>
}

export default ClientLayout
