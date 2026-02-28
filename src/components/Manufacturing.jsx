import { motion } from 'framer-motion'

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Manufacturing & Sourcing Approach
          </h2>
          <p className="font-inter text-[25px] text-[#333333] leading-[1.9] mx-auto mb-8">
            All products are manufactured at partner facilities equipped with modern extrusion lines and testing infrastructure. We conduct thorough verification, continuous production monitoring, and pre-dispatch quality checks to ensure consistent quality and reliable supply for export markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Factory Verification',
              description: 'We conduct thorough verification of all partner facilities to ensure they meet our quality standards and production capabilities.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: 'Production Monitoring',
              description: 'Continuous monitoring of production processes ensures consistency and quality throughout the manufacturing cycle.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
            },
            {
              title: 'Pre-Dispatch Quality Checks',
              description: 'Rigorous quality checks are performed before dispatch to ensure every product meets export standards and specifications.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F8F9FA] rounded-xl p-8 border-2 border-gray-200 hover:border-[#40E0D0] hover:shadow-xl transition-all group"
              whileHover={{ y: -2 }}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            >
              <div className="w-16 h-16 bg-[#40E0D0] rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-[#F57C00] transition-colors">
                {item.icon}
              </div>
              <h3 className="font-opensans text-[22px] font-bold text-[#40E0D0] mb-4">
                {item.title}
              </h3>
              <p className="font-inter text-[17px] text-[#333333] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-[#F8F9FA] rounded-lg p-6 border-l-4 border-[#40E0D0] mx-auto"
        >
          <p className="font-inter text-[17px] text-[#333333] leading-relaxed">
            <strong className="text-[#40E0D0]">Note:</strong> This sourcing model enables us to handle large export volumes without compromising quality. Manufacturing visuals shown on this website represent partner facilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
