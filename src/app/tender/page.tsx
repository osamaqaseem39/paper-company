import Link from 'next/link'
import Image from 'next/image'
import { FileText, Building, Award, CheckCircle, Users, Globe, Shield, Clock, MapPin, Star, TrendingUp, Package, CheckSquare, Clipboard, Gavel } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tender Services - Trade International | Government & Private Sector Solutions',
  description: 'Trade International specializes in supplying to various government institutions and private sector companies through open tenders successfully all over Pakistan.',
  keywords: 'tender services, government tenders, private sector tenders, paper supply tenders, Pakistan tenders, Trade International tender solutions',
}

export default function TenderPage() {
  const tenderTypes = [
    {
      category: 'Government Tenders',
      description: 'Comprehensive paper supply solutions for government institutions',
      items: [
        'Federal Government Departments',
        'Provincial Government Offices',
        'Local Government Bodies',
        'Educational Institutions',
        'Healthcare Facilities',
        'Defense Organizations',
        'Public Sector Enterprises'
      ],
      icon: Building,
      color: 'text-blue-600'
    },
    {
      category: 'Private Sector Tenders',
      description: 'Paper supply solutions for corporate and private organizations',
      items: [
        'Corporate Offices',
        'Financial Institutions',
        'Manufacturing Companies',
        'Retail Chains',
        'Service Providers',
        'Educational Organizations',
        'Healthcare Providers'
      ],
      icon: Users,
      color: 'text-green-600'
    },
    {
      category: 'Specialized Tenders',
      description: 'Customized solutions for specific industry requirements',
      items: [
        'Bulk Paper Supply',
        'Specialty Paper Products',
        'Packaging Materials',
        'Office Supplies',
        'Printing Materials',
        'Custom Specifications'
      ],
      icon: Award,
      color: 'text-purple-600'
    }
  ]

  const tenderServices = [
    {
      icon: FileText,
      title: 'Tender Documentation',
      description: 'Complete tender preparation and submission services',
      features: [
        'Tender document preparation',
        'Technical specifications',
        'Price quotations',
        'Compliance documentation',
        'Submission coordination',
        'Follow-up management'
      ]
    },
    {
      icon: CheckSquare,
      title: 'Compliance Management',
      description: 'Ensuring all tender requirements are met',
      features: [
        'Regulatory compliance',
        'Quality standards',
        'Documentation verification',
        'Deadline management',
        'Requirement analysis',
        'Risk assessment'
      ]
    },
    {
      icon: Gavel,
      title: 'Bid Management',
      description: 'Strategic bidding and negotiation services',
      features: [
        'Competitive pricing',
        'Bid strategy development',
        'Market analysis',
        'Negotiation support',
        'Contract management',
        'Performance monitoring'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Maintaining high standards in tender delivery',
      features: [
        'Quality control procedures',
        'Performance guarantees',
        'Regular audits',
        'Customer satisfaction',
        'Continuous improvement',
        'Standards compliance'
      ]
    },
    {
      icon: Package,
      title: 'Logistics & Delivery',
      description: 'Efficient supply chain and delivery solutions',
      features: [
        'Nationwide distribution',
        'Timely delivery',
        'Inventory management',
        'Warehouse facilities',
        'Transport coordination',
        'Delivery tracking'
      ]
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated support throughout the tender process',
      features: [
        'Technical consultation',
        'Product guidance',
        'After-sales support',
        'Issue resolution',
        'Regular communication',
        'Performance reviews'
      ]
    }
  ]

  const sectors = [
    {
      name: 'Government Sector',
      description: 'Federal, provincial, and local government institutions',
      applications: ['Office Paper', 'Printing Supplies', 'Packaging Materials', 'Educational Materials', 'Healthcare Supplies', 'Administrative Materials'],
      icon: Building
    },
    {
      name: 'Educational Sector',
      description: 'Schools, colleges, universities, and training institutions',
      applications: ['Textbooks', 'Notebooks', 'Office Supplies', 'Art Materials', 'Packaging', 'Administrative Papers'],
      icon: Users
    },
    {
      name: 'Healthcare Sector',
      description: 'Hospitals, clinics, and medical facilities',
      applications: ['Medical Records', 'Packaging Materials', 'Administrative Papers', 'Office Supplies', 'Printing Materials', 'Custom Solutions'],
      icon: Shield
    },
    {
      name: 'Corporate Sector',
      description: 'Private companies and business organizations',
      applications: ['Office Supplies', 'Marketing Materials', 'Packaging Solutions', 'Printing Papers', 'Custom Products', 'Bulk Supplies'],
      icon: Star
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Successful tender execution across Pakistan for 40+ years'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Solutions',
      description: 'End-to-end tender services from preparation to delivery'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'All products meet international quality standards'
    },
    {
      icon: CheckCircle,
      title: 'Competitive Pricing',
      description: 'Best market rates through efficient supply chain management'
    },
    {
      icon: CheckCircle,
      title: 'Nationwide Coverage',
      description: 'Services available across all provinces of Pakistan'
    },
    {
      icon: CheckCircle,
      title: 'Expert Team',
      description: 'Experienced professionals with deep tender knowledge'
    }
  ]

  const successMetrics = [
    { number: '1000+', label: 'Successful Tenders', icon: CheckSquare },
    { number: '40+', label: 'Years Experience', icon: Clock },
    { number: 'All Provinces', label: 'Coverage', icon: MapPin },
    { number: '95%', label: 'Success Rate', icon: TrendingUp }
  ]

  const tenderProcess = [
    {
      step: '1',
      title: 'Tender Identification',
      description: 'Monitoring and identifying relevant tender opportunities',
      details: ['Market research', 'Tender tracking', 'Opportunity analysis', 'Feasibility assessment']
    },
    {
      step: '2',
      title: 'Documentation & Preparation',
      description: 'Comprehensive tender document preparation',
      details: ['Technical specifications', 'Price quotations', 'Compliance documents', 'Quality certifications']
    },
    {
      step: '3',
      title: 'Submission & Follow-up',
      description: 'Timely submission and active follow-up',
      details: ['Document submission', 'Application tracking', 'Clarification requests', 'Status monitoring']
    },
    {
      step: '4',
      title: 'Execution & Delivery',
      description: 'Successful execution and timely delivery',
      details: ['Order processing', 'Quality control', 'Delivery coordination', 'Performance monitoring']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tender Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trade International is engaged in supplying to various government institutions and private sector companies through open tenders successfully all over Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Tender Partner
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  With over 40 years of experience in tender management, Trade International has established itself as a leading supplier to government institutions and private sector companies across Pakistan.
                </p>
                <p className="text-lg leading-relaxed">
                  Our comprehensive tender services cover everything from document preparation and submission to successful execution and delivery, ensuring complete satisfaction for our clients.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary-600">
                  We specialize in paper supply tenders with a proven track record of successful execution nationwide.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gavel className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tender Excellence</h3>
                <p className="text-gray-600">
                  Comprehensive tender solutions with guaranteed success and quality delivery across Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tender Types Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Tender Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized tender services for government and private sector organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tenderTypes.map((type, index) => (
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

      {/* Tender Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tender Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end tender solutions backed by decades of experience and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenderServices.map((service, index) => (
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

      {/* Sectors Served Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tender solutions for diverse industry sectors across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mr-4">
                    <sector.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{sector.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.applications.map((app, appIndex) => (
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

      {/* Success Metrics Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Tender Success
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Proven track record of successful tender execution across Pakistan
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

      {/* Tender Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tender Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to successful tender execution and delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tenderProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{process.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{process.description}</p>
                <ul className="space-y-2">
                  {process.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-600 text-center">
                      • {detail}
                    </li>
                  ))}
                </ul>
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
              Why Choose Trade International for Tenders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of experience and commitment to excellence in tender services
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Trade International?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get in touch with our expert team for all your tender and paper supply needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Tender Team
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