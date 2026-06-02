import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why MaaS', href: '#/why-maas' },
    { name: 'Services', href: '#/services' },
    { name: 'How It Works', href: '#/how-it-works' },
    { name: 'Industries', href: '#/industries' },
    { name: 'Case Studies', href: '#/case-studies' },
    { name: 'FAQ', href: '#/faq' },
  ];

  const isMobileBlue = isScrolled || isOpen;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-4 bg-[#1E3A8A] lg:bg-[#FFFFFF]/90 lg:backdrop-blur-md border-b border-white/10 lg:border-slate-200' 
        : isOpen
          ? 'py-6 bg-[#1E3A8A] border-b border-white/10'
          : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="flex items-center gap-2.5 group">
          <img 
            src="/tenspick maas logo.png" 
            alt="Logo" 
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className={`font-sans font-black tracking-tight text-lg sm:text-xl select-none transition-colors duration-300 ${
            isMobileBlue ? 'text-white-pure lg:text-[#1E3A8A]' : 'text-[#1E3A8A]'
          }`}>
            TENSPICK MAAS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm text-slate-600 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="#/contact" 
            className="text-sm text-slate-600 hover:text-primary transition-colors duration-300 flex items-center gap-1"
          >
            Book Call <ArrowUpRight className="w-4 h-4" />
          </a>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => {
              window.location.hash = '#/contact';
            }}
          >
            Start Growing
          </Button>
        </div>

        {/* Mobile CTA and Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <a 
            href="#/contact" 
            onClick={() => setIsOpen(false)}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all duration-300 ${
              isMobileBlue 
                ? 'text-white-pure border-white/20 hover:bg-white/10' 
                : 'text-[#1E3A8A] border-[#1E3A8A]/20 hover:bg-[#1E3A8A]/5'
            }`}
          >
            Book Call
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors cursor-pointer ${
              isMobileBlue ? 'text-white-pure' : 'text-[#1E3A8A] hover:text-primary'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#1E3A8A] flex flex-col p-8 gap-6 z-40">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg text-slate-200-pure hover:text-white-pure transition-colors py-2 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <a 
              href="#/contact" 
              onClick={() => setIsOpen(false)}
              className="text-center py-3 text-white-pure border border-white/20 rounded-full hover:bg-white/10"
            >
              Book Strategy Call
            </a>
            <Button 
              variant="primary" 
              onClick={() => {
                setIsOpen(false);
                window.location.hash = '#/contact';
              }}
              style={{
                backgroundColor: '#ffffff',
                color: '#1E3A8A'
              }}
            >
              Start Growing
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
