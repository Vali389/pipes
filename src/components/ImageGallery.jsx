import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Placeholder images - Replace with actual images from Google Drive
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80', alt: 'PVC Pipes Manufacturing' },
  { src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&auto=format&fit=crop&q=80', alt: 'HDPE Pipes Production' },
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80', alt: 'Pipe Quality Inspection' },
  { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&auto=format&fit=crop&q=80', alt: 'Pipe Testing Facility' },
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop&q=80', alt: 'Export Packaging' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80', alt: 'Industrial Pipe Storage' },
]

export default function ImageGallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Visual Showcase</span>
          <h2 className="font-opensans text-[32px] lg:text-[42px] font-extrabold text-[#333333] leading-[1.2] mt-4 mb-6">
            Images & Videos Gallery
          </h2>
          <p className="font-inter text-[18px] text-[#696969]  mx-auto">
            Explore our manufacturing facilities, products, and export operations through our visual gallery.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[500px] lg:h-[600px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-opensans text-[28px] font-bold mb-2">{image.alt}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-32 rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

