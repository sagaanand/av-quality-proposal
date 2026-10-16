import React from 'react';
import { growthDeliverablesData } from '../data/growthProposalData';
import { 
  Image, 
  Video, 
  Calendar, 
  Share2, 
  PenTool, 
  Target, 
  FileText, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'static-creatives': <Image className="w-5 h-5 text-teal-700" />,
  'ai-videos': <Video className="w-5 h-5 text-teal-700" />,
  'calendar': <Calendar className="w-5 h-5 text-teal-700" />,
  'platforms': <Share2 className="w-5 h-5 text-teal-700" />,
  'copywriting': <PenTool className="w-5 h-5 text-teal-700" />,
  'campaign-support': <Target className="w-5 h-5 text-teal-700" />,
  'monthly-report': <FileText className="w-5 h-5 text-teal-700" />
};

export const MonthlyDeliverablesSection: React.FC = () => {
  return (
    <section id="deliverables" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>Monthly Engagement Scope</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Scope of Monthly Deliverables
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every deliverable under the ₹10,000 monthly retainer is defined with clear allocations, upper quantity limits, and scheduled execution cycles.
          </p>
        </div>

        {/* Deliverables Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {growthDeliverablesData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-500/50 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Count */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-subtle">
                    {iconMap[item.id] || <CheckCircle2 className="w-5 h-5 text-teal-700" />}
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                      {item.count}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 block">
                      {item.unit}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Delivery Frequency Pill */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Frequency:</span>
                <span className="text-right font-medium text-teal-900">{item.frequency}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clarification & Approval Note */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-subtle">
            <AlertCircle className="w-5 h-5 text-slate-700" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Deliverable Alignment & Approval Clause:</strong>{' '}
            Deliverable figures represent maximum monthly allocations (&ldquo;Up to&rdquo;). 
            Final content topics, formats, duration, and publishing dates are agreed in the monthly calendar and depend on timely client reviews and approvals.
          </div>
        </div>

      </div>
    </section>
  );
};
