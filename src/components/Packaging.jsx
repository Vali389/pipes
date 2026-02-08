import { motion } from 'framer-motion'
import packagingImage from '../assets/IMG_0884.JPG'

const packagingFeatures = [
  {
    title: 'Bundled & Strapped',
    icon: '📦',
    description: 'Secure bundling for safe transport',
    details: 'Pipes are bundled and strapped according to international standards',
  },
  {
    title: 'Clear Labeling',
    icon: '🏷️',
    description: 'Size and specification labeling on all packages',
    details: 'Comprehensive labeling with product details and handling instructions',
  },
  {
    title: 'Container Optimization',
    icon: '📐',
    description: 'Optimized for efficient container loading',
    details: 'Stacking designed for maximum container space utilization',
  },
  {
    title: 'Safe Handling',
    icon: '🛡️',
    description: 'Protected for long-distance transport',
    details: 'Weather-resistant packaging ensuring product integrity',
  },
]

const exportTerms = [
  { term: 'FOB', desc: 'Free On Board' },
  { term: 'CIF', desc: 'Cost, Insurance & Freight' },
  { term: 'CFR', desc: 'Cost & Freight' },
  { term: 'EXW', desc: 'Ex Works' },
  { term: 'DDP', desc: 'Delivered Duty Paid' },
]

export default function Packaging() {
  return (
    <section id="export" className="py-20 bg-[#F8F9FA]">
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
            Export &amp; Logistics
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-6"></div>
          <p className="font-inter text-[20px] text-[#333333] max-w-3xl mx-auto">
            We manage the complete export process &mdash; from export packing and palletization to documentation and delivery &mdash;
            ensuring seamless shipments for bulk and project orders.
          </p>
        </motion.div>

        {/* Main Content */}
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
                src={packagingImage}
                alt="Export Packaging"
                className="w-full h-[500px] object-cover group-hover:opacity-90 transition-opacity duration-300"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#40E0D0]/50 to-transparent"></div>
              
              {/* Info Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F57C00] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-opensans font-bold text-[#40E0D0]">Export Ready</div>
                    <div className="font-inter text-sm text-[#333333]">International Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-inter text-[18px] text-[#333333] leading-relaxed mb-6">
              We ensure proper export packing and palletization, container-friendly stacking, and safe handling for long-distance
              transport so that pipes arrive project-ready at the destination port.
            </p>
            <ul className="list-disc list-inside space-y-2 font-inter text-[16px] text-[#333333] mb-6">
              <li>Export packing &amp; palletization for 20 ft and 40 ft containers</li>
              <li>Optimized container stuffing to maximize loadability</li>
              <li>Clear size, specification and handling labels on each bundle</li>
              <li>Support for HS code classification and packing lists</li>
            </ul>

            {/* Packaging Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {packagingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-[#40E0D0] hover:shadow-lg transition-all group"
                  whileHover={{ y: -2 }}
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-opensans text-[16px] font-bold text-[#40E0D0] mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-inter text-[14px] text-[#333333] leading-relaxed mb-1">
                    {feature.description}
                  </p>
                  <p className="font-inter text-[12px] text-[#696969] italic">
                    {feature.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Export Terms & Documents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] rounded-2xl p-10 text-white"
        >
          <h3 className="font-opensans text-[28px] font-bold mb-2 text-center">
            Export Terms Available
          </h3>
          <p className="font-inter text-[16px] text-white/90 text-center mb-8">
            We support multiple Incoterms depending on buyer requirements and can coordinate port-to-port or door delivery.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {exportTerms.map((item, index) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all border border-white/20"
                whileHover={{ y: -2 }}
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <div className="text-[#F57C00] text-[32px] font-extrabold font-opensans mb-2">{item.term}</div>
                <div className="text-white text-sm font-inter">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
