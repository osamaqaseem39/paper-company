'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart, Filter, Search, Grid, List } from 'lucide-react'

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'copy-paper', name: 'Copy Paper' },
    { id: 'office-paper', name: 'Office Paper' },
    { id: 'laser-jet', name: 'Laser Jet Paper' },
    { id: 'photo-paper', name: 'Photo Paper' },
    { id: 'card-stock', name: 'Card Stock' }
  ]

  const products = [
    {
      id: 1,
      name: 'HP Business Copy Paper',
      category: 'copy-paper',
      gsm: '70gsm',
      size: 'A4',
      sheets: '500 sheets',
      description: 'High-quality copy paper for everyday business use with excellent print quality',
      price: 850,
      originalPrice: 950,
      rating: 4.8,
      reviews: 124,
      inStock: true,
      bestSeller: true,
      image: '/images/product-1.jpg'
    },
    {
      id: 2,
      name: 'HP Office Paper',
      category: 'office-paper',
      gsm: '75gsm',
      size: 'A4',
      sheets: '500 sheets',
      description: 'Premium office paper with superior brightness and smooth finish',
      price: 920,
      originalPrice: 1020,
      rating: 4.9,
      reviews: 89,
      inStock: true,
      bestSeller: true,
      image: '/images/product-2.jpg'
    },
    {
      id: 3,
      name: 'HP Laser Jet Paper',
      category: 'laser-jet',
      gsm: '90gsm',
      size: 'A4',
      sheets: '500 sheets',
      description: 'Specialized paper for laser printers with optimal performance',
      price: 1100,
      originalPrice: 1200,
      rating: 4.7,
      reviews: 156,
      inStock: true,
      bestSeller: false,
      image: '/images/product-3.jpg'
    },
    {
      id: 4,
      name: 'HP Everyday Paper',
      category: 'copy-paper',
      gsm: '80gsm',
      size: 'A4',
      sheets: '500 sheets',
      description: 'Reliable everyday paper for all your printing needs',
      price: 780,
      originalPrice: 880,
      rating: 4.6,
      reviews: 203,
      inStock: true,
      bestSeller: false,
      image: '/images/product-4.jpg'
    },
    {
      id: 5,
      name: 'HP Premium Photo Paper',
      category: 'photo-paper',
      gsm: '200gsm',
      size: 'A4',
      sheets: '50 sheets',
      description: 'High-quality photo paper for vibrant photo printing',
      price: 2500,
      originalPrice: 2800,
      rating: 4.9,
      reviews: 67,
      inStock: true,
      bestSeller: false,
      image: '/images/product-5.jpg'
    },
    {
      id: 6,
      name: 'HP Card Stock',
      category: 'card-stock',
      gsm: '250gsm',
      size: 'A4',
      sheets: '100 sheets',
      description: 'Heavy card stock for business cards and invitations',
      price: 1800,
      originalPrice: 2000,
      rating: 4.8,
      reviews: 45,
      inStock: false,
      bestSeller: false,
      image: '/images/product-6.jpg'
    }
  ]

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const addToCart = (productId: number) => {
    // Handle add to cart functionality
    console.log('Added to cart:', productId)
  }

  const toggleWishlist = (productId: number) => {
    // Handle wishlist functionality
    console.log('Toggled wishlist:', productId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop HP Papers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Browse our complete collection of premium HP Papers. Find the perfect paper 
            solution for your business or personal needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-700' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GSM</label>
                    <div className="space-y-2">
                      {['70gsm', '75gsm', '80gsm', '90gsm', '200gsm', '250gsm'].map((gsm) => (
                        <label key={gsm} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                          <span className="ml-2 text-sm text-gray-600">{gsm}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <div className="space-y-2">
                      {['A4', 'A3', 'Letter', 'Legal'].map((size) => (
                        <label key={size} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                          <span className="ml-2 text-sm text-gray-600">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-600">Under Rs. 1000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-600">Rs. 1000 - Rs. 2000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-600">Over Rs. 2000</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex-1 relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors duration-200 ${
                        viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors duration-200 ${
                        viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}>
                  {product.bestSeller && (
                    <div className="bg-accent-500 text-white text-xs font-medium px-3 py-1 text-center">
                      Best Seller
                    </div>
                  )}
                  
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0 w-48' : ''}`}>
                    <div className="bg-gray-100 h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">HP</span>
                        </div>
                        <p className="text-sm text-gray-600">{product.gsm}</p>
                        <p className="text-xs text-gray-500">{product.size}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{product.sheets}</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-600">Rs. {product.price}</span>
                        <span className="text-gray-400 line-through text-sm">Rs. {product.originalPrice}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-xs text-gray-400">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => addToCart(product.id)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                        product.inStock
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? (
                        <div className="flex items-center justify-center space-x-2">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </div>
                      ) : (
                        'Out of Stock'
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-3 py-2 bg-primary-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 