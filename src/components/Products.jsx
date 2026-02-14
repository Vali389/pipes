import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import productBackground from '../assets/product page background image.jpeg'
import redDrainageImage from '../assets/Screenshot 2026-01-31 191127.png'
import highPressureImage from '../assets/Screenshot 2026-01-31 191238.png'
import borewellImage from '../assets/Screenshot 2026-01-31 191331.png'
import whitePipesImage from '../assets/Screenshot 2026-01-31 191427.png'
import conduitImage from '../assets/Screenshot 2026-01-31 191508.png'

const products = [
  {
    name: 'Red UPVC Drainage Pipes',
    image: redDrainageImage,
  },
  {
    name: 'UPVC High Pressure Pipes',
    image: highPressureImage,
  },
  {
    name: 'UPVC Borewell Casing Pipes',
    image: borewellImage,
  },

  {
    name: 'White UPVC Pipes',
    image: whitePipesImage,
  },
  {
    name: 'Electric Conduit Pipes',
    image: conduitImage,
  },
]

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={productBackground}
          alt="Products Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/85"></div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#F57C00] to-[#E66D00] text-white text-sm font-bold uppercase tracking-wide rounded-full shadow-lg">
              Premium Products
            </span>
          </motion.div>
          <h2 className="font-opensans text-[36px] lg:text-[50px] font-extrabold text-[#40E0D0] leading-[1.1] mb-6">
            Our Product Range
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-[18px] lg:text-[20px] text-[#333333]  mx-auto leading-relaxed">
            Global supplier of PVC &amp; HDPE pipes for infrastructure, water supply, irrigation and industrial projects. We offer
            standards-compliant products for bulk orders, project supplies and long-term contracts.
          </p>
        </motion.div>

        {/* Visual Products Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#40E0D0]">
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredProduct === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    animate={{
                      opacity: hoveredProduct === index ? 0.8 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  {/* Product Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <motion.div
                      animate={{
                        y: hoveredProduct === index ? -10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-opensans text-[24px] font-extrabold text-white leading-tight mb-3 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        {product.name}
                      </h3>
                      <motion.div
                        className="h-1.5 bg-gradient-to-r from-[#F57C00] to-[#E66D00] rounded-full"
                        animate={{
                          width: hoveredProduct === index ? '100%' : '80px',
                        }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 bg-[#F57C00] rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div >
    </section >
  )
}

