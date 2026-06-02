import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, DollarSign, Users } from 'lucide-react';

export const CaseStudies = () => {
  const cases = [
    {
      metric: '300%',
      label: 'Increase In Leads',
      sub: 'For a local Hospital Group',
      context: 'Struggling with inconsistent patient bookings and slow organic search visibility.',
      tags: ['Local SEO', 'CRM Pipeline', 'WhatsApp Bots'],
      sparkline: (
        <svg className="w-full h-16 stroke-accent" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,28 L15,26 L30,22 L45,18 L60,20 L75,10 L90,6 L100,2" />
          <path d="M0,28 L15,26 L30,22 L45,18 L60,20 L75,10 L90,6 L100,2 L100,30 L0,30 Z" fill="url(#grad-accent)" stroke="none" opacity="0.1" />
          <defs>
            <linearGradient id="grad-accent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FFB2" />
              <stop offset="100%" stopColor="#00FFB2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: Users,
      color: 'text-accent'
    },
    {
      metric: '5.2X',
      label: 'ROAS Improvement',
      sub: 'For an E-Commerce Brand',
      context: 'DTC apparel client struggling with high Meta acquisition costs and poor creative testing.',
      tags: ['Meta Ads', 'Video Editing', 'Landing Pages'],
      sparkline: (
        <svg className="w-full h-16 stroke-secondary" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,29 L15,28 L30,22 L45,24 L60,14 L75,18 L90,8 L100,1" />
          <path d="M0,29 L15,28 L30,22 L45,24 L60,14 L75,18 L90,8 L100,1 L100,30 L0,30 Z" fill="url(#grad-purple)" stroke="none" opacity="0.1" />
          <defs>
            <linearGradient id="grad-purple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: DollarSign,
      color: 'text-secondary'
    },
    {
      metric: '10X',
      label: 'Website Traffic Growth',
      sub: 'For a B2B SaaS Startup',
      context: 'Zero initial organic rankings. Scaled authority through content marketing and technical structure.',
      tags: ['Technical SEO', 'Content Strategy', 'UX Audit'],
      sparkline: (
        <svg className="w-full h-16 stroke-primary" fill="none" viewBox="0 0 100 30">
          <path strokeWidth="2.5" strokeLinecap="round" d="M0,28 L15,25 L30,27 L45,22 L60,15 L75,12 L90,4 L100,0" />
          <path d="M0,28 L15,25 L30,27 L45,22 L60,15 L75,12 L90,4 L100,0 L100,30 L0,30 Z" fill="url(#grad-cyan)" stroke="none" opacity="0.1" />
          <defs>
            <linearGradient id="grad-cyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      icon: TrendingUp,
      color: 'text-primary'
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative bg-[#050505] overflow-hidden border-b border-white/5">
      <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">Proof Of Concept</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Real Results. Real Growth.</h2>
          <p className="text-muted-text text-sm sm:text-base max-w-xl mx-auto">
            We don\'t focus on vanity metrics. We measure our execution success in pipelines generated, ad spend optimized, and organic revenue closed.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <motion.div
              key={cs.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 card-glow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                  <div className="flex flex-col">
                    <span className={`text-4xl sm:text-5xl font-black ${cs.color} tracking-tight`}>
                      {cs.metric}
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide mt-1">
                      {cs.label}
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-muted-text">
                    <cs.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-white">{cs.sub}</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {cs.context}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                {/* Data visualization sparkline */}
                <div className="pt-4 border-t border-white/[0.03]">
                  {cs.sparkline}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-[9px] bg-white/5 border border-white/[0.03] text-muted-text px-2 py-1 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CaseStudies;
