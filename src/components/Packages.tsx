import React from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Packages = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'Packages',
      subtitle: 'Ask on WhatsApp for offers',
      packages: [
        {
          title: 'Muse Classic Duo',
          description: 'Manicure + lash lift.'
        },
        {
          title: 'Gel Perfection',
          description: 'BIAB + chrome finish.'
        },
        {
          title: 'Reset Ritual',
          description: 'Gel removal + mask + cuticle rehab.'
        }
      ],
      cta: 'Ask for Offers'
    },
    ar: {
      title: 'الباقات',
      subtitle: 'للاستفسار عن العروض تواصلي عبر واتساب',
      packages: [
        {
          title: 'ثنائي الكلاسيك',
          description: 'مانيكير كلاسيك + ليفت رموش.'
        },
        {
          title: 'جل بيرفكشن',
          description: 'بياب + لمسة كروم.'
        },
        {
          title: 'ريست ريتوال',
          description: 'إزالة جِل + ماسك + عناية للجلد الزائد.'
        }
      ],
      cta: 'استفسري عن العروض'
    }
  };
  
  const t = translations[language];
  
  return (
    <section id="packages" className="py-20 bg-pure-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
          <p className={`section-subheading ${isRTL ? 'font-arabic' : ''}`}>
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-items-center">
          {t.packages.map((pkg, index) => (
            <div key={index} className="service-card text-center w-full max-w-sm">
              <h3 className={`text-2xl font-playfair font-semibold text-charcoal mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                {pkg.title}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
                {pkg.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            asChild
            className="btn-hero"
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
    </section>
  );
};

export default Packages;