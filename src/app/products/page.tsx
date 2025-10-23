'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Eye, Phone, Mail } from 'lucide-react'
import { productService } from '../../services/productService'
import { Product } from '../../types/product.types'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await productService.getFeaturedProducts(12)
      
      if (response.success && response.data) {
        setProducts(response.data.products)
      } else {
        // Fallback to mock data if API fails
        setProducts([
          {
            _id: '1',
            name: 'HP Business Copy Paper',
            slug: 'hp-business-copy-paper',
            description: 'High-quality copy paper for everyday business use with excellent print quality',
            shortDescription: 'Premium copy paper for business use',
            sku: 'HP-BCP-70',
            price: 950,
            salePrice: 850,
            stock: 100,
            minStock: 10,
            images: [],
            category: 'copy-paper',
            brand: 'hp',
            tags: ['copy-paper', 'business'],
            attributes: [],
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
            name: 'HP Office Paper',
            slug: 'hp-office-paper',
            description: 'Premium office paper with superior brightness and smooth finish',
            shortDescription: 'Premium office paper with superior quality',
            sku: 'HP-OP-75',
            price: 1020,
            salePrice: 920,
            stock: 80,
            minStock: 10,
            images: [],
            category: 'office-paper',
            brand: 'hp',
            tags: ['office-paper', 'premium'],
            attributes: [],
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
            name: 'HP Laser Jet Paper',
            slug: 'hp-laser-jet-paper',
            description: 'Specialized paper for laser printers with optimal performance',
            shortDescription: 'Specialized paper for laser printers',
            sku: 'HP-LJP-90',
            price: 1200,
            salePrice: 1100,
            stock: 60,
            minStock: 10,
            images: [],
            category: 'laser-jet',
            brand: 'hp',
            tags: ['laser-jet', 'specialized'],
            attributes: [],
            variations: [],
            seo: {},
            status: 'published',
            isActive: true,
            isFeatured: true,
            isDigital: false,
            reviews: [],
            rating: 4.7,
            reviewCount: 156,
            viewCount: 0,
            salesCount: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            _id: '4',
            name: 'HP Premium Paper',
            slug: 'hp-premium-paper',
            description: 'Ultra-premium paper for high-quality printing and presentations',
            shortDescription: 'Ultra-premium paper for presentations',
            sku: 'HP-PP-100',
            price: 1500,
            salePrice: 1350,
            stock: 40,
            minStock: 10,
            images: [],
            category: 'premium',
            brand: 'hp',
            tags: ['premium', 'presentation'],
            attributes: [],
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
      console.error('Error fetching products:', err)
      setError('Failed to load products')
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

  const contactForProduct = (product: Product) => {
    window.location.href = `/contact?product=${encodeURIComponent(product.name)}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue mx-auto mb-4"></div>
            <p className="text-charcoal text-lg">Loading products...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-error-red mb-4 text-lg">{error}</p>
            <button
              onClick={fetchProducts}
              className="bg-electric-blue text-pure-white px-6 py-3 rounded-lg hover:bg-deep-indigo"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-pure-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-classic-black mb-4">
              HP Paper Products
            </h1>
            <p className="text-xl text-charcoal mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of HP paper products. Contact us for pricing and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </Link>
              <Link 
                href="tel:+92-42-37231507" 
                className="bg-golden-ochre hover:bg-golden-ochre/90 text-pure-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => {
            const discountPercentage = getDiscountPercentage(product.price, product.salePrice)
            const displayPrice = product.salePrice || product.price
            
            return (
              <div key={product._id} className="group">
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
                    <h3 className="text-xl font-bold text-classic-black mb-3 group-hover:text-electric-blue transition-colors duration-300">
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
                    
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      <Star className="h-4 w-4 text-golden-ochre fill-current" />
                      <span className="text-sm text-charcoal">{product.rating.toFixed(1)}</span>
                      <span className="text-xs text-cool-gray">({product.reviewCount})</span>
                    </div>
                    
                    <button
                      onClick={() => contactForProduct(product)}
                      className="w-full bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mb-3"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Get Quote</span>
                    </button>
                    
                    <Link 
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center justify-center w-full bg-golden-ochre hover:bg-golden-ochre/90 text-pure-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-x-2"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Contact for Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-deep-indigo text-pure-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team for bulk orders, custom specifications, and specialized paper requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-electric-blue hover:bg-electric-blue/90 text-pure-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              href="tel:+92-42-37231507" 
              className="bg-golden-ochre hover:bg-golden-ochre/90 text-pure-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>+92-42-37231507</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
