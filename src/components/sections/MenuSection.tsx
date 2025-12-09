'use client';

import { Wine, Beef, ChefHat, Gift, ExternalLink } from 'lucide-react';

const MenuSection = () => {
  const menuLink = '#'; // Variable para completar más adelante con el enlace al menú

  const categories = [
    {
      icon: Beef,
      title: 'Jamones Ibéricos',
      description: 'Jamón de bellota, jamón serrano y embutidos españoles de primera calidad.',
    },
    {
      icon: ChefHat,
      title: 'Quesos Artesanales',
      description: 'Selección de quesos europeos: manchego, parmesano, brie, gouda y más.',
    },
    {
      icon: Wine,
      title: 'Vinos y Conservas',
      description: 'Vinos españoles, italianos y franceses. Aceites de oliva y conservas gourmet.',
    },
    {
      icon: Gift,
      title: 'Tablas y Regalos',
      description: 'Cestas gourmet personalizadas y tablas listas para compartir.',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wine-900 mb-6">
            Conoce lo Mejor de Europa, España y el Mundo
          </h2>
          <div className="w-24 h-1 bg-wine-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Descubre nuestra selección de jamones ibéricos, embutidos artesanales, quesos europeos, conservas, vinos y productos especiales para tablas, picadas y regalos gourmet.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-cream-50 rounded-lg p-8 hover:bg-wine-50 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-wine-200"
              >
                <div className="w-16 h-16 bg-wine-600 group-hover:bg-wine-700 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-wine-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-wine-600 to-wine-800 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Explora Nuestro Menú Completo
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Descubre todos nuestros productos, precios y promociones especiales. Actualizado regularmente con nuevas llegadas de Europa.
            </p>
            <a
              href={menuLink}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-wine-700 rounded-full font-bold text-lg hover:bg-cream-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Haz clic aquí y accede al menú
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-cream-50 rounded-lg">
            <p className="font-semibold text-wine-900 text-lg mb-2">🇪🇸 Importación Directa</p>
            <p className="text-sm text-gray-600">Productos traídos directamente desde España</p>
          </div>
          <div className="text-center p-6 bg-cream-50 rounded-lg">
            <p className="font-semibold text-wine-900 text-lg mb-2">📦 Pedidos Especiales</p>
            <p className="text-sm text-gray-600">¿No encuentras algo? Lo conseguimos para ti</p>
          </div>
          <div className="text-center p-6 bg-cream-50 rounded-lg">
            <p className="font-semibold text-wine-900 text-lg mb-2">🎁 Envoltorio Gratis</p>
            <p className="text-sm text-gray-600">Todos nuestros regalos van perfectamente presentados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
