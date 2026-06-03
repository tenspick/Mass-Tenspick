import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';


gsap.registerPlugin(ScrollTrigger);

export interface HorizontalCardData {
  num: string;
  icon: React.ComponentType<any> | string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  bg: string;
  accent: string;
}

interface HorizontalRevealProps {
  cards: HorizontalCardData[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionDescription?: string;
}

export const HorizontalReveal: React.FC<HorizontalRevealProps> = ({
  cards,
  sectionTitle = "COMPARISON",
  sectionSubtitle = "Choose Your acquisition Engine",
  sectionDescription = "See how traditional solutions compare to a unified Marketing-As-A-Service engine."
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Monitor resize to toggle GSAP vs CSS touch scroll
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    if (!containerRef.current || !pinRef.current || !trackRef.current) return;

    const cardsElement = trackRef.current;

    // Calculate scroll distance: width of the track minus the container width
    const getScrollAmount = () => {
      return cardsElement.scrollWidth - window.innerWidth * 0.7;
    };

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Pin the inner container inside the outer trigger container
        gsap.to(cardsElement, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + getScrollAmount(),
            pin: pinRef.current,
            scrub: 0.5,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
      }, containerRef);

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [isMobile, cards.length]);

  return (
    <div 
      ref={containerRef} 
      className="w-full bg-[#FFFFFF] border-t border-slate-200 relative"
    >
      <div 
        ref={pinRef}
        className="w-full bg-[#FFFFFF] relative overflow-hidden"
      >
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      
      {isMobile ? (
        /* Mobile Touch-Friendly Vertical List layout */
        <div className="py-16 px-6 sm:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
              {sectionTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              {sectionSubtitle}
            </h2>
            <p className="text-slate-650 text-sm leading-relaxed">
              {sectionDescription}
            </p>
          </div>

          {/* Cards Vertical Stack */}
          <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[380px] border relative overflow-hidden shadow-md"
                style={{ 
                  backgroundColor: card.bg,
                  borderColor: idx === cards.length - 1 ? 'rgba(37, 99, 235, 0.2)' : 'rgba(15, 23, 42, 0.05)'
                }}
              >
                {/* Grid lines overlay */}
                <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
                <div className="absolute top-0 right-0 p-6 text-6xl font-black opacity-5 select-none font-mono text-slate-900">
                  {card.num}
                </div>

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-widest text-slate-400">
                    <span>{card.num} // ENGINE COMPARISON</span>
                    <span>{card.category}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    {typeof card.icon === 'string' ? (
                      <span className="text-3xl sm:text-4xl">{card.icon}</span>
                    ) : (
                      <card.icon />
                    )}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  <h4 className={cn("text-xs font-bold leading-tight mt-1", card.accent)}>
                    {card.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    {card.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-2 mt-6 pt-4 border-t border-slate-100">
                  {idx === cards.length - 1 ? (
                    <span className="text-blue-600 font-black uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> RECOMMENDED SOLUTION
                    </span>
                  ) : (
                    <span className="text-red-500 font-black uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                      <X className="w-3.5 h-3.5" /> TRADITIONAL FRICTION
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Desktop Pinned Horizontal Scroll Layout */
        <div className="h-screen flex items-center justify-between">
          
          {/* Static Left Header Side */}
          <div className="w-[30%] h-full flex flex-col justify-center px-16 z-20 border-r border-slate-100 relative bg-[#FFFFFF]/90 backdrop-blur-sm shrink-0">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
                {sectionTitle}
              </span>
              <h2 className="text-4xl xl:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight">
                {sectionSubtitle}
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed mt-2">
                {sectionDescription}
              </p>
            </div>
            {/* Scroll Indicator helper */}
            <div className="absolute bottom-16 left-16 flex items-center gap-2 text-slate-400 font-mono text-[10px] tracking-wider">
              <div className="w-8 h-[1px] bg-slate-300" />
              <span>Scroll down to slide</span>
            </div>
          </div>

          {/* Scrolling Horizontal Track */}
          <div className="w-[70%] h-full flex items-center overflow-hidden shrink-0">
            <div 
              ref={trackRef} 
              className="flex items-center gap-10 px-20 h-full py-10 w-max"
            >
              {cards.map((card, idx) => (
                <div 
                  key={idx}
                  className="horizontal-card w-[550px] max-w-[85vw] h-[550px] rounded-3xl p-12 flex flex-col justify-between border relative overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.01]"
                  style={{ 
                    backgroundColor: card.bg,
                    borderColor: idx === cards.length - 1 ? 'rgba(37, 99, 235, 0.15)' : 'rgba(15, 23, 42, 0.06)'
                  }}
                >
                  <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
                  <div className="absolute top-0 right-0 p-12 text-[140px] font-black opacity-5 select-none font-mono text-slate-900 leading-none">
                    {card.num}
                  </div>

                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-widest text-slate-400">
                      <span>{card.num} // ENGINE COMPARISON</span>
                      <span>{card.category}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                      {typeof card.icon === 'string' ? (
                        <span className="text-6xl">{card.icon}</span>
                      ) : (
                        <card.icon />
                      )}
                      <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                        {card.title}
                      </h3>
                    </div>

                    <h4 className={cn("text-xl font-bold leading-snug mt-4", card.accent)}>
                      {card.subtitle}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2 max-w-lg">
                      {card.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div>
                      {idx === cards.length - 1 ? (
                        <span className="text-blue-600 font-black uppercase text-xs tracking-wider flex items-center gap-2">
                          <Check className="w-4 h-4" /> RECOMMENDED SOLUTION
                        </span>
                      ) : (
                        <span className="text-red-500 font-black uppercase text-xs tracking-wider flex items-center gap-2">
                          <X className="w-4 h-4" /> TRADITIONAL FRICTION
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      CARD 0{idx+1} / 0{cards.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
      </div>
    </div>
  );
};

export default HorizontalReveal;
