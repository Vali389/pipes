import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
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

// Google Drive file IDs for hero carousel
const googleDriveSlides = [
  {
    fileId: '1LMxonci69L9lJwy6hKq1fUFh_VvQV4h_',
    badge: "Premium Quality",
    title: "Premium Quality PVC & HDPE Pipes",
    desc: "Trusted global supplier of high-quality piping solutions for industrial and commercial applications worldwide. Our pipes are engineered for durability, performance, and long-term reliability in diverse infrastructure projects."
  },
  {
    fileId: '19Aj14qKCbkVMYQAB5I1IsJKZdS48vKV6',
    badge: "Industry Leaders",
    title: "Structural Integrity and Strength",
    desc: "Our high-performance piping products are designed to withstand the most demanding industrial environments. With superior material quality and precision engineering, we deliver solutions that exceed industry standards."
  },
  {
    fileId: '15A0ZOgqLdbQHBmdMNJZcedtr8M9Di98s',
    badge: "Industrial Excellence",
    title: "Advanced Manufacturing Standards",
    desc: "Implementing state-of-the-art technology to ensure durability and precision in every pipe we produce. Our manufacturing processes are ISO certified and continuously optimized for excellence."
  },
  {
    fileId: '191CVWNbN5-39Nxt55sqDBq5_iQ2gVApn',
    badge: "Versatile Solutions",
    title: "Comprehensive Range of Fittings",
    desc: "Find the perfect match for your infrastructure needs with our wide selection of PVC and HDPE components. From standard fittings to custom solutions, we have everything for your project."
  },
  {
    fileId: '1RQ9WGPLngfpCQCR7Ty-2rnk4WjrWqIg-',
    badge: "Reliable Distribution",
    title: "Fast & Secure Global Logistics",
    desc: "Delivering piping excellence with a focus on safety and on-time project completion. Our global network ensures reliable delivery wherever you are."
  },
  {
    fileId: '1FMmmUCcXgPksuGuyUMMgnQvqmuH-cIsP',
    badge: "Global Piping Solutions",
    title: "Export Quality Pipes",
    desc: "Premium PVC and HDPE pipes manufactured to international standards, ready for export to global markets with complete quality assurance and documentation."
  }
]

// Using Google Drive images for hero carousel - high resolution
const slides = googleDriveSlides.map(slide => ({
  ...slide,
  image: `https://drive.google.com/uc?export=download&id=${slide.fileId}`
}))

export default function Hero() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiper, setSwiper] = useState(null)

  return (
    <section className="relative h-[90vh] overflow-hidden bg-black group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
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
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper)
          // Update navigation after swiper is initialized
          setTimeout(() => {
            if (swiper && prevRef.current && nextRef.current) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }
          }, 100)
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
                loading="eager"
                style={{ imageRendering: 'high-quality' }}
                onError={(e) => {
                  // Fallback to alternative high-res URL if first fails
                  e.target.src = `https://drive.google.com/thumbnail?id=${slide.fileId}&sz=w3840-h2160`
                }}
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
                <div className="flex items-center gap-4 mb-4">
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
                <h1 className="font-opensans text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                  {slide.title.split(' ').map((word, i) => (
                    word === 'PVC' || word === '&' || word === 'HDPE' ? (
                      <span key={i} className="text-[#40E0D0]"> {word} </span>
                    ) : (
                      <span key={i}> {word} </span>
                    )
                  ))}
                </h1>

                {/* Subheading */}
                <p className="font-inter text-lg sm:text-xl lg:text-2xl text-white mb-6 leading-relaxed max-w-2xl font-medium drop-shadow-lg" style={{ opacity: 1, color: '#ffffff' }}>
                  {slide.desc}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="px-10 py-4 bg-[#F57C00] hover:bg-[#E66D00] text-white text-lg font-bold font-opensans rounded-lg transition-colors shadow-lg shadow-[#F57C00]/30 flex items-center justify-center gap-2"
                  >
                    Get a Quote
                    <FaChevronRight className="w-4 h-4" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/products"
                    className="px-10 py-4 bg-transparent border-2 border-white text-white text-lg font-bold font-opensans rounded-lg transition-colors shadow-lg hover:border-[#40E0D0] hover:text-[#40E0D0] flex items-center justify-center gap-2"
                  >
                    View Products
                    </Link>
                  </motion.div>
                </div>

              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button 
          ref={prevRef}
          onClick={() => swiper?.slidePrev()}
          className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white/90 hover:bg-white text-[#40E0D0] transition-all cursor-pointer flex items-center justify-center shadow-2xl border border-gray-200 group/btn active:scale-95 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <FaCaretLeft className="w-8 h-8 group-hover/btn:-translate-x-1 transition-transform" />
        </button>
        <button 
          ref={nextRef}
          onClick={() => swiper?.slideNext()}
          className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white/90 hover:bg-white text-[#40E0D0] transition-all cursor-pointer flex items-center justify-center shadow-2xl border border-gray-200 group/btn active:scale-95 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <FaCaretRight className="w-8 h-8 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {/* Global Pagination Dots */}
        <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3"></div>
      </Swiper>
    </section>
  )
}

