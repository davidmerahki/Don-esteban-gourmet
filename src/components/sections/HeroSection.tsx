'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleMenuClick = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappNumber = '50488391675'; // +504 8839-1675

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/Don%20Esteban%20Gourmet.jfif)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-wine-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
              Desde 1995
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Charcutería Don Esteban Gourmet
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Sabores de Europa, España y el mundo en tu ciudad
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Embutidos, quesos y productos seleccionados para compartir, regalar y disfrutar como en el viejo continente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={handleMenuClick}
              className="group px-8 py-4 bg-wine-600 hover:bg-wine-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              Ver nuestro menú
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Features */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-1">Calidad Premium</h3>
              <p className="text-sm text-gray-200">Productos seleccionados de Europa</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-1">Atención Personalizada</h3>
              <p className="text-sm text-gray-200">Te asesoramos en cada compra</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-1">Tradición Europea</h3>
              <p className="text-sm text-gray-200">Más de 25 años de experiencia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
