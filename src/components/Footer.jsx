import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import logoImage from '../assets/WhatsApp Image 2026-02-14 at 12.10.12 AM.jpeg'

const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
  products: [
    { name: 'PVC Rigid Pipes', href: '/pvc-pipes' },
    { name: 'Blue Casing Pipes', href: '/pvc-pipes' },
    { name: 'SWR Pipes & Fittings', href: '/pvc-pipes' },
    { name: 'UGD Pipes', href: '/pvc-pipes' },
    { name: 'Electric Conduit Pipes', href: '/pvc-pipes' },
    { name: 'HDPE Pipes', href: '/hdpe-pipes' },
    { name: 'Drip Pipes', href: '/hdpe-pipes' },
  ],
}

export default function Footer() {
  // Scroll to top when footer link is clicked
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-white text-[#1a1a1a] border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Contact Section */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <img
                src={logoImage}
                alt="BWPipes Logo - Blue Wave Pipes"
                className="h-20 w-32 object-contain"
                loading="lazy"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              />
            </div>
            
            {/* Description */}
            <p className="text-[#696969] font-inter mb-4" style={{ fontSize: '20px', lineHeight: '1.6' }}>
              Trusted PVC & HDPE pipe exporter supplying international markets through verified manufacturing partners. Bulk supply, export packaging & quality assurance.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/bwpipes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#40E0D0] rounded-full flex items-center justify-center text-white hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bwpipes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#40E0D0] rounded-full flex items-center justify-center text-white hover:bg-[#0077b5] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bwpipes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#40E0D0] rounded-full flex items-center justify-center text-white hover:bg-[#E4405F] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
                style={{
                  background: 'var(--bg-color, #40E0D0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#40E0D0'
                }}
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-opensans text-[16px] text-[#40E0D0] font-bold mb-5 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
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
                    onClick={handleLinkClick}
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
            © 2026 BWPipes (Blue Wave Pipes). All rights reserved.
          </p>
          <p className="text-[#696969] text-[11px] font-inter text-center mx-auto">
            <strong>Disclaimer:</strong> We are an independent trading and export company. Manufacturing is carried out at partner facilities. Product images and factory visuals shown are for representation purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
