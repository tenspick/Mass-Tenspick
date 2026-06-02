import { motion } from 'framer-motion';
import {
  BarChart3,
  Compass,
  Cpu,
  Database,
  Layers,
  LineChart,
  Mail,
  Palette,
  PenTool,
  Search,
  Share2,
  Target,
  Video,
  Zap,
  Heart,
  Code,
} from 'lucide-react';
import PageHeader from './PageHeader';

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'SEO (Search Engine Optimization)',
      desc: 'Rank for high-intent searches and build compounding organic traffic with a technical + content roadmap.',
      icon: Search,
      color: 'text-primary',
    },
    {
      title: 'Google Ads',
      desc: 'Capture demand instantly with search + shopping campaigns optimized for ROAS and lead quality.',
      icon: Target,
      color: 'text-secondary',
    },
    {
      title: 'Meta Ads',
      desc: 'Scale acquisition across Facebook & Instagram using creative testing, segmentation, and robust tracking.',
      icon: Share2,
      color: 'text-accent',
    },
    {
      title: 'Social Media Management',
      desc: 'Consistent posting, community engagement, and content systems that support both paid + organic growth.',
      icon: Heart,
      color: 'text-red-400',
    },
    {
      title: 'Website Development',
      desc: 'Modern, conversion-focused websites built for performance, clarity, and lead capture.',
      icon: Code,
      color: 'text-primary',
    },
    {
      title: 'Landing Pages',
      desc: 'High-converting funnels for paid traffic with better messaging, structure, and rapid iteration.',
      icon: Layers,
      color: 'text-secondary',
    },
    {
      title: 'Content Marketing',
      desc: 'Authority-building articles, case studies, and assets that move prospects from awareness to purchase.',
      icon: PenTool,
      color: 'text-accent',
    },
    {
      title: 'Email Marketing',
      desc: 'Lifecycle automations, newsletters, and sequences that increase conversion and retention.',
      icon: Mail,
      color: 'text-yellow-400',
    },
    {
      title: 'AI Automation',
      desc: 'Automate qualification, follow-ups, and system syncs so leads are handled instantly.',
      icon: Cpu,
      color: 'text-primary',
    },
    {
      title: 'CRM Setup',
      desc: 'Implement a clean pipeline, routing, tags, and reporting so you can see what’s working.',
      icon: Database,
      color: 'text-secondary',
    },
    {
      title: 'Lead Generation',
      desc: 'Multi-channel systems that consistently produce qualified inquiries — not just clicks.',
      icon: Zap,
      color: 'text-accent',
    },
    {
      title: 'Branding',
      desc: 'Positioning and visuals that increase trust and conversion across every touchpoint.',
      icon: Palette,
      color: 'text-purple-400',
    },
    {
      title: 'UI/UX Design',
      desc: 'Wireframes and UX improvements that reduce friction and increase conversion rate.',
      icon: Compass,
      color: 'text-primary',
    },
    {
      title: 'Video Editing',
      desc: 'Short-form creatives, ad edits, hooks, and subtitles designed for watch-time and CTR.',
      icon: Video,
      color: 'text-secondary',
    },
    {
      title: 'Marketing Strategy',
      desc: 'A practical execution plan across channels: goals, messaging, funnel, creatives, and reporting.',
      icon: BarChart3,
      color: 'text-accent',
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Dashboards and weekly reporting so you can track pipeline impact end-to-end.',
      icon: LineChart,
      color: 'text-green-400',
    },
  ];

  return (
    <div className="bg-[#050505]">
      <PageHeader
        eyebrow="Services"
        title="Everything you need to grow — under one subscription."
        subtitle="This page is separate from the homepage section, so you can expand service context here without changing the home layout."
      />

      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-white/[0.02] border border-white/5 p-7">
                <h3 className="text-white font-bold text-lg tracking-tight">How to pick what to start with</h3>
                <p className="text-muted-text text-sm mt-2 leading-relaxed">
                  Most teams waste months jumping channels. We start with your fastest path to pipeline, then build
                  compounding assets (SEO + content + automation) in parallel.
                </p>
                <div className="mt-5 flex flex-col gap-2 text-xs text-slate-200/80">
                  <span className="font-semibold text-white">Typical sequence:</span>
                  <span>1) Tracking + landing page clarity</span>
                  <span>2) Paid acquisition + creative testing</span>
                  <span>3) CRM + follow-up automation</span>
                  <span>4) SEO + content engine</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesList.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: (idx % 2) * 0.05 }}
                    className="p-7 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/5 w-fit ${service.color}`}>
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold tracking-tight">{service.title}</h3>
                        <p className="text-xs text-muted-text leading-relaxed mt-1">{service.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

