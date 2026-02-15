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
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ),
                  title: 'WhatsApp',
                  content: '+91 81257 00615',
                  link: 'https://wa.me/918125700615',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Phone',
                  content: '+91 81257 00615',
                  link: 'tel:+918125700615',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  content: 'info@bwpipes.com',
                  link: 'mailto:info@bwpipes.com',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Address',
                  content: '6-1-56, Bhagyalaxmi Colony, Manikonda, Hyderabad 500089 (T.S.) India',
                  link: 'https://maps.app.goo.gl/m1T89kzqEjnvVX356',
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
