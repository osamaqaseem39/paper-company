import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HP Paper Products - Trade International | Premium Paper Solutions',
  description: 'Explore our comprehensive range of HP paper products including copy paper, office paper, laser jet paper, and premium paper solutions. Contact us for pricing and availability.',
  keywords: 'HP Papers, paper products, copy paper, office paper, laser jet paper, premium paper, Trade International, Pakistan',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
