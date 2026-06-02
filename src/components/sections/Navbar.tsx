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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-4 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-slate-200' 
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
          <span className="font-sans font-black tracking-tight text-lg sm:text-xl text-[#1E3A8A] select-none">
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
          <a href="#/contact" className="text-sm text-slate-600 hover:text-primary transition-colors duration-300 flex items-center gap-1">
            Book Call <ArrowUpRight className="w-4 h-4" />
          </a>
          <Button variant="primary" size="sm" onClick={() => window.location.hash = '#/contact'}>
            Start Growing
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-primary transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white/95 backdrop-blur-xl border-t border-slate-200 flex flex-col p-8 gap-6 z-40">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg text-slate-600 hover:text-primary transition-colors py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <a 
              href="#/contact" 
              onClick={() => setIsOpen(false)}
              className="text-center py-3 text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50"
            >
              Book Strategy Call
            </a>
            <Button 
              variant="primary" 
              onClick={() => {
                setIsOpen(false);
                window.location.hash = '#/contact';
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
