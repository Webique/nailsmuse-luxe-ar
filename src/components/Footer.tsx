import React from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      tagline: 'Nails & Lashes wellness.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      address: 'Al Naaman District, Abha',
      phone: '+966 531090647',
      copyright: 'Nails Muse. All rights reserved.',
      links: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        menu: 'Menu',
        packages: 'Packages',
        location: 'Location',
        contact: 'Contact'
      }
    },
    ar: {
      tagline: 'عناية الأظافر والرموش.',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل معنا',
      address: 'حي النعمان، أبها',
      phone: '+966 531090647',
      copyright: 'نايلز ميوز. جميع الحقوق محفوظة.',
      links: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        menu: 'القائمة',
        packages: 'الباقات',
        location: 'الموقع',
        contact: 'تواصل معنا'
      }
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
    <footer className="bg-charcoal text-pure-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? 'text-right' : ''}`}>
          {/* Logo & Tagline */}
          <div className={`space-y-4 ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <img 
                src="/favicon.ico" 
                alt="Nails Muse Logo" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-pearl">
              {t.tagline}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className={`space-y-4 ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
            <h3 className="text-lg font-semibold">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-pearl hover:text-pure-white transition-colors duration-300"
                  >
                    {t.links[link.key as keyof typeof t.links]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className={`space-y-4 ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
            <h3 className="text-lg font-semibold">{t.contact}</h3>
            <div className="space-y-3">
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <a 
                  href="https://wa.me/966531090647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pearl hover:text-pure-white transition-colors duration-300"
                >
                  <span dir="ltr" className="inline-block">{t.phone}</span>
                </a>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className="text-pearl">{t.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t border-pearl/20 text-center ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
          <p className="text-pearl">
            © {new Date().getFullYear()} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;