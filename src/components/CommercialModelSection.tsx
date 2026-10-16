import React from 'react';
import { growthCommercialCardsData } from '../data/growthProposalData';
import { Check, Info, ArrowRight, ShieldCheck, Sparkles, Clock, AlertCircle } from 'lucide-react';

interface CommercialModelSectionProps {
  onOpenDiscussion: (topic: string) => void;
  onScrollToDeliverables: () => void;
}

export const CommercialModelSection: React.FC<CommercialModelSectionProps> = ({
  onOpenDiscussion,
  onScrollToDeliverables,
}) => {
  return (
    <section id="commercial-model" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>Commercial Model & Fee Structure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Engagement Architecture
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A three-tier structure that clearly separates setup onboarding, monthly content execution, and client media spend with zero hidden markups.
          </p>
        </div>

        {/* 3 Commercial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {growthCommercialCardsData.map((card) => {
            const isRetainer = card.id === 'retainer';
            
            return (
              <div
                key={card.id}
                className={`flex flex-col justify-between rounded-2xl bg-white border transition-all duration-200 ${
                  isRetainer
                    ? 'border-teal-600 shadow-card-hover ring-1 ring-teal-500/20 relative'
                    : 'border-slate-200 shadow-card hover:border-slate-300'
                }`}
              >
                {/* Highlight Badge for Core Service */}
                {isRetainer && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                    Core Monthly Engagement
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {card.badge}
                    </span>
                    {isRetainer ? (
                      <span className="inline-flex items-center text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        Active Retainer
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium">
                        {card.priceSubtext}
                      </span>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>

                  {/* Price Display */}
                  <div className="mt-4 pb-4 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-slate-900">
                      {card.priceDisplay}
                    </div>
                    {card.priceSubtext && (
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        {card.priceSubtext}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                    {card.description}
                  </p>

                  {/* Highlight Callout */}
                  {card.keyHighlight && (
                    <div className={`mt-4 p-3 rounded-lg text-xs font-medium flex items-start space-x-2 ${
                      isRetainer 
                        ? 'bg-teal-50 text-teal-900 border border-teal-200' 
                        : 'bg-slate-50 text-slate-700 border border-slate-200'
                    }`}>
                      <Info className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                      <span>{card.keyHighlight}</span>
                    </div>
                  )}

                  {/* Deliverables List */}
                  <div className="mt-6">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Included Scope:
                    </div>
                    <ul className="space-y-2.5">
                      {card.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                          <Check className={`w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5 ${
                            isRetainer ? 'text-teal-700' : 'text-slate-500'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer / CTA Section */}
                <div className="p-6 sm:p-8 pt-0 bg-white rounded-b-2xl">
                  {/* Button */}
                  <button
                    onClick={() => {
                      if (card.id === 'retainer') {
                        onScrollToDeliverables();
                      } else {
                        onOpenDiscussion(card.title);
                      }
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 transition-all ${
                      isRetainer
                        ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-sm'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Disclaimer / Clarification */}
                  <p className="mt-3 text-[11px] text-slate-500 text-center leading-relaxed">
                    {card.disclaimer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* Commercial Transparency Note */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-slate-600 shadow-subtle">
          <AlertCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900">Commercial Separation Note:</span>{' '}
            The setup fee and media advertising spend are intentionally decoupled from the ₹10,000 monthly retainer. 
            This guarantees that monthly service fees remain 100% focused on consistent creative content production and account execution without hidden markups.
          </div>
        </div>

      </div>
    </section>
  );
};
