import React from 'react';
import { useLanguage } from './LanguageContext';
import salonExteriorImage from '@/assets/salon-exterior.jpg';
import salonLoungeImage from '@/assets/salon-lounge.jpg';

const About = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'About Nails Muse',
      description: 'Nails Muse is a boutique salon in Abha offering nail artistry, lash enhancements, and wellness care. Licensed specialists use premium, skin-friendly products for a calm, luxury experience.'
    },
    ar: {
      title: 'عن نايلز ميوز',
      description: 'نايلز ميوز صالون بوتيك في أبها يقدم فنون أظافر فاخرة، ورموش احترافية، وتجارب عناية مريحة. فريق مرخص يستخدم منتجات فاخرة وآمنة لبشرة الضيوف في أجواء راقية.'
    }
  };
  
  const t = translations[language];
  
  return (
    <section id="about" className="py-20 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:col-start-2' : 'lg:col-start-1'} flex flex-col items-center lg:items-start`}>
            <div className="slide-up text-center lg:text-left">
              <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
                {t.title}
              </h2>
              <p className={`section-subheading ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
                {t.description}
              </p>
            </div>
          </div>
          
          {/* Images Grid */}
          <div className={`${isRTL ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                <img 
                  src={salonExteriorImage}
                  alt="Nails Muse luxury salon exterior"
                  className="w-full h-64 object-cover luxury-hover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                <img 
                  src={salonLoungeImage}
                  alt="Nails Muse luxury salon interior lounge"
                  className="w-full h-64 object-cover luxury-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;