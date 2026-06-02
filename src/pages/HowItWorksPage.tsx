import { motion } from 'framer-motion';
import { BarChart4, Compass, Phone, Zap } from 'lucide-react';
import PageHeader from './PageHeader';

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Discovery call',
      subtitle: 'Clarify goals + constraints',
      desc: 'We audit your current funnel, traffic sources, and positioning. Then we define the outcomes that matter (pipeline, CAC, ROAS, conversion rate).',
      icon: Phone,
      color: 'from-[#00D4FF] to-[#6C63FF]',
    },
    {
      num: '02',
      title: 'Growth strategy',
      subtitle: 'A practical execution plan',
      desc: 'We map channels, deliverables, tracking, landing pages, and automation. You’ll know exactly what we’re building and why.',
      icon: Compass,
      color: 'from-[#6C63FF] to-[#00FFB2]',
    },
    {
      num: '03',
      title: 'Execution',
      subtitle: 'Ship weekly improvements',
      desc: 'Copy, design, dev, ads, and automation move in parallel. Short feedback loops keep momentum high and blockers low.',
      icon: Zap,
      color: 'from-[#00FFB2] to-[#00D4FF]',
    },
    {
      num: '04',
      title: 'Scale & optimize',
      subtitle: 'Compound what works',
      desc: 'We double down on winning angles, improve conversion rates, and build durable assets (SEO + content + systems) that reduce paid dependency.',
      icon: BarChart4,
      color: 'from-[#00D4FF] to-[#6C63FF]',
    },
  ];

  return (
    <div className="bg-[#050505]">
      <PageHeader
        eyebrow="How it works"
        title="A simple process — built for speed."
        subtitle="This page is separate from the homepage section so you can explain the process in more detail without changing the home layout."
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.05 }}
                className="rounded-3xl bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[80px] bg-gradient-to-tr ${s.color}`} />
                </div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${s.color} flex items-center justify-center border border-white/20`}>
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{s.subtitle}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mt-2">{s.desc}</p>
                  </div>
                  <span className="text-4xl font-black text-white/[0.06] tracking-tighter">{s.num}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

