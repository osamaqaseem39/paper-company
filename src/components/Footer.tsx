'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Users, Building } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-pure-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="w-32 h-16 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Trade International HP Papers Logo" 
                width={649} 
                height={135} 
                className="object-contain w-full h-full" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-deep-indigo">Trade International</h3>
            <p className="text-cool-gray mb-6">
              Sole Distributor of HP Papers in Pakistan with over 40 years of experience in paper trading and distribution.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-cool-gray hover:text-electric-blue transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-deep-indigo">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-cool-gray hover:text-electric-blue transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-cool-gray hover:text-electric-blue transition-colors">Trading</Link></li>
              <li><Link href="/indenting" className="text-cool-gray hover:text-electric-blue transition-colors">Indenting</Link></li>
              <li><Link href="/tender" className="text-cool-gray hover:text-electric-blue transition-colors">Tender</Link></li>
              <li><Link href="/hp-paper" className="text-cool-gray hover:text-electric-blue transition-colors">HP Paper Pakistan</Link></li>
              <li><Link href="/about" className="text-cool-gray hover:text-electric-blue transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-cool-gray hover:text-electric-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-deep-indigo">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-electric-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cool-gray">Ganpat Road (Shah-e-Millat)</p>
                  <p className="text-cool-gray">Lahore 54000, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-electric-blue mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-cool-gray">+92-42-37231507</p>
                  <p className="text-cool-gray">+92-42-37224717</p>
                  <p className="text-cool-gray">+92-42-37229093</p>
                  <p className="text-cool-gray">+92-42-37232148</p>
                  <p className="text-cool-gray">+92-42-37361619</p>
                  <p className="text-cool-gray">+92-42-37356771</p>
                  <p className="text-cool-gray">+92-42-37321223</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-electric-blue mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-cool-gray">info@tradeinternational.net.pk</p>
                  <p className="text-cool-gray">tradeint@wol.net.pk</p>
                  <p className="text-cool-gray">tradeint@ovi.com</p>
                  <p className="text-cool-gray">info@hp-paper.com.pk</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Building className="h-5 w-5 text-electric-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cool-gray">Fax: +92-42-37321012</p>
                  <p className="text-cool-gray">Fax: +92-42-37361620</p>
                </div>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-deep-indigo">Departments</h3>
            <div className="space-y-4">
              <div className="bg-cool-gray/20 p-4 rounded-lg">
                <h4 className="font-semibold text-electric-blue mb-2">Import & Trading Department</h4>
                <p className="text-cool-gray text-sm">Chief Executive: Zahid Hussain</p>
                <p className="text-cool-gray text-sm">Cell: 0300-8476943</p>
              </div>
              
              <div className="bg-cool-gray/20 p-4 rounded-lg">
                <h4 className="font-semibold text-electric-blue mb-2">Tenders & Office Supply</h4>
                <p className="text-cool-gray text-sm">Director: Abbas Khurshid</p>
                <p className="text-cool-gray text-sm">Cell: 0300-4310700</p>
              </div>
              
              <div className="bg-cool-gray/20 p-4 rounded-lg">
                <h4 className="font-semibold text-electric-blue mb-2">Indenting Department</h4>
                <p className="text-cool-gray text-sm">Director: Bilal Zahid</p>
                <p className="text-cool-gray text-sm">Cell: 0300-8261142, 0300-9444334</p>
              </div>
              
              <div className="bg-cool-gray/20 p-4 rounded-lg">
                <h4 className="font-semibold text-electric-blue mb-2">Office Paper/HP Business</h4>
                <p className="text-cool-gray text-sm">Haris Zahid</p>
                <p className="text-cool-gray text-sm">Cell: 0321-4234007</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cool-gray/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cool-gray text-sm">
              © 2024 Trade International. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-cool-gray hover:text-electric-blue text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cool-gray hover:text-electric-blue text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}