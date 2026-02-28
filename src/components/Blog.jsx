import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: '1',
    title: 'PVC vs HDPE Pipes – Which is Better for Infrastructure Projects?',
    excerpt: 'A comprehensive comparison of PVC and HDPE pipes, their applications, advantages, and which one suits your infrastructure project needs.',
    date: 'January 15, 2026',
  },
  {
    id: '2',
    title: 'How to Choose a Reliable PVC Pipe Exporter',
    excerpt: 'Essential factors to consider when selecting a PVC pipe exporter, including quality standards, certifications, and export capabilities.',
    date: 'January 10, 2026',
  },
  {
    id: '3',
    title: 'PVC Pipe Standards Used in Africa and Middle East',
    excerpt: 'Understanding the different pipe standards and certifications required for exporting PVC pipes to African and Middle Eastern markets.',
    date: 'January 5, 2026',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-14 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Our Blog
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group border-2 border-gray-200 hover:border-[#40E0D0]"
              whileHover={{ y: -2 }}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            >
              <div className="flex items-center gap-2 text-sm text-[#696969] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-inter text-[15px]">{post.date}</span>
              </div>
              <h3 className="font-opensans text-[22px] font-bold text-[#40E0D0] mb-4 group-hover:text-[#0a2d47] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="font-inter text-[17px] text-[#333333] leading-[1.8] mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-[#40E0D0] font-semibold text-[16px] hover:text-[#0a2d47] transition-colors"
              >
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
