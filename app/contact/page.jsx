import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white mt-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light text-[#1F1F1F] mb-8">
              Get in <span className="font-medium">Touch</span>
            </h2>
            
            <div className="space-y-8">
              {/* General Inquiries */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F7F7F8] rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-[#0C4C5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#1F1F1F] mb-2">General Inquiries</h3>
                  <a href="mailto:info@jdbmanagement.com" className="text-[#7A7A7A] font-light hover:text-[#0C4C5B] transition-colors">
                    info@jdbmanagement.com
                  </a>
                </div>
              </div>
              
              {/* Divisions Contacts */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F7F7F8] rounded-full flex items-center justify-center mr-6">
                    <svg className="w-6 h-6 text-[#B29B77]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-[#1F1F1F] mb-4">Division Contacts</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-light text-[#0C4C5B]">Regalo Pack</h4>
                        <a href="tel:+1234567890" className="text-[#7A7A7A] font-light hover:text-[#0C4C5B] transition-colors">
                          +1 (234) 567-890
                        </a>
                        <br />
                        <a href="mailto:sales@regalopack.com" className="text-[#7A7A7A] font-light hover:text-[#0C4C5B] transition-colors">
                          sales@regalopack.com
                        </a>
                      </div>
                      <div>
                        <h4 className="font-light text-[#B29B77]">Mostrar Pack</h4>
                        <a href="tel:+1987654321" className="text-[#7A7A7A] font-light hover:text-[#B29B77] transition-colors">
                          +1 (987) 654-321
                        </a>
                        <br />
                        <a href="mailto:sales@mostrarpack.com" className="text-[#7A7A7A] font-light hover:text-[#B29B77] transition-colors">
                          sales@mostrarpack.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visit Us */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F7F7F8] rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-[#0C4C5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#1F1F1F] mb-2">Visit Us</h3>
                  <address className="not-italic text-[#7A7A7A] font-light">
                    <p>JDB Management Headquarters</p>
                    <p>789 Executive Boulevard</p>
                    <p>Luxury District, LN 54321</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-[#F7F7F8] p-8 lg:p-12 rounded-xl">
            <h3 className="text-2xl font-light text-[#1F1F1F] mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-light text-[#7A7A7A] mb-2">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 border border-[#E5E5E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0C4C5B] focus:border-[#0C4C5B]"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-light text-[#7A7A7A] mb-2">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 border border-[#E5E5E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0C4C5B] focus:border-[#0C4C5B]"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-light text-[#7A7A7A] mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#E5E5E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0C4C5B] focus:border-[#0C4C5B]"
                />
              </div>
              
              <div>
                <label htmlFor="division" className="block text-sm font-light text-[#7A7A7A] mb-2">Division (Optional)</label>
                <select
                  id="division"
                  className="w-full px-4 py-3 border border-[#E5E5E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0C4C5B] focus:border-[#0C4C5B] bg-white"
                >
                  <option value="">Select Division</option>
                  <option value="regalo">Regalo Pack</option>
                  <option value="mostrar">Mostrar Pack</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light text-[#7A7A7A] mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E5E5E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0C4C5B] focus:border-[#0C4C5B]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0C4C5B] text-white rounded-md hover:bg-[#093a45] transition-colors duration-300 font-light"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;