import React from 'react';
import { ArrowUp, Instagram, Twitter, Linkedin, Facebook, Star, ShieldCheck, MapPin, Globe } from 'lucide-react';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] border-t border-slate-800/80 relative overflow-hidden" style={{ backgroundColor: '#0B192C' }}>
      
      {/* Sleek top glowing gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background radial accent glow */}
      <div className="absolute bottom-0 right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-12 relative z-10">
        
        {/* Main Grid: Responsive layout for mobile/tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand & Description (full-width on mobile, span-5 on desktop) */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-5 relative">
            {/* Subtle glow under logo */}
            <div className="absolute top-[-20px] left-[-20px] w-28 h-28 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            
            <a href="https://www.tenspick.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 group w-fit relative z-10">
              <div className="relative p-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 group-hover:border-primary/40 group-hover:bg-slate-900/90 transition-all duration-300 shadow-inner">
                <img 
                  src="/tenspick maas logo.png" 
                  alt="Logo" 
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-sans font-black tracking-widest text-lg text-white-pure select-none bg-gradient-to-r from-white-pure via-white-pure to-slate-400 bg-clip-text text-transparent group-hover:from-white-pure group-hover:to-primary transition-all duration-500">
                TENSPICK MAAS
              </span>
            </a>
            
            <p className="text-xs text-slate-300-pure leading-relaxed max-w-md relative z-10">
              Your complete, on-demand marketing department under one simple monthly subscription. We assemble strategists, designers, copywriters, developers, and media buyers to scale your business while you focus on building.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2 relative z-10">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/tenspick/?utm_source=website&utm_medium=footer&utm_campaign=social_links', label: 'LinkedIn', color: 'hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-[#0077B5]/10' },
                { icon: Instagram, href: 'https://www.instagram.com/tenspick_/?utm_source=website&utm_medium=footer&utm_campaign=social_links', label: 'Instagram', color: 'hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10' },
                { icon: Twitter, href: 'https://x.com/_tenspick_?t=1_VSDleR_7jLBI5ChDowJg&s=09&utm_source=website&utm_medium=footer&utm_campaign=social_links', label: 'Twitter', color: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10' },
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578558935956&utm_source=website&utm_medium=footer&utm_campaign=social_links#', label: 'Facebook', color: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10' },
                { icon: Star, href: 'https://www.google.com/search?newwindow=1&sca_esv=3d3edac27adaa913&sxsrf=AE3TifNdm2QUueYuMWKdmIgm7VV8dR1bog:1762945765167&kgmid=/g/11md_7khj7&q=Tenspick&shndl=30&shem=lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=8948e0cf71a7e46d&utm_source=lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/', label: 'Google Reviews', color: 'hover:text-[#F4B400] hover:border-[#F4B400]/40 hover:bg-[#F4B400]/10' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`w-9 h-9 rounded-xl bg-slate-900/40 border border-slate-800/80 text-slate-400-pure transition-all duration-300 flex items-center justify-center cursor-pointer hover:-translate-y-1 shadow-md hover:shadow-lg ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Directory Column 1: Marketing Services */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-200-pure relative w-fit after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-1/2 after:h-[1px] after:bg-primary">Services</h4>
            <div className="flex flex-col gap-3 mt-3">
              {[
                { name: 'Search Engine Optimization', href: '#/services' },
                { name: 'Google & Meta Advertising', href: '#/services' },
                { name: 'Website Design & Dev', href: '#/services' },
                { name: 'AI Automations & Chatbots', href: '#/services' },
                { name: 'Lead Gen & CRM Pipelines', href: '#/services' },
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs text-slate-400-pure hover:text-white-pure hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="group-hover:underline underline-offset-4 decoration-primary/40">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Directory Column 2: Sitemap */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-200-pure relative w-fit after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-1/2 after:h-[1px] after:bg-secondary">Sitemap</h4>
            <div className="flex flex-col gap-3 mt-3">
              {[
                { name: 'Why MaaS Model', href: '#/why-maas' },
                { name: 'Timeline Process', href: '#/how-it-works' },
                { name: 'Industry Sectors', href: '#/industries' },
                { name: 'Client Proof Metrics', href: '#/case-studies' },
                { name: 'Frequently Asked FAQ', href: '#/faq' },
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs text-slate-400-pure hover:text-white-pure hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-[1px] bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="group-hover:underline underline-offset-4 decoration-secondary/40">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Directory Column 3: Get in Touch */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-200-pure relative w-fit after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-1/2 after:h-[1px] after:bg-accent-pure">Get in Touch</h4>
            <div className="flex flex-col gap-3 mt-3 text-xs text-slate-400-pure">
              <a href="mailto:contact@tenspick.com" className="hover:text-white-pure hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-1 group">
                <span className="w-1.5 h-[1px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <span className="group-hover:underline underline-offset-4 decoration-accent-pure/40">contact@tenspick.com</span>
              </a>
              <a href="tel:7330863893" className="hover:text-white-pure hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-1 group">
                <span className="w-1.5 h-[1px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <span className="group-hover:underline underline-offset-4 decoration-accent-pure/40">+91 7330863893</span>
              </a>
              <a 
                href="#/contact" 
                className="text-accent-pure font-bold hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-1 group mt-1"
              >
                <span className="w-1.5 h-[1px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <span className="group-hover:underline underline-offset-4 decoration-accent-pure/60">Book Strategy Call</span>
              </a>
            </div>
          </div>

        </div>

        {/* Global Hubs Block: responsive grid of premium glassmorphic cards */}
        <div className="py-10 border-b border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300-pure">
          <div className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md transition-all duration-300 hover:bg-slate-900/50 hover:border-slate-700/60 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-white-pure block mb-1 font-mono text-[10px] tracking-widest uppercase">INDIA (HQ)</span>
              <span className="text-slate-400-pure group-hover:text-slate-200-pure transition-colors">Pullampeta, Andhra Pradesh</span>
            </div>
          </div>
          
          <div className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md transition-all duration-300 hover:bg-slate-900/50 hover:border-slate-700/60 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-secondary/5">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <MapPin className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <span className="font-bold text-white-pure block mb-1 font-mono text-[10px] tracking-widest uppercase">KUWAIT</span>
              <span className="text-slate-400-pure group-hover:text-slate-200-pure transition-colors">In collaboration with Spark Groups</span>
            </div>
          </div>

          <div className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md transition-all duration-300 hover:bg-slate-900/50 hover:border-slate-700/60 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#EAB308]/5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <MapPin className="w-5 h-5 text-[#EAB308]" />
            </div>
            <div>
              <span className="font-bold text-white-pure block mb-1 font-mono text-[10px] tracking-widest uppercase">GLOBAL EXPANSION</span>
              <span className="text-slate-400-pure group-hover:text-slate-200-pure transition-colors">Expanding to Germany, Australia</span>
            </div>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white-pure">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-accent-pure shrink-0" />
              <span>&copy; {new Date().getFullYear()}</span>
              <a 
                href="https://www.tenspick.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white-pure hover:text-[#00D4FF] font-semibold transition-colors"
              >
                Tenspick
              </a>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <a href="https://maas.tenspick.com" target="_blank" rel="noreferrer" className="text-white-pure hover:text-[#00D4FF] transition-colors">MaaS TENSPICK</a>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <a href="https://www.csedge.co" target="_blank" rel="noreferrer" className="text-white-pure hover:text-[#00D4FF] transition-colors font-mono text-[10px] tracking-wider">Associated with CSEdge</a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#/privacy" className="text-white-pure hover:text-white-pure transition-colors">Privacy Policy</a>
            <span className="text-slate-700">&bull;</span>
            <a href="#/terms" className="text-white-pure hover:text-white-pure transition-colors">Terms of Service</a>
            <span className="text-slate-700">&bull;</span>
            <button 
              onClick={handleScrollToTop}
              className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-white-pure hover:bg-primary/20 hover:text-white-pure hover:border-primary/40 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95 hover:shadow-primary/5"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 animate-bounce-slow" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

