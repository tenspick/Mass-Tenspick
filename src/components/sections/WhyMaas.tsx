import { motion } from 'framer-motion';
import { X, Check, HelpCircle, Users, Activity, Layers, Coins } from 'lucide-react';

export const WhyMaas = () => {
  const competitors = [
    {
      title: 'Traditional Agencies',
      icon: '🏢',
      borderColor: 'border-red-500/20',
      pills: ['High overhead', 'Rigid contracts', 'Slow onboarding'],
      bullets: [
        'Markup on tools and ad placement',
        'Account managers, not doers, are main contact',
        'Slow execution cycles (weeks/months)'
      ],
      pointsIcon: X,
      pointsColor: 'text-red-400'
    },
    {
      title: 'Freelancers',
      icon: '👨‍💻',
      borderColor: 'border-orange-500/20',
      pills: ['High variance', 'Lack of process', 'Unreliable'],
      bullets: [
        'Coordination headaches between vendors',
        'Inconsistent delivery and code/design quality',
        'Limited bandwidth and skill breadth'
      ],
      pointsIcon: X,
      pointsColor: 'text-orange-400'
    },
    {
      title: 'In-House Teams',
      icon: '👥',
      borderColor: 'border-yellow-500/20',
      pills: ['Hiring headaches', 'Fixed salary overhead', 'Skill gaps'],
      bullets: [
        'High recruitment cost and equity expectations',
        'Suffer from low capacity/idle time',
        'Must hire 4-5 specialists to cover full scope'
      ],
      pointsIcon: X,
      pointsColor: 'text-yellow-400'
    }
  ];

  const tenspickMaas = {
    title: 'TENSPICK MAAS',
    tagline: 'The Ultimate Marketing Model',
    icon: '⚡',
    features: [
      { name: 'One Unified Team', desc: 'Copywriters, developers, designers, and media buyers, working as one.', icon: Users },
      { name: 'One Unified Dashboard', desc: 'Submit requests, check campaign progress, and view analytics in one hub.', icon: Activity },
      { name: 'One Flat Subscription', desc: 'No hiring overhead, hidden markups, or hourly billing. Predictable scale.', icon: Coins },
      { name: 'Unlimited Speed & Growth', desc: 'Move at startup velocity. Launch and optimize campaigns in hours, not weeks.', icon: Layers },
    ]
  };

  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">Problem vs. Solution</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Why Traditional Marketing Fails</h2>
          <p className="text-muted-text text-sm sm:text-base max-w-xl mx-auto">
            Traditional approaches demand too much management and high overhead. MaaS removes the friction.
          </p>
        </div>

        {/* Grid comparing Competitors and TENSPICK */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Competitors List */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
            {competitors.map((comp) => (
              <motion.div 
                key={comp.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl glass border border-slate-200/80 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col gap-6 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{comp.icon}</span>
                  <h3 className="font-bold text-white text-base">{comp.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {comp.pills.map((pill) => (
                    <span key={pill} className="text-[10px] bg-primary/5 text-muted-text px-2 py-0.5 rounded-full font-semibold">
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3.5 mt-2">
                  {comp.bullets.map((bullet, index) => (
                    <div key={index} className="flex gap-2.5 items-start">
                      <comp.pointsIcon className={`w-4 h-4 shrink-0 mt-0.5 ${comp.pointsColor}`} />
                      <span className="text-xs text-muted-text leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* TENSPICK MAAS Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass-accent border border-secondary/40 relative overflow-hidden flex flex-col gap-6 xl:col-span-1 shadow-2xl shadow-secondary/5 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Top Light Flare */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-secondary to-primary flex items-center justify-center text-xl">
                  {tenspickMaas.icon}
                </span>
                <div>
                  <h3 className="font-black text-white text-lg leading-none">{tenspickMaas.title}</h3>
                  <span className="text-[10px] text-accent font-semibold tracking-wider uppercase mt-1 block">{tenspickMaas.tagline}</span>
                </div>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold">
                RECOMMENDED
              </span>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              {tenspickMaas.features.map((feat, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-primary">
                    <feat.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {feat.name}
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </h4>
                    <p className="text-[11px] text-muted-text mt-1 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhyMaas;
