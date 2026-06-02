import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users } from 'lucide-react';
import PageHeader from './PageHeader';

export default function CaseStudiesPage() {
  const cases = [
    {
      metric: '300%',
      label: 'Increase in leads',
      sub: 'Local hospital group',
      context:
        'Fixed inconsistent bookings by rebuilding tracking, local SEO, and lead follow-up automation.',
      tags: ['Local SEO', 'CRM pipeline', 'WhatsApp bots'],
      icon: Users,
      color: 'text-accent',
    },
    {
      metric: '5.2X',
      label: 'ROAS improvement',
      sub: 'E-commerce brand',
      context:
        'Reduced acquisition cost using creative testing frameworks, better landing pages, and conversion tracking.',
      tags: ['Meta ads', 'Video editing', 'Landing pages'],
      icon: DollarSign,
      color: 'text-secondary',
    },
    {
      metric: '10X',
      label: 'Traffic growth',
      sub: 'B2B SaaS startup',
      context:
        'Built authority through technical SEO fixes, structured content, and UX improvements that increased conversions.',
      tags: ['Technical SEO', 'Content strategy', 'UX audit'],
      icon: TrendingUp,
      color: 'text-primary',
    },
  ];

  return (
    <div className="bg-[#050505]">
      <PageHeader
        eyebrow="Case studies"
        title="Proof you can measure."
        subtitle="This page is separate from the homepage section so you can expand the story and context here without changing the home layout."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((cs, idx) => (
              <motion.div
                key={cs.metric}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                  <div className="flex flex-col">
                    <span className={`text-5xl font-black ${cs.color} tracking-tight`}>{cs.metric}</span>
                    <span className="text-xs font-bold text-white tracking-wide mt-1">{cs.label}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-muted-text">
                    <cs.icon className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white">{cs.sub}</h4>
                <p className="text-xs text-muted-text leading-relaxed mt-2">{cs.context}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-white/5 border border-white/[0.03] text-muted-text px-2 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

