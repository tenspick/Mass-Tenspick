import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PageHeader from './PageHeader';

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is Marketing As A Service (MaaS)?',
      a: 'MaaS gives you a full growth team (strategy, creative, development, media buying, automation) under one subscription, focused on execution speed and measurable outcomes.',
    },
    {
      q: 'How is this different from a traditional agency?',
      a: 'Traditional agencies often add account-management layers, slower timelines, and unclear deliverables. MaaS is built around shipping work fast, with clear priorities and direct execution.',
    },
    {
      q: 'Do I own the work?',
      a: 'Yes — deliverables created during your subscription are yours: creatives, landing pages, copy, and system setup.',
    },
    {
      q: 'Can I pause or cancel?',
      a: 'Yes. MaaS is designed for flexibility. You can upgrade, downgrade, or pause at the end of a billing cycle.',
    },
    {
      q: 'What do we need from you to start?',
      a: 'Access to your ad accounts/analytics, a short discovery call, and clarity on your goal (pipeline, revenue, leads). We handle the implementation from there.',
    },
  ];

  return (
    <div className="bg-[#050505]">
      <PageHeader
        eyebrow="FAQ"
        title="Answers, details, and what to expect."
        subtitle="This page is separate from the homepage FAQ section so you can expand and edit questions here without affecting the home layout."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.03] transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-1 rounded-full bg-white/5 border border-white/5 text-muted-text shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-text leading-relaxed border-t border-white/[0.03]">
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
    </div>
  );
}

