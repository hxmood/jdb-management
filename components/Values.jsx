import React from 'react'

const Values = () => {
  return (
    <section 
      className="relative py-24 px-6 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#1B263B' }} // Midnight Indigo
    >
      <div className="mx-auto max-w-6xl text-center">
        {/* Section Header */}
        <h2 className="mb-4 text-3xl font-light md:text-4xl" style={{ color: '#F8F9FA' }}>
          Built for <span className="font-medium" style={{ color: '#E0AA3E' }}>Excellence</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg" style={{ color: '#BFC0C0' }}>
          Why luxury jewellery brands partner with JDB’s manufacturing ecosystem.
        </p>

        {/* Three Pillars (Grid) */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Pillar 1: Quality */}
          <div className="group relative">
            <div 
              className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full transition-all group-hover:rotate-6"
              style={{ backgroundColor: '#273043' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0AA3E" strokeWidth="2">
                <path d="M20 12L12 4L4 12" strokeLinecap="round"/>
                <path d="M12 4V20" strokeLinecap="round"/>
                <path d="M12 20L20 12" strokeLinecap="round"/>
                <path d="M12 20L4 12" strokeLinecap="round"/>
              </svg>
            </div>
            <div 
              className="rounded-lg pt-20 pb-8 px-6 transition-all group-hover:shadow-xl"
              style={{ 
                backgroundColor: '#273043',
                borderTop: '2px solid #E0AA3E'
              }}
            >
              <h3 className="mb-4 text-xl font-medium" style={{ color: '#F8F9FA' }}>Uncompromising Quality</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#A1A1A1' }}>
                Rigorous material selection and Swiss-caliber craftsmanship ensure 
                every piece meets the highest industry benchmarks. ISO 9001-certified production.
              </p>
            </div>
          </div>

          {/* Pillar 2: Design */}
          <div className="group relative">
            <div 
              className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full transition-all group-hover:rotate-6"
              style={{ backgroundColor: '#273043' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0AA3E" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v8" strokeLinecap="round"/>
                <path d="M8 12h8" strokeLinecap="round"/>
              </svg>
            </div>
            <div 
              className="rounded-lg pt-20 pb-8 px-6 transition-all group-hover:shadow-xl"
              style={{ 
                backgroundColor: '#273043',
                borderTop: '2px solid #E0AA3E'
              }}
            >
              <h3 className="mb-4 text-xl font-medium" style={{ color: '#F8F9FA' }}>Bespoke Design</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#A1A1A1' }}>
                Tailored solutions from our in-house design studio. From minimalist 
                elegance to avant-garde displays, we translate your brand DNA into tangible artistry.
              </p>
            </div>
          </div>

          {/* Pillar 3: Trust */}
          <div className="group relative">
            <div 
              className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full transition-all group-hover:rotate-6"
              style={{ backgroundColor: '#273043' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0AA3E" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div 
              className="rounded-lg pt-20 pb-8 px-6 transition-all group-hover:shadow-xl"
              style={{ 
                backgroundColor: '#273043',
                borderTop: '2px solid #E0AA3E'
              }}
            >
              <h3 className="mb-4 text-xl font-medium" style={{ color: '#F8F9FA' }}>Enduring Trust</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#A1A1A1' }}>
                Trusted by Tiffany & Co., Cartier, and emerging luxury brands. 
                Discreet, reliable, and backed by 15-year warranties on select products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values