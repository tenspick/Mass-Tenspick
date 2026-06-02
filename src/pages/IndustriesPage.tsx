import { motion } from 'framer-motion';
import {
  Activity,
  Briefcase,
  Factory,
  GraduationCap,
  Hammer,
  Home,
  Rocket,
  ShoppingBag,
  Store,
  Utensils,
  CheckCircle2
} from 'lucide-react';
import PageHeader from './PageHeader';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Startups & SaaS',
      icon: Rocket,
      desc: 'Rapid user acquisition, funnel optimization, brand positioning, and analytics setup designed to support seed to Series B scaling.',
      color: 'text-primary',
      kpis: ['Monthly Recurring Revenue (MRR)', 'Customer Acquisition Cost (CAC)', 'LTV to CAC Ratio'],
      roadmap: 'Setup product analytics (Mixpanel/GA4) -> Design conversion-focused landing pages -> Launch targeted search/social ads -> Deploy lifecycle onboarding email sequences.'
    },
    {
      name: 'E-Commerce',
      icon: ShoppingBag,
      desc: 'High-converting meta/google campaigns, cart abandonment emails, product landing pages, and LTV-driven copy.',
      color: 'text-secondary',
      kpis: ['Return on Ad Spend (ROAS)', 'Average Order Value (AOV)', 'Cart Abandonment Rate'],
      roadmap: 'Implement Meta Conversion API -> Build high-impact video creative sandbox -> Design custom product landing pages -> Deploy automated abandoned cart & win-back flows.'
    },
    {
      name: 'Real Estate & Builders',
      icon: Home,
      desc: 'High-quality lead pipelines, localized search ads, hyper-targeted Facebook campaigns, and premium landing page funnels.',
      color: 'text-accent',
      kpis: ['Cost Per Qualified Lead', 'Lead-to-Viewing Conversion', 'Local Search Share of Voice'],
      roadmap: 'Launch localized Google Search ads targeting buyer intent -> Design premium interactive project landing pages -> Setup automated CRM lead routing and SMS text alerts.'
    },
    {
      name: 'Hospitals & Medical Clinics',
      icon: Activity,
      desc: 'Compliant lead capture systems, local SEO optimization, reputation management, and automated patient booking flows.',
      color: 'text-red-400',
      kpis: ['New Patient Bookings', 'Cost Per Appointment', 'Google Business Profile Views'],
      roadmap: 'Build HIPAA-compliant secure lead forms -> Optimize Google Business Profiles for local search rankings -> Set up automated text/email booking follow-up & review aggregation.'
    },
    {
      name: 'Schools & Academies',
      icon: GraduationCap,
      desc: 'Admission enrollment campaigns, social media management, community building, and automated inquiry follow-up systems.',
      color: 'text-yellow-400',
      kpis: ['Total Admission Inquiries', 'Cost Per Enrolled Student', 'Social Engagement Rate'],
      roadmap: 'Design parent-focused information landing pages -> Run geo-targeted admissions ads on social media -> Deploy automated email nurture sequences to guide inquiries to tour bookings.'
    },
    {
      name: 'Restaurants & Cafes',
      icon: Utensils,
      desc: 'Local search ads, Instagram reel promotion, reviews aggregation, WhatsApp menu integrations, and reservation booking systems.',
      color: 'text-orange-400',
      kpis: ['Foot Traffic Increase', 'Table Reservations Booked', 'WhatsApp Menu Views'],
      roadmap: 'Promote engaging vertical video reels highlighting signature dishes -> Run radius-based social promotion offers -> Integrate WhatsApp reservations & digital menu orders.'
    },
    {
      name: 'Retail Stores',
      icon: Store,
      desc: 'Drive physical foot traffic. Google local search pins, geotargeted social promotions, review campaigns, and loyalist rewards.',
      color: 'text-primary',
      kpis: ['Store Visits (Geo-Tracking)', 'Redeemed In-Store Coupons', 'Review Accumulation Rate'],
      roadmap: 'Setup Google Local Campaigns targeting surrounding zip codes -> Run geo-fenced social promotions offering exclusive coupons -> Set up post-purchase SMS review triggers.'
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      desc: 'B2B lead generation, LinkedIn outreach automation, HubSpot CRM setup, and conversion rate optimized landing pages.',
      color: 'text-secondary',
      kpis: ['B2B Sales Qualified Leads (SQLs)', 'Outreach Reply Rate', 'Pipeline Contract Value'],
      roadmap: 'Build landing pages detailing target value propositions -> Launch LinkedIn automated outreach targeting key decision-makers -> Align pipeline tracking inside HubSpot CRM.'
    },
    {
      name: 'Manufacturing & Industrial',
      icon: Factory,
      desc: 'B2B trade inquiries, website updates, technical documentation layouts, search optimizations, and pipeline setup.',
      color: 'text-accent',
      kpis: ['RFQ (Request for Quote) Volume', 'Technical Content Downloads', 'B2B Partner Inquiries'],
      roadmap: 'Rebuild website ensuring clean layout for technical specs -> Optimize search terms targeting niche B2B suppliers -> Create automated RFQ form logic routed to estimators.'
    },
    {
      name: 'Construction & Remodeling',
      icon: Hammer,
      desc: 'Consistent localized phone call generation, SEO mapping, portfolio gallery optimization, and localized search advertising.',
      color: 'text-purple-400',
      kpis: ['Inbound Phone Calls', 'On-Site Estimate Bookings', 'Local Organic Map Position'],
      roadmap: 'Build optimized project portfolio galleries showing before-and-after work -> Launch localized Google Search call ads -> Implement map pack ranking local SEO plan.'
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Industries"
        title="Built for the way your business sells."
        subtitle="Every industry requires a distinct marketing playbook. We customize our team, tools, and execution to match your target customer journey."
      />

      {/* Intro Overview Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Tailored Playbooks</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              We translate generic marketing channels into industry-specific growth loops.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ads, copy, and code don't exist in a vacuum. A local clinic needs compliant, local-intent capture; a B2B SaaS requires high-touch CRM nurturing; and an e-commerce brand demands high-velocity creative testing. We adapt our MaaS engine to fit your exact business type.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Specialized team alignment based on business type.',
                'Pre-built template frameworks for rapid deployment.',
                'Direct connection with industry specific tools & APIs.',
                'Dedicated vertical strategist managing your roadmap.'
              ].map((bullet, i) => (
                <div key={i} className="flex gap-2 items-start text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col gap-5">
              <h3 className="font-bold text-slate-900 text-base">Client Segmentation</h3>
              <div className="flex flex-col gap-3">
                {[
                  { segment: 'B2B & Professional Services', focus: 'High-touch B2B lead generation, LinkedIn pipelines, Hubspot automations, and whitepaper content.' },
                  { segment: 'B2C & E-Commerce', focus: 'Creative-heavy Meta/Google PMax campaigns, conversion rate optimized pages, and abandoned cart flows.' },
                  { segment: 'Local Brick & Mortar', focus: 'Local search rankings, Google Business maps optimization, geo-fenced social offers, and reviews acquisition.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-100 flex flex-col gap-1 shadow-sm">
                    <span className="text-xs font-bold text-primary">{item.segment}</span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Playbook Details Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-sans">Our Verticals</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">10 Industries We Scale</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Review our specialized plans, core key performance indicators, and execution sequences for each vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.05 }}
                  className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between card-glow"
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className={`p-3.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm w-fit ${ind.color} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-slate-900 font-extrabold text-lg tracking-tight">
                        {ind.name}
                      </h3>
                    </div>

                    {/* Copy Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {ind.desc}
                    </p>

                    {/* KPIs list */}
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Primary Metrics Optimized:</span>
                      <div className="flex flex-wrap gap-2">
                        {ind.kpis.map((kpi, kpiIdx) => (
                          <span key={kpiIdx} className="text-[10px] bg-slate-50 border border-slate-200/80 text-slate-600 px-3 py-1 rounded-full font-bold">
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Typical Playbook/Roadmap */}
                    <div className="flex flex-col gap-2 border-t border-slate-150 pt-4 mt-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Execution Roadmap:</span>
                      <p className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 font-mono">
                        {ind.roadmap}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Call to Action Section (Bottom) */}
      <section className="py-20 bg-slate-900 text-white-pure relative overflow-hidden" style={{ backgroundColor: '#0B192C' }}>
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-widest text-accent-pure uppercase">Free Consultation</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white-pure tracking-tight">
            Ready to design your growth system?
          </h2>
          <p className="text-slate-300-pure text-sm max-w-lg leading-relaxed">
            Connect with our strategist for a 20-minute discussion. We will benchmark your current ad acquisition costs and design a custom lead generation funnel suited to your industry.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '#/contact';
            }}
            className="mt-4 px-8 py-4 bg-primary text-white-pure font-bold rounded-full hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-all duration-200"
            style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
          >
            Request Free Blueprint
          </button>
        </div>
      </section>
    </div>
  );
}
