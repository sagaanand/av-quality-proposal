import React from 'react';
import { isoStandardsData, businessServiceCategories } from '../data/proposalData';
import { IconHelper } from './IconHelper';
import { AlertCircle, ShieldCheck, Check } from 'lucide-react';

export const StandardsGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-secondary border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Core Competencies & Standards Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Services & ISO Standards Portfolio
          </h2>
          
          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            A V Quality Services proposes to deliver expert-led <strong>ISO training</strong>, end-to-end <strong>implementation consulting</strong>, and professional <strong>certification coordination</strong> through documented partnerships with accredited certification bodies.
          </p>
        </div>

        {/* 1. Three Core Business Service Categories */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-luxury-gold font-mono">
              Three Service Dimensions
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-luxury-text mt-1">
              Structured Engagement Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessServiceCategories.map((cat, idx) => (
              <div
                key={cat.id}
                className="p-7 rounded-3xl bg-luxury-secondary border border-luxury-border hover:border-luxury-gold/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-luxury"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-luxury-border flex items-center justify-center text-luxury-gold shadow-sm">
                      <IconHelper name={cat.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-luxury-secondaryText">0{idx + 1}</span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-luxury-text mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-xs font-semibold text-luxury-gold uppercase tracking-wider mb-3">
                    {cat.subtitle}
                  </p>
                  <p className="text-xs text-luxury-secondaryText leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-luxury-borderLight space-y-2">
                  <span className="text-[11px] font-semibold text-luxury-text uppercase tracking-wider block">
                    Key Offerings:
                  </span>
                  <ul className="space-y-1.5 text-xs text-luxury-secondaryText">
                    {cat.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-luxury-green flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Proposed ISO Standards Portfolio Grid */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-luxury-gold font-mono">
              Proposed Standards
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-luxury-text mt-1">
              Target Management Systems Scope
            </h3>
            <p className="text-xs text-luxury-secondaryText max-w-xl mx-auto mt-2 font-light">
              We recommend prioritizing high-intent commercial standards (ISO 9001 and ISO 27001) in initial paid campaigns to optimize ad spend efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isoStandardsData.map((std) => {
              const isFlagship = std.id === 'iso-9001' || std.id === 'iso-27001' || std.id === 'iso-42001';

              return (
                <div
                  key={std.id}
                  className={`group rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                    isFlagship
                      ? 'bg-luxury-ivoryLight border-luxury-goldLight/80 shadow-sm hover:shadow-luxury'
                      : 'bg-white border-luxury-border hover:border-luxury-borderLight shadow-xs hover:shadow-sm'
                  }`}
                >
                  <div>
                    {/* Header bar: Icon & Standard Code */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-white border border-luxury-border shadow-xs text-luxury-gold">
                        <IconHelper name={std.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-luxury-secondary text-luxury-dark font-mono border border-luxury-border">
                        {std.code}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-luxury-text group-hover:text-luxury-gold transition-colors font-serif leading-snug">
                      {std.title}
                    </h4>

                    <span className="inline-block text-[10px] font-semibold text-luxury-secondaryText uppercase tracking-wider mt-1 mb-3">
                      {std.category}
                    </span>

                    <p className="text-xs text-luxury-secondaryText leading-relaxed mb-4 font-light">
                      {std.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-luxury-borderLight text-[11px] text-luxury-secondaryText">
                    <span className="font-semibold text-luxury-green">Strategic Value:</span> {std.keyBenefit}
                  </div>
                </div>
              );
            })}

            {/* Launch Prioritization Advisory Card */}
            <div className="rounded-3xl p-6 bg-luxury-secondary border border-luxury-goldLight/80 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-luxury-goldSubtle border border-luxury-goldLight text-luxury-gold flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-serif font-bold text-luxury-text mb-2">
                  Phased Offer Launch Strategy
                </h4>
                <p className="text-xs text-luxury-secondaryText leading-relaxed font-light">
                  Rather than fragmenting marketing budget across all 7 standards simultaneously, we recommend leading with <strong>ISO 9001</strong> (high baseline search volume) and <strong>ISO 27001</strong> (high margin tech & SaaS demand), followed by <strong>ISO 42001</strong> (AI early-mover differentiation).
                </p>
              </div>
              <div className="pt-4 border-t border-luxury-border text-[11px] text-luxury-gold font-semibold font-mono">
                Phase 1: Concentrate Budget on Top 2-3 Offers
              </div>
            </div>
          </div>
        </div>

        {/* Verification and Compliance Disclaimer */}
        <div className="mt-14 p-4 sm:p-5 rounded-2xl bg-luxury-secondary border border-luxury-border flex flex-col sm:flex-row items-start sm:items-center gap-3.5 text-luxury-secondaryText">
          <AlertCircle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs leading-relaxed">
            <strong className="text-luxury-text">Credential & Scope Verification Note:</strong> Prior to publishing public advertising campaigns, all partner agreements, course accreditation bodies, trainer qualifications, and formal certificate issuance scopes must be verified and documented to ensure ethical compliance with international advertising standards.
          </div>
        </div>

      </div>
    </section>
  );
};
