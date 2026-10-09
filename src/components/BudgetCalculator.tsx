import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  RotateCcw
} from 'lucide-react';
import { packagesData } from '../data/proposalData';

interface BudgetCalculatorProps {
  onApplyToEnquiry?: (summary: {
    setup: number;
    retainer: number;
    adSpend: number;
    duration: number;
    totalWithTax: number;
    effectiveMonthly: number;
  }) => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ onApplyToEnquiry }) => {
  // Inputs state
  const [setupBudget, setSetupBudget] = useState<number>(25000);
  const [monthlyRetainer, setMonthlyRetainer] = useState<number>(25000);
  const [monthlyAdBudget, setMonthlyAdBudget] = useState<number>(25000);
  const [duration, setDuration] = useState<1 | 3 | 6 | 12>(3);
  const [applyGst, setApplyGst] = useState<boolean>(true);
  const [gstPercent, setGstPercent] = useState<number>(18);

  // Formatting helper
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  // Calculations
  const firstMonthTotal = setupBudget + monthlyRetainer + monthlyAdBudget;
  const recurringMonthly = monthlyRetainer + monthlyAdBudget;
  const totalAgencyFees = monthlyRetainer * duration;
  const totalAdSpend = monthlyAdBudget * duration;
  const totalSetupCost = setupBudget;
  const preTaxTotal = totalSetupCost + totalAgencyFees + totalAdSpend;

  const effectiveTaxRate = applyGst ? gstPercent / 100 : 0;
  const estimatedTax = preTaxTotal * effectiveTaxRate;
  const totalWithTax = preTaxTotal + estimatedTax;
  const effectiveMonthlyAverage = preTaxTotal / duration;

  const handleApplyPreset = (packageId: 'essential' | 'growth' | 'expansion') => {
    const pkg = packagesData.find((p) => p.id === packageId);
    if (pkg) {
      setSetupBudget(pkg.setupFee);
      setMonthlyRetainer(pkg.monthlyRetainer);
      setMonthlyAdBudget(pkg.monthlyAdBudget);
      setDuration(3);
    }
  };

  const handleResetToGrowth = () => {
    handleApplyPreset('growth');
  };

  return (
    <section id="calculator" className="py-24 bg-luxury-secondary border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-goldSubtle border border-luxury-goldLight text-luxury-gold font-medium text-xs tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Tool</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Plan Your Marketing Investment
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed">
            Model your custom digital marketing budget dynamically. Adjust the one-time launch setup, agency retainer, media spend, duration, and GST treatment to observe real-time cost projections.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs text-luxury-secondaryText font-medium mr-1">Load Package Baseline:</span>
            <button
              onClick={() => handleApplyPreset('essential')}
              className="text-xs px-3 py-1 rounded-full bg-white border border-luxury-border hover:border-luxury-gold text-luxury-text hover:text-luxury-gold transition-colors shadow-sm"
            >
              Package A (₹50k M1)
            </button>
            <button
              onClick={() => handleApplyPreset('growth')}
              className="text-xs px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold text-luxury-dark font-medium hover:bg-luxury-gold/20 transition-colors shadow-sm"
            >
              Package B (Recommended • ₹75k M1)
            </button>
            <button
              onClick={() => handleApplyPreset('expansion')}
              className="text-xs px-3 py-1 rounded-full bg-white border border-luxury-border hover:border-luxury-gold text-luxury-text hover:text-luxury-gold transition-colors shadow-sm"
            >
              Package C (₹1.0L M1)
            </button>
          </div>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Inputs & Sliders) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-luxury-border p-6 sm:p-8 shadow-luxury space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-luxury-borderLight">
              <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                Adjustable Budget Parameters
              </span>
              <button
                onClick={handleResetToGrowth}
                className="text-xs text-luxury-secondaryText hover:text-luxury-text flex items-center gap-1 transition-colors"
                title="Reset to recommended growth package"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* A. One-time Setup Budget */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="setupBudget" className="text-sm font-medium text-luxury-text">
                  A. One-Time Setup Fee (Month 1 Only)
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-luxury-secondaryText font-mono">₹</span>
                  <input
                    id="setupBudget"
                    type="number"
                    min={0}
                    max={100000}
                    step={5000}
                    value={setupBudget}
                    onChange={(e) => setSetupBudget(Math.max(0, Math.min(100000, Number(e.target.value) || 0)))}
                    className="w-28 px-2 py-1 text-right text-sm font-semibold font-mono rounded-lg border border-luxury-border focus:border-luxury-gold focus:outline-none bg-luxury-secondary"
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100000}
                step={5000}
                value={setupBudget}
                onChange={(e) => setSetupBudget(Number(e.target.value))}
                className="w-full accent-[#C6A56B] h-2 bg-luxury-borderLight rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-luxury-secondaryText font-mono">
                <span>Min: ₹0</span>
                <span>Current: {formatINR(setupBudget)}</span>
                <span>Max: ₹1,00,000</span>
              </div>
            </div>

            {/* B. Monthly Agency Retainer */}
            <div className="space-y-2 pt-2 border-t border-luxury-borderLight">
              <div className="flex items-center justify-between">
                <label htmlFor="monthlyRetainer" className="text-sm font-medium text-luxury-text">
                  B. Monthly Agency Retainer
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-luxury-secondaryText font-mono">₹</span>
                  <input
                    id="monthlyRetainer"
                    type="number"
                    min={0}
                    max={100000}
                    step={5000}
                    value={monthlyRetainer}
                    onChange={(e) => setMonthlyRetainer(Math.max(0, Math.min(100000, Number(e.target.value) || 0)))}
                    className="w-28 px-2 py-1 text-right text-sm font-semibold font-mono rounded-lg border border-luxury-border focus:border-luxury-gold focus:outline-none bg-luxury-secondary"
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100000}
                step={5000}
                value={monthlyRetainer}
                onChange={(e) => setMonthlyRetainer(Number(e.target.value))}
                className="w-full accent-[#C6A56B] h-2 bg-luxury-borderLight rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-luxury-secondaryText font-mono">
                <span>Min: ₹0</span>
                <span>Current: {formatINR(monthlyRetainer)} / mo</span>
                <span>Max: ₹1,00,000</span>
              </div>
            </div>

            {/* C. Monthly Advertising Budget */}
            <div className="space-y-2 pt-2 border-t border-luxury-borderLight">
              <div className="flex items-center justify-between">
                <label htmlFor="monthlyAdBudget" className="text-sm font-medium text-luxury-text">
                  C. Monthly Advertising Spend (Direct Media)
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-luxury-secondaryText font-mono">₹</span>
                  <input
                    id="monthlyAdBudget"
                    type="number"
                    min={0}
                    max={200000}
                    step={5000}
                    value={monthlyAdBudget}
                    onChange={(e) => setMonthlyAdBudget(Math.max(0, Math.min(200000, Number(e.target.value) || 0)))}
                    className="w-28 px-2 py-1 text-right text-sm font-semibold font-mono rounded-lg border border-luxury-border focus:border-luxury-gold focus:outline-none bg-luxury-secondary"
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={200000}
                step={5000}
                value={monthlyAdBudget}
                onChange={(e) => setMonthlyAdBudget(Number(e.target.value))}
                className="w-full accent-[#C6A56B] h-2 bg-luxury-borderLight rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-luxury-secondaryText font-mono">
                <span>Min: ₹0</span>
                <span>Current: {formatINR(monthlyAdBudget)} / mo</span>
                <span>Max: ₹2,00,000</span>
              </div>
            </div>

            {/* D. Engagement Duration */}
            <div className="space-y-2 pt-2 border-t border-luxury-borderLight">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-luxury-text">
                  D. Engagement Duration (Months)
                </label>
                <span className="text-xs font-semibold text-luxury-gold font-mono">{duration} Month{duration > 1 ? 's' : ''}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 3, 6, 12].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDuration(m as 1 | 3 | 6 | 12)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                      duration === m
                        ? 'bg-luxury-text text-white border-luxury-text shadow-sm'
                        : 'bg-white text-luxury-text border-luxury-border hover:border-luxury-gold hover:bg-luxury-secondary'
                    }`}
                  >
                    {m} Month{m > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* E. GST Treatment */}
            <div className="pt-2 border-t border-luxury-borderLight space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-luxury-text">
                  E. GST Treatment
                </label>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-luxury-secondaryText cursor-pointer flex items-center gap-1.5">
                    <input
                      type="checkbox"
                      checked={applyGst}
                      onChange={(e) => setApplyGst(e.target.checked)}
                      className="rounded accent-[#C6A56B]"
                    />
                    <span>Include Estimated GST</span>
                  </label>
                </div>
              </div>

              {applyGst && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-luxury-secondary border border-luxury-borderLight text-xs">
                  <span className="text-luxury-secondaryText">GST Rate (Editable for estimation):</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min={0}
                      max={28}
                      value={gstPercent}
                      onChange={(e) => setGstPercent(Math.max(0, Math.min(28, Number(e.target.value) || 0)))}
                      className="w-16 px-2 py-0.5 text-right font-mono font-bold rounded border border-luxury-border focus:border-luxury-gold focus:outline-none"
                    />
                    <span className="text-luxury-secondaryText font-mono">%</span>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-luxury-secondaryText italic leading-snug">
                * Note: The default 18% GST selection is for financial modeling purposes only. Final tax treatment and invoice billing will follow statutory GST mandates based on state and registration category.
              </p>
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-luxury-border p-6 sm:p-8 shadow-luxury space-y-6">
            
            <div className="pb-4 border-b border-luxury-borderLight">
              <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                Financial Summary & Forecast
              </span>
              <h3 className="text-xl font-serif text-luxury-text mt-0.5 font-normal">
                {duration}-Month Investment Projections
              </h3>
            </div>

            {/* Grand Total Box */}
            <div className="p-5 rounded-2xl bg-luxury-goldSubtle border border-luxury-goldLight space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-luxury-gold">
                Total Estimated Investment {applyGst ? '(Including GST)' : '(Pre-Tax)'}
              </div>
              <div className="text-3xl sm:text-4xl font-serif text-luxury-dark font-medium">
                {formatINR(applyGst ? totalWithTax : preTaxTotal)}
              </div>
              <div className="text-xs text-luxury-secondaryText flex items-center justify-between pt-1">
                <span>Effective Monthly Average:</span>
                <span className="font-mono font-semibold text-luxury-text">
                  {formatINR((applyGst ? totalWithTax : preTaxTotal) / duration)} / mo
                </span>
              </div>
            </div>

            {/* Immediate Cash Flow Indicators */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-luxury-secondary border border-luxury-border space-y-1">
                <span className="text-[11px] text-luxury-secondaryText block">
                  First-Month Outlay
                </span>
                <span className="text-lg font-bold font-mono text-luxury-text block">
                  {formatINR(firstMonthTotal)}
                </span>
                <span className="text-[10px] text-luxury-secondaryText">Setup + M1 Retainer + M1 Ad</span>
              </div>

              <div className="p-3.5 rounded-xl bg-luxury-secondary border border-luxury-border space-y-1">
                <span className="text-[11px] text-luxury-secondaryText block">
                  Recurring Monthly (M2+)
                </span>
                <span className="text-lg font-bold font-mono text-luxury-text block">
                  {formatINR(recurringMonthly)}
                </span>
                <span className="text-[10px] text-luxury-secondaryText">Retainer + Media Spend</span>
              </div>
            </div>

            {/* Comprehensive Line Item Breakdown */}
            <div className="space-y-2.5 text-xs text-luxury-secondaryText pt-2">
              <div className="flex items-center justify-between">
                <span>One-Time Setup Fee (S):</span>
                <span className="font-mono font-medium text-luxury-text">{formatINR(totalSetupCost)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total Agency Fees (R × {duration}):</span>
                <span className="font-mono font-medium text-luxury-text">{formatINR(totalAgencyFees)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total Media Ad Spend (A × {duration}):</span>
                <span className="font-mono font-medium text-luxury-text">{formatINR(totalAdSpend)}</span>
              </div>
              
              <div className="pt-2 border-t border-luxury-borderLight flex items-center justify-between text-luxury-text font-medium">
                <span>Total Pre-Tax Investment:</span>
                <span className="font-mono font-bold">{formatINR(preTaxTotal)}</span>
              </div>

              {applyGst && (
                <div className="flex items-center justify-between text-luxury-secondaryText">
                  <span>Estimated GST ({gstPercent}%):</span>
                  <span className="font-mono">{formatINR(estimatedTax)}</span>
                </div>
              )}

              {applyGst && (
                <div className="pt-1.5 border-t border-dashed border-luxury-border flex items-center justify-between text-luxury-dark font-bold text-sm">
                  <span>Total Including GST:</span>
                  <span className="font-mono text-luxury-gold">{formatINR(totalWithTax)}</span>
                </div>
              )}
            </div>

            {/* View in Proposal Summary */}
            <a
              href="#proposal-summary"
              className="w-full py-3.5 px-4 rounded-xl font-medium text-xs uppercase tracking-wider text-white bg-luxury-dark hover:bg-luxury-text transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Review in Proposal Summary</span>
              <ArrowRight className="w-4 h-4 text-luxury-gold" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
