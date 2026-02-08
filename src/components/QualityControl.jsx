import { motion } from 'framer-motion'
import qualityImage from '../assets/IMG_0888.JPG'

const qualityChecks = [
  {
    title: 'Dimensional Checks',
    icon: '📏',
    description: 'Precise measurements ensuring compliance with specifications and dimensional accuracy.',
    details: 'Length, diameter, wall thickness, and ovality measurements',
  },
  {
    title: 'Pressure & Strength Testing',
    icon: '💪',
    description: 'Rigorous testing to verify pressure ratings and structural integrity under load.',
    details: 'Hydrostatic pressure tests, burst tests, and tensile strength verification',
  },
  {
    title: 'Visual & Surface Inspection',
    icon: '👁️',
    description: 'Thorough examination for defects, cracks, or surface imperfections.',
    details: 'Complete visual inspection of inner and outer surfaces',
  },
  {
    title: 'Standards Compliance',
    icon: '✅',
    description: 'Verification against ISO, ASTM, IS/BS standards and customer specifications.',
    details: 'Full compliance documentation and test certificates provided',
  },
]

export default function QualityControl() {
  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Quality Control & Inspection
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-6"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={qualityImage}
                alt="Quality Control Testing"
                className="w-full h-[600px] object-cover group-hover:opacity-90 transition-opacity duration-300"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#40E0D0]/50 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#F57C00] text-4xl font-extrabold font-opensans">100%</div>
                    <div className="text-[#333333] text-lg font-inter font-semibold">Quality Tested</div>
                  </div>
                  <div className="w-16 h-16 bg-[#40E0D0] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-inter text-[19px] text-[#333333] leading-relaxed mb-8">
              Quality is ensured through comprehensive testing and inspection processes at every stage of production. We coordinate inspection and testing at the manufacturing stage before export approval, ensuring buyers receive consistent and reliable products.
            </p>

            {/* Quality Check Cards */}
            <div className="space-y-4">
              {qualityChecks.map((check, index) => (
                <motion.div
                  key={check.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#40E0D0] hover:shadow-lg transition-all group"
                  whileHover={{ y: -2 }}
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {check.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-opensans text-[20px] font-bold text-[#40E0D0] mb-2">
                        {check.title}
                      </h4>
                      <p className="font-inter text-[16px] text-[#333333] leading-relaxed mb-2">
                        {check.description}
                      </p>
                      <p className="font-inter text-[14px] text-[#696969] italic">
                        {check.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F8F9FA] rounded-2xl p-8"
        >
          <h3 className="font-opensans text-[24px] font-bold text-[#40E0D0] mb-6 text-center">
            Our Quality Assurance Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Raw Material', desc: 'Quality verified' },
              { step: '2', title: 'Production', desc: 'Continuous monitoring' },
              { step: '3', title: 'Testing', desc: 'Comprehensive checks' },
              { step: '4', title: 'Dispatch', desc: 'Final approval' },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#40E0D0]/30 z-0"></div>
                )}
                <div className="relative z-10 w-16 h-16 bg-[#40E0D0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-opensans font-bold text-xl">{item.step}</span>
                </div>
                <h4 className="font-opensans text-[16px] font-bold text-[#40E0D0] mb-1">
                  {item.title}
                </h4>
                <p className="font-inter text-[14px] text-[#333333]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
