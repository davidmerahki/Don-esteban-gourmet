'use client';

import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const whatsappNumber = '50488391675'; // +504 8839-1675

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede implementar la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappMessage = `Hola Don Esteban Gourmet! Me gustaría hacer una consulta.`;

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #facc15 0px, #facc15 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, #dc2626 0px, #dc2626 2px, transparent 2px, transparent 20px)',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Premium */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gold-600/20 border border-spanish-600/30 rounded-full text-spanish-400 text-sm font-bold tracking-wider">
              💬 HABLEMOS
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">¿Tienes</span>
            <span className="block bg-gradient-to-r from-gold-400 via-spanish-500 to-gold-400 bg-clip-text text-transparent">
              Preguntas?
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-spanish-500 to-transparent"></div>
            <MessageCircle className="w-5 h-5 text-gold-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-spanish-500 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por WhatsApp o completa el formulario
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form Premium */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-6 md:p-8 border-2 border-spanish-600/20 animate-slide-in-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold-400 mb-6 md:mb-8">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border-2 border-spanish-600/30 focus:border-gold-400 rounded-xl text-white placeholder-gray-500 transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border-2 border-spanish-600/30 focus:border-gold-400 rounded-xl text-white placeholder-gray-500 transition-all outline-none"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border-2 border-spanish-600/30 focus:border-gold-400 rounded-xl text-white placeholder-gray-500 transition-all outline-none"
                    placeholder="+504 8839-1675"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-700 border-2 border-spanish-600/30 focus:border-gold-400 rounded-xl text-white placeholder-gray-500 transition-all outline-none resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-spanish-600 to-spanish-700 hover:from-spanish-700 hover:to-spanish-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-spanish-600/50 border-2 border-gold-400/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* WhatsApp CTA Premium */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 md:p-10 shadow-2xl text-white h-full flex flex-col justify-center border-2 border-green-400/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                    <MessageCircle className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    ¿Prefieres WhatsApp?
                  </h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Chatea con nosotros directamente y obtén respuesta inmediata. Te asesoramos en pedidos y consultas.
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-600 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 shadow-2xl group"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Abrir WhatsApp
                  </a>
                  <div className="mt-8 flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-white/90 font-semibold">Respuesta en menos de 1 hora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
