import { ArrowUp, Instagram, Twitter, Linkedin, Facebook, Star, ShieldCheck, MapPin } from 'lucide-react';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] text-[#0F172A] pt-24 pb-12 border-t border-slate-200 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand & Description (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <img 
                src="/tenspick maas logo.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-sans font-black tracking-tight text-lg text-[#1E3A8A] select-none">
                TENSPICK MAAS
              </span>
            </a>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              Your complete, on-demand marketing department under one simple monthly subscription. We assemble strategists, designers, copywriters, developers, and media buyers to scale your business while you focus on building.
            </p>

            {/* Social Icons with elegant circular borders */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/tenspick/?utm_source=website&utm_medium=footer&utm_campaign=social_links', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/tenspick_/?utm_source=website&utm_medium=footer&utm_campaign=social_links', label: 'Instagram' },
                { icon: Twitter, href: 'https://x.com/_tenspick_?t=1_VSDleR_7jLBI5ChDowJg&s=09&utm_source=website&utm_medium=footer&utm_campaign=social_links', label: 'Twitter' },
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578558935956&utm_source=website&utm_medium=footer&utm_campaign=social_links#', label: 'Facebook' },
                { icon: Star, href: 'https://www.google.com/search?newwindow=1&sca_esv=3d3edac27adaa913&sxsrf=AE3TifNdm2QUueYuMWKdmIgm7VV8dR1bog:1762945765167&kgmid=/g/11md_7khj7&q=Tenspick&shndl=30&shem=lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=8948e0cf71a7e46d&utm_source=lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/', label: 'Google Reviews' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all flex items-center justify-center cursor-pointer"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Directory Link Column 1 (3 Columns) - Marketing Capabilities */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Marketing Services</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Search Engine Optimization', href: '#/services' },
                { name: 'Google & Meta Advertising', href: '#/services' },
                { name: 'Website Design & Dev', href: '#/services' },
                { name: 'AI Automations & Chatbots', href: '#/services' },
                { name: 'Lead Gen & CRM Pipelines', href: '#/services' },
                { name: 'Social Media Management', href: '#/services' },
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs text-slate-500 hover:text-primary hover:translate-x-0.5 transition-all w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Directory Link Column 2 (2 Columns) - Sitemap */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Sitemap</h4>
            <div className="flex flex-col gap-2.5">
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
                  className="text-xs text-slate-500 hover:text-primary hover:translate-x-0.5 transition-all w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Directory Link Column 3 (2 Columns) - Contacts HQ */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Get in Touch</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-500">
              <a href="mailto:contact@tenspick.com" className="hover:text-primary transition-colors">contact@tenspick.com</a>
              <a href="tel:7330863893" className="hover:text-primary transition-colors">+91 7330863893</a>
              <a href="#/contact" className="text-primary font-bold hover:underline">Book Strategy Call</a>
            </div>
          </div>

        </div>

        {/* Global Hubs Block (Row below Main Grid) */}
        <div className="py-8 border-b border-slate-200/60 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-slate-500">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800 block mb-0.5">India (HQ)</span>
              <span>Pullampeta, Andhra Pradesh</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800 block mb-0.5">Kuwait</span>
              <span>In collaboration with Spark Groups</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#EAB308] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800 block mb-0.5">Global Expansion</span>
              <span>Expanding to Germany, Australia</span>
            </div>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>powered and crafted with ❤️ by <a href="https://www.tenspick.com" target="_blank" rel="noreferrer" className="text-slate-800 hover:text-primary font-semibold transition-colors">tenspick</a></span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a href="#/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <span>•</span>
            <button 
              onClick={handleScrollToTop}
              className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:bg-primary/5 hover:text-primary transition-all flex items-center justify-center cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tiny clean disclaimer */}
        <div className="pt-4 text-center sm:text-left text-[10px] text-slate-400">
          Disclaimer: TENSPICK MAAS is an on-demand service by Tenspick. Subscribed websites, branding kits, ad campaign creatives, and workflow code pipelines remain the intellectual property of clients. GDPR compliant.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
