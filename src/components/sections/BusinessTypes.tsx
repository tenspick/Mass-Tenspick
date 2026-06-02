import { motion } from 'framer-motion';
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
      color: 'text-primary'
    },
    {
      name: 'E-Commerce',
      icon: ShoppingBag,
      desc: 'High-converting meta/google campaigns, cart abandonment emails, product landing pages, and LTV-driven copy.',
      color: 'text-secondary'
    },
    {
      name: 'Real Estate & Builders',
      icon: Home,
      desc: 'High-quality lead pipelines, localized search ads, hyper-targeted Facebook campaigns, and premium landing page funnels.',
      color: 'text-accent'
    },
    {
      name: 'Hospitals & Medical Clinics',
      icon: Activity,
      desc: 'Compliant lead capture systems, local SEO optimization, reputation management, and automated patient booking flows.',
      color: 'text-red-400'
    },
    {
      name: 'Schools & Academies',
      icon: GraduationCap,
      desc: 'Admission enrollment campaigns, social media management, community building, and automated inquiry follow-up systems.',
      color: 'text-yellow-400'
    },
    {
      name: 'Restaurants & Cafes',
      icon: Utensils,
      desc: 'Local search ads, Instagram reel promotion, reviews aggregation, WhatsApp menu integrations, and reservation booking systems.',
      color: 'text-orange-400'
    },
    {
      name: 'Retail Stores',
      icon: Store,
      desc: 'Drive physical foot traffic. Google local search pins, geotargeted social promotions, review campaigns, and loyalist rewards.',
      color: 'text-primary'
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      desc: 'B2B lead generation, LinkedIn outreach automation, HubSpot CRM setup, and conversion rate optimized landing pages.',
      color: 'text-secondary'
    },
    {
      name: 'Manufacturing & Industrial',
      icon: Factory,
      desc: 'B2B trade inquiries, website updates, technical documentation layouts, search optimizations, and pipeline setup.',
      color: 'text-accent'
    },
    {
      name: 'Construction & Remodeling',
      icon: Hammer,
      desc: 'Consistent localized phone call generation, SEO mapping, portfolio gallery optimization, and localized search advertising.',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="industries" className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Tailored Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Built For Every Business</h2>
          <p className="text-muted-text text-sm sm:text-base max-w-xl mx-auto">
            Our multi-disciplinary specialists build marketing campaigns that match the exact mechanics of your business sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.05 }}
              className="p-8 rounded-[32px] glass border border-slate-200/80 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between gap-6 cursor-pointer hover:-translate-y-1 bg-[#FFFFFF] min-h-[200px]"
            >
              <div className="flex flex-col gap-4">
                <div className={`p-3.5 rounded-2xl bg-primary/5 border border-primary/10 w-fit transition-transform duration-300 ${ind.color}`}>
                  <ind.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-tight">
                  {ind.name}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BusinessTypes;
