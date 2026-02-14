import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BlogSection from '../components/Blog'

export default function Blog() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#40E0D0] via-[#40E0D0] to-[#7FFFD4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-opensans text-[42px] lg:text-[56px] font-extrabold mb-6">
              Our Blog
            </h1>
            <p className="font-inter text-[20px] text-white mx-auto">
              Insights and Updates on PVC & HDPE Pipes
            </p>
          </motion.div>
        </div>
      </section>

      <BlogSection />
    </>
  )
}

