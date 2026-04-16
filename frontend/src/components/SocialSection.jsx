import React from 'react';
import { Facebook, Instagram, Music, ExternalLink } from 'lucide-react';
import { socialLinks } from '../mock';

const SocialSection = () => {
  const socials = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: socialLinks.facebook,
      description: 'Síguenos para ver nuestras últimas publicaciones',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:border-blue-500/50'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: socialLinks.instagram,
      description: 'Fotos deliciosas de nuestros platillos',
      color: 'from-pink-600 to-purple-700',
      hoverColor: 'hover:border-pink-500/50'
    },
    {
      name: 'TikTok',
      icon: Music,
      url: socialLinks.tiktok,
      description: 'Videos y contenido entretenido',
      color: 'from-black to-gray-800',
      hoverColor: 'hover:border-white/50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Síguenos en Redes
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Mantente conectado con nosotros para ofertas especiales, nuevo menú y más
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ${social.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Icon size={28} className="text-amber-500" />
                    </div>
                    <ExternalLink size={20} className="text-white/40 group-hover:text-white/80 transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {social.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {social.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 bg-amber-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-4">¿Prefieres ordenar en línea?</p>
          <a
            href={socialLinks.pedidosya}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <span>Ordena en PedidosYa</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
