'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Eye, Phone, Mail, Filter, Search, Grid, List } from 'lucide-react'
import { productService } from '../../services/productService'
import { Product } from '../../types/product.types'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'copy-paper', label: 'Copy Paper' },
    { value: 'office-paper', label: 'Office Paper' },
    { value: 'laser-jet', label: 'Laser Jet Paper' },
    { value: 'premium', label: 'Premium Paper' }
  ]

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await productService.getFeaturedProducts(20)
      
      if (response.success && response.data) {
        setProducts(response.data.products)
      } else {
        // Fallback to comprehensive mock data
        setProducts([
          {
            _id: '1',
            name: 'HP Business Copy Paper Hi White',
            slug: 'hp-business-copy-paper-hi-white',
            description: 'A lightweight and economical paper designed primarily for high-volume copying and draft printing within a business environment. The "Hi White" finish provides good contrast for clear, easy-to-read text, making it suitable for internal memos, drafts, and everyday black-and-white copies where paper weight is less critical.',
            shortDescription: 'Lightweight and economical paper for high-volume copying and draft printing',
            sku: 'HP-BCP-70',
            price: 950,
            salePrice: 850,
            stock: 100,
            minStock: 10,
            images: [
              { url: '/images/HP Business Copy Paper blue.jpg', alt: 'HP Business Copy Paper Hi White' },
              { url: '/images/HP Business Copy Paper 2 blue.webp', alt: 'HP Business Copy Paper Hi White - Alternative view' }
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
            description: 'A versatile, standard-weight paper ideal for general office use. Slightly heavier than basic copy paper, it offers better opacity and a more substantial feel for everyday printing tasks like emails, reports, faxes, and copies. The "Hi White" surface ensures crisp text and clear black-and-white graphics.',
            shortDescription: 'Versatile, standard-weight paper ideal for general office use with superior brightness',
            sku: 'HP-OP-75',
            price: 1020,
            salePrice: 920,
            stock: 80,
            minStock: 10,
            images: [
              { url: '/images/HP Office paper (green).jpg', alt: 'HP Office Paper Hi White' },
              { url: '/images/HP Office paper (green)#.png', alt: 'HP Office Paper Hi White - Alternative view' }
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
            name: 'HP Everyday Paper Hi White',
            slug: 'hp-everyday-paper-hi-white',
            description: 'Considered a standard, reliable paper weight, this 80gsm option is perfect for everyday printing needs at home or in the office. It provides a good balance of thickness, opacity (reducing show-through on double-sided prints), and smooth performance in most printers and copiers.',
            shortDescription: 'Standard, reliable 80gsm paper perfect for everyday printing needs',
            sku: 'HP-EDP-80',
            price: 1100,
            salePrice: 990,
            stock: 90,
            minStock: 10,
            images: [
              { url: '/images/HP Everyday paper (orange).webp', alt: 'HP Everyday Paper Hi White' },
              { url: '/images/HP Everyday paper (orange) 2.jpg', alt: 'HP Everyday Paper Hi White - Alternative view' }
            ],
            category: 'everyday-paper',
            brand: 'hp',
            tags: ['everyday-paper', 'hi-white', '80gsm', 'reliable'],
            attributes: ['80gsm', 'Hi White', 'Everyday Grade', 'Reliable'],
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
            name: 'HP LaserJet Paper Hi White',
            slug: 'hp-laserjet-paper-hi-white',
            description: 'A heavier, more premium paper specifically optimized for LaserJet printers. The 90gsm weight gives documents a substantial, professional feel and increased opacity, ideal for double-sided printing, presentations, proposals, and important business documents. Its surface is engineered for excellent toner adhesion.',
            shortDescription: 'Premium 90gsm paper specifically optimized for LaserJet printers',
            sku: 'HP-LJP-90',
            price: 1200,
            salePrice: 1100,
            stock: 60,
            minStock: 10,
            images: [
              { url: '/images/HP Laserjet paper ( dark green).jpg', alt: 'HP LaserJet Paper Hi White' },
              { url: '/images/HP Laserjet paper ((dark green)).jpg', alt: 'HP LaserJet Paper Hi White - Alternative view' }
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
      console.error('Error fetching products:', err)
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  const filterProducts = useCallback(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory])

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

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [filterProducts])

  if (loading) {
    return (
      <div className="min-h-screen bg-cool-gray py-20">
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
      <div className="min-h-screen bg-cool-gray py-20">
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
    <div className="min-h-screen bg-cool-gray">
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

      {/* Filters and Search */}
      <div className="bg-pure-white border-b border-cool-gray/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/50" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-cool-gray/50 rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-charcoal" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-cool-gray/50 rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-electric-blue text-pure-white' 
                    : 'bg-cool-gray text-charcoal hover:bg-electric-blue/10'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-electric-blue text-pure-white' 
                    : 'bg-cool-gray text-charcoal hover:bg-electric-blue/10'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-charcoal">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            : "space-y-6"
        }>
          {filteredProducts.map((product) => {
            const discountPercentage = getDiscountPercentage(product.price, product.salePrice)
            const displayPrice = product.salePrice || product.price
            
            return (
              <div key={product._id} className={viewMode === 'grid' ? "group" : "group"}>
                <div className={`bg-pure-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cool-gray/50 overflow-hidden ${
                  viewMode === 'list' ? 'flex' : ''
                }`}>
                  {/* Product Image */}
                  <div className={`relative bg-cool-gray overflow-hidden ${
                    viewMode === 'list' ? 'w-64 h-48 flex-shrink-0' : 'h-64'
                  }`}>
                    <Link href={`/products/${product.slug}`} className="block h-full">
                      <div className="relative h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
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
                    </Link>
                    
                    {/* Discount Badge */}
                    {discountPercentage > 0 && (
                      <div className="absolute top-2 right-2 bg-golden-ochre text-pure-white text-xs font-bold px-2 py-1 rounded">
                        -{discountPercentage}%
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : 'text-center'}`}>
                    <h3 className={`text-xl font-bold text-classic-black mb-3 group-hover:text-electric-blue transition-colors duration-300 ${
                      viewMode === 'list' ? 'text-left' : ''
                    }`}>
                      {product.name}
                    </h3>
                    
                    <p className={`text-sm text-charcoal mb-4 ${
                      viewMode === 'list' ? 'text-left' : 'line-clamp-2'
                    }`}>
                      {product.shortDescription || product.description}
                    </p>
                    
                    <div className={`flex items-center space-x-2 mb-4 ${
                      viewMode === 'list' ? 'justify-start' : 'justify-center'
                    }`}>
                      <span className="text-2xl font-bold text-electric-blue">{formatPrice(displayPrice)}</span>
                      {product.salePrice && (
                        <span className="text-cool-gray line-through text-sm">{formatPrice(product.price)}</span>
                      )}
                    </div>
                    
                    <div className={`flex items-center space-x-1 mb-4 ${
                      viewMode === 'list' ? 'justify-start' : 'justify-center'
                    }`}>
                      <Star className="h-4 w-4 text-golden-ochre fill-current" />
                      <span className="text-sm text-charcoal">{product.rating.toFixed(1)}</span>
                      <span className="text-xs text-cool-gray">({product.reviewCount})</span>
                    </div>
                    
                    <div className={`flex space-x-2 ${viewMode === 'list' ? 'justify-start' : 'justify-center'}`}>
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Details</span>
                      </Link>
                      
                      <button
                        onClick={() => contactForProduct(product)}
                        className="flex-1 bg-golden-ochre hover:bg-golden-ochre/90 text-pure-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-cool-gray rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-charcoal/50" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">No products found</h3>
            <p className="text-charcoal mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="bg-electric-blue text-pure-white px-6 py-3 rounded-lg hover:bg-deep-indigo"
            >
              Clear Filters
            </button>
          </div>
        )}
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