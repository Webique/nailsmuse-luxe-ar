import React from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Menu from '@/components/Menu';
import Packages from '@/components/Packages';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Menu />
        <Packages />
        <Location />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
