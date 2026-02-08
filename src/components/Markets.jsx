import { motion } from 'framer-motion'

export default function Markets() {
  const markets = [
    { 
      region: 'Africa', 
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Nigeria', 'Ghana', 'South Africa'],
      projects: '200+',
      icon: '🌍',
      gradient: 'from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0]',
      description: 'Serving multiple African nations with reliable pipe solutions for infrastructure development.',
    },
    { 
      region: 'Middle East', 
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'],
      projects: '350+',
      icon: '🏜️',
      gradient: 'from-[#7FFFD4] via-[#40E0D0] to-[#7FFFD4]',
      description: 'Supporting Middle Eastern construction and infrastructure projects with quality pipes.',
    },
    { 
      region: 'South Asia', 
      countries: ['Bangladesh', 'Sri Lanka', 'Nepal', 'Myanmar'],
      projects: '180+',
      icon: '🌏',
      gradient: 'from-[#40E0D0] via-[#1a4d6e] to-[#40E0D0]',
      description: 'Providing piping solutions for South Asian markets with competitive pricing.',
    },
    { 
      region: 'Emerging Markets', 
      countries: ['Southeast Asia', 'Latin America', 'Eastern Europe'],
      projects: '150+',
      icon: '🚀',
      gradient: 'from-[#7FFFD4] via-[#40E0D0] to-[#7FFFD4]',
      description: 'Expanding reach to emerging markets with growing infrastructure needs.',
    },
  ]

  return (
    <section id="markets" className="py-20 bg-white relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-[#F57C00] text-white text-sm font-bold uppercase tracking-wide rounded-lg">
              Global Presence
            </span>
          </div>
          <h2 className="font-opensans text-[32px] lg:text-[42px] font-extrabold text-[#40E0D0] leading-[1.2] mb-6">
            Markets We Serve
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-6"></div>
          <p className="font-inter text-[25px] text-[#333333]  mx-auto leading-relaxed">
            We actively export PVC and HDPE pipes to various international markets. Our export experience helps international buyers reduce sourcing risk and lead time.
          </p>
        </motion.div>

        {/* Markets Cards - Professional Design */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
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
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-inter text-[15px] text-white/90 font-medium">
                            {market.projects} Projects Completed
                          </span>
                        </div>
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
                <div className="mt-8 pt-6 border-t border-gray-200">
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

        {/* Professional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px',
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="font-opensans text-[32px] font-extrabold text-white mb-3">
                  Our Global Reach
                </h3>
                <div className="w-24 h-1 bg-[#F57C00] mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: '25+', label: 'Countries', icon: '🌎', color: 'from-[#F57C00] to-[#E66D00]' },
                  { number: '50+', label: 'Cities', icon: '🏙️', color: 'from-[#7FFFD4] to-[#40E0D0]' },
                  { number: '1000+', label: 'Projects', icon: '📦', color: 'from-[#F57C00] to-[#E66D00]' },
                  { number: '10+', label: 'Years Experience', icon: '⭐', color: 'from-[#7FFFD4] to-[#40E0D0]' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all"
                    whileHover={{ scale: 1.05, y: -4 }}
                    style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className="text-white text-[40px] font-extrabold font-opensans mb-2">{stat.number}</div>
                    <div className="text-white/90 text-sm font-inter font-medium uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
