import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building, CheckCircle2, ArrowRight, Loader2, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;

    setLoading(true);

    // Simulate database write / trigger mail client link
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Fire confetti explosion
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00D4FF', '#6C63FF', '#00FFB2', '#FFFFFF']
      });

      // Construct mailto link as fallback to ensure they can send it directly
      const subject = encodeURIComponent(`TENSPICK MAAS Growth Request: ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Company: ${form.company}\n\n` +
        `Message:\n${form.message}`
      );
      
      // Let's create an anchor and trigger it in background
      const mailtoUrl = `mailto:tenspickofficial@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Copy and Contacts */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-12">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Ready To Scale Faster?</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              Let TENSPICK MAAS become your marketing department.
            </h2>
            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              Skip the expensive hiring cycles, tool fees, and slow communication. Let us design, write, code, and scale your brand under one flat subscription.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:contact@tenspick.com" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted-text uppercase block">Display Email</span>
                <span className="text-sm font-bold text-white">contact@tenspick.com</span>
              </div>
            </a>

            <a 
              href="tel:7330863893" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-white/5 text-accent group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted-text uppercase block">Direct Line / WhatsApp</span>
                <span className="text-sm font-bold text-white">+91 7330863893</span>
              </div>
            </a>

            <div 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 group"
            >
              <div className="p-3 rounded-xl bg-white/5 text-secondary group-hover:scale-105 transition-transform duration-300">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted-text uppercase block">Internal Admin Inbox</span>
                <span className="text-sm font-bold text-white">tenspickofficial@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 relative card-glow">
            {/* Form Background Lines */}
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none rounded-3xl" />

            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center justify-center text-center gap-6 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Growth Request Dispatched</h3>
                  <p className="text-xs sm:text-sm text-muted-text max-w-sm mx-auto">
                    Your details have been pre-filled into your mail client. Please click send to finalize submission to **tenspickofficial@gmail.com**. Our strategists will reach out shortly!
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="md"
                  onClick={() => setSuccess(false)}
                >
                  Send another inquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white uppercase tracking-wider">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder:text-muted-text/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white uppercase tracking-wider">Business Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder:text-muted-text/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white uppercase tracking-wider">Phone Number *</label>
                    <input 
                      type="text" 
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder:text-muted-text/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white uppercase tracking-wider">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder:text-muted-text/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>


                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-white uppercase tracking-wider">Tell us about your objectives</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="We want to rank #1 on SEO keywords for DTC, run Meta video assets, and build automated lead alerts..."
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder:text-muted-text/50 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button 
                  type="submit" 
                  disabled={loading}
                  variant="primary"
                  className="w-full justify-center gap-2 cursor-pointer mt-2"
                >
                  {loading ? (
                    <>
                      Qualifying Lead... <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Book Strategy Call <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
