'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, CheckCircle, Package, Truck, Shield, Award, Leaf, Users, Globe, Clock, ArrowLeft, Phone, Mail } from 'lucide-react'
import { Product } from '../../../types/product.types'

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Enhanced product data with new descriptions and images
  const productDatabase: Product[] = [
    {
      _id: '1',
      name: 'HP Business Copy Paper Hi White',
      slug: 'hp-business-copy-paper-hi-white',
      description: 'A lightweight and economical paper designed primarily for high-volume copying and draft printing within a business environment. The "Hi White" finish provides good contrast for clear, easy-to-read text, making it suitable for internal memos, drafts, and everyday black-and-white copies where paper weight is less critical. Its 70gsm weight offers basic handling properties.',
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
      seo: {
        title: 'HP Business Copy Paper Hi White 70gsm - Trade International',
        description: 'Premium HP Business Copy Paper Hi White 70gsm for high-volume copying and draft printing. Lightweight and economical with excellent contrast.',
        keywords: 'HP Business Copy Paper, Hi White, 70gsm, copy paper, business paper'
      },
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
      description: 'A versatile, standard-weight paper ideal for general office use. Slightly heavier than basic copy paper, it offers better opacity and a more substantial feel for everyday printing tasks like emails, reports, faxes, and copies. The "Hi White" surface ensures crisp text and clear black-and-white graphics, suitable for both laser and inkjet printers in typical office settings.',
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
      seo: {
        title: 'HP Office Paper Hi White 75gsm - Trade International',
        description: 'Premium HP Office Paper Hi White 75gsm for general office use. Versatile and standard-weight with excellent print quality.',
        keywords: 'HP Office Paper, Hi White, 75gsm, office paper, business paper'
      },
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
      description: 'Considered a standard, reliable paper weight, this 80gsm option is perfect for everyday printing needs at home or in the office. It provides a good balance of thickness, opacity (reducing show-through on double-sided prints), and smooth performance in most printers and copiers. The "Hi White" finish enhances print contrast, making it suitable for reports, presentations, flyers, and color documents where clarity is important.',
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
      seo: {
        title: 'HP Everyday Paper Hi White 80gsm - Trade International',
        description: 'Premium HP Everyday Paper Hi White 80gsm for everyday printing needs. Standard weight with excellent opacity and performance.',
        keywords: 'HP Everyday Paper, Hi White, 80gsm, everyday paper, reliable paper'
      },
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
      description: 'A heavier, more premium paper specifically optimized for LaserJet printers. The 90gsm weight gives documents a substantial, professional feel and increased opacity, ideal for double-sided printing, presentations, proposals, and important business documents. Its surface is engineered for excellent toner adhesion, ensuring sharp text and graphics produced by laser printers. The "Hi White" finish delivers maximum contrast and visual impact.',
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
      seo: {
        title: 'HP LaserJet Paper Hi White 90gsm - Trade International',
        description: 'Premium HP LaserJet Paper Hi White 90gsm optimized for laser printers. Professional feel with excellent toner adhesion.',
        keywords: 'HP LaserJet Paper, Hi White, 90gsm, laser printer paper, premium paper'
      },
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
  ]

  useEffect(() => {
    const fetchProduct = () => {
      try {
        setLoading(true)
        const slug = params.slug as string
        const foundProduct = productDatabase.find(p => p.slug === slug)
        
        if (foundProduct) {
          setProduct(foundProduct)
        } else {
          setError('Product not found')
        }
      } catch (err) {
        console.error('Error fetching product:', err)
        setError('Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.slug, productDatabase])

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

  const contactForProduct = () => {
    if (product) {
      window.location.href = `/contact?product=${encodeURIComponent(product.name)}`
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cool-gray py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue mx-auto mb-4"></div>
            <p className="text-charcoal text-lg">Loading product details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-cool-gray py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-error-red mb-4 text-lg">{error || 'Product not found'}</p>
            <Link href="/products" className="bg-electric-blue text-pure-white px-6 py-3 rounded-lg hover:bg-deep-indigo">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const displayPrice = product.salePrice || product.price
  const discountPercentage = getDiscountPercentage(product.price, product.salePrice)

  return (
    <div className="min-h-screen bg-cool-gray">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-charcoal">
            <Link href="/" className="hover:text-electric-blue">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-electric-blue">Products</Link>
            <span>/</span>
            <span className="text-electric-blue">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt || product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <Package className="h-24 w-24 text-gray-400" />
                </div>
              )}
            </div>
            
            {/* Additional Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt || `${product.name} - View ${index + 2}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-classic-black mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-golden-ochre fill-current" />
                  <span className="text-lg font-semibold text-charcoal">{product.rating.toFixed(1)}</span>
                  <span className="text-cool-gray">({product.reviewCount} reviews)</span>
                </div>
                {discountPercentage > 0 && (
                  <span className="bg-error-red text-pure-white px-3 py-1 rounded-full text-sm font-medium">
                    {discountPercentage}% OFF
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-electric-blue">{formatPrice(displayPrice)}</span>
                {product.salePrice && (
                  <span className="text-xl text-cool-gray line-through">{formatPrice(product.price)}</span>
                )}
              </div>

              <p className="text-lg text-charcoal leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-classic-black mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.attributes?.map((attribute, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-charcoal">{attribute}</span>
                  </div>
                )) || []}
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-classic-black mb-4">Quality Assurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-classic-black">FSC Certified</h4>
                    <p className="text-sm text-cool-gray">Sustainable forestry practices</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-classic-black">HP Quality</h4>
                    <p className="text-sm text-cool-gray">Global brand standards</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-classic-black">Brazilian Origin</h4>
                    <p className="text-sm text-cool-gray">Direct from Brazil</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-classic-black">Sole Distributor</h4>
                    <p className="text-sm text-cool-gray">Exclusive in Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={contactForProduct}
                className="w-full bg-electric-blue text-pure-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-deep-indigo transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Contact for Pricing & Availability</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full border-2 border-electric-blue text-electric-blue py-4 rounded-lg font-semibold text-lg hover:bg-electric-blue hover:text-pure-white transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Get Quote</span>
              </button>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-classic-black mb-4">Product Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-cool-gray">SKU:</span>
                  <span className="text-charcoal font-medium">{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cool-gray">Brand:</span>
                  <span className="text-charcoal font-medium">{product.brand?.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cool-gray">Category:</span>
                  <span className="text-charcoal font-medium capitalize">{product.category?.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cool-gray">Stock:</span>
                  <span className="text-charcoal font-medium">{product.stock} units available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-classic-black mb-4">Why Choose HP Paper?</h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Premium quality paper solutions with environmental responsibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-classic-black mb-2">FSC Certified</h3>
              <p className="text-cool-gray">Sustainable forestry practices and environmental responsibility</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-classic-black mb-2">Global Brand</h3>
              <p className="text-cool-gray">Trusted worldwide with consistent quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-classic-black mb-2">Brazilian Origin</h3>
              <p className="text-cool-gray">Direct from Brazil with guaranteed authenticity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-classic-black mb-2">Sole Distributor</h3>
              <p className="text-cool-gray">Exclusive distribution rights in Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
