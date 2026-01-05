import type { Metadata } from 'next'
import { inter, spaceGrotesk } from '@/styles/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'PulseFit AI - Train Smarter, Build Your Edge',
  description: 'AI-powered gym fitness app with personalized workouts, nutrition planning, performance analytics, and habit tracking.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}

