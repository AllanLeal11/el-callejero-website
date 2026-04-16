import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { restaurantInfo } from '../mock';

const LocationSection = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address)}`;
  const wazeUrl = `https://waze.com/ul/hd1ghrz8t2`;

  const scheduleEntries = Object.entries(restaurantInfo.schedule);

  return (
    <section id="location" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
            <MapPin size={32} className="text-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Encuéntranos
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Visítanos en nuestra ubicación o pide a domicilio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-96 lg:h-auto">
            <iframe
              title="Ubicación El Callejero"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(restaurantInfo.address)}&zoom=15`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"></div>
          </div>

          {/* Info Card */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Dirección</h3>
                  <p className="text-white/70 mb-4">{restaurantInfo.address}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Navigation size={18} />
                      <span>Google Maps</span>
                    </a>
                    <a
                      href={wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Navigation size={18} />
                      <span>Waze</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Horario</h3>
                  <div className="space-y-2">
                    {scheduleEntries.map(([day, hours]) => (
                      <div key={day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                        <span className="text-white/70 capitalize font-medium">
                          {day === 'monday' && 'Lunes'}
                          {day === 'tuesday' && 'Martes'}
                          {day === 'wednesday' && 'Miércoles'}
                          {day === 'thursday' && 'Jueves'}
                          {day === 'friday' && 'Viernes'}
                          {day === 'saturday' && 'Sábado'}
                          {day === 'sunday' && 'Domingo'}
                        </span>
                        <span className={`font-semibold ${hours === 'Cerrado' ? 'text-red-400' : 'text-amber-400'}`}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
                  <a
                    href={`tel:${restaurantInfo.phone}`}
                    className="text-amber-400 hover:text-amber-300 font-semibold text-lg transition-colors duration-300"
                  >
                    {restaurantInfo.phone}
                  </a>
                  <p className="text-white/50 text-sm mt-2">
                    Solo recibimos pedidos por llamada telefónica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
