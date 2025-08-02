'use client';

import React, { useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDivision, setMobileDivision] = useState(false)
  const dropdownRef = useRef(null);

  const pathname = usePathname();
  const handleClick = () => {
    setIsMobileMenuOpen(false);
    setMobileDivision(false);
  };
  
  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  // Prevent dropdown from closing when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <>
      <header className="fixed top-0 w-full bg-[#F7F7F8]/90 backdrop-blur-md z-50 border-b border-[#E5E5E6]">
        <div className="px-6 md:px-12 lg:px-28">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="">
              <Image src="/images/logo.png" width={50} height={50} alt="Logo" className=''/>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`text-[#1F1F1F] hover:text-[#0C4C5B] transition-colors ${pathname === '/' ? 'font-medium' : 'font-light'}`}
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className={`text-[#1F1F1F] hover:text-[#0C4C5B] transition-colors ${pathname === '/about' ? 'font-medium' : 'font-light'}`}
              >
                About
              </Link>
              
              {/* Divisions Dropdown */}
              <div 
                className="relative"
                onClick={handleDropdown}
                ref={dropdownRef}
              >
                <button 
                  className={`flex items-center cursor-pointer text-[#1F1F1F] hover:text-[#0C4C5B] transition-colors ${pathname.includes('/divisions') ? 'font-medium' : 'font-light'}`}
                >
                  Divisions
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-[#E5E5E6]">
                    <Link 
                      href="/regalo-pack" 
                      className="block px-4 py-2 text-[#1F1F1F] hover:bg-[#F7F7F8] hover:text-[#0C4C5B] transition-colors font-light"
                    >
                      Regalo Pack
                    </Link>
                    <Link 
                      href="/mostrar-pack" 
                      className="block px-4 py-2 text-[#1F1F1F] hover:bg-[#F7F7F8] hover:text-[#0C4C5B] transition-colors font-light"
                    >
                      Mostrar Pack
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/contact" 
                className={`text-[#1F1F1F] hover:text-[#0C4C5B] transition-colors ${pathname === '/contact' ? 'font-medium' : 'font-light'}`}
              >
                Contact
              </Link>
              
              <Link 
                href="/contact" 
                className="ml-4 px-6 py-2 bg-[#B29B77] text-white rounded-md hover:bg-[#9c8765] transition-colors font-light"
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-[#1F1F1F] z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-6 flex flex-col cursor-pointer justify-between transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
                <span className={`block h-1 w-full bg-[#1F1F1F] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block h-1 w-full bg-[#1F1F1F] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-1 w-full bg-[#1F1F1F] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-[#1F1F1F]/70"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 bg-[#F7F7F8] shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-full flex flex-col p-6 overflow-y-auto">
            {/* Logo */}
            <div className="mb-12 pt-2">
              <Link href="/" className="text-2xl font-light text-[#1F1F1F]">
                JDB<span className="font-medium">Management</span>
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 space-y-4">
              <Link 
                href="/" 
                className={`block py-3 px-4 rounded-md ${pathname === '/' ? 'bg-[#0C4C5B]/10 text-[#0C4C5B]' : 'text-[#1F1F1F] hover:bg-[#E5E5E6]'}`}
                onClick={handleClick}
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className={`block py-3 px-4 rounded-md ${pathname === '/about' ? 'bg-[#0C4C5B]/10 text-[#0C4C5B]' : 'text-[#1F1F1F] hover:bg-[#E5E5E6]'}`}
                onClick={handleClick}
              >
                About
              </Link>
              
              {/* Divisions Dropdown */}
              <div className="space-y-2">
                <button 
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-md text-[#1F1F1F] hover:bg-[#E5E5E6]`}
                  onClick={() => setMobileDivision(!mobileDivision)}
                >
                  <span>Divisions</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileDivision && (
                    <div className=" pl-6 space-y-2 transition-all duration-300 ease-in-out">
                    <Link 
                      href="/regalo-pack" 
                      className={`block py-2 px-4 rounded-md ${pathname === '/divisions/regalo-pack' ? 'bg-[#0C4C5B]/10 text-[#0C4C5B]' : 'text-[#1F1F1F] hover:bg-[#E5E5E6]'}`}
                      onClick={handleClick}
                    >
                      Regalo Pack
                    </Link>
                    <Link 
                      href="/mostrar-pack" 
                      className={`block py-2 px-4 rounded-md ${pathname === '/divisions/mostrar-pack' ? 'bg-[#B29B77]/10 text-[#B29B77]' : 'text-[#1F1F1F] hover:bg-[#E5E5E6]'}`}
                      onClick={handleClick}
                    >
                      Mostrar Pack
                    </Link>
                  </div>
                )}
                
              </div>
              
              <Link 
                href="/contact" 
                className={`block py-3 px-4 rounded-md ${pathname === '/contact' ? 'bg-[#0C4C5B]/10 text-[#0C4C5B]' : 'text-[#1F1F1F] hover:bg-[#E5E5E6]'}`}
                onClick={handleClick}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="pt-8 border-t border-[#E5E5E6] mt-auto">
              <Link 
                href="/contact" 
                className="block w-full px-6 py-3 bg-[#B29B77] text-white text-center rounded-md hover:bg-[#9c8765] transition-colors font-light"
                onClick={handleClick}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;