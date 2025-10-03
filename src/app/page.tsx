import Link from 'next/link'
import { CheckCircle, Star, Truck, Shield, Award, Users, Globe, Clock, Building, TrendingUp, FileText, MapPin, Target, Eye, Heart, Phone, Mail, MapPin as MapPinIcon, Zap, Cpu, Database, Layers, ArrowRight, Sparkles, Activity, BarChart3, Code2, Terminal } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import FeaturedProducts from '../components/FeaturedProducts'

export const metadata: Metadata = {
  title: 'Trade International - Paper Trading Company Pakistan | HP Papers Distributor',
  description: 'Trade International - Leading paper trading company in Pakistan since 1990. Importers, indentors and stockists of all sorts of paper and board. Official HP Papers distributor.',
  keywords: 'Trade International, Pakistan, paper trading, paper distributor, HP Papers, office paper, printing paper, paper merchant, Lahore, paper industry, international partners',
  openGraph: {
    title: 'Trade International - Paper Trading Company Pakistan',
    description: 'Leading paper trading company in Pakistan since 1990. Importers, indentors and stockists of all sorts of paper and board.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade International - Paper Trading Company Pakistan',
    description: 'Leading paper trading company in Pakistan since 1990. Importers, indentors and stockists of all sorts of paper and board.',
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
      title: 'Division 1: Trading',
      description: 'Trading of various types of paper and board serving printers and packaging firms. Range includes coated paper, duplex board, art paper, Kraft paper, offset paper, and more. Headed by Mr. Zahid Hussain, C.E.O.',
      color: 'text-electric-blue',
    },
    {
      icon: Users,
      title: 'Division 2: Indenting',
      description: 'Indenting house representing various mills and export houses from Japan, Korea, China, Indonesia, United States and European countries. Executive Officer: Mr. Bilal Zahid.',
      color: 'text-electric-blue',
    },
    {
      icon: FileText,
      title: 'Division 3: Government Supplies',
      description: 'Supplies to various government institutions and private sector companies. This team is led by Mr. Abbas Khurshid.',
      color: 'text-electric-blue',
    },
    {
      icon: Globe,
      title: 'Division 4: HP Papers',
      description: 'Dealing exclusively in cut size paper business under the brand of HP Papers from Brazil. This team is led by Mr. Harris Zahid.',
      color: 'text-electric-blue',
    }
  ]

  const stats = [
    { number: '40+', label: 'Years Experience', icon: Clock, color: 'text-electric-blue' },
    { number: '20+', label: 'International Companies', icon: Globe, color: 'text-electric-blue' },
    { number: '1000+', label: 'Happy Customers', icon: Users, color: 'text-electric-blue' },
    { number: '50+', label: 'Cities Covered', icon: MapPin, color: 'text-electric-blue' }
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

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Premium Paper Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-classic-black leading-tight">
                  <span className="text-electric-blue">
                    Trade
                  </span>
                  <br />
                  <span className="text-classic-black">International</span>
                </h1>
                <p className="text-2xl text-charcoal font-light">
                  Importers, Indentors and Stockists of All Sorts of Paper and Board
                </p>
              </div>
              
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                Established in 1990, Trade International has evolved into a giant in Pakistan's paper industry. 
                We serve printers, packaging firms, government institutions, and businesses across the country 
                with our comprehensive range of paper products from international partners.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="group relative inline-flex items-center justify-center px-8 py-4 bg-golden-ochre text-pure-white font-bold rounded-2xl hover:bg-golden-ochre/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span>Explore Products</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="group inline-flex items-center justify-center px-8 py-4 border-2 border-deep-indigo text-deep-indigo font-bold rounded-2xl hover:border-electric-blue hover:text-electric-blue transition-all duration-300 transform hover:scale-105">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl">
                <div className="relative">
                  <div className="w-full h-64 mx-auto mb-6 overflow-hidden rounded-2xl relative">
                    <Image 
                      src="/images/heroimage.jpg" 
                      alt="HP Papers Hero" 
                      width={700} 
                      height={450} 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-classic-black mb-6 text-center">Premium HP Papers</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-pure-white" />
                      </div>
                      <span className="text-charcoal group-hover:text-classic-black transition-colors">Premium quality guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-pure-white" />
                      </div>
                      <span className="text-charcoal group-hover:text-classic-black transition-colors">Compatible with all printers</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-pure-white" />
                      </div>
                      <span className="text-charcoal group-hover:text-classic-black transition-colors">Fast delivery nationwide</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-pure-white" />
                      </div>
                      <span className="text-charcoal group-hover:text-classic-black transition-colors">Official warranty support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="section-padding bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Premium Product Range
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-classic-black mb-6">
              <span className="text-electric-blue">
                Featured
              </span> Products
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Discover our most popular paper products trusted by businesses across Pakistan
            </p>
          </div>
          
          <FeaturedProducts />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <Building className="w-4 h-4 mr-2" />
              Our Company Legacy
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-classic-black mb-6">
              <span className="text-electric-blue">
                Who
              </span> We Are
            </h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto leading-relaxed">
              Trade International: A trusted paper trading company with 40+ years of experience and excellence in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-classic-black mb-6">
                Our <span className="text-electric-blue">Company Story</span>
              </h3>
              <div className="space-y-6 text-charcoal">
                <p className="text-lg leading-relaxed">
                  Trade International was established in Lahore, Pakistan in 1990 for dealing exclusively in 
                  paper and paper board. The founder of the firm Mr. Zahid Hussain was associated with this 
                  trade since 1974 in succession to a family concern established solely in paper business in 
                  1952 in Karachi.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the years Trade International has evolved into a giant in paper industry of Pakistan and 
                  with the help of Almighty ALLAH, has now expanded its business into other lines of trade 
                  which includes construction in private and public sectors.
                </p>
                <p className="text-lg leading-relaxed">
                  Trade International enjoys very good reputation not only in Pakistan but also has a good name 
                  with various suppliers all over the world.
                </p>
                <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-2xl p-6">
                  <p className="text-lg font-semibold text-electric-blue">
                    "Our mission has changed from success to customer satisfaction. We do not compromise on 
                    quality to ensure that every client gets the very best from us."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl">
                <div className="relative text-center">
                  <div className="w-32 h-32 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Building className="h-16 w-16 text-pure-white" />
                  </div>
                  <h3 className="text-3xl font-black text-classic-black mb-4">Since 1990</h3>
                  <p className="text-charcoal text-lg">
                    Three decades of excellence in paper trading and distribution, 
                    building trust and relationships across Pakistan.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-cool-gray/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-electric-blue">40+</div>
                      <div className="text-sm text-charcoal">Years Experience</div>
                    </div>
                    <div className="bg-cool-gray/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-electric-blue">20+</div>
                      <div className="text-sm text-charcoal">Global Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals Section */}
      <section className="section-padding bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Company Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-classic-black mb-6">
              <span className="text-electric-blue">
                Mission
              </span>, Vision & Goals
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Driving excellence through sustainable growth and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl hover:shadow-electric-blue/20 hover:border-electric-blue/30 transition-all duration-300">
              <div className="relative text-center">
                <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-pure-white" />
                </div>
                <h3 className="text-2xl font-black text-classic-black mb-4">Our Mission</h3>
                <p className="text-charcoal leading-relaxed">
                  To be the leading provider of premium quality paper products in Pakistan, offering 
                  innovative solutions that enhance productivity and creativity while maintaining the 
                  highest standards of customer service and satisfaction.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl hover:shadow-electric-blue/20 hover:border-electric-blue/30 transition-all duration-300">
              <div className="relative text-center">
                <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-10 w-10 text-pure-white" />
                </div>
                <h3 className="text-2xl font-black text-classic-black mb-4">Our Vision</h3>
                <p className="text-charcoal leading-relaxed">
                  To become the most trusted and preferred partner for all paper-related needs in Pakistan, 
                  recognized for our commitment to quality, innovation, and exceptional customer experience.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl hover:shadow-electric-blue/20 hover:border-electric-blue/30 transition-all duration-300">
              <div className="relative text-center">
                <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-pure-white" />
                </div>
                <h3 className="text-2xl font-black text-classic-black mb-4">Our Goals</h3>
                <p className="text-charcoal leading-relaxed">
                  Pursuing sustainable management by growing and progressing, providing excellent services 
                  to enhance customer satisfaction, and managing with openness and mutual respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-classic-black mb-6">
              <span className="text-electric-blue">
                Core
              </span> Values
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group relative bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl hover:shadow-electric-blue/20 hover:border-electric-blue/30 transition-all duration-300 text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-pure-white" />
                  </div>
                  <h3 className="text-xl font-black text-classic-black mb-2">{value.title}</h3>
                  <p className="text-charcoal">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <Building className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-classic-black mb-6">
              <span className="text-electric-blue">
                Services
              </span> & Divisions
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive paper solutions for all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl hover:shadow-electric-blue/20 hover:border-electric-blue/30 transition-all duration-300">
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-pure-white" />
                  </div>
                  <h3 className="text-xl font-black text-classic-black mb-3">{service.title}</h3>
                  <p className="text-charcoal leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-deep-indigo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pure-white/20 border border-pure-white/30 text-pure-white text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-pure-white mb-6">
              Why Choose <span className="text-golden-ochre">Us?</span>
            </h2>
            <p className="text-xl text-pure-white/90 max-w-3xl mx-auto">
              Decades of experience and thousands of satisfied customers across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center bg-pure-white/10 backdrop-blur-xl rounded-3xl p-8 border border-pure-white/20 hover:bg-pure-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-pure-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-pure-white" />
                </div>
                <h3 className="text-xl font-black text-pure-white mb-2">{feature.title}</h3>
                <p className="text-pure-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-classic-black mb-6">
              <span className="text-electric-blue">
                Our Impact
              </span> in Numbers
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Proven track record of success and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl hover:shadow-electric-blue/20 hover:border-electric-blue/30 transition-all duration-300 text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-10 w-10 text-pure-white" />
                  </div>
                  <div className="text-4xl font-black text-electric-blue mb-2">{stat.number}</div>
                  <div className="text-charcoal font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-classic-black mb-6">
              <span className="text-electric-blue">
                Contact
              </span> Us
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or support
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl">
                <h3 className="text-2xl font-black text-classic-black mb-6">Main Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="w-6 h-6 text-electric-blue mt-1" />
                    <div>
                      <p className="text-charcoal font-medium">Ganpat Road (Shah-e-Millat Lahore) 54000, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-electric-blue mt-1" />
                    <div>
                      <p className="text-charcoal">Ph: 92-42-37231507, 37224717, 37229093, 37232148, 37361619, 37356771, 37321223</p>
                      <p className="text-cool-gray text-sm">Fax: 92-42-37321012, 37361620</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-electric-blue mt-1" />
                    <div className="space-y-1">
                      <p className="text-charcoal">info@tradeinternational.net.pk</p>
                      <p className="text-charcoal">tradeint@wol.net.pk</p>
                      <p className="text-charcoal">tradeint@ovi.com</p>
                      <p className="text-charcoal">info@hp-paper.com.pk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-pure-white rounded-3xl p-8 border border-cool-gray/50 shadow-2xl">
                <h3 className="text-2xl font-black text-classic-black mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  <div className="bg-cool-gray/50 rounded-2xl p-4 border border-cool-gray/50">
                    <h4 className="font-bold text-electric-blue mb-2">Import & Trading Department</h4>
                    <p className="text-charcoal">Chief Executive: Zahid Hussain</p>
                    <p className="text-electric-blue">Cell: 0300-8476943</p>
                  </div>
                  <div className="bg-cool-gray/50 rounded-2xl p-4 border border-cool-gray/50">
                    <h4 className="font-bold text-electric-blue mb-2">Tenders & Office Supply Department</h4>
                    <p className="text-charcoal">Director: Abbas Khurshid</p>
                    <p className="text-electric-blue">Cell: 0300-4310700</p>
                  </div>
                  <div className="bg-cool-gray/50 rounded-2xl p-4 border border-cool-gray/50">
                    <h4 className="font-bold text-electric-blue mb-2">Indenting Department</h4>
                    <p className="text-charcoal">Director: Bilal Zahid</p>
                    <p className="text-electric-blue">Cell: 0300-8261142, 0300-9444334</p>
                  </div>
                  <div className="bg-cool-gray/50 rounded-2xl p-4 border border-cool-gray/50">
                    <h4 className="font-bold text-electric-blue mb-2">Office Paper/HP Business Department</h4>
                    <p className="text-charcoal">Haris Zahid</p>
                    <p className="text-electric-blue">Cell: 0321-4234007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-deep-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pure-white/20 border border-pure-white/30 text-pure-white text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-pure-white mb-6">
            Ready to Experience <span className="text-golden-ochre">Premium Quality?</span>
          </h2>
          <p className="text-xl text-pure-white/90 mb-8">
            Join thousands of satisfied customers who trust HP Papers for their printing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="group relative inline-flex items-center justify-center px-8 py-4 bg-pure-white text-electric-blue font-bold rounded-2xl hover:bg-cool-gray transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span>Start Shopping</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="group inline-flex items-center justify-center px-8 py-4 border-2 border-pure-white text-pure-white font-bold rounded-2xl hover:bg-pure-white hover:text-electric-blue transition-all duration-300 transform hover:scale-105">
              <span>Contact Sales</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}