import type { Metadata } from 'next'
import { Award } from 'lucide-react'
import { brandService } from '@/services/brandService'
import BrandsGrid from '@/components/BrandsGrid'
import type { Brand } from '@/types/brand.types'

export const metadata: Metadata = {
  title: 'Our Brands - Trade International',
  description: 'Discover the international brands and mills we represent and distribute in Pakistan.',
}

export default async function BrandsPage() {
  const res = await brandService.getActiveBrands(24, 1)
  const brands = res.success ? res.data?.brands ?? [] : []

  const fallbackBrands: Brand[] = [
    { _id: 'b-hp', name: 'HP Photo Copy Paper', slug: 'hp-photo-copy-paper', country: 'Brazil' },
    { _id: 'b-artone', name: 'Art One Paper Co.', slug: 'art-one-paper-co', country: 'Korea' },
    { _id: 'b-daats', name: 'Daats Paper', slug: 'daats-paper' },
    { _id: 'b-daeshan', name: 'Daeshan Pulp Industrial Co. LTD', slug: 'daeshan-pulp', country: 'Korea' },
    { _id: 'b-daio', name: 'Daio Paper Corporation', slug: 'daio-paper', country: 'Japan' },
    { _id: 'b-eagle', name: 'Eagle', slug: 'eagle' },
    { _id: 'b-falcon', name: 'Falcon', slug: 'falcon' },
    { _id: 'b-hokuetsu', name: 'Hokuetsu Kishu Paper', slug: 'hokuetsu-kishu', country: 'Japan' },
    { _id: 'b-iggesund', name: 'Iggesund Paper Board', slug: 'iggesund-paper-board', country: 'UK' },
    { _id: 'b-international-paper', name: 'International Paper Company', slug: 'international-paper' },
    { _id: 'b-kleannara', name: 'Kleannara Co. LTD', slug: 'kleannara', country: 'Korea' },
    { _id: 'b-moorim', name: 'Moorim Paper Co. LTD', slug: 'moorim-paper', country: 'Korea' },
    { _id: 'b-nippon', name: 'Nippon Paper Industries (NPI)', slug: 'nippon-paper-industries', country: 'Japan' },
    { _id: 'b-oji', name: 'OJI Paper Company LTD', slug: 'oji-paper', country: 'Japan' },
    { _id: 'b-pakset', name: 'Pakset', slug: 'pakset' },
    { _id: 'b-pinetree', name: 'Pine Tree', slug: 'pine-tree' },
    { _id: 'b-chenming', name: 'Shandong Chenming Paper Holding Limited', slug: 'shandong-chenming', country: 'China' },
    { _id: 'b-shanghai-yongtai', name: 'Shanghai Yongtai Adhesive Products Co. LTD', slug: 'shanghai-yongtai-adhesive', country: 'China' },
  ]

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

          {brands.length ? (
            <BrandsGrid brands={brands} />
          ) : (
            <BrandsGrid brands={fallbackBrands} />
          )}
        </div>
      </section>
    </div>
  )
}


