import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  right?: ReactNode;
};

export default function PageHeader({ eyebrow, title, subtitle, right }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-28 pb-14 border-b border-white/5">
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 flex flex-col gap-4"
        >
          <span className="text-xs font-bold tracking-widest text-accent uppercase">{eyebrow}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => {
                window.location.hash = '#/contact';
              }}
            >
              Book a strategy call <ArrowUpRight className="w-4 h-4" />
            </Button>
            <a
              href="#/"
              className="text-sm text-secondary hover:text-[#00D4FF] font-semibold transition-colors underline underline-offset-4"
            >
              Back to home
            </a>
          </div>
        </motion.div>

        {right ? <div className="lg:col-span-4">{right}</div> : null}
      </div>
    </section>
  );
}

