import { motion } from 'framer-motion';
import { Activity, Coins, Layers, Users } from 'lucide-react';
import PageHeader from './PageHeader';

export default function WhyMaasPage() {
  const pillars = [
    {
      title: 'One unified team',
      desc: 'Strategy, creative, development, media buying, and automation — coordinated as one execution engine.',
      icon: Users,
      color: 'text-primary',
    },
    {
      title: 'One unified dashboard',
      desc: 'Request intake, status tracking, approvals, and performance visibility without agency bottlenecks.',
      icon: Activity,
      color: 'text-secondary',
    },
    {
      title: 'One flat subscription',
      desc: 'Predictable monthly cost without hiring overhead, tool markups, or inflated retainers.',
      icon: Coins,
      color: 'text-accent',
    },
    {
      title: 'Execution velocity',
      desc: 'Short feedback loops and rapid iteration so growth compounds week over week.',
      icon: Layers,
      color: 'text-primary',
    },
  ];

  return (
    <div className="bg-[#050505]">
      <PageHeader
        eyebrow="Why MaaS"
        title="A better model than agencies, freelancers, or in-house hiring."
        subtitle="This page is independent from the homepage section so you can add deeper reasoning, examples, and proof points here without changing the home flow."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/[0.02] border border-white/5 p-7">
                <h3 className="text-white font-bold text-lg tracking-tight">The core problem</h3>
                <p className="text-muted-text text-sm mt-2 leading-relaxed">
                  Growth fails when execution is fragmented: one vendor runs ads, another builds pages, another handles
                  CRM, and reporting is disconnected. MaaS solves this by unifying the entire growth stack.
                </p>
                <div className="mt-5 text-xs text-slate-200/80 flex flex-col gap-2">
                  <span className="font-semibold text-white">What you stop doing:</span>
                  <span>- Managing multiple contractors</span>
                  <span>- Waiting on agency timelines</span>
                  <span>- Paying for redundant overhead</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (idx % 2) * 0.05 }}
                  className="p-7 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/5 w-fit ${p.color}`}>
                      <p.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold tracking-tight">{p.title}</h3>
                      <p className="text-xs text-muted-text leading-relaxed mt-1">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

