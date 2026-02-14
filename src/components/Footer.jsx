import { Link } from 'react-router-dom'
import logoImage from '../assets/WhatsApp Image 2026-02-14 at 12.10.12 AM.jpeg'

const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
  products: [
    { name: 'PVC Pipes', href: '/products' },
    { name: 'HDPE Pipes', href: '/products' },
    { name: 'uPVC Pipes', href: '/products' },
    { name: 'Drainage Pipes', href: '/products' },
    { name: 'High Pressure Pipes', href: '/products' },
    { name: 'Electric Conduit Pipes', href: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white text-[#1a1a1a] border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Contact Section */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <img
                src={logoImage}
                alt="SRUX Logo"
                className="h-20 w-32 object-contain"
                loading="lazy"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              />
            </div>
            
            {/* Description */}
            <p className="text-[#696969] font-inter mb-5" style={{ fontSize: '20px', lineHeight: '1.6' }}>
              Trusted PVC & HDPE pipe exporter supplying international markets through verified manufacturing partners. Bulk supply, export packaging & quality assurance.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-opensans text-[16px] text-[#40E0D0] font-bold mb-5 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#1a1a1a] text-[18px] font-inter hover:text-[#40E0D0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-opensans text-[16px] text-[#40E0D0] font-bold mb-5 uppercase">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#1a1a1a] text-[18px] font-inter hover:text-[#40E0D0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Disclaimer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-[#696969] text-[13px] font-inter text-center mb-2">
            © 2026 Strux. All rights reserved.
          </p>
          <p className="text-[#696969] text-[11px] font-inter text-center mx-auto">
            <strong>Disclaimer:</strong> We are an independent trading and export company. Manufacturing is carried out at partner facilities. Product images and factory visuals shown are for representation purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
