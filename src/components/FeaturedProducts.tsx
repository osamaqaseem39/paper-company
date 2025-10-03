'use client'

import { useState, useEffect } from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'
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

  const addToCart = (product: Product) => {
    // This would integrate with your cart context
    console.log('Added to cart:', product)
  }

  const toggleWishlist = (productId: string) => {
    // This would integrate with your wishlist context
    console.log('Toggled wishlist:', productId)
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
                    
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      <Star className="h-4 w-4 text-golden-ochre fill-current" />
                      <span className="text-sm text-charcoal">{product.rating.toFixed(1)}</span>
                      <span className="text-xs text-cool-gray">({product.reviewCount})</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <button
                        onClick={() => toggleWishlist(product._id)}
                        className="p-2 border border-cool-gray rounded-lg hover:bg-cool-gray transition-colors duration-200"
                      >
                        <Heart className="h-4 w-4 text-cool-gray hover:text-error-red" />
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Add to Cart
                      </button>
                    </div>
                    
                    {/* View Details Button */}
                    <Link 
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center justify-center w-full bg-golden-ochre hover:bg-golden-ochre/90 text-pure-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-x-2"
                    >
                      <span>View Details</span>
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
      
      {/* View All Products Button */}
      <div className="text-center mt-12">
        <Link href="/products" className="btn-secondary">
          View All Products
        </Link>
      </div>
    </div>
  )
}