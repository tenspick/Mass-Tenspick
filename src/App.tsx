import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
import GooeyText from './components/ui/GooeyText';

function App() {
  const [showIntro, setShowIntro] = useState(true);
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
        return (
          <div className="pt-20">
            <WhyMaas />
          </div>
        );
      case '#/services':
        return (
          <div className="pt-20">
            <Services />
          </div>
        );
      case '#/how-it-works':
        return (
          <div className="pt-20">
            <HowItWorks />
          </div>
        );
      case '#/industries':
        return (
          <div className="pt-20">
            <BusinessTypes />
          </div>
        );
      case '#/case-studies':
        return (
          <div className="pt-20">
            <CaseStudies />
          </div>
        );

      case '#/faq':
        return (
          <div className="pt-20">
            <Faq />
          </div>
        );
      case '#/contact':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <Trust />
            <WhyMaas />
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
