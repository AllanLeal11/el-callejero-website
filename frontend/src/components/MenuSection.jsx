import React, { useState } from 'react';
import { ChefHat, X, BookOpen } from 'lucide-react';
import { menuCategories } from '../mock';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMenuPDF, setShowMenuPDF] = useState(false);

  return (
    <>
      <section id="menu" className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
              <ChefHat size={32} className="text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestro Menú
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Descubre nuestra selección de platillos gourmet preparados con ingredientes frescos y de la más alta calidad
            </p>
          </div>

          {/* Menu Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                {/* Card Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {category.description}
                  </p>

                  {/* Items Preview */}
                  {selectedCategory === category.id && (
                    <div className="mt-4 space-y-2 animate-slide-down">
                      {category.items.slice(0, 2).map((item, idx) => (
                        <div 
                          key={idx}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-white font-semibold text-sm">{item.name}</p>
                              <p className="text-white/60 text-xs mt-1">{item.description}</p>
                            </div>
                            {item.featured && (
                              <span className="text-amber-400 text-xs font-bold">★</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Hover Indicator */}
                  <div className="mt-4 text-amber-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {selectedCategory === category.id ? 'Toca para cerrar' : 'Toca para ver más'}
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Full Menu CTA */}
          <div className="text-center">
            <div className="inline-block bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-white/80 mb-6 text-lg">
                ¿Quieres ver nuestro menú completo con precios y todas las opciones?
              </p>
              <button
                onClick={() => setShowMenuPDF(true)}
                className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <BookOpen size={20} />
                <span>Ver Menú Completo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {showMenuPDF && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-[90vh] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowMenuPDF(false)}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <X size={24} />
            </button>

            {/* PDF Viewer with Flip Effect */}
            <div className="w-full h-full p-8">
              <iframe
                src="https://entucelular.com/callejero/#tab-69df943e8b89b-2"
                className="w-full h-full rounded-lg border-2 border-amber-500/30"
                title="Menú El Callejero"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuSection;
