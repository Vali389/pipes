import { motion } from 'framer-motion'

export default function Standards() {
  const standards = [
    { 
      name: 'ISO Standards',
      description: 'International Organization for Standardization certifications ensuring global quality compliance.',
    },
    { 
      name: 'Customer-specific Technical Specifications',
      description: 'Customized standards and specifications tailored to meet specific project requirements.',
    },
  ]

  return (
    <section id="standards" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-6">
            Standards & Compliance
          </h2>
          <p className="font-inter text-[25px] text-[#333333] leading-[1.9] mx-auto mb-12">
            Products can be supplied as per various international standards including ISO and customer-specific technical specifications. Compliance documents and test reports can be arranged upon request to ensure full transparency and quality assurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {standards.map((standard, index) => (
            <motion.div
              key={standard.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#40E0D0] hover:shadow-xl transition-all group"
              whileHover={{ y: -2 }}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            >
              <div className="w-14 h-14 bg-[#40E0D0] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F57C00] transition-colors">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-opensans text-[18px] font-bold text-[#40E0D0] mb-3 text-center">
                {standard.name}
              </h3>
              <p className="font-inter text-[15px] text-[#333333] leading-relaxed text-center">
                {standard.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white rounded-lg p-8 border-l-4 border-[#40E0D0] shadow-md mx-auto"
        >
          <p className="font-inter text-[17px] text-[#333333] leading-relaxed">
            <strong className="text-[#40E0D0]">Compliance Documentation:</strong> We coordinate inspection and testing at the manufacturing stage before export approval, ensuring buyers receive consistent and reliable products. All necessary certificates and test reports are provided with shipments.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
