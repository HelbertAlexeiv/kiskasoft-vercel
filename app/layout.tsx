import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Kiskasoft — Ingeniería Hardware & Software',
  description:
    'Kiskasoft es un estudio especializado en el diseño e integración de soluciones tecnológicas que unen el software con el mundo físico.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kiskasoft_01%20%281%29.ico-Adp5zNwZmItKNcpMqPiHwSMcwgP1Dy.x-icon',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
