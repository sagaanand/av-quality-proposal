import React, { useState } from 'react';
import { faqItems } from '../data/proposalData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white border-b border-luxury-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-secondary border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Clarifications & Boundaries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            Essential operational details regarding 14-day launch requirements, non-guaranteed outcome ethics, ad spend separation, and 90-day next steps.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen 
                    ? 'bg-luxury-ivoryLight border-luxury-gold shadow-sm' 
                    : 'bg-white border-luxury-border hover:border-luxury-borderLight shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-luxury-dark">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-luxury-gold text-white rotate-180' : 'bg-luxury-secondary text-luxury-secondaryText'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-luxury-secondaryText leading-relaxed border-t border-luxury-borderLight pt-4 font-light">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Question Box */}
        <div className="mt-12 text-center text-xs text-luxury-secondaryText font-light flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4 text-luxury-gold" />
          <span>Have a custom question not covered here? We can clarify during the proposal review meeting.</span>
        </div>

      </div>
    </section>
  );
};
