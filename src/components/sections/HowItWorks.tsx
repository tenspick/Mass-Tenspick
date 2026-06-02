import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Compass, Zap, BarChart4 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      subtitle: 'Mapping your objectives',
      desc: 'Schedule a 15-minute briefing session. We audit your existing marketing, review competitor strategies, understand your target demographics, and establish growth goals.',
      icon: Phone,
      color: 'text-sky-600',
      bg: 'bg-sky-50 border-sky-100',
      glow: 'from-sky-500 to-blue-500'
    },
    {
      num: '02',
      title: 'Growth Strategy',
      subtitle: 'Defining the blueprint',
      desc: 'Our senior strategists design a comprehensive marketing blueprint for your subscription. We outline exact deliverables, target keywords, custom funnels, and CRM setup.',
      icon: Compass,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-100',
      glow: 'from-indigo-500 to-purple-500'
    },
    {
      num: '03',
      title: 'Execution',
      subtitle: 'Turning plans into reality',
      desc: 'Our writers create copy, designers build assets, developers code web pages, and media buyers deploy campaigns. All tracked inside your unified dashboard.',
      icon: Zap,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-100',
      glow: 'from-emerald-500 to-teal-500'
    },
    {
      num: '04',
      title: 'Scale & Optimize',
      subtitle: 'Compounding daily returns',
      desc: 'We analyze daily lead reports and ad metrics, running continuous split-tests. Successful angles receive scaled budgets, and weekly reports detail exact ROI.',
      icon: BarChart4,
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-100',
      glow: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#FFFFFF] overflow-hidden border-t border-slate-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center flex flex-col gap-3 mb-24">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">The Process</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Growth In Four Simple Steps</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            From setup to scaling, we run a unified marketing engine so you can focus on building your core business.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-[50%] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden md:block" />

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;
              return (
                <div 
                  key={step.num}
                  className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                    className="w-full md:w-[44%] p-8 rounded-3xl glass border border-slate-200/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 card-glow relative bg-[#FFFFFF] flex flex-col gap-4 cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${step.color}`}>{step.subtitle}</span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">{step.title}</h3>
                      </div>
                      <span className="text-4xl font-black text-slate-200/60 font-mono tracking-tighter shrink-0">
                        {step.num}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">{step.desc}</p>
                  </motion.div>

                  {/* Timeline Badge (Desktop) */}
                  <div className="absolute left-[50%] -translate-x-[50%] flex items-center justify-center hidden md:flex">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 100, delay: 0.15 }}
                      className={`w-14 h-14 rounded-2xl bg-[#FFFFFF] border-2 border-slate-200 flex items-center justify-center shadow-md hover:border-primary/50 transition-colors`}
                    >
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </motion.div>
                  </div>

                  {/* Spacer for structure */}
                  <div className="w-full md:w-[44%] hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
