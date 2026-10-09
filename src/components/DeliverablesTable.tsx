import React from 'react';
import { deliverablesComparisonTable } from '../data/proposalData';
import { Table, Sparkles } from 'lucide-react';

interface DeliverablesTableProps {
  onSelectPackageId: (id: 'essential' | 'growth' | 'expansion') => void;
}

export const DeliverablesTable: React.FC<DeliverablesTableProps> = ({ onSelectPackageId }) => {
  return (
    <section id="deliverables" className="py-24 bg-luxury-secondary border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <Table className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Scope Comparison Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Detailed Deliverables & Scope
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            A side-by-side audit of commercial deliverables across all three proposal tiers to ensure unambiguous scope alignment.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="rounded-3xl border border-luxury-border bg-white shadow-luxury overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-luxury-border bg-luxury-ivoryLight">
                  <th className="p-6 text-xs font-semibold text-luxury-secondaryText uppercase tracking-wider w-1/4">
                    Deliverable / Feature
                  </th>
                  
                  {/* Package A */}
                  <th className="p-6 text-center w-1/4 border-l border-luxury-borderLight">
                    <span className="text-xs font-mono font-bold text-luxury-gold uppercase block">Package A</span>
                    <div className="text-base font-serif font-bold text-luxury-text mt-0.5">Essential Launch</div>
                    <div className="text-xs font-mono text-luxury-secondaryText mt-1">₹50,000 M1</div>
                    <button
                      onClick={() => onSelectPackageId('essential')}
                      className="mt-3 px-3 py-1 rounded-lg text-xs font-medium text-luxury-text bg-luxury-secondary hover:bg-luxury-goldSubtle transition-colors border border-luxury-border"
                    >
                      Select A
                    </button>
                  </th>

                  {/* Package B */}
                  <th className="p-6 text-center w-1/4 border-l border-luxury-borderLight bg-luxury-goldSubtle/40 relative">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-luxury-gold mb-1">
                      <Sparkles className="w-2.5 h-2.5" /> RECOMMENDED
                    </span>
                    <div className="text-base font-serif font-bold text-luxury-dark">Growth Launch</div>
                    <div className="text-xs font-mono font-bold text-luxury-gold mt-1">₹75,000 M1</div>
                    <button
                      onClick={() => onSelectPackageId('growth')}
                      className="mt-3 px-3 py-1 rounded-lg text-xs font-medium text-white bg-luxury-dark hover:bg-luxury-text transition-colors shadow-xs"
                    >
                      Select B
                    </button>
                  </th>

                  {/* Package C */}
                  <th className="p-6 text-center w-1/4 border-l border-luxury-borderLight">
                    <span className="text-xs font-mono font-bold text-luxury-gold uppercase block">Package C</span>
                    <div className="text-base font-serif font-bold text-luxury-text mt-0.5">Market Expansion</div>
                    <div className="text-xs font-mono text-luxury-secondaryText mt-1">₹1,00,000 M1</div>
                    <button
                      onClick={() => onSelectPackageId('expansion')}
                      className="mt-3 px-3 py-1 rounded-lg text-xs font-medium text-luxury-text bg-luxury-secondary hover:bg-luxury-goldSubtle transition-colors border border-luxury-border"
                    >
                      Select C
                    </button>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-luxury-borderLight text-xs">
                {deliverablesComparisonTable.map((row, idx) => {
                  const isFinancialRow = row.feature.includes('Fee') || 
                                         row.feature.includes('Budget') || 
                                         row.feature.includes('Investment');

                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-luxury-secondary/40 transition-colors ${
                        isFinancialRow ? 'bg-luxury-secondary/70 font-semibold text-luxury-dark' : 'text-luxury-secondaryText'
                      }`}
                    >
                      {/* Feature Name */}
                      <td className="p-4.5 sm:p-5 font-medium text-luxury-text">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${isFinancialRow ? 'bg-luxury-gold' : 'bg-luxury-secondaryText'}`} />
                          <span>{row.feature}</span>
                        </div>
                      </td>

                      {/* Package A Value */}
                      <td className="p-4.5 sm:p-5 text-center border-l border-luxury-borderLight font-light">
                        <span className={isFinancialRow ? 'font-mono font-bold text-luxury-text' : ''}>
                          {row.essential}
                        </span>
                      </td>

                      {/* Package B Value */}
                      <td className="p-4.5 sm:p-5 text-center border-l border-luxury-borderLight bg-luxury-goldSubtle/20 font-medium">
                        <span className={isFinancialRow ? 'font-mono font-bold text-luxury-gold' : 'text-luxury-dark'}>
                          {row.growth}
                        </span>
                      </td>

                      {/* Package C Value */}
                      <td className="p-4.5 sm:p-5 text-center border-l border-luxury-borderLight font-light">
                        <span className={isFinancialRow ? 'font-mono font-bold text-luxury-text' : ''}>
                          {row.expansion}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-luxury-secondaryText font-light">
          * Tailored custom deliverables, multilingual Arabic search copies, or custom LMS integration can be scoped as supplementary modules upon request.
        </div>

      </div>
    </section>
  );
};
