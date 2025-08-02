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


const RegaloPackPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="bg-[#F7F7F8] py-32">
      {/* Hero Section */}
      <section className="relative " data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 ">
              <span className="font-medium">Regalo Pack</span>
            </h1>
            <p className="text-xl font-light">
              Premium jewellery boxes crafted with precision and luxury materials for the world's finest jewellers.
            </p>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F7F8] to-transparent"></div> */}
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="200">
                <Image
                  src="/images/Db3.png"
                  alt="Regalo Pack craftsmanship"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0C4C5B]/10 mix-blend-multiply"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-6" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="200">
                The Art of <span className="font-medium">Premium Packaging</span>
              </h2>
              <p className="text-[#7A7A7A] font-light mb-6" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="200">
                Since 2012, Regalo Pack has set the standard for luxury jewellery packaging. Each piece is meticulously crafted 
                to not just protect, but to elevate the presentation of fine jewellery, creating an unboxing experience as 
                exquisite as the treasures within.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#0C4C5B] pl-4" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="400">
                  <p className="text-[#7A7A7A] font-light text-sm">Materials</p>
                  <p className="text-[#1F1F1F]">Italian leathers · Fine woods · Silk linings</p>
                </div>
                <div className="border-l-2 border-[#0C4C5B] pl-4" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="600">
                  <p className="text-[#7A7A7A] font-light text-sm">Capabilities</p>
                  <p className="text-[#1F1F1F]">Custom designs · Embossing · Precision fit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-16 text-center" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine">
            Our <span className="font-medium">Collections</span>
          </h2>
          
          {/* Main Gallery Slider */}
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
  {galleryItems.map((item, index) => (
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

          {/* Thumbnail Slider */}
          <div>
            {/* <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumb-slider"
            >
              {galleryItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative aspect-[4/3] cursor-pointer">
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
          
          {/* Collection Info */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-light text-[#1F1F1F] mb-4">Signature Collections</h3>
            <p className="text-[#7A7A7A] font-light mb-8">
              Our curated collections represent the pinnacle of jewellery packaging design, available in custom configurations 
              to meet your exact specifications.
            </p>
            <button className="px-8 py-3 bg-[#B29B77] text-white rounded-md hover:bg-[#9c8765] transition-colors duration-300 font-light" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-delay="200">
              Request Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-6">
              The <span className="font-medium">Regalo</span> Difference
            </h2>
            <p className="text-[#7A7A7A] font-light">
              What sets our jewellery boxes apart is an uncompromising commitment to quality at every stage of production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`w-12 h-1 ${index % 2 === 0 ? 'bg-[#0C4C5B]' : 'bg-[#B29B77]'} mb-4`}></div>
                <h3 className="text-xl font-light text-[#1F1F1F] mb-3">{feature.title}</h3>
                <p className="text-[#7A7A7A] font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0C4C5B] text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Elevate Your Packaging?
          </h2>
          <p className="text-xl text-[#E5E5E5] font-light max-w-3xl mx-auto mb-8">
            Contact our specialists to discuss custom packaging solutions for your jewellery line.
          </p>
          <button className="px-8 py-3 bg-[#B29B77] text-white rounded-md hover:bg-[#9c8765] transition-colors duration-300 font-light">
            Connect With Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

// Gallery data
const galleryItems = [
  {
    title: "Velvet Collection",
    image: "/images/DB3.png",
    thumb: "/images/DB5.png"
  },
  {
    title: "Wood Marquetry Series",
    image: "/images/DB5.png",
    thumb: "/images/DB5.png"
  },
  {
    title: "Leather Heritage Line",
    image: "/images/DB6.png",
    thumb: "/images/DB5.png"
  },
  {
    title: "Modern Minimalist",
    image: "/images/DB7.png",
    thumb: "/images/DB5.png"
  },
  {
    title: "Art Deco Inspired",
    image: "/images/DB8.png",
    thumb: "/images/DB5.png"
  },
  {
    title: "Art Deco Inspired",
    image: "/images/Mix1.png",
    thumb: "/images/DB5.png"
  },
  {
    title: "Art Deco Inspired",
    image: "/images/round box 1.png",
    thumb: "/images/DB5.png"
  },
  {
    title: "Art Deco Inspired",
    image: "/images/Diamond Box 1.png",
    thumb: "/images/DB5.png"
  }
];

// Features data
const features = [
  {
    title: "Material Selection",
    description: "We source only the finest leathers, woods, and fabrics from trusted suppliers worldwide."
  },
  {
    title: "Precision Engineering",
    description: "Each component is machined to exacting tolerances for perfect fit and function."
  },
  {
    title: "Hand Finishing",
    description: "Skilled artisans apply final finishes by hand for unparalleled quality."
  },
  {
    title: "Custom Solutions",
    description: "Tailored designs to complement your brand identity and jewellery pieces."
  },
  {
    title: "Quality Control",
    description: "Rigorous inspection at every production stage ensures flawless results."
  },
  {
    title: "Sustainable Practices",
    description: "Environmentally responsible materials and processes where possible."
  }
];

export default RegaloPackPage;