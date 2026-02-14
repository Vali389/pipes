import { motion } from 'framer-motion'
import ProductsSection from '../components/Products'
import ProductCards from '../components/ProductCards'
import Standards from '../components/Standards'
import Packaging from '../components/Packaging'
import productBg from '../assets/product page background image.jpeg'

export default function Products() {
  return (
    <>
      {/* Page Header with Background Image */}
      <section className="relative h-[60vh] min-h-[450px] bg-gradient-to-br from-[#40E0D0] via-[#40E0D0] to-[#7FFFD4] text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={productBg} 
            alt="Products Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#40E0D0]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7FFFD4]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider">
                Premium Quality
              </span>
            </motion.div>
            <h1 className="font-opensans text-[48px] md:text-[56px] lg:text-[64px] font-extrabold mb-6 drop-shadow-2xl">
              Our Products
            </h1>
            <p className="font-inter text-[20px] md:text-[22px] text-white mx-auto max-w-2xl leading-relaxed drop-shadow-lg" style={{ opacity: 1, color: '#ffffff' }}>
              Premium PVC & HDPE Pipes for Export Markets
            </p>
          </motion.div>
        </div>
      </section>

      <ProductCards />
      <ProductsSection />
      <Standards />
      <Packaging />
    </>
  )
}

