'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
// import { useCart } from '@/contexts/CartContext' // Disabled for static website

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const pathname = usePathname()
  // const { getCartCount } = useCart() // Disabled for static website

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Brands', href: '/brands' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Trading', href: '/services' },
    { name: 'Indenting', href: '/indenting' },
    { name: 'Tender', href: '/tender' },
    { name: 'HP Paper', href: '/hp-paper' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const isServicesActive = () => {
    return services.some(service => isActive(service.href))
  }

  return (
    <header className="bg-pure-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-pure-white text-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+92-42-37231507</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@tradeinternational.net.pk</span>
              </div>
            </div>
            <div className="text-sm">
              Trade International - Sole Distributor of HP Papers in Pakistan
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 text-charcoal">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0 w-[280px] h-[60px] relative group">
            <Link href="/" className="block w-full h-full">
              <Image 
                src="/images/logo.png" 
                alt="Trade International Logo" 
                width={649} 
                height={135} 
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" 
                priority 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group font-semibold text-lg tracking-wide transition-colors duration-200 ${
                  isActive(item.href) 
                    ? 'text-electric-blue' 
                    : 'text-charcoal hover:text-electric-blue'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-electric-blue rounded-full"></span>
                )}
                <span className="absolute -inset-2 bg-electric-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`flex items-center space-x-1 font-semibold text-lg tracking-wide transition-colors duration-200 ${
                  isServicesActive() 
                    ? 'text-electric-blue' 
                    : 'text-charcoal hover:text-electric-blue'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                  isServicesDropdownOpen ? 'rotate-180' : ''
                }`} />
                {isServicesActive() && (
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-electric-blue rounded-full"></span>
                )}
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-pure-white rounded-2xl shadow-2xl border border-cool-gray/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50`}>
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={`block px-6 py-3 text-charcoal hover:text-electric-blue hover:bg-cool-gray border border-transparent hover:border-electric-blue/30 transform hover:scale-105 transition-all duration-200 ${
                        isActive(service.href) ? 'text-electric-blue bg-cool-gray border-electric-blue/30' : ''
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/contact"
              className="bg-electric-blue hover:bg-deep-indigo text-pure-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-all duration-300 p-3 rounded-2xl hover:bg-cool-gray border border-cool-gray/50 hover:border-electric-blue/50 transform hover:scale-105 shadow-lg hover:shadow-xl bg-pure-white text-charcoal"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7 text-charcoal" />
              ) : (
                <Menu className="h-7 w-7 text-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-pure-white shadow-2xl border border-cool-gray/50 mx-6">
          <nav className="px-6 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-semibold py-3 px-4 rounded-2xl hover:bg-cool-gray border border-transparent hover:border-electric-blue/30 transform hover:scale-105 transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'text-electric-blue bg-cool-gray border-electric-blue/30' 
                    : 'text-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Section */}
            <div className="border-t border-cool-gray pt-4">
              <div className="font-semibold text-classic-black mb-2 px-4">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-semibold py-3 px-8 rounded-2xl hover:bg-cool-gray border border-transparent hover:border-electric-blue/30 transform hover:scale-105 transition-all duration-200 ${
                    isActive(service.href) 
                      ? 'text-electric-blue bg-cool-gray border-electric-blue/30' 
                      : 'text-charcoal'
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}