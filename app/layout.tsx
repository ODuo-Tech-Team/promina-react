import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Promina | Locação de Máquinas e Equipamentos',
  description: 'Há 15 anos fornecendo máquinas e equipamentos de alta performance para a construção civil. Andaimes, escoras, marteletes, betoneiras e muito mais em Campina Grande e João Pessoa.',
  keywords: 'locação de máquinas, equipamentos construção civil, andaimes, escoras, marteletes, betoneiras, Campina Grande, João Pessoa, Paraíba',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-promina-colorido.png',
    apple: '/images/logo-promina-colorido.png',
  },
  openGraph: {
    title: 'Promina | Locação de Máquinas e Equipamentos',
    description: 'Há 15 anos fornecendo máquinas e equipamentos de alta performance para a construção civil.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFCC29',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
