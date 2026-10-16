import React, { useState } from 'react';
import { growthVideoShowcaseCategories } from '../data/growthProposalData';
import { Play, Sparkles, CheckCircle2, Film, Layers, ShieldAlert, Clock, ArrowRight } from 'lucide-react';

export const VideoShowcaseSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(growthVideoShowcaseCategories[0].id);

  const activeCategory =
    growthVideoShowcaseCategories.find((c) => c.id === activeCategoryId) || growthVideoShowcaseCategories[0];

  return (
    <section id="ai-video-showcase" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Film className="w-3.5 h-3.5 text-teal-600" />
            <span>AI-Assisted Video Production</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI-Powered Video Content for ISO Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Make technical ISO services easier to understand through short, structured and engaging video content.
          </p>
        </div>

        {/* Monthly Allocation Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-12 shadow-card">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-teal-800/80 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Monthly Allocation Architecture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Up to 4 Short AI-Assisted Videos Per Month
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl">
                Scriptwriting, suitable AI-assisted visuals or voice synthesis, clean video editing, and subtitles/captions included within agreed complexity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 bg-slate-800/90 border border-slate-700 p-4 rounded-xl text-xs text-slate-200">
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Format: 30–60s Short Format</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>Platforms: Reels, Shorts, LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Content Categories Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {growthVideoShowcaseCategories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-teal-50/70 border-teal-600 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-bold ${isActive ? 'text-teal-700' : 'text-slate-400'}`}>
                    Category {cat.shortCode}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-teal-600' : 'bg-transparent'}`} />
                </div>
                <div className={`text-sm font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                  {cat.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Video Blueprint & Example Breakdown */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Left: Video Details & Script Architecture */}
            <div className="flex-1 space-y-6">
              
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
                  <span>Illustrative Architecture — Category {activeCategory.shortCode}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeCategory.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>

              {/* Sample Hook Box */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-subtle">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>Sample Opening Hook (0:00 - 0:05)</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 italic">
                  {activeCategory.sampleHook}
                </p>
              </div>

              {/* Core Insight & Takeaway */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-subtle">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Core Technical Angle
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeCategory.coreInsight}
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-subtle">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Target Audience
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeCategory.targetAudience}
                  </p>
                </div>
              </div>

              {/* Visual Style & Standards */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-subtle">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Visual Treatment & Animation Style
                </div>
                <p className="text-xs text-slate-600">
                  {activeCategory.visualStyle}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeCategory.sampleStandards.map((std, idx) => (
                    <span key={idx} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {std}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Mockup Preview Frame (Clearly Labeled Illustrative Example) */}
            <div className="lg:w-80 flex flex-col justify-between bg-white border border-slate-300 rounded-2xl p-5 shadow-card relative overflow-hidden">
              {/* Illustrative Label Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                  Sample Mockup Format
                </span>
                <span className="text-[10px] font-bold text-teal-700">9:16 Vertical Video</span>
              </div>

              {/* Video Player Mockup Surface */}
              <div className="my-4 aspect-[9/14] bg-slate-900 rounded-xl flex flex-col justify-between p-4 text-white relative overflow-hidden group">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />

                {/* Top Overlay */}
                <div className="relative z-20 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                    A V QUALITY SERVICES
                  </span>
                  <span className="text-[10px] text-slate-400">0:45</span>
                </div>

                {/* Center Play Indicator */}
                <div className="relative z-20 flex flex-col items-center justify-center my-auto">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                  <span className="mt-2 text-[10px] text-slate-300 font-medium tracking-wide">
                    Illustrative Concept Preview
                  </span>
                </div>

                {/* Bottom Overlay with Caption */}
                <div className="relative z-20 space-y-1.5">
                  <div className="text-[11px] font-bold text-white line-clamp-2 leading-snug">
                    {activeCategory.sampleHook}
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-slate-400">
                    <span>AI Visuals & Voice Synthesis</span>
                    <span className="text-teal-300 font-medium">WhatsApp CTA</span>
                  </div>
                </div>
              </div>

              {/* Clarification Caption */}
              <p className="text-[11px] text-slate-500 text-center leading-normal">
                Illustrative mockup. Scripts, voice treatment, and visual direction are finalized collaboratively each month.
              </p>

            </div>

          </div>
        </div>

        {/* Video Production Boundaries / Exclusions Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3 text-xs text-slate-600">
          <ShieldAlert className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900">Production Scope Boundaries:</strong>{' '}
            Videos utilize structured AI-assisted visuals, motion typography, and voice styling tailored to ISO concepts. 
            Advanced photorealistic digital avatars, on-site physical camera crews, paid third-party software subscriptions, and complex 3D rendering are excluded unless separately approved.
          </p>
        </div>

      </div>
    </section>
  );
};
