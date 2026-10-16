import React from 'react';
import { growthExecutionRoadmapData } from '../data/growthProposalData';
import { Clock, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Flag } from 'lucide-react';

export const ExecutionRoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-teal-600" />
            <span>Structured Implementation Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            30-Day Execution Roadmap
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A methodical four-phase onboarding and launch progression to transition from foundational setup to disciplined, ongoing publishing.
          </p>
        </div>

        {/* 4 Phases Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {growthExecutionRoadmapData.map((phase) => (
            <div
              key={phase.phaseNumber}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:border-teal-500/50 hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                {/* Phase Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="text-xs font-extrabold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200 uppercase tracking-wider">
                    {phase.daysRange}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    Phase 0{phase.phaseNumber}
                  </span>
                </div>

                {/* Phase Title & Summary */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {phase.summary}
                </p>

                {/* Milestones List */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Key Activities:
                  </span>
                  <ul className="space-y-2">
                    {phase.milestones.map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Client Action Needed Footnote */}
              <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Client Collaboration:
                </span>
                <p className="text-[11px] text-slate-700 leading-tight">
                  {phase.clientActionNeeded}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Integrity Note (No Guaranteed Results) */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-slate-600 shadow-subtle">
          <AlertCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900">Commercial Integrity & Performance Standard:</strong>{' '}
            Digital marketing is a systematic discipline of market positioning and consistent execution. 
            We do not promise a fixed number of leads, conversions, or sales. 
            Our commitment is to disciplined execution, high-grade creative production, regular calendar adherence, and honest performance reporting.
          </div>
        </div>

      </div>
    </section>
  );
};
