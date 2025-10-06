import Image from 'next/image'
import Link from 'next/link'
import type { Brand } from '@/types/brand.types'

interface BrandsGridProps {
  brands: Brand[]
}

export default function BrandsGrid({ brands }: BrandsGridProps) {
  if (!brands?.length) return null

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {brands.map((brand) => (
        <div key={brand._id} className="group bg-pure-white rounded-2xl p-4 border border-cool-gray/50 shadow hover:shadow-lg transition-all duration-300">
          <div className="aspect-square relative rounded-xl overflow-hidden bg-cool-gray/50 flex items-center justify-center">
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
              />
            ) : (
              <div className="text-center p-6 text-charcoal">{brand.name}</div>
            )}
          </div>
          <div className="mt-3 text-center">
            {brand.website ? (
              <Link href={brand.website} target="_blank" className="font-semibold text-charcoal hover:text-electric-blue">
                {brand.name}
              </Link>
            ) : (
              <div className="font-semibold text-charcoal">{brand.name}</div>
            )}
            {brand.country && (
              <div className="text-sm text-cool-gray">{brand.country}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}


