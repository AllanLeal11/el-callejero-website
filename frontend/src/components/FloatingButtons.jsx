import React, { useState, useEffect } from 'react';
import { MessageCircle, ShoppingBag, X, ChevronUp } from 'lucide-react';
import { restaurantInfo, socialLinks } from '../mock';

const FloatingButtons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = restaurantInfo.whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola! Me gustaría hacer un pedido.')}`;

  return (
    <>
      {/* Main Floating Menu Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action Buttons (appear when menu is open) */}
        <div className={`flex flex-col space-y-3 mb-3 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <MessageCircle size={24} />
            <span className="font-semibold pr-2 whitespace-nowrap">WhatsApp</span>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 bg-black/90 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Chatear con nosotros
            </div>
          </a>

          {/* PedidosYa Button */}
          <a
            href={socialLinks.pedidosya}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center space-x-3 bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ShoppingBag size={24} />
            <span className="font-semibold pr-2 whitespace-nowrap">PedidosYa</span>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 bg-black/90 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Ordenar en línea
            </div>
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
            isMenuOpen 
              ? 'bg-red-500 hover:bg-red-600 rotate-90' 
              : 'bg-amber-500 hover:bg-amber-600 hover:scale-110 animate-pulse-slow'
          }`}
        >
          {isMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <ShoppingBag size={28} className="text-black" />
          )}
        </button>

        {/* Ripple Effect */}
        {!isMenuOpen && (
          <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping-slow opacity-75"></div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-zinc-800/90 hover:bg-amber-500 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
