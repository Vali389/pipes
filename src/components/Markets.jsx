import { motion } from 'framer-motion'

export default function Markets() {
  const markets = [
    { 
      region: 'Africa', 
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Nigeria', 'Ghana', 'South Africa'],
      icon: '🌍',
      gradient: 'from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0]',
      description: 'Serving multiple African nations with reliable pipe solutions for infrastructure development.',
    },
    { 
      region: 'Middle East', 
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'],
      icon: '🏜️',
      gradient: 'from-[#7FFFD4] via-[#40E0D0] to-[#7FFFD4]',
      description: 'Supporting Middle Eastern construction and infrastructure projects with quality pipes.',
    },
  ]

  return (
    <section id="markets" className="py-14 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #40E0D0 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-[#F57C00] text-white text-sm font-bold uppercase tracking-wide rounded-lg">
              Global Presence
            </span>
          </div>
          <h2 className="font-opensans text-[32px] lg:text-[42px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Markets We Serve
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-4"></div>
          <p className="font-inter text-[25px] text-[#333333]  mx-auto leading-relaxed">
            We actively export PVC and HDPE pipes to various international markets. Our export experience helps international buyers reduce sourcing risk and lead time.
          </p>
        </motion.div>

        {/* Markets Cards - Professional Design */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {markets.map((market, index) => (
            <motion.div
              key={market.region}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -6 }}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${market.gradient} p-8 relative overflow-hidden`}>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl shadow-lg">
                        {market.icon}
                      </div>
                      <div>
                        <h3 className="font-opensans text-[32px] font-extrabold text-white mb-2">
                          {market.region}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="font-inter text-[17px] text-[#333333] leading-relaxed mb-8">
                  {market.description}
                </p>
                
                {/* Countries Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-[#F57C00] rounded-full"></div>
                    <h4 className="font-opensans text-[16px] font-bold text-[#40E0D0] uppercase tracking-wide">
                      Countries Served
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {market.countries.map((country, idx) => (
                      <motion.span
                        key={country}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F8F9FA] to-white px-4 py-2 rounded-lg text-[15px] font-inter text-[#333333] border-2 border-gray-200 hover:border-[#40E0D0] hover:bg-[#40E0D0] hover:text-white transition-all shadow-sm hover:shadow-md"
                      >
                        <svg className="w-4 h-4 text-[#F57C00]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {country}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#40E0D0] font-semibold text-[15px] hover:text-[#F57C00] transition-colors group/link"
                    whileHover={{ x: 4 }}
                  >
                    Request Quote for {market.region}
                    <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F57C00]/20 to-transparent rounded-bl-full"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
