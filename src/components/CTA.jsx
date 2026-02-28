export default function CTA() {
  return (
    <section id="contact" className="py-14 bg-[#016D9B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="font-opensans text-[14px] font-bold uppercase text-white/80 tracking-wide">
                Get In Touch
              </span>
            </div>
            
            <h2 className="font-opensans text-[28px] lg:text-[36px] font-extrabold text-white leading-[1.15] mb-4">
              Ready to Start<br />Your Project?
            </h2>
            
            <p className="font-inter text-[16px] text-white/80 leading-[1.7] mb-6 max-w-md">
              Contact us today for the best quality PVC pipes at competitive prices. Our team is ready to assist you.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[13px]">Call Us</p>
                  <a href="https://wa.me/917416057510" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-[16px] hover:text-[#F7941E] transition-colors">
                    +91 74160 57510
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[13px]">Email Us</p>
                  <a href="mailto:info@bwpipes.com" className="text-white font-semibold text-[16px] hover:text-[#F7941E] transition-colors">
                    info@bwpipes.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[13px]">Visit Us</p>
                  <p className="text-white font-semibold text-[16px]">
                    6-1-56, Bhagyalaxmi Colony, Manikonda, Hyderabad 500089 (T.S.) India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-opensans text-[24px] font-bold text-[#373A3F] mb-4">
              Request a Quote
            </h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#F8FAFB] border border-gray-200 rounded-lg font-inter text-[14px] focus:outline-none focus:border-[#016D9B] focus:ring-1 focus:ring-[#016D9B] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-[#F8FAFB] border border-gray-200 rounded-lg font-inter text-[14px] focus:outline-none focus:border-[#016D9B] focus:ring-1 focus:ring-[#016D9B] transition-colors"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-[#F8FAFB] border border-gray-200 rounded-lg font-inter text-[14px] focus:outline-none focus:border-[#016D9B] focus:ring-1 focus:ring-[#016D9B] transition-colors"
              />
              
              <select className="w-full px-4 py-3 bg-[#F8FAFB] border border-gray-200 rounded-lg font-inter text-[14px] text-[#696969] focus:outline-none focus:border-[#016D9B] focus:ring-1 focus:ring-[#016D9B] transition-colors">
                <option value="">Select Product</option>
                <option value="rigid-pvc">Rigid PVC Pipes</option>
                <option value="garden">Garden Pipes</option>
                <option value="suction">Suction Pipes</option>
              </select>
              
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-[#F8FAFB] border border-gray-200 rounded-lg font-inter text-[14px] focus:outline-none focus:border-[#016D9B] focus:ring-1 focus:ring-[#016D9B] transition-colors resize-none"
              />
              
              <button
                type="submit"
                className="w-full bg-[#F7941E] text-white py-4 rounded-lg font-opensans text-[14px] font-bold uppercase tracking-wide hover:bg-[#d97b0a] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
