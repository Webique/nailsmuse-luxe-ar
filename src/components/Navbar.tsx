import React from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { language, toggleLanguage, isRTL } = useLanguage();
  
  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Signature Services',
      menu: 'Menu',
      packages: 'Packages',
      location: 'Location & Hours',
      contact: 'Contact',
      whatsapp: 'WhatsApp'
    },
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا المميزة',
      menu: 'القائمة',
      packages: 'الباقات',
      location: 'الموقع والساعات',
      contact: 'تواصل معنا',
      whatsapp: 'واتساب'
    }
  };
  
  const t = translations[language];
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#signature-services' },
    { key: 'menu', href: '#menu' },
    { key: 'packages', href: '#packages' },
    { key: 'location', href: '#location-hours' },
    { key: 'contact', href: '#contact' }
  ];
  
  return (
    <nav className={`fixed top-0 w-full bg-pure-white/95 backdrop-blur-md border-b border-porcelain z-50 ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-pure-white rounded-full"></div>
            </div>
            <span className={`${isRTL ? 'mr-3' : 'ml-3'} text-xl font-playfair font-semibold text-charcoal`}>
              Nails Muse
            </span>
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-charcoal hover:text-ink-black transition-colors duration-300 font-medium"
              >
                {t[link.key as keyof typeof t]}
              </button>
            ))}
          </div>
          
          {/* Right side - Language toggle + WhatsApp */}
          <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-charcoal hover:text-ink-black"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
            
            <Button
              asChild
              className="btn-whatsapp"
            >
              <a 
                href="https://wa.me/966531090647"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;