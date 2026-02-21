import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import whitePipesImage from '../assets/Screenshot 2026-01-31 191427.png'
import highPressureImage from '../assets/Screenshot 2026-01-31 191238.png'

export default function ProductCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
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
                  aria-label="Learn more about PVC pipes and fittings"
                >
                  Learn More About PVC Pipes
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
                  aria-label="Learn more about HDPE pipes and fittings"
                >
                  Learn More About HDPE Pipes
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

