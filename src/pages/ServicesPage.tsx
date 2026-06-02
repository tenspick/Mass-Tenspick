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
  CheckCircle2
} from 'lucide-react';
import PageHeader from './PageHeader';

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'SEO (Search Engine Optimization)',
      desc: 'Rank on the first page of Google for high-intent search queries. Build organic traffic that converts without compounding costs.',
      details: [
        'Technical SEO audits and continuous monitoring to resolve indexing, schema, and page speed blocks.',
        'Semantic keyword maps targeting high-intent, long-tail commercial queries.',
        'High-quality editorial content pipelines to earn backlink authority and build compounding search visibility.'
      ],
      icon: Search,
      color: 'text-sky-400',
    },
    {
      title: 'Google Ads',
      desc: 'Capture search intent instantly. Laser-targeted search, shopping, and display campaigns optimized for maximum return on ad spend (ROAS).',
      details: [
        'Precise negative keyword structures to block low-intent traffic and reduce wasted spend.',
        'High-yielding Performance Max (PMax) campaign tuning with custom audience signals.',
        'Rigorous ad copy A/B tests matching user search queries to bespoke landing pages.'
      ],
      icon: Target,
      color: 'text-primary',
    },
    {
      title: 'Meta Ads',
      desc: 'Scale meta acquisition across Facebook & Instagram using dynamic creatives, demographic segmentation, and advanced custom lookalikes.',
      details: [
        'Creative Sandbox testing frameworks to rapidly isolate winning visual hooks.',
        'Custom Lookalike and Advantage+ audience setups leveraging clean offline CRM signals.',
        'Broad targeting and catalog sales scaling strategies optimized for consistent CAC.'
      ],
      icon: Share2,
      color: 'text-[#6C63FF]',
    },
    {
      title: 'Social Media Management',
      desc: 'Build an active, engaged community. End-to-end content calendar design, copywriting, publishing, and daily audience interaction.',
      details: [
        'Custom content calendars tailored to your specific brand tone and channels (LinkedIn, X, Instagram).',
        'Polished copywriting for community engagement, direct responses, and industry updates.',
        'Daily monitoring and direct interaction to turn passive followers into active advocates.'
      ],
      icon: Heart,
      color: 'text-red-400',
    },
    {
      title: 'Website Development',
      desc: 'Custom, blazing-fast web assets built with modern frameworks. Optimized for mobile, desktop, page speed, and visual elegance.',
      details: [
        'Optimized Next.js, React, or static frameworks ensuring near-perfect page-speed scores.',
        'Fully responsive layout designs tailored for mobile conversion and visual premium feel.',
        'Clean component-based architecture for seamless edits, integrations, and scalability.'
      ],
      icon: Code,
      color: 'text-[#00D4FF]',
    },
    {
      title: 'Landing Pages',
      desc: 'High-converting funnel pages designed for paid traffic campaigns. Rigorous A/B copy and layout testing to maximize lead conversion rates.',
      details: [
        'Clear, psychological headline and layout structures directing visitors straight to the primary action.',
        'Rigorous A/B split-testing of value propositions, hero graphics, and form layouts.',
        'Ultra-fast load times and streamlined form fields to prevent lead drop-offs.'
      ],
      icon: Layers,
      color: 'text-secondary',
    },
    {
      title: 'Content Marketing',
      desc: 'Establish your brand as an authority. In-depth articles, whitepapers, case studies, and graphics designed to nurture and close leads.',
      details: [
        'Data-backed industry reports, whitepapers, and guides that capture high-intent B2B details.',
        'Compelling customer success stories and case studies mapping challenges to tangible results.',
        'Social micro-content graphics and carousels that expand visual touchpoints.'
      ],
      icon: PenTool,
      color: 'text-accent',
    },
    {
      title: 'Email Marketing',
      desc: 'Maximize customer lifetime value. automated onboarding flows, newsletters, abandoned cart sequences, and segmentation triggers.',
      details: [
        'Behavioral flows (onboarding, browse abandonment, smart cross-sells) driven by subscriber events.',
        'Segmented newsletters and educational updates maintaining high click-through rates.',
        'Continuous subject line and layout optimization to increase overall campaign revenue.'
      ],
      icon: Mail,
      color: 'text-yellow-400',
    },
    {
      title: 'AI Automation',
      desc: 'Automate repetitive workflows, sync systems, and qualification logic. Build custom models to automate and scale customer communications.',
      details: [
        'Automated qualification logic that scores and routes new signups within seconds.',
        'Sync systems linking disparate platforms (ad forms, CRM, Slack, WhatsApp) seamlessly.',
        'Custom conversational LLM integrations to handle first-touch customer support questions.'
      ],
      icon: Cpu,
      color: 'text-primary',
    },
    {
      title: 'CRM Setup',
      desc: 'Integrate tools like Hubspot, Salesforce, or Zoho. Track lead histories, automate deal stages, and map sales cycles seamlessly.',
      details: [
        'Custom pipeline stages mapped to your exact sales process for total clarity.',
        'Lead source attribution tracking to show exactly which ad channel drove revenue.',
        'Automated deal routing and alert triggers so sales reps follow up instantly.'
      ],
      icon: Database,
      color: 'text-[#6C63FF]',
    },
    {
      title: 'Lead Generation',
      desc: 'Fuel your sales pipeline. Multi-channel cold outreach, lead magnet distribution, and dynamic qualification forms that capture qualified intent.',
      details: [
        'Cold email and LinkedIn outreach automation utilizing highly personalized variables.',
        'High-value lead magnet assets (templates, tools, checklists) that prospects exchange details for.',
        'Custom intent qualification forms filtering out unready leads before booking.'
      ],
      icon: Zap,
      color: 'text-accent',
    },
    {
      title: 'Branding',
      desc: 'Define your identity. High-fidelity logos, cohesive style guides, asset templates, and messaging guidelines that position you as market leader.',
      details: [
        'High-fidelity vector logo designs and typography pairings for consistent brand presence.',
        'Comprehensive style guides outlining color systems, spacing rules, and usage constraints.',
        'Cohesive ad creative templates and messaging blueprints for a market-leader position.'
      ],
      icon: Palette,
      color: 'text-purple-400',
    },
    {
      title: 'UI/UX Design',
      desc: 'Stunning visual interfaces designed with user psychology in mind. Wireframing, prototyping, and fully-interactive Figma blueprints.',
      details: [
        'Psychology-informed mockups reducing user cognitive load and streamlining navigation.',
        'High-fidelity, interactive Figma prototypes showing exact transitions and layouts.',
        'Developer-ready spec handoffs ensuring designed UI translates perfectly to code.'
      ],
      icon: Compass,
      color: 'text-primary',
    },
    {
      title: 'Video Editing',
      desc: 'High-impact video content for TikTok, Reels, YouTube Shorts, and paid ads. Polished animations, subtitles, hooks, and transitions.',
      details: [
        'First-3-second hook variations designed to stop the feed scroll on social platforms.',
        'Clean typography, kinetic subtitles, sound designs, and transitions to maximize watch-time.',
        'Dynamic creative formatting optimized for 9:16 vertical and 1:1 square feeds.'
      ],
      icon: Video,
      color: 'text-secondary',
    },
    {
      title: 'Marketing Strategy',
      desc: 'A comprehensive growth roadmap. Goal setting, market research, competitor audits, and funnel mapping led by veteran strategists.',
      details: [
        'Funnel maps tracing user journeys from initial discovery to active subscription.',
        'Thorough competitor messaging audits to reveal market positioning gaps.',
        'Budget allocation strategies based on target acquisition costs and conversion limits.'
      ],
      icon: BarChart3,
      color: 'text-accent',
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Full transparency. Custom business intelligence dashboards integrating data from all ad networks, web channels, and CRM logs.',
      details: [
        'Live data dashboards combining Google Ads, Meta Ads, and GA4 into one simple view.',
        'Multi-touch attribution systems detailing exact customer paths to pipeline.',
        'Weekly business summaries translating raw charts into execution priorities.'
      ],
      icon: LineChart,
      color: 'text-green-400',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Services"
        title="Everything you need to grow — under one subscription."
        subtitle="Skip the overhead of hiring, managing, and coordinating multiple agencies. We deliver the complete growth stack under one flat monthly price."
      />

      {/* Intro Overview Section */}
      <section className="py-20 relative bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Unified Growth Stack</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              An execution engine built to scale, not make recommendations.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most growth partners send long slide decks filled with tasks they won't implement. We operate as an extension of your company, designing, writing, coding, and scaling your brand continuously.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Predictable monthly flat rate — no hidden fees or hour tracking.',
                'Full access to all 16 execution capabilities without skill gaps.',
                'High velocity turnaround: ship ad hooks, copy, and landing pages in days.',
              ].map((bullet, i) => (
                <div key={i} className="flex gap-3 items-start text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg tracking-tight mb-4">How we prioritize work</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Instead of trying to launch everything on day one, we establish baseline assets and scale them systematically.
              </p>
              
              <div className="flex flex-col gap-4">
                {[
                  { phase: '1. Tracking & Landing Page Clarity', detail: 'Deploy analytics, map conversion pixels, and refine the landing page layouts to prevent drop-offs.' },
                  { phase: '2. Paid Channels & Creative Sandbox', detail: 'Launch laser-focused search and creative-led Meta campaigns to start acquiring qualified pipeline.' },
                  { phase: '3. Follow-up Systems & Automation', detail: 'Set up WhatsApp triggers, CRM tracking, and automated email sequences to nurture leads instantly.' },
                  { phase: '4. Brand Authority & SEO Engine', detail: 'Produce authority articles, optimize site structure, and implement a technical SEO roadmap.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{item.phase}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Services Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center flex flex-col gap-3 mb-12">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase">MaaS vs. Agencies</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">How TENSPICK Redefines Execution</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-700 uppercase font-bold">
                  <th className="p-5">Capability Area</th>
                  <th className="p-5">Traditional Agency Approach</th>
                  <th className="p-5 text-primary">TENSPICK MAAS Model</th>
                </tr>
              </thead>
              <tbody className="text-xs text-slate-600 divide-y divide-slate-100">
                {[
                  { area: 'Search Optimization', agency: 'Monthly SEO audits, static keyword recommendations, and slow execution on backlinks.', tenspick: 'Daily tracking, active keyword intent maps, technical codebase fixes, and continuous content publishing.' },
                  { area: 'Paid Acquisition', agency: 'Fixed ad spend commissions, rigid creatives, set-and-forget campaigns with high lead wastage.', tenspick: 'Performance-driven campaign setups, constant creative testing, and CRM attribution alignment.' },
                  { area: 'Web & Visual Assets', agency: 'Outsourced web dev, custom billing per revision, and slow mockup approvals taking weeks.', tenspick: 'Fully custom React code assets built on demand, continuous A/B tweaks, and zero hourly revision fees.' },
                  { area: 'Lead Pipeline Integration', agency: 'Leaves CRM and lead handoff to the client, leading to broken data syncs and lost leads.', tenspick: 'Direct integration of Salesforce/HubSpot, automated WhatsApp follow-ups, and live Slack alert triggers.' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">{row.area}</td>
                    <td className="p-5 leading-relaxed">{row.agency}</td>
                    <td className="p-5 leading-relaxed font-medium text-slate-800 bg-primary/[0.01]">{row.tenspick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Deep Dive</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Our 16 Core Capabilities</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Every card below is fully integrated into your plan. Click, request, and execute as your business needs dictate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between card-glow"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm w-fit text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-slate-900 font-extrabold text-sm tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {service.desc}
                    </p>

                    <div className="flex flex-col gap-2.5 mt-2 border-t border-slate-200/60 pt-4">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Key Deliverables:</span>
                      {service.details.map((bullet, i) => (
                        <div key={i} className="flex gap-2 items-start text-xs text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span className="leading-normal">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategy Call Call-To-Action (Bottom) */}
      <section className="py-20 bg-slate-900 text-white-pure relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-widest text-accent uppercase font-sans">Let's Connect</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white-pure tracking-tight">
            Build your marketing system today.
          </h2>
          <p className="text-slate-300-pure text-sm max-w-lg leading-relaxed">
            Schedule a strategy call with our principal growth strategist. We will audit your current channels and layout a custom MaaS roadmap for your business.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '#/contact';
            }}
            className="mt-4 px-8 py-4 bg-primary text-white-pure font-bold rounded-full hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-all duration-200"
            style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
          >
            Book Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
}
