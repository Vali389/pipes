import { motion } from 'framer-motion'
import aboutImage from '../assets/IMG_0884.JPG'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Independent PVC & HDPE Pipe Export Trading Company
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={aboutImage}
                alt="PVC and HDPE Pipes Storage"
                className="w-full h-[600px] object-cover group-hover:opacity-90 transition-opacity duration-300"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#40E0D0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F57C00] rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-8">
              <p className="font-inter text-[25px] text-[#1a1a1a] leading-[1.9]">
                We are an export-focused trading company specializing in <strong className="text-[#40E0D0] font-semibold">PVC pipes, uPVC pipes, HDPE pipes</strong>, and piping systems for plumbing, drainage, agriculture, and infrastructure applications.
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
