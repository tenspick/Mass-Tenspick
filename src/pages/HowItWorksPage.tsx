import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronRight, Cpu, Layers, Target, Users } from 'lucide-react';
import PageHeader from './PageHeader';

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Strategy & Competitor Audit',
      timeline: 'Days 1 - 7',
      desc: 'We kick off with a thorough analysis of your current marketing channels, audit competitor ad libraries, map conversion opportunities, and layout a custom 90-day growth roadmap.',
      deliverables: [
        'Complete B2B or B2C competitor messaging audit.',
        'Target audience definition and channel prioritizations.',
        'Detailed backlog plan of landing page copy, ad hooks, and automation workflows.'
      ],
      icon: Target,
      color: 'text-primary',
    },
    {
      num: '02',
      title: 'Technical Integration & Assets',
      timeline: 'Days 8 - 15',
      desc: 'Our developers and designers code custom landing pages, set up conversion tracking pixels (Meta CAPI, GA4, GTM), connect lead routing APIs, and draft first-run copy assets.',
      deliverables: [
        'Custom React or static landing pages optimized for fast load speed.',
        'Attribution tracking audit connecting ad views to CRM lead records.',
        'Creative copywriting drafting first ad variations, hooks, and emails.'
      ],
      icon: Cpu,
      color: 'text-secondary',
    },
    {
      num: '03',
      title: 'Creative Sandbox & Launch',
      timeline: 'Days 16 - 25',
      desc: 'We launch ad campaign structures across social and search, run high-velocity creative testing frameworks (the Creative Sandbox), and trigger first-stage nurture automations.',
      deliverables: [
        'Launch search ad groups targeting commercial buyer search terms.',
        'Test vertical video hooks, visual formats, and copywriting variations.',
        'Deploy first-touch auto-responses and CRM routing workflows.'
      ],
      icon: Calendar,
      color: 'text-accent',
    },
    {
      num: '04',
      title: 'Ongoing Scaling & Optimization',
      timeline: 'Ongoing (Month 2+)',
      desc: 'We analyze live ad attribution, pause underperforming creatives, scale winners, optimize landing page A/B tests, and build long-term assets like SEO content and AI workflows.',
      deliverables: [
        'Weekly pipeline summaries mapping ad spend to closed revenue.',
        'Bi-weekly creative sprints launching new visual assets.',
        'Ongoing A/B copy updates and search engine optimization updates.'
      ],
      icon: Layers,
      color: 'text-primary',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="How It Works"
        title="Predictable scaling in four structured phases."
        subtitle="Discover how we transition your business from strategy kickoff to active, automated lead generation systems in under 30 days."
      />

      {/* Overview Intro Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Execution Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              We skip the lengthy onboarding cycles and start building from day one.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Traditional agencies take 4-6 weeks running discovery calls before writing copy or launching campaigns. We understand that momentum is key. Our 4-step execution framework is engineered to align tracking, design, copy, and ads so you see live campaign assets in under three weeks.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Once baseline assets are live, we enter a continuous loop of creative testing, copy iteration, and search optimization to compound your results month over month.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col gap-6">
              <h3 className="font-bold text-slate-900 text-base">Onboarding Checklist</h3>
              <p className="text-xs text-slate-500 leading-normal">
                To start execution immediately, we collect these details during our kickoff call:
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Secure administrative access to ad managers and GA4.',
                  'Competitor lists, customer profiles, and product specs.',
                  'Target cost-per-lead limits and monthly ad budgets.',
                  'Brand guidelines, vector logos, and color palettes.'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper Timeline Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center flex flex-col gap-3 mb-20">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">The Playbook</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Step-by-Step Delivery</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Our structured approach minimizes guesswork, ensuring tracking, copy, design, and code integrate seamlessly.
            </p>
          </div>

          {/* Stepper Cards */}
          <div className="flex flex-col gap-12 relative">
            {/* Draw a subtle connector line on desktop */}
            <div className="hidden lg:block absolute left-[50px] top-4 bottom-4 w-0.5 bg-slate-200/80 z-0" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col lg:flex-row gap-8 relative z-10"
                >
                  {/* Stepper Number Visual */}
                  <div className="flex items-center gap-4 shrink-0 lg:flex-col lg:items-center lg:gap-2 lg:w-28">
                    <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center ${step.color} shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col lg:items-center">
                      <span className="text-sm font-sans font-black text-slate-400-pure">{step.num}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider bg-slate-100 px-2 py-0.5 rounded-full mt-0.5 lg:mt-1">
                        {step.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-7 flex flex-col gap-4">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed text-slate-600 font-medium">
                        {step.desc}
                      </p>
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-3 bg-slate-50 p-6 rounded-2xl border border-slate-150">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Key Deliverables:</span>
                      {step.deliverables.map((bullet, i) => (
                        <div key={i} className="flex gap-2 items-start text-xs text-slate-500">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
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

      {/* Stepper FAQS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Expectations</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Timeline FAQ</h2>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { q: 'How long until I see results?', a: 'Within the first 14 days, all tracking pixels, landing pages, and initial ad campaigns are configured and reviewed. Campaigns typically launch by day 18-20, generating early click and lead attribution within the first 30 days.' },
              { q: 'Who runs my daily campaigns?', a: 'Your principal growth strategist designs the weekly sprints. Our internal designers, copywriters, and developers execute the deliverables, ensuring high asset quality.' },
              { q: 'What happens if a landing page needs immediate edits?', a: 'Simply submit a ticket inside our dashboard. We process landing page adjustments, typo corrections, and copy tweaks within 24 hours.' }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-900">{faq.q}</span>
                <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Call to Action Section (Bottom) */}
      <section className="py-20 bg-slate-900 text-white-pure relative overflow-hidden" style={{ backgroundColor: '#0B192C' }}>
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-widest text-accent-pure uppercase font-sans">Ready to launch?</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white-pure tracking-tight">
            Let's build your pipeline.
          </h2>
          <p className="text-slate-300-pure text-sm max-w-lg leading-relaxed">
            Consolidate your marketing channels and accelerate execution velocity. Schedule your strategy kickoff call today.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '#/contact';
            }}
            className="mt-4 px-8 py-4 bg-primary text-white-pure font-bold rounded-full hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-all duration-200"
            style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
          >
            Schedule Kickoff Call
          </button>
        </div>
      </section>
    </div>
  );
}
