import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          {/* Mission */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="font-opensans text-[26px] lg:text-[30px] font-extrabold text-[#40E0D0] mb-4">
              Our Mission
            </h2>
            <p className="font-inter text-[18px] text-[#333333] leading-relaxed">
              Our goal is to partner with contractors, utilities, and infrastructure developers globally by offering
              project-ready PVC and HDPE pipe solutions, competitive pricing, and reliable logistics support.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="font-opensans text-[26px] lg:text-[30px] font-extrabold text-[#40E0D0] mb-4">
              Our Vision
            </h2>
            <p className="font-inter text-[18px] text-[#333333] leading-relaxed">
              To be a trusted export partner in providing world-class PVC and HDPE piping solutions for the development
              of sustainable infrastructure in emerging and developed markets around the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


