'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DivisionsPreview = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const divisions = [
    {
      name: 'Regalo Pack',
      description: 'Premium jewellery boxes crafted with precision and luxury materials',
      href: '/divisions/regalo-pack',
      image: '/images/Diamond Box 1.png',
      accentColor: 'bg-[#0C4C5B]' // Deep Teal
    },
    {
      name: 'Mostrar Pack',
      description: 'Luxurious jewellery displays designed to showcase brilliance',
      href: '/divisions/mostrar-pack',
      image: '/images/moster.png',
      accentColor: 'bg-[#B29B77]' // Gold-Bronze
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine">
          <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-4">
            Our <span className="font-medium">Manufacturing Divisions</span>
          </h2>
          <p className="text-[#7A7A7A] text-lg">
            Specialized brands under the JDB Management umbrella, each mastering their craft in luxury packaging solutions.
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {divisions.map((division, index) => (
            <Link 
              href={division.href} 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[5/4] ">
                <Image
                  src={division.image}
                  alt={division.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${division.accentColor}/10 mix-blend-multiply transition-all duration-300 group-hover:opacity-0`}></div>
              </div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 bg-gradient-to-t from-[#1F1F1F]/90 via-[#1F1F1F]/30 to-transparent">
                <div className={`w-12 h-1 ${division.accentColor} mb-4 transition-all duration-300 group-hover:w-16`}></div>
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-2">{division.name}</h3>
                <p className="text-[#E5E5E5] font-light">{division.description}</p>
                
                {/* Hover button */}
                <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center text-white border-b border-white pb-1 font-light">
                    Explore Division
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Corner accent (visible on hover) */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${division.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}>
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-b-[64px] border-b-white mix-blend-overlay"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        {/* <div className="text-center mt-16">
          <Link 
            href="/divisions" 
            className="inline-flex items-center text-[#1F1F1F] hover:text-[#0C4C5B] font-light border-b border-transparent hover:border-[#0C4C5B] transition-all duration-300"
          >
            View All Manufacturing Divisions
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default DivisionsPreview;