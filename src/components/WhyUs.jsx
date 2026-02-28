import { motion } from 'framer-motion'

export default function WhyUs() {
  const benefits = [
    {
      title: 'Global quality benchmarks',
      description: 'Products sourced from audited partner facilities following international standards and strict QA protocols.',
    },
    {
      title: 'Competitive pricing',
      description: 'Export-focused sourcing and logistics optimization help deliver value without compromising specifications.',
    },
    {
      title: 'Supplying with trust & consistency',
      description: 'Focused on long-term relationships with contractors, distributors and project owners worldwide.',
    },
  ]

  return (
    <section id="why-us" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F8F9FA] rounded-xl p-8 border-2 border-gray-200 hover:border-[#40E0D0] hover:shadow-xl transition-all cursor-default group"
              whileHover={{ y: -2 }}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#40E0D0] rounded-xl flex items-center justify-center group-hover:bg-[#F57C00] transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-opensans text-[20px] font-bold text-[#40E0D0] leading-tight">
                  {benefit.title}
                </h3>
              </div>
              <p className="font-inter text-[17px] text-[#333333] leading-relaxed ml-16">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
