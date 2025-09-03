import React from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'Contact',
      cta: 'Reserve your calm moment — message us on WhatsApp.',
      button: 'Message on WhatsApp',
      phone: '+966 531090647'
    },
    ar: {
      title: 'تواصل معنا',
      cta: 'احجزي لحظتك الهادئة — راسلينا على واتساب.',
      button: 'راسلينا على واتساب',
      phone: '+966 531090647'
    }
  };
  
  const t = translations[language];
  
  return (
    <section id="contact" className="py-20 bg-pure-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className={`section-heading ${isRTL ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
          <p className={`section-subheading ${isRTL ? 'font-arabic' : ''}`}>
            {t.cta}
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="text-3xl font-playfair font-semibold text-charcoal">
            <span dir="ltr" className="inline-block">{t.phone}</span>
          </div>
          
          <Button
            asChild
            className="btn-whatsapp text-xl px-12 py-6"
          >
            <a 
              href="https://wa.me/966531090647"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${isRTL ? 'flex-row-reverse font-arabic' : 'font-poppins'}`}
            >
              <MessageCircle className={`w-6 h-6 ${isRTL ? 'ml-4' : 'mr-4'}`} />
              {t.button}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;