import Link from 'next/link'
import Image from 'next/image'
import { Globe, Building, Users, Award, CheckCircle, FileText, ShoppingCart, Headphones, Shield, Clock, MapPin, Star, TrendingUp, Package } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indenting & Representation Services - Trade International | Global Paper Partnerships',
  description: 'Trade International represents over 20 companies worldwide including mills and export houses from Japan, Korea, China, Indonesia, United States, and European countries.',
  keywords: 'indenting services, paper representation, global partnerships, international mills, export houses, Trade International, paper trading representation',
}

export default function IndentingPage() {
  const globalPartners = [
    {
      region: 'Asia Pacific',
      countries: [
        { name: 'Japan', description: 'Premium quality paper mills and advanced manufacturing technology', specialties: ['High-end coated papers', 'Specialty boards', 'Premium art papers'] },
        { name: 'Korea', description: 'Innovative paper solutions and sustainable manufacturing', specialties: ['Eco-friendly papers', 'Digital printing papers', 'Packaging boards'] },
        { name: 'China', description: 'Large-scale production and competitive pricing', specialties: ['Bulk paper supply', 'Cost-effective solutions', 'Wide variety options'] },
        { name: 'Indonesia', description: 'Sustainable forestry and eco-friendly paper products', specialties: ['Recycled papers', 'Sustainable boards', 'Green packaging'] }
      ],
      icon: Globe,
      color: 'text-blue-600'
    },
    {
      region: 'North America',
      countries: [
        { name: 'United States', description: 'Leading paper technology and premium quality standards', specialties: ['Premium office papers', 'Technical papers', 'Innovation-driven products'] }
      ],
      icon: Building,
      color: 'text-green-600'
    },
    {
      region: 'Europe',
      countries: [
        { name: 'Germany', description: 'Precision engineering and high-quality paper manufacturing', specialties: ['Technical papers', 'Premium boards', 'Specialty applications'] },
        { name: 'Finland', description: 'Sustainable forestry and eco-friendly paper solutions', specialties: ['Sustainable papers', 'Forest-certified products', 'Green technology'] },
        { name: 'Sweden', description: 'Innovation in paper technology and environmental responsibility', specialties: ['Advanced paper technology', 'Eco-friendly solutions', 'Quality assurance'] },
        { name: 'Italy', description: 'Design-focused papers and luxury packaging solutions', specialties: ['Designer papers', 'Luxury packaging', 'Creative solutions'] }
      ],
      icon: Star,
      color: 'text-purple-600'
    }
  ]

  const representationServices = [
    {
      icon: Users,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with leading paper manufacturers worldwide',
      features: [
        'Exclusive representation agreements',
        'Direct manufacturer relationships',
        'Priority access to new products',
        'Collaborative product development'
      ]
    },
    {
      icon: Globe,
      title: 'Global Sourcing Network',
      description: 'Access to over 20 international companies and mills',
      features: [
        'Diversified supplier base',
        'Geographic distribution',
        'Quality variety options',
        'Competitive pricing access'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and certification compliance',
      features: [
        'International quality standards',
        'Regular quality audits',
        'Performance testing',
        'Certification compliance'
      ]
    },
    {
      icon: Users,
      title: 'Technical Support',
      description: 'Expert guidance and technical consultation services',
      features: [
        'Product specifications',
        'Application guidance',
        'Technical documentation',
        'Performance optimization'
      ]
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'Efficient logistics and inventory management solutions',
      features: [
        'Order management',
        'Inventory tracking',
        'Delivery coordination',
        'Supply optimization'
      ]
    },
    {
      icon: Award,
      title: 'Market Intelligence',
      description: 'Industry insights and market trend analysis',
      features: [
        'Market research',
        'Trend analysis',
        'Competitive intelligence',
        'Strategic recommendations'
      ]
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Global Market Access',
      description: 'Direct access to international paper markets and manufacturers'
    },
    {
      icon: CheckCircle,
      title: 'Quality Diversity',
      description: 'Wide range of quality standards and product specifications'
    },
    {
      icon: CheckCircle,
      title: 'Competitive Pricing',
      description: 'Best market rates through direct manufacturer relationships'
    },
    {
      icon: CheckCircle,
      title: 'Innovation Access',
      description: 'Early access to new products and technologies'
    },
    {
      icon: CheckCircle,
      title: 'Technical Expertise',
      description: '40+ years of experience in international paper representation'
    },
    {
      icon: CheckCircle,
      title: 'Reliable Supply',
      description: 'Consistent availability from multiple global sources'
    }
  ]

  const successMetrics = [
    { number: '20+', label: 'Global Companies Represented', icon: Building },
    { number: '15+', label: 'Countries Sourced From', icon: MapPin },
    { number: '40+', label: 'Years of Experience', icon: Clock },
    { number: '1000+', label: 'Successful Partnerships', icon: Users }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Indenting & Representation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trade International represents more than 20 companies worldwide, consisting of various mills & export houses from all over the world including Japan, Korea, China, Indonesia, United States, and European countries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Global Paper Partnership Gateway
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  As a leading indenting house, Trade International serves as the bridge between Pakistani businesses and world-class paper manufacturers. Our extensive network spans across continents, providing access to premium quality papers and innovative solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  We represent mills and export houses from Japan, Korea, China, Indonesia, United States, and various European countries, ensuring our clients have access to the best products and technologies available in the global market.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary-600">
                  Our representation services ensure quality, reliability, and competitive pricing for all your paper sourcing needs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Representation Excellence</h3>
                <p className="text-gray-600">
                  Connecting Pakistani businesses with world-class paper manufacturers through strategic partnerships and reliable representation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partners Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Partnership Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading paper manufacturers and export houses worldwide
            </p>
          </div>
          
          <div className="space-y-12">
            {globalPartners.map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mr-6`}>
                    <region.icon className={`h-8 w-8 ${region.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{region.region}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {region.countries.map((country, countryIndex) => (
                    <div key={countryIndex} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{country.name}</h4>
                      <p className="text-gray-600 mb-4 text-sm">{country.description}</p>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2 text-sm">Specialties:</h5>
                        <ul className="space-y-1">
                          {country.specialties.map((specialty, specialtyIndex) => (
                            <li key={specialtyIndex} className="text-xs text-gray-600 flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span>{specialty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representation Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Representation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive representation solutions backed by decades of international experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {representationServices.map((service, index) => (
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

      {/* Success Metrics Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Representation Success
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Proven track record of successful international partnerships and representation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-primary-100 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our Representation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why businesses choose Trade International for their international paper sourcing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
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

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Representation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we connect you with the best international paper manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-600">Understanding your specific paper requirements and quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partner Selection</h3>
              <p className="text-gray-600">Identifying the best manufacturers from our global network</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Negotiation & Order</h3>
              <p className="text-gray-600">Securing the best terms and placing orders with manufacturers</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Ensuring product quality and timely delivery to your facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Access Global Paper Markets?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Partner with Trade International for comprehensive representation services and global paper sourcing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Our Team
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 