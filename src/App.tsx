import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Trust from './components/sections/Trust';
import WhyMaas from './components/sections/WhyMaas';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import BusinessTypes from './components/sections/BusinessTypes';
import AiAutomation from './components/sections/AiAutomation';
import CaseStudies from './components/sections/CaseStudies';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import WhyChooseTenspick from './components/sections/WhyChooseTenspick';
import GooeyText from './components/ui/GooeyText';
import WhyMaasPage from './pages/WhyMaasPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import IndustriesPage from './pages/IndustriesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  const introTexts = [
    "Generating Leads...",
    "Optimizing Campaigns...",
    "Analyzing Performance...",
    "Maximizing ROI...",
    "TENSPICK MAAS",
    "Scale Smarter.",
    "Grow Faster.",
    "TENSPICK MAAS"
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0); // Reset scroll to top on routing
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [currentHash]);

  useEffect(() => {
    if (!showIntro) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  // Skip preloader on mouse clicks, mouse scrolls, touch events, or keystrokes
  useEffect(() => {
    if (!showIntro) return;

    const skipIntro = () => {
      setShowIntro(false);
    };

    window.addEventListener('wheel', skipIntro, { passive: true });
    window.addEventListener('scroll', skipIntro, { passive: true });
    window.addEventListener('touchmove', skipIntro, { passive: true });
    window.addEventListener('keydown', skipIntro, { passive: true });

    return () => {
      window.removeEventListener('wheel', skipIntro);
      window.removeEventListener('scroll', skipIntro);
      window.removeEventListener('touchmove', skipIntro);
      window.removeEventListener('keydown', skipIntro);
    };
  }, [showIntro]);


  const renderPage = () => {
    switch (currentHash) {
      case '#/why-maas':
        return <WhyMaasPage />;
      case '#/services':
        return <ServicesPage />;
      case '#/how-it-works':
        return <HowItWorksPage />;
      case '#/industries':
        return <IndustriesPage />;
      case '#/case-studies':
        return <CaseStudiesPage />;

      case '#/faq':
        return <FaqPage />;
      case '#/contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <Trust />
            <WhyMaas />
            <WhyChooseTenspick />
            <Services />
            <HowItWorks />
            <BusinessTypes />
            <AiAutomation />
            <CaseStudies />
            <Faq />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] relative font-sans selection:bg-primary/20 selection:text-primary">
      {showIntro ? (
        <div 
          onClick={() => setShowIntro(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4 cursor-pointer select-none"
          title="Click anywhere to skip intro"
        >
          <div className="max-w-2xl w-full pointer-events-none">
            <GooeyText 
              texts={introTexts} 
              morphTime={0.9} 
              cooldownTime={0.25}
              textClassName="text-primary font-black tracking-tight"
              onComplete={() => setShowIntro(false)} 
            />
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Navbar />
          <main className="min-h-[70vh]">
            {renderPage()}
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
