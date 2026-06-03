import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface StackCardData {
  stepCounter?: string;
  categoryLabel?: string;
  headline?: React.ReactNode;
  supportingText?: React.ReactNode;
  description?: React.ReactNode;
  interactionElement?: React.ReactNode;
  background?: React.ReactNode;
  bg: string;
}

interface StackedShuffleProps {
  cards: StackCardData[];
}

export const StackedShuffle: React.FC<StackedShuffleProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1024
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop Pinning and Scroll-Driven Shuffling
  useEffect(() => {
    if (isMobile) return;
    if (!containerRef.current || !pinRef.current) return;

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${cards.length * 350}`, // Scroll distance for shuffles
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 0.1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const segment = 1 / cards.length;
            const currentIdx = Math.min(
              Math.floor(progress / segment),
              cards.length - 1
            );
            setActiveIndex(currentIdx);
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
  }, [cards.length, isMobile]);

  // Derived card order based on activeIndex
  const order = useMemo(() => {
    const list = [];
    for (let i = 0; i < cards.length; i++) {
      list.push((activeIndex + i) % cards.length);
    }
    return list;
  }, [activeIndex, cards.length]);

  const handleShuffle = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div ref={containerRef} className="w-full bg-[#FFFFFF] relative">
      <div ref={pinRef} className="w-full bg-[#FFFFFF] py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 sm:px-12">
          
          {/* Left Side text introduction */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6 text-left">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
              ENGINEERED SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              What We Build
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
              We build intelligent, automated systems that run in the background to grow your business. 
              From conversational AI chatbots to CRM deal pipelines, these acquisition setups run 24/7 on autopilot.
            </p>

            <div className="flex flex-col gap-3.5 mt-2">
              {[
                "Conversational AI: 24/7 natural-language qualifiers",
                "Messaging: Multi-channel follow-ups on WhatsApp & Email",
                "CRM Integrations: Direct deal logs with no data entry",
                "Dashboard reporting & analytics tracked live"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Shuffle Trigger Button */}
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-primary text-white-pure rounded-xl hover:brightness-110 active:scale-95 transition-all text-xs font-bold w-fit mt-4 shadow-lg shadow-primary/20 cursor-pointer"
            >
              Next System Architecture
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
            </button>
          </div>

          {/* Right Side Stack deck */}
          <div className="w-full lg:w-[50%] flex items-center justify-center py-10 relative select-none">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] h-[520px]">
              {order.map((cardIdx, orderPosition) => {
                const card = cards[cardIdx];
                const isFront = orderPosition === 0;
                const isMiddle = orderPosition === 1;
                const isBack = orderPosition === 2;

                // Stack cards dynamically based on position
                let rotate = 0;
                let xOffset = 0;
                let yOffset = 0;
                let scale = 1;
                let opacity = 1;
                let zIndex = cards.length - orderPosition;

                if (isFront) {
                  rotate = -4;
                  xOffset = 0;
                  yOffset = 0;
                  scale = 1.0;
                  opacity = 1;
                } else if (isMiddle) {
                  rotate = 0;
                  xOffset = 18;
                  yOffset = 8;
                  scale = 0.96;
                  opacity = 0.9;
                } else if (isBack) {
                  rotate = 4;
                  xOffset = 36;
                  yOffset = 16;
                  scale = 0.92;
                  opacity = 0.8;
                } else {
                  // Stack queued cards hidden at the back
                  rotate = 6;
                  xOffset = 45;
                  yOffset = 24;
                  scale = 0.88;
                  opacity = 0;
                }

                return (
                  <motion.div
                    key={cardIdx}
                    style={{ zIndex }}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale,
                      rotate,
                      opacity
                    }}
                    drag={isFront}
                    dragElastic={0.4}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    onDragEnd={(e, info) => {
                      // Shuffle when swiped more than 100px in any direction
                      if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
                        handleShuffle();
                      }
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={cn(
                      "absolute inset-0 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border shadow-2xl relative overflow-hidden text-white-pure",
                      isFront ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                    )}
                    style={{
                      backgroundColor: card.bg,
                      borderColor: 'rgba(255,255,255,0.08)',
                      transformOrigin: "center center"
                    }}
                  >
                    {/* Grid lines layout overlay */}
                    <div className="absolute inset-0 bg-grid-lines opacity-[0.03] pointer-events-none" />

                    {/* Top Header */}
                    <div className="relative z-10 flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/50">
                      <span>{card.stepCounter || `0${cardIdx + 1} // PLATFORM`}</span>
                      <span>{card.categoryLabel || 'SYSTEM'}</span>
                    </div>

                    {/* Body Content */}
                    <div className="relative z-10 flex flex-col gap-4 mt-4">
                      <h3 className="text-2xl sm:text-3xl font-black text-white-pure uppercase tracking-tight leading-none">
                        {card.headline}
                      </h3>
                      <h4 className="text-xs sm:text-sm font-bold text-accent-pure leading-tight">
                        {card.supportingText}
                      </h4>
                      <div className="text-xs leading-relaxed text-slate-300-pure mt-1">
                        {card.description}
                      </div>
                    </div>

                    {/* Footer element */}
                    <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-white/5 text-[10px] font-mono text-white/60">
                      <div>{card.interactionElement}</div>
                      <div className="flex items-center gap-1 opacity-70">
                        <span>0{cardIdx + 1}</span>
                        <span>/</span>
                        <span>0{cards.length}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StackedShuffle;
