import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

const countryCodes = [
  { code: '+1', country: 'US/CA', flag: '🇺🇸' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
  { code: '+256', country: 'Uganda', flag: '🇺🇬' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+233', country: 'Ghana', flag: '🇬🇭' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
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
      countryCode: '+91',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 font-inter min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#40E0D0] overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-20 -mt-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#40E0D0]/10 rounded-full blur-3xl -mr-20 -mb-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7FFFD4]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-block py-3 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#40E0D0] text-sm font-bold uppercase tracking-wider shadow-xl">
                Let's Connect
              </span>
            </motion.div>
            <h1 className="font-opensans text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Get in <span className="text-[#40E0D0]">Touch</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative -mt-32 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-10">

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
                  icon: <FaWhatsapp className="w-6 h-6" />,
                  title: "WhatsApp Us",
                  content: "+91 81257 00615",
                  link: "https://wa.me/918125700615",
                  color: "text-green-500",
                  bg: "bg-green-50"
                },
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
                  content: "info@bwpipes.com",
                  link: "mailto:info@bwpipes.com",
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
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#40E0D0]/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7FFFD4]/5 to-transparent rounded-full blur-3xl -ml-32 -mb-32"></div>
                
                <div className="mb-10 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-10 bg-gradient-to-b from-[#40E0D0] to-[#7FFFD4] rounded-full"></div>
                    <h2 className="font-opensans text-2xl md:text-3xl font-extrabold text-gray-800 uppercase tracking-wide">Send us a Message</h2>
                  </div>
                  <p className="text-gray-600 font-inter text-sm md:text-base ml-4">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
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
                      <div className="group relative">
                        <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="Enter your full name"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group relative">
                        <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="your.email@example.com"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                          Phone Number
                        </label>
                        <div className="relative flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="px-3 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 shadow-sm hover:shadow-md appearance-none cursor-pointer min-w-[100px]"
                          >
                            {countryCodes.map((item) => (
                              <option key={item.code} value={item.code}>
                                {item.flag} {item.code}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="flex-1 px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="98765 43210"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group relative">
                        <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                          Subject
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                            placeholder="Project Inquiry"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none resize-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                          placeholder="Tell us more about your requirements, project details, or any questions you have..."
                        ></textarea>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] hover:from-[#2bb8aa] hover:to-[#6ee5c7] text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <span>Send Message</span>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
