import React from 'react';
import { Shield, ArrowUp, PhoneCall, Mail } from 'lucide-react';
import { contactConfig } from '../data/proposalData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-secondary text-luxury-text pt-20 pb-12 border-t border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-luxury-borderLight">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-luxury-border flex items-center justify-center p-2 shadow-xs">
                <Shield className="w-5 h-5 text-luxury-gold" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-luxury-text tracking-tight">
                  A V <span className="text-luxury-gold">Quality Services</span>
                </span>
                <p className="text-xs text-luxury-secondaryText font-medium tracking-wide">
                  {contactConfig.descriptor}
                </p>
              </div>
            </div>

            <p className="text-xs text-luxury-secondaryText leading-relaxed max-w-sm font-light">
              Executive Digital Marketing Proposal & Interactive Financial Forecast. Strategic positioning, high-intent lead acquisition, and commercial accountability across India and selected international regions.
            </p>

            <div className="text-xs text-luxury-secondaryText pt-2 font-mono">
              Target Markets: {contactConfig.markets.join(' • ')}
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-luxury-gold font-mono">
              Proposal Architecture
            </h4>
            <ul className="space-y-2 text-xs text-luxury-secondaryText font-light">
              <li>
                <a href="#overview" className="hover:text-luxury-gold transition-colors">
                  Overview & Value Proposition
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-luxury-gold transition-colors">
                  Services & ISO Standards Scope
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-luxury-gold transition-colors">
                  Three Transparent Packages
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-luxury-gold transition-colors">
                  Interactive Budget Calculator
                </a>
              </li>
              <li>
                <a href="#action-plan" className="hover:text-luxury-gold transition-colors">
                  90-Day Implementation Timeline
                </a>
              </li>
              <li>
                <a href="#deliverables" className="hover:text-luxury-gold transition-colors">
                  Deliverables Comparison Matrix
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-luxury-gold transition-colors">
                  Schedule Executive Review
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-luxury-gold font-mono">
              Communications & Inquiries
            </h4>
            <p className="text-xs text-luxury-secondaryText leading-relaxed font-light">
              For proposal revisions, scope customization, or internal executive review sessions:
            </p>
            <div className="space-y-2 text-xs text-luxury-text">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span className="font-mono text-xs">{contactConfig.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-luxury-gold" />
                <span className="font-mono text-xs">{contactConfig.phoneDisplay}</span>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-luxury-gold hover:text-luxury-dark pt-3 transition-colors font-medium"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top of Proposal</span>
            </button>
          </div>

        </div>

        {/* Commercial Disclosures Grid */}
        <div className="pt-10 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[11px] text-luxury-secondaryText font-light border-b border-luxury-borderLight">
          
          {/* Pricing & Tax Disclaimer */}
          <div className="space-y-1">
            <strong className="text-luxury-text block font-medium">Pricing & Tax Notice:</strong>
            <p className="leading-relaxed">
              All package retainers and calculator projections are presented in INR. Statutory GST (default 18%) applies to agency management retainers and will be charged on formal tax invoices.
            </p>
          </div>

          {/* Advertising Spend Disclaimer */}
          <div className="space-y-1">
            <strong className="text-luxury-text block font-medium">Advertising Spend Disclosure:</strong>
            <p className="leading-relaxed">
              Advertising expenditures are paid directly to advertising platforms (Google Ads, Meta, LinkedIn) via the client's own corporate billing card. Agency fees do not include third-party media costs.
            </p>
          </div>

          {/* Third-Party Costs Disclaimer */}
          <div className="space-y-1">
            <strong className="text-luxury-text block font-medium">Third-Party Costs:</strong>
            <p className="leading-relaxed">
              Domain registrations, third-party software subscriptions (CRMs, email dispatchers, specialized LMS platforms), and external auditor fees are client-owned and excluded from agency retainers.
            </p>
          </div>

          {/* Certification Claim Disclaimer */}
          <div className="space-y-1">
            <strong className="text-luxury-text block font-medium">Accreditation Disclaimer:</strong>
            <p className="leading-relaxed">
              A V Quality Services conducts training, internal audits, and gap consulting. Final certification audits and accredited certificates are issued solely by independent registrars through documented partnerships.
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-luxury-secondaryText font-light">
          <div>
            © {currentYear} A V Quality Services. Proposal Document for Commercial Evaluation.
          </div>
          <div className="text-[11px] text-luxury-secondaryText font-mono">
            Luxury White Theme • Confidential Client Proposal
          </div>
        </div>

      </div>
    </footer>
  );
};
