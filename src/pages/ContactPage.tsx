import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, CheckCircle, ShieldAlert, Sparkles,
  Building, Calendar, Send, CheckCircle2, ChevronRight,
  TrendingUp, Award, Clock, Star, Users, Globe, Lock, ArrowUpRight
} from 'lucide-react';
import PageHeader from './PageHeader';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Select a service',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const services = [
    'Select a service',
    'SEO (Search Engine Optimization)',
    'Google Ads',
    'Meta Ads',
    'Social Media Management',
    'Website Development',
    'Landing Pages',
    'Content Marketing',
    'Email Marketing',
    'AI Automation',
    'CRM Setup',
    'Lead Generation',
    'Branding',
    'UI/UX Design',
    'Video Editing',
    'Marketing Strategy',
    'Analytics & Reporting'
  ];

  const brands = [
    'AGK Groups', 'Bharath Tours & Travels', 'Dequalita Projects', 
    'GH Enterprise', 'KVV Designs', 'Laundryours', 
    'Pinnacle Casa Projects', 'Queens Women\'s Hostel', 
    'Sky Nights Rooftop Restaurant', 'Spark Dance Academy', 
    'Superior Furniture', 'The City Offers'
  ];

  const stats = [
    { value: '4000+', label: 'Coding Hours', icon: Clock, color: 'text-primary' },
    { value: '5 Star', label: 'on Google', icon: Star, color: 'text-amber-500' },
    { value: '50+', label: 'Projects', icon: Sparkles, color: 'text-secondary' },
    { value: '30+', label: 'Happy Clients', icon: Users, color: 'text-primary' },
    { value: '5', label: 'Countries Served', icon: Globe, color: 'text-secondary' },
    { value: '4k+', label: 'Social Media Followers', icon: TrendingUp, color: 'text-green-500' }
  ];

  const whyChoose = [
    { title: 'Expert team', desc: 'with 95+ completed projects' },
    { title: 'End-to-end solutions', desc: 'from concept to launch' },
    { title: '24/7 support', desc: 'and maintenance' },
    { title: 'Competitive pricing', desc: 'with transparent process' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover & Define',
      desc: 'We start by listening. We dive deep into your business goals, target audience, and challenges to map out a clear strategy for success.'
    },
    {
      step: '02',
      title: 'Design & Build',
      desc: 'Our team gets to work, combining creative design with clean code. We build your solution with transparency and constant feedback.'
    },
    {
      step: '03',
      title: 'Launch & Grow',
      desc: 'This isn\'t goodbye. We deploy your project and provide the marketing, automation, and support you need to scale and win.'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation checkers for Checkmark ✓ display
  const isFirstNameValid = form.firstName.trim().length > 0;
  const isLastNameValid = form.lastName.trim().length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const isPhoneValid = form.phone.trim().length === 0 || form.phone.trim().length >= 8;
  const isMessageValid = form.message.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isMessageValid) {
      alert('Please fill out all required fields with valid details.');
      return;
    }

    setLoading(true);

    const mailtoEmail = 'tenspickofficial@gmail.com';
    const subject = `TENSPICK Inquiry from ${form.firstName} ${form.lastName}`;
    const body = `First Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not Provided'}\nService: ${form.service}\n\nMessage:\n${form.message}`;

    const mailtoUrl = `mailto:${mailtoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setLoading(false);
    setSuccess(true);

    // Launch Confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#00D4FF', '#6C63FF', '#FFFFFF']
    });
  };

  const handleConsultationClick = () => {
    const mailtoEmail = 'tenspickofficial@gmail.com';
    const subject = 'Free Growth Consultation Request';
    const body = 'Hi Tenspick Team,\n\nI would like to book a free, no-obligation consultation to learn how Tenspick can fuel our growth.\n\nBest regards,';
    window.location.href = `mailto:${mailtoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const marqueeStyles = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-loop {
      display: flex;
      width: max-content;
      animation: marquee 35s linear infinite;
    }
    select, select option {
      color: #0F172A !important;
      background-color: #FFFFFF !important;
    }
  `;

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen relative font-sans">
      <style>{marqueeStyles}</style>

      {/* Hero Page Header */}
      <PageHeader
        eyebrow="Get In Touch"
        title="Ready to bring your ideas to life? We'd love to hear from you."
        subtitle="Whether you have a project in mind or just want to chat about possibilities, our team is here to help."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        
        {/* Contact Info & Illustration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* Quick Contact Details (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">Communication Channels</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Connect With Us Directly</h2>
              <p className="text-slate-600 text-sm max-w-xl leading-relaxed">
                Choose the best way to contact our principal strategists. We monitor all lines continuously to ensure instant response.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-4">
              {/* Email Us */}
              <a 
                href="mailto:contact@tenspick.com" 
                className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block font-mono">Email Us</span>
                  <span className="text-sm font-semibold text-slate-800 block mt-1 break-all">contact@tenspick.com</span>
                </div>
              </a>

              {/* Call Us */}
              <a 
                href="tel:7330863893" 
                className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-slate-200 hover:border-secondary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block font-mono">Call Us</span>
                  <span className="text-sm font-semibold text-slate-800 block mt-1">+91 7330863893</span>
                </div>
              </a>

              {/* Visit Us */}
              <div 
                className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block font-mono">Visit Us</span>
                  <span className="text-sm font-semibold text-slate-800 block mt-1">Pullampeta, AP, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Illustration Card (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl bg-white border border-slate-200/80 p-5 relative overflow-hidden flex flex-col justify-between shadow-xs group hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
              
              <div className="relative z-10 w-full h-[200px] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center mb-4">
                <img 
                  src="/growth_dashboard.png" 
                  alt="Growth Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-[10px] font-mono text-white bg-slate-900/70 px-2 py-0.5 rounded-full tracking-wider font-bold">
                  LIVE CUSTOMER ACQUISITION
                </span>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  Compounding Growth Analytics
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tenspick unifies ad platforms, analytics data, and automations into a single, high-performing lead generation pipeline. See client traction in real-time.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Trusted By Growing Brands Marquee */}
        <div className="border-t border-b border-slate-200/60 py-10 mb-24 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono">Trusted by growing brands</span>
          </div>

          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-loop flex gap-12 text-slate-500 font-semibold tracking-wide text-sm whitespace-nowrap logo-mask">
              {brands.concat(brands).map((brand, idx) => (
                <div key={idx} className="flex items-center gap-2 hover:text-slate-800 transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form and Why Choose Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left: Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none rounded-3xl" />
              
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Contact Us</h3>
                <h4 className="text-slate-500 text-sm mt-1 font-semibold">Let's Start a Conversation</h4>
                <p className="text-xs text-slate-450 mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 flex flex-col items-center justify-center text-center gap-6 relative z-10 text-slate-900"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Pre-filled Successfully</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Your details have been passed to your email client. Please click **Send** to finalize submission.
                    </p>
                  </div>

                  {/* Backup copy box */}
                  <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-3">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block text-left">
                      Backup Details (Send to tenspickofficial@gmail.com):
                    </span>
                    <textarea
                      readOnly
                      value={`To: tenspickofficial@gmail.com\nSubject: TENSPICK Inquiry from ${form.firstName} ${form.lastName}\n\nFirst Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not Provided'}\nService: ${form.service}\n\nMessage:\n${form.message}`}
                      className="w-full h-32 bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-650 font-mono focus:outline-none resize-none"
                    />
                    <button 
                      type="button"
                      onClick={() => {
                        const text = `First Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not Provided'}\nService: ${form.service}\n\nMessage:\n${form.message}`;
                        navigator.clipboard.writeText(text);
                        alert('Details copied to clipboard!');
                      }}
                      className="w-full text-xs py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Copy Details to Clipboard
                    </button>
                  </div>

                  <button 
                    type="button"
                    onClick={() => {
                      setSuccess(false);
                      setForm({ firstName: '', lastName: '', email: '', phone: '', service: 'Select a service', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 hover:border-slate-350 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  
                  {/* First and Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider font-mono">First Name</label>
                        <span className={`text-xs font-bold transition-colors ${isFirstNameValid ? 'text-green-500 font-bold' : 'text-slate-305'}`}>✓</span>
                      </div>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-primary/50 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider font-mono">Last Name</label>
                        <span className={`text-xs font-bold transition-colors ${isLastNameValid ? 'text-green-500 font-bold' : 'text-slate-305'}`}>✓</span>
                      </div>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider font-mono">Email</label>
                        <span className={`text-xs font-bold transition-colors ${isEmailValid ? 'text-green-500 font-bold' : 'text-slate-305'}`}>✓</span>
                      </div>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-primary/50 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider font-mono">Phone (Optional)</label>
                        <span className={`text-xs font-bold transition-colors ${form.phone.trim().length > 0 && isPhoneValid ? 'text-green-500 font-bold' : 'text-slate-305'}`}>✓</span>
                      </div>
                      <input 
                        type="text" 
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 7330863893"
                        className="px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* ServiceDropdown */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider font-mono">Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-primary/50 transition-all"
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc} className="bg-white text-slate-900">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider font-mono">Message</label>
                      <span className={`text-xs font-bold transition-colors ${isMessageValid ? 'text-green-500 font-bold' : 'text-slate-305'}`}>✓</span>
                    </div>
                    <textarea 
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  {/* Bottom details */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                      <Lock className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Your info is 100% secure 🔒</span>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 bg-primary text-white-pure rounded-xl hover:brightness-110 active:scale-[0.98] font-bold text-xs tracking-wide transition-all shadow-md shadow-primary/20 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                    >
                      {loading ? 'Processing...' : 'Send Message'}
                      <Send className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

          {/* Right: Why Choose Tenspick & Locations (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            {/* Why Choose Block */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">Why Tenspick?</span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-sans">Why Choose Tenspick?</h3>
              
              <div className="flex flex-col gap-4">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations Block */}
            <div className="flex flex-col gap-6 border-t border-slate-200/60 pt-10">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase font-mono">Global Hubs</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Locations</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* India HQ */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex gap-2 items-center text-xs font-bold text-slate-800 mb-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    India (HQ)
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Pullampeta, Andhra Pradesh
                  </p>
                </div>

                {/* Kuwait */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex gap-2 items-center text-xs font-bold text-slate-800 mb-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Kuwait
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    In collaboration with Spark Groups
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Statistics Rows */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-24 border-t border-b border-slate-200/60 py-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center ${stat.color} mb-3`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mt-1.5 font-mono">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Timeline Process Block */}
        <div className="mb-24 flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">Workflow Blueprint</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Our Process</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              A Simple Path to Brilliant Results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-sm hover:border-primary/20 transition-all flex flex-col gap-6 relative overflow-hidden"
              >
                <div className="text-6xl font-black text-slate-100 font-mono absolute right-8 top-8 select-none">
                  {step.step}
                </div>
                
                <span className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-sm font-bold text-primary">
                  {step.step}
                </span>

                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA consultation card */}
        <div className="rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col gap-3 relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to build something amazing?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Let's talk about your next project. Get a free, no-obligation consultation with our experts to find out how Tenspick can fuel your growth.
            </p>
          </div>

          <button 
            onClick={handleConsultationClick}
            className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:brightness-110 active:scale-[0.97] transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-primary/25 shrink-0"
            style={{ color: '#ffffff' }}
          >
            Book Your Free Consultation
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
