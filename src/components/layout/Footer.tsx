'use client';

import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
// import Image from 'next/image'; // Descomentar cuando uses el logo blanco

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Menú', href: '#menu' },
    { label: 'Ubicación', href: '#location' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="bg-wine-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* TODO: Descomentar cuando tengas logo-don-esteban-white.png
            <div className="mb-6">
              <Image
                src="/images/logo-don-esteban-white.png"
                alt="Don Esteban Gourmet"
                width={250}
                height={100}
                className="w-auto h-20"
              />
            </div>
            */}
            <h3 className="font-serif text-3xl font-bold mb-4">
              Don Esteban Gourmet
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sabores de Europa, España y el mundo. Más de 25 años compartiendo los mejores embutidos, quesos y productos gourmet con nuestra ciudad.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wine-800 hover:bg-wine-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Calle Principal #123<br />
                  Centro, Aruba
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+50488391675"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +504 8839-1675
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@donestebangourmet.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@donestebangourmet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-wine-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="md:flex md:justify-between md:items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Don Esteban Gourmet. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
