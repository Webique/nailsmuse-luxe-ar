import React from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-nails.jpg';

const Hero = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      headline: 'Refined Beauty. Effortless Care.',
      subline: 'Nails, lashes, and wellness — perfected with precision and calm luxury.',
      cta: 'Book on WhatsApp'
    },
    ar: {
      headline: 'جمال راق، عناية بلا عناء',
      subline: 'أظافر ورموش وعافية بأدق التفاصيل ولمسة فاخرة.',
      cta: 'احجزي عبر واتساب'
    }
  };
  
  const t = translations[language];
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pure-white/60 via-pearl/50 to-pure-white/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <div className="fade-in">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-charcoal mb-6 leading-[1.5] ${isRTL ? 'font-arabic' : ''}`}>
            {t.headline}
          </h1>
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
            {t.subline}
          </p>
          <Button
            asChild
            className="btn-hero text-lg px-12 py-6"
          >
            <a 
              href="https://wa.me/966531090647"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${isRTL ? 'flex-row-reverse font-arabic' : 'font-poppins'}`}
            >
              <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
              {t.cta}
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-charcoal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-charcoal rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;