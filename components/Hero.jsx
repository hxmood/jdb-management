import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-[#F7F7F8] min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0C4C5B]/10 to-transparent"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-[#B29B77]/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#1F1F1F]">
              Elevating <span className="font-medium">Premium Packaging</span> Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-[#7A7A7A] max-w-2xl">
              JDB Management oversees exceptional craftsmanship in luxury packaging and displays, 
              delivering unparalleled quality through our brands Regalo Pack and Mostrar Pack.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="px-8 py-3 bg-[#B29B77] text-white rounded-md hover:bg-[#9c8765] transition-colors duration-300 font-medium">
                Request Consultation
              </Link>
              <Link href="/about" className="px-8 py-3 border border-[#1F1F1F] text-[#1F1F1F] rounded-md hover:bg-[#1F1F1F] hover:text-white transition-colors duration-300 font-medium">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image/content showcase */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square w-full max-w-xl mx-auto">
              <div className="absolute inset-0 bg-[#0C4C5B]/10 rounded-2xl -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl rotate-3 overflow-hidden">
                <Image 
                  src="/images/mix1.jpg" // Replace with your actual image
                  alt="Luxury jewellery packaging"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[#B29B77]/10 rounded-2xl rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands showcase */}
      {/* <div className="absolute bottom-10 left-0 right-0">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <p className="text-[#7A7A7A] mb-4">Our Premium Brands</p>
            <div className="flex gap-8 md:gap-16 items-center">
              <div className="text-2xl font-light text-[#1F1F1F]">Regalo Pack</div>
              <div className="h-8 w-px bg-[#7A7A7A]/30"></div>
              <div className="text-2xl font-light text-[#1F1F1F]">Mostrar Pack</div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;