'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Menú', href: '#menu' },
    { label: 'Ubicación', href: '#location' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-2xl border-b-2 border-spanish-600/30'
          : 'bg-gradient-to-b from-dark-950/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Real de Don Esteban */}
          <a href="#hero" className="flex items-center group">
            <Image
              src="/images/logo-don-esteban-gourmet-blanco-2.png"
              alt="Don Esteban Gourmet"
              width={180}
              height={60}
              priority
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
              }`}
              style={{
                filter: isScrolled ? 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(2528%) hue-rotate(346deg) brightness(96%) contrast(89%)' : 'none'
              }}
            />
          </a>

          {/* Desktop Menu con estilo premium */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-semibold transition-all duration-300 hover:scale-110 relative group ${
                  isScrolled ? 'text-gray-200' : 'text-white drop-shadow-md'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-spanish-500 to-gold-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button Premium */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all ${
              isScrolled 
                ? 'bg-spanish-600 text-white' 
                : 'bg-white/10 backdrop-blur-sm text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu con estilo oscuro */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 bg-dark-800/95 backdrop-blur-md rounded-xl p-6 border border-spanish-600/30 animate-fade-in-down">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-200 hover:text-gold-400 font-semibold transition-all hover:translate-x-2 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-spanish-600 rounded-full"></span>
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
