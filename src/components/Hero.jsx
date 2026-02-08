import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { FaChevronRight, FaCaretLeft, FaCaretRight } from 'react-icons/fa'

// Local Assets
import pipeHero1 from '../assets/IMG_0883.JPG'
import pipeHero2 from '../assets/IMG_0884.JPG'
import pipeHero3 from '../assets/IMG_0888.JPG'
import heroBg from '../assets/hero page background image.jpeg'
import productBg from '../assets/product page background image.jpeg'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: pipeHero1,
    badge: "Global Piping Solutions",
    title: "Premium Quality PVC & HDPE Pipes",
    desc: "Trusted global supplier of high-quality piping solutions for industrial and commercial applications worldwide."
  },
  {
    image: heroBg,
    badge: "Industry Leaders",
    title: "Structural Integrity and Strength",
    desc: "Our high-performance piping products are designed to withstand the most demanding industrial environments."
  },
  {
    image: pipeHero2,
    badge: "Industrial Excellence",
    title: "Advanced Manufacturing Standards",
    desc: "Implementing state-of-the-art technology to ensure durability and precision in every pipe we produce."
  },
  {
    image: productBg,
    badge: "Versatile Solutions",
    title: "Comprehensive Range of Fittings",
    desc: "Find the perfect match for your infrastructure needs with our wide selection of PVC and HDPE components."
  },
  {
    image: pipeHero3,
    badge: "Reliable Distribution",
    title: "Fast & Secure Global Logistics",
    desc: "Delivering piping excellence to over 25+ countries with a focus on safety and on-time project completion."
  }
]

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-black group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 !bg-[#40E0D0] transition-all duration-300 mx-1 cursor-pointer"></span>`;
          },
        }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full h-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl"
              >
                {/* Badge line */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="h-[3px] w-12 bg-[#F57C00]"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  ></motion.div>
                  <span className="text-[#40E0D0] font-bold uppercase tracking-[0.2em] text-sm drop-shadow-md">
                    {slide.badge}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-opensans text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 text-white drop-shadow-xl">
                  {slide.title.split(' ').map((word, i) => (
                    word === 'PVC' || word === '&' || word === 'HDPE' ? (
                      <span key={i} className="text-[#40E0D0]"> {word} </span>
                    ) : (
                      <span key={i}> {word} </span>
                    )
                  ))}
                </h1>

                {/* Subheading */}
                <p className="font-inter text-xl lg:text-2xl text-white mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-lg">
                  {slide.desc}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, backgroundColor: "#E66D00" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-[#F57C00] text-white text-lg font-bold font-opensans rounded-lg transition-colors shadow-lg shadow-[#F57C00]/30 flex items-center justify-center gap-2"
                  >
                    Get a Quote
                    <FaChevronRight className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    href="#products"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-transparent border-2 border-white text-white text-lg font-bold font-opensans rounded-lg transition-colors shadow-lg hover:border-[#40E0D0] hover:text-[#40E0D0] flex items-center justify-center gap-2"
                  >
                    View Products
                  </motion.a>
                </div>

                {/* Animated Stats (Hidden on small screens for clarity) */}
                <div className="hidden md:flex gap-12 border-t border-white/20 pt-8">
                  {[
                    { val: "25+", text: "Countries Served" },
                    { val: "1000+", text: "Projects Done" },
                    { val: "ISO", text: "Certified Quality" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-white font-opensans mb-1">
                        {stat.val}
                      </div>
                      <div className="text-sm text-gray-300 uppercase tracking-wider">
                        {stat.text}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white hover:bg-gray-100 text-[#40E0D0] transition-all cursor-pointer flex items-center justify-center shadow-2xl border border-gray-200 group/btn active:scale-95">
          <FaCaretLeft className="w-8 h-8 group-hover/btn:-translate-x-1 transition-transform" />
        </button>
        <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white hover:bg-gray-100 text-[#40E0D0] transition-all cursor-pointer flex items-center justify-center shadow-2xl border border-gray-200 group/btn active:scale-95">
          <FaCaretRight className="w-8 h-8 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {/* Global Pagination Dots */}
        <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3"></div>
      </Swiper>
    </section>
  )
}

