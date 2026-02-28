import { motion } from 'framer-motion'
import facilitiesImage1 from '../assets/IMG_0889.JPG'
import outdoorStorageImage from '../assets/IMG_1171.JPG'

const warehouseFeatures = [
  { title: 'Climate-Controlled Areas', icon: '🌡️' },
  { title: 'Organized Stacking', icon: '📊' },
  { title: 'Easy Access Loading', icon: '🚚' },
  { title: 'Security & Preservation', icon: '🔒' },
]

const outdoorFeatures = [
  { title: 'Bulk Storage Capacity', icon: '📦' },
  { title: 'Systematic Organization', icon: '🗂️' },
  { title: 'Quick Dispatch', icon: '⚡' },
  { title: 'Weather Protection', icon: '☂️' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Our Storage & Distribution Facilities
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-4"></div>
          <p className="font-inter text-[25px] text-[#333333]  mx-auto">
            State-of-the-art storage facilities ensuring proper handling and preservation of pipes before export
          </p>
        </motion.div>

        {/* Warehouse Facilities */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  src={facilitiesImage1}
                  alt="Modern Warehouse Facilities"
                  className="w-full h-[500px] object-cover group-hover:opacity-90 transition-opacity duration-300"
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#40E0D0]/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-xl flex items-center justify-center text-2xl">
                  🏭
                </div>
                <h3 className="font-opensans text-[32px] font-extrabold text-[#40E0D0]">
                  Modern Warehouse Facilities
                </h3>
              </div>
              <p className="font-inter text-[19px] text-[#333333] leading-relaxed mb-4">
                Our partner facilities include modern warehouses equipped with proper storage systems, ensuring pipes are protected from environmental factors and maintained in optimal condition until dispatch.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {warehouseFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#F8F9FA] rounded-xl p-4 border-2 border-gray-200 hover:border-[#40E0D0] hover:shadow-md transition-all text-center"
                    whileHover={{ y: -2 }}
                    style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <div className="font-inter text-[14px] font-medium text-[#333333]">{feature.title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Outdoor Storage */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F57C00] to-[#E66D00] rounded-xl flex items-center justify-center text-2xl">
                🏗️
              </div>
              <h3 className="font-opensans text-[32px] font-extrabold text-[#40E0D0]">
                Outdoor Storage Yards
              </h3>
            </div>
            <p className="font-inter text-[19px] text-[#333333] leading-relaxed mb-4">
              Large outdoor storage yards accommodate bulk quantities of pipes, organized systematically for easy identification and quick dispatch. Our storage facilities can handle large export volumes efficiently.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {outdoorFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F8F9FA] rounded-xl p-4 border-2 border-gray-200 hover:border-[#F57C00] hover:shadow-md transition-all text-center"
                  whileHover={{ y: -2 }}
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="font-inter text-[14px] font-medium text-[#333333]">{feature.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={outdoorStorageImage}
                alt="Outdoor Pipe Storage"
                className="w-full h-[500px] object-cover group-hover:opacity-90 transition-opacity duration-300"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#40E0D0]/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
