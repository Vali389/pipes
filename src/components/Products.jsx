import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import productBackground from '../assets/product page background image.jpeg'
import redDrainageImage from '../assets/Screenshot 2026-01-31 191127.png'
import highPressureImage from '../assets/Screenshot 2026-01-31 191238.png'
import borewellImage from '../assets/Screenshot 2026-01-31 191331.png'
import whitePipesImage from '../assets/Screenshot 2026-01-31 191427.png'
import conduitImage from '../assets/Screenshot 2026-01-31 191508.png'
import hdpeRollsImage from '../assets/Screenshot 2026-01-31 191542.png'
import paperCoresImage from '../assets/Screenshot 2026-01-31 191633.png'

const products = [
  {
    name: 'Red UPVC Drainage Pipes',
    image: redDrainageImage,
  },
  {
    name: 'UPVC High Pressure Pipes',
    image: highPressureImage,
  },
  {
    name: 'UPVC Borewell Casing Pipes',
    image: borewellImage,
  },
  {
    name: 'White UPVC Pipes',
    image: whitePipesImage,
  },
  {
    name: 'Electric Conduit Pipes',
    image: conduitImage,
  },
  {
    name: 'PE100 HDPE Pipe Rolls',
    image: hdpeRollsImage,
  },
  {
    name: 'Paper Cores',
    image: paperCoresImage,
  },
]

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section id="products" className="py-24 relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#F57C00] to-[#E66D00] text-white text-sm font-bold uppercase tracking-wide rounded-full shadow-lg">
              Premium Products
            </span>
          </motion.div>
          <h2 className="font-opensans text-[36px] lg:text-[50px] font-extrabold text-[#40E0D0] leading-[1.1] mb-6">
            Our Product Range
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-[18px] lg:text-[20px] text-[#333333]  mx-auto leading-relaxed">
            Global supplier of PVC &amp; HDPE pipes for infrastructure, water supply, irrigation and industrial projects. We offer
            standards-compliant products for bulk orders, project supplies and long-term contracts.
          </p>
        </motion.div>

        {/* PVC & HDPE Overview - Premium Design */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* PVC Pipes & Fittings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-[#40E0D0]/50 transition-all duration-300 overflow-hidden h-full flex flex-col"
          >
            {/* Decorative Gradient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#40E0D0]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F57C00]/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative p-8 flex flex-col h-full">
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-opensans text-[28px] font-extrabold text-[#40E0D0]">
                  PVC Pipes &amp; Fittings
                </h3>
              </div>

              <p className="font-inter text-[17px] text-[#333333] leading-relaxed mb-8">
                PVC pipes are widely used for water supply, drainage and agricultural applications due to their durability, corrosion resistance and cost efficiency.
              </p>

              {/* Key Applications */}
              <div className="mb-8 flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#F57C00] to-[#E66D00] rounded-full"></div>
                  <h4 className="font-opensans text-[15px] font-bold text-[#F57C00] uppercase tracking-wider">
                    KEY APPLICATIONS
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Potable water supply and plumbing',
                    'Irrigation and agricultural networks',
                    'Sewerage and drainage pipelines',
                    'Industrial and chemical ducting'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-inter text-[16px] text-[#333333] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-gray-200">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[#40E0D0]/20">
                  <h4 className="font-opensans text-[12px] font-bold text-[#40E0D0] mb-2 uppercase tracking-wide">
                    Pressures
                  </h4>
                  <p className="font-inter text-[15px] text-[#333333] font-semibold">
                    2.5, 4 & 6 kgf/cm²
                  </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[#40E0D0]/20">
                  <h4 className="font-opensans text-[12px] font-bold text-[#40E0D0] mb-2 uppercase tracking-wide">
                    Sizes
                  </h4>
                  <p className="font-inter text-[15px] text-[#333333] font-semibold">
                    63 mm to 200 mm
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/pvc-pipes"
                  className="px-8 py-3 bg-[#40E0D0] text-white font-bold rounded-lg shadow-lg hover:bg-[#32c9ba] transition-all transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* HDPE Pipes & Fittings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-[#40E0D0]/50 transition-all duration-300 overflow-hidden h-full flex flex-col"
          >
            {/* Decorative Gradient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7FFFD4]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#40E0D0]/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative p-8 flex flex-col h-full">
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7FFFD4] to-[#40E0D0] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-opensans text-[28px] font-extrabold text-[#40E0D0]">
                  HDPE Pipes &amp; Fittings
                </h3>
              </div>

              <p className="font-inter text-[17px] text-[#333333] leading-relaxed mb-8">
                HDPE pipes are known for their high strength, flexibility and long service life, making them ideal for demanding environments and critical infrastructure.
              </p>

              {/* Key Applications */}
              <div className="mb-8 flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#F57C00] to-[#E66D00] rounded-full"></div>
                  <h4 className="font-opensans text-[15px] font-bold text-[#F57C00] uppercase tracking-wider">
                    KEY APPLICATIONS
                  </h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Water transmission and distribution',
                    'Sewerage and effluent lines',
                    'Gas and industrial piping networks',
                    'Agricultural irrigation projects'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#7FFFD4] to-[#40E0D0] rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-inter text-[16px] text-[#333333] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-gray-200">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[#40E0D0]/20">
                  <h4 className="font-opensans text-[12px] font-bold text-[#40E0D0] mb-2 uppercase tracking-wide">
                    Grades
                  </h4>
                  <p className="font-inter text-[15px] text-[#333333] font-semibold">
                    PE63, PE80, PE100
                  </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[#40E0D0]/20">
                  <h4 className="font-opensans text-[12px] font-bold text-[#40E0D0] mb-2 uppercase tracking-wide">
                    Sizes
                  </h4>
                  <p className="font-inter text-[15px] text-[#333333] font-semibold">
                    20 mm to 1200 mm
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/hdpe-pipes"
                  className="px-8 py-3 bg-[#F57C00] text-white font-bold rounded-lg shadow-lg hover:bg-[#e67500] transition-all transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

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
                        className="h-1.5 bg-gradient-to-r from-[#F57C00] to-[#E66D00] rounded-full"
                        animate={{
                          width: hoveredProduct === index ? '100%' : '80px',
                        }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
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
