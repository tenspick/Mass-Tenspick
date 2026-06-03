import { Share2, DollarSign, Target, Briefcase, Activity, CheckCircle, Zap, Building2, Sprout, Ruler, Home, Paintbrush, Wind, Music, Newspaper, GraduationCap } from 'lucide-react';

export const Trust = () => {
  const clients = [
    { name: 'DEQUALITA PROJECTS', icon: Zap },
    { name: 'AGK GROUP', icon: Building2 },
    { name: 'AGK AGRICULTURE', icon: Sprout },
    { name: 'KVV DESIGNS', icon: Ruler },
    { name: 'AGK HOMES', icon: Home },
    { name: 'INTERIOR HOMS', icon: Paintbrush },
    { name: 'LAUNDRYOURS', icon: Wind },
    { name: 'SPARK DANCE ACADEMY', icon: Music },
    { name: 'IJACM', icon: Newspaper },
    { name: 'SCHOLAR SPHERE', icon: GraduationCap },
  ];


  // Double the clients list for infinite scroll marquee
  const tickerClients = [...clients, ...clients];

  const stats = [
    { 
      label: 'Impressions on Social Media', 
      value: '100M+', 
      desc: 'Organic & Paid reach scale across client campaigns.', 
      icon: Share2,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      label: 'Revenue Generated', 
      value: '$10M+', 
      desc: 'Attributed client business growth and closed pipeline.', 
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      label: 'Ad Budget Managed', 
      value: '$1M+', 
      desc: 'Optimized ad spend budgets with compounding ROAS.', 
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      label: 'Projects Delivered', 
      value: '500', 
      desc: 'High quality creative assets, code repositories, and brand kits.', 
      icon: Briefcase,
      color: 'from-blue-600 to-cyan-500'
    },
    { 
      label: 'Businesses Supported', 
      value: '100+', 
      desc: 'Scaling active brands across B2B, DTC, and local sectors.', 
      icon: Activity,
      color: 'from-purple-600 to-indigo-500'
    },
    { 
      label: 'Client Retention Rate', 
      value: '95%', 
      desc: 'Compounding daily returns and long-term retainer relations.', 
      icon: CheckCircle,
      color: 'from-emerald-600 to-green-400'
    },
  ];

  // Triple the stats list for seamless infinite scroll
  const tickerStats = [...stats, ...stats, ...stats];

  return (
    <section id="why-maas" className="py-24 relative overflow-hidden bg-[#FFFFFF] border-t border-b border-slate-200">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Elite Partnerships</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Trusted By Growing Businesses</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            We partner with ambitious founders, established agencies, and local services to drive revenue.
          </p>
        </div>

        {/* Client Logos Ticker */}
        <div className="w-full relative overflow-hidden py-4 logo-mask">
          <div className="flex w-max gap-8 animate-infinite-scroll pause-on-hover">
            {tickerClients.map((client, index) => {
              const IconComp = client.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer group"
                >
                  <IconComp className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-bold tracking-wider text-slate-800 whitespace-nowrap">{client.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Auto-scrolling Stats Cards */}
        <div className="w-full relative overflow-hidden py-8 logo-mask mt-4">
          <div className="flex w-max gap-8 animate-infinite-scroll pause-on-hover">
            {tickerStats.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <div 
                  key={index} 
                  className="w-[320px] sm:w-[360px] p-8 rounded-[28px] glass-accent border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between gap-6 cursor-pointer select-none bg-[#FFFFFF]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary w-fit">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-tighter">
                      {stat.value}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trust;

