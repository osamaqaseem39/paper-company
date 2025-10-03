import { Award, Users, Globe, Truck, Shield, CheckCircle, Building, FileText, Phone, Mail, MapPin } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '40+', label: 'Years Experience', icon: Award },
    { number: '1000+', label: 'Happy Customers', icon: Users },
    { number: '20+', label: 'International Partners', icon: Globe },
    { number: '4', label: 'Business Divisions', icon: Building }
  ]

  const values = [
    {
      icon: CheckCircle,
      title: 'Honesty',
      description: 'Our firm commitment that sets no limits to our success'
    },
    {
      icon: Shield,
      title: 'Sustainable Management',
      description: 'Growing and progressing while maintaining long-term success'
    },
    {
      icon: Users,
      title: 'Excellent Services',
      description: 'Enhancing customer satisfaction through superior quality'
    },
    {
      icon: Globe,
      title: 'Openness & Respect',
      description: 'Managing with mutual respect to gain public trust'
    }
  ]

  const divisions = [
    {
      icon: Building,
      title: 'Division 1: Trading',
      description: 'Trading of various types of paper and board serving printers and packaging firms',
      products: ['Coated paper', 'Coated duplex board', 'Coated art paper', 'Coated art card', 'Kraft paper', 'White wood free offset paper', 'Printing paper', 'Ledger paper', 'Colored bond paper', 'Ivory board', 'Sticker paper', 'Bleach board'],
      head: 'Mr. Zahid Hussain, C.E.O'
    },
    {
      icon: Globe,
      title: 'Division 2: Indenting',
      description: 'Indenting house representing various mills and export houses from around the world',
      countries: ['Japan', 'Korea', 'China', 'Indonesia', 'United States', 'European countries'],
      head: 'Mr. Bilal Zahid, Executive Officer'
    },
    {
      icon: FileText,
      title: 'Division 3: Government Supplies',
      description: 'Supplies to various government institutions and private sector companies',
      head: 'Mr. Abbas Khurshid, Director'
    },
    {
      icon: Award,
      title: 'Division 4: HP Papers',
      description: 'Dealing exclusively in cut size paper business under the brand of HP Papers from Brazil',
      head: 'Mr. Harris Zahid, Director'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Trade
            <span className="block text-primary-600">International</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trade International was established in Lahore, Pakistan in 1990 for dealing exclusively in 
            paper and paper board. We are importers, indentors and stockists of all sorts of paper and board, 
            serving various printers and packaging firms across Pakistan.
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
                  Trade International was established in Lahore, Pakistan in 1990 for dealing exclusively in 
                  paper and paper board. The founder of the firm Mr. Zahid Hussain was associated with this 
                  trade since 1974 in succession to a family concern established solely in paper business in 
                  1952 in Karachi.
                </p>
                <p>
                  Over the years Trade International has evolved into a giant in paper industry of Pakistan and 
                  with the help of Almighty ALLAH, has now expanded its business into other lines of trade 
                  which includes construction in private and public sectors.
                </p>
                <p>
                  Trade International enjoys very good reputation not only in Pakistan but also has a good name 
                  with various suppliers all over the world.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Since 1990</h3>
                <p className="text-gray-600">
                  Three decades of excellence in paper trading and distribution, building trust 
                  and relationships across Pakistan and the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-deep-indigo">
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

      {/* Business Divisions Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Business Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four specialized divisions working together to serve all your paper needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <division.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{division.title}</h3>
                    <p className="text-primary-600 font-medium">{division.head}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{division.description}</p>
                
                {division.products && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {division.products.map((product, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {division.countries && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {division.countries.map((country, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
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
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead Trade International's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. Zahid Hussain</h3>
              <p className="text-primary-600 font-medium mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                More than 37 years of experience in paper business. Founded Trade International in 1990 
                and has built it into a recognized force in Pakistan's paper trade industry.
              </p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. Bilal Zahid</h3>
              <p className="text-green-600 font-medium mb-2">Director - Indenting Department</p>
              <p className="text-gray-600 text-sm">
                Executive Officer of the indenting division, representing various mills and export houses 
                from Japan, Korea, China, Indonesia, United States and European countries.
              </p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. Abbas Khurshid</h3>
              <p className="text-purple-600 font-medium mb-2">Director - Tenders & Office Supply</p>
              <p className="text-gray-600 text-sm">
                Leads the team responsible for supplies to various government institutions 
                and private sector companies across Pakistan.
              </p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-32 h-32 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. Harris Zahid</h3>
              <p className="text-orange-600 font-medium mb-2">Director - HP Papers Department</p>
              <p className="text-gray-600 text-sm">
                Leads the HP Papers division, dealing exclusively in cut size paper business 
                under the brand of HP Papers from Brazil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or support
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Main Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Ganpat Road, Lahore</p>
                    <p className="text-gray-600">Shah-e-Millat Lahore 54000, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Phone Numbers:</p>
                    <p className="text-gray-600">92-42-37231507, 37224717, 37229093</p>
                    <p className="text-gray-600">92-42-37232148, 37361619, 37356771, 37321223</p>
                    <p className="text-gray-600">Fax: 92-42-37321012, 37361620</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Email Addresses:</p>
                    <p className="text-gray-600">info@tradeinternational.net.pk</p>
                    <p className="text-gray-600">tradeint@wol.net.pk</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-primary-600 mb-2">Import & Trading Department</h4>
                  <p className="text-gray-700">Chief Executive: Mr. Zahid Hussain</p>
                  <p className="text-primary-600">Cell: 0300-8476943</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-green-600 mb-2">Indenting Department</h4>
                  <p className="text-gray-700">Director: Mr. Bilal Zahid</p>
                  <p className="text-green-600">Cell: 0300-8261142, 0300-9444334</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-purple-600 mb-2">Tenders & Office Supply Department</h4>
                  <p className="text-gray-700">Director: Mr. Abbas Khurshid</p>
                  <p className="text-purple-600">Cell: 0300-4310700</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-600 mb-2">Office Paper/HP Business Department</h4>
                  <p className="text-gray-700">Director: Mr. Harris Zahid</p>
                  <p className="text-orange-600">Cell: 0321-4234007</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 