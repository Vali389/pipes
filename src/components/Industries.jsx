const industries = [
  {
    name: 'Agriculture & Irrigation',
    description: 'Piping systems for drip, sprinkler and lift irrigation projects and farm water management.',
    icon: '🌾',
  },
  {
    name: 'Plumbing & Construction',
    description: 'PVC and SWR pipe systems for residential, commercial and high-rise projects.',
    icon: '🏗️',
  },
  {
    name: 'Water Supply',
    description: 'Safe, corrosion-free pipelines for municipal and regional water supply schemes.',
    icon: '💧',
  },
  {
    name: 'Industrial Applications',
    description: 'Pipes for process water, effluent, chemicals and utility lines in industrial plants.',
    icon: '🏭',
  },
  {
    name: 'Sewage & Drainage',
    description: 'Leak-proof SWR and drainage systems for soil, waste and rainwater lines.',
    icon: '🚰',
  },
  {
    name: 'Gardening & Landscaping',
    description: 'Flexible pipes for gardens, lawns, and landscaping projects.',
    icon: '🌳',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[#016D9B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
            <span className="font-opensans text-[14px] font-bold uppercase text-[#016D9B] tracking-wide">
              Industries We Serve
            </span>
          </div>
          <h2 className="font-opensans text-[28px] lg:text-[36px] font-extrabold text-[#373A3F] leading-[1.2] mb-4">
            Serving Multiple Industries
          </h2>
          <p className="font-inter text-[16px] text-[#696969] max-w-2xl mx-auto">
            Our high-quality piping solutions cater to diverse industries with specific requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div key={industry.name} className="group bg-[#F8FAFB] rounded-2xl p-6 hover:bg-[#016D9B] transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="font-opensans text-[18px] font-bold text-[#373A3F] mb-2 group-hover:text-white transition-colors">
                {industry.name}
              </h3>
              <p className="font-inter text-[14px] text-[#696969] leading-[1.6] group-hover:text-white/80 transition-colors">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
