import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PRODUCCIONES — Productora de eventos y experiencias sonoras',
  description:
    'Productora musical de alto calibre. DJs profesionales, sistemas de sonido, iluminación, máquinas de humo y pantallas LED para eventos inolvidables.'
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#151210',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background ${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
