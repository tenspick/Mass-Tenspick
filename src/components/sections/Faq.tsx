import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is Marketing As A Service?',
      a: 'Marketing As A Service (MaaS) provides your business with an entire, multi-disciplinary marketing department (strategists, developers, designers, copywriters, and media buyers) working under a single, flat monthly subscription. It bypasses the recruitment friction, high overheads, and management complications of building an internal team.'
    },
    {
      q: 'How is it different from an agency?',
      a: 'Traditional agencies typically require long contracts, charge heavy setup fees, and have slow turnaround times due to account management layers. TENSPICK MAAS provides direct access to developers and creators via a unified dashboard, operates with startup speed, and is billed on a transparent monthly subscription model with no hidden fees.'
    },
    {
      q: 'Who owns the work?',
      a: 'You do! 100% of all ad creatives, landing pages, custom code bases, copy decks, branding templates, AI chatbot scripts, and CRM maps built during your subscription belong entirely to you from the moment they are compiled.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. We build long-term relationships through high-quality performance. There are no lock-in retainers or cancellation fees. You can upgrade, downgrade, or pause your subscription at the end of any billing month.'
    },
    {
      q: 'How quickly can we start?',
      a: 'We onboard clients immediately. Once you select your plan and complete your discovery call briefing, we launch your customized onboarding portal, deploy your dedicated team, and present your first Growth Strategy deliverables within 24 to 48 hours.'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#FFFFFF] overflow-hidden border-t border-slate-200">
      <div className="absolute bottom-[10%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Got Questions?</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about our subscription marketing model.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-primary/40 bg-gradient-to-br from-primary/[0.02] to-secondary/[0.01] shadow-md shadow-primary/5' 
                    : 'border-slate-200 bg-white hover:bg-slate-50/50 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none group"
                >
                  <span className={`text-sm sm:text-base md:text-lg font-bold pr-4 flex items-center gap-3 transition-colors duration-300 ${
                    isOpen ? 'text-primary' : 'text-slate-900 group-hover:text-primary/95'
                  }`}>
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                      isOpen ? 'text-primary' : 'text-slate-400 group-hover:text-primary/80'
                    }`} />
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`p-1.5 rounded-full border transition-colors duration-300 shrink-0 ${
                      isOpen 
                        ? 'bg-primary/10 border-primary/20 text-primary' 
                        : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:bg-slate-100 group-hover:border-slate-300 group-hover:text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4.5 h-4.5" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 font-medium max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
