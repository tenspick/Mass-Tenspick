import React from 'react';
import { 
  Search, Target, Share2, Heart, Code, Layers, 
  PenTool, Mail, Cpu, Database, Zap, Palette, 
  Compass, Video, BarChart3, LineChart 
} from 'lucide-react';

export const Services = () => {
  const servicesList = [
    {
      title: 'SEO (Search Engine Optimization)',
      desc: 'Rank on the first page of Google for high-intent search queries. Build organic traffic that converts without compounding costs.',
      icon: Search,
      color: 'text-sky-600',
      bg: 'bg-sky-50 border-sky-100'
    },
    {
      title: 'Google Ads',
      desc: 'Capture search intent instantly. Laser-targeted campaigns optimized for maximum return on ad spend (ROAS).',
      icon: Target,
      color: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-100'
    },
    {
      title: 'Meta Ads',
      desc: 'Scale meta acquisition across Facebook & Instagram using dynamic creatives and custom lookalikes.',
      icon: Share2,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-100'
    },
    {
      title: 'Social Media Management',
      desc: 'Build an active, engaged community. End-to-end content calendar design, copywriting, and interactions.',
      icon: Heart,
      color: 'text-red-600',
      bg: 'bg-red-50 border-red-100'
    },
    {
      title: 'Website Development',
      desc: 'Custom, blazing-fast web assets built with modern frameworks. Optimized for mobile, speed, and elegance.',
      icon: Code,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-100'
    },
    {
      title: 'Landing Pages',
      desc: 'High-converting funnel pages designed for paid traffic campaigns. Rigorous A/B testing to maximize leads.',
      icon: Layers,
      color: 'text-violet-600',
      bg: 'bg-violet-50 border-violet-100'
    },
    {
      title: 'Content Marketing',
      desc: 'Establish your brand as an authority. In-depth articles, whitepapers, and graphics to nurture leads.',
      icon: PenTool,
      color: 'text-orange-600',
      bg: 'bg-orange-50 border-orange-100'
    },
    {
      title: 'Email Marketing',
      desc: 'Maximize customer lifetime value. automated flows, newsletters, and segmentation triggers.',
      icon: Mail,
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-100'
    },
    {
      title: 'AI Automation',
      desc: 'Automate repetitive workflows, sync systems, and build custom models to scale customer communications.',
      icon: Cpu,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50 border-cyan-100'
    },
    {
      title: 'CRM Setup',
      desc: 'Integrate tools like Hubspot, Salesforce, or Zoho. Track lead histories and sales cycles.',
      icon: Database,
      color: 'text-blue-700',
      bg: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Lead Generation',
      desc: 'Fuel your sales pipeline. Multi-channel cold outreach and dynamic qualification forms.',
      icon: Zap,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50 border-yellow-100'
    },
    {
      title: 'Branding',
      desc: 'Define your identity. High-fidelity logos, style guides, and messaging guidelines.',
      icon: Palette,
      color: 'text-fuchsia-600',
      bg: 'bg-fuchsia-50 border-fuchsia-100'
    },
    {
      title: 'UI/UX Design',
      desc: 'Stunning visual interfaces designed with user psychology in mind. Wireframing and prototyping.',
      icon: Compass,
      color: 'text-teal-600',
      bg: 'bg-teal-50 border-teal-100'
    },
    {
      title: 'Video Editing',
      desc: 'High-impact video content for TikTok, Reels, YouTube Shorts, and paid ads with polished animations.',
      icon: Video,
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-100'
    },
    {
      title: 'Marketing Strategy',
      desc: 'A comprehensive growth roadmap. Goal setting, market research, competitor audits, and funnel mapping.',
      icon: BarChart3,
      color: 'text-slate-700',
      bg: 'bg-slate-50 border-slate-250'
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Full transparency. Custom dashboards integrating data from all ad networks, web channels, and CRM logs.',
      icon: LineChart,
      color: 'text-lime-750',
      bg: 'bg-lime-50 border-lime-100'
    }
  ];

  // Distribute to 3 rows
  const row1 = servicesList.slice(0, 5);
  const row2 = servicesList.slice(5, 11);
  const row3 = servicesList.slice(11, 16);

  const tickerRow1 = [...row1, ...row1, ...row1];
  const tickerRow2 = [...row2, ...row2, ...row2];
  const tickerRow3 = [...row3, ...row3, ...row3];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#FFFFFF] border-t border-b border-slate-200">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Unified Capabilities</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Everything Your Business Needs To Grow</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Ditch the multiple agency retainers. Get complete marketing capabilities under one scalable, flat subscription.
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-6 mt-12 w-full">
        {/* Row 1: Right to Left */}
        <div className="w-full relative overflow-hidden py-2 logo-mask">
          <div className="flex w-max gap-6 animate-infinite-scroll pause-on-hover">
            {tickerRow1.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="w-[280px] sm:w-[320px] p-6 rounded-2xl glass border border-slate-200/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4 cursor-pointer select-none bg-[#FFFFFF]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${service.bg} border ${service.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left to Right (Reverse) */}
        <div className="w-full relative overflow-hidden py-2 logo-mask">
          <div className="flex w-max gap-6 animate-infinite-scroll-reverse pause-on-hover">
            {tickerRow2.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="w-[280px] sm:w-[320px] p-6 rounded-2xl glass border border-slate-200/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4 cursor-pointer select-none bg-[#FFFFFF]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${service.bg} border ${service.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 3: Right to Left */}
        <div className="w-full relative overflow-hidden py-2 logo-mask">
          <div className="flex w-max gap-6 animate-infinite-scroll pause-on-hover">
            {tickerRow3.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="w-[280px] sm:w-[320px] p-6 rounded-2xl glass border border-slate-200/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4 cursor-pointer select-none bg-[#FFFFFF]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${service.bg} border ${service.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 relative z-10">
        <a 
          href="#/services" 
          className="px-8 py-4 bg-primary text-white-pure font-bold rounded-full hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-all duration-200"
          style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
        >
          View All 16 Core Capabilities
        </a>
      </div>
    </section>
  );
};

export default Services;
