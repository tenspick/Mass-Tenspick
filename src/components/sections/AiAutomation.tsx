import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StackedShuffle from '../ui/StackedShuffle';
import { 
  Bot, MessageSquare, Database, BarChart2 
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

  const cards = [
    {
      stepCounter: "01 // NEXT-GEN GROWTH",
      categoryLabel: "Marketing Powered By AI",
      headline: "Conversational Intelligence",
      supportingText: "AI Chatbots & Lead Qualification",
      description: "AI Chatbots: 24/7 web assistants qualifying users in natural language. Lead Qualification: Instantly score leads by budget, timeline, and purchase authority.",
      interactionElement: (
        <div className="flex items-center gap-2 text-white-pure/60">
          <Bot className="w-4 h-4 text-accent-pure" />
          <span>AI Automation</span>
        </div>
      ),
      bg: '#020617'
    },
    {
      stepCounter: "02 // NEXT-GEN GROWTH",
      categoryLabel: "Marketing Powered By AI",
      headline: "Messaging Automation",
      supportingText: "WhatsApp & Email Automation",
      description: "WhatsApp Automation: Deliver instant, context-aware automated WhatsApp follow-ups. Email Automation: Nurturing sequences written and personalized dynamically by AI.",
      interactionElement: (
        <div className="flex items-center gap-2 text-white-pure/60">
          <MessageSquare className="w-4 h-4 text-accent-pure" />
          <span>AI Automation</span>
        </div>
      ),
      bg: '#0B192C'
    },
    {
      stepCounter: "03 // NEXT-GEN GROWTH",
      categoryLabel: "Marketing Powered By AI",
      headline: "Pipeline Systems",
      supportingText: "CRM Automation & Sales Funnels",
      description: "CRM Automation: Map client notes, update deal cards, and assign owners without data entry. Sales Funnels: Dynamically customize webpage content based on visitor segments.",
      interactionElement: (
        <div className="flex items-center gap-2 text-white-pure/60">
          <Database className="w-4 h-4 text-accent-pure" />
          <span>AI Automation</span>
        </div>
      ),
      bg: '#1E3A8A'
    },
    {
      stepCounter: "04 // NEXT-GEN GROWTH",
      categoryLabel: "Marketing Powered By AI",
      headline: "Data & Decisions",
      supportingText: "Predictive Analytics & Smart Reporting",
      description: "Predictive Analytics: Estimate customer acquisition costs and scale budgets dynamically. Smart Reporting: Weekly digests generated and sent via Slack or Email automatically.",
      interactionElement: (
        <div className="flex items-center gap-2 text-white-pure/60">
          <BarChart2 className="w-4 h-4 text-accent-pure" />
          <span>AI Automation</span>
        </div>
      ),
      bg: '#111827'
    },
    {
      stepCounter: "05 // NEXT-GEN GROWTH",
      categoryLabel: "Simulation Engine",
      headline: "AI Pipeline Simulator",
      supportingText: "AUTOMATED_OUTFLOW_V2",
      description: (
        <div className="w-full max-w-lg mx-auto flex flex-col gap-2.5 py-2 text-left">
          {simulatorSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div 
                key={idx} 
                className={`p-2.5 rounded-xl border transition-all duration-350 ${
                  isActive 
                    ? 'bg-white/10 border-accent-pure/50 scale-[1.01]' 
                    : 'bg-white/5 border-white/5 opacity-55'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold text-white-pure">
                    Step {idx + 1}: {step.label}
                  </span>
                  {isActive && (
                    <span className="text-[8px] font-mono font-bold text-accent-pure bg-accent-pure/10 px-1.5 py-0.5 rounded-full">
                      ACTIVE RUN
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-300-pure mt-0.5">{step.detail}</p>
              </div>
            );
          })}
          <div className="flex justify-between items-center p-1.5 bg-white/5 rounded-xl border border-white/5 text-[9px] font-mono mt-1">
            <span className="text-slate-400-pure uppercase">Qualifying Speed</span>
            <span className="text-accent-pure font-bold">0.8 Secs Average</span>
          </div>
        </div>
      ),
      interactionElement: (
        <div className="flex items-center gap-2 text-white-pure/60">
          <span className="w-2 h-2 rounded-full bg-accent-pure animate-ping" />
          <span>Simulator Active</span>
        </div>
      ),
      bg: '#2E1065'
    }
  ];

  return (
    <StackedShuffle cards={cards} />
  );
};

export default AiAutomation;
