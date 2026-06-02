import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Award, Zap } from 'lucide-react';

export const CaseStudies = () => {
  const cases = [
    {
      metric: '300%',
      label: 'Increase In Leads',
      sub: 'For a local Hospital Group',
      context: 'Struggling with inconsistent patient bookings and slow organic search visibility.',
      tags: ['Local SEO', 'CRM Pipeline', 'WhatsApp Bots'],
      sparkline: (
        <svg className="w-full h-12 stroke-emerald-600" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,28 L15,26 L30,22 L45,18 L60,20 L75,10 L90,6 L100,2" />
          <path d="M0,28 L15,26 L30,22 L45,18 L60,20 L75,10 L90,6 L100,2 L100,30 L0,30 Z" fill="url(#grad-accent)" stroke="none" opacity="0.05" />
          <defs>
            <linearGradient id="grad-accent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: Users,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-100'
    },
    {
      metric: '5.2X',
      label: 'ROAS Improvement',
      sub: 'For an E-Commerce Brand',
      context: 'DTC apparel client struggling with high Meta acquisition costs and poor creative testing.',
      tags: ['Meta Ads', 'Video Editing', 'Landing Pages'],
      sparkline: (
        <svg className="w-full h-12 stroke-indigo-600" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,29 L15,28 L30,22 L45,24 L60,14 L75,18 L90,8 L100,1" />
          <path d="M0,29 L15,28 L30,22 L45,24 L60,14 L75,18 L90,8 L100,1 L100,30 L0,30 Z" fill="url(#grad-purple)" stroke="none" opacity="0.05" />
          <defs>
            <linearGradient id="grad-purple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: DollarSign,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-100'
    },
    {
      metric: '10X',
      label: 'Website Traffic Growth',
      sub: 'For a B2B SaaS Startup',
      context: 'Zero initial organic rankings. Scaled authority through content marketing and technical structure.',
      tags: ['Technical SEO', 'Content Strategy', 'UX Audit'],
      sparkline: (
        <svg className="w-full h-12 stroke-sky-600" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,28 L15,25 L30,27 L45,22 L60,15 L75,12 L90,4 L100,0" />
          <path d="M0,28 L15,25 L30,27 L45,22 L60,15 L75,12 L90,4 L100,0 L100,30 L0,30 Z" fill="url(#grad-cyan)" stroke="none" opacity="0.05" />
          <defs>
            <linearGradient id="grad-cyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: TrendingUp,
      color: 'text-sky-600',
      bg: 'bg-sky-50 border-sky-100'
    },
    {
      metric: '400%',
      label: 'ROI Boost',
      sub: 'For B2B Professional Services',
      context: 'Struggling with outbound lead response rates. Built automated LinkedIn & CRM outreach pipelines.',
      tags: ['LinkedIn CRM', 'HubSpot Flow', 'Sales Funnels'],
      sparkline: (
        <svg className="w-full h-12 stroke-amber-600" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,27 L20,24 L40,26 L60,16 L80,18 L100,3" />
          <path d="M0,27 L20,24 L40,26 L60,16 L80,18 L100,3 L100,30 L0,30 Z" fill="url(#grad-amber)" stroke="none" opacity="0.05" />
          <defs>
            <linearGradient id="grad-amber" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: Award,
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-100'
    },
    {
      metric: '8X',
      label: 'Conversion Rate Increase',
      sub: 'For a SaaS Startup Funnel',
      context: 'High ad clickthrough rate but poor landing page conversion. Complete React funnel overhaul.',
      tags: ['UI/UX Redesign', 'React Dev', 'A/B Testing'],
      sparkline: (
        <svg className="w-full h-12 stroke-rose-600" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,29 L15,26 L35,27 L55,16 L75,10 L100,0" />
          <path d="M0,29 L15,26 L35,27 L55,16 L75,10 L100,0 L100,30 L0,30 Z" fill="url(#grad-rose)" stroke="none" opacity="0.05" />
          <defs>
            <linearGradient id="grad-rose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: Zap,
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-100'
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative bg-[#FFFFFF] overflow-hidden border-t border-b border-slate-200">
      <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-20">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Showcase</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Real Results. Real Growth.</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            We measure our success in pipelines generated, ad spend optimized, and organic revenue closed.
          </p>
        </div>

        {/* Case Studies Grid (Staggered Stated cards display) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl glass border border-slate-200/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative flex flex-col justify-between bg-[#FFFFFF] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-5">
                    <div className="flex flex-col">
                      <span className={`text-4xl font-black ${cs.color} tracking-tight`}>
                        {cs.metric}
                      </span>
                      <span className="text-xs font-bold text-slate-800 tracking-wide mt-0.5">
                        {cs.label}
                      </span>
                    </div>
                    <div className={`p-2.5 rounded-xl ${cs.bg} border ${cs.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">{cs.sub}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {cs.context}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  {/* Data visualization sparkline */}
                  <div className="pt-2 border-t border-slate-100">
                    {cs.sparkline}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9px] bg-slate-50 border border-slate-200/50 text-slate-600 px-2 py-1 rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
