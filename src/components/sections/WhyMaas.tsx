import React from 'react';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import { X, Check } from 'lucide-react';

export const WhyMaas = () => {
  const cards = [
    {
      num: "01",
      icon: "🏢",
      category: "Traditional Agencies",
      title: "Traditional Agencies",
      subtitle: "High overhead. Rigid contracts. Slow onboarding.",
      desc: "Markup on tools and ad placement. Account managers, not doers, are main contact. Slow execution cycles (weeks/months).",
      bg: "#1E0A0A",
      accent: "text-red-400"
    },
    {
      num: "02",
      icon: "👨‍💻",
      category: "Freelancers",
      title: "Freelancers",
      subtitle: "High variance. Lack of process. Unreliable.",
      desc: "Coordination headaches between vendors. Inconsistent delivery and code/design quality. Limited bandwidth and skill breadth.",
      bg: "#1E1005",
      accent: "text-orange-400"
    },
    {
      num: "03",
      icon: "👥",
      category: "In-House Teams",
      title: "In-House Teams",
      subtitle: "Hiring headaches. Fixed salary overhead. Skill gaps.",
      desc: "High recruitment cost and equity expectations. Suffer from low capacity/idle time. Must hire 4-5 specialists to cover full scope.",
      bg: "#1E1B05",
      accent: "text-yellow-400"
    },
    {
      num: "04",
      icon: "⚡",
      category: "TENSPICK MAAS",
      title: "TENSPICK MAAS",
      subtitle: "The Ultimate Marketing Model // RECOMMENDED",
      desc: "One Unified Team: Copywriters, developers, designers, and media buyers, working as one. One Unified Dashboard: Submit requests, check campaign progress, and view analytics in one hub. One Flat Subscription: No hiring overhead, hidden markups, or hourly billing. Predictable scale. Unlimited Speed & Growth: Move at startup velocity. Launch and optimize campaigns in hours, not weeks.",
      bg: "#061329",
      accent: "text-accent-pure"
    }
  ];

  return (
    <ScrollStack>
      {cards.map((card, idx) => {
        return (
          <ScrollStackItem
            key={idx}
            stepCounter={`${card.num} // WHY TRADITIONAL MARKETING FAILS`}
            categoryLabel={card.category}
            headline={
              <span className="flex items-center justify-center gap-3">
                <span className="text-4xl sm:text-6xl md:text-7xl">{card.icon}</span>
                <span>{card.title}</span>
              </span>
            }
            supportingText={card.subtitle}
            description={card.desc}
            interactionElement={
              <div className="flex items-center gap-2 text-white-pure/60">
                {idx === 3 ? (
                  <span className="text-accent-pure font-black uppercase flex items-center gap-1">
                    <Check className="w-4 h-4" /> RECOMMENDED SOLUTION
                  </span>
                ) : (
                  <span className="text-red-400/80 font-black uppercase flex items-center gap-1">
                    <X className="w-4 h-4" /> TRADITIONAL FRICTION
                  </span>
                )}
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
  );
};
export default WhyMaas;
