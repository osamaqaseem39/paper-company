import Link from 'next/link'
import { CheckCircle, Star, Truck, Shield, Award, Users, Globe, Clock, Building, TrendingUp, FileText, MapPin, Target, Eye, Heart, Phone, Mail, MapPin as MapPinIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'HP Papers Pakistan - Official Sole Distributor | Trade International',
  description: 'Official sole distributor of HP Papers in Pakistan. Premium quality paper products with 40+ years of experience. Get it right the first time with HP Papers from Trade International.',
  keywords: 'HP Papers, Pakistan, paper distributor, office paper, printing paper, copy paper, Trade International, Lahore, paper merchant, paper trading',
  openGraph: {
    title: 'HP Papers Pakistan - Official Sole Distributor',
    description: 'Official sole distributor of HP Papers in Pakistan. Premium quality paper products with 40+ years of experience.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HP Papers Pakistan - Official Sole Distributor',
    description: 'Official sole distributor of HP Papers in Pakistan. Premium quality paper products with 40+ years of experience.',
  },
  alternates: {
    canonical: 'https://tradeinternational.net.pk',
  },
}

export default function Home() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Official HP Papers with guaranteed quality and performance'
    },
    {
      icon: Shield,
      title: 'Trusted Brand',
      description: 'Over 40 years of excellence in paper manufacturing and trading'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick delivery across Pakistan with reliable logistics network'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Professional team to assist with your paper needs'
    }
  ]

  const services = [
    {
      icon: Building,
      title: 'Trading',
      description: 'Comprehensive paper trading services with global suppliers',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Indenting/Representation',
      description: 'Official representation of over 20 international paper companies',
      color: 'text-green-600'
    },
    {
      icon: FileText,
      title: 'Tender',
      description: 'Specialized tender services for government and corporate clients',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'HP Paper Pakistan',
      description: 'Official sole distributor of HP Papers in Pakistan',
      color: 'text-primary-600'
    }
  ]

  const stats = [
    { number: '40+', label: 'Years Experience', icon: Clock },
    { number: '20+', label: 'International Companies', icon: Globe },
    { number: '1000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Cities Covered', icon: MapPin }
  ]

  const coreValues = [
    {
      icon: Heart,
      title: 'Honesty',
      description: 'Our firm commitment that sets no limits to our success'
    },
    {
      icon: Target,
      title: 'Sustainable Management',
      description: 'Growing and progressing while maintaining long-term success'
    },
    {
      icon: Star,
      title: 'Excellent Services',
      description: 'Enhancing customer satisfaction through superior quality'
    },
    {
      icon: Users,
      title: 'Openness & Respect',
      description: 'Managing with mutual respect to gain public trust'
    }
  ]

  const popularProducts = [
    {
      name: 'HP Business Copy Paper',
      gsm: '70gsm',
      description: 'High-quality copy paper for everyday business use',
      image: '/images/product-1.jpg',
      price: 'Rs. 850',
      originalPrice: 'Rs. 950'
    },
    {
      name: 'HP Office Paper',
      gsm: '75gsm',
      description: 'Premium office paper with excellent print quality',
      image: '/images/product-2.jpg',
      price: 'Rs. 920',
      originalPrice: 'Rs. 1020'
    },
    {
      name: 'HP Laser Jet Paper',
      gsm: '90gsm',
      description: 'Specialized paper for laser printers and copiers',
      image: '/images/product-3.jpg',
      price: 'Rs. 1100',
      originalPrice: 'Rs. 1200'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Trade International
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Sole Distributor of HP Papers in Pakistan
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mb-4 mx-auto leading-relaxed">
                Trade International is an independent paper merchant company with the team consisting of experience of over 40 years. 
                The company was started by (Late) MR MAZHAR HUSSAIN in 1990 and then succeeded by MR ZAHID HUSSAIN leading it since.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-center">
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="w-[500px] h-[250px] mx-auto mb-6 overflow-hidden rounded-lg">
                    <Image 
                      src="/images/heroimage.jpg" 
                      alt="HP Papers Hero" 
                      width={700} 
                      height={450} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium HP Papers</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Premium quality guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Compatible with all printers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Fast delivery nationwide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Official warranty support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular HP Paper Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular paper products trusted by businesses across Pakistan
            </p>
          </div>
          
          {/* Products Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
              {popularProducts.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-80 group">
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
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
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Product Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      
                      {/* View Details Button */}
                      <Link 
                        href="/products" 
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-x-2"
                      >
                        <span>View Details</span>
                        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {popularProducts.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-500 transition-colors duration-300 focus:outline-none"
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
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trade International is an independent paper merchant company with over 40 years of experience in the paper industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Company Story
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  The company was started by (Late) MR MAZHAR HUSSAIN in 1990 and then succeeded by MR ZAHID HUSSAIN leading it since. 
                  Over the period of time, Trade International has successfully managed to be among the major paper merchant companies in Pakistan.
                </p>
                <p className="text-lg leading-relaxed">
                  We deal in a wide range of paper products imported from all over the world, while also representing more than 20 international 
                  paper companies in Pakistan, including our exclusive partnership as the sole distributor of HP Papers from Brazil.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary-600">
                  We sincerely expect your constant favor and encouragements for us.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Established 1990</h3>
                <p className="text-gray-600">
                  Over three decades of excellence in paper trading and distribution, 
                  building trust and relationships across Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving excellence through sustainable growth and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of premium quality paper products in Pakistan, offering 
                innovative solutions that enhance productivity and creativity while maintaining the 
                highest standards of customer service and satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred partner for all paper-related needs in Pakistan, 
                recognized for our commitment to quality, innovation, and exceptional customer experience.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                Pursuing sustainable management by growing and progressing, providing excellent services 
                to enhance customer satisfaction, and managing with openness and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-12 shadow-xl">
            <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              CEO's Message
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-left max-w-4xl mx-auto">
              <p>
                With over 40 years of experience, our company is in favor of maintaining friendly working environments, 
                rewarding employees on good performances & creating opportunities for advancement as this sort of environment 
                leads to more productive work.
              </p>
              <p>
                At Trade International we believe <span className="font-semibold text-primary-600">Honesty is our firm commitment</span>, 
                with this, sky is our limit. Pursuing sustainable management by growing & progressing is our goal, 
                providing Excellent services to enhance customer satisfaction is our value, managing with openness and 
                mutual respect to gain public trust is our accountability.
              </p>
              <div className="pt-6 border-t border-primary-200">
                <p className="text-2xl font-bold text-primary-600">
                  ZAHID HUSSAIN
                </p>
                <p className="text-gray-600">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="service-card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services & Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive paper solutions for all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Decades of experience and thousands of satisfied customers across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-primary-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record of success and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or support
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Main Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium">Ganpat Road (Shah-e-Millat Lahore) 54000, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <p className="text-gray-700">Ph: 92-42-37231507, 37224717, 37229093, 37232148, 37361619, 37356771, 37321223</p>
                      <p className="text-gray-600 text-sm">Fax: 92-42-37321012, 37361620</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary-600 mt-1" />
                    <div className="space-y-1">
                      <p className="text-gray-700">info@tradeinternational.net.pk</p>
                      <p className="text-gray-700">tradeint@wol.net.pk</p>
                      <p className="text-gray-700">tradeint@ovi.com</p>
                      <p className="text-gray-700">info@hp-paper.com.pk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Import & Trading Department</h4>
                    <p className="text-gray-700">Chief Executive: Zahid Hussain</p>
                    <p className="text-primary-600">Cell: 0300-8476943</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tenders & Office Supply Department</h4>
                    <p className="text-gray-700">Director: Abbas Khurshid</p>
                    <p className="text-primary-600">Cell: 0300-4310700</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Indenting Department</h4>
                    <p className="text-gray-700">Director: Bilal Zahid</p>
                    <p className="text-primary-600">Cell: 0300-8261142, 0300-9444334</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Office Paper/HP Business Department</h4>
                    <p className="text-gray-700">Haris Zahid</p>
                    <p className="text-primary-600">Cell: 0321-4234007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of satisfied customers who trust HP Papers for their printing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Shopping
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 