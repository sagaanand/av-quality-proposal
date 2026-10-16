import React, { useState } from 'react';
import { growthBrandConfig } from '../../data/growthProposalData';
import { Printer, Menu, X, ArrowRight, MessageSquareQuote, Compass, Layers } from 'lucide-react';

interface GrowthNavbarProps {
  onOpenDiscussion: (topic?: string) => void;
  onPrint: () => void;
  onSwitchToOriginal: () => void;
}

export const GrowthNavbar: React.FC<GrowthNavbarProps> = ({ 
  onOpenDiscussion, 
  onPrint,
  onSwitchToOriginal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Commercial Model', href: '#commercial-model' },
    { label: 'AI Video Showcase', href: '#ai-video-showcase' },
    { label: 'Content Calendar', href: '#content-calendar' },
    { label: 'Deliverables', href: '#deliverables' },
    { label: 'Strategy', href: '#strategy' },
    { label: 'WhatsApp Flow', href: '#whatsapp-journey' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Exclusions', href: '#exclusions' },
    { label: 'ISO Trust', href: '#iso-trust' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
      
      {/* Top Banner: Switcher to Existing Comprehensive Proposal */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4 text-center flex items-center justify-center space-x-2 no-print">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
        <span className="text-slate-300">You are viewing the new page:</span>
        <span className="font-bold text-white">Digital Marketing & AI Video Proposal (₹10k Retainer)</span>
        <span className="text-slate-500">|</span>
        <button
          onClick={onSwitchToOriginal}
          className="text-teal-300 hover:text-white font-semibold underline underline-offset-2 flex items-center space-x-1"
        >
          <span>View 90-Day Plan & Calculator</span>
          <ArrowRight className="w-3 h-3 inline" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Wordmark Logo */}
          <div className="flex items-center space-x-3">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}
              className="group flex flex-col"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <span className="font-extrabold tracking-wider text-slate-900 text-lg sm:text-xl font-display uppercase group-hover:text-teal-700 transition-colors">
                  {growthBrandConfig.brandName}
                </span>
              </div>
              <span className="text-[11px] tracking-widest text-slate-500 font-medium uppercase pl-4">
                Digital Marketing Proposal
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Switch to Existing Website/Proposal */}
            <button
              onClick={onSwitchToOriginal}
              title="Switch to original proposal & calculator"
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all"
            >
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span>Full Proposal & Calc</span>
            </button>

            {/* Print / Save as PDF */}
            <button
              onClick={onPrint}
              title="Print or Save Proposal as PDF"
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 rounded-lg transition-all shadow-subtle"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Print / PDF</span>
            </button>

            {/* Primary CTA: Discuss Proposal */}
            <button
              onClick={() => onOpenDiscussion('General Proposal Discussion')}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg transition-all shadow-sm group"
            >
              <MessageSquareQuote className="w-3.5 h-3.5 text-teal-400 group-hover:text-white transition-colors" />
              <span>Discuss Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onPrint}
              aria-label="Print or Save PDF"
              className="p-2 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          <div className="pb-2 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSwitchToOriginal();
              }}
              className="w-full flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-xs font-bold text-slate-800"
            >
              <span>Switch to 90-Day Plan & Calculator</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 rounded-md"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiscussion('General Proposal Discussion');
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg"
            >
              <MessageSquareQuote className="w-4 h-4 text-teal-400" />
              <span>Discuss Proposal Scope</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
