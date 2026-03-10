import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default:  'Dodie Thayer for Tory Burch',
    template: '%s | Tory Burch',
  },
  description:
    'Discover the exclusive collaboration between Tory Burch and ceramic artist Dodie Thayer — a collection of hand-painted botanicals rooted in coastal American craft.',
  keywords: ['Tory Burch', 'Dodie Thayer', 'luxury fashion', 'ceramics', 'collaboration'],
  openGraph: {
    type:        'website',
    locale:      'en_US',
    siteName:    'Tory Burch',
    title:       'Dodie Thayer for Tory Burch',
    description: 'A botanical collaboration rooted in coastal American craft.',
  },
}

export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  themeColor:   '#1A1A1A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
