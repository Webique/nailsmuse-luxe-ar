import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle, Globe, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';

const Navbar = () => {
  const { language, toggleLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide/show on mobile (screen width < 768px)
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px - hide navbar
          setIsScrolled(true);
        } else {
          // Scrolling up or at top - show navbar
          setIsScrolled(false);
        }
      } else {
        // On desktop, always show navbar
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Signature Services',
      menu: 'Menu',
      gallery: 'Gallery',
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
      gallery: 'المعرض',
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
    { key: 'gallery', href: '#gallery' },
    { key: 'packages', href: '#packages' },
    { key: 'location', href: '#location-hours' },
    { key: 'contact', href: '#contact' }
  ];
  
  return (
    <nav className={`fixed top-0 w-full bg-pure-white/95 backdrop-blur-md border-b border-porcelain z-50 transition-transform duration-300 ease-in-out ${isScrolled ? '-translate-y-full' : 'translate-y-0'} ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <img 
              src="/favicon.ico" 
              alt="Nails Muse Logo" 
              className="h-32 w-auto"
            />
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
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
          
          {/* Right side - Language toggle + Mobile menu button */}
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} gap-x-4`}>
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-charcoal hover:text-ink-black"
            >
              <Globe className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
            {/* Mobile menu button using Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 text-charcoal hover:text-ink-black transition-colors duration-300">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side={isRTL ? 'left' : 'right'} className="w-80 max-w-[85vw] bg-pure-white border-none">
                <div className="flex items-center justify-between mb-6">
                  <img src="/favicon.ico" alt="Nails Muse Logo" className="h-10 w-auto" />
                  <SheetClose className="p-2 text-charcoal hover:text-ink-black" />
                </div>
                <nav className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.key}>
                      <button
                        onClick={() => scrollToSection(link.href.substring(1))}
                        className={`block w-full text-left py-3 px-4 text-lg font-medium text-charcoal hover:text-ink-black hover:bg-pearl rounded-lg transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-poppins'}`}
                      >
                        {t[link.key as keyof typeof t]}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                <div className={`mt-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <Button onClick={toggleLanguage} variant="outline" size="sm" className="text-charcoal border-porcelain hover:bg-pearl">
                    <Globe className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'en' ? 'العربية' : 'English'}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu handled by Sheet */}
    </nav>
  );
};

export default Navbar;