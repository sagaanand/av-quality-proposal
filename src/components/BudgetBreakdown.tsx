import React, { useState } from 'react';
import { 
  PieChart as PieIcon, 
  AlertTriangle 
} from 'lucide-react';

export const BudgetBreakdown: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  // Month 1 Growth Launch Breakdown (Total: ₹75,000)
  const month1Components = [
    {
      id: 'setup',
      name: 'One-Time Setup & Architecture',
      amount: 25000,
      percentage: '33.3%',
      colorHex: '#3154CF', // Royal blue
      bgClass: 'bg-royal-600',
      description: 'Brand positioning, landing page build, conversion tags, WhatsApp routing, analytics & ad assets setup.'
    },
    {
      id: 'retainer',
      name: 'Agency Management Retainer',
      amount: 25000,
      percentage: '33.3%',
      colorHex: '#0B2C48', // Dark Navy
      bgClass: 'bg-[#0B2C48]',
      description: 'Continuous campaign optimization, negative keyword filtering, 12 monthly content assets, and strategy reviews.'
    },
    {
      id: 'adspend',
      name: 'Direct Media Advertising Spend',
      amount: 25000,
      percentage: '33.3%',
      colorHex: '#F5BD3F', // Gold accent
      bgClass: 'bg-gold-500',
      description: 'Direct paid placement on Google Search targeting individuals and corporate managers actively searching for ISO training.'
    }
  ];

  // Advertising Allocation Sub-breakdown (Total: ₹25,000)
  const adSubAllocations = [
    {
      label: 'High-Intent Acquisition (Search Ads)',
      amount: 18000,
      percentage: '72%',
      colorHex: '#F5BD3F',
      bgClass: 'bg-gold-500',
      desc: 'Targeting exact commercial queries: "ISO 9001 certification cost", "ISO 27001 lead auditor training course", "ISO consulting India".'
    },
    {
      label: 'Creative & Audience Segment Testing',
      amount: 7000,
      percentage: '28%',
      colorHex: '#23B887',
      bgClass: 'bg-emerald-500',
      desc: 'Testing headline variations, regional city clusters, ad extensions, and B2B LinkedIn/Meta interest angles.'
    }
  ];

  return (
    <section className="py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <PieIcon className="w-3.5 h-3.5 text-royal-600" />
            <span>Budget Visualization</span>
          </div>

          <h2 className="text-3xl font-extrabold text-[#071C31] tracking-tight font-heading">
            Growth Launch: Pictorial Investment Breakdown
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed capital allocation for Month 1 (<strong>₹75,000 total</strong>) and the proposed advertising media split designed for disciplined capital efficiency.
          </p>
        </div>

        {/* Dual Visual Panels: Month 1 Macro vs Ad Micro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Macro Month 1 Allocation (75,000) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-royal-600 uppercase tracking-wider">
                  Macro Allocation (Month 1)
                </span>
                <h3 className="text-xl font-bold text-[#071C31] font-heading mt-0.5">
                  First-Month Total: ₹75,000
                </h3>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-gold-400 text-navy-950">
                Balanced 1:1:1
              </span>
            </div>

            {/* Segmented Horizontal Bar */}
            <div>
              <div className="h-5 w-full rounded-full bg-slate-200 overflow-hidden flex shadow-inner">
                {month1Components.map((comp) => (
                  <div
                    key={comp.id}
                    style={{ width: '33.333%' }}
                    className={`${comp.bgClass} transition-all duration-300 hover:opacity-90 relative cursor-pointer`}
                    onMouseEnter={() => setActiveSegment(comp.id)}
                    onMouseLeave={() => setActiveSegment(null)}
                    title={`${comp.name}: ₹${comp.amount.toLocaleString('en-IN')}`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>Setup: 33.3%</span>
                <span>Retainer: 33.3%</span>
                <span>Ad Spend: 33.3%</span>
              </div>
            </div>

            {/* Segment Details */}
            <div className="space-y-3.5 pt-2">
              {month1Components.map((comp) => {
                const isHovered = activeSegment === comp.id;
                return (
                  <div
                    key={comp.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isHovered 
                        ? 'bg-white border-royal-400 shadow-sm' 
                        : 'bg-white/80 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: comp.colorHex }} 
                        />
                        <span className="text-xs font-bold text-[#071C31]">{comp.name}</span>
                      </div>
                      <span className="text-xs font-extrabold text-[#071C31] font-mono">
                        ₹{comp.amount.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal pl-5">
                      {comp.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
              <span>Month 2 & 3 Ongoing Total:</span>
              <span className="font-bold text-slate-800 font-mono">₹50,000 / month (No setup fee)</span>
            </div>
          </div>

          {/* Right Panel: Micro Advertising Allocation (₹25,000) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[#071C31] text-white border border-navy-800 shadow-premium space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  Advertising Spend Split
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                  Monthly Ad Media: ₹25,000
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-navy-800 text-slate-300 border border-navy-700">
                100% Client Billed
              </span>
            </div>

            {/* Segmented Horizontal Bar for Ad Spend */}
            <div>
              <div className="h-5 w-full rounded-full bg-navy-900 overflow-hidden flex shadow-inner">
                <div 
                  style={{ width: '72%' }} 
                  className="bg-gold-500 hover:bg-gold-400 transition-colors cursor-pointer"
                  title="High-Intent Acquisition: ₹18,000 (72%)"
                />
                <div 
                  style={{ width: '28%' }} 
                  className="bg-emerald-500 hover:bg-emerald-400 transition-colors cursor-pointer"
                  title="Creative & Audience Testing: ₹7,000 (28%)"
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span className="text-gold-400 font-bold">High Intent: 72% (₹18,000)</span>
                <span className="text-emerald-400 font-bold">Creative Testing: 28% (₹7,000)</span>
              </div>
            </div>

            {/* Detailed Sub-allocations */}
            <div className="space-y-3.5 pt-2">
              {adSubAllocations.map((sub, i) => (
                <div 
                  key={i}
                  className="p-3.5 rounded-xl bg-navy-800/80 border border-navy-700/80 hover:border-navy-600 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: sub.colorHex }}
                      />
                      <span className="text-xs font-bold text-white">{sub.label}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-400">
                      ₹{sub.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-normal pl-5">
                    {sub.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Disclosure & Disclaimer Note */}
            <div className="p-3.5 rounded-xl bg-navy-900/90 border border-navy-700 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Proposed Starting Allocation Disclaimer</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                This ₹18,000 / ₹7,000 allocation is an <strong>illustrative starting hypothesis</strong>. Spend will be dynamically reallocated based on live search impressions, actual cost-per-click, and lead quality. <em>Digital advertising outcomes and exact volume of closed clients are not guaranteed.</em>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
