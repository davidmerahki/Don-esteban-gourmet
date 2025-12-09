'use client';

import { useState, useEffect } from 'react';
import { Heart, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: '/images/historia-tabla.png',
      alt: 'Tabla de embutidos y quesos gourmet',
    },
    {
      src: '/images/historia-chef.jpg',
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
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Patrón de fondo sutil español */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 1px, transparent 1px, transparent 20px)',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Premium */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-spanish-600/20 border border-gold-400/30 rounded-full text-gold-400 text-sm font-bold tracking-wider">
              {t.about.badge}
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">{t.about.title1}</span>
            <span className="block bg-gradient-to-r from-spanish-500 via-gold-400 to-spanish-500 bg-clip-text text-transparent">
              {t.about.title2}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            <div className="w-3 h-3 rotate-45 border-2 border-gold-400"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Premium */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            {/* Text Content con estilo editorial */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-20 bg-gradient-to-b from-spanish-600 to-gold-400 rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {t.about.body1}
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 h-20 bg-gradient-to-b from-spanish-600 to-gold-400 rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {t.about.body2}
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 h-20 bg-gradient-to-b from-spanish-600 to-gold-400 rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {t.about.body2}
                  </p>
                </div>
              </div>
              
              {/* Quote destacado */}
              <div className="relative pl-8 py-6 border-l-4 border-gold-400 bg-dark-800/50 backdrop-blur-sm rounded-r-xl">
                <svg className="absolute top-4 left-2 w-6 h-6 text-gold-400/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-200 italic text-lg">
                  &ldquo;{t.about.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Image Carousel Premium */}
            <div className="relative animate-slide-in-right">
              {/* Frame decorativo español */}
              <div className="absolute -inset-4 bg-gradient-to-br from-spanish-600/20 via-gold-400/10 to-spanish-600/20 rounded-3xl blur-xl"></div>
              
              <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group border-4 border-gold-400/20">
                {/* Images con efecto parallax */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentImage 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay gradiente español */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-dark-950/30"></div>
                    
                    {/* Label de imagen */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-dark-900/80 backdrop-blur-md border border-gold-400/30 rounded-xl p-4">
                        <p className="text-gold-400 text-sm font-semibold mb-1">GALERÍA DE PRODUCTOS</p>
                        <p className="text-white font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Navigation Buttons Premium */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-spanish-600 to-spanish-700 hover:from-spanish-700 hover:to-spanish-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-spanish-600/50 border-2 border-gold-400/30"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-spanish-600 to-spanish-700 hover:from-spanish-700 hover:to-spanish-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-spanish-600/50 border-2 border-gold-400/30"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Indicators Premium */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-dark-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-gold-400/20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentImage
                          ? 'bg-gradient-to-r from-spanish-500 to-gold-400 w-12'
                          : 'bg-gray-500 hover:bg-gray-400 w-2'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Counter */}
                <div className="absolute top-4 right-4 bg-dark-900/80 backdrop-blur-md border border-gold-400/30 rounded-full px-4 py-2">
                  <span className="text-gold-400 font-bold">{currentImage + 1}</span>
                  <span className="text-gray-400 mx-1">/</span>
                  <span className="text-gray-400">{images.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Cards Premium - Optimizado móvil */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border-2 border-spanish-600/20 hover:border-gold-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-spanish-600/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-spanish-600/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-spanish-600 to-spanish-700 rounded-2xl rotate-6 group-hover:rotate-12 flex items-center justify-center mb-6 transition-transform duration-300 shadow-lg shadow-spanish-600/30">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4 group-hover:text-gold-300 transition-colors">
                  {t.about.values.passion.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.values.passion.desc}
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border-2 border-spanish-600/20 hover:border-gold-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gold-400/20" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl rotate-6 group-hover:rotate-12 flex items-center justify-center mb-6 transition-transform duration-300 shadow-lg shadow-gold-500/30">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4 group-hover:text-gold-300 transition-colors">
                  {t.about.values.quality.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.values.quality.desc}
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border-2 border-spanish-600/20 hover:border-gold-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-spanish-600/20" style={{ animationDelay: '0.5s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-spanish-600/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-spanish-600 to-spanish-700 rounded-2xl rotate-6 group-hover:rotate-12 flex items-center justify-center mb-6 transition-transform duration-300 shadow-lg shadow-spanish-600/30">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4 group-hover:text-gold-300 transition-colors">
                  {t.about.values.trust.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.values.trust.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
