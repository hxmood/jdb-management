"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MostrarPackPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeCollection, setActiveCollection] = useState(0);

  return (
    <div className="bg-[#F7F7F8] py-32">
      {/* Hero Section */}
      <section className="relative ">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              <span className="font-medium">Mostrar Pack</span>
            </h1>
            <p className="text-xl font-light">
              Luxury jewellery displays designed to showcase brilliance and elevate retail experiences.
            </p>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F7F8] to-transparent"></div> */}
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-6" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="200">
                Designed to <span className="font-medium">Enhance</span>
              </h2>
              <p className="text-[#7A7A7A] font-light mb-6" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="200">
                Since 2015, Mostrar Pack has redefined jewellery presentation through innovative display solutions. 
                Our displays don't just hold jewellery—they amplify its beauty, create immersive brand experiences, 
                and transform retail environments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#B29B77] pl-4" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="400">
                  <p className="text-[#7A7A7A] font-light text-sm">Display Types</p>
                  <p className="text-[#1F1F1F]">Cases · Trays · Stands · Walls</p>
                </div>
                <div className="border-l-2 border-[#B29B77] pl-4" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="600">
                  <p className="text-[#7A7A7A] font-light text-sm">Materials</p>
                  <p className="text-[#1F1F1F]">Acrylic · Metals · Glass · Wood</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl" data-aos="fade-left" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="200">
                <Image
                  src="/images/moster.png"
                  alt="Mostrar Pack retail display"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#B29B77]/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-16 text-center" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine">
            Display <span className="font-medium">Collections</span>
          </h2>
          
          {/* Collection Selector */}
          {/* <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              {collections.map((collection, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCollection(index)}
                  className={`px-6 py-3 text-sm font-light border ${activeCollection === index ? 'bg-[#B29B77] text-white border-[#B29B77]' : 'bg-white text-[#1F1F1F] border-[#E5E5E5] hover:bg-[#F7F7F8]'}`}
                >
                  {collection.name}
                </button>
              ))}
            </div>
          </div> */}
          
          {/* Gallery Grid */}

          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className="rounded-xl shadow-sm"
            breakpoints={{
              0: {
                slidesPerView: 1, // 1 slide on small screens (e.g., mobile)
              },
              640: {
                slidesPerView: 2, // 2 slides on tablets
              },
              1024: {
                slidesPerView: 4, // 4 slides on desktop
              },
        }}
>
  {collections.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="relative aspect-[12/9]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {collections[activeCollection].images.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={image}
                  alt={`Mostrar Pack ${collections[activeCollection].name} display`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-lg font-light">
                    {collections[activeCollection].name} Series
                  </h3>
                </div>
              </div>
            ))}
          </div> */}
          
          {/* Collection Info */}
          <div className="max-w-3xl mx-auto text-center mt-16">
            <h3 className="text-2xl font-light text-[#1F1F1F] mb-4">
              {collections[activeCollection].name} Collection
            </h3>
            <p className="text-[#7A7A7A] font-light mb-8">
              {collections[activeCollection].description}
            </p>
            <button className="px-8 py-3 bg-[#0C4C5B] text-white rounded-md hover:bg-[#093a45] transition-colors duration-300 font-light" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine">
              Download Technical Specifications
            </button>
          </div>
        </div>
      </section>

      {/* Retail Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-6">
              Complete <span className="font-medium">Retail Solutions</span>
            </h2>
            <p className="text-[#7A7A7A] font-light">
              We design displays that work together to create cohesive brand experiences across all retail environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-1 bg-[#0C4C5B] mb-4"></div>
                <h3 className="text-xl font-light text-[#1F1F1F] mb-3">{solution.title}</h3>
                <p className="text-[#7A7A7A] font-light mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg className="flex-shrink-0 w-4 h-4 text-[#B29B77] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#1F1F1F] font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0C4C5B] text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Transform Your Retail Space
          </h2>
          <p className="text-xl text-[#E5E5E5] font-light max-w-3xl mx-auto mb-8">
            Our design team can create custom display solutions tailored to your brand and space requirements.
          </p>
          <button className="px-8 py-3 bg-[#B29B77] text-white rounded-md hover:bg-[#9c8765] transition-colors duration-300 font-light">
            Consult Our Designers
          </button>
        </div>
      </section>
    </div>
  );
};

// Collections data
const collections = [
  {
    name: "Boutique",
    description: "Elegant displays for high-end jewellery boutiques, combining luxury materials with functional design.",
    image: "/images/moster.jpg",
    
  },
  {
    name: "Concept",
    description: "Innovative modular systems for contemporary jewellery brands seeking flexible presentation options.",
    image: "/images/moster.png"   
  },
  {
    name: "Heritage",
    description: "Timeless designs that complement traditional jewellery collections with classic sophistication.",
    image: "/images/moster.png",
      
  },
  {
    name: "Heritage",
    description: "Timeless designs that complement traditional jewellery collections with classic sophistication.",
    image: "/images/moster.png",
      
  },
  {
    name: "Heritage",
    description: "Timeless designs that complement traditional jewellery collections with classic sophistication.",
    image: "/images/moster.png",
      
  }
];

// Solutions data
const solutions = [
  {
    title: "Counter Displays",
    description: "Designed for intimate viewing and secure presentation of high-value pieces.",
    features: [
      "360° visibility designs",
      "Integrated lighting options",
      "Modular configurations",
      "Custom branding surfaces"
    ]
  },
  {
    title: "Window Presentations",
    description: "Eye-catching displays that draw customers into your retail space.",
    features: [
      "Thematic installations",
      "Seasonal adaptability",
      "Dramatic lighting effects",
      "Weather-resistant materials"
    ]
  },
  {
    title: "Showroom Systems",
    description: "Comprehensive solutions for larger retail environments and flagship stores.",
    features: [
      "Scalable architectures",
      "Interactive elements",
      "Brand storytelling integration",
      "Security-conscious designs"
    ]
  }
];

export default MostrarPackPage;