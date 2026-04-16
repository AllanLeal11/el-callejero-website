import React from 'react';
import { Heart, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={restaurantInfo.logo} 
                alt={restaurantInfo.name}
                className="h-12 w-12 object-cover rounded-full ring-2 ring-amber-500/50"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{restaurantInfo.name}</h3>
                <p className="text-xs text-amber-400">{restaurantInfo.tagline}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              La mejor experiencia culinaria en comida estilo urbana fusión. 
              Ingredientes frescos y sabor gourmet en cada platillo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Menú
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Ubicación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-white/60 text-sm">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <a 
                  href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  WhatsApp: {restaurantInfo.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              © {currentYear} {restaurantInfo.name}. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-sm flex items-center space-x-1">
              <span>Hecho con</span>
              <Heart size={16} className="text-amber-500 fill-amber-500" />
              <span>en Costa Rica</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
