import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Trade International | Get in Touch',
  description: 'Contact Trade International for all your paper trading, indenting, tender, and HP Paper needs. Reach out to our expert team across Pakistan.',
  keywords: 'contact Trade International, paper trading contact, HP Paper Pakistan contact, tender services contact, indenting services contact',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
