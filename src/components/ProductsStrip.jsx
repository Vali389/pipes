export default function ProductsStrip() {
  return (
    <section className="bg-[#016D9B] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-4 overflow-hidden">
          {/* Pipe Images */}
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop&q=80" 
            alt="PVC Pipe" 
            className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=200&auto=format&fit=crop&q=80" 
            alt="PVC Pipe" 
            className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&auto=format&fit=crop&q=80" 
            alt="Industrial Pipe" 
            className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop&q=80" 
            alt="Garden Pipe" 
            className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity hidden md:block"
          />
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=200&auto=format&fit=crop&q=80" 
            alt="Suction Pipe" 
            className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}












