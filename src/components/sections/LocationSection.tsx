'use client';

import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const LocationSection = () => {
  const locationData = {
    address: 'Calle Principal #123, Centro',
    city: 'Aruba',
    phone: '+504 8839-1675',
    hours: {
      weekdays: 'Lunes a Viernes: 9:00 AM - 7:00 PM',
      saturday: 'Sábado: 9:00 AM - 6:00 PM',
      sunday: 'Domingo: 10:00 AM - 3:00 PM',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.5441898625947!2d-70.04571152458908!3d12.575758918916852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDM0JzMyLjciTiA3MMKwMDInMzUuMyJX!5e0!3m2!1sen!2s!4v1702313000000!5m2!1sen!2s',
  };

  return (
    <section id="location" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Premium */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-spanish-600/20 border border-gold-400/30 rounded-full text-gold-400 text-sm font-bold tracking-wider">
              📍 ENCUÉNTRANOS
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Visítanos en</span>
            <span className="block bg-gradient-to-r from-spanish-500 via-gold-400 to-spanish-500 bg-clip-text text-transparent">
              {locationData.city}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            <Navigation className="w-5 h-5 text-gold-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Te esperamos con la mejor atención y productos selectos de España
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Map Premium */}
          <div className="relative animate-slide-in-left">
            {/* Frame decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-spanish-600/20 via-gold-400/10 to-spanish-600/20 rounded-3xl blur-xl"></div>
            
            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border-4 border-gold-400/30 shadow-2xl">
              <iframe
                src={locationData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Don Esteban Gourmet"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Overlay con info */}
              <div className="absolute bottom-6 left-6 right-6 bg-dark-900/90 backdrop-blur-md border border-gold-400/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-spanish-600 to-spanish-700 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gold-400 text-sm font-semibold">NUESTRA UBICACIÓN</p>
                    <p className="text-white font-medium">{locationData.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Premium */}
          <div className="space-y-4 md:space-y-6 animate-slide-in-right">
            {/* Address */}
            <div className="group bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border-2 border-spanish-600/20 hover:border-gold-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-spanish-600/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-spanish-600 to-spanish-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3 group-hover:text-gold-300 transition-colors">
                    Dirección
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-1">
                    {locationData.address}
                  </p>
                  <p className="text-gray-400 text-lg">
                    {locationData.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="group bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border-2 border-spanish-600/20 hover:border-gold-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4 group-hover:text-gold-300 transition-colors">
                    Horarios
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-spanish-600 rounded-full"></div>
                      <p className="text-gray-300">{locationData.hours.weekdays}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-spanish-600 rounded-full"></div>
                      <p className="text-gray-300">{locationData.hours.saturday}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-spanish-600 rounded-full"></div>
                      <p className="text-gray-300">{locationData.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border-2 border-spanish-600/20 hover:border-gold-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-spanish-600/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-spanish-600 to-spanish-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3 group-hover:text-gold-300 transition-colors">
                    Teléfono
                  </h3>
                  <a
                    href={`tel:${locationData.phone}`}
                    className="text-2xl font-bold bg-gradient-to-r from-spanish-500 to-gold-400 bg-clip-text text-transparent hover:from-spanish-400 hover:to-gold-300 transition-all inline-block"
                  >
                    {locationData.phone}
                  </a>
                  <p className="text-gray-400 mt-2">
                    Llámanos para pedidos y consultas
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
