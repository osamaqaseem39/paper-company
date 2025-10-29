'use client'

import { useState, useEffect } from 'react'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { productService } from '../services/productService'
import { Product } from '../types/product.types'

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const brandToLogo: Record<string, string> = {
    hp: '/images/hplogo.png',
    various: '/images/logo.png',
  }

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      // Get products from local data only - no API calls
      const response = await productService.getFeaturedProducts(6)
      
      if (response.success && response.data?.products && response.data.products.length > 0) {
        setProducts(response.data.products)
      } else {
        setProducts([])
      }
    } catch (err) {
      console.error('Error fetching featured products:', err)
      setError('Failed to load products')
      setProducts([])
    } finally {
      setLoading(false)
    }
  }


  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto mb-4"></div>
        <p className="text-charcoal">Loading featured products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-error-red mb-4">{error}</p>
        <button
          onClick={fetchFeaturedProducts}
          className="bg-electric-blue text-pure-white px-4 py-2 rounded-lg hover:bg-deep-indigo"
        >
          Try Again
        </button>
      </div>
    )
  }

  // If no products after loading, show fallback
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-charcoal mb-4">Loading products...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Products Carousel */}
      <div className="relative">
        {/* Carousel Container */}
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide px-1">
          {products.map((product) => {
            return (
              <div key={product._id} className="flex-shrink-0 w-80 group">
                <div className="bg-pure-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cool-gray/50 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative bg-cool-gray h-64 overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <Image
                        src={product.images[0].url}
                        alt={product.images[0].alt || product.name}
                        fill
                        className="object-contain p-4"
                        sizes="320px"
                        quality={95}
                        priority={false}
                      />
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image 
                          src="/images/hplogo.png" 
                          alt="HP Logo" 
                          width={96} 
                          height={96} 
                          className="object-contain"
                          quality={95}
                        />
                      </div>
                    )}
                    {product.brand && (
                      <div className="absolute top-2 left-2 bg-pure-white/90 border border-cool-gray/50 rounded-md p-1 shadow-sm">
                        <Image
                          src={brandToLogo[product.brand] || '/images/logo.png'}
                          alt={product.brand}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-classic-black mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-charcoal mb-6 line-clamp-2">
                      {product.shortDescription || product.description}
                    </p>
                    
                    <div className="flex items-center justify-center">
                      <Link
                        href={`/products/${product.slug}`}
                        className="w-full bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 bg-cool-gray rounded-full hover:bg-electric-blue transition-colors duration-300 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      {/* View All Products Button */}
      <div className="text-center mt-12">
        <Link 
          href="/products" 
          className="inline-flex items-center justify-center px-8 py-4 bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </div>
  )
}