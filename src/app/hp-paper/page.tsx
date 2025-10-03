import Link from 'next/link'
import Image from 'next/image'
import { Award, CheckCircle, Users, Globe, Shield, Clock, MapPin, Star, TrendingUp, Package, CheckSquare, Leaf, Zap, Target, Heart, Shield as ShieldIcon } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HP Paper Pakistan - Trade International | Official Sole Representatives',
  description: 'Trade International is the sole representative of HP Paper from Brazil in Pakistan. Premium cut-size paper for office use with FSC certification and ethical forestry practices.',
  keywords: 'HP Paper Pakistan, HP Business Copy Paper, HP Office Paper, HP LaserJet Paper, FSC certified paper, Brazil paper, Trade International',
}

export default function HPPaperPage() {
  const hpPaperProducts = [
    {
      name: 'HP Business Copy Paper',
      description: 'Premium quality copy paper for everyday business use',
      features: [
        'High brightness and opacity',
        'Smooth surface for crisp printing',
        'Compatible with all printers',
        'Ideal for documents and reports',
        'Professional appearance',
        'Cost-effective solution'
      ],
      icon: Package,
      color: 'text-blue-600',
      gsm: '70gsm',
      applications: ['Office printing', 'Document copying', 'Reports', 'Letters', 'Forms', 'General office use']
    },
    {
      name: 'HP Office Paper (Hi White)',
      description: 'Enhanced white paper for premium office applications',
      features: [
        'Superior brightness (Hi White)',
        'Excellent print quality',
        'Professional finish',
        'Long-lasting performance',
        'Consistent quality',
        'Premium office standard'
      ],
      icon: Star,
      color: 'text-green-600',
      gsm: '75gsm',
      applications: ['Premium documents', 'Business presentations', 'Marketing materials', 'Executive reports', 'Client communications', 'Professional printing']
    },
    {
      name: 'HP Everyday Paper (Hi White)',
      description: 'Reliable everyday paper for consistent performance',
      features: [
        'Consistent quality',
        'Reliable performance',
        'Cost-effective',
        'Wide compatibility',
        'Smooth printing',
        'Everyday reliability'
      ],
      icon: Target,
      color: 'text-purple-600',
      gsm: '70gsm',
      applications: ['Daily printing', 'Internal documents', 'Notes', 'Drafts', 'General office work', 'Routine printing']
    },
    {
      name: 'HP LaserJet Paper (Hi White)',
      description: 'Specialized paper optimized for laser printers',
      features: [
        'Laser printer optimized',
        'High heat resistance',
        'Superior print clarity',
        'Professional finish',
        'Consistent feeding',
        'Long-lasting results'
      ],
      icon: Zap,
      color: 'text-orange-600',
      gsm: '90gsm',
      applications: ['Laser printing', 'High-volume printing', 'Professional documents', 'Reports', 'Presentations', 'Quality printing']
    }
  ]

  const fscBenefits = [
    {
      icon: Leaf,
      title: 'Forest Stewardship Council (FSC) Certified',
      description: 'Ensures responsible forest management and sustainable practices'
    },
    {
      icon: Shield,
      title: 'Ethical Deforestation Practices',
      description: 'Committed to preserving forests and biodiversity'
    },
    {
      icon: Heart,
      title: 'Environmental Responsibility',
      description: 'Sustainable paper production with minimal environmental impact'
    },
    {
      icon: Globe,
      title: 'Global Sustainability Standards',
      description: 'Meeting international environmental and social standards'
    }
  ]

  const qualityFeatures = [
    {
      icon: CheckCircle,
      title: 'Premium Quality',
      description: 'HP Paper maintains the highest quality standards globally'
    },
    {
      icon: CheckCircle,
      title: 'FSC Certification',
      description: 'Forest Stewardship Council certified for sustainability'
    },
    {
      icon: CheckCircle,
      title: 'Brazilian Origin',
      description: 'Direct from Brazil with guaranteed authenticity'
    },
    {
      icon: CheckCircle,
      title: 'Office Optimized',
      description: 'Specifically designed for office and business use'
    },
    {
      icon: CheckCircle,
      title: 'Printer Compatible',
      description: 'Compatible with all major printer brands and models'
    },
    {
      icon: CheckCircle,
      title: 'Consistent Performance',
      description: 'Reliable quality and performance in every sheet'
    }
  ]

  const applications = [
    {
      name: 'Office & Business',
      description: 'Professional documents and business communications',
      uses: ['Reports', 'Presentations', 'Letters', 'Forms', 'Contracts', 'Proposals']
    },
    {
      name: 'Printing & Publishing',
      description: 'High-quality printing for professional publications',
      uses: ['Brochures', 'Catalogs', 'Manuals', 'Newsletters', 'Flyers', 'Business cards']
    },
    {
      name: 'Educational',
      description: 'Academic and educational material printing',
      uses: ['Textbooks', 'Worksheets', 'Study materials', 'Research papers', 'Academic reports', 'Educational content']
    },
    {
      name: 'Government & Corporate',
      description: 'Official documents and corporate communications',
      uses: ['Official documents', 'Corporate reports', 'Policy documents', 'Compliance materials', 'Executive communications', 'Legal documents']
    }
  ]

  const whyHP = [
    {
      icon: Award,
      title: 'Global Brand Recognition',
      description: 'HP Paper is a well-known and trusted brand worldwide'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Consistent high quality with every purchase'
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'FSC certified with sustainable forestry practices'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Proven track record of customer satisfaction globally'
    }
  ]

  const successMetrics = [
    { number: 'Sole', label: 'Distributor in Pakistan', icon: Award },
    { number: 'FSC', label: 'Certified', icon: Leaf },
    { number: 'Brazil', label: 'Direct Source', icon: Globe },
    { number: '40+', label: 'Years Experience', icon: Clock }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              HP Paper Pakistan
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trade International is the sole distributor of HP Paper from Brazil in Pakistan. HP Paper is a well-known brand globally, certified from Forest Stewardship Council (FSC) which assures the paper company to be ethically sound in regards to their de-forestation.
            </p>
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-2">
                HP Papers, Get it Right the First Time.™
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Official Sole Distributor
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Trade International is proud to be the exclusive sole distributor of HP Paper from Brazil in Pakistan. Our partnership brings you premium quality cut-size paper specifically designed for office purposes.
                </p>
                <p className="text-lg leading-relaxed">
                  HP Paper is globally recognized for its commitment to quality, sustainability, and environmental responsibility. With FSC certification, you can trust that every sheet meets the highest ethical and environmental standards.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary-600">
                  Experience the difference with HP Paper - where quality meets responsibility.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6">
                  <Image 
                    src="/images/hplogo.png" 
                    alt="HP Logo" 
                    width={96} 
                    height={96} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Distribution</h3>
                <p className="text-gray-600">
                  Sole distributor of HP Paper from Brazil in Pakistan, bringing you premium quality and sustainable paper solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HP Paper Products Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HP Paper Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium cut-size paper solutions for all your office and business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hpPaperProducts.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mr-4`}>
                    <product.icon className={`h-8 w-8 ${product.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-primary-600 font-semibold">{product.gsm}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-primary-100 px-3 py-1 rounded-full text-sm text-primary-700 border border-primary-200">
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

      {/* FSC Certification Section */}
      <section className="section-padding bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FSC Certification & Environmental Responsibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to sustainable forestry and ethical paper production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fscBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HP Paper?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality and sustainable paper solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications & Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile paper solutions for diverse business and office needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{application.name}</h3>
                <p className="text-gray-600 mb-6">{application.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Common Uses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {application.uses.map((use, useIndex) => (
                      <span key={useIndex} className="bg-primary-100 px-3 py-1 rounded-full text-sm text-primary-700 border border-primary-200">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="section-padding bg-deep-indigo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our HP Paper Success
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Exclusive representation with proven results across Pakistan
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

      {/* Why HP Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why HP Paper Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global recognition and proven quality for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyHP.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience HP Paper Quality
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get it right the first time with HP Paper from Brazil, exclusively distributed by Trade International
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Sales Team
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View HP Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 