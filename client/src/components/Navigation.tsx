'use client'

import React, { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Mobile menüyü kapat
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">Dinamik</span>
              <span className="font-rubik-maze text-orange-500 ml-1">TEMPO</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                Özellikler
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                Fiyatlar
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                İletişim
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Ana menü"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
              >
                Özellikler
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
              >
                Fiyatlar
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
              >
                İletişim
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation