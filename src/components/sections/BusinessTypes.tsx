import React from 'react';
import { 
  Utensils, GraduationCap, Activity, Rocket, 
  Home, ShoppingBag, Store, Briefcase, 
  Factory, Hammer 
} from 'lucide-react';

export const BusinessTypes = () => {
  const industries = [
    {
      name: 'Startups & SaaS',
      icon: Rocket,
      desc: 'Rapid user acquisition, funnel optimization, brand positioning, and analytics setup designed to support seed to Series B scaling.',
      color: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-100'
    },
    {
      name: 'E-Commerce',
      icon: ShoppingBag,
      desc: 'High-converting meta/google campaigns, cart abandonment emails, product landing pages, and LTV-driven copy.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-100'
    },
    {
      name: 'Real Estate & Builders',
      icon: Home,
      desc: 'High-quality lead pipelines, localized search ads, hyper-targeted Facebook campaigns, and premium landing page funnels.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-100'
    },
    {
      name: 'Hospitals & Medical Clinics',
      icon: Activity,
      desc: 'Compliant lead capture systems, local SEO optimization, reputation management, and automated patient booking flows.',
      color: 'text-red-600',
      bg: 'bg-red-50 border-red-100'
    },
    {
      name: 'Schools & Academies',
      icon: GraduationCap,
      desc: 'Admission enrollment campaigns, social media management, community building, and automated inquiry follow-up systems.',
      color: 'text-violet-600',
      bg: 'bg-violet-50 border-violet-100'
    },
    {
      name: 'Restaurants & Cafes',
      icon: Utensils,
      desc: 'Local search ads, Instagram reel promotion, reviews aggregation, WhatsApp menu integrations, and reservation booking systems.',
      color: 'text-orange-600',
      bg: 'bg-orange-50 border-orange-100'
    },
    {
      name: 'Retail Stores',
      icon: Store,
      desc: 'Drive physical foot traffic. Google local search pins, geotargeted social promotions, review campaigns, and loyalist rewards.',
      color: 'text-sky-600',
      bg: 'bg-sky-50 border-sky-100'
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      desc: 'B2B lead generation, LinkedIn outreach automation, HubSpot CRM setup, and conversion rate optimized landing pages.',
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-100'
    },
    {
      name: 'Manufacturing & Industrial',
      icon: Factory,
      desc: 'B2B trade inquiries, website updates, technical documentation layouts, search optimizations, and pipeline setup.',
      color: 'text-teal-600',
      bg: 'bg-teal-50 border-teal-100'
    },
    {
      name: 'Construction & Remodeling',
      icon: Hammer,
      desc: 'Consistent localized phone call generation, SEO mapping, portfolio gallery optimization, and localized search advertising.',
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-100'
    }
  ];

  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5, 10);

  const tickerRow1 = [...row1, ...row1, ...row1];
  const tickerRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-[#FFFFFF] border-t border-b border-slate-200">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Tailored Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Built For Every Business</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Our multi-disciplinary specialists build marketing campaigns that match the exact mechanics of your business sector.
          </p>
        </div>
      </div>

      {/* Ticker Rows */}
      <div className="flex flex-col gap-6 mt-12 w-full">
        {/* Row 1: Right to Left */}
        <div className="w-full relative overflow-hidden py-2 logo-mask">
          <div className="flex w-max gap-6 animate-infinite-scroll pause-on-hover">
            {tickerRow1.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={index}
                  className="w-[280px] sm:w-[320px] p-6 rounded-2xl glass border border-slate-200/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4 cursor-pointer select-none bg-[#FFFFFF]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${ind.bg} border ${ind.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left to Right (Reverse) */}
        <div className="w-full relative overflow-hidden py-2 logo-mask">
          <div className="flex w-max gap-6 animate-infinite-scroll-reverse pause-on-hover">
            {tickerRow2.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={index}
                  className="w-[280px] sm:w-[320px] p-6 rounded-2xl glass border border-slate-200/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4 cursor-pointer select-none bg-[#FFFFFF]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${ind.bg} border ${ind.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
