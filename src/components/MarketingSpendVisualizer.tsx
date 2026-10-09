import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Sliders, 
  Info
} from 'lucide-react';
import { ChannelAllocationItem } from '../types';

export const MarketingSpendVisualizer: React.FC = () => {
  // Total monthly ad budget (starts at Growth Launch ₹25,000)
  const [totalAdBudget, setTotalAdBudget] = useState<number>(25000);

  // Channels state
  const [allocations, setAllocations] = useState<ChannelAllocationItem[]>([
    {
      id: 'google-search',
      name: 'Google Search Ads (High-Intent Acquisition)',
      amount: 18000,
      color: '#C6A56B', // Champagne gold
      description: 'Capturing active commercial search queries: ISO 9001 certification cost, ISO 27001 lead auditor training India, ISO consulting.'
    },
    {
      id: 'testing-retargeting',
      name: 'Creative & Audience Testing (LinkedIn / Meta)',
      amount: 7000,
      color: '#171717', // Luxury black
      description: 'Testing headlines, corporate audience cohorts, executive carousel case studies, and remarketing to visitors.'
    },
    {
      id: 'meta-ads',
      name: 'Meta Ads (Individual Enrollments)',
      amount: 0,
      color: '#686868', // Slate grey
      description: 'Course calendar promotions and weekend workshop enrollment pushes across Facebook and Instagram.'
    },
    {
      id: 'linkedin-ads',
      name: 'LinkedIn Sponsored Content',
      amount: 0,
      color: '#34765C', // Soft luxury green
      description: 'Direct C-suite and Quality Director outreach in target industrial regions (NCR, Pune, Bangalore).'
    }
  ]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  const handleChannelAmountChange = (id: string, newAmount: number) => {
    const clampedAmount = Math.max(0, Math.min(200000, newAmount));
    setAllocations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, amount: clampedAmount } : item))
    );
  };

  const handleResetIllustrative = () => {
    setTotalAdBudget(25000);
    setAllocations([
      {
        id: 'google-search',
        name: 'Google Search Ads (High-Intent Acquisition)',
        amount: 18000,
        color: '#C6A56B',
        description: 'Capturing active commercial search queries: ISO 9001 certification cost, ISO 27001 lead auditor training India, ISO consulting.'
      },
      {
        id: 'testing-retargeting',
        name: 'Creative & Audience Testing (LinkedIn / Meta)',
        amount: 7000,
        color: '#171717',
        description: 'Testing headlines, corporate audience cohorts, executive carousel case studies, and remarketing to visitors.'
      },
      {
        id: 'meta-ads',
        name: 'Meta Ads (Individual Enrollments)',
        amount: 0,
        color: '#686868',
        description: 'Course calendar promotions and weekend workshop enrollment pushes across Facebook and Instagram.'
      },
      {
        id: 'linkedin-ads',
        name: 'LinkedIn Sponsored Content',
        amount: 0,
        color: '#34765C',
        description: 'Direct C-suite and Quality Director outreach in target industrial regions (NCR, Pune, Bangalore).'
      }
    ]);
  };

  // Calculations
  const totalAllocated = allocations.reduce((sum, item) => sum + item.amount, 0);
  const diff = totalAdBudget - totalAllocated;
  // Validations
  const isExact = diff === 0;
  const isOverAllocated = diff < 0;
  const isUnderAllocated = diff > 0;

  return (
    <section className="py-24 bg-luxury-secondary border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <Sliders className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Interactive Channel Strategy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Marketing Spend Allocation Visualizer
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed">
            Distribute your media budget among commercial search channels, corporate LinkedIn ads, Meta outreach, and retargeting tests. Validate exact allocation discipline prior to launch.
          </p>
        </div>

        {/* Total Ad Budget Input Card */}
        <div className="max-w-3xl mx-auto p-6 sm:p-7 rounded-3xl bg-white border border-luxury-border shadow-luxury mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                Monthly Advertising Spend Pool
              </span>
              <h3 className="text-xl font-serif text-luxury-text mt-0.5">
                Total Budget: {formatINR(totalAdBudget)} / month
              </h3>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 bg-luxury-secondary px-3 py-1.5 rounded-xl border border-luxury-border">
                <span className="text-xs text-luxury-secondaryText font-mono">₹</span>
                <input
                  type="number"
                  min={5000}
                  max={200000}
                  step={2500}
                  value={totalAdBudget}
                  onChange={(e) => setTotalAdBudget(Math.max(0, Number(e.target.value) || 0))}
                  className="w-28 text-right font-mono font-bold text-sm bg-transparent focus:outline-none text-luxury-text"
                />
              </div>

              <button
                type="button"
                onClick={handleResetIllustrative}
                className="p-2 text-xs text-luxury-secondaryText hover:text-luxury-text bg-luxury-secondary hover:bg-luxury-ivoryLight rounded-xl border border-luxury-border transition-colors"
                title="Reset to illustrative ₹18k / ₹7k allocation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Budget Allocation Balance Status Indicator */}
          <div className="mt-5 pt-5 border-t border-luxury-borderLight">
            {isExact && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-luxury-greenLight border border-luxury-green/20 text-luxury-green text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Perfect Allocation: 100% of your {formatINR(totalAdBudget)} monthly budget is assigned across channels.</span>
              </div>
            )}

            {isOverAllocated && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                <span>
                  Allocation Warning: You have allocated {formatINR(totalAllocated)}, which exceeds your monthly budget by{' '}
                  <strong className="font-mono">{formatINR(Math.abs(diff))}</strong>. Please reduce channel amounts.
                </span>
              </div>
            )}

            {isUnderAllocated && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                <Info className="w-4 h-4 flex-shrink-0 text-amber-600" />
                <span>
                  Unallocated Reserve: You have <strong className="font-mono">{formatINR(diff)}</strong> remaining of your {formatINR(totalAdBudget)} monthly budget.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Visualizer Grid: Interactive Sliders + Visual Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Channel Sliders Column */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-luxury-border p-6 sm:p-8 shadow-luxury space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold block">
              Channel-by-Channel Spend Allocation
            </span>

            <div className="space-y-6">
              {allocations.map((ch) => {
                const percentOfBudget = totalAdBudget > 0 ? Math.round((ch.amount / totalAdBudget) * 100) : 0;

                return (
                  <div key={ch.id} className="p-4 rounded-2xl bg-luxury-secondary border border-luxury-borderLight space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: ch.color }}
                        />
                        <span className="text-xs font-bold text-luxury-text">{ch.name}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-luxury-secondaryText font-mono">{percentOfBudget}%</span>
                        <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-lg border border-luxury-border">
                          <span className="text-xs text-luxury-secondaryText font-mono">₹</span>
                          <input
                            type="number"
                            min={0}
                            max={totalAdBudget}
                            step={1000}
                            value={ch.amount}
                            onChange={(e) => handleChannelAmountChange(ch.id, Number(e.target.value) || 0)}
                            className="w-20 text-right font-mono font-bold text-xs bg-transparent focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <input
                      type="range"
                      min={0}
                      max={totalAdBudget}
                      step={500}
                      value={ch.amount}
                      onChange={(e) => handleChannelAmountChange(ch.id, Number(e.target.value))}
                      className="w-full accent-[#C6A56B] h-1.5 bg-luxury-borderLight rounded-lg cursor-pointer"
                    />

                    <p className="text-[11px] text-luxury-secondaryText leading-relaxed">
                      {ch.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Distribution & Editorial Rationale Column */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-luxury-border p-6 sm:p-8 shadow-luxury space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold block">
              Allocation Architecture & Proportions
            </span>

            {/* Segmented Horizontal Bar */}
            <div className="space-y-2">
              <div className="h-6 w-full rounded-full bg-luxury-borderLight overflow-hidden flex shadow-inner">
                {allocations.map((ch) => {
                  const widthPercent = totalAdBudget > 0 ? (ch.amount / totalAdBudget) * 100 : 0;
                  if (widthPercent <= 0) return null;
                  return (
                    <div
                      key={ch.id}
                      style={{ 
                        width: `${Math.min(100, widthPercent)}%`, 
                        backgroundColor: ch.color 
                      }}
                      className="transition-all duration-300 relative group cursor-pointer"
                      title={`${ch.name}: ${formatINR(ch.amount)} (${Math.round(widthPercent)}%)`}
                    />
                  );
                })}
              </div>

              <div className="flex justify-between text-[11px] font-mono text-luxury-secondaryText">
                <span>Total Assigned: {formatINR(totalAllocated)}</span>
                <span>Budget: {formatINR(totalAdBudget)}</span>
              </div>
            </div>

            {/* Channel Legend & Contribution */}
            <div className="space-y-2.5 pt-2 border-t border-luxury-borderLight">
              {allocations.map((ch) => {
                const percent = totalAdBudget > 0 ? ((ch.amount / totalAdBudget) * 100).toFixed(1) : '0';
                return (
                  <div key={ch.id} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ch.color }} />
                      <span className="text-luxury-text truncate max-w-[180px]">{ch.name.split('(')[0]}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-luxury-secondaryText">{percent}%</span>
                      <span className="font-mono font-bold text-luxury-text">{formatINR(ch.amount)}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mandatory Strategic Disclosures */}
            <div className="p-4 rounded-2xl bg-luxury-secondary border border-luxury-borderLight space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-luxury-text">
                <AlertTriangle className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span>Strategic Channel Discipline Note</span>
              </div>
              <p className="text-[11px] text-luxury-secondaryText leading-relaxed">
                The initial <strong>₹18,000 / ₹7,000 split</strong> is an illustrative proposal, not a guaranteed optimal allocation. We strongly advise <em>against spending across all four channels simultaneously</em> with an initial launch budget. Real-world capital must concentrate strictly on validated commercial search demand.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
