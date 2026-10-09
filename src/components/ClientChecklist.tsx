import React from 'react';
import { clientResponsibilities } from '../data/proposalData';
import { CheckSquare, UserCheck } from 'lucide-react';

export const ClientChecklist: React.FC = () => {
  return (
    <section id="checklist" className="py-24 bg-luxury-secondary border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <CheckSquare className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Operational Partnership Prerequisites</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Client Responsibilities & Success Checklist
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            Digital marketing generates inbound demand, but commercial conversion relies on prompt operational follow-up and verified institutional credentials from A V Quality Services.
          </p>
        </div>

        {/* 9 Checklist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientResponsibilities.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-luxury-border hover:border-luxury-gold/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-luxury"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-xl bg-luxury-greenLight text-luxury-green flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <h3 className="text-sm font-serif font-bold text-luxury-text leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-luxury-secondaryText leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-luxury-borderLight text-[10px] font-mono text-luxury-secondaryText uppercase tracking-wider">
                Prerequisite 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Speed to Lead Highlight Box */}
        <div className="mt-14 p-7 rounded-3xl bg-white border border-luxury-border shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-luxury-goldSubtle border border-luxury-goldLight text-luxury-gold flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-luxury-text">
                The 15-Minute Rule: Speed-to-Lead Direct Commercial Impact
              </h4>
              <p className="text-xs text-luxury-secondaryText mt-1 max-w-xl font-light leading-relaxed">
                B2B decision-makers evaluating ISO training institutes and certification consultants typically contact multiple providers. Designating an internal owner to respond within 15–30 minutes directly multiplies inquiry qualification rates.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl bg-luxury-secondary border border-luxury-border text-luxury-gold font-mono text-xs font-semibold whitespace-nowrap">
            Critical Commercial Factor
          </span>
        </div>

      </div>
    </section>
  );
};
