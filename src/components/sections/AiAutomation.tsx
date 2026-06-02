import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, CheckSquare, MessageSquare, Mail, 
  Database, GitPullRequest, BarChart2, BellRing, ArrowRight 
} from 'lucide-react';

export const AiAutomation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'Visitor lands', detail: 'Organic traffic via Google or Meta Ads', color: 'border-primary/40 text-primary' },
    { label: 'AI Chatbot Chatting', detail: 'Asks qualification questions instantly', color: 'border-secondary/40 text-secondary' },
    { label: 'Lead Qualified', detail: 'Budget and intent verified by LLM', color: 'border-accent/40 text-accent' },
    { label: 'WhatsApp Sent', detail: 'Calendar invite dispatched automatically', color: 'border-primary/40 text-primary' },
    { label: 'CRM Synced', detail: 'Opportunity created, Slack/Email alert sent', color: 'border-secondary/40 text-secondary' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const capabilities = [
    { title: 'AI Chatbots', icon: Bot, desc: '24/7 web assistants qualifying users in natural language.' },
    { title: 'Lead Qualification', icon: CheckSquare, desc: 'Instantly score leads by budget, timeline, and purchase authority.' },
    { title: 'WhatsApp Automation', icon: MessageSquare, desc: 'Deliver instant, context-aware automated WhatsApp follow-ups.' },
    { title: 'Email Automation', icon: Mail, desc: 'Nurturing sequences written and personalized dynamically by AI.' },
    { title: 'CRM Automation', icon: Database, desc: 'Map client notes, update deal cards, and assign owners without data entry.' },
    { title: 'Sales Funnels', icon: GitPullRequest, desc: 'Dynamically customize webpage content based on visitor segments.' },
    { title: 'Predictive Analytics', icon: BarChart2, desc: 'Estimate customer acquisition costs and scale budgets dynamically.' },
    { title: 'Smart Reporting', icon: BellRing, desc: 'Weekly digests generated and sent via Slack or Email automatically.' },
  ];

  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: text and features grid */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Next-Gen Growth</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Marketing Powered By AI
            </h2>
            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              We build, deploy, and maintain custom AI agents and workflow automations to save your team hundreds of hours and turn cold traffic into booked strategy calls on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div 
                key={cap.title}
                className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors flex gap-3.5"
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-accent shrink-0 h-fit">
                  <cap.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">{cap.title}</h4>
                  <p className="text-[10px] text-muted-text leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: animated workflow visualizer */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white/[0.01] border border-white/5 relative overflow-hidden card-glow min-h-[380px] flex flex-col justify-between">
          <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
          
          <div className="flex items-center justify-between pb-4 border-b border-white/5 relative z-10">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              AI Automation pipeline simulator
            </span>
            <span className="text-[9px] text-muted-text font-mono">AUTOMATED_OUTFLOW_V2</span>
          </div>

          {/* Simulated Node Workflow */}
          <div className="flex flex-col gap-4 py-8 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div key={index} className="flex items-center gap-4 relative">
                  {/* Step Card */}
                  <motion.div
                    animate={
                      isActive 
                        ? { scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(108, 99, 255, 0.4)' }
                        : { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.005)', borderColor: 'rgba(255, 255, 255, 0.03)' }
                    }
                    transition={{ duration: 0.3 }}
                    className={`flex-1 p-3.5 rounded-2xl border flex items-center justify-between`}
                  >
                    <div>
                      <span className={`text-[10px] font-bold block ${isActive ? 'text-primary' : 'text-muted-text'}`}>
                        Step {index + 1}: {step.label}
                      </span>
                      <span className="text-[9px] text-muted-text block mt-0.5">{step.detail}</span>
                    </div>

                    {isActive && (
                      <span className="text-[9px] font-mono font-bold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                        ACTIVE RUN
                      </span>
                    )}
                  </motion.div>

                  {/* Connective Line indicator (vertical side line) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-4 top-12 h-6 w-0.5 bg-white/5">
                      {isActive && (
                        <motion.div 
                          initial={{ y: -24 }}
                          animate={{ y: 24 }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                          className="h-2 w-full bg-accent shadow-glow" 
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Trigger Alert bar */}
          <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between text-xs relative z-10">
            <span className="text-[10px] text-muted-text uppercase">Qualifying Speed</span>
            <span className="text-[10px] font-bold text-accent">0.8 Seconds Average</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AiAutomation;
