import React from 'react';
import { useLanguage } from './LanguageContext';
import salonImage from '@/assets/salon-interior.jpg';

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
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:col-start-2 text-right' : 'lg:col-start-1'}`}>
            <div className="slide-up">
              <h2 className={`section-heading ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t.title}
              </h2>
              <p className={`section-subheading ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t.description}
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className={`${isRTL ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={salonImage}
                alt="Nails Muse luxury salon interior"
                className="w-full h-96 object-cover luxury-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;