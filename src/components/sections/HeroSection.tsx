'use client';

import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const handleMenuClick = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappNumber = '50488391675'; // +504 8839-1675

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950"
    >
      {/* Background Image with Subtle Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
        }}
      >
        {/* Overlay más sutil para mostrar la imagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-900/40 to-dark-950/60"></div>
        {/* Acento rojo España muy sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-spanish-900/10 via-transparent to-gold-900/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Badge con animación - Optimizado móvil */}
          <div className="inline-block animate-fade-in-down">
            <span className="px-4 py-2 md:px-6 md:py-3 bg-spanish-600/90 backdrop-blur-md rounded-full text-xs md:text-sm font-bold tracking-wider shadow-xl border-2 border-gold-400/40">
              🇪🇸 TRADICIÓN ESPAÑOLA DESDE 1995
            </span>
          </div>

          {/* Espacio conservado sin título (invisible) */}
          <div className="h-20 md:h-32" aria-hidden="true"></div>

          {/* Main Message - Ahora es el protagonista */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: '0.1s' }}>
            <span className="block bg-gradient-to-r from-spanish-400 via-gold-300 to-spanish-400 bg-clip-text text-transparent drop-shadow-2xl">
              Auténticos Jamones Ibéricos
            </span>
            <span className="block text-white drop-shadow-2xl mt-2">
              y Embutidos Españoles
            </span>
          </h1>

          {/* Description con más prominencia */}
          <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Sabores selectos de España para disfrutar, compartir y regalar
          </p>

          {/* CTA Buttons con animación - Optimizado móvil */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleMenuClick}
              className="group w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-spanish-600 to-spanish-700 hover:from-spanish-700 hover:to-spanish-800 text-white rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-spanish-600/50 flex items-center justify-center gap-2 md:gap-3 border-2 border-gold-400/30"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              Ver Nuestro Menú
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-green-600/50 flex items-center justify-center gap-2 md:gap-3 border-2 border-green-400/30"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Pedir por WhatsApp
            </a>
          </div>

          {/* Features con diseño español - Optimizado móvil */}
          <div className="pt-12 md:pt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="group backdrop-blur-md bg-dark-800/60 border-2 border-spanish-600/30 hover:border-gold-400/60 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-spanish-600/20">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-xl mb-2 text-gold-400">Calidad Premium</h3>
              <p className="text-sm text-gray-300">Jamones ibéricos certificados</p>
            </div>
            <div className="group backdrop-blur-md bg-dark-800/60 border-2 border-spanish-600/30 hover:border-gold-400/60 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-spanish-600/20">
              <div className="text-4xl mb-3">🇪🇸</div>
              <h3 className="font-bold text-xl mb-2 text-gold-400">100% Español</h3>
              <p className="text-sm text-gray-300">Directamente desde España</p>
            </div>
            <div className="group backdrop-blur-md bg-dark-800/60 border-2 border-spanish-600/30 hover:border-gold-400/60 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-spanish-600/20">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-xl mb-2 text-gold-400">Desde 1995</h3>
              <p className="text-sm text-gray-300">Tradición y experiencia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Premium */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gold-400 text-xs font-semibold tracking-wider">DESCUBRE MÁS</p>
          <div className="w-6 h-10 border-2 border-gold-400/70 rounded-full flex items-start justify-center p-2 shadow-lg shadow-gold-400/20">
            <div className="w-1 h-3 bg-gradient-to-b from-spanish-500 to-gold-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
