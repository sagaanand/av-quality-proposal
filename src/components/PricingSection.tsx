import React from 'react';
import { packagesData } from '../data/proposalData';
import { Package } from '../types';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  CreditCard,
  Calculator
} from 'lucide-react';

interface PricingSectionProps {
  selectedPackageId: string;
  onSelectPackage: (pkg: Package) => void;
  onCustomizeInCalculator?: (pkg: Package) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  selectedPackageId,
  onSelectPackage,
  onCustomizeInCalculator,
}) => {
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="packages" className="py-24 bg-luxury-secondary border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Investment Structure & Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Transparent Marketing Packages
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            Starting at <strong>₹50,000 for the first month</strong>. Complete separation of one-time setup, monthly agency management retainers, and direct advertising spend.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {packagesData.map((pkg) => {
            const isRecommended = pkg.isRecommended;
            const isSelected = selectedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isRecommended
                    ? 'bg-white border-2 border-luxury-gold shadow-luxury-hover lg:-translate-y-2'
                    : 'bg-white border border-luxury-border shadow-luxury hover:border-luxury-gold/50 hover:shadow-luxury-hover'
                } ${isSelected ? 'ring-2 ring-luxury-gold' : ''}`}
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-luxury-gold text-white text-[11px] font-bold uppercase tracking-widest shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      RECOMMENDED
                    </span>
                  </div>
                )}

                {/* Upper Section */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-luxury-gold uppercase tracking-wider">
                      {pkg.letterCode}
                    </span>
                    {pkg.id === 'essential' && (
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-luxury-secondary text-luxury-secondaryText border border-luxury-border">
                        Starting Tier
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-1">
                    {pkg.name}
                  </h3>

                  <p className="text-xs font-light text-luxury-secondaryText mb-6">
                    {pkg.positioning}
                  </p>

                  {/* Primary Highlight: First Month Total */}
                  <div className="p-5 rounded-2xl bg-luxury-secondary border border-luxury-border mb-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-luxury-secondaryText mb-1">
                      First-Month Total Investment
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-serif font-medium text-luxury-dark">
                        {formatINR(pkg.month1Total)}
                      </span>
                      <span className="text-xs font-light text-luxury-secondaryText">
                        (M1 Launch)
                      </span>
                    </div>
                  </div>

                  {/* Fee Separation Ledger */}
                  <div className="space-y-2.5 pb-6 border-b border-luxury-borderLight text-xs">
                    <div className="flex items-center justify-between text-luxury-secondaryText">
                      <span>One-Time Setup Fee:</span>
                      <span className="font-mono font-medium text-luxury-text">
                        {formatINR(pkg.setupFee)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-luxury-secondaryText">
                      <span>Monthly Agency Retainer:</span>
                      <span className="font-mono font-medium text-luxury-text">
                        {formatINR(pkg.monthlyRetainer)} / mo
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-luxury-secondaryText">
                      <span>Monthly Advertising Spend:</span>
                      <span className="font-mono font-medium text-luxury-text">
                        {formatINR(pkg.monthlyAdBudget)} / mo
                      </span>
                    </div>
                  </div>

                  {/* Ongoing & 90-Day Projections */}
                  <div className="pt-4 pb-2 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-medium">
                      <span className="text-luxury-secondaryText">Recurring Monthly (M2+):</span>
                      <span className="font-mono font-bold text-luxury-text">
                        {formatINR(pkg.recurringMonthly)} / mo
                      </span>
                    </div>

                    <div className="flex items-center justify-between font-semibold pt-2 border-t border-dashed border-luxury-borderLight">
                      <span className="text-luxury-text">Total 90-Day Investment:</span>
                      <span className="font-mono font-bold text-base text-luxury-gold">
                        {formatINR(pkg.total90Days)}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-6 border-t border-luxury-borderLight">
                    <span className="text-xs font-bold uppercase tracking-wider text-luxury-text block mb-3">
                      Included Scope:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-luxury-secondaryText leading-relaxed font-light">
                          <Check className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Action Buttons */}
                <div className="p-7 sm:p-8 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isRecommended
                        ? 'bg-luxury-dark hover:bg-luxury-text text-white shadow-luxury'
                        : 'bg-luxury-secondary hover:bg-luxury-ivoryLight text-luxury-text border border-luxury-border'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onCustomizeInCalculator && (
                    <button
                      onClick={() => onCustomizeInCalculator(pkg)}
                      className="w-full py-2 px-3 text-[11px] text-luxury-secondaryText hover:text-luxury-gold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Calculator className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>Model in Calculator</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Transparency & Third-Party Disclosure Note */}
        <div className="p-5 rounded-2xl bg-white border border-luxury-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-luxury-secondaryText">
          <div className="flex items-center gap-2.5">
            <CreditCard className="w-4 h-4 text-luxury-gold flex-shrink-0" />
            <span>
              <strong>Direct Ad Billing & Taxes:</strong> Advertising spend is billed directly by Google Ads or Meta to client-owned ad accounts with zero agency markup. Applicable statutory taxes (GST at 18%) are calculated separately on agency professional retainers.
            </span>
          </div>
          <a
            href="#deliverables"
            className="text-luxury-gold font-medium hover:underline flex items-center gap-1 flex-shrink-0"
          >
            <span>Compare Detailed Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
