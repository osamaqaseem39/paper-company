import Link from 'next/link'
import Image from 'next/image'
import { Package, Globe, Truck, Users, Award, CheckCircle, Building, FileText, ShoppingCart, Headphones, Shield, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading Services - Trade International | Paper & Board Solutions',
  description: 'Trade International specializes in trading various types of paper & board including coated paper, art paper, Kraft paper, offset paper, and more. Serving printers and packaging firms across Pakistan.',
  keywords: 'paper trading, board trading, coated paper, art paper, Kraft paper, offset paper, printing paper, packaging paper, Trade International',
}

export default function ServicesPage() {
  const paperTypes = [
    {
      category: 'Coated Papers',
      items: [
        'Coated Paper',
        'Coated Duplex Board',
        'Coated Art Paper',
        'Coated Art Card'
      ],
      description: 'High-quality coated papers for premium printing applications',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      category: 'Offset & Printing Papers',
      items: [
        'White Wood Free Offset Paper',
        'Printing Paper',
        'Ledger Paper',
        'Colored Bond Paper'
      ],
      description: 'Professional papers for commercial printing and office use',
      icon: Package,
      color: 'text-green-600'
    },
    {
      category: 'Specialty Papers',
      items: [
        'Kraft Paper',
        'Ivory Board',
        'Sticker Paper',
        'Bleach Board'
      ],
      description: 'Specialized papers for unique applications and packaging',
      icon: Award,
      color: 'text-purple-600'
    }
  ]

  const tradingServices = [
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Direct partnerships with leading paper manufacturers worldwide',
      features: [
        'International supplier network',
        'Quality assurance standards',
        'Competitive pricing',
        'Reliable supply chain'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics & Distribution',
      description: 'Efficient delivery and warehousing solutions across Pakistan',
      features: [
        'Nationwide distribution',
        'Warehouse facilities',
        'Express delivery options',
        'Inventory management'
      ]
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Expert guidance and technical assistance for all paper needs',
      features: [
        'Technical consultation',
        'Product recommendations',
        'Sample availability',
        'After-sales support'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and testing procedures',
      features: [
        'Quality testing',
        'Certification compliance',
        'Performance guarantees',
        'Regular quality audits'
      ]
    }
  ]

  const industries = [
    {
      name: 'Printing Industry',
      description: 'Commercial printers, publishing houses, and digital printing services',
      applications: ['Magazines', 'Catalogs', 'Brochures', 'Business Cards', 'Flyers']
    },
    {
      name: 'Packaging Industry',
      description: 'Food packaging, pharmaceutical packaging, and consumer goods',
      applications: ['Cartons', 'Labels', 'Wrappers', 'Boxes', 'Bags']
    },
    {
      name: 'Office & Stationery',
      description: 'Corporate offices, educational institutions, and government departments',
      applications: ['Letterheads', 'Forms', 'Notebooks', 'Envelopes', 'Reports']
    },
    {
      name: 'Publishing Industry',
      description: 'Book publishers, newspapers, and educational material producers',
      applications: ['Books', 'Newspapers', 'Textbooks', 'Journals', 'Manuals']
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Extensive Product Range',
      description: 'Comprehensive selection of paper and board products for all applications'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'All products meet international quality standards with performance guarantees'
    },
    {
      icon: CheckCircle,
      title: 'Technical Expertise',
      description: '40+ years of experience in paper trading and technical consultation'
    },
    {
      icon: CheckCircle,
      title: 'Reliable Supply',
      description: 'Consistent availability and timely delivery across Pakistan'
    },
    {
      icon: CheckCircle,
      title: 'Competitive Pricing',
      description: 'Best market rates through direct manufacturer relationships'
    },
    {
      icon: CheckCircle,
      title: 'Customer Support',
      description: 'Dedicated team providing personalized service and technical guidance'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-deep-indigo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
              Trading Services
            </h1>
            <p className="text-xl text-pure-white/90 max-w-4xl mx-auto leading-relaxed">
              Trade International is engaged in trading of various types of paper & board, serving printers and packaging firms across Pakistan with premium quality products and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Paper Trading Partner
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  With over 40 years of experience, Trade International has established itself as a leading paper trading company in Pakistan. We specialize in sourcing and distributing high-quality paper and board products from renowned international manufacturers.
                </p>
                <p className="text-lg leading-relaxed">
                  Our comprehensive product range includes coated papers, art papers, Kraft papers, offset papers, and specialty boards, serving the diverse needs of printing and packaging industries across the country.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary-600">
                  We are committed to providing the highest quality products with reliable service and competitive pricing.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paper Trading Excellence</h3>
                <p className="text-gray-600">
                  Comprehensive paper solutions for all your business needs with guaranteed quality and reliable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Types Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Paper & Board Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive range of high-quality paper and board products for all applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paperTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <type.icon className={`h-8 w-8 ${type.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{type.category}</h3>
                <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trading Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive trading solutions backed by decades of experience and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 text-center">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting diverse industries with specialized paper and board solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-white px-3 py-1 rounded-full text-sm text-primary-600 border border-primary-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trade International?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of experience and commitment to excellence in paper trading
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-deep-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Trade International?
          </h2>
          <p className="text-xl text-pure-white/90 mb-8">
            Get in touch with our expert team for all your paper and board trading needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-pure-white text-deep-indigo hover:bg-cool-gray font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Sales Team
            </Link>
            <Link href="/products" className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-indigo font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 