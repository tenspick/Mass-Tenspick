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
      color: 'from-[#00D4FF] to-[#6C63FF]',
      shadow: 'shadow-primary/20'
    },
    {
      num: '02',
      title: 'Growth Strategy',
      subtitle: 'Defining the blueprint',
      desc: 'Our senior strategists design a comprehensive marketing blueprint for your subscription. We outline exact deliverables, target keywords, custom funnels, and CRM setup.',
      icon: Compass,
      color: 'from-[#6C63FF] to-[#00FFB2]',
      shadow: 'shadow-secondary/20'
    },
    {
      num: '03',
      title: 'Execution',
      subtitle: 'Turning plans into reality',
      desc: 'Our writers create copy, designers build assets, developers code web pages, and media buyers deploy campaigns. All tracked inside your unified dashboard.',
      icon: Zap,
      color: 'from-[#00FFB2] to-[#00D4FF]',
      shadow: 'shadow-accent/20'
    },
    {
      num: '04',
      title: 'Scale & Optimize',
      subtitle: 'Compounding daily returns',
      desc: 'We analyze daily lead reports and ad metrics, running continuous split-tests. Successful angles receive scaled budgets, and weekly reports detail exact ROI.',
      icon: BarChart4,
      color: 'from-[#00D4FF] to-[#6C63FF]',
      shadow: 'shadow-primary/20'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center flex flex-col gap-3 mb-20">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">The Process</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Growth In Four Simple Steps</h2>
          <p className="text-muted-text text-sm sm:text-base max-w-xl mx-auto">
            From setup to scaling, we run a unified marketing engine so you can focus on building your core business.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-[50%] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-10 hidden md:block" />

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.num}
                  className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-[45%] p-8 rounded-3xl bg-white/[0.01] border border-white/5 card-glow relative"
                  >
                    <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">{step.subtitle}</span>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">{step.desc}</p>
                    
                    {/* Corner Number */}
                    <span className="absolute top-6 right-8 text-5xl font-black text-white/[0.02] tracking-tighter">
                      {step.num}
                    </span>
                  </motion.div>

                  {/* Timeline Badge (Desktop) */}
                  <div className="absolute left-[50%] -translate-x-[50%] flex items-center justify-center hidden md:flex">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 100, delay: 0.15 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center shadow-lg ${step.shadow} border border-white/20`}
                    >
                      <step.icon className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer for structure */}
                  <div className="w-full md:w-[45%] hidden md:block" />
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
