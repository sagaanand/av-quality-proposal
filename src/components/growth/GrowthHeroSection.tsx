import React from 'react';
import { growthBrandConfig } from '../../data/growthProposalData';
import { ArrowDown, CheckCircle2, Sparkles, Layers, Calendar } from 'lucide-react';

interface GrowthHeroSectionProps {
  onExploreProposal: () => void;
  onViewDeliverables: () => void;
}

export const GrowthHeroSection: React.FC<GrowthHeroSectionProps> = ({
  onExploreProposal,
  onViewDeliverables,
}) => {
  return (
    <section id="hero" className="relative bg-white pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-subtle mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
            {growthBrandConfig.eyebrow}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs text-slate-500 font-medium">A V Quality Services</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl">
          Build Your Digital Presence.{' '}
          <span className="text-teal-700 underline decoration-teal-300 decoration-4 underline-offset-8">
            Turn Expertise Into Enquiries.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
          {growthBrandConfig.heroSupportingText}
        </p>

        {/* Three Commercial Highlights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl">
          
          {/* Highlight 1: ₹10,000 / month */}
          <div className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 shadow-card transition-all hover:border-teal-500/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                Monthly Retainer
              </span>
              <Calendar className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ₹10,000 <span className="text-sm font-semibold text-slate-500">/ month</span>
            </div>
            <p className="mt-2 text-xs text-slate-600">
              Ongoing content planning, 6 static creatives, 4 AI-assisted videos, and monthly reporting.
            </p>
          </div>

          {/* Highlight 2: One-time setup */}
          <div className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 shadow-card transition-all hover:border-slate-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                Onboarding Foundation
              </span>
              <Layers className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              One-Time Setup
            </div>
            <p className="mt-2 text-xs text-slate-600">
              <strong className="text-slate-900">Quoted separately</strong> based on brand messaging, asset readiness, and initial setup scope.
            </p>
          </div>

          {/* Highlight 3: Advertising budget */}
          <div className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 shadow-card transition-all hover:border-slate-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                Media Budget
              </span>
              <Sparkles className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Advertising Budget
            </div>
            <p className="mt-2 text-xs text-slate-600">
              <strong className="text-slate-900">Paid separately</strong> directly by client through own ad accounts with zero agency markup.
            </p>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-xl">
          <button
            onClick={onExploreProposal}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-teal-700 rounded-lg shadow-md transition-all group"
          >
            <span>Explore the Proposal</span>
            <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onViewDeliverables}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-subtle transition-all"
          >
            <span>View Monthly Deliverables</span>
          </button>
        </div>

        {/* Crucial Cadence Note */}
        <div className="mt-6 flex items-start space-x-2 text-xs text-slate-600 max-w-2xl bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5">
          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong className="text-slate-900">Publishing Cadence:</strong>{' '}
            {growthBrandConfig.cadenceNotice}
          </p>
        </div>

      </div>
    </section>
  );
};
