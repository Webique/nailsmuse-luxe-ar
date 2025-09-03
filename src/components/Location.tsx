import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Clock } from 'lucide-react';

const Location = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'Location & Hours',
      address: {
        city: 'Abha, Saudi Arabia',
        district: 'Al Naaman District',
        building: 'Building No. 6937',
        additional: 'Additional No. 3526',
        postal: 'Postal Code: 62529',
        unit: 'Unit Code: ABDD6937'
      },
      hours: {
        title: 'Opening Hours',
        weekdays: 'Sat–Thu: 10:00–21:00',
        friday: 'Fri: 14:00–21:00'
      }
    },
    ar: {
      title: 'الموقع والساعات',
      address: {
        city: 'أبها، المملكة العربية السعودية',
        district: 'حي النعمان',
        building: 'رقم المبنى: 6937',
        additional: 'الرقم الإضافي: 3526',
        postal: 'الرمز البريدي: 62529',
        unit: 'المختصر: ABDD6937'
      },
      hours: {
        title: 'ساعات العمل',
        weekdays: 'السبت–الخميس: 10:00–21:00',
        friday: 'الجمعة: 14:00–21:00'
      }
    }
  };
  
  const t = translations[language];
  
  return (
    <section id="location-hours" className="py-20 bg-pearl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Address */}
          <div className="service-card">
            <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <MapPin className={`w-6 h-6 text-charcoal ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <h3 className={`text-2xl font-playfair font-semibold text-charcoal ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'العنوان' : 'Address'}
              </h3>
            </div>
            <div className={`space-y-3 ${isRTL ? 'text-right font-arabic' : 'font-poppins'}`}>
              <p className="text-muted-foreground">{t.address.city}</p>
              <p className="text-muted-foreground">{t.address.district}</p>
              <p className="text-muted-foreground">{t.address.building}</p>
              <p className="text-muted-foreground">{t.address.additional}</p>
              <p className="text-muted-foreground">{t.address.postal}</p>
              <p className="text-muted-foreground">{t.address.unit}</p>
            </div>
          </div>
          
          {/* Hours */}
          <div className="service-card">
            <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Clock className={`w-6 h-6 text-charcoal ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <h3 className={`text-2xl font-playfair font-semibold text-charcoal ${isRTL ? 'font-arabic' : ''}`}>
                {t.hours.title}
              </h3>
            </div>
            <div className={`space-y-3 ${isRTL ? 'text-right font-arabic' : 'font-poppins'}`}>
              <p className="text-muted-foreground text-lg">{t.hours.weekdays}</p>
              <p className="text-muted-foreground text-lg">{t.hours.friday}</p>
            </div>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-12">
          <div className="rounded-2xl overflow-hidden shadow-luxury">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.924776047842!2d42.50502725!3d18.2465543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e391e71c5dd8db%3A0x5ba13c0e3b0e7b5e!2sAbha%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1635678901234!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nails Muse Location in Abha"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;