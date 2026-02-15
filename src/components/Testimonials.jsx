import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Ahmed Hassan',
    company: 'Infrastructure Solutions Ltd.',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'BWPipes has been our reliable partner for PVC pipe imports. Their quality control and export documentation support made our project seamless. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    name: 'John Mwangi',
    company: 'Kenya Water Projects',
    location: 'Nairobi, Kenya',
    rating: 5,
    text: 'Excellent service and competitive pricing. The HDPE pipes we received met all specifications and arrived on time. BWPipes understands the African market well.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Johnson',
    company: 'Global Infrastructure Group',
    location: 'London, UK',
    rating: 5,
    text: 'Working with BWPipes for our bulk pipe requirements has been a great experience. Their partner network ensures consistent quality and their team is very responsive.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  },
  {
    name: 'Rajesh Kumar',
    company: 'South Asia Trading Co.',
    location: 'Mumbai, India',
    rating: 5,
    text: 'BWPipes provided us with export-ready PVC pipes that met all international standards. Their packaging and logistics support was exceptional.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Client Feedback</span>
          <h2 className="font-opensans text-[32px] lg:text-[42px] font-extrabold text-[#333333] leading-[1.2] mt-4 mb-6">
            Customer Reviews
          </h2>
          <p className="font-inter text-[18px] text-[#696969]  mx-auto">
            See what our international clients say about working with BWPipes for their pipe export needs.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8FAFB] rounded-xl p-8 h-full border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F57C00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-inter text-[15px] text-[#333333] leading-[1.8] mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-opensans font-bold text-[#333333]">
                      {testimonial.name}
                    </div>
                    <div className="font-inter text-[13px] text-[#696969]">
                      {testimonial.company}
                    </div>
                    <div className="font-inter text-[12px] text-[#696969]">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
