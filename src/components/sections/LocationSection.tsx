'use client';

import { MapPin, Clock, Phone } from 'lucide-react';

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
    <section id="location" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wine-900 mb-6">
            Dónde Estamos
          </h2>
          <div className="w-24 h-1 bg-wine-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Visítanos en nuestra tienda física y descubre todos nuestros productos. Te esperamos con la mejor atención.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="h-[450px] rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src={locationData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Don Esteban Gourmet"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-wine-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-wine-600" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-wine-900 mb-2">
                    Dirección
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {locationData.address}
                  </p>
                  <p className="text-gray-700 text-lg">
                    {locationData.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-wine-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-wine-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-wine-900 mb-4">
                    Horarios de Atención
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed">
                      {locationData.hours.weekdays}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {locationData.hours.saturday}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {locationData.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-wine-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-wine-600" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-wine-900 mb-2">
                    Teléfono
                  </h3>
                  <a
                    href={`tel:${locationData.phone}`}
                    className="text-wine-600 hover:text-wine-700 text-lg font-semibold transition-colors"
                  >
                    {locationData.phone}
                  </a>
                  <p className="text-gray-600 mt-1">
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
