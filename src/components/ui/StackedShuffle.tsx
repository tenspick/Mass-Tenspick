import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';

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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [cards.length]);

  const order = useMemo(() => {
    const list = [];
    for (let i = 0; i < cards.length; i += 1) {
      list.push((activeIndex + i) % cards.length);
    }
    return list;
  }, [activeIndex, cards.length]);

  const handleShuffle = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section ref={containerRef} className="w-full bg-white py-14 sm:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full lg:w-[45%] flex flex-col gap-5 text-left"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
            ENGINEERED SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
            What We Build
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We build intelligent, automated systems that run in the background to grow your business.
            From conversational AI chatbots to CRM deal pipelines, these acquisition setups run 24/7 on autopilot.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {[
              'Conversational AI: 24/7 natural-language qualifiers',
              'Messaging: Multi-channel follow-ups on WhatsApp & Email',
              'CRM Integrations: Direct deal logs with no data entry',
              'Dashboard reporting & analytics tracked live',
              'Performance Ads: AI-optimized Meta & Google campaigns',
              'Predictive Analytics: Smart reporting sent automatically',
            ].map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all text-slate-500 hover:text-primary cursor-pointer"
              title="Previous card"
              type="button"
            >
              &lt;
            </button>

            <button
              onClick={handleShuffle}
              className="flex items-center gap-2.5 px-5 py-3 bg-primary text-white-pure rounded-xl hover:brightness-110 active:scale-95 transition-all text-xs font-bold shadow-lg shadow-primary/20 cursor-pointer"
              type="button"
            >
              Next System
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            <span className="text-xs font-mono text-slate-400 font-semibold">
              {String(activeIndex + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  'rounded-full transition-all duration-300 cursor-pointer',
                  i === activeIndex ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300',
                )}
                aria-label={`Show automation card ${i + 1}`}
                type="button"
              />
            ))}
          </div>

          <p className="text-[11px] text-slate-400 font-mono">
            Use controls, dots, or swipe cards to explore systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          className="w-full lg:w-[50%] flex items-center justify-center py-4 sm:py-8 relative select-none"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] h-[460px] sm:h-[500px]">
            {order.map((cardIdx, orderPosition) => {
              const card = cards[cardIdx];
              const isFront = orderPosition === 0;
              const isMiddle = orderPosition === 1;
              const isBack = orderPosition === 2;

              let rotate = 6;
              let xOffset = 45;
              let yOffset = 24;
              let scale = 0.88;
              let opacity = 0;
              const zIndex = cards.length - orderPosition;

              if (isFront) {
                rotate = -3;
                xOffset = 0;
                yOffset = 0;
                scale = 1;
                opacity = 1;
              } else if (isMiddle) {
                rotate = 0;
                xOffset = 14;
                yOffset = 8;
                scale = 0.96;
                opacity = 0.9;
              } else if (isBack) {
                rotate = 3;
                xOffset = 28;
                yOffset = 16;
                scale = 0.92;
                opacity = 0.75;
              }

              return (
                <motion.div
                  key={cardIdx}
                  animate={{ x: xOffset, y: yOffset, scale, rotate, opacity }}
                  drag={isFront}
                  dragElastic={0.35}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.offset.x) > 90 || Math.abs(info.offset.y) > 90) {
                      handleShuffle();
                    }
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={cn(
                    'absolute inset-0 rounded-3xl p-5 sm:p-7 flex flex-col justify-between border shadow-2xl overflow-hidden text-white-pure',
                    isFront ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none',
                  )}
                  style={{
                    zIndex,
                    backgroundColor: card.bg,
                    borderColor: 'rgba(255,255,255,0.08)',
                    transformOrigin: 'center center',
                  }}
                >
                  <div className="absolute inset-0 bg-grid-lines opacity-[0.03] pointer-events-none" />

                  <div className="relative z-10 flex justify-between items-center gap-3 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/50">
                    <span>{card.stepCounter || `0${cardIdx + 1} // PLATFORM`}</span>
                    <span className="text-right">{card.categoryLabel || 'SYSTEM'}</span>
                  </div>

                  <div className="relative z-10 flex flex-col gap-3 mt-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-white-pure uppercase tracking-tight leading-none">
                      {card.headline}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-bold text-accent-pure leading-tight">
                      {card.supportingText}
                    </h4>
                    <div className="text-xs leading-relaxed text-slate-300-pure mt-1 max-h-[210px] overflow-y-auto pr-1">
                      {card.description}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between gap-3 mt-auto pt-4 border-t border-white/5 text-[10px] font-mono text-white/60">
                    <div>{card.interactionElement}</div>
                    <div className="flex items-center gap-1 opacity-70 shrink-0">
                      <span>0{cardIdx + 1}</span>
                      <span>/</span>
                      <span>0{cards.length}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StackedShuffle;
