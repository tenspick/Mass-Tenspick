import { motion } from 'framer-motion';
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
      color: 'text-primary'
    },
    {
      title: 'Google Ads',
      desc: 'Capture search intent instantly. Laser-targeted search, shopping, and display campaigns optimized for maximum return on ad spend (ROAS).',
      icon: Target,
      color: 'text-secondary'
    },
    {
      title: 'Meta Ads',
      desc: 'Scale meta acquisition across Facebook & Instagram using dynamic creatives, demographic segmentation, and advanced custom lookalikes.',
      icon: Share2,
      color: 'text-accent'
    },
    {
      title: 'Social Media Management',
      desc: 'Build an active, engaged community. End-to-end content calendar design, copywriting, publishing, and daily audience interaction.',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      title: 'Website Development',
      desc: 'Custom, blazing-fast web assets built with modern frameworks. Optimized for mobile, desktop, page speed, and visual elegance.',
      icon: Code,
      color: 'text-primary'
    },
    {
      title: 'Landing Pages',
      desc: 'High-converting funnel pages designed for paid traffic campaigns. Rigorous A/B copy and layout testing to maximize lead conversion rates.',
      icon: Layers,
      color: 'text-secondary'
    },
    {
      title: 'Content Marketing',
      desc: 'Establish your brand as an authority. In-depth articles, whitepapers, case studies, and graphics designed to nurture and close leads.',
      icon: PenTool,
      color: 'text-accent'
    },
    {
      title: 'Email Marketing',
      desc: 'Maximize customer lifetime value. automated onboarding flows, newsletters, abandoned cart sequences, and segmentation triggers.',
      icon: Mail,
      color: 'text-yellow-400'
    },
    {
      title: 'AI Automation',
      desc: 'Automate repetitive workflows, sync systems, and qualification logic. Build custom models to automate and scale customer communications.',
      icon: Cpu,
      color: 'text-primary'
    },
    {
      title: 'CRM Setup',
      desc: 'Integrate tools like Hubspot, Salesforce, or Zoho. Track lead histories, automate deal stages, and map sales cycles seamlessly.',
      icon: Database,
      color: 'text-secondary'
    },
    {
      title: 'Lead Generation',
      desc: 'Fuel your sales pipeline. Multi-channel cold outreach, lead magnet distribution, and dynamic qualification forms that capture qualified intent.',
      icon: Zap,
      color: 'text-accent'
    },
    {
      title: 'Branding',
      desc: 'Define your identity. High-fidelity logos, cohesive style guides, asset templates, and messaging guidelines that position you as market leader.',
      icon: Palette,
      color: 'text-purple-400'
    },
    {
      title: 'UI/UX Design',
      desc: 'Stunning visual interfaces designed with user psychology in mind. Wireframing, prototyping, and fully-interactive Figma blueprints.',
      icon: Compass,
      color: 'text-primary'
    },
    {
      title: 'Video Editing',
      desc: 'High-impact video content for TikTok, Reels, YouTube Shorts, and paid ads. Polished animations, subtitles, hooks, and transitions.',
      icon: Video,
      color: 'text-secondary'
    },
    {
      title: 'Marketing Strategy',
      desc: 'A comprehensive growth roadmap. Goal setting, market research, competitor audits, and funnel mapping led by veteran strategists.',
      icon: BarChart3,
      color: 'text-accent'
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Full transparency. Custom business intelligence dashboards integrating data from all ad networks, web channels, and CRM logs.',
      icon: LineChart,
      color: 'text-green-400'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Unified Capabilities</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Everything Your Business Needs To Grow</h2>
          <p className="text-muted-text text-sm sm:text-base max-w-xl mx-auto">
            Ditch the multiple agency retainers. Get complete marketing capabilities under one scalable, flat subscription.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
              className="p-8 rounded-[32px] glass border border-slate-200/80 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer hover:-translate-y-1 bg-[#FFFFFF]"
            >
              <div className="flex flex-col gap-4">
                <div className={`p-3.5 rounded-2xl bg-primary/5 border border-primary/10 w-fit ${service.color}`}>
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-tight">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal mt-4">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
