import type { Metadata } from 'next'
import { Award } from 'lucide-react'
import { brandService } from '@/services/brandService'
import BrandsGrid from '@/components/BrandsGrid'

export const metadata: Metadata = {
  title: 'Our Brands - Trade International',
  description: 'Discover the international brands and mills we represent and distribute in Pakistan.',
}

export default async function BrandsPage() {
  const res = await brandService.getActiveBrands(24, 1)
  const brands = res.success ? res.data?.brands ?? [] : []

  return (
    <div className="min-h-screen bg-pure-white">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Partner Brands
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-classic-black mb-4">
              <span className="text-electric-blue">International</span> Brands
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              We partner with globally trusted mills and brands to deliver premium paper solutions in Pakistan.
            </p>
          </div>

          {res.success ? (
            <BrandsGrid brands={brands} />
          ) : (
            <div className="text-center text-charcoal">{res.message || 'Failed to load brands.'}</div>
          )}
        </div>
      </section>
    </div>
  )
}


