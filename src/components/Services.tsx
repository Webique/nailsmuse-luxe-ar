import React from 'react';
import { useLanguage } from './LanguageContext';
import nailServiceImage from '@/assets/nails-service.png';
import lashServiceImage from '@/assets/lashes-service.png';
import wellnessServiceImage from '@/assets/wellness.jpg';
import saudiBrandsImage from '@/assets/saudi-brands.jpg';

const Services = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'Signature Services',
      services: [
        {
          title: 'Nails',
          description: 'Classic manicures, gel finishes, BIAB, extensions.',
          image: nailServiceImage
        },
        {
          title: 'Lashes',
          description: 'Lash lift & tint, classic sets, soft volume.',
          image: lashServiceImage
        },
        {
          title: 'Wellness Touches',
          description: 'Paraffin therapy, hand masks, aroma towels.',
          image: wellnessServiceImage
        },
        {
          title: 'Saudi Brands',
          description: 'A curated space for local Saudi brand owners to showcase their products in our elegant salon environment.',
          image: saudiBrandsImage
        }
      ]
    },
    ar: {
      title: 'خدماتنا المميزة',
      services: [
        {
          title: 'الأظافر',
          description: 'مانيكير كلاسيك، جِل، بياب، إكستنشن.',
          image: nailServiceImage
        },
        {
          title: 'الرموش',
          description: 'ليفت وتلوين، كلاسيك، فوليوم خفيف.',
          image: lashServiceImage
        },
        {
          title: 'لمسات العناية',
          description: 'علاج البارافين، ماسكات اليدين، مناشف عطرية.',
          image: wellnessServiceImage
        },
        {
          title: 'العلامات التجارية السعودية',
          description: 'مساحة مخصصة لأصحاب العلامات التجارية المحلية لعرض منتجاتهم في بيئة صالوننا الأنيقة.',
          image: saudiBrandsImage
        }
      ]
    }
  };
  
  const t = translations[language];
  
  return (
    <section id="signature-services" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {t.services.map((service, index) => (
            <div key={index} className="service-card w-full max-w-sm">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-64 luxury-hover ${
                    service.title === 'Saudi Brands' || service.title === 'العلامات التجارية السعودية' 
                      ? 'object-cover object-top' 
                      : 'object-cover'
                  }`}
                />
              </div>
              <h3 className={`text-2xl font-playfair font-semibold text-charcoal mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {service.title}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic text-right' : 'font-poppins'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;