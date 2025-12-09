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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wine-900 mb-6">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-wine-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            ¿Tienes alguna pregunta o necesitas asesoría? Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-cream-50 rounded-lg p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-wine-900 mb-6">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-500 focus:ring-2 focus:ring-wine-200 transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-500 focus:ring-2 focus:ring-wine-200 transition-all outline-none"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-500 focus:ring-2 focus:ring-wine-200 transition-all outline-none"
                    placeholder="+57 300 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-500 focus:ring-2 focus:ring-wine-200 transition-all outline-none resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-wine-600 hover:bg-wine-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* WhatsApp CTA */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-8 shadow-lg text-white h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-4">
                    ¿Prefieres WhatsApp?
                  </h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Chatea con nosotros directamente y obtén respuesta inmediata. Te asesoramos en tus pedidos, consultas y recomendaciones.
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Abrir WhatsApp
                  </a>
                  <p className="mt-6 text-sm text-white/80">
                    Respuesta promedio: menos de 1 hora
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

export default ContactSection;
