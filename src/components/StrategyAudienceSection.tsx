import React from 'react';
import { growthStrategicThemesList } from '../data/growthProposalData';
import { Target, Users, ShieldAlert, CheckCircle, ArrowRight, BookOpen, Compass } from 'lucide-react';

export const StrategyAudienceSection: React.FC = () => {
  return (
    <section id="strategy" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5 text-teal-600" />
            <span>Targeting & Content Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Focused Initial Strategy & Target Audience
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Positioning A V Quality Services through a disciplined first-month test targeting high-intent decision-makers before scaling further.
          </p>
        </div>

        {/* Priority Strategy Banner */}
        <div className="bg-white border border-teal-600/30 rounded-2xl p-6 sm:p-8 mb-12 shadow-card relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                Recommended Initial Priority
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Corporate Buyers Seeking ISO Implementation & Certification Coordination
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than diluting marketing effort across multiple retail training courses initially, we recommend focusing the first month on corporate buyers (MSME owners, operations directors, and compliance managers) who require end-to-end implementation support for vendor qualifications and supply chain tenders.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 min-w-[260px] space-y-2">
              <div className="font-bold text-slate-900 flex items-center space-x-1.5">
                <Users className="w-4 h-4 text-teal-700" />
                <span>Primary Decision Makers</span>
              </div>
              <ul className="space-y-1 text-slate-600">
                <li>• Managing Directors & Promoters</li>
                <li>• Quality Heads & Plant Managers</li>
                <li>• Supply Chain & Compliance Directors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Potential Content Themes (The 8 Topics from Prompt) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-teal-700" />
              <span>Core Content Themes & Standards Portfolio</span>
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Educating corporate buyers across technical standards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {growthStrategicThemesList.map((theme, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-subtle hover:border-teal-400 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-extrabold text-teal-700 uppercase tracking-wider mb-2">
                    Theme 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {theme.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crucial Single Audience & Single Offer Rule Note */}
        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-slate-600">
          <ShieldAlert className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900">Campaign Consolidation Principle:</strong>{' '}
            Do not create seven separate advertising campaigns by default. We start with one agreed primary audience and one priority offer during the initial phase to preserve budget efficiency. 
            Individual student training or secondary standard campaigns may be systematically added later by mutual agreement once the baseline flow is validated.
          </div>
        </div>

      </div>
    </section>
  );
};
