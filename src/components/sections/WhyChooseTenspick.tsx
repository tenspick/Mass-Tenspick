import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import { Target, Cpu, Hammer, BarChart3 } from 'lucide-react';

export const WhyChooseTenspick = () => {
  const cards = [
    {
      num: "01",
      eyebrow: "Beyond Automation",
      title: "Beyond automation. Built for relationships.",
      subtitle: "Most companies send messages. We build connections.",
      desc: "By combining strategic research, audience intelligence, and personalized engagement, we help brands connect with the right decision-makers and create opportunities that drive real business growth.",
      bg: "#0B192C",
      icon: Target,
      accent: "text-sky-400"
    },
    {
      num: "02",
      eyebrow: "MASS by TENSPICK",
      title: "The Future of Business Growth",
      subtitle: "Your industry knowledge, powered by marketing, automation, AI, and technology.",
      desc: "We don't just execute campaigns. We build systems that generate visibility, leads, customers, and revenue.",
      bg: "#1E3A8A",
      icon: Cpu,
      accent: "text-accent-pure"
    },
    {
      num: "03",
      eyebrow: "Data Attribution Alignment",
      title: "Precision tracking. Total attribution control.",
      subtitle: "From first ad click to final CRM deal closed.",
      desc: "We integrate and align your Meta/Google pixels, website events, and Salesforce/HubSpot pipelines so you see exactly which campaign generated your revenue returns.",
      bg: "#1F2937",
      icon: BarChart3,
      accent: "text-emerald-400"
    }
  ];

  return (
    <section className="bg-[#030712] border-t border-slate-800">
      {/* Intro Section */}
      <div className="w-full flex flex-col justify-center items-center text-center px-6 md:px-12 relative overflow-hidden bg-[#030712] py-20 border-b border-slate-850">
        {/* Ambient background animations */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[25%] left-[15%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[25%] right-[15%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-widest text-blue-500 uppercase font-mono"
          >
            Why Choose Tenspick
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-7xl font-black text-white-pure tracking-tight leading-none"
          >
            Why Choose Tenspick
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            At Tenspick, we believe in traction over talk, and execution over presentation slides. We are a unified group of veteran developers, designers, copywriters, and media buyers who work as a single team to build and launch high-converting digital assets and automated acquisition funnels. Instead of managing multiple fragmented agencies and freelancers, we provide everything your business needs to grow under one scalable, flat monthly subscription. Our goal is to remove friction, build systems that generate compounding daily returns, and connect you directly with qualified opportunities.
          </motion.p>
          
          {/* Subtle animated box indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 + i * 0.1 }}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : 'bg-accent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <ScrollStack>
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <ScrollStackItem
              key={idx}
              stepCounter={`${card.num} // WHY CHOOSE US`}
              categoryLabel={card.eyebrow}
              headline={card.title}
              supportingText={card.subtitle}
              description={card.desc}
              interactionElement={
                <div className="flex items-center gap-2 text-white-pure/60">
                  <Icon className="w-4 h-4 text-accent-pure" />
                  <span>MaaS Presentation</span>
                </div>
              }
              background={
                <div 
                  className="absolute inset-0 w-full h-full" 
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Background ambient light */}
                  <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
                  <div className="absolute inset-0 bg-grid-lines opacity-5" />
                </div>
              }
            />
          );
        })}
      </ScrollStack>
    </section>
  );
};

export default WhyChooseTenspick;
