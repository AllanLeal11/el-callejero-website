import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={restaurantInfo.logo} 
              alt={restaurantInfo.name}
              className="h-12 w-12 object-cover rounded-full ring-2 ring-amber-500/50"
            />
            <div>
              <h1 className="text-xl font-bold text-white">{restaurantInfo.name}</h1>
              <p className="text-xs text-amber-400">{restaurantInfo.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Contacto
            </button>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Llamar Ahora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-amber-400 transition-colors duration-300 font-medium text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-white hover:text-amber-400 transition-colors duration-300 font-medium text-left"
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-white hover:text-amber-400 transition-colors duration-300 font-medium text-left"
              >
                Ubicación
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-amber-400 transition-colors duration-300 font-medium text-left"
              >
                Contacto
              </button>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 text-center"
              >
                Llamar Ahora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
