import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import PageHeader from './PageHeader';

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = [
    {
      name: 'Pricing & Subscriptions',
      items: [
        {
          q: 'What is Marketing As A Service (MaaS)?',
          a: 'MaaS gives you a full growth team (strategy, creative, development, media buying, automation) under one flat monthly subscription, focused on execution speed and measurable outcomes.',
        },
        {
          q: 'How is this different from a traditional agency?',
          a: 'Traditional agencies often add account-management layers, slower timelines, and unclear deliverables. MaaS is built around shipping work fast, with clear priorities and direct execution.',
        },
        {
          q: 'Are there long-term contracts or cancellation fees?',
          a: 'No. MaaS is designed for complete flexibility. All plans are billed month-to-month, and you can upgrade, downgrade, or pause your subscription at the end of any billing cycle without penalties.',
        },
        {
          q: 'How does the billing system work?',
          a: 'Your subscription is billed automatically on a 30-day recurring cycle. Once subscribed, you gain immediate access to submit requests inside our client dashboard.',
        }
      ]
    },
    {
      name: 'How We Work Together',
      items: [
        {
          q: 'What do we need from you to start?',
          a: 'Access to your ad accounts/analytics, a short discovery kickoff call, and clarity on your goal (pipeline, revenue, leads). We handle the implementation from there.',
        },
        {
          q: 'How do I submit design, copywriting, or coding requests?',
          a: 'All requests are submitted directly inside our simplified client dashboard. Simply click "New Request", specify the details, copy guidelines, or dev specs, and our strategist will queue it for execution.',
        },
        {
          q: 'What is the average turnaround time for deliverables?',
          a: 'Simple requests like ad copy updates, graphic revisions, or tracking pixel fixes are completed within 24 hours. More complex tasks like full landing page builds or email sequences take 48-72 hours.',
        },
        {
          q: 'Can I request multiple tasks at the same time?',
          a: 'Yes, you can queue as many tasks as you like. We execute them sequentially based on the priority list you set in your dashboard, ensuring we ship work with maximum focus and speed.',
        }
      ]
    },
    {
      name: 'Deliverables & Ownership',
      items: [
        {
          q: 'Do I own the work?',
          a: 'Yes — deliverables created during your subscription are yours: creatives, landing pages, copy, and system setup.',
        },
        {
          q: 'Can I cancel my plan and keep my custom landing page code?',
          a: 'Absolutely. All code bases, custom React pages, copy scripts, ad creatives, and lead flows remain your intellectual property. You can host them anywhere you like.',
        },
        {
          q: 'Is my company data and lead history secure?',
          a: 'Yes. We follow strict security policies and integrate compliant forms (GDPR/HIPAA matching vertical rules). We never share or sell client database files or analytics records.',
        },
        {
          q: 'Who pays for the Facebook and Google advertising budgets?',
          a: 'All direct ad budgets are paid directly by the client. We configure and scale your ad managers, write copy, edit videos, and manage placements under our subscription, but ad spend is billed to your cards.'
        }
      ]
    },
    {
      name: 'Integrations & Strategy',
      items: [
        {
          q: 'Do we integrate Salesforce, HubSpot, or Zoho CRMs?',
          a: 'Yes. We specialize in aligning ad platforms with sales pipelines. We set up clean data routes, pipeline deal tags, and automatic deal routing so lead history is fully attribution-matched.',
        },
        {
          q: 'Can we automate WhatsApp or text message follow-ups?',
          a: 'Yes. We write and deploy automated conversational logic that qualifies inbound ad inquiries and triggers booking link flows within seconds of capture.',
        },
        {
          q: 'What search optimization strategies do you implement?',
          a: 'We perform technical codebase speed audits, map out high-intent commercial keywords, and publish authoritative content pages to build compound search authority.',
        },
        {
          q: 'How do you structure ad creative testing?',
          a: 'We utilize a Creative Sandbox framework, running low-budget ads to test hooks and copy. Once we isolate winning variations, we scale them into main campaigns.'
        }
      ]
    }
  ];

  // Flatten the FAQs list so we can manage activeIndex easily across categories
  const allFaqs = categories.flatMap(cat => cat.items);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="FAQ"
        title="Answers, details, and what to expect."
        subtitle="Learn how we operate, how subscription tasks are managed, and how we scale campaigns without agency friction."
      />

      {/* Intro Overview Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">No Bureaucracy</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              We believe in complete transparency and immediate answers.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We designed the MaaS model to eliminate the friction typical of traditional marketing partners. We do not hide our rates behind custom quote proposals, we don’t restrict revision cycles, and we do not hold your landing page code hostage. Our goal is to run campaign execution at the speed of your product team.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Browse our detailed questions below. If you have an inquiry that is not listed here, schedule a 20-minute call with our strategist.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-slate-900 text-base">Quick Guidelines</h3>
            <div className="flex flex-col gap-3">
              {[
                { term: 'Pause anytime', desc: 'No lock-ins, simple monthly flat billing.' },
                { term: '24-72h Turnaround', desc: 'Average shipping velocity for tasks.' },
                { term: '100% Asset Ownership', desc: 'You own all design, code, and copy.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start text-xs text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{item.term}</span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categorized FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          
          {/* Loop over categories */}
          {categories.map((cat, catIdx) => {
            return (
              <div key={cat.name} className="flex flex-col gap-6">
                {/* Category Header */}
                <h3 className="text-lg font-black text-slate-800 border-b border-slate-200 pb-3 uppercase tracking-wider font-sans">
                  {cat.name}
                </h3>
                
                {/* FAQ items */}
                <div className="flex flex-col gap-4">
                  {cat.items.map((faq) => {
                    // Find the global index of this item
                    const globalIdx = allFaqs.findIndex(item => item.q === faq.q);
                    const isOpen = activeIndex === globalIdx;
                    
                    return (
                      <div
                        key={faq.q}
                        className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50/50 transition-colors overflow-hidden shadow-xs"
                      >
                        <button
                          onClick={() => setActiveIndex(isOpen ? null : globalIdx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                        >
                          <span className="text-xs sm:text-sm font-extrabold text-slate-850 pr-4">{faq.q}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="p-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 shrink-0"
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
                              <div className="px-6 pb-6 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100 font-medium">
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
            );
          })}
        </div>
      </section>

      {/* Strategic Call to Action Section (Bottom) */}
      <section className="py-20 bg-slate-900 text-white-pure relative overflow-hidden" style={{ backgroundColor: '#0B192C' }}>
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-widest text-accent-pure uppercase">Still Have Questions?</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white-pure tracking-tight">
            Let's clarify your roadmap.
          </h2>
          <p className="text-slate-300-pure text-sm max-w-lg leading-relaxed">
            Connect directly with our strategist for a brief growth session. We will help map your pipeline and clarify any detail.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '#/contact';
            }}
            className="mt-4 px-8 py-4 bg-primary text-white-pure font-bold rounded-full hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-all duration-200"
            style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
          >
            Connect With Principal Strategist
          </button>
        </div>
      </section>
    </div>
  );
}
