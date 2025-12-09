'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageWidget = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-14 h-14 bg-gradient-to-br from-spanish-600 to-spanish-700 hover:from-spanish-700 hover:to-spanish-800 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-gold-400/30"
        aria-label="Change language"
      >
        <Globe className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
      </button>

      {/* Language Options */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-dark-800 border-2 border-gold-400/30 rounded-2xl shadow-2xl overflow-hidden animate-scale-in min-w-[180px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'es');
                setIsOpen(false);
              }}
              className={`w-full px-6 py-4 flex items-center gap-3 transition-all hover:bg-spanish-600/20 ${
                language === lang.code ? 'bg-spanish-600/30 border-l-4 border-gold-400' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className={`font-semibold ${
                language === lang.code ? 'text-gold-400' : 'text-gray-300'
              }`}>
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageWidget;
