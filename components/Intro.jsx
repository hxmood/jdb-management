import React from 'react';
import Image from 'next/image';

const AboutJDB = () => {
  return (
    <section className="bg-[#F7F7F8] py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image/Visual Element */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/DB3.jpg" // Replace with your image
                alt="JDB Management overseeing premium manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0C4C5B]/10 mix-blend-multiply"></div>
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-[#B29B77] text-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-light">Since 2010</span>
            </div> */}
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-6">
              The <span className="font-medium">JDB</span> Management Community
            </h2>
            
            <p className="text-[#7A7A7A] text-lg mb-6">
              JDB Management is a distinguished collective overseeing exceptional craftsmanship 
              in luxury packaging and display solutions. We provide strategic leadership, 
              operational excellence, and visionary direction to our specialized manufacturing 
              divisions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-[#B29B77]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1F1F1F] font-light">
                  Strategic oversight of premium manufacturing brands
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-[#B29B77]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1F1F1F] font-light">
                  Commitment to exceptional quality and craftsmanship
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-[#B29B77]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1F1F1F] font-light">
                  Fostering innovation in luxury packaging solutions
                </p>
              </div>
            </div>
            
            {/* <button className="px-8 py-3 bg-[#0C4C5B] text-white rounded-md hover:bg-[#0a3d49] transition-colors duration-300 font-light">
              Our Management Philosophy
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJDB;