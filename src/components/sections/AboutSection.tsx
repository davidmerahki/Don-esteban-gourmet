'use client';

import { useState, useEffect } from 'react';
import { Heart, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: '/images/historia-tabla.png',
      alt: 'Tabla de embutidos y quesos gourmet',
    },
    {
      src: '/images/historia-chef.png',
      alt: 'Chef preparando productos gourmet',
    },
  ];

  // Carrusel automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

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

            {/* Image Carousel */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
              {/* Images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6 text-wine-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6 text-wine-800" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
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
