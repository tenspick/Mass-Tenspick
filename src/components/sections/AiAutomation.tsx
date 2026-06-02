import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import { 
  Bot, CheckSquare, MessageSquare, Mail, 
  Database, GitPullRequest, BarChart2, BellRing 
} from 'lucide-react';

export const AiAutomation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const simulatorSteps = [
    { label: 'Visitor lands', detail: 'Organic traffic via Google or Meta Ads' },
    { label: 'AI Chatbot Chatting', detail: 'Asks qualification questions instantly' },
    { label: 'Lead Qualified', detail: 'Budget and intent verified by LLM' },
    { label: 'WhatsApp Sent', detail: 'Calendar invite dispatched automatically' },
    { label: 'CRM Synced', detail: 'Opportunity created, Slack/Email alert sent' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % simulatorSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [simulatorSteps.length]);

  return (
    <section className="bg-[#FFFFFF] border-t border-slate-200">
      {/* Full-screen Intro Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 relative overflow-hidden bg-[#FFFFFF] py-16">
        {/* Animated ambient background nodes */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-widest text-primary uppercase font-mono"
          >
            Next-Gen Growth
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none"
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            At Tenspick, we build intelligent, automated systems that run in the background to grow your business. Our custom-engineered pipeline architectures connect ad networks, landing pages, messaging APIs, and CRM logs into a single, high-converting customer acquisition engine. We build 24/7 conversational AI chatbots that qualify cold traffic in natural language, WhatsApp and email follow-up sequences that trigger instantly, and CRM deal-stage automations that eliminate manual data entry. Additionally, we integrate predictive analytics dashboards so you can estimate acquisition costs and scale budgets dynamically. By automating repetitive tasks, we help your business save hundreds of hours and turn traffic into booked strategy calls on autopilot.
          </motion.p>

          {/* Animated custom visual boxes */}
          <div className="flex justify-center gap-3 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 + i * 0.1 }}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : i === 2 ? 'bg-accent' : 'bg-green-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <ScrollStack>
      {/* Slide 1: AI Chatbots & Lead Qualification */}
      <ScrollStackItem
        stepCounter="01 // NEXT-GEN GROWTH"
        categoryLabel="Marketing Powered By AI"
        headline="Conversational Intelligence"
        supportingText="AI Chatbots & Lead Qualification"
        description="AI Chatbots: 24/7 web assistants qualifying users in natural language. Lead Qualification: Instantly score leads by budget, timeline, and purchase authority."
        interactionElement={
          <div className="flex items-center gap-2 text-white-pure/60">
            <Bot className="w-4 h-4 text-accent-pure" />
            <span>AI Automation</span>
          </div>
        }
        background={
          <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#020617' }}>
            <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-lines opacity-5" />
          </div>
        }
      />

      {/* Slide 2: WhatsApp & Email Automation */}
      <ScrollStackItem
        stepCounter="02 // NEXT-GEN GROWTH"
        categoryLabel="Marketing Powered By AI"
        headline="Messaging Automation"
        supportingText="WhatsApp & Email Automation"
        description="WhatsApp Automation: Deliver instant, context-aware automated WhatsApp follow-ups. Email Automation: Nurturing sequences written and personalized dynamically by AI."
        interactionElement={
          <div className="flex items-center gap-2 text-white-pure/60">
            <MessageSquare className="w-4 h-4 text-accent-pure" />
            <span>AI Automation</span>
          </div>
        }
        background={
          <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#0B192C' }}>
            <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-lines opacity-5" />
          </div>
        }
      />

      {/* Slide 3: CRM Automation & Sales Funnels */}
      <ScrollStackItem
        stepCounter="03 // NEXT-GEN GROWTH"
        categoryLabel="Marketing Powered By AI"
        headline="Pipeline Systems"
        supportingText="CRM Automation & Sales Funnels"
        description="CRM Automation: Map client notes, update deal cards, and assign owners without data entry. Sales Funnels: Dynamically customize webpage content based on visitor segments."
        interactionElement={
          <div className="flex items-center gap-2 text-white-pure/60">
            <Database className="w-4 h-4 text-accent-pure" />
            <span>AI Automation</span>
          </div>
        }
        background={
          <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#1E3A8A' }}>
            <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-lines opacity-5" />
          </div>
        }
      />

      {/* Slide 4: Predictive Analytics & Smart Reporting */}
      <ScrollStackItem
        stepCounter="04 // NEXT-GEN GROWTH"
        categoryLabel="Marketing Powered By AI"
        headline="Data & Decisions"
        supportingText="Predictive Analytics & Smart Reporting"
        description="Predictive Analytics: Estimate customer acquisition costs and scale budgets dynamically. Smart Reporting: Weekly digests generated and sent via Slack or Email automatically."
        interactionElement={
          <div className="flex items-center gap-2 text-white-pure/60">
            <BarChart2 className="w-4 h-4 text-accent-pure" />
            <span>AI Automation</span>
          </div>
        }
        background={
          <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#111827' }}>
            <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-lines opacity-5" />
          </div>
        }
      />

      {/* Slide 5: The Interactive simulator */}
      <ScrollStackItem
        stepCounter="05 // NEXT-GEN GROWTH"
        categoryLabel="Simulation Engine"
        headline="AI Pipeline Simulator"
        supportingText="AUTOMATED_OUTFLOW_V2"
        description={
          <div className="w-full max-w-lg mx-auto flex flex-col gap-3 py-4 text-left">
            {simulatorSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/10 border-accent-pure/50 scale-[1.02]' 
                      : 'bg-white/5 border-white/5 opacity-60'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-white-pure">
                      Step {idx + 1}: {step.label}
                    </span>
                    {isActive && (
                      <span className="text-[9px] font-mono font-bold text-accent-pure bg-accent-pure/10 px-2 py-0.5 rounded-full">
                        ACTIVE RUN
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-300-pure mt-1">{step.detail}</p>
                </div>
              );
            })}
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-xl border border-white/5 text-[10px] font-mono mt-2">
              <span className="text-slate-400-pure uppercase">Qualifying Speed</span>
              <span className="text-accent-pure font-bold">0.8 Seconds Average</span>
            </div>
          </div>
        }
        interactionElement={
          <div className="flex items-center gap-2 text-white-pure/60">
            <span className="w-2 h-2 rounded-full bg-accent-pure animate-ping" />
            <span>Interactive Simulator Active</span>
          </div>
        }
        background={
          <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#2E1065' }}>
            <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-lines opacity-5" />
          </div>
        }
      />
      </ScrollStack>
    </section>
  );
};

export default AiAutomation;
