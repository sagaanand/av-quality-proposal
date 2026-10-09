import React from 'react';
import { expectedOutputsData } from '../data/proposalData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

export const ExpectedOutputsSection: React.FC = () => {
  const outputMilestones = [
    {
      period: 'Days 1–14',
      stage: 'Foundation Output',
      deliverables: [
        'High-converting landing page deployed',
        'Google Ads search campaign configured',
        'Direct WhatsApp routing & lead capture active',
        'Conversion tracking tags verified'
      ]
    },
    {
      period: 'Days 15–30',
      stage: 'Inbound Demand Output',
      deliverables: [
        'First wave of qualified inbound enquiries flowing',
        'Live customer objections & price sensitivities recorded',
        'Speed-to-lead qualification rhythm established',
        'Month 1 performance baseline report delivered'
      ]
    },
    {
      period: 'Days 31–60',
      stage: 'Optimization Output',
      deliverables: [
        'Lower Cost per Qualified Lead (CPQL)',
        'Higher landing page conversion percentage',
        'Consultation booking rate improvement',
        'Identification of top 2 high-margin ISO standards'
      ]
    },
    {
      period: 'Days 61–90',
      stage: 'Commercial Scale Output',
      deliverables: [
        'Repeatable B2B client acquisition engine',
        'Comprehensive 90-day closed-deal ROI review',
        'Regional/international expansion roadmap ready',
        'Standard Operating Procedure (SOP) handed over'
      ]
    }
  ];

  return (
    <section id="expected-outputs" className="py-24 bg-white border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-goldSubtle border border-luxury-goldLight text-luxury-gold font-medium text-xs tracking-wider uppercase font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>Expected Commercial Outputs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            What Tangible Outputs Can You Expect?
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            We focus strictly on commercial outcomes that drive pipeline growth and revenue for <strong>A V Quality Services</strong>, rather than meaningless vanity impressions or casual clicks.
          </p>
        </div>

        {/* 6 Key Outputs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {expectedOutputsData.map((item, idx) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-luxury-secondary border border-luxury-border hover:border-luxury-gold/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-luxury"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-luxury-goldSubtle text-luxury-gold border border-luxury-goldLight">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-luxury-secondaryText">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-luxury-dark mb-1">
                  {item.title}
                </h3>

                <span className="inline-block text-[11px] font-semibold text-luxury-gold uppercase tracking-wider mb-3">
                  {item.metricLabel}
                </span>

                <p className="text-xs text-luxury-secondaryText leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-luxury-borderLight space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-luxury-secondaryText">Expected Delivery:</span>
                  <span className="font-mono font-semibold text-luxury-text">{item.timeframe}</span>
                </div>
                <div className="text-[11px] text-luxury-secondaryText font-light">
                  <span className="font-semibold text-luxury-green">Bottom-Line Value:</span> {item.commercialImpact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Progression Roadmap: 14 to 90 Days */}
        <div className="rounded-3xl p-7 sm:p-10 bg-luxury-secondary border border-luxury-border shadow-luxury">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-mono text-luxury-gold block">
              Timeline of Tangible Deliverables
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-luxury-text mt-1">
              Phased Output Milestones
            </h3>
            <p className="text-xs text-luxury-secondaryText max-w-xl mx-auto mt-2 font-light">
              Clear accountability showing exactly what is built, measured, and handed over across the 90 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outputMilestones.map((ms, idx) => (
              <div 
                key={ms.period}
                className="p-6 rounded-2xl bg-white border border-luxury-border shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-luxury-gold">{ms.period}</span>
                    <span className="text-[10px] text-luxury-secondaryText font-mono">Stage 0{idx + 1}</span>
                  </div>

                  <h4 className="text-sm font-serif font-bold text-luxury-text mb-4">
                    {ms.stage}
                  </h4>

                  <ul className="space-y-2.5 text-xs text-luxury-secondaryText font-light">
                    {ms.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-5 border-t border-luxury-borderLight text-[10px] text-luxury-secondaryText font-mono">
                  Verified by Digital Cake
                </div>
              </div>
            ))}
          </div>

          {/* Core Philosophy Callout */}
          <div className="mt-8 p-4 rounded-2xl bg-white border border-luxury-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-luxury-secondaryText">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-luxury-gold flex-shrink-0" />
              <span>
                <strong>Zero Speculative Promises:</strong> Digital marketing generates qualified inbound opportunities. Closed conversion depends on swift operational response and quality audit delivery.
              </span>
            </div>
            <span className="font-mono text-luxury-gold font-semibold whitespace-nowrap">
              Focus: Commercial ROI
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
