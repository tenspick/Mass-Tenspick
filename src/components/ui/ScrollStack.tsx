import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export interface ScrollStackItemProps {
  stepCounter?: string;
  categoryLabel?: string;
  headline?: React.ReactNode;
  supportingText?: React.ReactNode;
  description?: React.ReactNode;
  interactionElement?: React.ReactNode;
  background?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // Injected by parent
  cardIndex?: number;
  totalCards?: number;
  isActive?: boolean;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  stepCounter,
  categoryLabel,
  headline,
  supportingText,
  description,
  interactionElement,
  background,
  className = '',
  style = {},
  cardIndex,
  totalCards,
  isActive = false
}) => {
  return (
    <div 
      className={`scroll-stack-item absolute inset-0 w-full h-full flex flex-col justify-between p-8 md:p-16 overflow-hidden select-none ${className}`}
      style={style}
    >
      {/* Background Layer (Solid, Gradient, Image, or Video) */}
      {background && (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
          {background}
        </div>
      )}
      
      {/* Ambient glass overlay for readability if background is bright */}
      <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] z-1 pointer-events-none" />

      {/* Content Layer (Flex column occupying full screen) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between flex-grow">
        
        {/* Top Row: Step and Category */}
        <div className="flex justify-between items-center text-xs font-mono font-bold tracking-widest text-white-pure/60">
          <span>{stepCounter || (cardIndex !== undefined ? `0${cardIndex + 1} // CAPABILITY` : '')}</span>
          <span>{categoryLabel || 'TENSPICK MAAS'}</span>
        </div>

        {/* Center Content: Headline, Supporting and Description */}
        <div className="flex flex-col justify-center items-center text-center flex-grow max-w-5xl mx-auto px-4 gap-4 sm:gap-6">
          {headline && (
            <h2 className="text-4xl sm:text-6xl md:text-8xl xl:text-[110px] font-sans font-black tracking-tight leading-none text-white-pure uppercase break-words max-w-full drop-shadow-md">
              {headline}
            </h2>
          )}
          {supportingText && (
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-accent-pure max-w-3xl drop-shadow-sm leading-tight">
              {supportingText}
            </h3>
          )}
          {description && (
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-200-pure max-w-[700px] font-medium drop-shadow-xs">
              {description}
            </p>
          )}
        </div>

        {/* Bottom Row: Interaction Action and Slide Progress Number */}
        <div className="flex justify-between items-end text-xs font-mono font-bold tracking-widest text-white-pure/60 mt-4">
          <div>
            {interactionElement || <span className="text-accent-pure font-black font-sans uppercase">MaaS Presentation</span>}
          </div>
          {(cardIndex !== undefined && totalCards !== undefined) && (
            <div className="flex items-center gap-2">
              <span className="text-accent-pure font-black">0{cardIndex + 1}</span>
              <span className="opacity-30">/</span>
              <span className="opacity-50">0{totalCards}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({ 
  children, 
  className = ''
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  useEffect(() => {
    if (!wrapperRef.current || !stickyRef.current || !cardsContainerRef.current) return;

    const cards = Array.from(cardsContainerRef.current.children) as HTMLElement[];
    if (cards.length === 0) return;

    // GPU Acceleration and initial states
    cards.forEach((card, idx) => {
      if (idx === 0) {
        gsap.set(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          pointerEvents: "auto"
        });
      } else {
        gsap.set(card, {
          opacity: 0,
          scale: 1.05,
          y: 100,
          filter: "blur(10px)",
          pointerEvents: "none"
        });
      }
    });

    const ctx = gsap.context(() => {
      const duration = 1.0;
      const gap = 0.6; // resting state for user reading

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          pin: stickyRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const segment = 1 / totalCards;
            const currentIdx = Math.min(
              Math.floor(progress / segment),
              totalCards - 1
            );
            setActiveIndex(currentIdx);
          }
        }
      });

      // Build transition sequence
      // Exit: opacity: 1->0, scale: 1->0.95, y: 0->-100px, blur: 0->10px
      // Entry: opacity: 0->1, scale: 1.05->1, y: 100px->0, blur: 10px->0
      for (let i = 0; i < cards.length - 1; i++) {
        const outgoing = cards[i];
        const incoming = cards[i + 1];
        const startTime = i * (duration + gap) + gap;

        tl.to(outgoing, {
          opacity: 0,
          scale: 0.95,
          y: -100,
          filter: "blur(10px)",
          pointerEvents: "none",
          duration: duration,
          ease: "none" // Linear scrub response
        }, startTime)
        .to(incoming, {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          pointerEvents: "auto",
          duration: duration,
          ease: "none"
        }, startTime);
      }
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, [totalCards]);

  return (
    <div 
      ref={wrapperRef} 
      className={`scroll-stack-wrapper relative w-full ${className}`}
      style={{ height: `${totalCards * 140}vh` }} // Comfortable luxury scroll height
    >
      <div 
        ref={stickyRef} 
        className="w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-950"
        style={{ backgroundColor: '#030712' }}
      >
        {/* Core Presentation Window */}
        <div 
          ref={cardsContainerRef} 
          className="relative w-full h-full overflow-hidden"
        >
          {childrenArray.map((child, idx) => {
            if (React.isValidElement(child)) {
              return (
                <div 
                  key={idx}
                  className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
                  style={{ 
                    zIndex: activeIndex === idx ? 20 : 10 - idx
                  }}
                >
                  {/* Clone and inject indicators */}
                  {React.cloneElement(child as React.ReactElement<any>, {
                    cardIndex: idx,
                    totalCards: totalCards,
                    isActive: activeIndex === idx
                  })}
                </div>
              );
            }
            return child;
          })}
        </div>

        {/* Scroll Progress line overlay (Minimal and elegant bottom bar) */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white-pure/10 z-30 select-none pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent-pure transition-all duration-300 ease-out"
            style={{ width: `${((activeIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
