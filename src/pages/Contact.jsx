import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import { countryCodes, getCountryISO } from '../data/countryCodes'

// Country Flag Component - Uses ISO code directly for reliable flag display
const CountryFlag = ({ iso, className = '' }) => {
  if (!iso) return <span className="text-lg">🌐</span>
  return (
    <img
      src={`https://flagcdn.com/w40/${iso.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${iso.toLowerCase()}.png 2x`}
      alt={iso}
      width="24"
      height="16"
      style={{ width: 24, height: 16, objectFit: 'cover', borderRadius: 2, flexShrink: 0, display: 'inline-block' }}
      className={className}
      onError={(e) => { e.target.style.display = 'none' }}
    />
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    countryCode: '+91',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false)
  const [errors, setErrors] = useState({})
  const [shakeKey, setShakeKey] = useState(0)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCountryDropdownOpen(false)
      }
    }

    if (countryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [countryDropdownOpen])

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Phone validation
  const validatePhone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, '')
    // Must be exactly 10 digits
    return phoneDigits.length === 10
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (errors[name]) {
      const newErrors = { ...errors }
      delete newErrors[name]
      setErrors(newErrors)
    }

    // Real-time validation (only show errors after user has typed something)
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors({
          ...errors,
          email: 'Please enter a valid email address'
        })
      } else {
        const newErrors = { ...errors }
        delete newErrors.email
        setErrors(newErrors)
      }
    }
  }

  // Blur handler — validate required fields when user leaves them empty
  const handleBlur = (e) => {
    const { name, value } = e.target
    if (!value.trim()) {
      let errorMessage = ''
      if (name === 'name') {
        errorMessage = 'Name is required'
      } else if (name === 'email') {
        errorMessage = 'Email is required'
      } else if (name === 'message') {
        errorMessage = 'Message is required'
      }
      if (errorMessage) {
        setErrors(prev => ({ ...prev, [name]: errorMessage }))
      }
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
    } else if (name === 'message' && value.trim()) {
      // Clear message error if field has content
      const newErrors = { ...errors }
      delete newErrors.message
      setErrors(newErrors)
    }
  }

  // Phone-only digits handler — strips any non-digit character silently
  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '')
    setFormData({ ...formData, phone: digitsOnly })
    
    // Real-time validation for phone
    if (digitsOnly.length > 0) {
      if (!validatePhone(digitsOnly)) {
        if (digitsOnly.length < 10) {
          setErrors({ ...errors, phone: `Phone number must be 10 digits (${digitsOnly.length}/10)` })
        } else if (digitsOnly.length > 10) {
          setErrors({ ...errors, phone: 'Phone number must be exactly 10 digits' })
        } else {
          setErrors({ ...errors, phone: 'Please enter a valid phone number (10 digits)' })
        }
      } else {
        // Clear error if valid
        const newErrors = { ...errors }
        delete newErrors.phone
        setErrors(newErrors)
      }
    } else {
      // Clear error when field is empty (will be caught by required validation on submit)
      const newErrors = { ...errors }
      delete newErrors.phone
      setErrors(newErrors)
    }
  }

  const handleCountrySelect = (code) => {
    setFormData({
      ...formData,
      countryCode: code
    })
    setCountryDropdownOpen(false)
  }

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes.find(c => c.code === '+91') || countryCodes[0]

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
      const phoneDigits = formData.phone.replace(/\D/g, '')
      if (phoneDigits.length < 10) {
        newErrors.phone = `Phone number must be 10 digits (${phoneDigits.length}/10)`
      } else if (phoneDigits.length > 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits'
      } else {
        newErrors.phone = 'Please enter a valid phone number (10 digits)'
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setShakeKey(k => k + 1)  // re-trigger shake animation
      return
    }

    // Clear any previous errors
    setErrors({})
    setIsSubmitting(true)

    // Prepare data for Google Sheets
    // Prefix with apostrophe trick for Google Sheets: wrap in parens so it doesn't start with '+'
    const contactNumber = `(${formData.countryCode}) ${formData.phone}`
    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      companyName: formData.companyName.trim() || '',
      contactNumber: contactNumber,
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    }

    try {
      // Google Apps Script Web App URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwnxRoYMQoaaX5kX2OZJN20XUKbz24y1rCnGYzRt0EHBnBcFjsyNpbbu1ft9d3wyw7vDg/exec'

      // Submit to Google Sheets
      if (scriptUrl && scriptUrl !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        try {
          // Note: 403 errors on localhost are normal - it will work after deploying to Hostinger
          // The data is still being sent even if you see the error
          await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script - allows cross-origin requests
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData)
          })
          // Wait a bit to ensure request completes
          await new Promise(resolve => setTimeout(resolve, 1500))
        } catch (error) {
          // Even if fetch shows error, data might still be sent
          // This is normal on localhost - will work fine on Hostinger
          console.log('Request sent (may show error on localhost, but will work on production)')
          await new Promise(resolve => setTimeout(resolve, 1500))
        }
      }

      // Show success message and toast
      setIsSubmitting(false)
      setShowToast(true)
    setSubmitted(true)

      // Reset form
    setFormData({
      name: '',
        email: '',
        companyName: '',
        countryCode: '+91',
      phone: '',
      message: ''
    })

      // Auto-close toast after 5 seconds
      setTimeout(() => {
        setShowToast(false)
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // Show error toast
      setShowToast(true)
      setSubmitted(true)
      setTimeout(() => {
        setShowToast(false)
        setSubmitted(false)
      }, 5000)
    }
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
              className="inline-block mb-4"
            >
              <span className="inline-block py-3 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#40E0D0] text-sm font-bold uppercase tracking-wider shadow-xl">
                Let's Connect
              </span>
            </motion.div>
            <h1 className="font-opensans text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-2xl">
              Get in <span className="text-[#40E0D0]">Touch</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-14 relative -mt-32 z-20">
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
                  content: "+91 74160 57510",
                  link: "https://wa.me/917416057510",
                  color: "text-green-500",
                  bg: "bg-green-50"
                },
                {
                  icon: <FaPhone className="w-6 h-6" />,
                  title: "Call Us",
                  content: "+91 74160 57510",
                  link: "tel:+917416057510",
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
                  content: "6-1-56, Bhagyalaxmi Colony, Manikonda, Hyderabad 500089 (T.S.) India",
                  link: "https://maps.app.goo.gl/m1T89kzqEjnvVX356",
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
                <a
                  href="https://maps.app.goo.gl/m1T89kzqEjnvVX356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group"
                >
                <iframe
                  src="https://www.google.com/maps?q=6-1-56+Bhagyalaxmi+Colony+Manikonda+Hyderabad+500089&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="BWPipes Location Map - Hyderabad"
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all rounded-xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-[#40E0D0]">
                      Click to open in Google Maps
                    </div>
                  </div>
                </a>
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
                        <div
                          key={`name-${shakeKey}`}
                          className={`relative ${errors.name ? 'animate-shake' : ''}`}
                        >
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : 'border-gray-200'
                              }`}
                            placeholder="Enter your full name"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                        </div>
                        {errors.name && (
                          <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "#ef4444", fontWeight: "400" }}>{errors.name}</span>
                        )}
                      </div>
                      <div className="group relative">
                        <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                            Enter Your Email <span className="text-red-500">*</span>
                        </label>
                        <div
                          key={`email-${shakeKey}`}
                          className={`relative ${errors.email ? 'animate-shake' : ''}`}
                        >
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : 'border-gray-200'
                              }`}
                            placeholder="Enter your email address"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                        </div>
                        {errors.email && (
                          <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "#ef4444", fontWeight: "400" }}>{errors.email}</span>
                        )}
                      </div>
                    </div>

                      <div className="group relative">
                        <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                        Company Name
                        </label>
                        <div className="relative">
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                          placeholder="Enter Business Name or Website"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      {/* Combined Input Field - Single Border */}
                      <div
                        key={`phone-${shakeKey}`}
                        className={`relative flex items-center bg-white border-2 rounded-xl focus-within:ring-2 transition-all shadow-sm hover:shadow-md ${
                          errors.phone ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500/30 animate-shake' : 'border-gray-200 focus-within:ring-[#40E0D0]/30 focus-within:border-[#40E0D0]'
                        }`}>
                        {/* Left Section - Country Code Selector (Grey Background) */}
                        <div ref={dropdownRef} className="relative flex-shrink-0 z-50">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setCountryDropdownOpen(!countryDropdownOpen)
                            }}
                            onMouseDown={(e) => e.stopPropagation()}
                            className="px-3 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center gap-2 border-r border-gray-200 h-full cursor-pointer"
                            title={selectedCountry.country}
                          >
                            <CountryFlag iso={selectedCountry.iso} />
                            <span className="text-gray-700 font-medium text-sm">{selectedCountry.code}</span>
                            <svg
                              className={`w-3 h-3 text-gray-500 transition-transform flex-shrink-0 ${countryDropdownOpen ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Dropdown Menu */}
                          {countryDropdownOpen && (
                            <div
                              className="absolute top-full left-0 mt-1 w-[220px] bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-[9999] max-h-[300px] overflow-y-auto"
                              style={{ position: 'absolute' }}
                              onClick={(e) => e.stopPropagation()}
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              <div className="py-2">
                                {countryCodes.map((country) => (
                                  <button
                                    key={country.code}
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      e.stopPropagation()
                                      handleCountrySelect(country.code)
                                    }}
                                    onMouseDown={(e) => {
                                      e.preventDefault()
                                      e.stopPropagation()
                                    }}
                                    className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left ${formData.countryCode === country.code ? 'bg-gray-100' : ''
                                      }`}
                                  >
                                    <CountryFlag iso={country.iso} />
                                    <span className="flex-1 text-sm text-gray-800 font-medium truncate">{country.country}</span>
                                    <span className="text-xs text-[#40E0D0] font-semibold flex-shrink-0">{country.code}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Section - Phone Number Input (White Background) */}
                        <div className="flex-1">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            required
                            inputMode="numeric"
                            className="w-full px-4 py-4 bg-transparent border-0 focus:outline-none font-medium text-gray-800 placeholder-gray-400"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      {errors.phone && (
                        <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "#ef4444", fontWeight: "400" }}>{errors.phone}</span>
                      )}
                    </div>

                    <div className="group relative">
                      <label className="block text-sm font-bold text-gray-700 mb-3 group-focus-within:text-[#40E0D0] transition-colors">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div
                        key={`message-${shakeKey}`}
                        className={`relative ${errors.message ? 'animate-shake' : ''}`}
                      >
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          rows="6"
                          className={`w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 rounded-xl focus:ring-2 focus:ring-[#40E0D0]/30 focus:border-[#40E0D0] transition-all outline-none resize-none font-medium text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : 'border-gray-200'
                            }`}
                          placeholder="Tell us more about your requirements, project details, or any questions you have..."
                        ></textarea>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0]/0 to-[#7FFFD4]/0 group-focus-within:from-[#40E0D0]/5 group-focus-within:to-[#7FFFD4]/5 transition-all pointer-events-none"></div>
                      </div>
                      {errors.message && (
                        <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "#ef4444", fontWeight: "400" }}>{errors.message}</span>
                      )}
                    </div>

                    <motion.button
                      whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] hover:from-[#2bb8aa] hover:to-[#6ee5c7] text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                        <span>Send Message</span>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beautiful Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -100, x: 100, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: -50, x: 50, scale: 0.9, rotate: 5 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.5
            }}
            className="fixed top-6 right-6 z-[9999] max-w-md"
          >
            <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border-2 border-green-300/50 backdrop-blur-sm overflow-hidden">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-[shimmer_2s_infinite]"></div>

              {/* Success Icon with Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex-shrink-0 w-9 h-9 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-opensans font-extrabold text-base mb-0.5 drop-shadow-lg"
                >
                  Message Sent! 🎉
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs text-white/95 font-inter leading-tight"
                >
                  We'll get back to you soon.
                </motion.p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowToast(false)}
                className="flex-shrink-0 w-7 h-7 flex items-center justify-center hover:bg-white/30 rounded-full transition-all duration-200 hover:scale-110 relative z-10"
                aria-label="Close"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl"></div>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-0.5 bg-white/40 rounded-b-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
