import React from 'react';
import { objectivesData } from '../data/proposalData';
import { IconHelper } from './IconHelper';
import { 
  ArrowRight, 
  Layers, 
  Target, 
  Users, 
  PhoneCall, 
  BarChart, 
  RefreshCw,
  Sparkles
} from 'lucide-react';

export const ObjectivesSection: React.FC = () => {
  const flowSteps = [
    {
      num: '01',
      title: 'Brand Foundation',
      desc: 'Positioning & editorial landing assets',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Audience Targeting',
      desc: 'B2B search & corporate decision-makers',
      icon: Target,
    },
    {
      num: '03',
      title: 'Lead Generation',
      desc: 'Inquiry forms & direct WhatsApp routing',
      icon: Users,
    },
    {
      num: '04',
      title: 'Sales Follow-up',
      desc: '15-minute qualification & scoping call',
      icon: PhoneCall,
    },
    {
      num: '05',
      title: 'Measurement',
      desc: 'Cost per qualified lead & pipeline ROI',
      icon: BarChart,
    },
    {
      num: '06',
      title: 'Optimization',
      desc: 'Continuous keyword & creative tuning',
      icon: RefreshCw,
    }
  ];

  return (
    <section id="strategy" className="py-24 bg-luxury-secondary border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Commercial Strategy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Strategic Objectives & Client Acquisition Engine
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            Every rupee of marketing capital invested is structured to simultaneously build long-term institutional authority and capture immediate, high-margin sales demand.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {objectivesData.map((obj, i) => (
            <div
              key={obj.id}
              className="p-7 rounded-3xl bg-white border border-luxury-border hover:border-luxury-gold/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-luxury"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-luxury-secondary border border-luxury-border flex items-center justify-center text-luxury-gold shadow-xs">
                    <IconHelper name={obj.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium text-luxury-secondaryText">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-luxury-dark mb-1">
                  {obj.title}
                </h3>

                <p className="text-xs font-semibold text-luxury-gold uppercase tracking-wider mb-3">
                  {obj.tagline}
                </p>

                <p className="text-xs text-luxury-secondaryText leading-relaxed mb-5 font-light">
                  {obj.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-luxury-borderLight text-[11px] text-luxury-secondaryText">
                <span className="font-semibold text-luxury-text">Deliverable:</span> {obj.deliverableSnippet}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Revenue Engine Flow Diagram */}
        <div className="rounded-3xl p-7 sm:p-9 bg-white border border-luxury-border shadow-luxury">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-mono text-luxury-gold block">
              Systematic Inbound Engine
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-luxury-text mt-1">
              Closed-Loop Client Acquisition Flow
            </h3>
            <p className="text-xs text-luxury-secondaryText max-w-xl mx-auto mt-2 font-light">
              From the initial commercial search query to closed consulting retainers and continuous campaign optimization.
            </p>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-2">
            {flowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.num} className="relative group">
                  <div className="p-4.5 rounded-2xl bg-luxury-secondary border border-luxury-border hover:border-luxury-gold/50 transition-all flex flex-col items-center text-center h-full">
                    
                    {/* Step Number */}
                    <div className="w-7 h-7 rounded-full bg-white border border-luxury-border flex items-center justify-center text-[11px] font-mono font-bold text-luxury-gold mb-2.5 shadow-xs">
                      {step.num}
                    </div>

                    {/* Step Icon */}
                    <div className="w-9 h-9 rounded-xl bg-white border border-luxury-border flex items-center justify-center text-luxury-gold mb-2.5 shadow-xs">
                      <StepIcon className="w-4 h-4" />
                    </div>

                    <h4 className="text-xs font-serif font-bold text-luxury-text leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-[10px] text-luxury-secondaryText leading-tight mt-1 font-light">
                      {step.desc}
                    </p>
                  </div>

                  {idx < flowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-20 text-luxury-borderLight pointer-events-none">
                      <ArrowRight className="w-3.5 h-3.5 text-luxury-gold/60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Tracking Callout */}
          <div className="mt-8 pt-5 border-t border-luxury-borderLight flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-luxury-secondaryText font-light">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-luxury-green inline-block" />
              <span>Attribution Stack: Google Tag Manager + Analytics 4 + Dedicated WhatsApp Direct Links</span>
            </span>
            <span className="text-luxury-gold font-medium font-mono text-[11px]">
              Commercial Focus • Verified Inbound Lead Quality
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
