import React from 'react';
import { useLanguage } from './LanguageContext';

const Menu = () => {
  const { language, isRTL } = useLanguage();

  const translations = {
    en: {
      title: 'Service Menu',
      categories: [
        {
          title: 'Nails',
          items: [
            'Classic Manicure',
            'Gel Manicure',
            'BIAB',
            'Gel Extensions',
            'Classic Pedicure',
            'Gel Pedicure'
          ]
        },
        {
          title: 'Lashes',
          items: [
            'Lash Lift & Tint',
            'Classic Set',
            'Soft Volume',
            'Lash Removal'
          ]
        },
        {
          title: 'Wellness',
          items: [
            'Paraffin Therapy',
            'Hand Mask',
            'Aroma Towels',
            'Cuticle Care'
          ]
        }
      ]
    },
    ar: {
      title: 'القائمة',
      categories: [
        {
          title: 'الأظافر',
          items: [
            'مانيكير كلاسيك',
            'مانيكير جِل',
            'بياب',
            'إكستنشن جِل',
            'باديكير كلاسيك',
            'باديكير جِل'
          ]
        },
        {
          title: 'الرموش',
          items: [
            'ليفت رموش وتلوين',
            'طقم كلاسيك',
            'فوليوم خفيف',
            'إزالة الرموش'
          ]
        },
        {
          title: 'العافية',
          items: [
            'علاج البارافين',
            'قناع اليدين',
            'مناشف عطرية',
            'العناية بالجلد المحيط بالأظافر'
          ]
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-pearl to-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
          <p className={`section-subheading mt-2 ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
            {isRTL ? 'اختيارات مُنسّقة بأسلوب فاخر وبسيط' : 'Curated selections, refined and effortless.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {t.categories.map((category, idx) => (
            <div key={idx} className="flex flex-col min-h-full w-full max-w-sm">
              <div className={`${isRTL ? 'border-r-2 pr-6' : 'border-l-2 pl-6'} border-porcelain flex-1`}> 
                <h3 className={`text-2xl md:text-3xl font-playfair font-semibold text-charcoal mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {category.title}
                </h3>
                <ul dir={isRTL ? 'rtl' : 'ltr'} className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group w-full">
                      <span className={`${isRTL ? 'font-arabic' : 'font-poppins'} text-charcoal/90 group-hover:text-ink-black transition-colors`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;