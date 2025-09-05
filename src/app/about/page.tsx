import { Award, Users, Globe, Truck, Shield, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '30+', label: 'Years Experience', icon: Award },
    { number: '1000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Cities Covered', icon: Globe },
    { number: '24/7', label: 'Customer Support', icon: Shield }
  ]

  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality for all HP Papers products'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building long-term relationships based on trust and consistent delivery'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Putting our customers first with personalized service and support'
    },
    {
      icon: Truck,
      title: 'Efficient Delivery',
      description: 'Fast and reliable delivery across Pakistan with our logistics network'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About HP Papers
            <span className="block text-primary-600">Pakistan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are the official sole distributor of HP Papers in Pakistan, committed to providing 
            premium quality paper products and exceptional service to businesses and individuals across the country.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  HP Papers Pakistan was established with a vision to bring the world's finest paper products 
                  to the Pakistani market. As the official sole distributor of HP Papers, we have been serving 
                  businesses, educational institutions, and individuals since our inception.
                </p>
                <p>
                  Our journey began with a simple mission: to provide premium quality paper products that meet 
                  the highest international standards while ensuring accessibility and affordability for our customers.
                </p>
                <p>
                  Today, we are proud to be the trusted partner for thousands of customers across Pakistan, 
                  offering a comprehensive range of HP Papers products backed by exceptional service and support.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-4xl">HP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Official Partnership</h3>
                <p className="text-gray-600">
                  We maintain a direct partnership with HP Papers, ensuring authentic products 
                  and the latest innovations reach our customers first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're proud of what we've achieved and continue to grow our presence across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationship with customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
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

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of premium quality paper products in Pakistan, offering 
                innovative solutions that enhance productivity and creativity while maintaining the 
                highest standards of customer service and satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred partner for all paper-related needs in Pakistan, 
                recognized for our commitment to quality, innovation, and exceptional customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make HP Papers Pakistan the trusted choice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-16 w-16 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Team</h3>
              <p className="text-gray-600">
                Our experienced sales professionals are here to help you find the perfect 
                paper solution for your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-16 w-16 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Logistics Team</h3>
              <p className="text-gray-600">
                Ensuring fast and reliable delivery of your orders across Pakistan with 
                our efficient logistics network.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-16 w-16 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Team</h3>
              <p className="text-gray-600">
                Providing technical support and assistance to ensure you get the most 
                out of your HP Papers products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 