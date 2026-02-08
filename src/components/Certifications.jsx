import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const certifications = [
  {
    title: 'ISO-Certified Manufacturing Units',
    description: 'All products are sourced from ISO-certified facilities with documented quality management systems.',
    logo: 'ISO',
  },
  {
    title: 'ASTM / BS / DIN Compliance',
    description: 'Pipes tested and manufactured in line with leading global standards as per project requirements.',
    logo: 'ASTM',
  },
  {
    title: 'IS / BIS Compliance',
    description: 'Compliance with Indian standards for projects requiring local regulatory approvals.',
    logo: 'BIS',
  },
  {
    title: 'Third-Party Inspection',
    description: 'SGS, Intertek or other nominated inspection agencies can be arranged as per buyer request.',
    logo: 'SGS',
  },
  {
    title: 'Test Certificates',
    description: 'Detailed inspection and test certificates provided with each shipment for complete traceability.',
    logo: 'TC',
  },
  {
    title: 'Documentation Support',
    description: 'Support for certificates of origin, compliance letters and other export documentation.',
    logo: 'DOC',
  },
]

export default function Certifications() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5
    const cardWidth = 380

    const scroll = () => {
      scrollAmount += scrollSpeed
      scrollContainer.scrollLeft = scrollAmount

      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0
      }
    }

    const interval = setInterval(scroll, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="certifications" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Quality &amp; Certifications
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-6"></div>
          <p className="font-inter text-[20px] text-[#333333] max-w-4xl mx-auto leading-relaxed">
            All products are sourced from ISO-certified manufacturing units and tested to meet international quality standards.
            Third-party inspection and detailed test certificates can be arranged on request for project documentation.
          </p>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{
              scrollBehavior: 'auto',
              willChange: 'scroll-position',
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...certifications, ...certifications].map((cert, index) => (
              <div
                key={`${cert.title}-${index}`}
                className="flex-shrink-0 w-[360px] bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#40E0D0] hover:shadow-xl transition-all"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  perspective: '1000px',
                }}
              >
                {/* Logo Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-opensans font-bold text-xl">{cert.logo}</span>
                </div>

                <h3 className="font-opensans text-[20px] font-bold text-[#40E0D0] mb-4 text-center">
                  {cert.title}
                </h3>
                <p className="font-inter text-[16px] text-[#333333] leading-relaxed text-center">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F9FA] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F9FA] to-transparent pointer-events-none z-10"></div>
        </div>

        {/* CSS for smooth scrolling */}
        <style>{`
          #certifications .overflow-x-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          #certifications .overflow-x-hidden::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  )
}
