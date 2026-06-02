import { motion } from 'framer-motion';
import { Activity, Briefcase, Factory, GraduationCap, Hammer, Home, Rocket, ShoppingBag, Store, Utensils } from 'lucide-react';
import PageHeader from './PageHeader';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Startups & SaaS',
      icon: Rocket,
      desc: 'Rapid user acquisition, funnel optimization, and analytics setup designed to support scaling.',
      color: 'text-primary',
    },
    {
      name: 'E-Commerce',
      icon: ShoppingBag,
      desc: 'Performance creative testing, product pages, lifecycle email, and LTV-led optimization.',
      color: 'text-secondary',
    },
    {
      name: 'Real Estate & Builders',
      icon: Home,
      desc: 'Local lead funnels, Google search demand capture, and high-intent landing page systems.',
      color: 'text-accent',
    },
    {
      name: 'Hospitals & Clinics',
      icon: Activity,
      desc: 'Local SEO, compliant lead capture, reputation growth, and booking follow-up automation.',
      color: 'text-red-400',
    },
    {
      name: 'Schools & Academies',
      icon: GraduationCap,
      desc: 'Admissions campaigns, inquiry nurturing, and community-building content systems.',
      color: 'text-yellow-400',
    },
    {
      name: 'Restaurants & Cafes',
      icon: Utensils,
      desc: 'Local discovery, reel-based content, offers, and WhatsApp-driven conversions.',
      color: 'text-orange-400',
    },
    {
      name: 'Retail Stores',
      icon: Store,
      desc: 'Footfall campaigns, geo-targeted promotions, and review + loyalty systems.',
      color: 'text-primary',
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      desc: 'B2B lead generation, landing pages, and CRM + follow-up workflows.',
      color: 'text-secondary',
    },
    {
      name: 'Manufacturing & Industrial',
      icon: Factory,
      desc: 'Trade inquiry pipelines, technical content, and search visibility improvements.',
      color: 'text-accent',
    },
    {
      name: 'Construction & Remodeling',
      icon: Hammer,
      desc: 'Localized phone call generation, project portfolio, and consistent pipeline building.',
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="bg-[#050505]">
      <PageHeader
        eyebrow="Industries"
        title="Built for the way your business sells."
        subtitle="This page is separate from the homepage section so you can add more vertical-specific context here without impacting the home layout."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.05 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/5 w-fit ${ind.color}`}>
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold tracking-tight">{ind.name}</h3>
                  <p className="text-xs text-muted-text leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

