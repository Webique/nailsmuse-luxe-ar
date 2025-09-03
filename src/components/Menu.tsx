import React from 'react';
import { useLanguage } from './LanguageContext';

const Menu = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'Service Menu',
      services: [
        'Classic Manicure',
        'Gel Manicure',
        'BIAB',
        'Gel Extensions',
        'Lash Lift & Tint',
        'Classic Lashes',
        'Light Volume Lashes'
      ]
    },
    ar: {
      title: 'القائمة',
      services: [
        'مانيكير كلاسيك',
        'مانيكير جِل',
        'بياب',
        'إكستنشن جِل',
        'ليفت رموش وتلوين',
        'رموش كلاسيك',
        'رموش فوليوم خفيف'
      ]
    }
  };
  
  const t = translations[language];
  
  return (
    <section id="menu" className="py-20 bg-pearl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.map((service, index) => (
            <div key={index} className="bg-pure-white rounded-lg p-6 shadow-soft luxury-hover">
              <h3 className={`text-lg font-medium text-charcoal ${isRTL ? 'font-arabic text-right' : 'font-poppins'}`}>
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;