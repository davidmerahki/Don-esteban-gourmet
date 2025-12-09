'use client';

import { Heart, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wine-900 mb-6">
            Nuestra Historia
          </h2>
          <div className="w-24 h-1 bg-wine-600 mx-auto mb-8"></div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Nacimos con la idea de traer a nuestra ciudad los mejores sabores de Europa, en especial de España, Italia y Francia. Seleccionamos cada producto con cuidado, priorizando la calidad, el origen y la tradición.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En nuestra tienda encontrarás atención cercana, recomendaciones personalizadas y todo lo necesario para armar la tabla perfecta, sorprender a tus invitados o darte un gusto especial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada producto que ofrecemos cuenta una historia. Desde los jamones ibéricos curados en las sierras españolas hasta los quesos artesanales de pequeños productores europeos. Nos apasiona compartir estos sabores auténticos contigo.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074"
                alt="Interior de la charcutería"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-wine-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-wine-900 mb-4">
                Pasión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Amamos lo que hacemos. Cada producto es seleccionado con dedicación y cuidado para garantizar la mejor experiencia.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-wine-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-wine-900 mb-4">
                Calidad
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Solo trabajamos con proveedores certificados y productos de origen controlado que cumplen los más altos estándares.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-wine-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-wine-900 mb-4">
                Cercanía
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tratamos a cada cliente como familia. Te asesoramos personalmente para que encuentres exactamente lo que buscas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
