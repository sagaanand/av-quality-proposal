import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  Globe2, 
  Layers 
} from 'lucide-react';
import { proposalAgencyConfig } from '../data/proposalData';

interface HeroSectionProps {
  onExplorePackages: () => void;
  onCalculateBudget: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExplorePackages, 
  onCalculateBudget 
}) => {
  const threeCorePillars = [
    {
      label: 'Enna Pannaporom',
      title: 'What We Will Do',
      desc: 'Build high-converting landing page, run targeted Google search ads on ISO 9001/27001, route leads to WhatsApp, optimize weekly.',
      icon: Layers,
    },
    {
      label: 'Evlo Spend',
      title: 'How Much to Spend',
      desc: 'Starting at ₹50,000 in Month 1 (₹15k setup + ₹20k retainer + ₹15k ads). Month 2 & 3: ₹35k/mo. Recommended Growth: ₹75,000 M1.',
      icon: Calculator,
    },
    {
      label: 'Enna Output',
      title: 'What Outputs to Expect',
      desc: 'Direct qualified inbound enquiries from corporate quality & IT heads, verified cost-per-lead baseline, and booked consulting scoping calls.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="overview" className="relative pt-32 pb-20 lg:pt-38 lg:pb-26 bg-white text-luxury-text overflow-hidden border-b border-luxury-border">
      {/* Background delicate pattern */}
      <div className="absolute inset-0 bg-luxury-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-luxury-goldSubtle rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Proposal Origin Eyebrow Bar */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-dark text-white text-xs font-mono font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-luxury-gold inline-block" />
            <span>Prepared by {proposalAgencyConfig.agencyName}</span>
          </div>
          <span className="text-luxury-secondaryText text-xs font-mono">for</span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-luxury-goldSubtle border border-luxury-goldLight text-luxury-dark text-xs font-medium font-serif">
            <span>Client: {proposalAgencyConfig.clientName}</span>
          </div>
          <span className="text-[11px] text-luxury-secondaryText font-mono hidden sm:inline-block">
            • Ref: {proposalAgencyConfig.proposalCode}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposal Copy & Navigation CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-luxury-dark font-normal leading-[1.18] tracking-tight">
              Build a Premium ISO Brand.{' '}
              <span className="italic text-luxury-gold">Generate Qualified Leads.</span>{' '}
              Grow with Clarity.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-luxury-secondaryText leading-relaxed max-w-2xl font-light">
              A comprehensive digital marketing proposal from <strong>Digital Cake</strong> to establish <strong>A V Quality Services</strong>, validate commercial market demand, and engineer a predictable corporate acquisition engine across India and selected international hubs.
            </p>

            {/* Commercial Baseline Price Callout */}
            <div className="inline-flex flex-wrap items-center gap-3 p-3.5 px-4.5 rounded-2xl bg-luxury-secondary border border-luxury-border text-xs">
              <span className="w-2 h-2 rounded-full bg-luxury-green flex-shrink-0" />
              <span className="text-luxury-secondaryText">Starting Launch Investment:</span>
              <span className="font-mono font-bold text-luxury-dark text-sm">₹50,000 First-Month Total</span>
              <span className="text-luxury-secondaryText text-[11px] font-mono">(Package A • Setup + Agency + Ads)</span>
            </div>

            {/* Jump Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={onExplorePackages}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-luxury-dark hover:bg-luxury-text rounded-xl shadow-luxury hover:shadow-luxury-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Packages & Pricing</span>
                <ArrowRight className="w-4 h-4 text-luxury-gold" />
              </button>

              <button
                onClick={onCalculateBudget}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-luxury-dark bg-luxury-goldSubtle hover:bg-luxury-gold/20 border border-luxury-goldLight hover:border-luxury-gold rounded-xl transition-all"
              >
                <Calculator className="w-4 h-4 text-luxury-gold" />
                <span>Interactive Spend Calculator</span>
              </button>
            </div>

            {/* Three Simple Questions Cards */}
            <div className="pt-6 border-t border-luxury-borderLight">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {threeCorePillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-4 rounded-2xl bg-luxury-secondary/80 border border-luxury-border hover:border-luxury-gold/50 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-luxury-gold">
                          {item.label}
                        </span>
                        <Icon className="w-3.5 h-3.5 text-luxury-gold" />
                      </div>
                      <h3 className="text-xs font-serif font-bold text-luxury-text">{item.title}</h3>
                      <p className="text-[11px] text-luxury-secondaryText leading-relaxed font-light">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Executive Presentation Composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="absolute -inset-2 bg-gradient-to-tr from-luxury-ivory via-white to-luxury-goldSubtle rounded-3xl opacity-70 blur-lg" />

              <div className="relative rounded-3xl bg-white border border-luxury-border shadow-luxury overflow-hidden p-6 sm:p-7 space-y-5">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-luxury-borderLight">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-luxury-dark text-white flex items-center justify-center font-serif font-bold text-xs">
                      DC
                    </div>
                    <div>
                      <span className="text-xs font-serif font-bold text-luxury-text block">
                        Digital Cake • Proposal Deck
                      </span>
                      <span className="text-[10px] text-luxury-secondaryText">Targeted at Quality & Consulting Growth</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-luxury-goldSubtle text-luxury-gold border border-luxury-goldLight">
                    Active Proposal
                  </span>
                </div>

                {/* Target Markets */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-luxury-secondary border border-luxury-borderLight space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-luxury-secondaryText">
                      <span>Primary Market</span>
                      <span className="text-luxury-green font-bold text-[10px]">Phase 1</span>
                    </div>
                    <div className="text-xs font-bold text-luxury-text flex items-center gap-1.5 font-serif">
                      <Building2 className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>India Industrial</span>
                    </div>
                    <p className="text-[10px] text-luxury-secondaryText leading-snug font-light">
                      NCR, Mumbai-Pune, Chennai, Gujarat, Bengaluru
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-luxury-secondary border border-luxury-borderLight space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-luxury-secondaryText">
                      <span>Regional Testing</span>
                      <span className="text-luxury-gold font-bold text-[10px]">Phase 2</span>
                    </div>
                    <div className="text-xs font-bold text-luxury-text flex items-center gap-1.5 font-serif">
                      <Globe2 className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>Middle East</span>
                    </div>
                    <p className="text-[10px] text-luxury-secondaryText leading-snug font-light">
                      UAE & Saudi Arabia (High-ticket corporate audits)
                    </p>
                  </div>
                </div>

                {/* Standards Summary */}
                <div className="p-4 rounded-xl bg-luxury-ivoryLight border border-luxury-border space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-luxury-text">
                      Target ISO Standards Portfolio
                    </span>
                    <span className="text-[10px] text-luxury-gold font-mono font-medium">7 Standards</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['ISO 9001 (QMS)', 'ISO 27001 (InfoSec)', 'ISO 45001 (Safety)', 'ISO 14001 (ESG)', 'ISO 42001 (AI)'].map((std) => (
                      <span
                        key={std}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-luxury-text border border-luxury-border shadow-xs"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Measurement Philosophy */}
                <div className="p-3.5 rounded-xl bg-white border border-luxury-goldLight/70 flex items-center justify-between text-xs text-luxury-secondaryText shadow-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-luxury-gold" />
                    <span>Focus: <strong>Cost per Qualified Lead</strong></span>
                  </div>
                  <span className="text-[11px] font-mono text-luxury-gold font-semibold">Zero Vanity Metrics</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
