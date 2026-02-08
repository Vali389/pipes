import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="bg-gray-50 font-inter">
      {/* Hero Section - Gradient Only (No Image) */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#40E0D0] overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#40E0D0]/10 rounded-full blur-3xl -mr-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/20 text-[#40E0D0] text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-lg">
              Let's Connect
            </span>
            <h1 className="font-opensans text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto font-normal leading-relaxed">
              We're here to help with your project requirements. Reach out to our expert team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative -mt-24 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              {[
                {
                  icon: <FaPhone className="w-6 h-6" />,
                  title: "Call Us",
                  content: "+91 81257 00615",
                  link: "tel:+918125700615",
                  color: "text-blue-500",
                  bg: "bg-blue-50"
                },
                {
                  icon: <FaEnvelope className="w-6 h-6" />,
                  title: "Email Us",
                  content: "info@strux.com",
                  link: "mailto:info@strux.com",
                  color: "text-orange-500",
                  bg: "bg-orange-50"
                },
                {
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  title: "Visit Us",
                  content: "Industrial Area, Gujarat, INDIA",
                  link: "#",
                  color: "text-[#40E0D0]",
                  bg: "bg-teal-50"
                }
              ].map((item, index) => (
                <motion.a
                  href={item.link}
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group relative overflow-hidden"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} ${item.bg} mr-5 group-hover:scale-110 transition-transform shadow-sm`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-opensans font-bold text-gray-800 text-lg group-hover:text-[#40E0D0] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 font-medium text-sm">{item.content}</p>
                  </div>
                  <div className="absolute right-4 text-gray-300 group-hover:text-[#40E0D0] transition-colors opacity-0 group-hover:opacity-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </motion.a>
              ))}

              {/* Map Preview */}
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 h-64 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.998630773956!2d72.57136211496783!3d23.022505584953604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1645511528654!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Map"
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden h-full">
                <div className="mb-8">
                  <h2 className="font-opensans text-xl font-extrabold text-[#40E0D0] mb-2 uppercase tracking-wide">Send us a Message</h2>

                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-xl text-center flex flex-col items-center justify-center h-64"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                      <FaPaperPlane className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Message Sent Successfully!</h3>
                    <p>Thank you for contacting us. We will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 group-focus-within:text-[#40E0D0] transition-colors">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/20 focus:border-[#40E0D0] transition-all outline-none font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 group-focus-within:text-[#40E0D0] transition-colors">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/20 focus:border-[#40E0D0] transition-all outline-none font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 group-focus-within:text-[#40E0D0] transition-colors">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/20 focus:border-[#40E0D0] transition-all outline-none font-medium"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 group-focus-within:text-[#40E0D0] transition-colors">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/20 focus:border-[#40E0D0] transition-all outline-none font-medium"
                          placeholder="Project Inquiry"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 group-focus-within:text-[#40E0D0] transition-colors">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/20 focus:border-[#40E0D0] transition-all outline-none resize-none font-medium"
                        placeholder="Tell us more about your requirements..."
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full bg-[#40E0D0] hover:bg-[#2bb8aa] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                    >
                      <span>Send Message</span>
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918125700615"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
      >
        <FaWhatsapp className="w-8 h-8" />
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  )
}
