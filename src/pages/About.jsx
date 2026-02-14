import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaGlobe, FaAward, FaUsers, FaHandshake, FaIndustry, FaShieldAlt, FaCertificate } from 'react-icons/fa'
import heroBg from '../assets/hero page background image.jpeg'
import founderImage from '../assets/_founder.jpeg'
import Facilities from '../components/Facilities'
import Certifications from '../components/Certifications'

export default function About() {
  return (
    <div className="bg-white font-inter">
      {/* Page Header with Background */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-[#40E0D0] via-[#40E0D0] to-[#7FFFD4] text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="About Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
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
                Who We Are
              </span>
            </motion.div>
            <h1 className="font-opensans text-[48px] md:text-[56px] lg:text-[64px] font-extrabold mb-6 drop-shadow-2xl">
              About <span className="text-[#40E0D0]">Us</span>
            </h1>
            <p className="font-inter text-[20px] md:text-[22px] text-white mx-auto max-w-3xl leading-relaxed drop-shadow-lg" style={{ opacity: 1, color: '#ffffff' }}>
              Independent PVC & HDPE Pipe Export Trading Company
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div>
              <h2 className="font-opensans text-[40px] md:text-[48px] font-extrabold text-[#40E0D0] mb-6">
                About Us
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mb-8 rounded-full"></div>
              <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed mb-6">
                Blue Wave Global is a Hyderabad-based export trading company specializing in high-quality PVC and HDPE piping solutions for global infrastructure, irrigation, and industrial applications. Based in Telangana, India, we combine India's strong manufacturing capabilities with international export expertise to deliver reliable and cost-effective piping products to global markets.
              </p>
              <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed">
                With a commitment to quality and long-term partnerships, Blue Wave Global sources products from trusted and certified manufacturers, ensuring consistency, durability, and compliance with international standards.
              </p>
            </div>
            
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
                <img 
                  src={founderImage} 
                  alt="Founder" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Global Reach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-10 md:p-12 border-2 border-[#40E0D0]/20 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-2xl flex items-center justify-center shadow-lg">
                <FaGlobe className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-opensans text-[36px] md:text-[42px] font-extrabold text-[#40E0D0]">
                Our Global Reach
              </h2>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mb-8 rounded-full"></div>
            <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed">
              We currently supply piping solutions to growing infrastructure and water management projects across Kenya and Tanzania, supporting sustainable development and reliable water distribution systems. Our strong export logistics and documentation expertise enable smooth and timely international deliveries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality & Compliance Section */}
      <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-3xl p-10 md:p-12 border-2 border-[#7FFFD4]/20 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7FFFD4] to-[#40E0D0] rounded-2xl flex items-center justify-center shadow-lg">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-opensans text-[36px] md:text-[42px] font-extrabold text-[#40E0D0]">
                Quality & Compliance
              </h2>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mb-8 rounded-full"></div>
            <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed">
              Blue Wave Global operates with strict quality control practices and holds a valid Import Export Code (IEC) issued by the Government of India. Every product we supply is carefully inspected to ensure durability, performance, and compliance with global industry requirements.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <FaCertificate className="w-6 h-6 text-[#40E0D0]" />
              <span className="font-inter text-[16px] md:text-[18px] text-[#333333] font-semibold">
                Valid Import Export Code (IEC) - Government of India
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10"
          >
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-10 border-2 border-[#40E0D0]/20 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#40E0D0]/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaHandshake className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-opensans text-[32px] lg:text-[36px] font-extrabold text-[#40E0D0] mb-6">
                  Our Mission
                </h2>
                <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed">
                  Our goal is to partner with contractors, utilities, and infrastructure developers globally by offering
                  project-ready PVC and HDPE pipe solutions, competitive pricing, and reliable logistics support. 
                  We strive to deliver excellence in every transaction and build lasting relationships with our clients.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-10 border-2 border-[#7FFFD4]/20 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#7FFFD4]/5 rounded-full blur-2xl -ml-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7FFFD4] to-[#40E0D0] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaGlobe className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-opensans text-[32px] lg:text-[36px] font-extrabold text-[#40E0D0] mb-6">
                  Our Vision
                </h2>
                <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed">
                  To become a globally trusted export partner delivering world-class piping solutions from India.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-opensans text-[40px] md:text-[48px] font-extrabold text-[#40E0D0] mb-6">
              Our Core Values
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaAward className="w-8 h-8" />,
                title: "Quality Excellence",
                desc: "We maintain the highest standards in product quality, ensuring every pipe meets international specifications and exceeds customer expectations."
              },
              {
                icon: <FaHandshake className="w-8 h-8" />,
                title: "Customer Partnership",
                desc: "Building long-term relationships through trust, transparency, and exceptional service. Your success is our success."
              },
              {
                icon: <FaGlobe className="w-8 h-8" />,
                title: "Global Reach",
                desc: "Serving clients across 25+ countries with reliable logistics and timely delivery, making us a truly global partner."
              },
              {
                icon: <FaIndustry className="w-8 h-8" />,
                title: "Industry Expertise",
                desc: "Years of experience and deep industry knowledge enable us to provide expert guidance and tailored solutions."
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Team Excellence",
                desc: "Our dedicated team of professionals works tirelessly to ensure seamless operations and customer satisfaction."
              },
              {
                icon: <FaCheckCircle className="w-8 h-8" />,
                title: "Reliability",
                desc: "Consistent delivery, competitive pricing, and dependable service make us the trusted choice for piping solutions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#40E0D0]/30 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg">
                  {value.icon}
                </div>
                <h3 className="font-opensans text-[24px] font-extrabold text-[#40E0D0] mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-[16px] text-[#333333] leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Blue Wave Global Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-opensans text-[40px] md:text-[48px] font-extrabold text-[#40E0D0] mb-6">
              Why Choose Blue Wave Global
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Trusted Indian export sourcing network",
              "Premium quality PVC and HDPE piping solutions",
              "Competitive pricing with consistent supply",
              "Strong export documentation and logistics support",
              "Customer-focused and transparent business approach"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl border border-gray-200 hover:border-[#40E0D0]/30 hover:shadow-lg transition-all"
              >
                <FaCheckCircle className="w-6 h-6 text-[#40E0D0] mt-1 flex-shrink-0" />
                <span className="font-inter text-[17px] text-[#333333] leading-relaxed font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Section */}
      <Facilities />

      {/* Quality & Certifications Section */}
      <Certifications />

      {/* Manufacturing Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-opensans text-[40px] md:text-[48px] font-extrabold text-[#40E0D0] mb-6">
              Our Manufacturing Process
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed ">
              Discover our advanced manufacturing processes and commitment to delivering world-class piping solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#40E0D0]/20 bg-gradient-to-br from-[#40E0D0]/10 to-[#7FFFD4]/10 p-2">
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1egaQ6Xo-8vFF-zIzD3Fklr8kvd3jVcPl/preview"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Blue Wave Global Manufacturing Process"
                ></iframe>
              </div>
              {/* Decorative gradient overlay */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] rounded-3xl opacity-20 blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Beautiful Gradient Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] rounded-3xl p-10 md:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              {/* Main Heading */}
              <h2 className="font-opensans text-[42px] md:text-[52px] lg:text-[60px] font-extrabold text-white mb-6 text-center">
                Ready to Work Together?
              </h2>
              
              {/* Description */}
              <p className="font-inter text-[18px] md:text-[20px] text-white/95 text-center  leading-relaxed mb-19  font-medium">
                Let's discuss how we can support your next project with our premium piping solutions. Our expert team is ready to help you find the perfect solution for your infrastructure needs.
              </p>
              
              {/* CTA Cards - Beautiful Frosted Glass Style */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {[
                  { icon: "💬", title: "WhatsApp Us", desc: "Chat with us", action: "https://wa.me/918125700615" },
                  { icon: "📞", title: "Call Us", desc: "Direct communication", action: "tel:+918125700615" },
                  { icon: "✉️", title: "Email Us", desc: "Send us a message", action: "mailto:info@bwpipes.com" }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 hover:shadow-xl"
                    whileHover={{ y: -4, scale: 1.02 }}
                    style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-[#F57C00] text-[48px] font-extrabold font-opensans mb-3">{item.icon}</div>
                    <h3 className="font-opensans text-[#F57C00] text-[24px] font-extrabold mb-2">{item.title}</h3>
                    <p className="font-inter text-white text-[15px] font-medium">{item.desc}</p>
                  </motion.a>
                ))}
              </div>
              
              {/* Main CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Link 
                  to="/contact" 
                  className="inline-block px-12 py-5 bg-[#F57C00] hover:bg-[#e67500] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#F57C00]/50 transition-all uppercase tracking-wide text-[18px] md:text-[20px] transform hover:-translate-y-1 hover:scale-105"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

