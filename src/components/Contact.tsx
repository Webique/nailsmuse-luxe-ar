import React from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { language, isRTL } = useLanguage();
  
  const translations = {
    en: {
      title: 'Contact',
      cta: 'Reserve your calm moment — message us on WhatsApp.',
      button: 'Message on WhatsApp',
      phone: '+966 531090647',
      email: 'nailsmuse.sa@gmail.com',
      instagram: '@nailsmuse.sa'
    },
    ar: {
      title: 'تواصل معنا',
      cta: 'احجزي لحظتك الهادئة — راسلينا على واتساب.',
      button: 'راسلينا على واتساب',
      phone: '+966 531090647',
      email: 'nailsmuse.sa@gmail.com',
      instagram: '@nailsmuse.sa'
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="text-center">
              <div className="text-2xl font-playfair font-semibold text-charcoal mb-2">
                <span dir="ltr" className="inline-block">{t.phone}</span>
              </div>
              <p className="text-muted-foreground text-sm">Phone</p>
            </div>
            
            {/* Email */}
            <div className="text-center">
              <div className="text-2xl font-playfair font-semibold text-charcoal mb-2">
                <span dir="ltr" className="inline-block">{t.email}</span>
              </div>
              <p className="text-muted-foreground text-sm">Email</p>
            </div>
            
            {/* Instagram */}
            <div className="text-center">
              <div className="text-2xl font-playfair font-semibold text-charcoal mb-2">
                <span dir="ltr" className="inline-block">{t.instagram}</span>
              </div>
              <p className="text-muted-foreground text-sm">Instagram</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <a 
                href="https://wa.me/966531090647"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${isRTL ? 'flex-row-reverse font-arabic' : 'font-poppins'}`}
              >
                <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {t.button}
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="text-lg px-8 py-4 border-charcoal text-charcoal hover:bg-charcoal hover:text-pure-white"
            >
              <a 
                href="mailto:nailsmuse.sa@gmail.com"
                className={`flex items-center ${isRTL ? 'flex-row-reverse font-arabic' : 'font-poppins'}`}
              >
                <Mail className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? 'راسلينا عبر الإيميل' : 'Email Us'}
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="text-lg px-8 py-4 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-pure-white"
            >
              <a 
                href="https://www.instagram.com/nailsmuse.sa"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${isRTL ? 'flex-row-reverse font-arabic' : 'font-poppins'}`}
              >
                <Instagram className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                {isRTL ? 'تابعونا' : 'Follow Us'}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;