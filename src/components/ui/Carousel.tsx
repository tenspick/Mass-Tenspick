import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface CarouselCardData {
  num: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  desc: string;
  bg: string;
  icon: React.ComponentType<any>;
  accent: string;
}

interface CarouselProps {
  cards: CarouselCardData[];
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ 
  cards, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Start auto-play timer
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(handleNext, autoPlayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex, autoPlayInterval]);

  const activeCard = cards[currentIndex];
  const IconComponent = activeCard.icon;

  // Touch handlers for mobile swiping
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="w-full py-16 px-6 sm:px-12 md:py-24 bg-[#FFFFFF]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Navigation Head / Header Controls */}
        <div className="flex justify-between items-end border-b border-slate-100 pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Beyond Automation
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Play/Pause indicator */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors"
              title={isPlaying ? "Pause auto-play" : "Resume auto-play"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all duration-300 active:scale-90"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all duration-300 active:scale-90"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full overflow-hidden rounded-3xl min-h-[500px] md:min-h-[420px] shadow-xl border border-slate-100"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ backgroundColor: activeCard.bg }}
        >
          {/* Ambient card background glow */}
          <div className="absolute inset-0 bg-grid-lines opacity-[0.03] pointer-events-none" />
          <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

          {/* Large Card Number background */}
          <div className="absolute bottom-4 right-8 text-[150px] md:text-[220px] font-black opacity-10 leading-none select-none font-mono text-white-pure">
            {activeCard.num}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16 text-white"
            >
              {/* Card Text Content */}
              <div className="flex flex-col gap-4 md:gap-6 max-w-2xl relative z-10">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/50 uppercase block">
                  {activeCard.num} // {activeCard.eyebrow}
                </span>
                
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white-pure leading-tight uppercase font-sans">
                  {activeCard.title}
                </h3>
                
                <h4 className={cn("text-base sm:text-lg font-bold leading-snug", activeCard.accent)}>
                  {activeCard.subtitle}
                </h4>
                
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-205 max-w-xl">
                  {activeCard.desc}
                </p>
              </div>

              {/* Card Icon Display */}
              <div className="shrink-0 flex items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 md:mr-10 relative z-10 self-center md:self-auto">
                <IconComponent className={cn("w-16 h-16 md:w-24 md:h-24", activeCard.accent)} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-2">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 'right' : 'left');
                setCurrentIndex(idx);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                idx === currentIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
