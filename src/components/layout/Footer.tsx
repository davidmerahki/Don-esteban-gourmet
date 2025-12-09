'use client';

import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-dark-950 text-white border-t-2 border-spanish-600/20 relative overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #dc2626 1px, transparent 1px), radial-gradient(circle at 80% 50%, #facc15 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Premium con Logo Real */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo-don-esteban-gourmet-blanco-2.png"
                alt="Don Esteban Gourmet"
                width={240}
                height={80}
                className="w-auto h-16 md:h-20"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-spanish-600 to-spanish-700 hover:from-gold-500 hover:to-gold-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Premium */}
          <div>
            <h4 className="font-serif text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gold-400">
              {t.footer.navigation.title}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-all inline-flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 bg-spanish-600 rounded-full group-hover:w-6 group-hover:bg-gold-400 transition-all"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Premium */}
          <div>
            <h4 className="font-serif text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gold-400">
              {t.footer.contact.title}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-spanish-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-spanish-600/40 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  J.E. Irausquin Blvd 97-A<br />
                  Noord, Aruba (Near Radisson Blu)
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-spanish-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-spanish-600/40 transition-colors">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <a
                  href="tel:+50488391675"
                  className="text-gray-400 hover:text-gold-400 transition-colors font-semibold"
                >
                  +504 8839-1675
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-spanish-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-spanish-600/40 transition-colors">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <a
                  href="mailto:info@donestebangourmet.com"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  info@donestebangourmet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider decorativo */}
        <div className="mt-12 md:mt-16 mb-6 md:mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-spanish-600 to-transparent"></div>
        </div>

        {/* Bottom Bar Premium */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            &copy; {currentYear} Don Esteban Gourmet. {t.footer.tagline} <Heart className="w-4 h-4 text-spanish-500 fill-spanish-500 animate-pulse" /> {t.footer.location}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              {t.footer.links.privacy}
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              {t.footer.links.terms}
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              {t.footer.links.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
