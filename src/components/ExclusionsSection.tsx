import React from 'react';
import { growthScopeExclusionsData } from '../data/growthProposalData';
import { XCircle, ShieldAlert, ArrowRight, HelpCircle } from 'lucide-react';

interface ExclusionsSectionProps {
  onOpenDiscussion: (topic: string) => void;
}

export const ExclusionsSection: React.FC<ExclusionsSectionProps> = ({ onOpenDiscussion }) => {
  return (
    <section id="exclusions" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-700" />
            <span>Scope Transparency & Boundaries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Is Not Included
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Explicit clarity on what falls outside the ₹10,000 monthly retainer to eliminate assumptions and protect both parties.
          </p>
        </div>

        {/* 11 Exclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {growthScopeExclusionsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-subtle flex items-start space-x-3.5"
            >
              <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Work Protocol Banner */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Need Additional Technical or Creative Support?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Any work outside this agreed monthly scope will be discussed, scoped, and formally quoted for written approval prior to commencement. No surprise billings or unapproved costs.
            </p>
          </div>

          <button
            onClick={() => onOpenDiscussion('Additional Custom Scope')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center space-x-2 self-start md:self-auto border border-slate-300"
          >
            <span>Discuss Custom Requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
