import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '../assets/WhatsApp Image 2026-02-14 at 12.10.12 AM.jpeg'

const navItems = [
  { name: 'Home', href: '/', hasDropdown: false },
  { name: 'About Us', href: '/about', hasDropdown: false },
  { name: 'Products', href: '/products', hasDropdown: false },
  { name: 'Blog', href: '/blog', hasDropdown: false },
  { name: 'Contact Us', href: '/contact', hasDropdown: false },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Fixed width container to prevent layout shift */}
          <Link to="/" className="">
            <img
              src={logoImage}
              alt="SRUX Logo"
              className="h-20 w-[250px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-[15px] font-semibold uppercase font-opensans transition-colors flex items-center gap-1 ${
                  location.pathname === item.href
                    ? 'text-[#40E0D0] border-b-2 border-[#40E0D0]'
                    : 'text-[#1a1a1a] hover:text-[#40E0D0]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/918125700615" target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-[#1a1a1a] font-opensans hover:text-[#40E0D0] transition-colors">
              +91 81257 00615
            </a>
            <motion.a
              href="#contact"
              className="bg-[#40E0D0] text-white px-7 py-3 text-[15px] font-semibold font-opensans rounded-lg hover:bg-[#F57C00] transition-all shadow-md"
              whileHover={{ y: -1 }}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t overflow-hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-[15px] font-semibold uppercase font-opensans transition-colors ${
                    location.pathname === item.href
                      ? 'bg-[#F8F9FA] text-[#40E0D0]'
                      : 'text-[#1a1a1a] hover:bg-[#F8F9FA] hover:text-[#40E0D0]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t mt-4">
                <a href="https://wa.me/918125700615" target="_blank" rel="noopener noreferrer" className="block text-[15px] font-semibold text-[#1a1a1a] font-opensans mb-3">
                  +91 81257 00615
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-[#40E0D0] text-white px-6 py-3 text-[15px] font-semibold font-opensans text-center rounded-lg hover:bg-[#F57C00] transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}