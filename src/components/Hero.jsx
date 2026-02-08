import { motion } from 'framer-motion'
import heroBackground from '../assets/hero page background image.jpeg'

export default function Hero() {
  // Animation variants for staggered text entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background Image - Animated and Visible */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img
            src={heroBackground}
            alt="PVC and HDPE Pipes"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>

        {/* Lighter Gradient Overlay - Ensures image visibility while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Badge line */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <motion.div
              className="h-[3px] w-12 bg-[#F57C00]"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            <span className="text-[#40E0D0] font-bold uppercase tracking-[0.2em] text-sm drop-shadow-md">
              Global Piping Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-opensans text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 text-white drop-shadow-xl"
          >
            Premium Quality
            <br />
            <span className="text-[#40E0D0] relative inline-block">
              PVC & HDPE Pipes
              {/* Animated underline */}
              <motion.span
                className="absolute bottom-2 left-0 w-full h-2 bg-[#F57C00]/30 -z-10"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
              ></motion.span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-inter text-xl lg:text-2xl text-white mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-lg"
          >
            Trusted global supplier of high-quality piping solutions for industrial and commercial applications worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "#E66D00" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#F57C00] text-white text-lg font-bold font-opensans rounded-lg transition-colors shadow-lg shadow-[#F57C00]/30 flex items-center justify-center gap-2"
            >
              Get a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-white text-white text-lg font-bold font-opensans rounded-lg transition-colors shadow-lg hover:border-[#40E0D0] hover:text-[#40E0D0] flex items-center justify-center gap-2"
            >
              View Products
            </motion.a>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-12 border-t border-white/20 pt-8"
          >
            {[
              { val: "25+", text: "Countries Served" },
              { val: "1000+", text: "Projects Done" },
              { val: "ISO", text: "Certified Quality" },
            ].map((stat, i) => (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (i * 0.1) }}
                  className="text-3xl font-bold text-white font-opensans mb-1"
                >
                  {stat.val}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + (i * 0.1) }}
                  className="text-sm text-gray-300 uppercase tracking-wider"
                >
                  {stat.text}
                </motion.div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
