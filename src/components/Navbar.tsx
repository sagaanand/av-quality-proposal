import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import { proposalAgencyConfig } from '../data/proposalData';

interface NavbarProps {
  onScrollToCalculator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('#overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'What We\'ll Do', href: '#services' },
    { name: 'Spend & Packages', href: '#packages' },
    { name: 'Budget Calculator', href: '#calculator' },
    { name: 'Expected Outputs', href: '#expected-outputs' },
    { name: '90-Day Plan', href: '#action-plan' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-luxury border-b border-luxury-border py-3' 
          : 'bg-white border-b border-luxury-border py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Dual Brand Header: Digital Cake -> A V Quality Services */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-luxury-dark text-white flex items-center justify-center font-serif font-bold text-sm shadow-sm group-hover:bg-luxury-gold transition-colors">
              DC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-serif text-luxury-dark font-bold tracking-tight">
                  {proposalAgencyConfig.agencyName}
                </span>
                <span className="text-[10px] text-luxury-secondaryText font-mono">→</span>
                <span className="text-sm sm:text-base font-serif text-luxury-gold font-semibold">
                  {proposalAgencyConfig.clientName}
                </span>
              </div>
              <p className="text-[11px] text-luxury-secondaryText font-medium tracking-wide">
                Digital Marketing Proposal & 90-Day Growth Architecture
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`text-xs uppercase tracking-widest font-semibold transition-all py-1 relative ${
                  activeHash === link.href
                    ? 'text-luxury-gold'
                    : 'text-luxury-secondaryText hover:text-luxury-text'
                }`}
              >
                {link.name}
                {activeHash === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Quick Jump Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#calculator"
              onClick={onScrollToCalculator}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-luxury-dark bg-luxury-goldSubtle hover:bg-luxury-gold/20 border border-luxury-goldLight hover:border-luxury-gold rounded-xl transition-all shadow-xs"
            >
              <Calculator className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Investment Calculator</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#calculator"
              className="px-3 py-1.5 text-xs font-semibold text-luxury-dark bg-luxury-goldSubtle border border-luxury-goldLight rounded-lg"
            >
              Calculator
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-luxury-secondaryText hover:text-luxury-text hover:bg-luxury-secondary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-luxury-border bg-white rounded-2xl px-4 shadow-luxury">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveHash(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-xs uppercase tracking-wider font-semibold text-luxury-secondaryText hover:text-luxury-gold hover:bg-luxury-secondary rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-luxury-borderLight">
                <a
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-luxury-dark bg-luxury-goldSubtle border border-luxury-goldLight rounded-xl"
                >
                  <Calculator className="w-4 h-4 text-luxury-gold" />
                  <span>Model In Calculator</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
