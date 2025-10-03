import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Users, Building, Send, MessageCircle, Globe, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Trade International | Get in Touch',
  description: 'Contact Trade International for all your paper trading, indenting, tender, and HP Paper needs. Reach out to our expert team across Pakistan.',
  keywords: 'contact Trade International, paper trading contact, HP Paper Pakistan contact, tender services contact, indenting services contact',
}

export default function ContactPage() {
  const departments = [
    {
      name: 'Import & Trading Department',
      contact: 'Chief Executive: Zahid Hussain',
      phone: '0300-8476943',
      description: 'Handles all import operations and trading activities',
      icon: Globe,
      color: 'text-blue-600'
    },
    {
      name: 'Tenders & Office Supply Department',
      contact: 'Director: Abbas Khurshid',
      phone: '0300-4310700',
      description: 'Manages government and private sector tenders',
      icon: Award,
      color: 'text-green-600'
    },
    {
      name: 'Indenting Department',
      contact: 'Director: Bilal Zahid',
      phone: '0300-8261142, 0300-9444334',
      description: 'Represents international paper companies',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      name: 'Office Paper/HP Business Department',
      contact: 'Haris Zahid',
      phone: '0321-4234007',
      description: 'Specialized in HP Paper products and office supplies',
      icon: Building,
      color: 'text-orange-600'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+92-42-37231507',
        '+92-42-37224717',
        '+92-42-37229093',
        '+92-42-37232148',
        '+92-42-37361619',
        '+92-42-37356771',
        '+92-42-37321223'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@tradeinternational.net.pk',
        'tradeint@wol.net.pk',
        'tradeint@ovi.com',
        'info@hp-paper.com.pk'
      ],
      color: 'text-green-600'
    },
    {
      icon: Building,
      title: 'Fax Numbers',
      details: [
        '+92-42-37321012',
        '+92-42-37361620'
      ],
      color: 'text-purple-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-deep-indigo">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Trade International for all your paper trading, indenting, tender, and HP Paper needs. 
            Our expert team is ready to assist you across Pakistan.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our team for any inquiries or support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className={`h-8 w-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{method.title}</h3>
                <div className="space-y-2">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-center text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Address Section */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 text-center mb-16">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-10 w-10 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
            <p className="text-lg text-gray-600 mb-2">Ganpat Road (Shah-e-Millat)</p>
            <p className="text-lg text-gray-600">Lahore 54000, Pakistan</p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the right department for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <dept.icon className={`h-8 w-8 ${dept.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-gray-600 mb-3">{dept.description}</p>
                    <div className="space-y-1">
                      <p className="text-gray-800 font-semibold">{dept.contact}</p>
                      <p className="text-primary-600 font-medium">Cell: {dept.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or need assistance? Drop us a message and we'll get back to you promptly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours & Additional Info */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Business Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Areas</h3>
                    <p className="text-gray-600">Nationwide coverage across Pakistan</p>
                    <p className="text-gray-600">International partnerships and imports</p>
                    <p className="text-gray-600">Government and private sector clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Trade International?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">40+ years of experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Official HP Paper representative</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Nationwide service coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Expert team support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 