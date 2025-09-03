import React from 'react';
import { useLanguage } from './LanguageContext';
import salonReceptionImage from '@/assets/salon-reception.jpg';
import salonProductsImage from '@/assets/salon-products.jpg';
import salonLoungeImage from '@/assets/salon-lounge.jpg';
import salonServicesImage from '@/assets/salon-services.jpg';
import salonDisplayImage from '@/assets/salon-display.jpg';
import salonExteriorImage from '@/assets/salon-exterior.jpg';

const Gallery = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'Our Space',
      subtitle: 'Step into our world of refined beauty and tranquil luxury'
    },
    ar: {
      title: 'مساحتنا',
      subtitle: 'ادخلي عالمنا من الجمال الراقي والفخامة الهادئة'
    }
  };
  
  const t = translations[language];
  
  const galleryImages = [
    {
      src: salonReceptionImage,
      alt: 'Nails Muse reception area',
      title: isRTL ? 'منطقة الاستقبال' : 'Reception Area'
    },
    {
      src: salonServicesImage,
      alt: 'Nails Muse service stations',
      title: isRTL ? 'محطات الخدمة' : 'Service Stations'
    },
    {
      src: salonProductsImage,
      alt: 'Nails Muse product display',
      title: isRTL ? 'عرض المنتجات' : 'Product Display'
    },
    {
      src: salonLoungeImage,
      alt: 'Nails Muse lounge area',
      title: isRTL ? 'منطقة الاسترخاء' : 'Lounge Area'
    },
    {
      src: salonDisplayImage,
      alt: 'Nails Muse display area',
      title: isRTL ? 'منطقة العرض' : 'Display Area'
    },
    {
      src: salonExteriorImage,
      alt: 'Nails Muse exterior',
      title: isRTL ? 'الواجهة الخارجية' : 'Exterior'
    }
  ];
  
  return (
    <section id="gallery" className="py-24 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
          <p className={`section-subheading mt-4 ${isRTL ? 'font-arabic' : 'font-poppins'}`}>
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-500 w-full max-w-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className={`text-pure-white font-medium ${isRTL ? 'font-arabic text-right' : 'font-poppins'}`}>
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
