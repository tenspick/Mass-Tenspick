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
      className={`scroll-stack-item lg:absolute lg:inset-0 w-full h-full lg:h-full flex flex-col justify-between p-8 md:p-16 overflow-hidden select-none ${className}`}
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
      <div className="relative z-10 w-full h-full flex flex-col justify-between flex-grow gap-6">
        
        {/* Top Row: Step and Category */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white-pure/60">
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
        <div className="flex justify-between items-end text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white-pure/60 mt-auto">
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
  const wrapperMobileRef = useRef<HTMLDivElement>(null);
  const stickyMobileRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1024
  );

  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mobile scroll progress relative to the wrapper height
  useEffect(() => {
    if (!isMobile) return;
    
    const handleScroll = () => {
      if (!wrapperMobileRef.current) return;
      const el = wrapperMobileRef.current;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top; // pixels scrolled past the top of the element
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.max(0, Math.min(1, scrolled / scrollable)) : 0;
      setMobileScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

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

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const duration = 1.0;
        const gap = 0.6; // resting state for user reading

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: () => "+=" + (totalCards * window.innerHeight * 1.0),
            scrub: 0.2,
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
            ease: "none"
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

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [totalCards, isMobile]);

  // Compute transform and opacity offsets for each card in the mobile stack
  const getCardTransform = (idx: number) => {
    if (!isMobile) return {};
    
    // Card 0 is always fully visible at scroll start
    // Each card fades in over its own segment of scroll
    const segment = 1 / totalCards;

    // Card 0: visible immediately; subsequent cards slide up from below
    const fadeInStart = idx === 0 ? 0 : (idx - 0.8) * segment;
    const fadeInEnd   = idx === 0 ? 0 : idx * segment;
    
    let y = idx === 0 ? 0 : 300;
    let opacity = idx === 0 ? 1 : 0;
    let scale = idx === 0 ? 1 : 0.93;
    
    if (idx > 0) {
      if (mobileScrollProgress < fadeInStart) {
        y = 300; opacity = 0; scale = 0.93;
      } else if (mobileScrollProgress <= fadeInEnd) {
        const p = (mobileScrollProgress - fadeInStart) / Math.max(0.001, fadeInEnd - fadeInStart);
        y = 300 * (1 - p);
        opacity = p;
        scale = 0.93 + p * 0.07;
      } else {
        y = 0; opacity = 1; scale = 1;
      }
    }

    // Fade out and scale down card when a subsequent card stacks on top
    if (idx < totalCards - 1) {
      const pushStart = (idx + 0.5) * segment;
      const pushEnd   = (idx + 1.0) * segment;
      if (mobileScrollProgress > pushStart) {
        const p = Math.min(1, (mobileScrollProgress - pushStart) / Math.max(0.001, pushEnd - pushStart));
        scale = (idx === 0 ? 1 : scale) - p * 0.04;
        opacity = (idx === 0 ? 1 : opacity) - p * 0.5;
        y = (idx === 0 ? 0 : y) - p * 40;
      }
    }
    
    return {
      transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
      opacity,
      transition: 'transform 0.08s linear, opacity 0.08s linear'
    };
  };

  return (
    <>
      {/* Mobile Touch-Friendly Sticky Stack Layout */}
      <div 
        ref={wrapperMobileRef} 
        className={`block lg:hidden scroll-stack-wrapper relative w-full ${className}`}
        style={{ height: `${totalCards * 110}vh` }}
      >
        <div 
          ref={stickyMobileRef} 
          className="sticky top-[80px] w-full h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-slate-950"
          style={{ backgroundColor: '#030712' }}
        >
          <div className="relative w-full h-full overflow-hidden">
            {childrenArray.map((child, idx) => {
              if (React.isValidElement(child)) {
                const transformStyles = getCardTransform(idx);
                return (
                  <div 
                    key={idx}
                    className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden p-2 sm:p-6"
                    style={{ 
                      zIndex: 10 + idx,
                      ...transformStyles
                    }}
                  >
                    <div className="w-[94%] max-w-2xl mx-auto h-[90%] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/20">
                      {React.cloneElement(child as React.ReactElement<any>, {
                        cardIndex: idx,
                        totalCards: totalCards,
                        isActive: true
                      })}
                    </div>
                  </div>
                );
              }
              return child;
            })}
          </div>
        </div>
      </div>

      {/* Desktop GSAP Pinning Stack Layout */}
      <div 
        ref={wrapperRef} 
        className={`hidden lg:block scroll-stack-wrapper relative w-full ${className}`}
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
    </>
  );
};

export default ScrollStack;
