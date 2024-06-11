import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Biafruity',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={twMerge(inter.variable, 'isolate')}>
        <main className="flex h-screen flex-col justify-between overflow-x-hidden scrollbar-thin">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
