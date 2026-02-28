import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import productBackground from '../assets/product page background image.jpeg'
import conduitImage from '../assets/electrical-conbduct-pipes.jpeg'
import swrImage from '../assets/swr.jpeg'
import blueCasingImage from '../assets/blue casing pipes.jpeg'

const products = [
  {
    name: 'PVC Rigid Pipes',
    image: 'https://lh3.googleusercontent.com/d/1LMxonci69L9lJwy6hKq1fUFh_VvQV4h_',
    features: ['Lightweight and economical', 'Easy and fast installation', 'Excellent corrosion and chemical resistance', 'High flow rate and long life'],
    link: '/pvc-pipes',
  },
  {
    name: 'Blue Casing Pipes',
    image: blueCasingImage,
    features: ['Free from corrosion and resistant to biological formations', 'Suitable for all soil types', 'Quick and convenient installation', 'Excellent tensile strength and stiffness'],
    link: '/pvc-pipes',
  },
  {
    name: 'SWR Pipes & Fittings',
    image: swrImage,
    features: ['Highly resilient, tough, and durable', 'Resistant to rusting, weathering, and chemical action', 'Easy and convenient installation', 'Cost-effective than conventional drainage systems'],
    link: '/pvc-pipes',
  },
  {
    name: 'UGD Pipes',
    image: 'https://lh3.googleusercontent.com/d/1RQ9WGPLngfpCQCR7Ty-2rnk4WjrWqIg-',
    features: ['High-quality materials for durability', 'Minimizes clogging, promotes efficient flow', 'Leak-proof connections, easy installation options', 'Various sizes available for different requirements'],
    link: '/pvc-pipes',
  },
  {
    name: 'Electric Conduit Pipes',
    image: conduitImage,
    features: ['Protects electrical wiring', 'Fire resistant', 'Easy installation', 'Durable and long-lasting'],
    link: '/pvc-pipes',
  },
  {
    name: 'HDPE Pipes',
    image: 'https://lh3.googleusercontent.com/d/1Q2sggkobJNHth-ZwLirD_OfhpmU254kz',
    features: ['Free from corrosion and resistant to chemical reactions', 'Seamless conveyance and flow applications', 'Great for transporting liquids and semi-liquids', 'Long-lasting performance with minimal maintenance'],
    link: '/hdpe-pipes',
  },
  {
    name: 'Drip Pipes',
    image: 'https://lh3.googleusercontent.com/d/12dExCFTDemob0jPGWzijjeLq9js8V_6X',
    features: ['Lightweight and economical', 'Easy and fast installation', 'Excellent corrosion and chemical resistance', 'High flow rate and long life'],
    link: '/hdpe-pipes',
  },
]

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section id="products" className="py-14 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={productBackground}
          alt="Products Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#F57C00] to-[#E66D00] text-white text-sm font-bold uppercase tracking-wide rounded-full shadow-lg">
              Premium Products
            </span>
          </motion.div>
          <h2 className="font-opensans text-[36px] lg:text-[50px] font-extrabold text-[#40E0D0] leading-[1.1] mb-4">
            Our Product Range
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-[18px] lg:text-[20px] text-[#333333]  mx-auto leading-relaxed">
            Global supplier of PVC &amp; HDPE pipes for infrastructure, water supply, irrigation and industrial projects. We offer
            standards-compliant products for bulk orders, project supplies and long-term contracts.
          </p>
        </motion.div>

        {/* Visual Products Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#40E0D0]">
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredProduct === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                      loading="lazy"
                      onError={(e) => {
                        // Fallback: Try alternative Google Drive URL format
                        if (product.image.includes('googleusercontent.com')) {
                          const fileId = product.image.split('/d/')[1]?.split('?')[0] || product.image.split('/d/')[1]
                          if (fileId) {
                            e.target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920-h1080`
                          }
                        } else if (product.image.includes('drive.google.com')) {
                          const fileId = product.image.match(/id=([^&]+)/)?.[1]
                          if (fileId) {
                            e.target.src = `https://lh3.googleusercontent.com/d/${fileId}`
                          }
                        }
                      }}
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    animate={{
                      opacity: hoveredProduct === index ? 0.8 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  {/* Product Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <motion.div
                      animate={{
                        y: hoveredProduct === index ? -10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-opensans text-[24px] font-extrabold text-white leading-tight mb-3 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        {product.name}
                      </h3>
                      <motion.div
                        className="h-1.5 bg-gradient-to-r from-[#F57C00] to-[#E66D00] rounded-full mb-4"
                        animate={{
                          width: hoveredProduct === index ? '100%' : '80px',
                        }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                      
                      {/* Features List - Beautiful Catalog Content */}
                      {product.features && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: hoveredProduct === index ? 1 : 0,
                            height: hoveredProduct === index ? 'auto' : 0,
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl border-2 border-[#40E0D0]/30">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-1 h-5 bg-gradient-to-b from-[#40E0D0] to-[#7FFFD4] rounded-full"></div>
                              <h4 className="font-opensans text-[14px] font-bold text-[#40E0D0] uppercase tracking-wider">
                                Key Features
                              </h4>
                            </div>
                            <ul className="space-y-2.5">
                              {product.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{
                                    opacity: hoveredProduct === index ? 1 : 0,
                                    x: hoveredProduct === index ? 0 : -10,
                                  }}
                                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                                  className="flex items-start gap-3 group/feature"
                                >
                                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-full flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-transform shadow-sm">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="font-inter text-[14px] text-[#333333] leading-relaxed font-medium">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                            <Link
                              to={product.link || '/products'}
                              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] text-white text-[13px] font-bold font-opensans rounded-lg hover:from-[#35c9b8] hover:to-[#6aecc9] transition-all shadow-md hover:shadow-lg"
                            >
                              View More
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 bg-[#F57C00] rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div >
    </section >
  )
}

