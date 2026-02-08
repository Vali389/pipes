import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: '',
    productInterest: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-opensans text-[28px] lg:text-[38px] font-extrabold text-[#40E0D0] leading-[1.2] mb-4">
            Contact Us Today
          </h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-6"></div>
          <p className="font-inter text-[25px] text-[#1a1a1a]  mx-auto">
            Looking for a Reliable PVC & HDPE Pipe Exporter? Contact us today to discuss your bulk order, project requirement, or long-term supply needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-opensans text-[28px] font-bold text-[#40E0D0] mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Phone',
                  content: '+91 98765 43210',
                  link: 'tel:+919876543210',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  content: 'info@strux.com',
                  link: 'mailto:info@strux.com',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Address',
                  content: 'Industrial Area, Gujarat, INDIA',
                  link: '#',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-[#F8F9FA] rounded-lg p-5 hover:bg-[#40E0D0] hover:text-white group transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#40E0D0] rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#40E0D0] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-opensans font-bold text-[#40E0D0] mb-1 group-hover:text-white text-[18px]">
                      {item.title}
                    </h4>
                    <a
                      href={item.link}
                      className="font-inter text-[17px] text-[#1a1a1a] hover:text-[#40E0D0] group-hover:text-white transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#F8F9FA] rounded-xl p-8 shadow-lg">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Thank you! We'll contact you soon.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-opensans font-semibold text-[#40E0D0] mb-2 text-[16px]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all text-[16px]"
                  />
                </div>
                <div>
                  <label className="block font-opensans font-semibold text-[#40E0D0] mb-2 text-[16px]">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all text-[16px]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-opensans font-semibold text-[#40E0D0] mb-2 text-[16px]">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all text-[16px]"
                  />
                </div>
                <div>
                  <label className="block font-opensans font-semibold text-[#40E0D0] mb-2 text-[16px]">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all text-[16px]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-opensans font-semibold text-[#40E0D0] mb-2 text-[16px]">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all text-[16px]"
                  />
                </div>
                <div>
                  <label className="block font-opensans font-semibold text-[#40E0D0] mb-2 text-[16px]">
                    Product Interest
                  </label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all text-[16px]"
                  >
                    <option value="">Select Product</option>
                    <option value="pvc">PVC Pipes</option>
                    <option value="hdpe">HDPE Pipes</option>
                    <option value="upvc">uPVC Pipes</option>
                    <option value="all">All Products</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-opensans font-semibold text-[#40E0D0] mb-2 text-[16px]">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all resize-none text-[16px]"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#40E0D0] text-white px-8 py-5 font-opensans text-[18px] font-bold rounded-lg hover:bg-[#F57C00] transition-all shadow-lg"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                Send Message
              </motion.button>

              <p className="text-center mt-4 font-inter text-[13px] text-[#696969]">
                * All fields marked with asterisk are required
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
