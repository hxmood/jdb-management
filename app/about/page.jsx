"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AboutJDB from '@/components/Intro';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="bg-[#F7F7F8] py-32">
      {/* Hero Section */}
      <section className="relative ">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Our <span className="font-medium">Story</span> & <span className="font-medium">Approach</span>
          </h1>
          <p className="text-xl font-light max-w-3xl mx-auto">
            The foundation, vision, and methodology behind JDB Management's success in elevating premium manufacturing brands.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F7F8] to-transparent"></div>
      <AboutJDB/>
      </section>


      {/* Our Story - Timeline */}
      {/* <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-16 text-center">
              Our <span className="font-medium">Story</span>
            </h2>
            
            <div className="relative"> */}
              {/* Timeline line */}
              {/* <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#E5E5E5] transform -translate-x-1/2"></div> */}
              
              {/* Timeline items */}
              {/* <div className="space-y-16">
                {timelineItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} px-4`}>
                      <div className="bg-white p-8 rounded-xl shadow-sm">
                        <div className={`w-12 h-1 ${item.accentColor} mb-4`}></div>
                        <h3 className="text-2xl font-light text-[#1F1F1F] mb-2">{item.year}</h3>
                        <p className="text-[#7A7A7A] font-light">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-16 text-center">
            Mission & <span className="font-medium">Vision</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-[#F7F7F8] p-8 rounded-xl" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine">
              <div className="w-16 h-16 bg-[#0C4C5B] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#1F1F1F] mb-4">Our Mission</h3>
              <p className="text-[#7A7A7A] font-light">
                To elevate luxury packaging standards through exceptional craftsmanship, innovative design, and strategic brand management that delivers unparalleled value to our partners.
              </p>
            </div>
            
            <div className="bg-[#F7F7F8] p-8 rounded-xl" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-in-sine">
              <div className="w-16 h-16 bg-[#B29B77] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#1F1F1F] mb-4">Our Vision</h3>
              <p className="text-[#7A7A7A] font-light">
                To become the global benchmark for luxury packaging management, where craftsmanship meets innovation, and where each brand under our guidance sets industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-16 text-center">
            Our <span className="font-medium">Leadership</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((person, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-[#1F1F1F]/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light">{person.name}</h3>
                  <p className="text-[#E5E5E5] font-light">{person.title}</p>
                  {person.quote && (
                    <p className="mt-4 text-[#E5E5E5]/90 italic font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      "{person.quote}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-16 text-center">
            Our <span className="font-medium">Approach</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] bg-[#F7F7F8] rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/jdb-approach-visual.jpg"
                alt="JDB Management Approach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0C4C5B]/20 mix-blend-multiply"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="space-y-4">
                  <div className={`w-12 h-1 ${index % 2 === 0 ? 'bg-[#0C4C5B]' : 'bg-[#B29B77]'} mb-4`}></div>
                  <h3 className="text-xl font-light text-[#1F1F1F]">{step.title}</h3>
                  <p className="text-[#7A7A7A] font-light">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

// Timeline data


// Leadership data
const leadership = [
  {
    name: "Muhammed Raees",
    title: "Founder & MD",
    image: "/images/leadership-james.jpg",
    quote: "True luxury lies in the details most never see."
  },
  {
    name: "Shaharban Raees",
    title: "Co-founder",
    image: "/images/leadership-sarah.jpg",
    quote: "Precision craftsmanship is our language of quality."
  },
  {
    name: "Nizaam",
    title: "Co-founder",
    image: "/images/leadership-michael.jpg",
    quote: "Design should elevate both the product and the experience."
  }
];

// Approach steps


export default AboutPage;