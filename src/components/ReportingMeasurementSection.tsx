import React from 'react';
import { growthSampleReportMetrics } from '../data/growthProposalData';
import { BarChart3, AlertCircle, TrendingUp, CheckCircle, FileText, ArrowUpRight, Compass } from 'lucide-react';

export const ReportingMeasurementSection: React.FC = () => {
  return (
    <section id="reporting" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-teal-600" />
            <span>Measurement & Review Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Reporting & Measurement Preview
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every monthly retainer concludes with an executive review report providing transparent visibility into publishing compliance, audience reach, and enquiry trends.
          </p>
        </div>

        {/* Sample Report Mockup Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card">
          
          {/* Report Top Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-slate-900 text-white px-2.5 py-0.5 rounded">
                  Sample Illustrative Report
                </span>
                <span className="text-xs text-slate-500">Cycle: Monthly Review</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                A V Quality Services — Monthly Performance Summary
              </h3>
            </div>

            <div className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-2 rounded-xl self-start sm:self-auto shadow-subtle">
              <span className="font-semibold text-slate-700 block">Deliverable Status:</span>
              <span className="text-teal-700 font-bold">10/10 Content Pieces Released</span>
            </div>
          </div>

          {/* 6 Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {growthSampleReportMetrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                    {metric.sampleValue}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {metric.definition}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-teal-800 font-medium">
                  {metric.benchmarkContext}
                </div>
              </div>
            ))}
          </div>

          {/* Qualitative Observations & Recommendations Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Lead-Quality Observations */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-subtle">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="w-4 h-4 text-teal-700" />
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Lead-Quality Observations (Illustrative)
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li>• Corporate inquiries for ISO 9001 and ISO 14001 showed highest response rate from regional manufacturing hubs.</li>
                <li>• Video explaining tender disqualification risks generated 65% of all WhatsApp conversation starts.</li>
                <li>• Qualification template successfully filtered individual student inquiries from high-value enterprise consulting requests.</li>
              </ul>
            </div>

            {/* Recommendations for Next Month */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-subtle">
              <div className="flex items-center space-x-2 mb-3">
                <Compass className="w-4 h-4 text-teal-700" />
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Strategic Recommendations for Next Month
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li>• Increase proportion of FAQ videos addressing compliance timelines and audit preparation.</li>
                <li>• Test secondary priority campaign on ISO/IEC 27001 tailored specifically to local IT service vendors.</li>
                <li>• Refresh static creative formats to highlight client sector relevance (automotive supply, precision machining).</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Reporting Disclaimer */}
        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-slate-600">
          <AlertCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900">Illustrative Data Transparency:</strong>{' '}
            All numbers shown in this preview are clearly labelled illustrative placeholders demonstrating reporting structure and depth. 
            Real monthly reporting reflects actual verified analytics from Meta Ads Manager, LinkedIn Campaign Manager, and WhatsApp conversation logs. We never fabricate performance statistics.
          </p>
        </div>

      </div>
    </section>
  );
};
