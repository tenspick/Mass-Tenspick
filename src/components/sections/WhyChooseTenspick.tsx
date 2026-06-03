import React from 'react';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import { Target, Cpu, BarChart3 } from 'lucide-react';

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
