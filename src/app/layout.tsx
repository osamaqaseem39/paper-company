import type { Metadata } from 'next'
import { CartProvider } from '@/contexts/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Trade International - Sole Distributor of HP Papers in Pakistan',
    template: '%s | Trade International'
  },
  description: 'Official sole distributor of HP Papers in Pakistan. Premium quality paper products with 40+ years of experience. Get it right the first time with HP Papers from Trade International.',
  keywords: 'HP Papers, Pakistan, paper distributor, office paper, printing paper, copy paper, Trade International, Lahore, paper merchant, paper trading',
  authors: [{ name: 'Trade International' }],
  creator: 'Trade International',
  publisher: 'Trade International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tradeinternational.net.pk'),
  alternates: {
    canonical: 'https://tradeinternational.net.pk',
  },
  openGraph: {
    title: 'Trade International - Sole Distributor of HP Papers in Pakistan',
    description: 'Official sole distributor of HP Papers in Pakistan. Premium quality paper products with 40+ years of experience.',
    url: 'https://tradeinternational.net.pk',
    siteName: 'Trade International',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade International - Sole Distributor of HP Papers in Pakistan',
    description: 'Official sole distributor of HP Papers in Pakistan. Premium quality paper products with 40+ years of experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-jost text-gray-900 antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
} 