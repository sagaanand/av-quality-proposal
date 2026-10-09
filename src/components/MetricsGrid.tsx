import React from 'react';
import { performanceMetrics } from '../data/proposalData';
import { IconHelper } from './IconHelper';
import { LineChart, CheckCircle2, XCircle, Info } from 'lucide-react';

export const MetricsGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-secondary border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <LineChart className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Commercial Accountability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Key Performance Indicators & Baseline Framework
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            We evaluate digital marketing effectiveness on rigorous commercial metrics rather than vanity impressions, follower counts, or unqualified clicks.
          </p>
        </div>

        {/* Commercial Outcomes vs Vanity Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
          <div className="p-6 rounded-3xl bg-luxury-secondary border border-luxury-border shadow-xs flex items-start gap-4">
            <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-luxury-text uppercase tracking-wider">
                Vanity Metrics (Avoid Prioritizing)
              </h4>
              <p className="text-xs text-luxury-secondaryText mt-1.5 leading-relaxed font-light">
                Gross impressions, social likes, untargeted web traffic, and bulk clicks that fail to generate genuine conversations with qualified decision-makers.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-luxury-secondary border border-luxury-border shadow-xs flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 text-luxury-green flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-luxury-text uppercase tracking-wider">
                Commercial Indicators (What We Optimize)
              </h4>
              <p className="text-xs text-luxury-secondaryText mt-1.5 leading-relaxed font-light">
                Cost per qualified lead, booked discovery consultations, proposal win rates, customer acquisition payback velocity, and gross margin contribution.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceMetrics.map((metric, idx) => (
            <div
              key={metric.title}
              className="p-7 rounded-3xl bg-luxury-secondary/70 border border-luxury-border hover:border-luxury-gold/50 shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-luxury-border flex items-center justify-center text-luxury-gold shadow-xs">
                    <IconHelper name={metric.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-luxury-secondaryText">
                    KPI 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-luxury-dark mb-2">
                  {metric.title}
                </h3>

                <p className="text-xs text-luxury-secondaryText leading-relaxed mb-5 font-light">
                  {metric.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-luxury-borderLight text-[11px] text-luxury-secondaryText">
                <span className="font-semibold text-luxury-green">Business Value:</span> {metric.commercialValue}
              </div>
            </div>
          ))}
        </div>

        {/* Baseline Establishment Disclaimer */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-luxury-secondary border border-luxury-border text-center text-xs text-luxury-secondaryText font-light flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-luxury-gold flex-shrink-0" />
          <span>
            Initial 30-day campaigns are used to establish an empirical performance baseline. We do not manufacture fictitious historic benchmarks or promise speculative quotas prior to live testing.
          </span>
        </div>

      </div>
    </section>
  );
};
