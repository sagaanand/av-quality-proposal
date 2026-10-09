import React from 'react';
import { proposalAgencyConfig } from '../data/proposalData';
import { ShieldCheck } from 'lucide-react';

export const ProposalSummarySection: React.FC = () => {
  return (
    <section id="proposal-summary" className="py-24 bg-luxury-secondary border-t border-luxury-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Proposal Executive Header Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-luxury-border shadow-luxury space-y-8">
          
          {/* Top Metadata Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-luxury-borderLight">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-luxury-gold">
                  Official Commercial Proposal Document
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-luxury-dark mt-1">
                Strategic Digital Growth Architecture
              </h2>
            </div>

            <div className="text-right text-xs text-luxury-secondaryText font-mono space-y-0.5">
              <div>Ref: <strong className="text-luxury-text">{proposalAgencyConfig.proposalCode}</strong></div>
              <div>Date: {proposalAgencyConfig.proposalDate}</div>
              <div className="text-[11px] text-luxury-gold">Validity: {proposalAgencyConfig.validityPeriod}</div>
            </div>
          </div>

          {/* Agency & Client Bilateral Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-luxury-secondary border border-luxury-borderLight">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-luxury-secondaryText">
                Prepared & Submitted By:
              </span>
              <h3 className="text-lg font-serif font-bold text-luxury-text">
                {proposalAgencyConfig.agencyName}
              </h3>
              <p className="text-xs text-luxury-secondaryText font-light">
                {proposalAgencyConfig.agencyDescriptor}
              </p>
            </div>

            <div className="space-y-1 sm:border-l sm:border-luxury-borderLight sm:pl-6">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-luxury-secondaryText">
                Prepared For Client:
              </span>
              <h3 className="text-lg font-serif font-bold text-luxury-dark">
                {proposalAgencyConfig.clientName}
              </h3>
              <p className="text-xs text-luxury-secondaryText font-light">
                {proposalAgencyConfig.clientDescriptor}
              </p>
            </div>
          </div>

          {/* The Three Core Questions Summary (Simple & Direct) */}
          <div className="space-y-6 pt-2">
            <div className="text-center sm:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-luxury-gold block">
                Executive Clarity Summary
              </span>
              <h3 className="text-xl font-serif text-luxury-text mt-0.5">
                The 3 Core Pillars of This Proposal
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* 1. Enna Pannaporom */}
              <div className="p-6 rounded-2xl bg-white border border-luxury-border shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-luxury-gold uppercase">Pillar 01</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-luxury-secondary text-luxury-secondaryText uppercase">Execution</span>
                </div>
                <h4 className="text-base font-serif font-bold text-luxury-dark">
                  What We Will Do
                </h4>
                <p className="text-xs text-luxury-secondaryText leading-relaxed font-light">
                  Build a high-converting landing page, launch targeted Google Search ads on high-intent keywords (ISO 9001, 27001), configure WhatsApp lead routing, and optimize campaigns weekly to filter out negative queries.
                </p>
              </div>

              {/* 2. Evlo Spend */}
              <div className="p-6 rounded-2xl bg-white border border-luxury-border shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-luxury-gold uppercase">Pillar 02</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-luxury-secondary text-luxury-secondaryText uppercase">Investment</span>
                </div>
                <h4 className="text-base font-serif font-bold text-luxury-dark">
                  How Much to Spend
                </h4>
                <p className="text-xs text-luxury-secondaryText leading-relaxed font-light">
                  <strong>₹50,000 for Month 1</strong> in Package A (₹15k setup + ₹20k retainer + ₹15k media). Month 2 & 3 ongoing is ₹35k/mo. Recommended Package B is ₹75,000 Month 1. Direct billing on ad spend with zero hidden markups.
                </p>
              </div>

              {/* 3. Enna Output */}
              <div className="p-6 rounded-2xl bg-white border border-luxury-border shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-luxury-gold uppercase">Pillar 03</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-luxury-secondary text-luxury-secondaryText uppercase">Deliverables</span>
                </div>
                <h4 className="text-base font-serif font-bold text-luxury-dark">
                  Expected Outputs
                </h4>
                <p className="text-xs text-luxury-secondaryText leading-relaxed font-light">
                  Direct inbound inquiries from corporate decision-makers, empirical Cost per Qualified Lead (CPQL) data, booked consultation scoping calls, objection insights, and a repeatable 90-day scale playbook.
                </p>
              </div>

            </div>
          </div>

          {/* Next Steps for Implementation */}
          <div className="p-6 rounded-2xl bg-luxury-ivoryLight border border-luxury-goldLight/70 space-y-3">
            <h4 className="text-sm font-serif font-bold text-luxury-dark">
              Implementation & Onboarding Protocol
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-luxury-secondaryText font-light">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-luxury-gold text-white flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">1</span>
                <span>Select preferred package (Package A, B, or C)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-luxury-gold text-white flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">2</span>
                <span>Sign service level agreement & establish ad account billing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-luxury-gold text-white flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">3</span>
                <span>14-day foundation sprint to live public launch</span>
              </div>
            </div>
          </div>

          {/* Institutional Compliance & Ethical Notice */}
          <div className="pt-4 border-t border-luxury-borderLight flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-luxury-secondaryText font-light">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-luxury-gold flex-shrink-0" />
              <span>Prepared exclusively for <strong>A V Quality Services</strong> by <strong>Digital Cake</strong>. All rights reserved.</span>
            </div>
            <div className="font-mono text-luxury-gold">
              Digital Cake Strategic Advisory
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
