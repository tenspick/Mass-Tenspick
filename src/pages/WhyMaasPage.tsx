import { motion } from 'framer-motion';
import { Activity, Coins, Layers, Users, ShieldCheck, Check, X } from 'lucide-react';
import PageHeader from './PageHeader';

export default function WhyMaasPage() {
  const pillars = [
    {
      title: 'One unified team',
      desc: 'Strategy, creative, development, media buying, and automation — coordinated as one execution engine.',
      details: [
        'No communications gaps: our copywriter talks directly to our designer, who works directly with our developer.',
        'Total alignment: every campaign is built around a single consistent message, preventing brand dilution.',
        'High skill breadth: scale your campaign on search, social, or custom code assets without hiring freelancers.'
      ],
      icon: Users,
      color: 'text-primary',
    },
    {
      title: 'One unified dashboard',
      desc: 'Request intake, status tracking, approvals, and performance visibility without agency bottlenecks.',
      details: [
        'Submit requests: submit a task in seconds using our simplified client dashboard interface.',
        'Live progress tracking: see exactly which stage of design, coding, or ad launch your task is currently in.',
        'Performance view: track multi-touch metrics, leads, and ad ROAS in real time without weekly calls.'
      ],
      icon: Activity,
      color: 'text-secondary',
    },
    {
      title: 'One flat subscription',
      desc: 'Predictable monthly cost without hiring overhead, tool markups, or inflated retainers.',
      details: [
        'Predictable spend: know exactly what your marketing costs are every single month without surprises.',
        'No hiring overhead: skip the expensive recruitment cycles, equity distributions, and benefits costs.',
        'Zero tool markups: we absorb software fees for core tools, ensuring you pay only for direct execution.'
      ],
      icon: Coins,
      color: 'text-accent',
    },
    {
      title: 'Execution velocity',
      desc: 'Short feedback loops and rapid iteration so growth compounds week over week.',
      details: [
        'Rapid iteration: ship ad creatives, landing pages, and email hooks in days instead of weeks.',
        'Feedback loops: quick adjustments based on live ad performance data to scale winning variations.',
        'Compounding results: small, continuous updates stack to create massive growth over time.'
      ],
      icon: Layers,
      color: 'text-primary',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Why MaaS"
        title="A better model than agencies, freelancers, or in-house hiring."
        subtitle="Unify your strategy, copy, design, dev, and ad scaling into one high-performance subscription."
      />

      {/* Intro Context Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">The Fragmented Growth Problem</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why traditional marketing execution breaks down.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most businesses manage a fragmented growth stack. They hire a freelancer for dev, an agency for ad management, a contractor for copy, and try to coordinate them with a project manager. The result is slow delivery, misaligned messaging, and finger-pointing when results don’t convert.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Marketing As A Service (MaaS) unifies this entire workflow. By housing developers, designers, copywriters, and media buyers under one flat subscription, we run your campaigns as a single, coordinated execution engine.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg tracking-tight mb-4">Core Model Pillars</h3>
              <div className="flex flex-col gap-3">
                {[
                  { title: 'Velocity Over Slides', desc: 'We spend our time coding, designing, and optimizing ad creatives rather than drafting 80-slide decks detailing what we could do.' },
                  { title: 'No Key Person Risk', desc: 'If an in-house employee resigns or a freelancer goes silent, your growth pauses. MaaS guarantees continuous delivery.' },
                  { title: 'Attribution Control', desc: 'We align landing page code, ad tracking pixels, and CRM lead records, ensuring your reports show true business revenue.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
                    <span className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Comparative Analysis Table */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase font-sans">Compare Models</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">The Growth Math</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Compare the costs, timelines, management overhead, and risks of typical scaling models against MaaS.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-md bg-white">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-250 text-xs text-slate-700 uppercase font-extrabold">
                  <th className="p-6">Feature</th>
                  <th className="p-6">In-House Team</th>
                  <th className="p-6">Traditional Agency</th>
                  <th className="p-6">Freelancer Network</th>
                  <th className="p-6 text-primary bg-primary/[0.02]">TENSPICK MAAS</th>
                </tr>
              </thead>
              <tbody className="text-xs text-slate-600 divide-y divide-slate-100">
                {[
                  { feat: 'Monthly Cost', inhouse: '$$$$ ($25k+/mo for 4 specialists)', agency: '$$$ ($5k-$12k/mo retainer)', freelance: '$$ (Variable hourly rates)', maas: 'Predictable Flat Fee ($/mo)', highlight: true },
                  { feat: 'Onboarding Speed', inhouse: 'Slow (30-90 days recruiting)', agency: 'Medium (14-30 days setups)', freelance: 'Fast (1-5 days)', maas: 'Immediate (1-3 days)', highlight: false },
                  { feat: 'Skill Breadth', inhouse: 'Limited to individuals hired', agency: 'Broad but gated by managers', freelance: 'Niche (Individual only)', maas: 'Full (16 core capabilities)', highlight: true },
                  { feat: 'Software Tool Fees', inhouse: 'Paid by client ($1k+/mo)', agency: 'Hidden markup / Client paid', freelance: 'Paid by client', maas: 'Included in subscription', highlight: false },
                  { feat: 'Turnaround Time', inhouse: '1-3 days (Inside queue)', agency: '2-3 weeks (Heavy bureaucracy)', freelance: 'Variable (Gated by bandwidth)', maas: '24-72 hours average', highlight: true },
                  { feat: 'Hiring/Equity Risk', inhouse: 'High (Recruiting & Churn)', agency: 'Low (Contractual)', freelance: 'High (Silent/Ghosting)', maas: 'Zero (Pause/Cancel anytime)', highlight: false },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-bold text-slate-800">{row.feat}</td>
                    <td className="p-6 leading-relaxed">{row.inhouse}</td>
                    <td className="p-6 leading-relaxed">{row.agency}</td>
                    <td className="p-6 leading-relaxed">{row.freelance}</td>
                    <td className={`p-6 leading-relaxed font-bold text-slate-900 bg-primary/[0.01] ${row.highlight ? 'text-primary' : ''}`}>{row.maas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">MaaS Pillars</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Our Four Execution Pillars</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              How our subscription model organizes communication, delivery, and scaling velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.05 }}
                  className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between card-glow"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm w-fit ${p.color} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-slate-900 font-extrabold text-lg tracking-tight">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      {p.desc}
                    </p>

                    <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-4 mt-2">
                      {p.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex gap-2.5 items-start text-xs text-slate-500">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
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

      {/* A Day in the Life Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">The Workflow</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">How We Work Together</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Our continuous loop of requests, review, launch, and optimization ensures velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '1. Request Intake', detail: 'Submit copy briefs, landing page mockups, or ad updates directly inside our unified client portal.' },
              { step: '2. Priority Review', detail: 'Our principal growth strategist reviews details, maps tasks, and assigns assets to design & coding.' },
              { step: '3. Fast Delivery', detail: 'Our copywriters, designers, and developers code, write, and format components in 24-72 hours.' },
              { step: '4. Direct Handoff', detail: 'We launch ad creative sandboxes, sync lead routes, deploy web updates, and link tracking codes.' },
              { step: '5. Weekly Metrics', detail: 'We analyze target pipeline attribution and adapt the request queue for the coming week.' }
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col gap-3 shadow-sm hover:border-primary/20 transition-all duration-300">
                <span className="text-2xl font-black text-primary/25">0{idx + 1}</span>
                <h3 className="font-extrabold text-xs text-slate-800 tracking-tight">{step.step}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Call to Action Section (Bottom) */}
      <section className="py-20 bg-slate-900 text-white-pure relative overflow-hidden" style={{ backgroundColor: '#0B192C' }}>
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-widest text-accent-pure uppercase">Scale Predictably</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white-pure tracking-tight">
            Stop coordinating. Start executing.
          </h2>
          <p className="text-slate-300-pure text-sm max-w-lg leading-relaxed">
            Consolidate your designers, copywriters, developers, and media buyers into one flat monthly plan. Experience rapid scaling without hiring overhead.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '#/contact';
            }}
            className="mt-4 px-8 py-4 bg-primary text-white-pure font-bold rounded-full hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-all duration-200"
            style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
          >
            Start Your Subscription
          </button>
        </div>
      </section>
    </div>
  );
}
