import React, { useState, useEffect } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { restaurantInfo, heroImages, socialLinks } from '../mock';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Star size={20} fill="#000" className="text-black" />
            <span className="text-black font-bold">{restaurantInfo.rating}</span>
            <span className="text-black text-sm">Calificación</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
            {restaurantInfo.name}
          </h1>
          
          <p className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6 animate-slide-up animation-delay-200">
            {restaurantInfo.tagline}
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            {restaurantInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-600">
            <button
              onClick={scrollToMenu}
              className="group relative bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto"
            >
              <span className="relative z-10">Ver Menú Completo</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <a
              href={socialLinks.pedidosya}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white hover:bg-gray-100 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto"
            >
              <span className="relative z-10">Pedir Ahora</span>
            </a>

            <button
              onClick={scrollToMenu}
              className="group relative bg-transparent border-2 border-white hover:bg-white text-white hover:text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Explorar
            </button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-amber-500 w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-10"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
