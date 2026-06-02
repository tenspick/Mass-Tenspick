import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
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
      challenge: 'The medical clinic group had high ad budgets but inconsistent online bookings. Leads were getting lost in spreadsheets, and staff followed up days later, leading to high inquiry drop-offs.',
      strategy: 'We integrated their CRM with WhatsApp automation, optimized their local Google Business profiles, and launched localized landing pages with compliant, simple scheduling forms.',
      execution: [
        'Built secure, HIPAA-compliant lead capture pages.',
        'Created WhatsApp chatbots that triggered within 10 seconds of form submissions to qualify patient inquiries.',
        'Structured automated appointment booking flow integrated directly with clinical calendars.'
      ],
      impact: 'Within 90 days, monthly inbound booking inquiries rose by 300%. The immediate response system reduced patient booking friction, and appointment drop-offs decreased by 40%.'
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
      challenge: 'The brand was stuck scaling on Meta Ads. Their ad return (ROAS) hovered around 1.5x, and rising acquisition costs made scaling budgets unprofitable. Creative testing was slow and disorganized.',
      strategy: 'We deployed a high-velocity Creative Sandbox testing strategy, designed high-intent product landing pages, and structured purchase flows utilizing Meta Conversions API.',
      execution: [
        'Designed custom video ad concepts testing hooks, subtitles, and vertical visual layouts.',
        'Built dedicated landing pages focusing on customer social proof and product features.',
        'Set up server-side Conversions API via Cloudflare to bypass browser ad-blocking.'
      ],
      impact: 'The average ROAS scaled from 1.5x to 5.2x over 60 days. CAC dropped by 55%, enabling them to scale monthly ad spend by 300% while maintaining target returns.'
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
      challenge: 'The software startup had zero organic traffic, relying entirely on paid ad channels. Their site structure had broken redirects, slow loading speeds, and page headers that failed to capture customer search intent.',
      strategy: 'We executed a technical SEO cleanup, mapped search term rankings, and built an authoritative B2B content library targeting high-intent long-tail keywords.',
      execution: [
        'Resolved technical site speed blocks, raising their Google Lighthouse score to 98.',
        'Researched and drafted 15 comprehensive keyword-targeted articles to build domain authority.',
        'Optimized site call-to-actions, introducing simple trial signup micro-funnels.'
      ],
      impact: 'Organic search visits increased by 1,000% (10x growth) in under 6 months. High search-intent keywords ranked on the first page of Google, driving high-converting signups without increasing ad spend.'
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Case studies"
        title="Proof you can measure."
        subtitle="Review the exact challenges, execution strategies, and outcomes we delivered for our partners."
      />

      {/* Intro Overview Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Tangible Evidence</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              We focus on building pipelines, not cosmetic metrics.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We don't count vanity impressions or likes as success. For us, marketing success is measured by inbound leads, qualified bookings, lowering acquisition costs, and increasing ad ROAS. Every campaign asset we design, code, and optimize is built to directly influence the metrics that drive revenue.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Review our detailed case breakdowns to see exactly how our copywriters, designers, and developers work together to resolve growth blocks.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-slate-900 text-base">Key Metrics Across Portfolio</h3>
            <div className="flex flex-col gap-3">
              {[
                { metric: '5.2x Average ROAS', detail: 'Across all managed Meta & Google Ads campaigns.' },
                { metric: '-42% Lead Cost', detail: 'Reduction in cost-per-lead after landing page optimizations.' },
                { metric: '10x Traffic Scale', detail: 'Average organic growth for clients adopting our SEO roadmap.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start text-xs text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{item.metric}</span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20">
          {cases.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <motion.div
                key={cs.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Metric Pillar (3 Columns) */}
                <div className="lg:col-span-3 flex flex-col gap-6 lg:border-r lg:border-slate-200 lg:pr-8">
                  <div className="flex flex-col">
                    <span className={`text-6xl font-black ${cs.color} tracking-tighter leading-none`}>
                      {cs.metric}
                    </span>
                    <span className="text-xs font-bold text-slate-800 tracking-wide mt-2">
                      {cs.label}
                    </span>
                  </div>
                  
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-500 shrink-0">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-850">{cs.sub}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-slate-50 border border-slate-200 text-slate-500 px-3 py-1 rounded-full font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Narrative (9 Columns) */}
                <div className="lg:col-span-9 flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight mb-2">Case Narrative</h3>
                    <p className="text-xs text-slate-500">{cs.context}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">The Challenge:</span>
                      <p className="text-xs text-slate-650 leading-relaxed font-medium">{cs.challenge}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Our Strategy:</span>
                      <p className="text-xs text-slate-650 leading-relaxed font-medium">{cs.strategy}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 p-6 bg-slate-50/50 rounded-2xl border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Technical Implementation:</span>
                    <div className="flex flex-col gap-2.5">
                      {cs.execution.map((bullet, i) => (
                        <div key={i} className="flex gap-2.5 items-start text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-slate-150 pt-5 mt-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Ultimate Growth Outcome:</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-bold bg-accent/5 p-4 rounded-xl border border-accent/25">
                      {cs.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Strategic Call to Action Section (Bottom) */}
      <section className="py-20 bg-slate-900 text-white-pure relative overflow-hidden" style={{ backgroundColor: '#0B192C' }}>
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-widest text-accent-pure uppercase">Build Your Success Story</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white-pure tracking-tight">
            Ready for results you can measure?
          </h2>
          <p className="text-slate-300-pure text-sm max-w-lg leading-relaxed">
            Consolidate your marketing department into a single subscription. Let us layout a growth blueprint for your company.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '#/contact';
            }}
            className="mt-4 px-8 py-4 bg-primary text-white-pure font-bold rounded-full hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-all duration-200"
            style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
          >
            Request Free Growth Blueprint
          </button>
        </div>
      </section>
    </div>
  );
}
