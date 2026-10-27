import type { Metadata } from 'next'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: 'BombShelters.com ',
  description:
    'Explore professionally engineered bomb shelters, storm shelters, safe rooms, and hardened structures.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
