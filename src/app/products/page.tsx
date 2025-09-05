'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Filter, Star, CheckCircle, Search } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import type { Metadata } from 'next'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const { addToCart, getCartCount } = useCart()

  const products = [
    {
      id: 1,
      name: 'HP Business Copy Paper',
      gsm: '70gsm',
      description: 'High-quality copy paper for everyday business use',
      price: 850,
      originalPrice: 950,
      category: 'copy-paper',
      features: ['Premium quality', 'Compatible with all printers', 'Smooth printing'],
      rating: 4.8,
      reviews: 124,
      inStock: true,
      image: '/images/hplogo.png'
    },
    {
      id: 2,
      name: 'HP Office Paper (Hi White)',
      gsm: '75gsm',
      description: 'Enhanced white paper for premium office applications',
      price: 920,
      originalPrice: 1020,
      category: 'office-paper',
      features: ['Superior brightness', 'Professional finish', 'Excellent print quality'],
      rating: 4.9,
      reviews: 89,
      inStock: true,
      image: '/images/hplogo.png'
    },
    {
      id: 3,
      name: 'HP Everyday Paper (Hi White)',
      gsm: '70gsm',
      description: 'Reliable everyday paper for consistent performance',
      price: 880,
      originalPrice: 980,
      category: 'everyday-paper',
      features: ['Consistent quality', 'Cost-effective', 'Wide compatibility'],
      rating: 4.7,
      reviews: 156,
      inStock: true,
      image: '/images/hplogo.png'
    },
    {
      id: 4,
      name: 'HP LaserJet Paper (Hi White)',
      gsm: '90gsm',
      description: 'Specialized paper optimized for laser printers',
      price: 1100,
      originalPrice: 1200,
      category: 'laser-paper',
      features: ['Laser optimized', 'High heat resistance', 'Superior clarity'],
      rating: 4.9,
      reviews: 67,
      inStock: true,
      image: '/images/hplogo.png'
    },
    {
      id: 5,
      name: 'HP Premium Photo Paper',
      gsm: '200gsm',
      description: 'High-quality photo paper for professional printing',
      price: 1500,
      originalPrice: 1800,
      category: 'photo-paper',
      features: ['Photo quality', 'High resolution', 'Long-lasting'],
      rating: 4.8,
      reviews: 43,
      inStock: false,
      image: '/images/hplogo.png'
    },
    {
      id: 6,
      name: 'HP Card Stock Paper',
      gsm: '250gsm',
      description: 'Heavy card stock for business cards and invitations',
      price: 1800,
      originalPrice: 2000,
      category: 'card-stock',
      features: ['Heavy weight', 'Professional finish', 'Durable'],
      rating: 4.6,
      reviews: 28,
      inStock: true,
      image: '/images/hplogo.png'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'copy-paper', name: 'Copy Paper' },
    { id: 'office-paper', name: 'Office Paper' },
    { id: 'everyday-paper', name: 'Everyday Paper' },
    { id: 'laser-paper', name: 'Laser Paper' },
    { id: 'photo-paper', name: 'Photo Paper' },
    { id: 'card-stock', name: 'Card Stock' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">HP Paper Products</h1>
              <p className="text-gray-600">Premium quality paper for all your needs</p>
            </div>
            <Link 
              href="/cart" 
              className="relative bg-primary-600 text-white p-3 rounded-2xl hover:bg-primary-700 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center text-gray-600">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 mx-auto">
                    <Image 
                      src="/images/hplogo.png" 
                      alt="HP Logo" 
                      width={96} 
                      height={96} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <p className="text-primary-600 font-semibold mb-2">{product.gsm}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary-600">Rs. {product.price}</span>
                      <span className="text-gray-400 line-through">Rs. {product.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      Save Rs. {product.originalPrice - product.price}
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    gsm: product.gsm,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image
                  })}
                  disabled={!product.inStock}
                  className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                    product.inStock
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 