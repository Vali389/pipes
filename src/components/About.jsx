import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Independent PVC & HDPE Pipe Export Trading Company
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-4"></div>
        </motion.div>

        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          {/* Content - Image removed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-4">
              <p className="font-inter text-[25px] text-[#1a1a1a] leading-[1.9]">
                We are an export-focused trading company specializing in <strong className="text-[#40E0D0] font-semibold">PVC pipes, HDPE pipes</strong>, and piping systems for plumbing, drainage, agriculture, and infrastructure applications.
              </p>
              
              <p className="font-inter text-[25px] text-[#1a1a1a] leading-[1.9]">
                Instead of owning manufacturing facilities, we work closely with a network of carefully selected and audited manufacturing partners. This allows us to offer competitive pricing, flexible supply capacity, and multiple product options while maintaining strict quality control.
              </p>

              <p className="font-inter text-[25px] text-[#1a1a1a] leading-[1.9]">
                Our role is to bridge global buyers with reliable pipe manufacturers, ensuring consistency, compliance, and export documentation support.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✓', text: 'Verified Partners' },
                { icon: '✓', text: 'Quality Assured' },
                { icon: '✓', text: 'Export Ready' },
                { icon: '✓', text: 'Global Reach' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-[#F8F9FA] rounded-lg p-4 hover:bg-[#40E0D0] hover:text-white group transition-all cursor-default"
                >
                  <span className="text-[#F57C00] text-xl font-bold group-hover:text-white">{item.icon}</span>
                  <span className="font-inter text-[16px] text-[#1a1a1a] font-medium group-hover:text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
