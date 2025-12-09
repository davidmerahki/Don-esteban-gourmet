'use client';

import { Wine, Beef, ChefHat, Gift, ExternalLink, Sparkles, Package, Truck, Award } from 'lucide-react';

const MenuSection = () => {
  const menuLink = '#'; // Variable para completar más adelante con el enlace al menú

  const categories = [
    {
      icon: Beef,
      title: 'Jamones Ibéricos',
      description: 'Jamón de bellota, jamón serrano y embutidos españoles de primera calidad.',
      emoji: '🍖',
      color: 'from-spanish-600 to-spanish-700'
    },
    {
      icon: ChefHat,
      title: 'Quesos Artesanales',
      description: 'Selección de quesos europeos: manchego, parmesano, brie, gouda y más.',
      emoji: '🧀',
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: Wine,
      title: 'Vinos y Conservas',
      description: 'Vinos españoles, italianos y franceses. Aceites de oliva y conservas gourmet.',
      emoji: '🍷',
      color: 'from-spanish-700 to-spanish-800'
    },
    {
      icon: Gift,
      title: 'Tablas y Regalos',
      description: 'Cestas gourmet personalizadas y tablas listas para compartir.',
      emoji: '🎁',
      color: 'from-gold-600 to-gold-700'
    },
  ];

  return (
    <section id="menu" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Patrón de fondo español */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #facc15 0px, #facc15 1px, transparent 1px, transparent 40px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #dc2626 0px, #dc2626 1px, transparent 1px, transparent 40px)',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Premium */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gold-600/20 border border-spanish-600/30 rounded-full text-spanish-400 text-sm font-bold tracking-wider">
              🍷 PRODUCTOS SELECTOS
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Sabores de</span>
            <span className="block bg-gradient-to-r from-gold-400 via-spanish-500 to-gold-400 bg-clip-text text-transparent">
              España y Europa
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-spanish-500 to-transparent"></div>
            <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-spanish-600 to-gold-400"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-spanish-500 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Jamones ibéricos, embutidos artesanales, quesos europeos y productos gourmet para disfrutar
          </p>
        </div>

        {/* Categories Grid Premium */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border-2 border-spanish-600/20 hover:border-gold-400/60 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-spanish-600/30 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorador de fondo */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-400/5 to-transparent rounded-bl-full"></div>
                
                {/* Emoji grande decorativo */}
                <div className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  {category.emoji}
                </div>
                
                <div className="relative">
                  {/* Icono con gradiente personalizado */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl rotate-6 group-hover:rotate-12 group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {category.description}
                  </p>
                  
                  {/* Indicador hover */}
                  <div className="mt-4 flex items-center gap-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-semibold">Ver productos</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box Premium */}
        <div className="relative max-w-5xl mx-auto mb-20 animate-scale-in">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-spanish-600 via-gold-400 to-spanish-600 rounded-3xl blur-2xl opacity-20"></div>
          
          <div className="relative bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-gold-400/30 overflow-hidden">
            {/* Pattern decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-spanish-600/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                <span className="text-gold-400 text-sm font-bold">CATÁLOGO COMPLETO</span>
              </div>
              
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                Descubre Nuestro
                <span className="block bg-gradient-to-r from-spanish-500 to-gold-400 bg-clip-text text-transparent mt-2">
                  Menú Completo
                </span>
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Explora todos nuestros productos, precios y promociones especiales. Actualizado con nuevas llegadas de España.
              </p>
              
              <a
                href={menuLink}
                className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-spanish-600 to-spanish-700 hover:from-spanish-700 hover:to-spanish-800 text-white rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-spanish-600/50 border-2 border-gold-400/30 group"
              >
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                Acceder al Menú
                <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Stats decorativos - Optimizado móvil */}
              <div className="mt-8 md:mt-12 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-spanish-500 to-gold-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-spanish-500 to-gold-400 bg-clip-text text-transparent">100%</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">Español</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-spanish-500 to-gold-400 bg-clip-text text-transparent">30</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">Años</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Premium */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group relative bg-dark-800 rounded-2xl p-8 border border-spanish-600/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-spanish-600 to-spanish-700 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-lg text-gold-400 mb-2">Importación Directa</h4>
            <p className="text-gray-400 text-sm">Productos traídos directamente desde España</p>
          </div>
          
          <div className="group relative bg-dark-800 rounded-2xl p-8 border border-spanish-600/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <Package className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-lg text-gold-400 mb-2">Pedidos Especiales</h4>
            <p className="text-gray-400 text-sm">¿No encuentras algo? Lo conseguimos para ti</p>
          </div>
          
          <div className="group relative bg-dark-800 rounded-2xl p-8 border border-spanish-600/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-spanish-600 to-spanish-700 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-lg text-gold-400 mb-2">Envoltorio Premium</h4>
            <p className="text-gray-400 text-sm">Todos nuestros regalos perfectamente presentados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
