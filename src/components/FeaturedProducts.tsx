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

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await productService.getFeaturedProducts(6)
      
      if (response.success && response.data) {
        setProducts(response.data.products)
      } else {
        // Fallback to mock data if API fails
        setProducts([
          {
            _id: '1',
            name: 'HP Business Copy Paper Hi White',
            slug: 'hp-business-copy-paper-hi-white',
            description: 'A lightweight and economical paper designed primarily for high-volume copying and draft printing within a business environment. The "Hi White" finish provides good contrast for clear, easy-to-read text.',
            shortDescription: 'Lightweight and economical paper for high-volume copying and draft printing',
            sku: 'HP-BCP-70',
            price: 950,
            salePrice: 850,
            stock: 100,
            minStock: 10,
            images: [
              { url: '/images/HP Business Copy Paper blue.jpg', alt: 'HP Business Copy Paper Hi White' }
            ],
            category: 'copy-paper',
            brand: 'hp',
            tags: ['copy-paper', 'business', 'hi-white', '70gsm'],
            attributes: ['70gsm', 'Hi White', 'Business Grade', 'High Volume'],
            variations: [],
            seo: {},
            status: 'published',
            isActive: true,
            isFeatured: true,
            isDigital: false,
            reviews: [],
            rating: 4.8,
            reviewCount: 124,
            viewCount: 0,
            salesCount: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            _id: '2',
            name: 'HP Office Paper Hi White',
            slug: 'hp-office-paper-hi-white',
            description: 'A versatile, standard-weight paper ideal for general office use. Slightly heavier than basic copy paper, it offers better opacity and a more substantial feel for everyday printing tasks.',
            shortDescription: 'Versatile, standard-weight paper ideal for general office use with superior brightness',
            sku: 'HP-OP-75',
            price: 1020,
            salePrice: 920,
            stock: 80,
            minStock: 10,
            images: [
              { url: '/images/HP Office paper (green).jpg', alt: 'HP Office Paper Hi White' }
            ],
            category: 'office-paper',
            brand: 'hp',
            tags: ['office-paper', 'hi-white', '75gsm', 'versatile'],
            attributes: ['75gsm', 'Hi White', 'Office Grade', 'Versatile'],
            variations: [],
            seo: {},
            status: 'published',
            isActive: true,
            isFeatured: true,
            isDigital: false,
            reviews: [],
            rating: 4.9,
            reviewCount: 89,
            viewCount: 0,
            salesCount: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            _id: '3',
            name: 'HP LaserJet Paper Hi White',
            slug: 'hp-laserjet-paper-hi-white',
            description: 'A heavier, more premium paper specifically optimized for LaserJet printers. The 90gsm weight gives documents a substantial, professional feel and increased opacity.',
            shortDescription: 'Premium 90gsm paper specifically optimized for LaserJet printers',
            sku: 'HP-LJP-90',
            price: 1200,
            salePrice: 1100,
            stock: 60,
            minStock: 10,
            images: [
              { url: '/images/HP Laserjet paper ( dark green).jpg', alt: 'HP LaserJet Paper Hi White' }
            ],
            category: 'laser-jet',
            brand: 'hp',
            tags: ['laser-jet', 'hi-white', '90gsm', 'premium'],
            attributes: ['90gsm', 'Hi White', 'LaserJet Optimized', 'Premium'],
            variations: [],
            seo: {},
            status: 'published',
            isActive: true,
            isFeatured: true,
            isDigital: false,
            reviews: [],
            rating: 4.9,
            reviewCount: 203,
            viewCount: 0,
            salesCount: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ])
      }
    } catch (err) {
      console.error('Error fetching featured products:', err)
      setError('Failed to load featured products')
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getDiscountPercentage = (price: number, salePrice?: number) => {
    if (!salePrice || salePrice >= price) return 0
    return Math.round(((price - salePrice) / price) * 100)
  }

  const viewProduct = (product: Product) => {
    // Navigate to product details or contact page
    window.location.href = `/contact?product=${encodeURIComponent(product.name)}`
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

  return (
    <div className="space-y-8">
      {/* Products Carousel */}
      <div className="relative">
        {/* Carousel Container */}
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
          {products.map((product) => {
            const discountPercentage = getDiscountPercentage(product.price, product.salePrice)
            const displayPrice = product.salePrice || product.price
            
            return (
              <div key={product._id} className="flex-shrink-0 w-80 group">
                <div className="bg-pure-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cool-gray/50 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative bg-cool-gray h-64 overflow-hidden">
                    <div className="relative h-full flex items-center justify-center">
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].alt || product.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 mx-auto">
                          <Image 
                            src="/images/hplogo.png" 
                            alt="HP Logo" 
                            width={96} 
                            height={96} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                    
                    {/* Discount Badge */}
                    {discountPercentage > 0 && (
                      <div className="absolute top-2 right-2 bg-golden-ochre text-pure-white text-xs font-bold px-2 py-1 rounded">
                        -{discountPercentage}%
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-classic-black mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-charcoal mb-4 line-clamp-2">
                      {product.shortDescription || product.description}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-electric-blue">{formatPrice(displayPrice)}</span>
                      {product.salePrice && (
                        <span className="text-cool-gray line-through text-sm">{formatPrice(product.price)}</span>
                      )}
                    </div>
                    
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Details</span>
                      </Link>
                    </div>
                    
                    {/* Contact Button */}
                    <Link 
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center justify-center w-full bg-golden-ochre hover:bg-golden-ochre/90 text-pure-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-x-2"
                    >
                      <span>Contact for Details</span>
                      <div className="w-5 h-5 bg-pure-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-pure-white rounded-full"></div>
                      </div>
                    </Link>
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
      
      {/* Contact for Products Button */}
      <div className="text-center mt-12">
        <Link href="/contact" className="btn-secondary">
          Contact for All Products
        </Link>
      </div>
    </div>
  )
}